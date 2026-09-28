# Por dentro das LLMs

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os componentes da arquitetura Transformer e a função de cada bloco no processamento do texto
- Distinguir os papéis do encoder e do decoder na geração de respostas
- Reconhecer como tokens, embeddings, mecanismos de atenção e probabilidade interagem para produzir uma saída
- Aplicar o conceito de pesos e fine-tuning para mapear as variáveis que você pode influenciar em uma LLM
- Estruturar prompts com mais precisão a partir do modo como cada palavra recebe peso dentro do modelo

## O mito da memorização e o que a LLM realmente faz

A confusão mais comum sobre LLMs começa exatamente aqui: a crença de que o modelo memorizou textos durante o treinamento e simplesmente "cola" respostas pré-fabricadas quando perguntado. Essa ideia é fundamentalmente errada, mas é intuitiva porque o comportamento das LLMs parece o de alguém que sabe muita coisa e recita o que aprendeu. Na prática, o mecanismo é completamente diferente.

Uma LLM não é um banco de dados de frases. Ela é uma rede neural que aprende padrões estatísticos nas relações entre palavras e, a partir desses padrões aprendidos, reconstrói sentido e gera respostas novas a cada interação. Nenhuma resposta que o modelo entrega é recuperada de um arquivo: ela é construída no momento, token por token, como resultado de cálculos probabilísticos sobre as relações que o modelo internalizou durante o treinamento. Para que uma LLM memorizasse frases, ela precisaria de um banco de dados separado onde as frases ficassem armazenadas. Isso não é como a arquitetura funciona. O que a rede neural armazena são pesos, não frases.

O processo central é a predição do próximo token. Dado um input, o modelo avalia probabilisticamente quais tokens têm mais chance de vir a seguir. Se o texto de entrada diz "o céu está", o modelo não recupera uma frase pronta com essa abertura: ele calcula, sobre todo o vocabulário que domina, a distribuição de probabilidade de qual token deve aparecer a seguir. Palavras como "azul", "nublado" e "limpo" terão probabilidades mais altas do que "hipopótamo" ou "dividendo". O modelo então escolhe um dos tokens mais prováveis e avança para a próxima posição. O processo se repete, token por token, até a resposta estar completa ou até um sinal de parada ser gerado.

Existe também a técnica de amostragem, chamada sampling. Em vez de sempre escolher o token de maior probabilidade (o que tornaria as respostas completamente determinísticas e repetitivas), o modelo pode sortear entre os mais prováveis com base na distribuição de probabilidade calculada. Isso introduz variação controlada e torna as respostas diferentes mesmo para o mesmo prompt, sem abrir mão da coerência.

O treinamento que torna tudo isso possível envolve quantidades massivas de dados. Em 2024, foram gerados aproximadamente 149 zettabytes de dados no mundo. Um zettabyte equivale a um bilhão de terabytes. Não é que os modelos absorvam todos os dados gerados, mas a escala dos dados de treinamento das grandes LLMs precisa ser assimilada para que você perceba por que elas conseguem lidar com domínios tão distintos, idiomas tão variados e contextos tão específicos com a fluência que demonstram.

## A arquitetura Transformer: os dois blocos fundamentais

A arquitetura Transformer é a base estrutural das LLMs modernas e foi introduzida em 2017 no artigo "Attention Is All You Need". Ela se divide em dois grandes blocos: o encoder e o decoder. Cada bloco tem uma função distinta e trabalha em sequência.

O **encoder** lê o texto de entrada e constrói uma representação matemática rica do contexto. Pense nele como um leitor que processa o parágrafo inteiro antes de responder, de forma que cada palavra seja interpretada não de forma isolada, mas sempre em relação a todas as outras palavras ao redor. É exatamente por isso que a palavra "banco" pode ser interpretada corretamente como uma instituição financeira ou como um assento dependendo das palavras próximas a ela na frase. O encoder não processa palavra por palavra em sequência linear: ele constrói simultaneamente um mapa de relações entre todos os tokens do input. Esse mapa é chamado de representação contextual e é o que alimenta o decoder para que ele construa a resposta.

O **decoder** usa essa representação produzida pelo encoder para gerar a resposta, uma palavra de cada vez. Diferente do encoder, que lê o input completo antes de trabalhar, o decoder opera com uma restrição fundamental: ele não pode ver os tokens futuros da resposta enquanto a constrói. Essa restrição existe porque o decoder está construindo a resposta de forma progressiva, e permitir que ele veja tokens futuros seria equivalente a deixar alguém copiar de um papel que ainda não foi escrito. O mecanismo que implementa essa restrição se chama Masked Multi-Head Attention. A cada passo de geração, o decoder pergunta: com base em tudo que o encoder mapeou sobre o input e com base nos tokens que eu já escrevi até agora, qual é o próximo token mais provável? E vai montando a frase até chegar ao ponto de parada.

Essa divisão entre encoder e decoder é o mínimo necessário para mapear o fluxo do Transformer. Na coluna da esquerda do diagrama clássico está o encoder processando o input, e na coluna da direita está o decoder construindo o output. O encoder interpreta, o decoder gera.

## Tokens e embeddings: a linguagem numérica do modelo

Antes de qualquer processamento pelo Transformer, o texto de entrada precisa ser convertido para um formato que a rede neural consiga operar matematicamente. Redes neurais trabalham com números, não com palavras. Esse processo de conversão começa com a tokenização e é seguido pela criação de embeddings.

**Tokenização** é o processo de quebrar o texto nas suas menores unidades de processamento, chamadas tokens. Um token não é necessariamente uma palavra inteira. Pode ser uma palavra completa, uma sílaba, um prefixo, um sufixo ou até mesmo um único caractere, dependendo de como o vocabulário interno do modelo foi construído durante o treinamento. A granularidade da tokenização depende de quão frequentemente aquele fragmento de texto apareceu nos dados de treinamento: palavras muito comuns tendem a ser um único token, enquanto palavras raras ou menos representadas podem ser divididas em múltiplos tokens.

Em inglês, os modelos da OpenAI estão altamente otimizados porque a língua inglesa é fortemente representada nos dados de treinamento. A maioria das palavras comuns equivale a um único token, e até palavras longas como "automatically" frequentemente são um token só. No português, a situação é diferente. Por ser uma língua menos representada nos dados de treinamento dessas redes, palavras com terminações flexionadas frequentemente geram dois, três ou mais tokens. A palavra "utilizamos", por exemplo, pode ser dividida em mais de um token. Isso tem consequências práticas: uma conversa em português consome mais tokens do que a mesma conversa em inglês, o que significa que você esgota a janela de contexto mais rapidamente e paga mais por token quando usa APIs.

Você pode verificar essa tokenização de forma concreta usando o Tokenizer da OpenAI, disponível em platform.openai.com/tokenizer. A ferramenta mostra, em cores diferentes, como cada palavra ou fragmento de texto é dividido, e informa o total de tokens e de caracteres. Ao comparar o modelo GPT-3 Legacy com o GPT-4o, o impacto da otimização fica evidente: uma mesma frase em português que gastava 132 tokens no modelo mais antigo passou a gastar apenas 79 tokens no mais recente, graças a um vocabulário interno muito mais eficiente.

Depois da tokenização, cada token é convertido em um **embedding**: uma sequência de números chamada vetor que representa o significado daquele token dentro de um espaço matemático de múltiplas dimensões. O GPT-4 trabalha com embeddings de 12.288 dimensões. Isso significa que cada token é representado por um vetor com 12.288 valores numéricos, cada um capturando uma faceta diferente do significado e das relações daquele token com outros tokens.

O ponto crucial sobre os embeddings é que eles não são estáticos. À medida que os vetores percorrem as camadas da rede, eles são reinterpretados, combinados e modificados por cada camada subsequente. Os números que representam um token no início do processamento são diferentes dos números que representam esse mesmo token depois de passar pelo mecanismo de atenção e pelas camadas feed-forward. Os embeddings vão evoluindo conforme o contexto acumula mais informação sobre as relações entre as palavras.

## Positional Encoding: a ordem importa

Diferente dos modelos de linguagem anteriores que processavam texto em sequência, o Transformer processa todos os tokens em paralelo. Isso é extremamente eficiente computacionalmente, mas cria um problema: se você processa tudo ao mesmo tempo, como o modelo sabe a ordem das palavras?

A resposta é o **Positional Encoding**. Antes de entrar no mecanismo de atenção, cada embedding recebe uma informação adicional sobre a posição do token na sequência. Esse marcador de posição é somado ao embedding original e garante que o modelo tenha acesso à informação de ordem sem precisar processá-la em sequência. A frase "o gato comeu o rato" é diferente de "o rato comeu o gato" e o positional encoding é o que permite ao modelo distinguir as duas.

## Multi-Head Attention: atenção distribuída e paralela

O mecanismo de **Multi-Head Attention** é o núcleo da capacidade interpretativa do Transformer e o componente que mais diferencia essa arquitetura das anteriores. Para assimilá-lo com precisão, é necessário primeiro mapear o conceito de atenção.

Atenção é o mecanismo pelo qual o modelo decide, ao processar um determinado token, em quais outras partes do input deve focar para construir a interpretação correta daquele token no contexto atual. Na frase "o gato viu o rato e ele correu", quando o modelo processa o pronome "ele", ele precisa determinar a qual entidade esse pronome se refere: ao gato ou ao rato. O mecanismo de atenção permite que o modelo olhe para os outros tokens da frase e identifique, com base nos padrões aprendidos durante o treinamento, que "ele" provavelmente se refere ao sujeito mais próximo que realizou uma ação.

A grande inovação do "Multi-Head" é que, em vez de aplicar um único mecanismo de atenção, o modelo aplica vários simultaneamente, em paralelo, cada um especializado em observar um aspecto diferente das relações entre os tokens. Imagine vários leitores especializados olhando para a mesma frase ao mesmo tempo: um presta atenção em quem está realizando a ação (estrutura de agente), outro analisa relações temporais entre os verbos, outro observa emoção e intenção, outro rastreia a coerência referencial entre sujeito e objeto. Cada um desses leitores especializados é uma "cabeça" de atenção.

Cada cabeça de atenção produz uma representação diferente do mesmo conjunto de tokens, focando em aspectos distintos das relações. Ao final, todas essas representações são combinadas e o resultado é um vetor muito mais rico do que qualquer representação individual teria sido. O modelo captura, em uma única passagem, múltiplas dimensões de significado que seriam impossíveis de capturar com um único foco de atenção.

Esse mecanismo é responsável pelo que parece ser a capacidade das LLMs de "captar contexto". Não é uma capacidade no sentido humano, com intenção e consciência. É a identificação, estatisticamente sofisticada, de padrões relacionais entre tokens, feita de forma distribuída por múltiplas perspectivas simultâneas. O resultado simula a cognição com alta fidelidade porque os padrões foram aprendidos de uma quantidade tão grande de texto humano que os relacionamentos capturados cobrem a maior parte das estruturas de significado que os seres humanos produzem.

Um ponto importante para contextualizar a aprendizagem da LLM: ela não aprendeu gramática lendo livros de gramática. A IA não foi instruída sobre quais são as regras do português ou do inglês. Ela aprendeu essas relações fazendo muitas associações entre os dados que recebeu, encontrando padrões emergentes nessas associações, sem rótulos explícitos. Você pode, sim, usar rótulos para direcioná-la (treinamento supervisionado), mas a lógica básica da linguagem ela extrai dos padrões sem precisar ser ensinada explicitamente.

## Feed Forward e normalização: processando além da atenção

Após a fase de atenção, o modelo passa os vetores resultantes por uma camada chamada **Feed Forward**. Essa camada é composta por duas camadas de perceptrons, os neurônios artificiais mais básicos da rede neural, e funciona como um mecanismo de processamento adicional que vai além das relações identificadas pela atenção.

Um perceptron recebe inputs, multiplica cada um por um peso, soma todos esses valores ponderados e aplica uma função de ativação para produzir um output. A camada Feed Forward aplica isso de forma não-linear sobre cada token individualmente, depois da atenção ter identificado as relações entre os tokens. A metáfora mais precisa é a de um momento de reflexão: o modelo leu a frase, identificou as relações importantes com a atenção, e agora para um instante para processar o que identificou antes de continuar. A camada Feed Forward é esse momento de processamento profundo.

Intercaladas com as camadas de atenção e Feed Forward, existem camadas de normalização, chamadas Add & Norm no diagrama do Transformer. Elas cumprem uma função técnica crítica: garantir que os valores numéricos que circulam pela rede mantenham uma coerência de escala ao longo das muitas camadas empilhadas. Sem normalização, os pesos poderiam explodir para valores muito grandes ou encolher para valores próximos de zero, ambos os casos destruindo a capacidade de aprendizado da rede.

O padrão se repete múltiplas vezes no encoder e no decoder: atenção, normalização, feed-forward, normalização. Cada repetição adiciona profundidade ao processamento. Modelos com mais camadas (mais "profundos") conseguem capturar relações mais abstratas e de mais alto nível no texto.

## Linear e Softmax: convertendo processamento em decisão

No final do decoder, dois componentes transformam todo o processamento acumulado em uma decisão concreta sobre qual token gerar a seguir: a camada **Linear** e a função **Softmax**.

A camada Linear recebe os vetores de ativação que resultaram de todas as camadas anteriores de atenção e Feed Forward e os converte em uma lista plana de números, onde cada número corresponde a uma palavra no vocabulário completo do modelo. Se o vocabulário do modelo tem 50.000 palavras, a camada Linear produz uma lista de 50.000 números, um para cada palavra possível. Cada número representa uma pontuação bruta que indica o quanto aquela palavra é adequada como próximo token, dada toda a informação processada até agora. A metáfora precisa é que a camada Linear traduz o "pensamento abstrato" do modelo para o idioma do dicionário: ela torna as representações internas interpretáveis como candidatos a palavras.

A função **Softmax** recebe essa lista de pontuações brutas e aplica uma transformação que converte tudo em probabilidades, ou seja, valores entre 0 e 1 que somam exatamente 100%. Se as pontuações brutas forem, por exemplo, gato: 1,2; correr: 2,4; nuvem: -3, o Softmax transforma isso em algo como gato com 25% de probabilidade, correr com 70% e nuvem com 5%. Esses são os valores chamados de "Output Probabilities" no diagrama do Transformer.

Com essas probabilidades calculadas, o modelo escolhe o token a gerar. Na configuração mais simples, escolhe sempre o mais provável (greedy decoding). Com sampling, sorteia entre os mais prováveis com base na distribuição de probabilidade, introduzindo variação. O processo então reinicia: o token escolhido é adicionado à sequência gerada, o decoder processa a sequência atualizada e calcula as probabilidades do próximo token. Esse ciclo continua até a resposta estar completa.

## O que você pode influenciar em uma LLM

Mapear a arquitetura tem uma consequência prática direta: ela revela os pontos onde você pode influenciar o comportamento do modelo. Existem quatro categorias principais de influência, e elas operam em momentos diferentes do ciclo de vida de uma LLM.

A primeira categoria é o **tipo de aprendizado**: supervisionado (com exemplos rotulados onde cada input tem uma resposta correta esperada), não supervisionado (o modelo encontra padrões sem rótulos externos) ou por reforço (o modelo é ajustado com base em feedback sobre a qualidade das respostas, chamado de RLHF - Reinforcement Learning from Human Feedback). A maioria dos grandes modelos de linguagem usa os três em fases distintas do treinamento. Primeiro, treinamento não supervisionado massivo nos dados de texto. Depois, fine-tuning supervisionado com exemplos de alta qualidade. Por fim, ajuste por reforço com feedback humano para alinhar o comportamento do modelo ao que os usuários realmente querem.

A segunda categoria é a **seleção dos dados de treinamento**: quais inputs são usados, de quais domínios, em quais idiomas, com que proporção entre eles. Um modelo treinado predominantemente em inglês terá tokenização mais eficiente nessa língua e um raciocínio mais sofisticado em contextos que aparecem com mais frequência nos dados em inglês. O português é menos representado, o que explica o custo maior em tokens e certas assimetrias na qualidade das respostas em português comparado ao inglês.

A terceira categoria são os **parâmetros e a arquitetura**: quantos neurônios intermediários, quantas camadas, quantas cabeças de atenção por camada, qual o tamanho dos embeddings. Esses são os números que aparecem quando se fala em "um modelo de 7 bilhões de parâmetros" ou "um modelo de 400 bilhões de parâmetros". Cada linha no diagrama do Transformer representa um parâmetro, um peso que foi aprendido durante o treinamento. A escala dos parâmetros é o que determina a capacidade máxima de representação do modelo, embora mais parâmetros não signifique automaticamente melhor desempenho em todas as tarefas.

A quarta categoria é o **fine-tuning**: depois que o modelo base está treinado, é possível ajustar os pesos de formas específicas para que ele se comporte de um jeito particular. Um exemplo simples é instruir o modelo para sempre responder com metáforas, ou para jamais responder com elogios antes de ir ao ponto, ou para usar a estrutura de frase do Mestre Yoda. Você pode fazer isso fornecendo exemplos de pares input-output no estilo que quer (fine-tuning supervisionado) ou através de instrução direta nas primeiras mensagens (o que a maioria das plataformas permite). A diferença técnica entre fazer fine-tuning num modelo já treinado e treinar um modelo do zero está no ponto de intervenção: no fine-tuning, você ajusta os pesos de um modelo já consolidado; no treinamento do zero, você constrói toda a distribuição de probabilidade desde o início. O fine-tuning é muito mais barato e rápido porque parte de uma base que já aprendeu os padrões fundamentais da linguagem.

## Por que a LLM não pensa como nós

Um ponto central desta aula é calibrar a expectativa sobre o que as LLMs fazem quando parecem "captar" o sentido de algo. Elas não acessam a internet em tempo real por conta própria, a menos que estejam conectadas a ferramentas externas que fazem scraping e injetam o resultado como input adicional. O MCP (Model Context Protocol) é um protocolo emergente que permite essa conexão de forma mais sofisticada, conectando a IA diretamente a outras ferramentas e dados em tempo real. Mas a LLM em si não navega na internet: uma ferramenta auxiliar faz o scraping e entrega o conteúdo como texto para que a LLM processe da maneira habitual.

As LLMs também não pensam com intenção ou consciência. Elas processam padrões estatísticos com altíssima sofisticação e simulam coerência porque foram treinadas com quantidades imensas de texto humano coerente. A simulação é tão boa que parece pensamento real, mas o mecanismo subjacente é diferente.

Uma implicação disso é que o contexto acumulado em uma conversa não é memória no sentido humano. É o conjunto de tokens que já circularam na sessão e que o modelo usa como referência adicional para calcular as probabilidades do próximo token em cada nova resposta. Quando você diz ao ChatGPT algo no início de uma conversa e ele parece "lembrar" disso várias mensagens depois, o que acontece é que todos aqueles tokens estão ainda na janela de contexto ativa e entram como input na geração de cada nova resposta.

## A importância do contexto: como a conversa acumula peso

Um último ponto técnico desta aula tem consequência imediata no modo como você usa qualquer LLM: tudo que você já enviou numa conversa faz parte do input de cada nova resposta. Quando você envia uma terceira mensagem em uma conversa, o modelo não processa apenas essa mensagem isolada. Ele processa o histórico completo da conversa até aquele ponto, incluindo suas duas mensagens anteriores e as respostas que gerou, como parte do input atual.

Isso significa que o contexto acumulado numa conversa não é um recurso passivo que fica arquivado. É um input ativo que entra no mecanismo de atenção a cada nova resposta e influencia os pesos dados a cada token. Quanto mais rica e específica for a conversa que você construiu até aquele ponto, mais contextualizado será o processamento das mensagens que vierem depois. Um prompt de três palavras enviado no meio de uma conversa densa vai receber um tratamento completamente diferente do que o mesmo prompt de três palavras numa conversa começando do zero.

Isso também implica que a ordem das informações que você compartilha numa conversa tem impacto na qualidade das respostas. Estabelecer o contexto de quem você é, qual é o seu objetivo e qual é o problema específico que está tentando resolver antes de fazer a pergunta técnica tende a produzir respostas mais calibradas e úteis do que ir direto à pergunta sem contexto. Os pesos que cada parte da frase vai receber no mecanismo de atenção são influenciados por tudo que veio antes na janela de contexto atual.

## Coloque em prática

Acesse o Tokenizer da OpenAI (platform.openai.com/tokenizer) e conduza dois testes comparativos. Primeiro, copie um parágrafo em inglês e o mesmo parágrafo traduzido para o português, e compare o número de tokens gerados em cada caso. Observe quais palavras em português são divididas em múltiplos tokens e quais permanecem como token único. Segundo, experimente os diferentes modelos disponíveis no tokenizer (GPT-4o, GPT-3 Legacy) e veja como a mesma frase em português gera contagens de tokens diferentes entre as versões do modelo.

Depois, escreva uma instrução de fine-tuning simples para um assistente imaginário: escolha um comportamento específico que você quer modificar, como o tom (mais direto, mais poético), o formato da resposta (em tópicos, em parágrafos curtos, com metáforas) ou uma restrição de assunto. Descreva o que você estaria ajustando em termos de pesos: em qual parte do mecanismo você estaria intervindo e qual distribuição de probabilidade você estaria modificando com essa instrução?
