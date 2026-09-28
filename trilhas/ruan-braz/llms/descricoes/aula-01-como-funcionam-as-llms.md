# Como Funcionam as LLMs

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o mecanismo central pelo qual as LLMs geram respostas, reconhecendo o papel da previsão de tokens na construção de cada frase.
- Distinguir parâmetros de bancos de dados tradicionais, mapeando como os pesos internos de uma rede neural estabelecem relações entre palavras sem armazenar informações em forma de dicionário.
- Reconhecer a diferença entre os modelos pré-Transformer e os modelos baseados no mecanismo de atenção, percebendo o impacto prático dessa evolução na qualidade das respostas.
- Aplicar os conceitos de input, tokens e janela de contexto ao interagir com ferramentas como ChatGPT, Gemini e Claude, tomando decisões mais conscientes sobre como estruturar cada conversa.
- Identificar as limitações estruturais das LLMs e distinguir quais comportamentos decorrem dessas limitações, não de erros aleatórios ou má qualidade do modelo.

## Por que estudar o funcionamento interno das LLMs

Existe hoje uma enxurrada de conteúdo na internet sobre Large Language Models. Você encontra explicações no YouTube, no Reddit, no Instagram, em newsletters e até nos próprios chats das IAs. O ChatGPT é perfeitamente capaz de explicar como ele mesmo funciona. Então por que dedicar uma aula inteira a esse tema dentro de um minicurso para criativos?

A maioria dos conteúdos disponíveis cai em um de dois extremos opostos. O primeiro é raso demais: diz que "LLM é Large Language Model", menciona tokens e janela de contexto, talvez liste ferramentas populares, e para por aí. Quem assiste sai com sensação de aprendizado, mas na prática não sabe o suficiente para usar as ferramentas de forma diferente. O segundo extremo vai na direção contrária e chega de cara com diagramas de arquitetura, equações e terminologia de pesquisa em machine learning que afasta qualquer pessoa que não seja engenheira de IA.

A proposta desta aula é ocupar a faixa intermediária: explicar o suficiente para que você saiba o que está acontecendo por baixo dos panos quando digita uma mensagem e recebe uma resposta. Com esse mapa mental mais preciso, você extrai resultados melhores das ferramentas, lida com as limitações sem frustração e toma decisões mais inteligentes sobre quando usar cada LLM.

Dominar esses fundamentos muda sua relação com as IAs de forma concreta. Quando você reconhece por que uma LLM às vezes gera informações incorretas com total confiança, você para de tratar isso como falha aleatória e começa a verificar dados críticos em fontes externas. Quando você percebe como a janela de contexto funciona, você para de se surpreender quando o modelo "esquece" o início de uma conversa longa e passa a organizar suas interações de forma mais eficiente. Essa consciência prática separa o usuário que briga com a ferramenta do usuário que sabe usá-la.

A abordagem desta aula é incomum: em vez de Ruan simplesmente explicar, ele usa as próprias LLMs como objeto de estudo e como ferramenta de ensino simultaneamente, criando uma dupla camada de aprendizado.

## A origem do conceito: autocompletar e a previsão de palavras

Antes de mergulhar nas LLMs modernas, vale situar o ponto de partida histórico para tornar o conceito central mais intuitivo. Você certamente já começou a digitar algo no Google e, antes de terminar a frase, apareceram várias sugestões: "Como as IAs aprendem", "Como as IAs funcionam", "Como as IAs são treinadas". Você também já experimentou o teclado do celular sugerindo a próxima palavra enquanto digitava. Com o tempo, essas sugestões ficam mais precisas para o seu estilo específico de escrita porque o celular aprende com você.

Esses dois sistemas, a autocomplete do Google e o teclado preditivo do smartphone, podem ser chamados de avós das LLMs modernas. O que eles fazem é prever qual palavra ou sequência vem a seguir com base em padrões aprendidos de dados. A limitação é que são estreitos e específicos: o teclado do celular olha apenas para as duas ou três palavras anteriores, não consegue manter uma conversa nem gerar parágrafos coerentes.

O ponto de conexão com as LLMs modernas é que o mecanismo central, prever o próximo token, permanece o mesmo. O que mudou foi a escala, a arquitetura e a capacidade de manter contexto ao longo de sequências muito maiores. No fundo, uma LLM moderna está fazendo uma versão extraordinariamente sofisticada da mesma operação que o seu teclado tenta fazer.

## O que é uma LLM e como ela gera respostas

LLM é a sigla de Large Language Model, modelo de linguagem de grande escala. ChatGPT, Gemini, Claude, Grok, todas essas ferramentas que você já usa são LLMs. Mas o que significa "grande" aqui não é apenas o tamanho do arquivo ou a quantidade de dados usados no treinamento. "Grande" refere-se principalmente ao número de parâmetros internos do modelo, que são os valores numéricos que determinam como ele processa e relaciona cada pedaço de informação que recebe.

Quando você envia uma mensagem para o ChatGPT, para o Gemini ou para o Claude, essa mensagem é chamada de input. Pode ser um texto, uma imagem, um arquivo de áudio ou uma combinação de todos esses formatos, dependendo das capacidades do modelo específico. O input chega ao modelo, que começa o processo de gerar uma resposta. Mas como exatamente essa resposta é construída?

A resposta é gerada palavra por palavra, ou mais precisamente, token por token. Um token não corresponde exatamente a uma palavra. Dependendo do modelo e do idioma, um token pode ser uma palavra inteira, parte de uma palavra, um sufixo, um prefixo ou um símbolo de pontuação. Uma regra prática útil: em inglês, 1 token equivale a aproximadamente 0,75 palavras. Em português, a proporção é geralmente um pouco menor, já que palavras em português tendem a ser mais longas. Mas o que importa para esta aula não é a granularidade técnica dos tokens, e sim o processo de geração.

O que o modelo faz é: analisa todo o input que recebeu, atribui pesos diferentes para cada parte desse input de acordo com o que é mais relevante para gerar uma boa resposta, e então prevê qual é o próximo token mais provável. Depois de gerar esse token, ele lê tudo o que gerou até agora, incluindo o novo token, e prevê o próximo. Lê tudo de novo, prevê o próximo. E repete esse ciclo até concluir a resposta completa.

Isso significa que a resposta de uma LLM não é recuperada de um banco de dados como uma consulta SQL. O modelo não tem uma enciclopédia interna onde busca a resposta certa e a devolve para você. Ele constrói a resposta dinamicamente, token por token, com base nos padrões que internalizou durante o processo de treinamento. Essa distinção é fundamental para mapear tanto as capacidades quanto as limitações dessas ferramentas. Se a resposta fosse uma consulta a banco de dados, ela seria previsível, consistente e verificável. Como é geração probabilística, ela pode variar, pode ser criativa e pode ser incorreta mesmo quando parece absolutamente confiante.

Para ilustrar: quando alguém pergunta ao ChatGPT "como as LLMs funcionam?", o modelo identifica que as palavras de maior peso semântico são "LLMs" e "funcionam", e começa a resposta exatamente com elas: "LLMs funcionam prevendo a próxima palavra em uma sequência com base em padrões aprendidos." Cada token dessa resposta foi gerado individualmente, com o modelo lendo tudo o que já escreveu antes de decidir o próximo.

## Parâmetros, pesos e o que a rede neural realmente armazena

Uma confusão comum é imaginar que existe um banco de dados por trás do modelo, um dicionário gigante onde cada palavra está armazenada com seu significado. "A IA pesquisou no banco de dados dela." Não funciona assim.

O que uma LLM armazena são parâmetros, valores numéricos que representam a força das conexões entre os neurônios artificiais da rede. Uma LLM moderna pode ter dezenas ou centenas de bilhões de parâmetros. O resultado do treinamento é uma rede onde esses pesos codificam, de forma distribuída, uma memória estatística da linguagem. Não há um lugar específico onde a palavra "gato" está armazenada com atributos listados. Em vez disso, toda a estrutura dos pesos, em conjunto, faz emergir a capacidade de lidar com "gato" em contextos radicalmente diferentes: em uma receita, em uma história de terror, em um artigo científico, em uma metáfora. O mesmo conjunto de pesos consegue fazer tudo isso porque as relações foram aprendidas de forma contextual, não categórica.

Quando você pergunta ao ChatGPT sobre LLMs e ele inicia com "LLMs funcionam", não está consultando um dicionário. Ele gera essa sequência porque os pesos da rede, dado o input que você forneceu, tornam essa sequência de tokens altamente provável. As palavras do seu input estabelecem um campo de atenção que favorece determinadas respostas, e o modelo constrói token por token sempre guiado por esse campo.

## O problema de memória pré-Transformer e o artigo que mudou tudo

Para reconhecer o salto qualitativo que as LLMs modernas representam, é necessário mapear o problema central que existia nas gerações anteriores de modelos de linguagem. Antes da arquitetura Transformer se tornar dominante, os modelos já tentavam prever a próxima palavra em uma sequência, mas sofriam de um problema fundamental: perdiam o contexto ao longo de textos mais longos.

Imagine um modelo tentando gerar um parágrafo inteiro. Ele começa bem, as primeiras duas ou três frases fazem sentido e são coerentes com o que foi pedido. Mas conforme a sequência de tokens gerados cresce, o modelo vai perdendo o fio do raciocínio que começou. Era como se ele só conseguisse prestar atenção nas últimas palavras geradas, sem capacidade de manter o contexto de toda a resposta em mente ao mesmo tempo. Para textos curtos, funcionava de forma razoável. Para textos longos ou respostas que exigiam coerência ao longo de muitos parágrafos, a qualidade caía rapidamente e a resposta começava a não fazer sentido.

Em 2017, um grupo de pesquisadores do Google publicou um artigo que ficou famoso pelo título: "Attention is All You Need", ou em português, "Atenção é tudo que você precisa". Esse artigo introduziu a arquitetura Transformer, que resolveu o problema de memória de uma forma elegantemachina e matematicamente eficiente. A solução não foi aumentar brute-force a capacidade do modelo de memorizar palavras anteriores em uma fila linear. Ao contrário, foi ensinar o modelo a olhar para tudo ao mesmo tempo e calcular dinamicamente o que merece mais atenção a cada momento.

Antes do Transformer, os modelos processavam tokens em sequência, um após o outro, como uma fita que avança só para frente. Isso criava uma dependência temporal: para processar o token na posição 100, o modelo precisava ter passado por todos os 99 anteriores, e as informações dos tokens mais distantes tendiam a se diluir. A solução do Transformer foi radicalmente diferente: processar todos os tokens simultaneamente em paralelo e, para cada posição, calcular a relevância de todas as outras posições ao mesmo tempo. Isso é o mecanismo de atenção, e é o coração de toda LLM moderna.

## Atenção, Gestalt e como o todo supera a soma das partes

O mecanismo de atenção tem uma inspiração que vai além da matemática computacional e toca um conceito da psicologia humana que você talvez já tenha encontrado de outra forma. A abordagem guarda conexão clara com a psicologia da Gestalt, corrente desenvolvida no início do século XX por pesquisadores como Wolfgang Keller e Kurt Kofka. O princípio mais famoso da Gestalt é que o todo é mais do que a soma das partes.

O que isso significa na prática humana? Nossa mente não processa o mundo fragmentando cada elemento isoladamente para depois somar os pedaços e construir um entendimento. Ela percebe o todo primeiro, de forma holística, e a partir dessa percepção global distribui atenção para aspectos específicos que são relevantes naquele contexto. Você não entra em uma sala nova lendo cada objeto um por um e depois montando um quadro mental da sala. Você capta a sala como um todo em fração de segundo e depois foca nos detalhes que importam.

O cérebro humano funciona assim o tempo todo. Quando você assiste a uma aula em vídeo, sua mente captura a cena completa: o apresentador, o fundo da imagem, os livros na estante, a tela ao fundo com slides ou exemplos, os elementos gráficos da edição. A partir dessa percepção total, você direciona sua atenção para o que é mais relevante naquele momento específico: o rosto do professor, o texto na tela, o gráfico que ele está explicando. Você não processa cada elemento em sequência e depois monta um quadro. Você começa com o quadro completo.

O mecanismo de atenção nos Transformers replica essa lógica para o processamento de linguagem. O modelo não processa o token 1, depois o token 2, depois o token 3, em fila. Ele processa todos os tokens ao mesmo tempo e calcula, para cada token, qual é a relevância de todos os outros tokens no contexto atual. Para cada par de tokens na sequência, o mecanismo de atenção gera um score que representa o quanto um token deve "prestar atenção" ao outro ao processar seu próprio significado. Tokens muito relevantes entre si recebem scores altos. Tokens sem relação direta recebem scores baixos.

Isso permite que o modelo mantenha coerência mesmo em textos muito longos, porque ele continua "vendo" o início do texto enquanto gera o final. Quando você pergunta "como as LLMs funcionam?" e o modelo responde, ele não está apenas olhando para a última palavra que você digitou. Ele analisa toda a sua mensagem de uma vez, identifica que "LLMs" e "funcionam" são as palavras de maior peso semântico para aquela pergunta específica, e usa esse mapa de atenção para guiar a geração de cada token da resposta. O resultado é uma resposta que mantém coerência com o pedido original do começo ao fim, mesmo que a resposta seja longa.

O self-attention, atenção que o modelo presta a si mesmo durante a geração, é o que permite que a IA escreva um texto de dez parágrafos sem perder o fio condutor. Para cada token que gera, ela olha para tudo o que já gerou e calcula o que é mais relevante naquele momento. É uma capacidade que os modelos pré-Transformer simplesmente não tinham.

## Tokens, janela de contexto e os limites práticos das LLMs

Dois conceitos diretamente ligados ao mecanismo de atenção são tokens e janela de contexto. Mapear esses conceitos com precisão transforma a forma como você usa as IAs no dia a dia, porque eles explicam comportamentos que, sem esse mapa, parecem erros aleatórios ou falhas de qualidade.

Tokens são as unidades básicas de processamento das LLMs. Como mencionado anteriormente, não correspondem exatamente a palavras. Em português, uma palavra longa como "desenvolvimento" pode ser tokenizada como dois tokens. Uma vírgula é um token. Um símbolo matemático é um token. A tokenização exata depende do vocabulário específico de cada modelo. Para fins práticos, a regra aproximada mais útil é: um texto de 1000 palavras em português equivale a aproximadamente 1300 a 1500 tokens, dependendo do modelo e do vocabulário.

Quando você conversa com uma LLM, toda a conversa, incluindo as mensagens anteriores, as respostas do modelo e quaisquer instruções de sistema, é contada em tokens. Essa soma total de tokens que o modelo está processando em um dado momento é chamada de contexto ativo. E aqui entra a janela de contexto: o limite máximo de tokens que o modelo consegue processar de uma vez.

A janela de contexto é o campo de visão do modelo. Tudo que está dentro da janela, o modelo consegue ver e levar em conta ao gerar sua próxima resposta. Tudo que ficou fora, por estar antes do início da janela, o modelo simplesmente não acessa. Quando uma conversa cresce além da janela de contexto, o início da conversa começa a "desaparecer" da visão do modelo.

Isso tem implicações práticas muito concretas. Se você tem uma conversa muito longa com uma LLM e deu instruções importantes no início, chega um ponto em que essas instruções saem da janela de contexto. O modelo começa a responder sem considerar o que foi discutido no começo. Ele pode "esquecer" um tom de voz que você pediu, uma restrição que você impôs, um contexto de persona que você estabeleceu. Isso não é falha aleatória nem descuido do modelo. É uma limitação estrutural da arquitetura que qualquer usuário frequente das ferramentas precisa ter mapeada.

Diferentes modelos têm janelas de contexto muito diferentes. O Gemini 2.5 Pro, por exemplo, trabalha com janelas de 1 milhão ou até 2 milhões de tokens, o que permite processar livros inteiros, bases de código extensas ou transcrições longas de uma vez. Outros modelos têm janelas de 128 mil tokens, o que já é bastante para a maioria das tarefas. Mas modelos menores ou versões mais antigas podem ter janelas de 8 mil ou 16 mil tokens, onde conversas mais longas começam a perder contexto com mais rapidez.

Reconhecer esse limite muda sua estratégia de uso: em conversas críticas, retome contexto importante periodicamente, especialmente instruções de tom ou restrições relevantes. Para tarefas complexas com muitas iterações, divida o trabalho em conversas separadas em vez de acumular tudo em uma só thread. Esses ajustes simples fazem diferença significativa na qualidade das respostas ao longo do tempo.

## Treinamento, corte de conhecimento e o que a LLM realmente sabe

Quando se diz que uma LLM foi treinada em "grandes volumes de texto", o processo não é humanos ensinando o modelo palavra por palavra. É um processo computacional de escala industrial: hardware especializado, semanas de processamento e quantidades de dados que superam em muito o que qualquer humano poderia ler em múltiplas vidas.

A lógica básica é: o modelo recebe texto com um token removido, tenta prever qual token pertence ali, compara com o token real, calcula o erro e usa backpropagation para ajustar os pesos que geraram aquele erro. Esse ciclo se repete bilhões de vezes com textos de domínios, estilos e idiomas variados. Depois do pré-treino, existe uma fase de ajuste fino com dados curados por humanos, que ensina o modelo a seguir instruções, respeitar valores e ter conversas. Essa fase é responsável por muito do comportamento que você percebe no ChatGPT ou no Claude: a utilidade, o estilo conversacional, as recusas em determinadas situações.

Uma limitação direta desse processo é o corte de conhecimento, ou knowledge cutoff. O modelo só acessa o que estava disponível nos dados de treinamento até determinada data. Eventos posteriores simplesmente não existem para ele, a não ser que você os traga no contexto da conversa. Modelos com acesso à internet em tempo real, como o ChatGPT com navegação ativada ou o Perplexity, contornam essa limitação, mas introduzem outros desafios como confiabilidade das fontes e velocidade de geração.

## Limitações estruturais e como trabalhar a partir delas

Reconhecer as limitações das LLMs não é pessimismo nem é um motivo para usar menos a ferramenta. É a base para usá-las com efetividade real. Existem pelo menos três limitações que todo usuário deveria ter claramente mapeadas antes de depender dessas ferramentas em contextos profissionais.

A primeira é a alucinação. Como o modelo gera respostas por padrões estatísticos de probabilidade e não por consulta verificável a fontes, ele pode gerar informações plausíveis mas incorretas. Isso ocorre com mais frequência em fatos numéricos precisos, datas exatas, referências bibliográficas e eventos após o corte de treinamento. O modelo não tem como saber que está inventando: está apenas gerando o token mais provável, e às vezes o mais provável é um dado falso.

A alucinação é consequência do mecanismo de geração por probabilidade, não uma falha moral. Saber disso muda como você trata o output: use a LLM como ponto de partida inteligente e verifique dados críticos em fontes independentes, especialmente para informações quantitativas, datas e referências.

A segunda limitação é a janela de contexto já detalhada, e o impacto que ela tem em conversas longas. Quando o contexto se perde ou se fragmenta, o modelo começa a trabalhar com informação incompleta, o que degrada progressivamente a qualidade das respostas. A estratégia prática para lidar com isso é estruturar conversas bem delimitadas com objetivos claros, retomar instruções importantes quando a conversa fica longa, e dividir projetos complexos em etapas separadas em vez de tentar fazer tudo em uma única thread.

A terceira limitação é a ausência de raciocínio causal genuíno. A LLM não "pensa" no sentido que um humano pensa. Ela não constrói modelos causais do mundo, não verifica internamente se o que está gerando é verdadeiro antes de gerá-lo, e não tem intenções no sentido pleno do termo. Modelos mais avançados com raciocínio em cadeia, como o O3 da OpenAI ou o Claude 3.7 com Extended Thinking, simulam um processo de reflexão mais estruturado antes de gerar a resposta final, e isso melhora consideravelmente a qualidade do raciocínio em problemas complexos. Mas mesmo esses modelos estão operando por padrões estatísticos, não por compreensão causal genuína.

Isso tem implicações concretas: para tarefas que exigem raciocínio lógico rigoroso, cálculos matemáticos complexos ou verificação de cadeia de fatos, trate a LLM como um colaborador que pode errar, não como uma calculadora infalível. Use-a para gerar hipóteses, estruturar raciocínios e identificar ângulos que você poderia não ter considerado, mas valide as conclusões críticas com rigor.

## O ecossistema atual e por que existem tantos modelos diferentes

Ao longo deste minicurso você vai explorar ChatGPT, Claude, Gemini, Grok, Perplexity e outros. Todos são LLMs baseadas na arquitetura Transformer ou variações dela. Todos funcionam pelo mesmo princípio de previsão de tokens com mecanismo de atenção. Por que então são tão diferentes entre si?

Três fatores explicam isso. Primeiro, os dados de treinamento: um modelo com maior proporção de código será mais habilidoso em programação; mais literatura produz estilo de escrita mais sofisticado; mais dados científicos geram maior precisão técnica. Segundo, o processo de ajuste fino: dois modelos com arquitetura idêntica podem se tornar ferramentas completamente diferentes dependendo de como foram calibrados depois do pré-treino. Um ajustado para código priorizará precisão técnica; um ajustado para criatividade aceitará mais ambiguidade. Terceiro, escala: modelos maiores têm melhor desempenho em tarefas complexas, mas são mais lentos e caros. Modelos menores como versões Flash ou Mini são mais rápidos e adequados quando velocidade importa mais que profundidade máxima.

Reconhecer esses perfis permite escolher a ferramenta certa para cada tarefa: o Claude para escrita criativa e código, o ChatGPT para raciocínio profundo com o O3, o Gemini para pesquisa integrada ao ecossistema Google, o Perplexity para pesquisa em tempo real com fontes verificadas. Essa lógica estrutura as próximas aulas deste minicurso.

## Coloque em prática

Abra o ChatGPT, o Claude ou o Gemini e inicie uma nova conversa com a seguinte pergunta: "Explique para mim, de forma simples e direta, como você gera cada palavra da sua resposta. Descreva o processo técnico básico sem simplificar demais." Observe a resposta e compare com o que você aprendeu nesta aula. Veja onde o modelo é preciso e onde ele simplifica ou omite detalhes.

Em seguida, faça uma segunda pergunta na mesma conversa: "O que é sua janela de contexto e como ela afeta a qualidade das nossas trocas ao longo de uma conversa longa?" Observe como ele descreve esse limite e se ele menciona as implicações práticas que você aprendeu aqui.

Por último, crie uma conversa separada e escreva uma mensagem bem longa, com pelo menos dez tópicos diferentes listados em sequência. Depois, espere algumas respostas de troca, e então faça uma pergunta específica sobre o primeiro tópico que você mencionou. Veja se o modelo mantém o contexto completo ou começa a perder o fio. Esse experimento simples torna concreto o conceito de janela de contexto de uma forma que nenhuma explicação teórica consegue substituir.
