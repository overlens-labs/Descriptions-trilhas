const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../../..');
function messages(day) {
  const file = path.join(root, 'materiais', 'Fontes originais', 'Dia '+day, 'dia '+day+' chat.txt');
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const records = [];
  lines.forEach((line, index) => {
    const m = line.match(/^(\d{2}:\d{2}:\d{2})\t([^\t]+):\t([\s\S]*)$/);
    if (m) records.push({day, time:m[1], sender:m[2], line:index+1, body:m[3]});
    else if (records.length) records.at(-1).body += '\n'+line;
  });
  records.forEach(m => {
    m.body = m.body.trim();
    m.reaction = /^(Reacted to|Removed a .* reaction)/.test(m.body);
    m.staff = /Ruan Braz|Nanda/.test(m.sender);
    m.urls = [...m.body.matchAll(/https?:\/\/[^\s<>"“”]+/g)].map(x=>x[0]);
  });
  return records;
}
function transcriptFiles() {
  return JSON.parse(fs.readFileSync(path.join(__dirname,'fontes.json'),'utf8')).lessons.map(l=>l.file);
}
const mode = process.argv[2];
const day = process.argv[3];
if (require.main === module) {
if (mode === 'bundle') {
  const transcripts = transcriptFiles().map(file=>({file,id:file.match(/\b(A\d{2}) -/)[1],title:file.replace(/^.*?\bA\d{2} - /,'').replace(/\.txt$/,'')}));
  const select = {'01':[562,563,1923,2214,2222,2578,2588], '02':[819,821,1814]};
  const excerpts = ['A05','A07','A11','A21','A22'].map(id=>{const t=transcripts.find(t=>t.id===id);return {...t,text:fs.readFileSync(path.join(root,t.file),'utf8')};});
  console.log(JSON.stringify({transcripts,excerpts,staff:['01','02'].flatMap(d=>messages(d).filter(m=>m.staff&&!m.reaction)),prompts:['01','02'].flatMap(d=>messages(d).filter(m=>select[d].includes(m.line)))}));
} else if (mode === 'candidates') {
  for (const d of ['01','02']) for (const m of messages(d).filter(m=>!m.reaction&&!m.body.startsWith('Replying to')&&m.body.length>350&&/quero|preciso|prompt/i.test(m.body)))
    console.log([d,m.time,m.sender,'L'+m.line,m.body.length,m.body.slice(0,500).replace(/[\r\n]/g,' ')].join('\t'));
} else if (mode === 'compact-links') {
  for (const d of day ? [day] : ['01','02'])
    for (const m of messages(d).filter(m=>m.urls.length&&!m.reaction))
      console.log([m.day,m.time,m.sender,'L'+m.line,m.body.startsWith('Replying to')?'RESPOSTA':'ORIGINAL',m.urls.join(' | ')].join('\t'));
} else if (mode === 'hosts') {
  for (const d of day ? [day] : ['01','02'])
    for (const m of messages(d).filter(m=>m.staff&&!m.reaction))
      console.log(JSON.stringify(m));
} else if (mode === 'links') {
  for (const d of day ? [day] : ['01','02'])
    for (const m of messages(d).filter(m=>m.urls.length&&!m.reaction))
      console.log(JSON.stringify(m));
} else if (mode === 'transcripts') {
  for (const file of transcriptFiles()) {
    const id = file.match(/\b(A\d{2}) -/)[1];
    if (day && !day.split(',').includes(id)) continue;
    const lines = fs.readFileSync(path.join(root,file),'utf8').split(/\r?\n/);
    console.log('\n### '+file);
    const filter = process.argv[4];
    const re = filter ? new RegExp(filter,'i') : null;
    lines.forEach((line,i)=>{
      if (!re || i<8 || i>=lines.length-5 || re.test(line)) console.log((i+1)+': '+line);
    });
  }
} else if (mode === 'range') {
  const lines = fs.readFileSync(path.join(root,'materiais','Fontes originais','Dia '+day,'dia '+day+' chat.txt'),'utf8').split(/\r?\n/);
  const start = Number(process.argv[4]), end = Number(process.argv[5]);
  lines.slice(start-1,end).forEach((s,i)=>console.log((start+i)+': '+s));
} else {
  for (const d of ['01','02']) {
    const all = messages(d);
    console.log(JSON.stringify({day:d,messages:all.length,staff:all.filter(m=>m.staff&&!m.reaction).length,staffLinks:all.filter(m=>m.staff&&!m.reaction&&m.urls.length).length,senders:[...new Set(all.filter(m=>m.staff).map(m=>m.sender))]}));
  }
}
}
module.exports = {messages,root};
