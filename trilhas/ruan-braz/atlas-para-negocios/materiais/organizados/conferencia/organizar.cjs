const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const base=path.resolve(__dirname,'../../..');
const out='materiais/organizados/';
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const rel=abs=>path.relative(base,abs).split(path.sep).join('/');
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const read=file=>fs.readFileSync(path.join(base,file),'utf8').replace(/\r\n/g,'\n');
const encode=s=>s.split('/').map(encodeURIComponent).join('/');
const refs=new Set(['Pendencias.md','Materiais compartilhados.md','Links administrativos.md','Catalogo de links.csv']);
const generated=walk(path.join(base,'materiais','organizados')).filter(f=>!rel(f).includes('/_conferencia/')).map(rel);
const originals=fs.readdirSync(base).filter(f=>/\bA\d\d - .+\.txt$/.test(f));
const rawChats=['01','02'].flatMap(d=>walk(path.join(base,'materiais','materiais dia '+d)).map(rel));
const map=new Map();
for(const f of originals){
 const n=Number(f.match(/\bA(\d\d) -/)[1]);
 map.set(f,'Transcrições/'+(n<=12?'Dia 01':n<=24?'Dia 02':'Complementares')+'/'+f);
}
for(const f of rawChats)map.set(f,f.replace(/materiais\/materiais dia (0[12])\//,'materiais/Fontes originais/Dia $1/'));
for(const f of generated){
 let dest=f;
 if(/\/(Dia 01|Dia 02|Complementares)\//.test(f)&&f.endsWith('.md'))dest=f.replace(/\/(Dia 01|Dia 02|Complementares)\//,'/$1/MD/');
 if(refs.has(path.posix.basename(f)))dest=out+'Referencias/'+path.posix.basename(f);
 if(dest!==f)map.set(f,dest);
}
const txtMap=new Map();
for(const f of generated.filter(f=>f.endsWith('.md'))){
 const dest=map.get(f)||f;
 txtMap.set(dest,dest.replace(/\/MD\//,'/TXT/').replace(/\.md$/,'.txt'));
}
function links(text,fn){
 const fence=/^(\x60{3,}|~{3,})/;
 let fenced=false,marker='';
 return text.split('\n').map(line=>{
  const fm=line.match(fence);
  if(fm){if(!fenced){fenced=true;marker=fm[1][0];}else if(fm[1][0]===marker)fenced=false;return line;}
  if(fenced)return line;
  const spans=[];
  for(let i=0;i<line.length;i++){
   if(line[i]!=='[')continue;
   let depth=1,j=i+1;
   for(;j<line.length&&depth;j++){if(line[j]==='[')depth++;else if(line[j]===']')depth--;}
   if(depth||line[j]!=='(')continue;
   let k=j+1,paren=1;
   for(;k<line.length&&paren;k++){if(line[k]==='(')paren++;else if(line[k]===')')paren--;}
   if(paren)continue;
   spans.push({start:i,end:k,label:line.slice(i+1,j-1),href:line.slice(j+1,k-1)});
   i=k-1;
  }
  for(const s of spans.reverse())line=line.slice(0,s.start)+fn(s.label,s.href)+line.slice(s.end);
  return line;
 }).join('\n');
}
function rebaseHref(href,from,to,txt=false){
 if(/^(https?:|mailto:|#|data:)/.test(href))return href;
 const end=href.search(/[?#]/),raw=end<0?href:href.slice(0,end),suffix=end<0?'':href.slice(end);
 const target=path.posix.normalize(path.posix.join(path.posix.dirname(from),decodeURIComponent(raw)));
 let mapped=map.get(target)||target;
 if(txt)mapped=txtMap.get(mapped)||mapped;
 return encode(path.posix.relative(path.posix.dirname(to),mapped))+suffix;
}
const changes=[];
for(const f of generated){
 const dest=map.get(f)||f;
 let content=read(f),original=content;
 if(f.endsWith('.md')){
  content=links(content,(label,href)=>'['+label+']('+rebaseHref(href,f,dest)+')');
  if(f===out+'00 - LEIA-ME.md'){
   const section=[
    '## Versões MD e TXT',
    '',
    '- [Dia 01 — Markdown](Dia%2001/MD/00%20-%20Indice.md) · [Dia 01 — texto simples](Dia%2001/TXT/00%20-%20Indice.txt).',
    '- [Dia 02 — Markdown](Dia%2002/MD/00%20-%20Indice.md) · [Dia 02 — texto simples](Dia%2002/TXT/00%20-%20Indice.txt).',
    '- [A25 — Markdown](Complementares/MD/A25%20-%20Materiais.md) · [A25 — texto simples](Complementares/TXT/A25%20-%20Materiais.txt).',
    '',
    'As versões TXT incluem as fichas, os índices e os prompts. Os links continuam escritos por inteiro e os textos dos prompts foram preservados. As transcrições estão em Transcrições, separadas por dia; os chats estão em materiais/Fontes originais.',
    ''
   ].join('\n');
   content=content.replace('## O que foi separado',section+'\n## O que foi separado');
  }
  if(dest.match(/\/MD\/A\d\d - Materiais\.md$/)){
   const counterpart=encode(path.posix.relative(path.posix.dirname(dest),txtMap.get(dest)));
   content+='\n[Versão em TXT]('+counterpart+')\n';
  }
 }else if(f.endsWith('.html')){
  content=content.replace(/href="([^"]+)"/g,(all,href)=>{
   const decoded=href.replaceAll('&amp;','&');
   const next=rebaseHref(decoded,f,dest);
   return 'href="'+next.replaceAll('&','&amp;')+'"';
  });
  content=content.replace(/(<a href="([^"]*\/MD\/[^"]*\.md)">Ficha da aula em Markdown<\/a>)/g,(all,link,href)=>{
   const next=href.replace('/MD/','/TXT/').replace(/\.md$/,'.txt');
   return link+'<a href="'+next+'">Ficha da aula em TXT</a>';
  });
  content=content.replace(/(<a href="([^"]*\/MD\/Prompts\/[^"]*\.md)">Abrir arquivo separado<\/a>)/g,(all,link,href)=>{
   const next=href.replace('/MD/','/TXT/').replace(/\.md$/,'.txt');
   return link+' <a href="'+next+'">Versão TXT</a>';
  });
  content=content.replace('<main class="wrap">','<main class="wrap"><p class="footlinks"><a href="Dia%2001/TXT/00%20-%20Indice.txt">Dia 01 em TXT</a><a href="Dia%2002/TXT/00%20-%20Indice.txt">Dia 02 em TXT</a><a href="Complementares/TXT/A25%20-%20Materiais.txt">A25 em TXT</a></p>');
 }
 if(dest!==f||content!==original)changes.push({source:f,target:dest,old:original,content});
}
const contentMap=new Map(generated.map(f=>[map.get(f)||f,changes.find(c=>c.source===f)?.content||read(f)]));
function toTxt(md,from,to){
 let content=links(md,(label,href)=>{
  if(/^https?:/.test(href))return label+' — '+href;
  const url=rebaseHref(href,from,to,true);
  return label+' — '+decodeURIComponent(url);
 });
 let code=false;
 return content.split('\n').map(line=>{
  if(/^(\x60{3,}|~{3,})/.test(line)){code=!code;return '';}
  if(code)return line;
  if(/^\s*\|?\s*:?-{3,}/.test(line))return '';
  if(line.startsWith('|')&&line.endsWith('|'))return line.slice(1,-1).split('|').map(x=>x.trim()).join(' — ');
  return line.replace(/^#{1,6}\s+/,'').replace(/\*\*([^*\n]+)\*\*/g,'$1').replace(/\x60([^\x60\n]+)\x60/g,'$1');
 }).join('\n').trim()+'\n';
}
for(const [md,txt] of txtMap)changes.push({source:null,target:txt,content:toTxt(contentMap.get(md),md,txt)});
const metadataFile=out+'_conferencia/fontes.json';
const metadata=JSON.parse(read(metadataFile));
for(const l of metadata.lessons){l.file=map.get(l.file)||l.file;l.path=(map.get(out+l.path)||out+l.path).slice(out.length);l.txtPath=txtMap.get(out+l.path).slice(out.length);}
for(const p of metadata.prompts){p.path=(map.get(out+p.path)||out+p.path).slice(out.length);p.txtPath=txtMap.get(out+p.path).slice(out.length);}
changes.push({source:metadataFile,target:metadataFile,old:read(metadataFile),content:JSON.stringify(metadata,null,2)+'\n'});
const inspector=out+'_conferencia/conferir.cjs';
let inspect=read(inspector);
inspect=inspect.replace("path.join(root, 'materiais', 'materiais dia '+day, 'dia '+day+' chat.txt')","path.join(root, 'materiais', 'Fontes originais', 'Dia '+day, 'dia '+day+' chat.txt')");
inspect=inspect.replace("path.join(root,'materiais','materiais dia '+day,'dia '+day+' chat.txt')","path.join(root,'materiais','Fontes originais','Dia '+day,'dia '+day+' chat.txt')");
inspect=inspect.replace("const mode = process.argv[2];","function transcriptFiles() {\n  return JSON.parse(fs.readFileSync(path.join(__dirname,'fontes.json'),'utf8')).lessons.map(l=>l.file);\n}\nconst mode = process.argv[2];");
inspect=inspect.replace("fs.readdirSync(root).filter(f=>f.endsWith('.txt')&&/\\bA\\d{2} -/.test(f)).sort().map(file=>","transcriptFiles().map(file=>");
inspect=inspect.replace("fs.readdirSync(root).filter(f=>f.endsWith('.txt')&&/\\bA\\d{2} -/.test(f)).sort()","transcriptFiles()");
changes.push({source:inspector,target:inspector,old:read(inspector),content:inspect});
const top=[
'# Atlas para Negócios — organização da pasta',
'',
'## Materiais',
'',
'- [Abrir o índice visual](materiais/organizados/Abrir%20materiais.html).',
'- [Dia 01 em MD](materiais/organizados/Dia%2001/MD/00%20-%20Indice.md) · [Dia 01 em TXT](materiais/organizados/Dia%2001/TXT/00%20-%20Indice.txt).',
'- [Dia 02 em MD](materiais/organizados/Dia%2002/MD/00%20-%20Indice.md) · [Dia 02 em TXT](materiais/organizados/Dia%2002/TXT/00%20-%20Indice.txt).',
'- [A25 em MD](materiais/organizados/Complementares/MD/A25%20-%20Materiais.md) · [A25 em TXT](materiais/organizados/Complementares/TXT/A25%20-%20Materiais.txt).',
'',
'## Onde encontrar cada coisa',
'',
'- **Transcrições/Dia 01:** aulas A01 a A12.',
'- **Transcrições/Dia 02:** aulas A13 a A24.',
'- **Transcrições/Complementares:** aula A25, com perguntas dos dois dias.',
'- **materiais/Fontes originais:** chats dos dois dias e link original do documento de enquadramento.',
'- **materiais/organizados/Dia 01 e Dia 02:** fichas, índices e prompts separados em MD e TXT.',
'- **materiais/organizados/Complementares:** material da aula A25 em MD e TXT.',
'- **materiais/organizados/Referencias:** materiais compartilhados, contatos administrativos, pendências e catálogo de links.',
'- **Descrições:** descrições das aulas já existentes.',
'- **aulas:** arquivos de vídeo e downloads.',
'',
'As transcrições e os chats mantêm o conteúdo original. A versão TXT conserva os links e o texto dos prompts, com formatação simples para leitura no Bloco de Notas.',
''
].join('\n');
changes.push({source:null,target:'00 - LEIA-ME.md',content:top});
changes.push({source:null,target:'00 - LEIA-ME.txt',content:toTxt(top,'00 - LEIA-ME.md','00 - LEIA-ME.txt')});
const moves=[...map].filter(([f])=>originals.includes(f)||rawChats.includes(f)).map(([source,target])=>({source,target,sha256:hash(path.join(base,source))}));
const safety=relPath=>{
 const resolved=path.resolve(base,relPath);
 if(!resolved.startsWith(base+path.sep))throw Error('Fora da pasta: '+relPath);
 return resolved;
};
for(const action of [...moves,...changes]){
 safety(action.target);
 if(action.source!==action.target&&fs.existsSync(safety(action.target)))throw Error('Destino ja existe: '+action.target);
}
const document={moves,changes,txtPairs:[...txtMap].map(([md,txt])=>({md,txt})),structure:{day01:19,day02:17,complement:1}};
if(process.argv[2]==='size')console.log(JSON.stringify({characters:Array.from(JSON.stringify(document)).length}));
else if(process.argv[2]==='chunk'){const chars=Array.from(JSON.stringify(document));const start=Number(process.argv[3])*60000;process.stdout.write(chars.slice(start,start+60000).join(''));}
else if(process.argv[2]==='summary')console.log(JSON.stringify({moves,filesToEdit:changes.length,txtPairs:document.txtPairs}));
else console.log(JSON.stringify(document));
