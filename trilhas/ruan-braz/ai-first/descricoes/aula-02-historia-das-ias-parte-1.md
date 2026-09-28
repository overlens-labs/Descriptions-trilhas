# História das IAs - Parte 1

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os marcos históricos que definiram o desenvolvimento das inteligências artificiais desde a década de 1940
- Reconhecer as diferenças entre sistemas simbólicos baseados em regras e os primeiros modelos de aprendizado de máquina
- Distinguir as duas grandes fases da história da IA e os eventos que marcaram a transição entre elas
- Aplicar o conceito de backpropagation para explicar como uma máquina aprende por tentativa e erro
- Estruturar uma linha do tempo coerente que conecta o teste de Turing, a conferência de Dartmouth, os invernos da IA e o surgimento do machine learning
## A fotografia que resume uma era

Existe uma imagem que resume décadas de desenvolvimento tecnológico em um único enquadramento. É uma fotografia de 1997, em preto e branco, mostrando Garry Kasparov diante de um tabuleiro de xadrez. Kasparov era, naquele momento, o maior jogador de xadrez do mundo. Do outro lado do jogo não havia nenhum ser humano. Havia o Deep Blue, uma inteligência artificial desenvolvida pela IBM.

O que torna essa fotografia particularmente rica não é apenas o fato de um computador ter vencido o maior enxadrista do planeta. O que a torna fascinante é a expressão de Kasparov: o olhar de quem está diante de algo que ainda não sabe nomear. A postura de quem calcula, pondera, e percebe que o adversário antecipa cada movimento antes mesmo que ele aconteça.

O Deep Blue não foi programado linha por linha com todas as jogadas possíveis do xadrez. Ele foi ensinado a jogar. Ele aprendeu. E nesse detalhe está a diferença entre duas eras completas da inteligência artificial. Vale registrar que, na primeira vez que o Deep Blue enfrentou Kasparov, perdeu. Foi no segundo encontro, em 1997, que o computador venceu pela primeira vez na história um campeão mundial de xadrez em condições regulares de competição. Esse resultado não encerrou uma disputa. Inaugurou uma nova fase para toda a humanidade.

A aula organiza essa jornada ao longo de uma linha do tempo dividida em dois grandes períodos. O primeiro vai de 1940 até 1997, e é marcado pelas IAs simbólicas e pelos sistemas especialistas. O segundo começa ali mesmo, com a virada do século, e coincide com o surgimento da web, o crescimento dos dados e o início do que chamamos de machine learning. Essa segunda fase será explorada na aula seguinte. Aqui, o foco está nos fundamentos que tornaram tudo isso possível.
## 1940: a origem de uma pergunta

Antes de qualquer máquina, havia uma pergunta. E essa pergunta foi feita formalmente, pela primeira vez, por Alan Turing, em 1950, num artigo intitulado "Computing Machinery and Intelligence". O título é técnico, mas a pergunta que abre o texto é direta e filosófica: máquinas podem pensar?

Turing não foi o primeiro a especular sobre isso. O conceito de inteligência artificial já existia de forma dispersa antes dele, mas não tinha esse nome e não tinha esse rigor. Turing formalizou a questão dentro de um experimento mental que ficaria conhecido como teste de Turing.

O funcionamento do teste é o seguinte: você coloca uma máquina em uma cabine e um ser humano em outra. Um terceiro participante, sem saber o que está atrás de cada cabine, faz perguntas para os dois e recebe as respostas por escrito. Se esse participante não conseguir distinguir qual resposta veio da máquina e qual veio do ser humano, então a máquina passa no teste. Ela demonstrou a capacidade de simular pensamento humano de forma indistinguível.

O impacto desse teste persiste até hoje de maneiras que muita gente não percebe. O CAPTCHA, aquele sistema que aparece nos sites pedindo para você clicar em semáforos ou digitar letras distorcidas para provar que você não é um robô, é diretamente derivado do teste de Turing. O acrônimo CAPTCHA, em inglês, significa exatamente isso: teste público de Turing completamente automatizado para diferenciar computadores de humanos. A ironia é que, com a evolução das IAs atuais, os robôs frequentemente passam nesses testes com mais facilidade do que alguns seres humanos.
## 1956: a conferência de Dartmouth e o nome que ficou

Seis anos depois do artigo de Turing, um grupo de pesquisadores se reuniu em Dartmouth, nos Estados Unidos. A conferência de Dartmouth, realizada em 1956, é considerada o evento fundador do campo que hoje chamamos de inteligência artificial. Não foi um congresso enorme. Foi um encontro de poucas pessoas, mas que carregavam uma visão comum: era possível fazer máquinas pensar, e estava na hora de estudar isso de forma estruturada.

Foi nessa conferência que o termo "inteligência artificial" foi adotado oficialmente. Antes de Dartmouth, os pesquisadores falavam sobre máquinas que pensam, sobre autômatos, sobre lógica computacional, mas sem um nome único que agrupasse tudo isso. Dartmouth deu ao campo sua identidade.

A fotografia dos participantes é histórica e hoje serve como registro de um momento improvável: um punhado de pessoas sentadas, fotografadas em preto e branco, sem saber que estavam fundando um campo que, algumas décadas depois, transformaria completamente a maneira como o mundo funciona. Numa demonstração prática de como as IAs já absorveram essa história, é possível mostrar a fotografia para o ChatGPT e pedir que ele identifique quem são os personagens. Sem nenhum contexto dado, o modelo reconhece que se trata da conferência de Dartmouth de 1956 e descreve a cena com precisão.
## A era dos sistemas especialistas e das IAs simbólicas

Depois de Dartmouth, o campo da inteligência artificial entrou em um período de desenvolvimento acelerado, especialmente ao longo das décadas de 1960 e 1970. É o que a linha do tempo chama de era dos sistemas especialistas.

Para distinguir o que eram esses sistemas, é importante separar dois conceitos que parecem similares mas funcionam de formas muito diferentes. Um sistema especialista era um computador programado para executar uma tarefa muito específica dentro de um domínio muito limitado. A diferença em relação ao que chamamos hoje de IA estreita é a forma como esse sistema foi criado.

Os computadores dessa era eram baseados em lógica simbólica. Você inseria símbolos no sistema, e esses símbolos continham informações específicas que determinavam como o computador deveria responder. A base de tudo era booleana: se acontecer X, então faça Y. Se acontecer Z, então faça W. Você construía uma árvore enorme de perguntas e respostas, conectava cabos, subia uma base de conhecimento, e o sistema respondia dentro daquele escopo. Ele não aprendia. Ele não tomava decisões novas. Ele executava aquilo para o qual havia sido explicitamente programado.

As linguagens e sistemas dessa época têm nomes históricos: LISP, Prolog, SHRDLU, MYCIN. São sistemas baseados em regras, conhecidos como rule-based expert systems. Empresas como a IBM investiram pesadamente nessa abordagem. A IBM já era, naquela época, a grande referência do mundo em computação. Seu slogan era simplesmente "Think" (pense), adotado desde 1911. Anos mais tarde, Steve Jobs criaria a campanha "Think Different" da Apple justamente como uma provocação a esse legado da IBM. Tanto Jobs quanto Bill Gates foram profundamente influenciados pela IBM na infância.

O problema dos sistemas simbólicos era estrutural. Para que um sistema desse tipo funcionasse bem, alguém precisava antecipar todas as situações possíveis e programar uma resposta para cada uma delas. Imagine contratar um robô para ser garçom no seu restaurante e ter que escrever, linha por linha, o que ele deve fazer se o cliente pedir água, se o copo cair, se a conta vier errada, se o cliente reclamar, se a cozinha atrasar, se faltar troco. O trabalho é interminável porque a vida real é infinita em possibilidades. E nenhuma regra escrita por humanos consegue acompanhar essa infinitude.
## O primeiro inverno da IA

Esse limite dos sistemas simbólicos contribuiu para o que ficou conhecido como o primeiro inverno da IA. Não foi um inverno climático. Foi um inverno de expectativas.

A trajetória foi a seguinte: depois de Dartmouth, o campo viveu um período de grande entusiasmo e especulação. Pesquisadores previam que, em poucos anos, as máquinas seriam capazes de fazer praticamente tudo que um ser humano faz. Havia investimento, havia energia, havia muita esperança. Parte do imaginário cultural da época refletia isso: os anos seguintes viram surgir obras de ficção científica como 2001: Uma Odisseia no Espaço, Blade Runner, Duna e Neuromancer, todas explorando o que aconteceria quando as máquinas se tornassem inteligentes de verdade.

Mas as promessas não foram cumpridas no prazo esperado. As limitações técnicas eram reais e sérias. Os computadores da época não tinham capacidade de processar grandes volumes de dados. A memória era escassa. As arquiteturas disponíveis impunham restrições que os pesquisadores ainda não sabiam como superar. E quando os resultados ficaram aquém das expectativas, os investimentos começaram a secar.

O caso do Perceptron ilustra bem esse ciclo. O Perceptron foi criado por Frank Rosenblatt nos anos 1950 e executado inicialmente no IBM 704. Era uma representação simplificada de um neurônio humano. A premissa era genial: se o cérebro humano pensa através de neurônios, por que não criar uma versão eletrônica de um neurônio? Rosenblatt até publicou um livro intitulado "Princípios da Neurodinâmica" explorando esses conceitos.

O problema foi que o Perceptron, na sua forma original, tinha limitações técnicas severas. Ele não conseguia guardar memória suficiente. Ele não processava dados complexos de maneira eficiente. E quando Minsky e Papert publicaram uma análise crítica das limitações dos perceptrons, o entusiasmo despencou. Esse foi o gatilho do primeiro inverno, que durou aproximadamente de meados dos anos 1970 até o início dos anos 1980.

O inverno não foi total, mas foi suficiente para desacelerar o desenvolvimento. Muito do que se sabe hoje sobre IA já estava sendo imaginado naquela época. O problema não era a falta de visão. Era a falta de ferramentas.
## A saída do inverno: Neocognitron, Hopfield e backpropagation

O final do primeiro inverno veio com três contribuições técnicas que abriram caminho para uma nova fase. Não é preciso mergulhar nos detalhes matemáticos de cada uma delas, mas é importante reconhecer o papel de cada uma dentro da trajetória da IA.

O Neocognitron foi um dos primeiros passos em direção ao que hoje chamamos de redes neurais convolucionais. Essas são redes especializadas em visão computacional, ou seja, em fazer com que uma máquina "enxergue" e interprete imagens. Os sistemas de visão dos carros autônomos, o funcionamento de ferramentas como o Midjourney e o Stable Diffusion, e até os modelos de geração de vídeo têm raízes nos conceitos que o Neocognitron ajudou a estabelecer.

O Hopfield Model foi outra contribuição importante. Sem entrar em tecnicismos, esse modelo permitiu que as primeiras redes neurais armazenassem mais informação e a recuperassem de forma mais eficiente. Ele atacava diretamente um dos maiores problemas dos perceptrons originais: a memória insuficiente.

Mas o conceito que inaugurou o joelho da curva exponencial foi o backpropagation. O backpropagation não criou o machine learning do zero, porque a ideia de ensinar máquinas já existia antes dele. Mas ele formalizou e viabilizou o processo de aprendizado por tentativa e erro de forma que pudesse ser aplicado em redes mais complexas.
## Backpropagation: como uma máquina aprende errando

O backpropagation é melhor explicado com uma analogia concreta. Imagine que você decidiu contratar um robô para trabalhar como garçom no seu restaurante. Antes do backpropagation, a única forma de fazer isso era programar o robô com todas as regras possíveis. Isso, como já vimos, é inviável.

Com o backpropagation, a abordagem muda completamente. Em vez de programar cada regra, você simplesmente coloca o robô para trabalhar e pede que ele entregue um copo na mesa. O robô vai lá, tenta, derruba o copo, falha. Você traz o robô de volta e pede que ele tente de novo. Desta vez, ele não comete o mesmo erro. Ele aprendeu algo no processo.

O nome "backpropagation" vem exatamente da direção desse aprendizado: propagação para trás. No diagrama que representa esse processo, você tem informações indo da esquerda para a direita, e o sinal de correção voltando da direita para a esquerda. Cada vez que a IA erra, ela registra onde errou. Cada vez que acerta, ela registra o que funcionou. Existe uma espécie de gamificação nesse processo: acerto equivale a ganhar um ponto, erro equivale a perder um ponto, e o objetivo da IA é chegar a 100% de acerto.

Na prática, esse processo é executado em ciclos. A IA passa pelos dados, calcula erros, ajusta os pesos internos e recomeça. Cada ciclo reduz um pouco a taxa de erro. Com dados suficientes e iterações suficientes, a IA converge para uma configuração que funciona bem na tarefa para a qual foi treinada.

Esse é exatamente o mecanismo que inspira o treinamento dos grandes modelos de hoje. O ChatGPT, o Claude, o Gemini, todos eles foram treinados com variações desse mesmo princípio: processar dados, calcular erros, ajustar pesos, repetir. O que mudou ao longo do tempo foi a escala, a arquitetura e a sofisticação das ferramentas.
## A segunda fase se aproxima

Com o backpropagation estabelecido, o campo da IA viveu um novo período de aceleração no final dos anos 1980 e início dos 1990. Havia agora um método funcional para ensinar máquinas. Mas novos desafios estavam no horizonte.

O principal deles era o volume de dados. Para que uma IA aprendesse bem através de tentativa e erro, ela precisava de uma quantidade enorme de exemplos. E naquela época, essa quantidade ainda não existia na escala necessária. A internet estava surgindo, mas a web ainda era jovem. Os dados ainda não eram gerados na escassez controlada que os pesquisadores precisavam.

Esse desequilíbrio entre a capacidade técnica recém-conquistada e a falta de dados em escala suficiente criou as condições para o segundo inverno da IA, que aconteceria nos anos 2000. Mas esse segundo inverno, e o que veio depois dele, são os temas da próxima aula.

O que a primeira fase da história das IAs ensina é que tecnologia avança em ciclos. Há momentos de entusiasmo excessivo, momentos de descrença e momentos de construção silenciosa. Os invernos da IA não foram fracassos. Foram períodos de acumulação de conhecimento que tornaram a primavera seguinte mais poderosa do que a anterior.
## Coloque em prática

Pesquise o artigo original de Alan Turing, "Computing Machinery and Intelligence", publicado em 1950. Você não precisa ler o texto completo em inglês, mas localize a pergunta que abre o artigo e reflita sobre ela a partir do que você vivencia hoje com as IAs generativas.

Em seguida, tente responder: se Turing estivesse vivo hoje e pedisse para você realizar o teste de Turing com o ChatGPT, você conseguiria distinguir as respostas do modelo das respostas de um ser humano em uma conversa de texto? Em quais situações o modelo passaria facilmente? Em quais situações ele ainda falha?

Registre suas reflexões. Esse exercício conecta a origem histórica da pergunta que fundou o campo com a realidade prática que você já usa no dia a dia.
