Cálculo interno: [11 blocos] / [36 parágrafos totais] / [1249 palavras estimadas] / [1249 ÷ 200 = 7 minutos]

# Criando seu primeiro projeto

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Estruturar documentos de planejamento para um Brand System
- Reconhecer briefing, PRD, SPEC e plano de UI
- Executar a criação inicial do scaffold com agentes
- Aplicar ajustes visuais e componentes com Storybook

## Dois caminhos para acompanhar a construção

A aula começa estabelecendo dois caminhos. Quem está começando do zero pode usar as diretrizes da Overlens para acompanhar a criação do Brand System. Quem já tem documentação própria pode usar a marca do próprio negócio.

O Ruan compartilha um documento de overview da Overlens para quem ainda não tem diretrizes prontas. Esse material serve como conteúdo inicial para popular o sistema e permitir que todos consigam avançar na construção da interface.

A orientação é não tentar fazer tudo ao mesmo tempo enquanto assiste. O aluno deve prestar atenção, anotar o caminho e executar depois, principalmente se ainda estiver se familiarizando com IDE, terminal, pastas e agentes de código.

## Preparação dos documentos de marca

O arquivo de overview baixado precisa ser colocado dentro da pasta do projeto, preferencialmente dentro da pasta de diretrizes. Depois, o agente é instruído a quebrar o arquivo em múltiplos arquivos Markdown, um por página.

Essa separação é necessária porque o Brand System terá páginas de documentação. Cada página do sistema corresponde a um arquivo ou conteúdo separado, o que facilita organização, renderização e leitura pela IA.

O Ruan recomenda usar Claude em modo que aceite edições ou modo automático, quando disponível. Também explica que modelos como Sonnet ou Haiku podem gastar menos créditos, enquanto modelos mais fortes como Opus tendem a cometer menos erros.

## Infraestrutura e o conceito de stack

A aula diferencia a construção da interface das camadas de infraestrutura. Autenticação, banco de dados, storage e servidor serão trabalhados depois, mas a base do sistema precisa ser criada primeiro.

Para criar o sistema, a IA precisa de uma stack, ou conjunto de tecnologias. O Ruan não entra em todos os detalhes técnicos, mas cita a direção de um webapp com Next, Tailwind, ShadCN, MDX, Supabase e Vercel.

A stack define com quais tecnologias o projeto será construído. Mesmo que o aluno ainda não entenda cada ferramenta, a IA pode gerar os documentos técnicos e o código inicial a partir de uma instrução bem estruturada.

## Briefing, PRD e SPEC

Antes de pedir para a IA codar, a aula cria documentos de planejamento. O briefing resume a ideia do sistema, seu objetivo, público, problema que resolve, escopo e princípios do produto.

O PRD, Product Requirements Document, define os requisitos do produto. Ele descreve funcionalidades, necessidades, critérios de sucesso e o que precisa existir para que o sistema funcione.

A SPEC define as especificações técnicas. Ela descreve arquitetura, pastas, tecnologias, rotas, organização dos arquivos e decisões de implementação. A IA usa esse documento para construir com mais consistência.

## Plano de UI e wireframe de baixa fidelidade

O Ruan também cria um plano de interface. Para isso, usa desenhos simples de baixa fidelidade, mostrando a disposição de sidebar, logo, títulos, parágrafos, áreas de prompt, lista de ideias, login e página inicial.

Um wireframe de baixa fidelidade não precisa ser bonito. Ele serve para comunicar estrutura: onde ficam os elementos, quais páginas existem e como a interface deve ser organizada.

Os prints desses desenhos são enviados para o Claude com Alt V no terminal. A IA interpreta a imagem, compara com PRD e SPEC, identifica elementos novos e atualiza os documentos quando necessário.

## Barra init e memória do projeto

Depois que briefing, PRD, SPEC, plano de UI e diretrizes existem no projeto, a aula roda o comando `/init`. Esse comando cria um arquivo `CLAUDE.md`, que funciona como memória e índice do projeto para o Claude.

O Ruan explica que cada nova sessão do agente começa zerada. O arquivo de memória ajuda o agente a entender rapidamente o que é o projeto, quais documentos existem e como deve trabalhar.

Rodar o init cedo demais não faria sentido, porque o projeto ainda não teria contexto. O momento correto é depois que os documentos principais já estão disponíveis.

## Criação do scaffold com agentes

Com o contexto pronto, o Ruan pede ao Claude para criar a estrutura do projeto com agentes em paralelização. O agente principal deve delegar tarefas, criar os arquivos e revisar se tudo está de acordo com os documentos.

Nesse momento, surgem muitas pastas e arquivos. O Ruan avisa que isso pode assustar, mas faz parte da criação do scaffold, a estrutura básica do sistema.

Ao final, o Claude compara o resultado com briefing, PRD, SPEC e plano de interface. Ele verifica se a estrutura de pastas, camada de conteúdo, rotas, layout e tokens de design batem com o planejado.

## Rodando o projeto localmente

Para visualizar o sistema, a aula usa `npm run dev` ou, em alguns casos, `pnpm dev`. Esse comando cria um servidor local de desenvolvimento e gera um link `localhost`, geralmente na porta 3000.

Se o projeto foi criado dentro de uma subpasta, o aluno precisa entrar nela com `cd nome-da-pasta` antes de rodar o comando. Se der erro, a orientação é tirar print e pedir para a IA explicar.

Também é possível pedir ao Claude para rodar o projeto, usando linguagem natural ou shell mode. Isso gasta tokens, mas permite que a IA identifique e corrija problemas automaticamente.

## Ajustes visuais com prints e linguagem natural

Depois que o sistema abre no navegador, a aula mostra ajustes simples. O Ruan tira print da tela, cola no Claude e pede mudanças como abrir a sidebar, mostrar nomes dos itens, corrigir hover, trocar fonte, ajustar ícones e substituir o logo.

O processo é intencionalmente simples: o aluno mostra visualmente o problema e descreve o que quer. A IA procura os arquivos corretos e altera os componentes.

Esse fluxo mostra que o aluno não precisa editar manualmente cada arquivo no início. Ele pode atuar como diretor do sistema, avaliando a interface e pedindo ajustes claros.

## Storybook e Design System

A aula apresenta o Storybook como uma forma de gerenciar componentes. O Ruan pede ao Claude para instalar o Storybook, componentizar o sistema e cadastrar os componentes.

Com o Storybook, botões, cards, ícones, media cards e outros elementos podem ser visualizados e corrigidos isoladamente. Isso torna o trabalho mais sistêmico, porque alterações em componentes podem ser replicadas no projeto.

O Design System permite reaproveitar componentes em outros projetos, desde que esteja organizado em uma pasta própria e seja referenciado pelo agente quando necessário.

## Assets e personalização do sistema

A personalização também inclui tipografia, logotipo e imagens. O Ruan demonstra como usar Google Fonts para trocar títulos, como criar uma pasta de ativos e como pedir ao Claude para substituir o logo na sidebar.

Se um arquivo não puder ser arrastado diretamente para o terminal, ele pode ser colocado em uma pasta dentro do projeto, como `ativos` ou `img`. Depois, o agente é instruído a puxar o arquivo dessa pasta e aplicá-lo na interface.

O resultado da aula é um Brand System local, com estrutura criada, páginas funcionando, sidebar, conteúdo renderizado e primeiros ajustes visuais realizados.

## Coloque em prática

Crie, nesta ordem, os documentos de briefing, PRD, SPEC e plano de UI antes de pedir para a IA construir o sistema.

Depois, rode o projeto localmente, tire prints da interface e peça ajustes pequenos até a base visual ficar utilizável.

Esta descrição cobre os principais conteúdos da aula. Alguns detalhes complementares estão disponíveis apenas no vídeo.
