# Memória de trabalho: Bootcamp Swarm

## Atualização em 02/10/2026

- O usuário forneceu o [link do guia de VPS e SSH no Google Drive](https://drive.google.com/drive/folders/1_I8w6kC4TJqBggzaPRVr91XnLpyDPSh8?usp=sharing). Incluído nas descrições publicadas em `../descricoes/` e nas versões em `txt/` das A22 a A25.
- Evidências: A22, 12:34 (envio do VPSSH); A24, 06:59 a 08:29 (guia e fase zero, incluindo sistema e tipo de instalação); A25, 09:33 a 09:44 (reenvio do VPS SSH). A23 recebe o guia como apoio às escolhas de sistema e instalação. Não foi encontrada referência específica ao arquivo nas A01 a A21, A26 ou A27.
- São 17 aulas com materiais e 10 sem material. README e mapa atualizados. Guia da Meta e ZIP do projeto continuam pendentes.
- A ferramenta de navegação não conseguiu abrir a pasta do Drive; conteúdo e permissões não foram verificados. Foi utilizado o endereço indicado pelo usuário.
- Os registros abaixo são históricos: a pendência do guia de VPS e SSH foi resolvida com o link acima; os caminhos antigos refletem a estrutura anterior à padronização.

## Registro anterior


Atualizado em 18/09/2026. Leia este arquivo e o [índice das aulas](<00 - LEIA-ME.md>) antes de continuar o trabalho nesta trilha.

## Objetivo do usuário

Produzir as descrições das aulas do Bootcamp Swarm de Ruan Braz e inserir, em cada aula correspondente, os materiais encontrados nos chats dos quatro dias. O usuário pediu que o tempo de leitura exibido seja **sensivelmente menor** que a duração do vídeo: para uma aula de 15 minutos, algo como 8 a 10 minutos, sem encurtar o conteúdo da descrição apenas para cumprir o número. Ele pediu as aulas A01 a A27 e informou que solicitou à Nanda dois arquivos: `vps-ssh.html` e `index.html`, sendo este último provavelmente o guia da Meta mostrado na A19.

## Estado atual

- As 27 descrições em Markdown estão em `Descrições/`; as 27 versões em texto simples estão em `Descrições TXT/`. O índice `00 - LEIA-ME.md` liga cada aula às duas versões.
- Os títulos das A01 a A27 agora seguem exatamente os quatro arquivos `[TIT] Titulos das Aulas - Trilha Swarm - 01.md` a `04.md` fornecidos pelo usuário. Os títulos internos preservam a pontuação original; apenas os nomes dos arquivos trocam `:` por ` - ` para compatibilidade com Windows.
- Quatorze aulas têm a seção `Materiais da aula`: A02, A07, A08, A11, A12, A13, A14, A15, A17, A18, A19, A22, A26 e A27. As demais não têm link próprio disponível nos quatro chats recebidos. Isso **não** significa que falte a descrição da aula.
- O mapa de materiais, sua origem e as pendências estão no `00 - LEIA-ME.md`.
- O resumo em texto simples com mini gráfico e situação de cada aula está em `MAPA_DE_MATERIAIS_A01_A27.txt`. Consulte-o quando chegarem os guias para saber onde atualizar as descrições.
- Esse mapa em TXT foi criado depois do commit de publicação e está apenas no projeto local, assim como esta memória e o índice.
- A descrição curta para a página da trilha na plataforma está em `DESCRICAO_DA_TRILHA.md`.
- Um pedido da demonstração de pesquisa diária, publicado por Marina Ficcio no chat, foi preservado em `Materiais/organizados/Dia 02/Prompts/A11 - Pesquisa diaria - recuperacao do chat.md` e reproduzido na descrição da A11. A A12 remete à A11. A recuperação é identificada como feita por participante, sem atribuí-la a um envio direto de Ruan. Assim, as descrições não dependem de publicar a pasta de chats ou materiais no Git.
- `recalc.py` recalcula a linha interna de palavras e o tempo exibido, limita este a cerca de 60% da duração do vídeo e sincroniza o TXT. Links externos e relativos em Markdown são convertidos em texto legível na versão TXT. Execute `python recalc.py` nesta pasta após editar descrições.

## Fontes usadas

- Conteúdo das aulas: `Transcrições/[AL] Aula - 01_semantic.md` a `21_semantic.md`, com a grafia especial `[AL] Aula - 15-_semantic.md` na A15; A22 a A27 usam arquivos `.txt` em formato SRT na mesma pasta.
- Padrão editorial: `../atlas-3a-edicao/ARQUIVO PROMPT/DESCRIÇÃO DE AULA - Prompt Oficial Overlens ( Markdown ).md`. A trilha `[B] [Atlas para negócios] Transcrição` serviu como referência para a seção de materiais e a indicação de proveniência.
- Materiais disponíveis: os quatro exports de chat em `Materiais/dia 01` a `Materiais/dia 04`. Eles contêm links de Ruan, Daniel Silva e participantes. Nanda não publicou material didático nesses exports; sua única mensagem localizada trata do endereço de um evento. Não presumir que ela não tenha enviado algo por WhatsApp ou outro canal fora desses arquivos.

## Pendências conhecidas

1. **Guia da Meta, provável `index.html`:** Ruan o usa na A19; a integração é retomada nas A20 e A21. O chat do terceiro dia mostra apenas um anexo citado e um caminho `file:///` de uma máquina particular. O arquivo não consta em `Materiais/`. O usuário identifica `index.html` como o provável segundo material pedido à Nanda; confirmar pelo conteúdo quando ele chegar.
2. **Guia de VPS e SSH, `vps-ssh.html`:** usado nas A22 a A25. O chat do quarto dia também contém apenas referência a anexo/caminho local, sem o arquivo no projeto. O usuário já o pediu à Nanda.
3. **Cópia compactada do projeto de pesquisa e copy:** na A12, Ruan explica que a pasta pode ser compartilhada por ZIP. Na A13, aos 00:01:08, ele afirma que acabou de enviar o ZIP no chat ao vivo e diz que também o enviaria no grupo. O export TXT do chat do dia 02 registra o link do Figma às 02:24:17, mas não contém o ZIP nem um endereço para baixá-lo; a pasta `Materiais/` também não contém esse arquivo. Portanto, registrar como **enviado segundo a fala de Ruan, mas indisponível na cópia local recebida**. Não confundir com os dois guias solicitados à Nanda.

Quando os guias chegarem, guarde cópias utilizáveis em `Materiais/organizados/`, acrescente links nas descrições correspondentes, atualize o índice e execute `recalc.py`. Não use caminhos `file:///` dos participantes nas descrições publicáveis.

### Destino planejado dos dois arquivos

| Arquivo | Aulas previstas | Motivo |
| --- | --- | --- |
| `index.html`, provável guia da Meta | A19, A20 e A21 | A19 apresenta o guia; A20 o retoma; A21 mostra configurações da Meta relacionadas a ele. |
| `vps-ssh.html` | A22, A23, A24 e A25 | A22 introduz o guia; A23 prepara a VPS; A24 demonstra SSH; A25 usa o guia na configuração. |

Ao receber os arquivos, confirme o conteúdo antes de inserir os links. Verifique especialmente se `vps-ssh.html` cobre a escolha e preparação da VPS da A23; se não cobrir, associe-o apenas às aulas em que for útil. Depois sincronize as versões TXT e atualize o mapa em `00 - LEIA-ME.md`.

## Conferência já feita

Na última auditoria: 27 arquivos Markdown, 27 TXT, 14 aulas com materiais e 27 linhas de aulas no índice, sem destino local quebrado. Os URLs externos incluídos nas descrições foram encontrados nos quatro chats; a disponibilidade atual de cada site externo **não foi testada**. O prompt recuperado foi comparado às três mensagens de origem. A duração exibida foi recalculada a partir das marcas de tempo das transcrições.

Neste checkout principal, o diretório `BOOTCAMP SWARM` ainda aparece como não rastreado porque a publicação ocorreu em um worktree isolado. Há alterações em outras trilhas que não fazem parte deste trabalho; preserve-as.

## Publicação no GitHub em 18/09/2026

O commit `1613e3b4c3a2d6e9379d5c67f418c2a798643fc4` foi enviado para `origin/main` em `https://github.com/paixaolucass/Descriptions-trilhas`. Foram publicados apenas 82 arquivos do Bootcamp Swarm: 27 descrições Markdown, 27 descrições TXT, 27 transcrições e `DESCRICAO_DA_TRILHA.md`. Os chats, os materiais separados, este arquivo de memória, o índice `00 - LEIA-ME.md` e `recalc.py` permaneceram apenas no projeto local.

Para evitar link quebrado no GitHub, os três trechos do pedido de pesquisa recuperado do chat foram reproduzidos diretamente na descrição A11; a A12 remete à A11. A cópia separada do prompt continua na pasta local `Materiais/organizados/`.

A publicação foi feita em um worktree isolado baseado no `origin/main`, porque o checkout principal continha alterações não relacionadas e estava atrás do remoto. Antes de enviar futuras mudanças, atualize o estado do remoto e selecione apenas os arquivos autorizados; não inclua outras trilhas por acidente.

## Revisão leve das descrições em 18/09/2026

As 27 descrições foram relidas pelo título, seções e começo/fim das transcrições correspondentes. A auditoria confirmou 27 pares Markdown/TXT sincronizados, 27 transcrições, seções obrigatórias presentes, tempos exibidos dentro do limite definido e ausência de links locais quebrados nas descrições. Naquela revisão não havia sido fornecida a lista oficial de títulos, então a divergência de nomes não foi identificada. Os guias `index.html` e `vps-ssh.html` continuam pendentes.

## Correção dos títulos oficiais em 18/09/2026

O usuário indicou os quatro arquivos `[TIT] Titulos das Aulas - Trilha Swarm - 01.md` a `04.md` em `D:\downloads\Trabalhos\Overlens\BOOTCAMPT SWARM\Quarta aula\titulos de todas as aulas\Titulos`. Eles contêm os títulos oficiais das A01 a A27. Os títulos inventados anteriormente foram substituídos nos cabeçalhos das 27 descrições, nos nomes dos 27 pares Markdown/TXT e no índice local. Cinco títulos oficiais contêm `:`; esse sinal foi preservado dentro dos arquivos e trocado por ` - ` apenas nos nomes dos arquivos, que precisam funcionar no Windows. `recalc.py` sincronizou os TXT e os cálculos internos.

A verificação comparou os 27 títulos internos à fonte oficial e confirmou 27 pares Markdown/TXT e links locais válidos. O commit `db31aa2349f3280b795f5c168d7ab9cf487bec0f` foi enviado para `origin/main` com apenas os 54 arquivos de descrição renomeados e corrigidos. O índice e esta memória continuam locais. A correção foi publicada em worktree isolado; preserve as alterações não relacionadas do checkout principal.
