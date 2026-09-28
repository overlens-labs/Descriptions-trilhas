# História das IAs - Parte 2

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os principais eventos da segunda fase da história das IAs, de 1997 até os dias atuais
- Reconhecer o papel do Big Data como condição necessária para o avanço do machine learning em escala industrial
- Distinguir o funcionamento das arquiteturas anteriores aos Transformers e o problema que elas não conseguiam resolver
- Aplicar o conceito de self-attention para explicar como os Transformers melhoraram a capacidade das IAs de processar linguagem
- Estruturar uma visão panorâmica do ecossistema atual de IAs generativas, incluindo suas categorias e volumes
## O segundo ato começa onde o Deep Blue venceu

A segunda fase da história das inteligências artificiais começa em 1997, no exato momento em que o Deep Blue venceu Kasparov. Não porque a vitória do computador inaugurou uma nova tecnologia, mas porque esse evento funciona como uma fronteira simbólica entre duas maneiras completamente diferentes de pensar sobre o que uma máquina pode fazer.

A primeira fase foi marcada pelos sistemas simbólicos e pelos sistemas especialistas: máquinas programadas com regras explícitas, treinadas para atuar dentro de domínios fechados, incapazes de generalizar para além do que havia sido previsto por um programador humano. A segunda fase é marcada por uma mudança de paradigma: a IA passa a aprender com dados, e a quantidade e qualidade desses dados se torna o fator determinante para o desenvolvimento do campo.

Essa fase não começou de forma tranquila. O que vem logo depois de 1997 é, na verdade, um novo período de desaceleração. A aceleração do backpropagation, que havia entusiasmado o campo no final dos anos 1980, encontrou uma barreira prática: não havia dados em volume suficiente para treinar modelos cada vez mais complexos. A internet existia, mas a web ainda era jovem. O volume de dados que hoje consideramos trivial simplesmente não existia. E sem dados, o aprendizado por tentativa e erro travava.

Esse segundo inverno da IA durou até o início dos anos 2000 e foi superado por dois fenômenos simultâneos: o crescimento exponencial dos dados gerados pela internet e o desenvolvimento de novas arquiteturas que tornaram o processamento desses dados viável. É a combinação desses dois fatores que define o que chamamos de segunda fase.
## A ascensão do Big Data: dados em escala zettabyte

Para ter dimensão real do que aconteceu com a produção de dados ao longo dos anos 2000 e 2010, é necessário falar em uma unidade de medida que a maioria das pessoas nunca usa no cotidiano: o zettabyte.

Um zettabyte equivale a um bilhão de terabytes. Isso mesmo. Não um milhão. Um bilhão. Em 2010, o volume global de dados produzidos pela humanidade já havia ultrapassado os dois zettabytes, ou seja, dois bilhões de terabytes. E esse número cresceu de forma praticamente exponencial ao longo da década seguinte. Em 2025, estimativas indicam que o volume global supera os 149 bilhões de terabytes.

Esse crescimento não foi acidental. Ele foi impulsionado por empresas que surgiram ou se consolidaram exatamente nesse período: Amazon, Facebook, Netflix, Google. Cada interação de cada usuário com cada um desses sistemas gerava dados. Dados de comportamento, de preferência, de navegação, de compra, de consumo de conteúdo. E esses dados foram acumulados, armazenados e, eventualmente, utilizados para treinar modelos de inteligência artificial.

Existe uma questão ética importante nesse ponto. Grande parte desses dados foi coletada com base em termos de uso que pouquíssimas pessoas leram. Quando as redes sociais surgiram, muitos usuários concordaram com políticas de privacidade sem ler uma linha sequer. Esses termos, em muitos casos, autorizavam o uso dos dados para fins amplos, incluindo treinamento de sistemas automatizados. O debate sobre propriedade dos dados e compensação dos criadores é complexo exatamente porque o dado de uma pessoa não é apenas o dado de uma pessoa: é parte de um conjunto massivo que pertence a bilhões de indivíduos ao mesmo tempo. Tentar remunerar cada um deles de forma individual tornaria o desenvolvimento da IA inviável financeiramente. E não desenvolver a IA, segundo esse raciocínio, é mais perigoso do que desenvolvê-la de forma imperfeita, porque os benefícios que ela traz para saúde, segurança e qualidade de vida superam amplamente os problemas que ela cria.
## Watson vence o Jeopardy! e o AlphaGo vence o Go

Dois marcos históricos da segunda fase merecem atenção especial. O primeiro aconteceu em 2011: o Watson, IA desenvolvida pela IBM, participou do programa de televisão americano Jeopardy!, uma espécie de "Quem Quer Ser Um Milionário?" em que os participantes precisam responder perguntas gerais com rapidez e precisão. O Watson venceu os dois campeões humanos do programa, levando um prêmio de um milhão de dólares enquanto seus concorrentes ficaram com 200 mil e 300 mil dólares, respectivamente.

O que tornava essa vitória significativa não era apenas o resultado. Era o que ela demonstrava: uma IA com uma base de dados suficientemente ampla conseguia, em 2011, responder perguntas sobre conhecimento geral de forma competitiva com seres humanos altamente preparados. Isso exigiu treinamento com enormes volumes de dados, algo que só era possível naquele momento porque a infra-estrutura de armazenamento e processamento havia finalmente alcançado a escala necessária.

O segundo marco veio em 2016: o AlphaGo, desenvolvido pela DeepMind, empresa britânica posteriormente adquirida pelo Google, venceu Lee Sedol, o maior campeão mundial do jogo de Go. O Go é um jogo de tabuleiro muito mais complexo do que o xadrez. O número de configurações possíveis no tabuleiro de Go supera o número de átomos no universo observável, o que torna impossível programar um sistema baseado em regras que cubra todas as possibilidades.

O AlphaGo foi treinado através de machine learning. Ele não foi programado com estratégias de Go. Ele aprendeu a jogar Go jogando, primeiro contra registros históricos de partidas, depois contra outros sistemas de IA e, finalmente, contra si mesmo. Esse modelo de aprendizado, onde a IA treina contra versões de si mesma, é chamado de aprendizado por reforço e gerou estratégias que nenhum jogador humano havia considerado antes. O AlphaGo jogou movimentos que especialistas humanos classificaram como "impossíveis" ou "errôneos" à primeira vista, mas que se revelaram brilhantes quando analisados em contexto.
## O problema de memória e o paradigma que precisava ser quebrado

Entre o Watson e o AlphaGo, o campo da IA ainda enfrentava um problema técnico fundamental: as arquiteturas de processamento de linguagem disponíveis até meados dos anos 2010 não conseguiam manter contexto de forma eficiente ao longo de uma sequência de palavras.

Para reconhecer esse problema, é necessário imaginar como uma IA processava uma frase antes dos Transformers. O modelo recebia a frase palavra por palavra. Ele processava a primeira, depois a segunda, depois a terceira, e assim por diante. Para gerar uma resposta, ele produzia uma palavra, calculava qual seria a próxima palavra mais provável, e repetia esse processo até completar a resposta. O problema é que, ao chegar na décima ou vigésima palavra da resposta, o modelo frequentemente havia "esquecido" informações importantes do início da frase de entrada. A memória dos modelos era limitada e degradava ao longo do processamento.

Várias arquiteturas tentaram resolver esse problema. As redes LSTM (Long Short-Term Memory) foram uma das tentativas mais bem-sucedidas antes dos Transformers, e conseguiram melhorar significativamente a capacidade dos modelos de manter contexto por períodos mais longos. Mas o problema persistia em escala.
## Attention is all you need: o artigo que mudou tudo

Em 2017, pesquisadores do Google publicaram um artigo com um título que parecia quase provocador: "Attention is all you need" (Atenção é tudo o que você precisa). Esse artigo introduziu a arquitetura Transformer e o mecanismo de self-attention, que resolveu de forma elegante o problema de memória que havia travado o campo por décadas.

A inspiração para a solução veio, mais uma vez, do funcionamento do cérebro humano. O conceito utilizado foi o de Gestalt: o todo é mais do que a soma das partes. Quando um ser humano lê uma frase, ele não processa cada palavra isoladamente e em sequência. Ele lê a frase inteira de uma vez, estabelece rapidamente qual é o contexto geral e então atribui pesos diferentes para cada elemento da frase. Algumas palavras são mais importantes para o significado do que outras. Substantivos e verbos tendem a carregar mais peso do que artigos e preposições. E esse processo acontece de forma quase instantânea, antes mesmo que a pessoa comece a analisar a frase de forma consciente.

O mecanismo de self-attention replica essa lógica em termos matemáticos. Em vez de processar a frase palavra por palavra em sequência, o Transformer recebe toda a frase de uma vez. A partir daí, ele calcula um peso para cada token (cada palavra ou fragmento de palavra) em relação a todos os outros tokens da frase. Palavras que são mais relevantes para o significado geral recebem pesos maiores. Palavras de conexão recebem pesos menores. Com esses pesos definidos, o modelo pode então gerar uma resposta levando em conta o contexto completo da entrada, sem o risco de "esquecer" o início da frase ao chegar no final.

Um exemplo prático: se a frase de entrada é "How are you doing?" e o modelo precisa responder, ele processa todos os tokens ao mesmo tempo, identifica que "how", "you" e "doing" são os tokens mais relevantes para determinar a natureza da resposta, e a partir daí gera "I am good" com uma probabilidade mais alta do que qualquer outra sequência. O processo de fine-tuning, que é um ajuste fino do modelo depois do treinamento principal, funciona exatamente ajustando esses pesos: você pode dizer ao modelo para dar mais atenção a certos tipos de palavras ou conceitos, redirecionando o comportamento do sistema sem precisar retreiná-lo do zero.

Esse mecanismo tem implicações diretas para quem usa IA no cotidiano. Quando você escreve um prompt, cada palavra que você escolhe tem um peso dentro do processamento do modelo. Substantivos e adjetivos específicos tendem a ter mais impacto do que termos vagos ou palavras de conexão. Reconhecer isso é uma vantagem prática real: prompts mais precisos e com vocabulário mais específico tendem a gerar respostas melhores não porque o modelo "processa" melhor, mas porque os pesos que ele atribui aos tokens do seu prompt se alinham de forma mais eficiente com o resultado que você quer.
## GPT: o transformer que virou produto

A sigla GPT significa Generative Pre-trained Transformer. Ou seja: um Transformer generativo que foi pré-treinado em uma grande quantidade de dados antes de ser disponibilizado para uso. O GPT não surgiu do nada em 2022 com o lançamento do ChatGPT. O GPT-1 foi lançado em 2018. O GPT-2 veio em 2019. E naquela época, o modelo já era utilizado por desenvolvedores para aplicações práticas, muito antes de qualquer popularização.

Um exemplo concreto: Rafael, co-fundador da Overlens, utilizou o GPT em 2019 para construir uma IA que analisava sementes no contexto do mercado agrícola. A partir de imagens, o modelo conseguia identificar quais sementes tinham maior probabilidade de germinar com sucesso. Esse caso ilustra que a tecnologia já existia e já era aplicável muito antes do momento em que ela se tornou conhecida para o público geral.

O GPT-3, lançado em 2020, foi o modelo que chamou a atenção de forma mais ampla, especialmente entre desenvolvedores. Mas foi o ChatGPT, lançado em novembro de 2022 como uma interface conversacional acessível ao público geral, que transformou a IA de uma tecnologia de especialistas em uma ferramenta do cotidiano. Em conjunto com o Midjourney, que popularizou a geração de imagens por texto no mesmo período, 2022 marcou a explosão das IAs generativas como fenômeno de massa.
## O ecossistema atual: mais de 1,5 milhão de modelos

A explosão de 2022 não foi um ponto de chegada. Foi um ponto de partida. O que veio depois foi uma proliferação de modelos, ferramentas e aplicações que cresceu em ritmo exponencial.

Para ter uma noção do volume atual, o Hugging Face, que é um repositório aberto de modelos de IA, registrava em 2024 mais de 700 mil modelos cadastrados. Em 2025, esse número já superava 1,5 milhão de modelos. A projeção é que continue dobrando nos próximos anos.

Esses modelos cobrem praticamente todas as modalidades de entrada e saída de dados. Para texto, há sistemas como ChatGPT, Claude, Gemini, Llama, Mistral, Grok e centenas de outros modelos fine-tunados para finalidades específicas. Para geração de imagens, há Midjourney, Stable Diffusion, Adobe Firefly, DALL-E, Flux e Ideogram. Para voz e áudio, há Eleven Labs, OpenAI Voice e várias outras plataformas. Para geração de código, há Cursor, GitHub Copilot, Bolt.new e Lovable. Para vídeo, há Sora, Runway, Kling e Luma. Para modelagem 3D, há Spline, Meshy e Masterpiece X.

Dentro do Hugging Face, é possível explorar categorias específicas. Apenas na categoria de geração de texto, havia em 2025 mais de 199 mil modelos cadastrados. Isso inclui modelos proprietários e open source, modelos generalistas e modelos especializados em domínios específicos como medicina, direito, código e pesquisa acadêmica. A maioria dos modelos open source pode ser baixada e executada localmente, embora isso exija conhecimento técnico sobre configuração de servidores e bancos de dados vetoriais.
## O paradigma energético e o que ainda não sabemos

Um dos desafios que a segunda fase da IA ainda não resolveu completamente é o consumo energético. Treinar um modelo de linguagem de grande escala consome uma quantidade de energia muito superior àquela que um ser humano gasta para aprender algo equivalente. O cérebro humano é incrivelmente eficiente em termos energéticos: ele opera com cerca de 20 watts, processa informações de forma paralela, aprende a partir de poucos exemplos e consegue generalizar para situações novas com muito menos dados do que qualquer modelo atual.

Os grandes modelos de IA, por outro lado, precisam de milhares de exemplos para aprender algo que um ser humano aprende em uma única exposição. Eles precisam de hardware especializado e de infraestrutura de data centers para operar. O custo de treinar modelos como o GPT-4 é estimado em dezenas de milhões de dólares apenas em energia e computação.

Isso não significa que o caminho foi errado. Significa que o campo ainda está em desenvolvimento. Um dos grandes objetivos da pesquisa atual é criar modelos que aprendam com menos dados, consumam menos energia e generalizem melhor para situações que nunca viram antes. Esse é um dos problemas centrais que a pesquisa em AGI (Inteligência Artificial Geral) tenta resolver.
## O que não sabemos sobre o que acontece dentro

Há uma questão que acompanha toda a segunda fase da IA e que permanece sem resposta satisfatória: o que exatamente acontece dentro de um modelo de linguagem quando ele processa uma entrada e gera uma saída?

As camadas intermediárias de uma rede neural profunda são chamadas de camadas ocultas. E essa nomenclatura não é apenas técnica. Ela reflete um problema real: mesmo os pesquisadores que desenvolveram os modelos têm dificuldade para rastrear o caminho exato que um modelo segue internamente para chegar a uma determinada resposta. Você sabe o que entra (o prompt) e o que sai (a resposta). O que acontece no meio é, em grande medida, uma caixa preta.

Isso alimenta debates filosóficos e científicos legítimos. Será que, em algum momento ao longo do treinamento, os modelos mais avançados desenvolvem algo que se aproxima de uma representação interna do mundo? Será que existe alguma forma de proto-consciência emergindo nessas camadas ocultas? O consenso científico atual é que não. Os modelos atuais são sistemas estatísticos sofisticados, não entidades conscientes. Mas a fronteira entre o que sabemos e o que não sabemos nessa área ainda é muito larga para afirmações categóricas em qualquer direção.
## Coloque em prática

Acesse o Hugging Face em huggingface.co e explore a seção de modelos. Escolha uma categoria que seja relevante para o seu trabalho, seja geração de texto, geração de imagens, análise de documentos ou qualquer outra. Veja quantos modelos existem nessa categoria e leia a descrição de dois ou três deles.

Depois, tente responder: qual é a diferença prática entre usar um modelo generalista como o ChatGPT e usar um modelo fine-tunado para uma finalidade específica? Em que situações do seu fluxo de trabalho um modelo especializado poderia trazer resultados superiores a um generalista?

Registre suas reflexões e traga para a próxima aula, onde o foco estará nos tipos de aprendizado de máquina e na estrutura das redes neurais.
