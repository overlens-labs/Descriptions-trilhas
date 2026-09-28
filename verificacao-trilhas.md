# Verificação de Sequência das Trilhas

Objetivo: criar uma planilha CSV por trilha com a sequência completa e correta de aulas + exercícios, usando as transcrições como fonte de verdade — não suposição.

---

## Status por trilha

| Trilha | Planilha criada | Exercícios confirmados | Exercícios inferidos |
|--------|----------------|----------------------|----------------------|
| Arquivo Legado | `planilha-arquivo-legado.csv` | 4 | 6 |
| CHROME (Fundamento das Cores) | `planilha-chrome-fundamento-das-cores.csv` | 5 | 0 |
| DeepZoom | `planilha-deepzoom.csv` | 0 | 5 |
| Design Thinking | `planilha-design-thinking.csv` | 0 | 0 |
| Engenharia de Prompt | `planilha-engenharia-de-prompt.csv` | 0 | 0 |
| Expedição Global | `planilha-expedicao-global.csv` | 0 | 3 |
| Atlas 2ª Edição | `planilha-atlas-2a-edicao.csv` | 0 | 0 |
| GENOMA | `planilha-genoma.csv` | 0 | 4 |
| Gestalt (Fundamento das Formas) | `planilha-gestalt-fundamento-das-formas.csv` | 1 | 6 |
| GUIDELINES (Universo Visual) | `planilha-guidelines-universo-visual.csv` | 1 | 7 |
| Idéa (Ideias Fundamentais) | `planilha-idea.csv` | 2 | 3 |
| Layout (Fundamento da Composição) | `planilha-layout-fundamento-da-composicao.csv` | 1 | 3 |
| LLMs | `planilha-llms.csv` | 0 | 0 |
| SandBox (Princípios Básicos do Design) | `planilha-sandbox-principios-basicos-do-design.csv` | 0 | 0 |
| Maestro | `planilha-maestro.csv` | 0 | 0 |
| NexGen | `planilha-nexgen.csv` | 0 | 0 |
| Spectrum | `planilha-spectrum.csv` | 1 | 2 |
| Signals (Fundamento da Mensagem) | `planilha-signals-fundamento-da-mensagem.csv` | 1 | 4 |
| Sintropia (Bootcamp Sintrópico) | `planilha-sintropia.csv` | 0 | 2 |
| Standout (Estratégia - Identificando a Verdade da Marca) | `planilha-standout-estrategia-identificando-a-verdade-da-marca.csv` | 0 | 4 |
| Syntax | `planilha-syntax.csv` | 7 | 3 |
| Synthetic | `planilha-synthetic.csv` | 0 | 0 |
| Projetos Internacionais | `planilha-projetos-internacionais.csv` | 2 | 0 |
| Verbarium (Identidade Verbal) | `planilha-verbarium.csv` | 3 | 1 |
| Fit - Perfil Ideal de Cliente | `planilha-fit-perfil-ideal-de-cliente.csv` | 0 | 0 |
| Demais trilhas | pendente | — | — |

---

## Passo a passo completo

### 1. Entrar na pasta da trilha

Cada trilha fica em `trilhas/<professor>/<nome-da-trilha>/`. Exemplo:
```
trilhas/ruan-braz/arquivo-legado/
```

---

### 2. Ler o `aulas.md` da trilha

Esse arquivo lista todas as aulas e todos os exercícios da trilha. Vai ter duas seções:
- `## Aulas` — lista numerada das aulas
- `## Exercícios` — lista numerada dos exercícios

Anotar quais exercícios são standalone (sem arquivo próprio) e quais são aulas com exercício embutido.

---

### 3. Ler o `sequencia-corrigida.md` (se existir)

Esse arquivo contém a ordem corrigida das aulas — com reorganizações que foram feitas em relação à numeração original dos arquivos. Usar essa ordem como base, não a numeração dos arquivos.

Se não existir `sequencia-corrigida.md`, usar a ordem do `aulas.md`.

---

### 4. Mapear os arquivos disponíveis

Verificar quais arquivos existem na pasta:
- Arquivos `.md` das aulas → `aula-XX-nome.md`
- Arquivos de transcrição → `transcricoes/aula-XX-nome.txt`

Montar a correspondência entre a sequência corrigida e os arquivos reais.

---

### 5. Identificar os tipos de cada item

Cada item da sequência é um dos três tipos abaixo. Isso vai para a coluna **Tipo** da planilha:

| Tipo | Quando usar |
|------|-------------|
| `Aula` | Tem arquivo `.md` e transcrição, sem exercício embutido |
| `Aula + Exercício` | Tem arquivo `.md` e transcrição, e o conteúdo é uma aula que contém um exercício junto |
| `Exercício` | Não tem arquivo `.md` próprio — é um material separado (PDF, worksheet, etc.) |

---

### 6. Verificar a posição dos exercícios standalone nas transcrições

Para cada exercício do tipo `Exercício` (sem arquivo próprio), fazer o seguinte:

1. Identificar qual aula provavelmente precede esse exercício (pelo nome/tema)
2. Ler o **final** da transcrição dessa aula (últimas 80-100 linhas)
3. Verificar se o Ruan convoca o exercício explicitamente

**Sinais de convocação explícita:**
- "faça o exercício X"
- "agora sua tarefa é..."
- "prepare o seu..."
- "crie o seu..."
- "responda as perguntas..."

**Se encontrar convocação:** marcar como `Confirmado` na coluna Posição Verificada e colocar a citação literal.

**Se não encontrar:** marcar como `Inferência lógica — aula encerra sem convocar exercício` e colocar o exercício depois da aula mais logicamente relacionada pelo tema.

> **Importante:** Se a transcrição não menciona o exercício, NÃO significa que a posição está errada — só significa que não há evidência. A confiança nesse caso é ~70-75%.

---

### 7. Criar o CSV na pasta da trilha

Nome do arquivo: `planilha-<nome-da-trilha>.csv`

**Colunas:**

| Coluna | Descrição |
|--------|-----------|
| `Posição` | Número sequencial único de 1 até o total (inclui exercícios na ordem) |
| `N° Arquivo` | Número do arquivo `.md` (ex: `01`, `14`). Para exercícios sem arquivo: `—` |
| `Título` | Nome da aula ou exercício |
| `Tipo` | `Aula`, `Aula + Exercício` ou `Exercício` |
| `Módulo` | Nome do módulo ao qual pertence |
| `Cor do Módulo` | Cor de capa do módulo (Azul, Laranja, Verde, etc.) |
| `Arquivo Descrição` | Nome do arquivo `.md` (ex: `aula-01-nome.md`). Para exercícios sem arquivo: `—` |
| `Arquivo Transcrição` | Caminho do `.txt` (ex: `transcricoes/aula-01-nome.txt`). Para exercícios sem arquivo: `—` |
| `Posição Verificada` | `—` para aulas normais. Para exercícios: `Confirmado — [citação literal]` ou `Inferência lógica — [motivo]` |

**Regra de sequência:** a planilha é uma sequência única — não separar aulas de exercícios em seções diferentes. Exercícios aparecem imediatamente após a aula a que pertencem.

---

### 8. Atualizar a tabela de status no topo deste arquivo

Após criar a planilha de uma trilha, atualizar a tabela de status acima com:
- Nome da trilha
- Nome do arquivo CSV criado
- Quantos exercícios foram confirmados por transcrição
- Quantos foram inferidos

---

## Exemplo de linha confirmada vs inferida

```
Pos 15 | — | Criando o Blueprint | Exercício | Demanda | Laranja | — | — | Confirmado — Ruan diz: "Então faça o seu Blueprint e eu te vejo agora na próxima aula."

Pos 28 | — | Definindo os Protocolos | Exercício | Ambiente | Verde | — | — | Inferência lógica — aula-22 encerra anunciando próxima aula sem convocar exercício
```

---

## Trilhas do projeto

```
trilhas/
├── ruan-braz/
│   ├── arquivo-legado/        ✅ planilha criada
│   ├── atlas/
│   ├── sintropia/
│   └── ... (demais trilhas)
├── mateus-scopel/
│   └── ... 
└── vinni-del-poco/
    └── ...
```
