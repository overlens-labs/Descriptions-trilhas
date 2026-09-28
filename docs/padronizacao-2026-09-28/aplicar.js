// =====================================================================
// Aplica o plano gerado pelo padronizar.js (plano.json), em fases.
// O plano não é recalculado: depois das pastas movidas, o recálculo não
// reconheceria mais o que já estava no GitHub.
//
// USO
//   node aplicar.js <clone> <plano.json> mover     só renomeia/move (conteúdo intacto)
//   node aplicar.js <clone> <plano.json> importar  copia o que estava só no PC
//   node aplicar.js <clone> <plano.json> publicar  tira a linha "Cálculo interno" das
//                                                  descrições brutas que ficaram na raiz
//                                                  e guarda a original em materiais/descricoes-brutas/
// =====================================================================
const fs = require('fs');
const path = require('path');
const [, , W, plano, fase] = process.argv;
const P = JSON.parse(fs.readFileSync(plano, 'utf8'));
let n = 0;

function limparVazias(dir) { // remove pastas que ficaram vazias depois de mover
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) if (d.isDirectory()) limparVazias(path.join(dir, d.name));
  if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

if (fase === 'mover') {
  for (const e of P) {
    if (e.src !== 'github' || !e.dest || e.dest === e.logical) continue;
    const from = path.join(W, e.logical), to = path.join(W, e.dest);
    if (fs.existsSync(to)) throw new Error('destino já existe: ' + e.dest);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.renameSync(from, to);
    n++;
  }
  limparVazias(path.join(W, 'trilhas'));
}

if (fase === 'importar') {
  for (const e of P) {
    if (e.src !== 'pc' || !e.dest) continue;
    const to = path.join(W, e.dest);
    if (fs.existsSync(to)) throw new Error('destino já existe: ' + e.dest);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(e.full, to);
    n++;
  }
}

if (fase === 'publicar') {
  for (const e of P) {
    // só as brutas que viraram a descrição principal (na raiz da trilha)
    if (e.cat !== 'descricao-bruta' || !e.dest || e.dest.split('/').length !== 4) continue;
    const f = path.join(W, e.dest);
    let raw = fs.readFileSync(f, 'utf8');
    const bom = raw.startsWith('﻿');
    if (bom) raw = raw.slice(1);
    const nl = raw.includes('\r\n') ? '\r\n' : '\n';
    const lines = raw.split(nl);
    if (!/^Cálculo interno/.test(lines[0])) continue;
    const bruta = path.join(path.dirname(f), 'materiais', 'descricoes-brutas', path.basename(f));
    if (fs.existsSync(bruta)) throw new Error('já existe: ' + bruta);
    fs.mkdirSync(path.dirname(bruta), { recursive: true });
    fs.copyFileSync(f, bruta);
    lines.shift();
    while (lines.length && lines[0].trim() === '') lines.shift();
    fs.writeFileSync(f, (bom ? '﻿' : '') + lines.join(nl), 'utf8');
    n++;
  }
}

console.log(fase + ': ' + n + ' arquivos');
