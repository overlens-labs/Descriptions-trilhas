// =====================================================================
// Padronização do repositório Descriptions-trilhas (28/09/2026)
//
// Gera o de-para de TODOS os arquivos (caminho antigo -> caminho novo) e,
// se pedido, aplica.
//
// PADRÃO DE DESTINO
//   trilhas/<professor>/<trilha>/        minúsculo, sem acento, com hífen
//     aula-NN-<slug>.md                  descrição publicada da aula
//     descricao-da-trilha.md             descrição da trilha (se houver)
//     README.md                          leia-me da trilha (se houver)
//     planilha-<trilha>.csv              planilha da trilha (se houver)
//     transcricoes/aula-NN-<slug>.<ext>  mesmo nome da descrição da aula
//     transcricoes/exercicio-<slug>.<ext>
//     materiais/                         apoio, cópias .txt, rascunhos, memórias
//
// USO
//   node padronizar.js <clone> <pasta-local> <saida> [--aplicar=edicoes|mover|importar|publicar]
//   Sem --aplicar, só gera <saida>/de-para.csv e <saida>/resumo.txt.
// =====================================================================
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const [, , W, LOC, OUT, ...flags] = process.argv;
const fase = (flags.find(f => f.startsWith('--aplicar=')) || '').split('=')[1] || '';
if (!W || !LOC || !OUT) { console.error('uso: node padronizar.js <clone> <pasta-local> <saida> [--aplicar=...]'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });

const git = (cwd, args) => execFileSync('git', ['-c', 'core.quotepath=false', ...args], { cwd, encoding: 'utf8', maxBuffer: 1 << 28 });
const nfc = s => s.normalize('NFC');
const slug = s => nfc(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/&/g, ' e ').replace(/[^a-z0-9]+/g, '-').replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '')
  .slice(0, 90).replace(/-+$/, '');
// hashes em lote: os do GitHub vêm do índice; os do PC, de uma chamada só ao hash-object
const hashCache = new Map();
function hashLote(cwd, fulls) {
  if (!fulls.length) return;
  const out = execFileSync('git', ['hash-object', '--stdin-paths'], { cwd, input: fulls.join('\n') + '\n', encoding: 'utf8', maxBuffer: 1 << 28 }).trim().split('\n');
  fulls.forEach((f, i) => hashCache.set(f, out[i]));
}
const hashOf = (full) => hashCache.get(full);

// ---------------------------------------------------------------- regras fixas
const TRILHA = { // nome da pasta hoje -> nome padronizado
  'Atlas Extreme': 'atlas-extreme',
  'BOOTCAMP SWARM': 'bootcamp-swarm',
  'Atlas para negócios': 'atlas-para-negocios',
  '[B] [Atlas para negócios] Transcrição': 'atlas-para-negocios',
  '[Trilha] Profit': 'profit',
  'syntax ( fazer )': 'syntax',
  'atlas': 'atlas-1a-edicao'
};
const LOCAL_PARA_GITHUB = { // pasta local -> pasta como está no GitHub (para achar o equivalente)
  '[B] [Atlas para negócios] Transcrição': 'Atlas para negócios',
  'syntax ( fazer )': 'syntax'
};
const SUB_DESCR = new Set(['descrições', 'descricoes']);
const SUB_TXT = new Set(['descrições txt', 'descricoes txt', 'descrições sem markdown', 'descricoes sem markdown']);
const SUB_TRANS = new Set(['transcricoes', 'transcrições']);
const SUB_MAT = { 'materiais': '', 'aulas vanguarda': 'aulas-vanguarda', 'arquivo prompt': 'arquivo-prompt', 'memoria': 'memoria', 'memória': 'memoria', 'aulas': 'aulas' };
const FORA = [/\.lnk$/i, /\.py$/i]; // o Lucas pediu para deixar de fora (atalho e scripts soltos)

// número da aula e título a partir do nome do arquivo (sem extensão)
function aula(base) {
  let m;
  const b = nfc(base).replace(/_semantic$/, '');
  if ((m = b.match(/^aula-(\d{2})(?:-(\d+))?-(.+)$/))) {
    const k = m[2] && +m[2] !== +m[1] ? m[1] + '-' + m[2] : m[1];
    return { k, t: m[3] };
  }
  if ((m = b.match(/^\[B\] \[TRILHA\] .*?A(\d{2}) - (.+)$/))) return { k: m[1], t: m[2] };
  if ((m = b.match(/^\[AL?\] Aula - (\d{1,2})\b\s*(.*)$/))) return { k: m[1].padStart(2, '0'), t: m[2] };
  if ((m = b.match(/^\[A\] \[(\d{2})\] (.+)$/))) return { k: m[1], t: m[2] };
  if ((m = b.match(/^A(\d{2}) - (.+)$/))) return { k: m[1], t: m[2] };
  if ((m = b.match(/^(\d{1,2}) - (.+)$/))) return { k: m[1].padStart(2, '0'), t: m[2] };
  if ((m = b.match(/^aula[ _-]*(\d{1,2})\b[ _-]*(.*)$/i))) return { k: m[1].padStart(2, '0'), t: m[2] };
  if ((m = b.match(/^exerc[ií]cios?\b[ _-]*(.*)$/i))) return { ex: true, t: m[1] || b };
  if (/^elabore\b/i.test(b)) return { ex: true, t: b }; // exercícios da Guidelines ("Elabore a paleta de cores")
  return { t: b };
}

// ---------------------------------------------------------------- coleta
const tracked = git(W, ['ls-files', '-z']).split('\0').filter(Boolean).map(nfc);
const trackedSet = new Set(tracked);
const trackedHashesByTrilha = {};
const entries = []; // { logical, src: 'github'|'pc', full }
for (const p of tracked) entries.push({ logical: p, src: 'github', full: path.join(W, p) });

const localOnly = git(LOC, ['ls-files', '--others', '--exclude-standard', '-z']).split('\0').filter(Boolean).map(nfc);
const skipped = [];
for (const p of localOnly) {
  const parts = p.split('/');
  if (parts[0] === 'trilhas' && parts.length > 3 && LOCAL_PARA_GITHUB[parts[2]]) parts[2] = LOCAL_PARA_GITHUB[parts[2]];
  const logical = parts.join('/');
  const full = path.join(LOC, p);
  if (FORA.some(r => r.test(p))) { skipped.push([p, 'fora (atalho ou script solto)']); continue; }
  if (trackedSet.has(logical)) { skipped.push([p, 'já está no GitHub (a versão do GitHub vale)']); continue; }
  entries.push({ logical, src: 'pc', full, localPath: p });
}
// deduplica por conteúdo dentro da mesma trilha (cópias idênticas de arquivos do GitHub)
for (const line of git(W, ['ls-files', '-s', '-z']).split('\0').filter(Boolean)) {
  const tab = line.indexOf('\t');
  hashCache.set(path.join(W, nfc(line.slice(tab + 1))), line.split(' ')[1]);
}
hashLote(LOC, entries.filter(x => x.src === 'pc').map(x => x.full));
for (const e of entries.filter(x => x.src === 'github')) {
  const t = e.logical.split('/').slice(0, 3).join('/');
  (trackedHashesByTrilha[t] = trackedHashesByTrilha[t] || new Set()).add(hashOf(e.full));
}
for (let i = entries.length - 1; i >= 0; i--) {
  const e = entries[i];
  if (e.src !== 'pc' || !e.logical.startsWith('trilhas/')) continue;
  const t = e.logical.split('/').slice(0, 3).join('/');
  if (trackedHashesByTrilha[t] && trackedHashesByTrilha[t].has(hashOf(e.full))) { skipped.push([e.localPath, 'cópia idêntica de um arquivo que já está no GitHub']); entries.splice(i, 1); }
}

// ---------------------------------------------------------------- classificação
const byTrilha = {};
const rows = []; // [origem, destino, tipo, obs]
for (const e of entries) {
  const parts = e.logical.split('/');
  if (parts[0] !== 'trilhas' || parts.length < 4) { e.kind = 'raiz'; continue; }
  const key = parts.slice(0, 3).join('/');
  (byTrilha[key] = byTrilha[key] || []).push(e);
}

function classify(e) {
  const parts = e.logical.split('/');
  const rest = parts.slice(3);
  const file = rest[rest.length - 1];
  const ext = path.extname(file).slice(1).toLowerCase();
  const base = file.slice(0, file.length - (ext ? ext.length + 1 : 0));
  const sub = rest.length > 1 ? nfc(rest[0]).toLowerCase() : '';
  if (rest.length === 1) {
    if (/^aula-\d{2}/.test(base) && ext === 'md') return { cat: 'descricao', ...aula(base), ext };
    if (/^planilha-/i.test(base) && ext === 'csv') return { cat: 'planilha', ext };
    if (/^descricao_da_trilha$/i.test(base)) return { cat: 'descr-trilha', ext };
    if (/^00 - leia-me$/i.test(base)) return { cat: ext === 'md' ? 'readme' : 'material', ext };
    if (ext === 'srt' || ext === 'vtt' || (/^\d{1,2} - /.test(base) && ext === 'md')) return { cat: 'transcricao', ...aula(base), ext };
    return { cat: 'material', ext };
  }
  if (SUB_DESCR.has(sub)) return { cat: 'descricao-bruta', ...aula(base), ext };
  if (SUB_TXT.has(sub)) return { cat: 'txt', ...aula(base), ext };
  if (SUB_TRANS.has(sub)) return { cat: 'transcricao', ...aula(base), ext };
  if (sub in SUB_MAT) return { cat: 'material', ext, sub: SUB_MAT[sub] };
  return { cat: 'material', ext, sub: slug(rest[0]) };
}

const destinos = new Map(); // destino -> origem (para achar colisão)
function reserve(dest, e, obs) {
  let d = dest, n = 2;
  while (destinos.has(d)) { const x = path.posix.extname(dest); d = dest.slice(0, dest.length - x.length) + '-' + n++ + x; }
  destinos.set(d, e.logical);
  e.dest = d;
  rows.push([e.src === 'pc' ? '(PC) ' + e.localPath : e.logical, d, e.cls.cat, (d !== dest ? 'nome repetido, ganhou sufixo; ' : '') + (obs || '')]);
}

for (const [key, list] of Object.entries(byTrilha)) {
  const [, prof, trilha] = key.split('/');
  const T = 'trilhas/' + prof + '/' + (TRILHA[trilha] || trilha);
  list.forEach(e => { e.cls = classify(e); });
  const temPublicada = list.some(e => e.cls.cat === 'descricao');
  // mapa aula -> nome base da descrição (o nome que as transcrições vão seguir)
  const nomeAula = {};
  for (const e of list.filter(x => x.cls.cat === 'descricao')) nomeAula[e.cls.k] = path.posix.basename(e.logical, '.md');
  if (!temPublicada) for (const e of list.filter(x => x.cls.cat === 'descricao-bruta' && x.cls.k)) nomeAula[e.cls.k] = nomeAula[e.cls.k] || ('aula-' + e.cls.k + '-' + slug(e.cls.t));
  const nomePara = (c) => c.ex ? 'exercicio-' + slug(c.t) : (c.k ? (nomeAula[c.k] || 'aula-' + c.k + '-' + slug(c.t)) : 'extra-' + slug(c.t));
  for (const e of list) {
    const c = e.cls;
    const parts = e.logical.split('/');
    const rest = parts.slice(3);
    switch (c.cat) {
      case 'descricao': reserve(T + '/' + path.posix.basename(e.logical), e); break;
      case 'descricao-bruta':
        if (temPublicada) reserve(T + '/materiais/descricoes-brutas/' + nomePara(c) + '.md', e, 'rascunho; a publicada fica na raiz');
        else reserve(T + '/' + nomePara(c) + '.md', e, c.k ? 'bruta (tem a linha "Cálculo interno")' : 'SEM NÚMERO DE AULA');
        break;
      case 'txt': reserve(T + '/materiais/txt/' + nomePara(c) + '.' + c.ext, e, 'cópia sem markdown'); break;
      case 'transcricao': reserve(T + '/transcricoes/' + nomePara(c) + '.' + c.ext, e, c.k || c.ex ? '' : 'SEM NÚMERO DE AULA'); break;
      case 'planilha': reserve(T + '/planilha-' + (TRILHA[trilha] || trilha) + '.csv', e); break;
      case 'descr-trilha': reserve(T + '/descricao-da-trilha.md', e); break;
      case 'readme': reserve(T + '/README.md', e); break;
      default: {
        const inner = (c.sub !== undefined && rest.length > 1 ? rest.slice(1) : rest);
        const dir = c.sub ? T + '/materiais/' + c.sub : T + '/materiais';
        const segs = inner.map((s, i) => i === inner.length - 1 ? slug(path.posix.basename(s, path.posix.extname(s))) + path.posix.extname(s).toLowerCase() : slug(s));
        reserve(dir + '/' + segs.join('/'), e);
      }
    }
  }
}
// arquivos fora de trilhas/ (raiz do repo)
for (const e of entries.filter(x => x.kind === 'raiz')) {
  e.cls = { cat: 'raiz' };
  let d = e.logical;
  if (/\.docx$/i.test(d)) d = 'prompt/' + slug(path.posix.basename(d, '.docx')) + '.docx';
  else if (d.startsWith('prompt/')) d = 'prompt/' + slug(path.posix.basename(d, path.posix.extname(d))) + path.posix.extname(d).toLowerCase();
  reserve(d, e);
}

// ---------------------------------------------------------------- saída
const csv = [['origem', 'destino', 'tipo', 'observacao'], ...rows].map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
fs.writeFileSync(path.join(OUT, 'de-para.csv'), '﻿' + csv, 'utf8');
const muda = rows.filter(r => !r[0].startsWith('(PC)') && r[0] !== r[1]).length;
const iguais = rows.filter(r => r[0] === r[1]).length;
const novos = rows.filter(r => r[0].startsWith('(PC)')).length;
const alertas = rows.filter(r => /SEM NÚMERO|sufixo/.test(r[3]));
const porTipo = {}; rows.forEach(r => { porTipo[r[2]] = (porTipo[r[2]] || 0) + 1; });
const resumo = [
  'arquivos no GitHub: ' + tracked.length + ' | continuam onde estão: ' + iguais + ' | mudam de caminho: ' + muda,
  'entram do PC: ' + novos + ' | ficam de fora: ' + skipped.length,
  'por tipo: ' + Object.entries(porTipo).map(([k, v]) => k + ' ' + v).join(' · '),
  'alertas (revisar à mão): ' + alertas.length,
  ...alertas.map(r => '  ! ' + r[0] + '  ->  ' + r[1] + '  [' + r[3] + ']'),
  'fora do PR (por motivo): ' + Object.entries(skipped.reduce((a, [, m]) => (a[m] = (a[m] || 0) + 1, a), {})).map(([k, v]) => k + ': ' + v).join(' | ')
].join('\n');
fs.writeFileSync(path.join(OUT, 'resumo.txt'), resumo + '\n', 'utf8');
fs.writeFileSync(path.join(OUT, 'fora-do-pr.csv'), '﻿' + [['arquivo local', 'motivo'], ...skipped].map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n'), 'utf8');
fs.writeFileSync(path.join(OUT, 'plano.json'), JSON.stringify(entries.map(e => ({ src: e.src, logical: e.logical, full: e.full, dest: e.dest, cat: e.cls && e.cls.cat })), null, 1), 'utf8');
console.log(resumo);

// ---------------------------------------------------------------- aplicar
if (fase === 'mover') {
  for (const e of entries.filter(x => x.src === 'github' && x.dest && x.dest !== x.logical)) {
    const to = path.join(W, e.dest);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.renameSync(e.full, to);
  }
  console.log('movidos.');
}
if (fase === 'importar') {
  for (const e of entries.filter(x => x.src === 'pc' && x.dest)) {
    const to = path.join(W, e.dest);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(e.full, to);
  }
  console.log('importados.');
}
