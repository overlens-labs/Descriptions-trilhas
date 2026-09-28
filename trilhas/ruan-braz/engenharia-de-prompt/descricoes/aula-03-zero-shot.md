# Zero-Shot

**Tempo estimado de leitura:** 3 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o que é uma solicitação zero-shot e reconhecer quando ela está sendo usada
- Distinguir os contextos em que o zero-shot é a abordagem mais adequada e os contextos em que ele limita a profundidade da resposta
- Aplicar o zero-shot como ponto de partida de conversas exploratórias com LLMs, construindo contexto progressivamente a partir das respostas iniciais

## O que é zero-shot

Zero-shot é o termo global usado por comunidades e repositórios de engenharia de prompt para descrever uma solicitação feita sem fornecer nenhum contexto prévio à IA. O nome vem do inglês: zero tiros. Você aperta o gatilho sem ter carregado nenhuma informação antes - o pedido chega ao modelo puro, sem exemplos, sem dados de contexto, sem instruções adicionais.

Um exemplo clássico de zero-shot é pedir: "Classifique o sentimento do texto: a viagem foi boa." Outra forma é: "Me explique as melhores abordagens de design thinking do mundo." Em ambos os casos, você está fazendo uma solicitação direta, sem preparar o terreno antes. Isso é zero-shot.

Vale deixar claro: zero-shot não é necessariamente ruim. É uma abordagem legítima e muito usada - inclusive pelo próprio instrutor, que afirma utilizá-la com frequência no dia a dia.

## Quando o zero-shot funciona bem

O zero-shot é a abordagem certa em situações específicas. Ele funciona muito bem para perguntas rápidas e diretas, onde você quer a resposta objetiva da IA sem precisar de camadas extras de contextualização. Pense em usar a LLM como um dicionário: "O que significa o termo zero-shot?" - isso é um zero-shot eficiente.

Ele também é adequado para tarefas simples, onde o modelo não precisa de referências adicionais para entregar o resultado esperado. E representa uma boa escolha quando você quer economizar tokens, já que um pedido enxuto ocupa menos da janela de contexto e deixa mais espaço para a resposta.

Outra situação em que o zero-shot se destaca é quando você quer que a IA traga o que ela sabe sobre um termo ou assunto sem influência do seu próprio ponto de vista. Ao não fornecer contexto, você deixa o modelo trazer sua visão mais ampla sobre o assunto.

## A limitação do zero-shot e a transição para o contexto

A principal limitação do zero-shot é o pouco controle sobre a resposta. Como você não deu direção específica, o modelo decide por conta própria o que incluir, que nível de profundidade usar e que ângulo adotar. Para assuntos complexos ou quando você tem um objetivo específico em mente, essa falta de direção produz respostas que ficam na camada mais acessível do conhecimento - o que a aula chama de resposta de superfície.

O zero-shot é como chegar ao guardião da biblioteca e dizer "quero livros de ficção científica." Ele te leva a uma fileira e te apresenta os títulos mais conhecidos. Isso por si só já entrega muito conhecimento. Mas se você quiser ir mais fundo - encontrar os manuscritos raros, os ensaios de crítica, as análises comparativas - vai precisar de mais precisão no pedido.

## Zero-shot como ponto de partida de uma conversa

Uma das formas mais eficazes de usar o zero-shot é como abertura de uma conversa exploratória. Você faz um pedido amplo, recebe uma resposta inicial e usa essa resposta como trampolim para pedidos cada vez mais específicos. A partir do segundo pedido, a conversa deixa de ser zero-shot - o modelo já tem contexto acumulado da troca anterior e passa a trabalhar com esse contexto. Isso é o que a aula chama de abordagem mista de conversa.

Por exemplo: você começa com "me explique as melhores abordagens de design thinking do mundo." Recebe a resposta. Depois pede: "me explique melhor o Double Diamond." A partir daí, você está mergulhando em camadas mais profundas, usando a própria conversa como contexto. O instrumento zero-shot cumpriu seu papel de abrir a porta - e agora você vai explorando os corredores mais distantes da biblioteca.

## Coloque em prática

Faça um zero-shot sobre um tema que você domina pouco. Use o pedido como ponto de partida e, a partir da primeira resposta, construa pelo menos três perguntas progressivamente mais específicas. Observe como a conversa ganha profundidade à medida que o contexto se acumula. Anote o momento em que você sente que saiu da superfície e chegou a um nível de informação que não esperava encontrar.
