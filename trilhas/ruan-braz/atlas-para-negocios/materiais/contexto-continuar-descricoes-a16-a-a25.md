# Contexto para continuar as descrições do Atlas para Negócios (A16 a A25)

## Estado atual em 16/09/2026

**A01 a A25 estão concluídas, com os materiais de cada aula.** A01 a A15 receberam os materiais; A16 a A20 foram concluídas no primeiro lote; A21 a A25 foram concluídas no lote final.

Consulte os relatórios de [A16 a A20](_REVISAO%20-%20materiais%20e%20descri%C3%A7%C3%B5es%20A16%20a%20A20.md) e [A21 a A25](_REVISAO%20-%20materiais%20e%20descri%C3%A7%C3%B5es%20A21%20a%20A25.md) para contagens e dúvidas da transcrição. Os materiais ficam antes de Coloque em prática e entram no recálculo existente. A05, A08 e A25 têm aviso final de leitura longa. O teto exibido continua sendo quinze minutos, sem corte para atingir esse teto.

Não há descrições por escrever. As tabelas históricas abaixo registram o planejamento e as contagens anteriores à inclusão dos materiais. Permanecem as pendências de fontes e de conferência no vídeo indicadas nos relatórios. Não refaça aulas concluídas sem um novo pedido ou uma mudança efetiva de conteúdo.

## TXT, publicação e troca das transcrições

- A pasta `Descrições TXT` contém as 25 descrições em texto simples, com os 76 links preservados. As versões MD continuam em `Descrições`.
- Foram publicados somente 75 arquivos: 25 descrições MD, 25 descrições TXT e 25 transcrições, pela conta `paixaolucass`, na branch `main` de `paixaolucass/Descriptions-trilhas`.
- No GitHub, a pasta foi renomeada para `trilhas/ruan-braz/Atlas para negócios`. [Abrir pasta publicada](https://github.com/paixaolucass/Descriptions-trilhas/tree/main/trilhas/ruan-braz/Atlas%20para%20neg%C3%B3cios).
- A pasta local continua com o nome `[B] [Atlas para negócios] Transcrição`. Contexto, memória, LEIA-ME, relatórios, scripts, materiais e vídeos ficaram apenas no ambiente local. Referências a `../materiais/` não abrem no GitHub, pois essa pasta não foi enviada.
- As transcrições A01, A03 e A04 de `Transcrições/Dia 01` foram substituídas no GitHub pelos novos arquivos locais, no commit `235b92363932d5dfd4910774aa5cdba0bbe2bd84`.
- O usuário confirmou em 16/09/2026 que as novas transcrições têm o mesmo conteúdo. As descrições MD e TXT permanecem válidas e não devem ser refeitas por essa substituição. A antiga pendência de troca da A01 está encerrada.

Histórico da publicação: `d665165` (75 arquivos), `bb763f8` (renomeação da pasta) e `235b923` (troca de A01, A03 e A04). O envio foi feito por uma cópia separada do repositório para preservar as alterações de outros trabalhos na pasta local.

Cole este documento inteiro como primeira mensagem. Ele é autossuficiente: não depende de nenhuma conversa anterior.

## O que é a tarefa

Gerar descrições de aula para a plataforma Overlens a partir das transcrições do Atlas para Negócios (quinta edição do Atlas, gravado em 2026, professor Ruan Braz).

A trilha tem 25 aulas. **A01 a A25 estão escritas e auditadas.**

Cada descrição precisa funcionar como referência completa da aula: quem só lê o documento tem que absorver todo o conteúdo ensinado sem assistir ao vídeo. Não é resumo.

## Caminhos

**Prompt Oficial da Overlens (leia INTEIRO antes de escrever qualquer coisa):**
```
D:\Claude Code\claude\Descriptions-trilhas\trilhas\ruan-braz\atlas-3a-edicao\ARQUIVO PROMPT\DESCRIÇÃO DE AULA - Prompt Oficial Overlens ( Markdown ).md
```

**Pasta base do trabalho:**
```
D:\Claude Code\claude\Descriptions-trilhas\trilhas\ruan-braz\[B] [Atlas para negócios] Transcrição\
```

Dentro dela:
- `Transcrições\Dia 01\` — aulas A01 a A12
- `Transcrições\Dia 02\` — aulas A13 a A24
- `Transcrições\Complementares\` — aula A25
- `Descrições\` — onde estão as 25 descrições concluídas
- `Descrições TXT\` — as mesmas 25 descrições em texto simples
- `recalc.py` e `checkemoji.py` — scripts de apoio, explicados abaixo

**Exemplos aprovados pelo cliente.** Leia dois antes de começar, para pegar o padrão:
- `Descrições\A01 - Abertura e enquadramento de aprendizagem.md` (aula expositiva)
- `Descrições\A02 - Um site publicado em 10 minutos com Claude Code e Codex.md` (aula demonstrativa)
- `Descrições\A14 - Infraestrutura - arquivos, banco de dados e publicação.md` (aula técnica pesada)

## Nome do arquivo

Espelha o nome da transcrição, tirando o prefixo `[B] [TRILHA] [Atlas para Negócios] [2026] `.

Transcrição: `[B] [TRILHA] [Atlas para Negócios] [2026] A16 - Validando o modelo - a conta, o excesso de plano e o produto certo.txt`
Descrição: `A16 - Validando o modelo - a conta, o excesso de plano e o produto certo.md`

O título `#` dentro do documento é o título sem o `A16 - `. No exemplo: `# Validando o modelo - a conta, o excesso de plano e o produto certo`

## Formato das transcrições

```
[B] [TRILHA] [Atlas para Negócios] [2026] A16 - Validando o modelo ...
00:22:35 — 128 legendas

[00:00:00] primeira fala
[00:00:11] segunda fala
```

Linha 1 é o título, linha 2 traz duração e número de legendas, e a partir da linha 4 vêm as falas com timestamp. **Em todas as aulas desta trilha o offset é `00:00:00`**, então os timestamps entram sem subtração. Confira mesmo assim.

São transcrições automáticas: pontuação errada, vírgulas no meio de frases, e nomes de ferramentas, modelos e siglas destruídos com frequência.

## Procedimento por aula

1. Ler o Prompt Oficial inteiro.
2. Ler dois exemplos aprovados.
3. Ler a transcrição **inteira**, do começo ao fim. Não ler só o começo.
4. Escrever o arquivo com a ferramenta de escrita de arquivo.
5. Rodar `recalc.py` no arquivo.
6. Rodar a auditoria.

## Estrutura do documento

```
Cálculo interno: [X blocos] / [Y parágrafos totais] / [Z palavras estimadas] / [Z ÷ 200 = W minutos]

# Título da aula

**Tempo estimado de leitura:** W minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Objetivo 1
- Objetivo 2
- Objetivo 3
- Objetivo 4

## Título do primeiro bloco

Parágrafo.

Parágrafo.

## Título do segundo bloco

...

## Coloque em prática

Frases curtas e diretas, uma por parágrafo.
```

A linha de **Cálculo interno** é interna: a equipe remove antes de publicar.

**Não escreva a linha de Cálculo interno nem calcule o tempo de leitura à mão.** Escreva a linha de tempo assim, com o X literal:

```
**Tempo estimado de leitura:** X minutos
```

O `recalc.py` preenche as duas coisas sozinho.

## Regras que não podem ser quebradas

**Proibido no documento final:**
- travessão `—`, e qualquer sequência de hífens `--` ou `---`
- linha separadora `---` entre blocos (a separação é só a linha em branco)
- emoji, qualquer um
- a palavra "curso" ou "cursos" (é **trilha**). "recursos" e "Cursor" são legítimos e não contam
- parágrafo com mais de 4 linhas (na prática, mais de 60 palavras)
- timestamp solto no corpo do texto ou nos títulos
- condensar dois temas distintos em um bloco
- agrupar todos os títulos primeiro e os textos depois
- rótulos tipo "Tema:", "Nível:", "Frase-chave:"

**Objetivos de aprendizado:**
- no máximo 4
- verbos permitidos: identificar, aplicar, distinguir, estruturar, executar, reconhecer
- verbos proibidos: entender, compreender, conhecer. **Nem como nome de etapa dentro do objetivo.** Já aconteceu de um objetivo dizer "Aplicar o ciclo de compreender, definir, construir" e ter que ser reescrito
- no corpo do texto os verbos proibidos são permitidos, a regra vale só para os objetivos

**Densidade.** Pode condensar repetições, pausas e vícios de linguagem. Não pode resumir conceitualmente, que é pegar minutos de explicação e entregar só a conclusão. Bloco que representa 3 minutos de fala nunca tem menos de 6 linhas; 5 minutos, nunca menos de 10.

**Conteúdo técnico nomeado é obrigatório.** Se o professor nomeia uma técnica, conceito, ferramenta ou métrica, ela aparece no documento com o mesmo nome, com explicação do que é e com os exemplos que ele usou. Vale mesmo que ele tenha dedicado pouco tempo.

**Contexto pessoal extenso vira bloco próprio.** Histórico, hábitos, motivações, visão de futuro. Não pode ser comprimido dentro de um bloco de demonstração.

**Todo bloco de demonstração explica o conceito por trás**, não só o que aconteceu na tela. Demonstrações com prompts ou conceitos distintos são blocos separados.

**Bloco que só anuncia o que vem depois é proibido.** Se não tem conceito próprio, o conteúdo vai direto para o bloco seguinte.

**Ordem cronológica da aula**, sempre.

**Subtópicos `###` são exceção**, não regra. Use só quando o bloco tiver 3 ou mais subconceitos que o professor desenvolveu separadamente (exemplos que já usaram isso: as seis hipóteses da A05, a anatomia do prompt da A12).

## A regra dos timestamps (dois erros reais aconteceram aqui)

A linha abaixo fecha um bloco **só quando a transcrição indica a demonstração mas não descreve o resultado visual ou sonoro**:

```
*Para ver o resultado desta demonstração, assista a partir de [XX:XX] no vídeo.*
```

Se a fala descreve o que apareceu na tela, **não coloque a linha**: descreva o resultado no texto.

Antes de escrever qualquer timestamp, confirme as três coisas:

1. **O offset é o primeiro timestamp da transcrição.** Nesta trilha é sempre `00:00:00`, mas confira.
2. **Use o momento em que a demonstração de fato aparece, nunca o anúncio.** Erro real que aconteceu na A06: a linha apontava para `[07:13]`, onde ele diz "vamos ver como ficou", mas a tela só aparece em `[07:26]`, quando ele diz "olha que legal, ele já montou aqui pra gente". Foi corrigido para `[07:26]`.
3. **O timestamp tem que estar confortavelmente dentro da duração da aula.** Erro real que aconteceu na A08: a linha apontava para `[32:21]`, mas a aula acaba em `32:39` e a demonstração só acontece na aula seguinte. O aluno clicaria e não veria nada. A linha foi removida e o bloco passou a dizer em prosa que aquilo é assunto da próxima aula.

## Fidelidade e transcrição corrompida

Use exclusivamente a transcrição. Não invente exemplos, resultados, números ou nomes.

Quando um trecho estiver claramente corrompido e você não tiver certeza do que foi dito: **escreva de forma mais geral, ou omita. Nunca chute.** Depois liste esses trechos no seu relatório, para quem revisa poder conferir no vídeo.

Reconstruções seguras já feitas nesta trilha, que você pode reaproveitar quando o mesmo erro aparecer:
- "cloud", "clothes", "abrocloud" → **Claude**
- "raiko" → **Haiku**; "soné" → **Sonnet**; "opus" → **Opus**; "fable" → **Fable**
- "astra" → **Astra** (modelo da OpenAI que compete com o Fable)
- "idec", "idr", "adi" → **IDE**
- "chat cn", "shed cien", "shad cn" → **shadcn**
- "anticraft", "anti gravity" → **Antigravity**
- "versel", "versão" (quando o contexto é publicar site) → **Vercel**
- "supise", "superbays", "papéis" → **Supabase**
- "get knor" → **gitignore**; "node models" → **node_modules**
- "em físico", "infíssical" → **Infisical** (gestão de variáveis de ambiente)
- "two collings" → **tool calling**; "hurt beat" → **heartbeat**
- "paralisação" → **paralelização**; "stake" → **stack**
- "tan sanson", "tams som" → **TAM, SAM e SOM**
- "business model campus", "pieces model" → **Business Model Canvas**
- "qaz", "os que as" → **QA**
- "icombinator" → **Y Combinator**
- "cambán" → **kanban**

Casos que **não** foram reconstruídos, porque não havia leitura segura: nomes de níveis de esforço de modelo ("ultra code max", "x high"), alguns nomes de harness ("paperclip", "hermes", "buzz"), e vários números que a transcrição comeu a unidade. Faça o mesmo: omita e reporte.

Números com a unidade faltando são o caso mais perigoso. "cobram vinte do que você cobra" pode ser vinte por cento ou vinte vezes menos. Escreva de forma geral.

## O teto de 15 minutos no tempo de leitura (decisão do cliente)

O Prompt Oficial calcula o tempo de leitura como palavras ÷ 200, com teto de 20 minutos.

**O cliente pediu teto de 15 minutos no tempo exibido ao aluno, sem cortar conteúdo.** A conta real continua aparecendo na linha de Cálculo interno, com a observação de que o teto foi aplicado. O `recalc.py` já faz isso sozinho.

Ou seja: não corte conteúdo para caber em 15 minutos. Escreva a descrição completa e deixe o script cuidar do número.

As aulas A05, A08 e A25 têm o aviso final de priorização (`Esta descrição cobre os principais conteúdos da aula. Alguns detalhes complementares estão disponíveis apenas no vídeo.`), pois passaram de 20 minutos de leitura calculada. Só use esse aviso se a conta real passar de 20.

## Os scripts de apoio

Estão na pasta base, ao lado das pastas `Transcrições` e `Descrições`.

**`recalc.py`** — preenche a linha de Cálculo interno e o tempo de leitura, aplicando o teto de 15. Roda em um ou vários arquivos:

```
cd "D:/Claude Code/claude/Descriptions-trilhas/trilhas/ruan-braz/[B] [Atlas para negócios] Transcrição/Descrições"
python "../recalc.py" "A16 - Validando o modelo - a conta, o excesso de plano e o produto certo.md"
```

Ele conta blocos (cabeçalhos `##` menos os dois fixos), parágrafos, palavras, divide por 200, arredonda para cima, e grava tudo. Pode rodar de novo quantas vezes quiser: ele substitui a linha antiga.

**`checkemoji.py`** — varre a pasta atrás de emoji, travessão e qualquer caractere fora dos acentos do português:

```
python "../checkemoji.py" .
```

## Auditoria obrigatória antes de entregar cada aula

```
F="A16 - Validando o modelo - a conta, o excesso de plano e o produto certo.md"
echo "trav=$(grep -o '—' "$F" | wc -l) hif=$(grep -o -- '--' "$F" | wc -l) sep=$(grep -c '^---$' "$F") curso=$(grep -owci 'curso\|cursos' "$F") longo=$(awk 'NF>70 && !/^#/' "$F" | wc -l)"
```

Os cinco contadores precisam dar **0**. O `-w` no contador de curso é o que evita falso positivo com "recursos" e "Cursor".

Depois releia o documento e confirme à mão: 4 objetivos no máximo com verbo permitido, nenhum emoji, blocos em ordem cronológica, e **acentuação correta no documento inteiro**. A auditoria de acentuação é exigência explícita do Prompt Oficial: proparoxítonas (prático, técnico, básico, lógico, único, rápido, público, número, máximo, mínimo, específico, histórico, estratégico), paroxítonas com acento obrigatório (nível, fácil, difícil, útil, possível, sequência, frequência, conteúdo, próprio) e as formas comuns (é, está, são, têm, vêm, também, além, através, não, já, só, aí, lá, há).

## Armadilha desta máquina

**Não escreva arquivo por heredoc no Bash.** Os acentos do português quebram e o comando falha com erro de quote. Use a ferramenta de escrita de arquivo do seu ambiente.

Pelo mesmo motivo, evite passar strings com acento em `python -c` pelo shell. Se precisar de script, grave um arquivo `.py` e execute.

O `grep -P` não funciona nesta máquina (erro de locale). Por isso a checagem de emoji é feita pelo `checkemoji.py`.

## Histórico do planejamento de A16 a A25, já concluído

| aula | duração | legendas | tamanho | pasta |
|---|---|---|---|---|
| A16 - Validando o modelo - a conta, o excesso de plano e o produto certo | 22:35 | 128 | 26 KB | Dia 02 |
| A17 - Perfil ideal de cliente e o gargalo da lista | 11:17 | 86 | 13 KB | Dia 02 |
| A18 - Os três planos de aquisição | 21:48 | 168 | 24 KB | Dia 02 |
| A19 - Seiscentos leads e a lista limpa | 10:33 | 83 | 11 KB | Dia 02 |
| A20 - Cold mail - da lista ao disparo | 08:11 | 71 | 9 KB | Dia 02 |
| A21 - A landing page - do prompt ao primeiro lead na planilha | 26:26 | 296 | 23 KB | Dia 02 |
| A22 - Criativos - da referência às dez imagens | 11:20 | 120 | 11 KB | Dia 02 |
| A23 - Publicando o anúncio e o balanço do fim de semana | 17:41 | 169 | 18 KB | Dia 02 |
| A24 - Subindo o projeto no GitHub e encerramento | 05:56 | 63 | 6 KB | Dia 02 |
| A25 - Perguntas e Respostas | 33:42 | 232 | 41 KB | Complementares |

**Avisos por aula:**

- **A16, A17, A18, A19, A20** têm números, métricas e etapas de funil. Todo número que o professor usar precisa aparecer com o valor exato e com o raciocínio do cálculo, não só o resultado. Confira cada número duas vezes contra a transcrição.
- **A21** é a aula com mais legendas do lote (296 em 26 minutos): fala rápida e muita demonstração. Atenção redobrada na regra dos timestamps.
- **A22** é sobre criativos e imagens. O resultado visual quase nunca está descrito na fala, então provavelmente é onde mais entram linhas de direcionamento.
- **A25** é sessão de perguntas e respostas, 33 minutos, a transcrição mais longa da trilha. A ordem cronológica continua valendo, mas cada pergunta com resposta substantiva tende a virar um bloco. Perguntas administrativas e repetidas devem ser ignoradas, como manda o Prompt Oficial.

## Histórico das primeiras 15 descrições, antes dos materiais

Todas em `Descrições\`, auditadas e aprovadas. Não precisa mexer nelas.

| aula | blocos | palavras | leitura exibida |
|---|---|---|---|
| A01 | 8 | 1.308 | 7 min |
| A02 | 19 | 2.369 | 12 min |
| A03 | 16 | 2.036 | 11 min |
| A04 | 29 | 3.361 | 15 min |
| A05 | 32 | 4.142 | 15 min |
| A06 | 23 | 2.725 | 14 min |
| A07 | 16 | 2.072 | 11 min |
| A08 | 26 | 3.993 | 15 min |
| A09 | 24 | 3.117 | 15 min |
| A10 | 30 | 3.778 | 15 min |
| A11 | 36 | 3.722 | 15 min |
| A12 | 13 | 1.696 | 9 min |
| A13 | 17 | 2.040 | 11 min |
| A14 | 25 | 2.966 | 15 min |
| A15 | 15 | 2.107 | 11 min |

## Pendências e resolução da troca de transcrição

1. **Troca da A01 resolvida em 16/09/2026**, junto com A03 e A04. Os novos arquivos locais já foram enviados ao GitHub. O usuário confirmou conteúdo equivalente e dispensou revisão das descrições; não há retrabalho pendente por essa troca.
2. **A A11 tem números que a transcrição comeu** e foram omitidos de propósito: a meta do cenário agressivo, a projeção mensal de faturamento e a quantidade de serviços na página "meu negócio". Se esses números importarem, precisam ser pegos no vídeo.

## O que entregar ao final de cada aula

Um relatório curto:
- número de blocos, parágrafos, palavras e minutos
- resultado dos cinco contadores da auditoria
- cada timestamp usado, com a fala que justifica ele
- os trechos corrompidos que você interpretou ou omitiu
- decisões de estrutura que o revisor precisa saber
