# Descriptions-trilhas

Descrições e transcrições das aulas das trilhas da Overlens (Overpass). O Overchat da plataforma nova usa este repositório para recomendar conteúdo.

- **Índice das trilhas**, com as contagens e o que falta: [INDICE.md](INDICE.md)
- **Termos oficiais** (nomes de trilhas, pessoas e conceitos): [PADRAO_TERMINOLOGIA.md](PADRAO_TERMINOLOGIA.md)

## Estrutura

```
trilhas/
  <professor>/                         ruan-braz, mateus-scopel, vinni-del-poco
    <trilha>/                          minúsculo, sem acento, com hífen
      aula-NN-<slug>.md                descrição publicada da aula (uma por aula)
      descricao-da-trilha.md           descrição da trilha (quando existe)
      README.md                        leia-me da trilha (quando existe)
      planilha-<trilha>.csv            planilha de sequência da trilha (quando existe)
      transcricoes/
        aula-NN-<slug>.<txt|srt|vtt|md>   transcrição da aula, com o MESMO nome da descrição
        exercicio-<slug>.<ext>            transcrição de exercício (não tem descrição própria)
      materiais/                       apoio da trilha:
        txt/                           cópias das descrições sem markdown
        descricoes-brutas/             rascunhos das descrições (com a linha "Cálculo interno")
        ...                            memórias de trabalho, prompts, bate-papos, planilhas extras
prompt/                                prompts oficiais para escrever as descrições
docs/                                  scripts e registros (índice, padronização)
```

## Regras

1. **Nomes de pasta e arquivo:** minúsculo, sem acento, sem espaço, com as palavras separadas por hífen.
2. **Número da aula com 2 dígitos:** `aula-01`, `aula-02`... Uma aula "meio" fica `aula-00-5`.
3. **Transcrição de uma aula:** tem o mesmo nome da descrição, só que dentro de `transcricoes/`. Por exemplo, `aula-07-x.md` vai com `transcricoes/aula-07-x.txt`. Uma aula pode ter a transcrição em mais de um formato (`.srt` e `.txt`), sempre com o mesmo nome.
4. **A descrição da raiz é a versão publicada:** começa pelo título (`# ...`). Os rascunhos ficam em `materiais/`.
5. **Formatos de transcrição:** `.txt`, `.srt`, `.vtt` ou `.md`. Os `.srt` e `.vtt` guardam o tempo de cada fala.
6. **Trilha nova:**
   - crie `trilhas/<professor>/<trilha>/` seguindo o padrão acima;
   - rode `node docs/gerar-indice.js` para atualizar o [INDICE.md](INDICE.md).

## Pendências conhecidas

- Na trilha Syntax, as aulas 37 a 39 são exercícios e têm transcrição, mas não têm descrição.
- `conteudo-faltando.csv` e `verificacao-trilhas.md` listam o que ainda falta produzir ou conferir.

## Histórico

- **28/09/2026:**
  - O repositório foi transferido para a overlens-labs e padronizado.
  - O de-para completo, com o caminho antigo e o novo de cada arquivo, está em [docs/padronizacao-2026-09-28/de-para.csv](docs/padronizacao-2026-09-28/de-para.csv).
  - Os scripts usados também estão nessa pasta.
