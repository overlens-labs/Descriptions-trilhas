# Refinando seu projeto

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar ajustes visuais com prints e linguagem natural
- Reconhecer quando limpar contexto e trocar modelo
- Identificar autenticação, banco de dados e storage no Brand System
- Estruturar telas de login e gestão de ativos antes da conexão real

## Ajustes visuais com imagens e instruções simples

A aula começa mostrando como refinar a interface usando prints. O Ruan tira uma captura da tela, cola no Claude com Alt V e pede a troca da tipografia dos títulos para Outfit, a fonte usada pela Overlens.

Ele orienta o agente a trocar a tipografia em todos os títulos, remover rastros da fonte antiga e alterar também os tokens do projeto. Essa instrução amplia a mudança para o sistema inteiro, evitando que a fonte fique aplicada apenas em uma página.

Em seguida, o Ruan tira print da sidebar e pede para remover separadores de texto, deixar apenas os itens de menu e adicionar uma barra de pesquisa. A aula mostra que pequenos ajustes visuais podem ser feitos sem navegar manualmente por cada arquivo.

## Trabalhando com múltiplos terminais

O Antigravity permite abrir vários terminais no mesmo projeto. Um terminal pode manter o servidor local rodando com `npm run dev`, enquanto outro executa Claude Code para aplicar mudanças.

O Ruan demonstra que não é necessário esperar um agente terminar para iniciar outro ajuste simples. Ele abre um novo terminal, carrega o Claude e faz uma nova solicitação visual enquanto a anterior ainda está em andamento.

Essa forma de trabalhar acelera a iteração, mas exige atenção. Para tarefas maiores ou que mexem nas mesmas áreas, é melhor controlar melhor a ordem para evitar conflitos.

## Ajuste de contexto e troca de modelo

A aula explica o uso do comando `/context` para verificar quanto da janela de contexto foi consumido. Mesmo que o percentual pareça baixo, o Ruan observa que conversas acima de muitos tokens podem aumentar a chance de erro.

Para reduzir risco, ele usa `/clear` e recomeça a conversa antes de pedir novos ajustes. Isso limpa a janela de contexto e deixa o agente mais focado na tarefa atual.

Também é possível trocar o modelo com `/model` e ajustar o esforço com `/effort`. Para alterações visuais simples, modelos mais baratos podem funcionar. Para tarefas mais complexas, modelos mais fortes tendem a cometer menos erros.

## Inserindo imagens e assets no projeto

Para inserir uma imagem, o Ruan cria uma pasta `IMG` dentro do projeto e coloca o arquivo nela. Depois, puxa a imagem para o Claude e pede que ela seja adicionada à página de introdução antes do texto.

Ele também orienta a IA a fazer a inserção corretamente para que a imagem vá junto quando o projeto for publicado. Isso evita que a imagem funcione apenas localmente, mas desapareça no deploy.

Depois, o Ruan pede ajustes de largura, borda e raio de canto. A aula diferencia borda de raio de canto: borda é a linha ao redor do elemento; corner ou border-radius define o arredondamento das pontas.

## Cards de logotipo e download

A aula mostra o mesmo processo aplicado ao logotipo. O Ruan abre a página de logotipo, tira um print e pede para criar um card com as versões dark e light do logo, incluindo botões de download.

Como o logo já estava em uma pasta de ativos ou havia sido usado na sidebar, o Claude consegue reutilizá-lo. O aluno deve manter imagens, logos e arquivos em pastas de referência dentro do projeto.

Essa prática organiza os assets e facilita pedidos futuros. Em vez de explicar toda vez onde está cada arquivo, o aluno cria uma pasta e diz ao agente para buscar os materiais ali.

## Autenticação e níveis de usuário

Depois dos ajustes visuais, a aula retoma os conceitos de infraestrutura. A autenticação define quem é o usuário e quais permissões ele tem dentro da ferramenta.

O Ruan exemplifica três níveis: admin, staff e gratuito. O admin pode fazer tudo, inclusive excluir; o staff pode editar; o gratuito pode apenas visualizar. A autenticação usa login para identificar o usuário e aplicar suas permissões.

A aula pede ao Claude para verificar se já existe tela de login. Como ainda não existe, o Ruan envia o wireframe e pede para criar telas de login, criação de conta e logout, mas apenas como interface por enquanto.

## Supabase, banco de dados e storage

O Supabase será usado porque reúne autenticação, banco de dados e storage. O banco de dados guardará informações e documentos do Brand System, incluindo conteúdos em Markdown ou MDX.

O Ruan explica banco de dados de forma simples: tabelas com colunas e linhas que guardam informações, como e-mail, senha, IDs e dados vinculados a usuários ou eventos. Alguns dados são fixos, outros mudam com frequência, e essa diferença influencia como o banco deve ser estruturado.

O storage guarda arquivos pesados, como imagens, vídeos, músicas, PDFs, documentos e ativos da marca. Esses arquivos não devem ser tratados como simples dados de tabela.

## Tela de gestão de ativos

Para usar o storage, a aula cria uma tela de gestão de ativos da marca. Ela terá cards para upload de arquivos como logotipo, cores, tipografias, imagens, vídeos, áudios e PDFs.

O Ruan desenha uma estrutura com sidebar própria, itens por tipo de asset, banner no topo, barra de pesquisa, botão de upload e botão de voltar. Depois envia o desenho ao Claude e pede que agentes em paralelização construam a tela.

A primeira versão pode não estar visualmente perfeita, mas já cria a lógica de navegação e organização. O refinamento visual pode ser feito depois com novos prints e instruções.

## Preparação para conectar Supabase via MCP

Antes de configurar tudo, o Ruan reforça que o Claude precisa estar conectado ao Supabase via MCP. Se a conexão estiver vinculada a outra organização ou conta, o agente pode não encontrar o projeto certo.

A primeira confirmação é simples: pedir ao agente para verificar se tem acesso ao Supabase e se consegue ver o projeto Brand System. Se ele confirma, a etapa seguinte é criar plano de execução para autenticação, banco de dados e storage.

Esse planejamento antecede a configuração real. A aula recomenda estruturar bem o pedido para que cada agente cuide de uma etapa, com permissões, tabelas, armazenamento e upload de ativos.

## Coloque em prática

Faça três ajustes visuais no seu Brand System usando prints: uma mudança de tipografia, uma mudança na sidebar e uma inclusão de imagem.

Depois, crie as telas de login e gestão de ativos antes de conectar banco de dados, autenticação e storage.

Esta descrição cobre os principais conteúdos da aula. Alguns detalhes complementares estão disponíveis apenas no vídeo.

## PROMPT 1 - Tela de gestão de ativos (00:27:24)

Preciso que você crie uma tela de gestão de ativos da marca. Essa tela vai apresentar Cards que eu posso fazer upload de arquivos como logotipo, cores, tipografia, imagens, vídeos, PDFs, etc. Eu preciso que essa página tenha um sidebar próprio. Cada item do sidebar será um tipo de asset diferente. Teremos: logotipos, cores, tipografia, imagens, vídeos, áudios. Quero que em cada página tenha um banner no topo com título, subtítulo e background gradiente com animation. Abaixo do banner, quero uma barra de pesquisa. Na direita da barra, um botão de Upload. Você não executa. Você apenas delega. Coloque agentes em paralelização para realizarem o trabalho por você.

## PROMPT 2 - Configurar Supabase (auth + banco + storage) (00:37:26)

Aqui vamos precisar trabalhar em várias etapas diferentes. Preciso que você orquestre um conjunto de agentes em paralelização. Cada um responsável por uma etapa. Precisamos configurar: autenticação, banco de dados e storage. Já temos a página de login e criar conta. Precisamos definir dois tipos de usuários:
- admin: permissão bypass total (editar, excluir arquivos, ativos e usuários)
- staff: usuário padrão quando alguém cria conta

Na tela de configurações, uma seção para gerenciar membros e definir níveis de acesso [admin ou staff]. Além disso, precisamos criar as tabelas dos MDXs. E o storage para armazenar os ativos da marca. Tanto admins quanto staff podem fazer upload na página de Ativos da Marca. Antes de começar, quero que você crie um plano de execução. Na sequência, delegue para os agentes a execução do projeto.
