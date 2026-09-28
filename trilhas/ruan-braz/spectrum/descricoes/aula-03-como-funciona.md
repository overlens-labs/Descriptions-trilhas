# O que é e como funciona a geração de imagens com IA

**Tempo estimado de leitura:** 12 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar a diferença entre modelos de linguagem (LLMs) e modelos de difusão usados na geração de imagens
- Reconhecer como o processo de treinamento por desconstrução e reconstrução de pixels forma a base estatística da geração de imagens com IA
- Distinguir as fases de evolução do Midjourney da versão 1 à versão 7 e o que cada salto representou na história da criação visual com IA

## A abordagem prática desta trilha

Ruan Braz deixa claro, desde o início desta aula, que não irá mergulhar na teoria profunda das inteligências artificiais. Outras trilhas dentro da plataforma Overlens já cobrem o funcionamento das LLMs e dos modelos de difusão com profundidade, e quem é assinante pode acessá-las. Aqui, a direção é prática: o objetivo é que você aprenda a usar essas ferramentas com inteligência, sem depender de trilhas indefinidamente.

O material de acompanhamento desta aula foi elaborado pela Thais, colaboradora da Overlens, utilizando ela mesma inteligência artificial como parte do processo. O conteúdo foi gerado com base em todas as aulas, treinamentos e materiais que Ruan já produziu sobre geração de imagens. Isso em si já demonstra a lógica da trilha: IA dentro de IA, processo dentro de processo.

A Overlens, segundo Ruan, se diferencia de outras empresas por investir de forma concreta no desenvolvimento da própria equipe. Esse investimento não é apenas financeiro, mas também de tempo. A cultura interna envolve períodos inteiros de testes, validações e explorações conjuntas, funcionando como um laboratório vivo. É nesse contexto que o conhecimento desta trilha é produzido.

## O mecanismo central: como a IA gera imagens

A explicação do funcionamento da geração de imagens parte de uma lógica direta, descrita no material de acompanhamento: você escreve algo, a IA procura padrões que combinam com essa intenção e vai eliminando o ruído até que surja algo coerente com esses padrões. Ruan aprofunda essa descrição com um exemplo visual concreto.

O processo de treinamento de um modelo de geração de imagens funciona de maneira inversa ao processo de geração em si. Para treinar a IA, você envia imagens para ela. Usando o exemplo de uma fotografia de gato: a IA recebe essa imagem e começa a remover pixels progressivamente, desestruturando a imagem até que ela se torne ruído puro, uma mistura sem forma reconhecível. Em seguida, ela precisa reconstruir essa imagem a partir do ruído. É um processo que lembra um jogo da memória: desconstruir e reconstruir, desconstruir e reconstruir, repetidamente.

Esse ciclo acontece não algumas vezes, mas trilhões de vezes, com milhões de imagens diferentes. É o que se chama de machine learning, ou aprendizado de máquina. Enquanto a aula é gravada, existem modelos sendo treinados simultaneamente ao redor do mundo, executando esse processo de forma ininterrupta.

## Como a IA aprende a reconhecer padrões visuais

À medida que o processo de desconstrução e reconstrução se repete, a IA começa a identificar padrões. Esses padrões são lógicos e estatísticos. Usando ainda o exemplo do gato: quando os pixels se organizam de determinada forma para constituir uma orelhinha, a IA passa a reconhecer esse agrupamento como orelha. Quando detecta duas orelhas com determinado padrão, identifica que pode ser um felino. Quando soma o padrão de felino com outros atributos visuais específicos, aprende que aquilo é um gato.

Após aprender a reconhecer os padrões visuais, a IA começa a conectar esses padrões a palavras. A palavra "gato" funciona como um rótulo que é associado ao padrão de pixels correspondente. É assim que a IA aprende a nomear o que vê e, inversamente, a gerar o que recebe como nome no prompt.

Para a IA, todos esses padrões são representados como números. Cada pixel é um número com múltiplas dimensões. Esse número carrega três tipos de informação: a coordenada desse pixel dentro da imagem total, a relação desse pixel com os pixels vizinhos e os padrões que esse conjunto de pixels forma. Essa estrutura de dado é chamada de vetor. Um vetor é a distância de um ponto A a um ponto B, e dentro dessa distância você armazena múltiplas informações. Toda imagem, toda palavra e qualquer artefato digital carrega vetores que a IA utiliza para identificar e gerar padrões. Ruan define esse conceito como o máximo que você precisa saber sobre como as imagens funcionam no nível técnico.

## LLM versus modelo de difusão: a diferença fundamental

A aula distingue dois tipos de modelo de IA que costumam ser confundidos. Os LLMs, Large Language Models (modelos grandes de linguagem), são os modelos usados para texto. ChatGPT, Claude e Gemini são exemplos de LLMs. Esses modelos funcionam de forma preditiva: você envia um prompt, o modelo analisa cada sílaba, cada palavra e o contexto de todas juntas, e estatisticamente devolve um output que é o mais provável dado o conjunto de informações recebidas.

O autocomplete dos aplicativos de celular é descrito por Ruan como o "tataravô" das LLMs: já guardava palavras frequentes e sugeria completações a partir de duas letras digitadas. As LLMs fazem isso em uma escala completamente diferente, sugerindo textos inteiros baseados em bilhões e trilhões de parâmetros.

Os modelos de difusão, por outro lado, operam com uma lógica diferente e são os responsáveis pela geração de imagens. Enquanto as LLMs trabalham com previsão token a token em texto, os modelos de difusão partem do ruído e limpam esse ruído progressivamente até que a imagem coerente emerja, guiada pelo prompt fornecido. É exatamente o processo invertido do treinamento descrito anteriormente.

## A evolução do Midjourney como linha do tempo da criação com IA

Ruan apresenta uma linha do tempo visual da evolução do Midjourney para mostrar como a geração de imagens com IA passou de uma curiosidade quase bizarra para algo capaz de gerar imagens fotorrealistas de alto nível.

Na versão 1 do Midjourney, as imagens geradas eram primitivas a ponto de ninguém usar a ferramenta para criação visual de verdade. A passagem para a versão 2 foi rápida, mas ainda havia muitas distorções: olhos mal formados, elementos misturados, anatomia incorreta. A IA estava começando a reconhecer padrões, mas ainda cometia erros graves de forma consistente.

Na versão 3, os problemas persistiam. Foi na versão 4, lançada por volta de 2022, que algo mudou de forma perceptível. As imagens passaram a ter uma qualidade que fez as pessoas perceberem o potencial real da tecnologia. Ruan descreve a reação de quem estava acompanhando naquele momento como um "Opa, peraí, tem coisa aí." Ele mesmo estava gerando imagens no Midjourney em 2022 e presenciou esse salto em primeira mão.

Naquele período, o Midjourney funcionava dentro do Discord, o que criava uma barreira de entrada mais alta. Era necessário estudar a documentação, aprender a usar parâmetros no prompt e desenvolver um método próprio. Prompts muito grandes às vezes funcionavam, outras vezes não. Prompts curtos às vezes resolviam, outras vezes precisavam ser expandidos. Cada criador estava construindo seu próprio sistema, porque não havia ainda um protocolo estabelecido. Ruan desenvolveu o seu próprio método nesse contexto, entre o final de 2022 e o início de 2023, e esse método está registrado na apresentação de acompanhamento desta aula.

As versões 5, 6 e 7 representaram melhorias progressivas. A versão 7, no entanto, ainda apresentava algumas distorções visíveis, como o braço anatomicamente estranho que Ruan aponta na imagem demonstrativa. A apresentação usada na aula já está desatualizada em relação à versão atual do Midjourney, mas a relevância histórica justifica mantê-la.

## O meme da mão e por que ele explica a limitação dos modelos

Um dos exemplos mais conhecidos das limitações dos modelos de geração de imagem é o chamado "meme da mão": a dificuldade que todas as versões do Midjourney tinham para gerar mãos humanas de forma correta. Da versão 1 à versão 7, passando por cada release intermediário, o problema da mão nunca foi completamente resolvido. Esse tipo de distorção é relativamente comum quando o usuário não sabe utilizar as ferramentas de forma adequada.

Esse fenômeno tem uma explicação lógica dentro do funcionamento dos modelos de difusão. As IAs não geram imagens da mesma forma que humanos. Humanos pensam na totalidade de uma figura antes de desenhá-la, com consciência intencional de cada elemento. A IA parte de padrões estatísticos e probabilidades. A mão humana é anatomicamente complexa, com muitas variações de posição, ângulo, número de dedos visíveis e contexto. Isso torna a geração estatisticamente desafiadora, porque os padrões são menos uniformes do que, por exemplo, os de um rosto de frente ou um animal quadrúpede.

A boa notícia, segundo Ruan, é que modelos mais recentes reduziram significativamente esse problema, mas ele ainda aparece em modelos mais fracos ou em prompts mal construídos. Por isso, é fundamental sempre validar o que foi gerado antes de usar a imagem em qualquer contexto profissional.

## Por que dominar a teoria muda como você usa a ferramenta

Ruan faz uma defesa explícita do conhecimento teórico nesta aula. Pessoas que não reconhecem como os modelos de geração de imagem funcionam acabam caindo em dois extremos: ou chamam a IA de "burra" quando ela falha, ou tratam seus resultados como mágica inexplicável. Nos dois casos, a falta de reconhecimento do mecanismo impede o uso inteligente da ferramenta.

Quando você sabe que a IA é um sistema estatístico, que ela identifica padrões em bilhões de dados e os combina probabilisticamente para gerar a imagem mais adequada ao seu prompt, você passa a tomar decisões melhores. Você sabe quando ajustar o prompt, quando usar parâmetros adicionais, quando a falha é esperada e quando ela indica que você precisa mudar a abordagem.

Teoria e prática não são opostos nesta trilha. A teoria, segundo Ruan, é o que te dá autonomia. A intenção declarada ao longo de toda a trilha é fazer com que os alunos pensem com a própria cabeça, apliquem o raciocínio correto e deixem de depender de trilhas para gerar boas imagens. Essa base teórica é justamente o que torna a autonomia possível.

## O resumo do funcionamento para fixar

Ruan fecha a explicação teórica com uma síntese direta: modelos de geração de imagem são sistemas estatísticos. Não há mágica, há matemática. Há números, vetores, padrões e probabilidades. O processo de treinamento envolve desconstruir imagens em ruído e reconstruí-las, repetindo esse ciclo trilhões de vezes com milhões de imagens, até que o modelo consiga reconhecer e rotular padrões visuais com palavras. A partir daí, dado um prompt com palavras, o modelo consegue fazer o caminho inverso: gerar pixels a partir de padrões.

A imagem do gato sendo desconstruída em ruído e reconstruída é apenas uma representação simplificada. Na prática, esse processo acontece com trilhões de imagens, em múltiplas dimensões, de forma simultânea e contínua. O resultado dessa escala é o que permite aos modelos atuais gerar imagens com qualidade fotográfica profissional a partir de uma instrução em texto.

## A importância da validação no processo criativo com IA

Um ponto que Ruan enfatiza ao longo desta aula, e que vai reaparecer em várias outras, é a necessidade de sempre validar o que foi gerado antes de usar em contexto profissional. Isso não é insegurança, é parte do método. As IAs são sistemas estatísticos, e estatística implica margem de erro. Mesmo os modelos mais avançados produzem resultados que precisam ser revisados.

Essa validação é especialmente importante em elementos que historicamente apresentam maior taxa de inconsistência: mãos, textos incorporados na imagem, anatomia de partes do corpo menos representadas nos dados de treinamento e perspectivas incomuns. Quando você sabe que esses são os pontos sensíveis, pode focar sua atenção de revisão justamente neles, em vez de perder tempo revisando a imagem toda de forma genérica.

Ruan posiciona essa capacidade de identificar onde a IA costuma falhar como parte do conhecimento técnico que diferencia um usuário amador de um profissional. Quem não sabe onde o modelo falha, fica surpreso com os erros. Quem sabe, se antecipa e tem um fluxo de validação mais eficiente.

## Coloque em prática

Antes de avançar para as próximas aulas da trilha, execute o seguinte exercício de fixação. Escolha uma imagem do seu acervo ou da internet, preferencialmente uma fotografia de pessoa ou animal. Observe essa imagem e tente descrever em palavras os padrões visuais que você reconhece: formato do rosto, posição dos olhos, textura da pele, relação entre os elementos, iluminação, cor predominante.

Agora escreva um prompt para o Midjourney ou outra ferramenta de geração que tente reconstruir essa imagem a partir da sua descrição. Esse exercício coloca você no papel da IA: você está fazendo o que o modelo faz, só que na direção inversa. A diferença é que você vai usar linguagem, e a IA vai usar vetores e probabilidades. Ao fazer esse exercício, você começa a perceber por que prompts mais precisos produzem imagens mais fiéis à intenção, e por que elementos complexos como mãos ou texto dentro de imagens ainda apresentam inconsistências nos modelos.

Depois de gerar a imagem, aplique o processo de validação: verifique especificamente as mãos, os olhos e qualquer texto que apareça. Registre os erros encontrados e tente reescrever o prompt para corrigi-los. Essa iteração de geração, validação e ajuste de prompt é o ciclo central do trabalho com geração de imagens por IA.
