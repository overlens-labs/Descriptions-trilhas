const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {messages,root} = require('./conferir.cjs');
const base = path.resolve(__dirname,'..');
const data = JSON.parse(fs.readFileSync(path.join(__dirname,'fontes.json'),'utf8'));
const errors = [];
const allMessages = Object.fromEntries(['01','02'].map(day=>[day,messages(day)]));
const check = (ok,message)=>{if(!ok) errors.push(message);};
const canonical = url => url.includes('docs.google.com/document/d/') ? url.match(/https:\/\/docs\.google\.com\/document\/d\/[^/]+/)[0] : url.replace('https://overlens.com.br/','https://www.overlens.com.br/').replace(/\/$/,'');
for (const r of data.resources) {
  for (const ref of r.refs) {
    const message = allMessages[ref.day].find(m=>m.line===ref.line);
    check(!!message,'Fonte ausente: '+r.id+' L'+ref.line);
    if (!message) continue;
    check(message.sender===ref.sender&&message.time===ref.time,'Autor/horario divergente: '+r.id+' L'+ref.line);
    check(!message.reaction,'Fonte e reacao: '+r.id+' L'+ref.line);
    const matchUrl = r.id==='motion' ? message.body.includes('projects.motionapp.com') : message.urls.some(url=>canonical(url)===canonical(r.url));
    check(matchUrl,'URL nao encontrado na fonte: '+r.id+' L'+ref.line);
  }
}
const mapped = new Set(data.resources.map(r=>canonical(r.url)));
for(const m of Object.values(allMessages).flat().filter(m=>m.staff&&!m.reaction))
  for(const url of m.urls) check(mapped.has(canonical(url)),'URL da equipe nao catalogado: '+url);
const expected = Array.from({length:25},(_,i)=>'A'+String(i+1).padStart(2,'0'));
check(JSON.stringify(data.lessons.map(l=>l.id))===JSON.stringify(expected),'Aulas ausentes ou fora de ordem');
for(const l of data.lessons) {
 check(fs.existsSync(path.join(root,l.file)),'Transcricao ausente: '+l.id);
 check(fs.existsSync(path.join(base,l.path)),'Ficha ausente: '+l.id);
 for(const rid of [...l.primary,...l.support,...l.supplement]) check(data.resources.some(r=>r.id===rid),'Recurso desconhecido: '+rid);
 for(const pid of l.prompts) check(data.prompts.some(p=>p.id===pid),'Prompt desconhecido: '+pid);
}
for(const p of data.prompts)check(fs.existsSync(path.join(base,p.path)),'Prompt ausente: '+p.id);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(base);
let links=0;
for(const file of files.filter(f=>/\.(md|html)$/.test(f))) {
 const contents=fs.readFileSync(file,'utf8');
 const pattern=file.endsWith('.html')?/href="([^"]+)"/g:/\[[^\]]+\]\(([^)]+)\)/g;
 for(const match of contents.matchAll(pattern)) {
  const href=match[1].replaceAll('&amp;','&');
  if(/^(https?:|#|mailto:)/.test(href)) continue;
  let target;try{target=decodeURIComponent(href.split('#')[0]);}catch{errors.push('URL local invalido: '+href);continue;}
  check(fs.existsSync(path.resolve(path.dirname(file),target)),'Link local quebrado em '+path.basename(file)+': '+href);links++;
 }
}
const html=fs.readFileSync(path.join(base,'Abrir materiais.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
check(new Set(ids).size===ids.length,'ID HTML duplicado');
check((html.match(/class="lesson"/g)||[]).length===25,'HTML nao contem 25 aulas');
check((html.match(/class="prompt"/g)||[]).length===11,'HTML nao contem todos os usos dos 10 prompts (P18 em duas aulas)');
for(const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)){try{new vm.Script(match[1]);}catch(e){errors.push('JavaScript invalido: '+e.message);}}
const crypto=require('node:crypto');
const migration=JSON.parse(fs.readFileSync(path.join(__dirname,'reorganizacao.json'),'utf8'));
for(const entry of migration.moves) {
 const filename=path.join(root,entry.target);
 check(fs.existsSync(filename),'Original movido ausente: '+entry.target);
 if(fs.existsSync(filename))check(crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex')===entry.sha256,'Conteudo original alterado: '+entry.target);
}
let txtCount=0,codeBlocks=0;
for(const pair of migration.txtPairs){
 const mdFile=path.join(root,pair.md),txtFile=path.join(root,pair.txt);
 check(fs.existsSync(mdFile)&&fs.existsSync(txtFile),'Par MD/TXT incompleto: '+pair.md);
 if(!fs.existsSync(mdFile)||!fs.existsSync(txtFile))continue;
 txtCount++;
 const md=fs.readFileSync(mdFile,'utf8').replace(/\r\n/g,'\n');
 const txt=fs.readFileSync(txtFile,'utf8').replace(/\r\n/g,'\n');
 for(const match of md.matchAll(/\]\((https?:\/\/[^)\n]+)\)/g))check(txt.includes(match[1]),'URL perdido no TXT: '+pair.txt+' '+match[1]);
 for(const match of md.matchAll(/\x60{3}[^\n]*\n([\s\S]*?)\n\x60{3}/g)){
  codeBlocks++;check(txt.includes(match[1]),'Texto do prompt alterado no TXT: '+pair.txt);
 }
}
check((html.match(/>Ficha da aula em TXT<\/a>/g)||[]).length===25,'Faltam acessos TXT no HTML');
check((html.match(/>Versão TXT<\/a>/g)||[]).length===11,'Faltam acessos TXT de prompts no HTML');
const rootIndex=fs.readFileSync(path.join(root,'00 - LEIA-ME.md'),'utf8');
for(const match of rootIndex.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)){
 check(fs.existsSync(path.join(root,decodeURIComponent(match[1]))),'Link quebrado no indice da raiz: '+match[1]);
}
const totals={aulas:data.lessons.length,prompts:data.prompts.length,referencias:data.resources.length,fontesVerificadas:data.resources.reduce((n,r)=>n+r.refs.length,0),linksLocaisVerificados:links,originaisPreservados:migration.moves.length,paresMdTxt:txtCount,textosDePromptsPreservados:codeBlocks,arquivos:files.length,erros:errors};
console.log(JSON.stringify(totals,null,2));
process.exitCode=errors.length?1:0;
