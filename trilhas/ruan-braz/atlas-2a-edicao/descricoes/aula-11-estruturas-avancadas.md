# Estruturas Avançadas: Dividir Problema, Corrigir Bugs e Refatorar

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Aplicar a estratégia de paralelização de agentes para processar documentos grandes com eficiência
- Estruturar um prompt de orquestração que delega tarefas sem executar diretamente
- Reconhecer o padrão Tree of Thoughts como técnica de encadeamento de raciocínio entre agentes
- Distinguir quando usar múltiplos agentes em paralelo e quando isso gera mais trabalho do que resultado

## Separando projetos: por que não usar monorepo

A aula começa criando um projeto separado para o Brand System, diferente do projeto de modelo de negócio. A prática de colocar tudo no mesmo repositório se chama monorepo. Não é recomendada para quem está começando porque à medida que o projeto cresce, a pasta acumula arquivos de propósitos diferentes, o Claude fica com mais contexto desnecessário, e fica difícil saber o que pertence a qual parte do projeto.

A prática recomendada é criar uma pasta por projeto, com um repositório específico para cada. Esse isolamento também facilita o versionamento no GitHub e o trabalho em equipe.

## O briefing do Brand System

O briefing para o projeto de Brand System é direto: as principais diretrizes da marca já existem (posicionamento, núcleo da marca, universo verbal, universo visual), mas algumas seções estão incompletas. O objetivo é completar o Brand System com base no documento existente e depois criar uma interface web para visualizá-lo.

O arquivo do Livro de Branding em Markdown é carregado para a pasta do projeto. Em seguida, o Claude é instruído a escrever apenas o briefing em um arquivo `briefing.md`, sem ler o documento inteiro ainda. A leitura completa será feita pelos agentes paralelos que virão em seguida.

## 15 agentes em paralelo quebrando o documento

O prompt de orquestração pede ao Claude que acione 15 subagentes simultâneos para quebrar o documento inteiro em arquivos Markdown separados por tópico. A instrução é explícita: o Claude não executa nada diretamente. Ele apenas delega para os agentes executores, preservando assim sua janela de contexto.

Cada agente extrai uma seção diferente do documento e cria um arquivo Markdown próprio para ela. Um arquivo chamado `index-livro.md` é criado simultaneamente, listando quais seções estão completas e quais estão com conteúdo faltando. Todos os arquivos são salvos na subpasta de conteúdo do projeto.

Preservar a janela de contexto do agente orquestrador é uma estratégia importante. Quando o orquestrador não executa diretamente, ele não consome tokens com a leitura de documentos grandes. Ele coordena e os subagentes trabalham. Isso permite que projetos maiores sejam processados sem que o orquestrador perca a capacidade de raciocinar sobre o todo.

## PRD: o documento de requisitos do projeto

Enquanto os 15 agentes trabalham quebrando o documento, uma segunda instância do Claude cria o PRD, que significa Product Requirement Document, o documento de requisitos do projeto.

O PRD é solicitado a partir do briefing já existente, com um prompt simples: "a partir do briefing, crie um PRD detalhando os requisitos do nosso projeto." O briefing é anexado ao prompt para que o Claude tenha contexto imediato sem precisar procurar pelo arquivo.

Para este projeto, o PRD especifica que a entrega final será uma interface web para visualizar o Brand System. A stack escolhida pelo Claude é Next.js, shadcn/ui, Tailwind CSS e MDX. O MDX permite renderizar os arquivos Markdown diretamente na interface, o que acelera a navegação e mantém o conteúdo fácil de atualizar.

## O comando BTW e como injetar contexto durante a execução

Durante a execução de um agente, é possível enviar informações adicionais sem interromper o trabalho usando o prefixo BTW (By The Way). Esse recurso permite corrigir a trilha do agente, dar contexto novo ou avisar sobre uma restrição enquanto ele ainda está trabalhando.

Por exemplo: se um agente está lendo um documento e vai começar a analisar uma seção que não é necessária, você pode digitar "BTW: não precisa ler tudo, foca apenas nas seções de universo verbal e visual" e o agente ajusta sem precisar recomeçar do zero.

## O risco do overengineering com agentes

Usar muitos agentes em paralelo otimiza tempo, mas não necessariamente melhora a qualidade do output. Se 15 agentes gerarem 15 documentos, o usuário precisará ler 15 documentos. Isso pode ser mais trabalho do que o necessário.

O cuidado importante: usar agentes em paralelo faz mais sentido quando eles compartilham informações entre si e quando existe um agente de QA verificando o trabalho dos outros. O QA recebe os resultados, avalia se os critérios foram atendidos e, se não foram, devolve a tarefa para o agente executar novamente. Esse ciclo de revisão interna é o que transforma uma paralelização simples em algo realmente poderoso.

## Tree of Thoughts: agentes conversando entre si

O padrão que rege esse tipo de orquestração avançada se chama Tree of Thoughts, ou TOT. O conceito, oriundo da engenharia de prompt, consiste em criar uma cadeia de raciocínios entre IAs, fazendo com que elas conversem entre si e avaliem as respostas umas das outras.

Em vez de uma única IA respondendo linearmente, você tem múltiplos pontos de vista sendo gerados em paralelo e avaliados entre si, chegando a respostas mais robustas do que uma sequência simples de prompts conseguiria. O recurso PromptingGuide.ai, mencionado na aula, cobre esse e outros padrões avançados de engenharia de prompt para quem quiser se aprofundar.

## Coloque em prática

- Antes de solicitar execução ao Claude, peça que ele planeje o que vai fazer e liste quais agentes e arquivos serão criados. Revise o plano antes de avançar.
- Quando um documento for grande demais para ser lido em uma única sessão, use o padrão de orquestração: um agente coordenador que delega partes do documento para agentes executores em paralelo.
- Experimente o comando BTW durante uma execução para injetar uma correção de rota sem precisar recomeçar o trabalho.
