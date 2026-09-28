# Agentes e Assistentes de IA

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir com precisão o que é um assistente de IA e o que é um agente de IA
- Identificar exemplos práticos de cada categoria nas ferramentas que você já usa
- Estruturar a diferença entre um agente individual e um workflow de múltiplos agentes
- Reconhecer o conceito de subagente na terminologia do Claude

## A distinção que a maioria não sabe fazer

Existe uma diferença fundamental entre quem usa IA como a maioria e quem usa como as pessoas de vanguarda. Essa diferença começa com um conceito que a maior parte das pessoas erra sem perceber: a distinção entre assistente e agente. Quem não domina essa distinção pode estar trabalhando com assistentes e acreditando que está usando agentes.

O sinal de que essa confusão é comum: no YouTube e em conteúdos de criadores de IA, é frequente ver o termo "agente" sendo usado para descrever o que é, tecnicamente, apenas um assistente.

## O que é um assistente

Um assistente te assiste. Você é a pessoa autônoma, que toma a decisão e executa. O assistente presta suporte.

O fluxo de trabalho com um assistente segue sempre o mesmo padrão: input, output. Você pede, ele entrega. Você vai para a janela, faz mais um pedido, ele entrega de novo. Esse ciclo se repete a cada tarefa. Você é quem conduz cada etapa manualmente.

ChatGPT acessado pelo navegador é um assistente. Um GPT customizado criado dentro do ChatGPT também é um assistente: você abre, faz o pedido, ele responde, e você volta para fazer o próximo pedido. Não há fluxo de trabalho autônomo. Não há execução sem você pedindo.

## O que é um agente

Um agente age. A diferença principal é que ele tem autonomia para executar. Você dá um objetivo, e o agente quebra esse objetivo em várias tarefas, executa cada uma delas por conta própria e entrega o resultado final.

No modelo de assistente, você tem: input, output, input, output, input, output. No modelo de agente, você tem: objetivo, execução interna de múltiplas tarefas, entrega. O agente não precisa que você fique voltando para a janela a cada etapa. Ele trabalha para você.

Um exemplo concreto: em vez de ficar clicando em botão, alternando janelas e pedindo uma coisa de cada vez, com um agente você fala o que quer, sai para fazer outra coisa e volta com o trabalho pronto. Claude Code é um agente. Esse é o nível que será construído ao longo do evento.

## Workflow: múltiplos agentes trabalhando juntos

Um workflow é um conjunto de agentes com habilidades, que trabalham em paralelo para cumprir um objetivo maior. Cada agente tem uma caixa de ferramentas, chamada de toolbox, com skills específicas que pode usar.

No modelo de workflow, existe um agente principal que delega para outros agentes. Cada um desses subagentes executa suas tarefas em paralelo. Ao terminar, cada um reporta de volta para o agente principal com a sua entrega. O agente principal pode ainda enviar tudo para um QA, controle de qualidade, que verifica se cada parte está correta antes de considerar o trabalho concluído.

Esse é o nível mais avançado de uso de IA disponível hoje. Quem está de fato trabalhando com IA no nível profissional opera dessa forma.

## Subagente: a terminologia do Claude

A distinção entre agente e subagente é uma taxonomia adotada especificamente pelo Claude. Nem todas as empresas usam esse termo. O Codex, ferramenta equivalente do ChatGPT, chama tudo de agente.

O que o Claude fez foi separar: os agentes próprios do Claude (como Claude Code, o agente de pesquisa e o agente de debug) são chamados de agentes. Quando o usuário cria novos agentes dentro do ambiente do Claude, esses são chamados de subagentes, porque os agentes principais do Claude vão invocar esses agentes criados pelo usuário para trabalhar para eles. A lógica é hierárquica: os agentes principais invocam os subagentes como colaboradores.

## Num time de agentes, assistentes também têm espaço

Um time de agentes não precisa ser composto apenas por agentes. Assistentes também podem fazer parte, desde que em posições adequadas na hierarquia. A estrutura costuma ter agentes de tomada de decisão, agentes de execução prática e assistentes que apóiam tarefas pontuais dentro do fluxo.

É possível ainda configurar agentes para utilizar assistentes dentro do processo. Um robô usando outro robô, como foi descrito. O ponto é que a arquitetura do time pode ser composta de forma inteligente dependendo do que cada parte do fluxo exige.

## Uma expectativa honesta sobre o nível avançado

Workflow com múltiplos agentes é avançado. Isso foi dito de forma direta na aula para não gerar expectativa irreal. O conteúdo mostra o caminho para chegar lá, mas dominar essa abordagem exige prática fora do evento e desenvolvimento de capacidade cognitiva para orquestrar muitas coisas ao mesmo tempo.

Não é necessário sair do evento sendo mestre no workflow avançado. Só de ter os próprios agentes configurados e entender a diferença entre assistente e agente já coloca qualquer pessoa em um nível muito diferente do que a maioria. O avanço para o nível mais sofisticado vem com prática, tempo e continuidade.

## Coloque em prática

- Revise como você usa suas ferramentas de IA hoje e classifique cada uso como assistente ou agente.
- Identifique uma tarefa recorrente no seu trabalho que poderia ser delegada a um agente que executa de forma autônoma.
- Pense num fluxo de trabalho do seu dia a dia que envolve múltiplas etapas e esboce como cada etapa poderia ser atribuída a um agente diferente.
