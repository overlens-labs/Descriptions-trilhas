// Gera o INDICE.md (na raiz do repo) a partir das pastas em trilhas/.
// Rode sempre que entrar trilha ou aula nova:  node docs/gerar-indice.js
const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..');
const T = path.join(RAIZ, 'trilhas');
const ls = (d) => fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }) : [];
const linhas = [
  '# Índice das trilhas',
  '',
  'Gerado por `docs/gerar-indice.js`. Não edite à mão; rode o script de novo.',
  '',
  '| Professor | Trilha | Aulas (descrições) | Transcrições | Formatos | Exercícios | Descrição da trilha | Atenção |',
  '|---|---|---|---|---|---|---|---|'
];
let totA = 0, totT = 0;
for (const prof of ls(T).filter(d => d.isDirectory()).map(d => d.name).sort()) {
  for (const tri of ls(path.join(T, prof)).filter(d => d.isDirectory()).map(d => d.name).sort()) {
    const dir = path.join(T, prof, tri);
    const aulas = ls(dir).filter(f => f.isFile() && /^aula-.*\.md$/.test(f.name)).map(f => f.name.replace(/\.md$/, ''));
    const trans = ls(path.join(dir, 'transcricoes')).filter(f => f.isFile()).map(f => f.name);
    const base = trans.map(f => f.replace(/\.[^.]+$/, ''));
    const formatos = [...new Set(trans.map(f => path.extname(f).slice(1)))].sort().join(', ');
    const exerc = new Set(base.filter(b => b.startsWith('exercicio-'))).size;
    const semTrans = aulas.filter(a => !base.includes(a));
    const semDesc = [...new Set(base.filter(b => !b.startsWith('exercicio-') && !aulas.includes(b)))];
    const avisos = [];
    if (semTrans.length) avisos.push('sem transcrição: ' + semTrans.map(a => a.slice(0, 7)).join(', '));
    if (semDesc.length) avisos.push('transcrição sem descrição: ' + semDesc.map(a => a.slice(0, 7)).join(', '));
    const descTri = ls(dir).some(f => f.name === 'descricao-da-trilha.md' || f.name === 'README.md') ? 'sim' : '';
    totA += aulas.length; totT += trans.length;
    linhas.push('| ' + prof + ' | [' + tri + '](trilhas/' + prof + '/' + tri + ') | ' + aulas.length + ' | ' + trans.length + ' | ' + formatos + ' | ' + exerc + ' | ' + descTri + ' | ' + avisos.join('; ') + ' |');
  }
}
linhas.push('', '**Total:** ' + totA + ' descrições de aula e ' + totT + ' arquivos de transcrição.', '');
fs.writeFileSync(path.join(RAIZ, 'INDICE.md'), linhas.join('\n'), 'utf8');
console.log('INDICE.md: ' + totA + ' descrições, ' + totT + ' transcrições');
