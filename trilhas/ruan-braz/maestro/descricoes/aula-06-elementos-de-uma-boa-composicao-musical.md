# Elementos de uma boa composição musical

**Tempo estimado de leitura:** 19 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os elementos fundamentais de uma composição musical e o que cada um representa
- Distinguir as diferentes formas de representação musical: notas, acordes, cifras, partituras e MIDI
- Reconhecer o papel do ambiente de trabalho (DAW), das bibliotecas de som e do sound design na produção profissional
- Aplicar os conceitos de ritmo, melodia, harmonia, escalas, composição, arranjo e estrutura musical ao orientar ferramentas de IA
- Estruturar uma composição com a IA usando separação de stems, gravação de melodia e variações de arranjo no Suno
- Identificar as etapas de edição, mixagem e masterização e os termos técnicos associados a cada uma

## Divisão conceitual da aula: nível fundamental e nível de comunicação

Ruan organiza os elementos de uma boa composição musical em duas camadas distintas. A primeira camada reúne os elementos fundamentais, que ele chama de ingredientes: tudo o que compõe a matéria-prima da música. A segunda camada reúne os elementos de comunicação, que são os mecanismos pelos quais a música transmite emoção, narrativa e identidade para quem ouve.

Essa divisão é a estrutura organizadora de toda a aula. Antes de saber como a música "fala" com o ouvinte, é necessário saber do que ela é feita. E antes de usar qualquer ferramenta de IA para compor, é necessário ter pelo menos o vocabulário mínimo que permite orientar a ferramenta com precisão.

## O ambiente de trabalho: DAW e sua função

O primeiro elemento apresentado é o ambiente de trabalho. Ruan usa uma analogia direta com o universo do desenvolvimento de software: assim como quem programa utiliza uma IDE (Integrated Development Environment), quem trabalha com produção musical utiliza uma DAW, que significa Digital Audio Workstation, em português "estação de trabalho de áudio digital".

A DAW é o espaço central onde tudo acontece na produção musical profissional. Dentro dela, o produtor grava instrumentos e vozes, edita as faixas, cria sons do zero via síntese, mixa os elementos e exporta o resultado final. É, nas palavras de Ruan, "o Photoshop de quem trabalha com áudio". Assim como o Photoshop é o hub de ferramentas visuais, a DAW é o hub de todas as ferramentas de áudio.

Ruan menciona o Ableton Live como a sua DAW favorita, destacando que é uma das mais famosas e que já começa a integrar recursos de inteligência artificial. Existe também o Audacity, que é gratuito e bastante utilizado como editor de áudio mais simples. Para quem quiser experimentar antes de comprar, o Ableton oferece um período de 12 dias de teste gratuito.

O nível mais avançado de uso de IA com DAW consiste em conectar o Claude Code ao software via protocolo MCP (Model Context Protocol), permitindo que a IA opere a DAW diretamente para criar músicas usando as bibliotecas do produtor. Ruan menciona que já há vídeos no YouTube demonstrando conexão entre Claude e Ableton via MCP e que ele próprio está explorando isso. Esse é o nível profissional de produção musical com IA: a própria inteligência artificial executando os comandos dentro da ferramenta, enquanto o produtor descreve em linguagem natural o que quer que aconteça.

## Bibliotecas de som: a diferença entre amador e profissional

Produtores musicais profissionais trabalham com bibliotecas de som, que são coleções de samples e instrumentos virtuais gravados com qualidade de estúdio. Ruan menciona especificamente o site Orchestral Tools como um exemplo de fornecedor premium dessas bibliotecas. Os instrumentos disponíveis ali foram gravados nota por nota, com diferentes tipos de ataque para cada nota, em estúdios de ponta.

O raciocínio por trás do uso de bibliotecas profissionais é simples: a qualidade do material que a IA usa para construir a música determina diretamente a qualidade do resultado final. Uma IA trabalhando com samples gravados em estúdio profissional vai gerar resultados que, para o ouvinte, são imperceptíveis de uma produção musical humana de alta qualidade.

Ruan descreve que, ao treinar o ouvido com o uso contínuo de IA para criar música, começa-se a perceber com clareza a diferença entre uma música criada com sons sintetizados genericamente e uma criada com bibliotecas bem gravadas. Quem já frequentou estúdios de música reconhece essa diferença imediatamente.

Para os fins desta trilha, Ruan deixa claro que não será necessário trabalhar com DAW nem com bibliotecas pagas. O foco da trilha é o Suno, que resolve a maior parte das necessidades de quem está começando. Mas apresentar esse universo é importante para que o aluno saiba onde está posicionado e para onde pode evoluir.

## O MIDI: a partitura digital

Dentro do ecossistema da DAW, existe um formato de arquivo chamado MIDI, que Ruan define como "a partitura digital". O MIDI não contém áudio em si: ele contém notas desenhadas no computador que dizem a um instrumento virtual qual nota tocar, quando tocar e com qual força. É uma linguagem que descreve a música de forma abstrata, independente do timbre.

Esse conceito é relevante porque o Suno permite exportar o projeto em formato MIDI. Isso significa que uma composição criada no Suno pode ser importada para uma DAW como o Ableton e continuada em ambiente profissional, com todos os instrumentos e ajustes que uma DAW oferece. É a ponte entre o nível iniciante e o nível avançado.

## Teoria musical básica: notas, sustenidos e bemóis

Ruan apresenta a teoria musical básica não como conteúdo obrigatório, mas como repertório que melhora concretamente a qualidade dos prompts para IA musical. Quem sabe os termos certos consegue instruir a ferramenta com mais precisão e obter resultados mais próximos do que imagina.

As notas musicais no sistema ocidental são sete: Dó, Ré, Mi, Fá, Sol, Lá e Si. Na notação internacional, essas notas correspondem às letras C, D, E, F, G, A e B, respectivamente. Essa correspondência aparece nos softwares de música, nos prompts para IA e em toda a documentação técnica da área.

Além das sete notas principais, existem os meios tons, que são representados por sustenidos e bemóis. O sustenido (o símbolo que parece uma hashtag, chamado de sharp em inglês) indica que a nota sobe meio tom. O bemol (a letra "b" estilizada) indica que a nota desce meio tom. Nem todas as notas têm sustenido: Mi e Si não têm sustenido porque já estão adjacentes às próximas notas sem meio tom entre elas.

Ruan explica que sustenido e bemol podem representar a mesma nota dependendo da direção em que a escala está sendo percorrida. Dó sustenido e Ré bemol são exatamente a mesma nota no teclado: a tecla preta entre o Dó e o Ré. A diferença de nome existe porque, ao subir a escala, usa-se o sustenido; ao descer, usa-se o bemol.

No teclado físico, as teclas brancas representam as sete notas principais e as teclas pretas representam os cinco meios tons. Ruan destaca um detalhe prático para identificação: antes de cada grupo de duas teclas pretas, sempre vem o Dó. Esse é o ponto de referência visual no teclado.

## Notas e acordes: a diferença entre som único e conjunto sonoro

Ruan diferencia notas de acordes de forma clara e prática. Uma nota é um único som: pressionar uma única tecla do teclado produz uma nota. Um acorde acontece quando várias notas são tocadas simultaneamente, formando um conjunto sonoro que tem uma função harmônica.

Quando as notas de um acorde são tocadas uma de cada vez, em sequência rápida, o efeito se chama arpejo. Tocar todas juntas produz o acorde completo. Nos prompts para IA, o termo "chords" refere-se exatamente a esses conjuntos de notas.

Para quem quiser aprender a montar acordes no teclado, Ruan apresenta uma técnica básica: o acorde maior é formado pela primeira, terceira e quinta nota da escala maior correspondente. Tomando o Dó como ponto de partida, o acorde de Dó maior é formado pelas notas Dó (1), Mi (3) e Sol (5). Essa lógica se repete para qualquer acorde maior, partindo da nota-raiz correspondente.

## Cifra e partitura: duas formas de representar música

Ruan apresenta as duas formas principais de representar música no papel ou na tela: a cifra e a partitura. Elas têm usos e públicos diferentes, e conhecê-las amplia a capacidade de diálogo com ferramentas de IA.

A cifra é usada por quem toca de forma mais casual. Ela mostra de forma visual a posição dos dedos no instrumento, especialmente no violão, ou posiciona as notas acima da letra em músicas com voz. A cifra lírica, por exemplo, tem a letra da música com as notas indicadas sobre cada sílaba cantada. A limitação da cifra é que ela não indica ritmo nem pausas.

A partitura, por outro lado, é uma linguagem completa. Além de indicar quais notas tocar, ela representa o ritmo de cada nota, as pausas, a intensidade e outros detalhes da execução. A posição do ponto na pauta indica a nota; a forma da figura indica o valor rítmico. Ruan destaca que algumas ferramentas de IA já conseguem ler partituras e gerar música seguindo exatamente o que está escrito nela, abrindo um canal de comunicação muito preciso para quem domina a notação.

## Ritmo, BPM e metrônomo

Ruan define ritmo como a organização temporal da música, e BPM (Beats Per Minute, batidas por minuto) como a unidade de medida do andamento. Um BPM mais alto resulta em uma música mais rápida; um BPM mais baixo resulta em uma música mais lenta.

Para demonstrar o impacto direto do BPM no resultado, Ruan gera ao vivo duas músicas no Suno com o mesmo instrumento (strings, cordas) mas com BPMs diferentes: 60 BPM e 180 BPM. O contraste é imediato e claro: a de 60 BPM tem caráter lento e contemplativo; a de 180 BPM é intensa e agitada. Colocar o BPM explicitamente no prompt faz diferença concreta no resultado.

O metrônomo é a ferramenta usada para marcar o BPM durante o estudo ou a gravação. Músicos batem o pé para manter o tempo porque estão seguindo o pulso do metrônomo mentalmente. Ruan usa um metrônomo online para demonstrar como mudar o valor altera a percepção de velocidade. O compasso, que é a organização das batidas em grupos, também é variável: a divisão mais comum é em grupos de quatro tempos (4/4), mas existem outras divisões, como 3/4, que criam sensações rítmicas completamente diferentes.

## Melodia, harmonia e escalas

Melodia é a sequência principal de notas que se canta ou se assobia. É a linha que o ouvinte memoriza e identifica como "a música". Harmonia são os acordes que tocam ao fundo, dando suporte emocional à melodia sem serem o centro da atenção. Essa distinção é fundamental para orientar a IA: você pode pedir uma melodia específica em notas definidas e uma harmonia que sustente emocionalmente aquela melodia.

As escalas são conjuntos de notas que se combinam bem entre si. Saber em qual escala a música está construída permite identificar quais notas soam bem juntas e quais soam desafinadas naquele contexto. Para a IA, nomear a escala no prompt direciona com precisão o conjunto de notas que o modelo vai usar.

Ruan apresenta as principais escalas que aparecem em prompts para IA. A escala maior é a mais clássica, construída com o padrão tom, tom, semitom, tom, tom, tom, semitom. A escala menor traz uma tonalidade mais melancólica e existe em três versões: natural, harmônica e melódica. A escala pentatônica usa apenas cinco notas e é muito comum no rock, no jazz e na música oriental. A escala de blues é uma variação da pentatônica. A escala cromática usa os doze semitons consecutivos da oitava. Os modos gregos medievais, que incluem dórico, frígio, lídio, mixolídio, eólio e lócrio, cada um com seu caráter sonoro específico. E a escala hexafônica, de seis notas com intervalos iguais de tom inteiro, que cria um som particular e flutuante.

Ruan demonstra ao vivo no piano online a diferença entre tocar notas que pertencem à mesma escala, produzindo harmonia, e tocar notas aleatórias, que podem resultar em tensão ou som de filme de terror. A mensagem é direta: com as mesmas sete notas e cinco meios tons, é possível criar qualquer música da história. O que determina o resultado é a ordem em que as notas são colocadas e a escala que organiza essa ordem.

## Composição, arranjo e a prática ao vivo no Suno

Ruan distingue dois conceitos que aparecem muito na área e que são frequentemente confundidos. Composição é o processo de criar a letra, a melodia principal e a progressão de acordes. É a estrutura narrativa da música. Arranjo é a escolha de quais instrumentos vão executar essa composição, quando cada um entra e sai, e como eles se relacionam entre si.

Uma mesma composição pode ter arranjos completamente diferentes: o mesmo conjunto de notas e acordes pode ser executado por uma orquestra, por uma banda de rock ou por sintetizadores eletrônicos. Cada arranjo produz uma música que soa completamente diferente, mesmo tendo a mesma base.

Para demonstrar isso de forma prática, Ruan grava uma melodia simples ao vivo, cantando diretamente para o microfone do Suno. Com essa melodia gravada, ele cria três versões com arranjos distintos. A primeira usa strings (instrumentos de corda) e bateria em estilo clássico. A segunda usa sintetizadores, baixo e estilo eletrônico. A terceira usa guitarra em estilo hang, que resulta em um som parecido com reggae. As três músicas compartilham exatamente a mesma melodia, mas soam como composições completamente diferentes graças ao arranjo.

## Estrutura musical: como organizar uma faixa

A estrutura musical é a divisão da música em seções para manter o ouvinte interessado e construir uma narrativa sonora. Ruan apresenta a estrutura mais clássica e utilizada: intro, verso 1, pré-refrão, refrão, verso 2, refrão, ponte, refrão final e outro (a saída).

No Suno, essas marcações de estrutura são inseridas diretamente no campo de letra, usando etiquetas como [verso 1], [refrão], [ponte] e [outro]. Elas instrui o modelo sobre quando cada seção começa e qual função ela cumpre na progressão da música. Ruan mostra ao vivo sua própria música "Futuro é agora" com essa estrutura escrita no prompt.

A introdução (intro) é a abertura que apresenta o som e cria expectativa. O outro é o encerramento que fecha a narrativa. Os versos desenvolvem a história. O refrão é o clímax que retorna repetidamente, criando memorização. A ponte é o ponto de contraste que desvia da progressão principal antes de retornar ao refrão final. Cada seção tem uma função específica dentro do arco narrativo da música.

## Gravação, sound design, edição e mixagem

Ruan apresenta as quatro etapas do fluxo de produção pós-composição, começando pela gravação (também chamada de tracking), que é a captura de vozes e instrumentos analógicos via microfone. As bibliotecas de som como a Orchestral Tools são, na essência, gravações de cada nota de cada instrumento em diferentes tipos de ataque e intensidade.

O sound design é a criação de sons do zero, sem gravar instrumentos acústicos. Usa-se síntese virtual para criar timbres eletrônicos e manipulam-se samples (amostras de áudio prontas) para construir elementos sonoros originais. É a camada de design do universo sonoro.

A edição é a etapa de limpeza e organização. Músicas de qualidade são músicas limpas, onde cada elemento do arranjo pode ser ouvido claramente. A IA tende a criar músicas "sujas" com muitos elementos sobrepostos, e a edição corrige isso. Três técnicas de edição importantes são: o comping, que consiste em gravar várias tentativas de um mesmo trecho e recortar o melhor pedaço de cada uma; a quantização, que corrige o tempo das notas para que fiquem perfeitamente alinhadas ao grid da DAW; e a afinação com Auto-Tune ou Melodyne, que corrige pequenas desafinações vocais puxando a nota para o tom certo.

Na mixagem, o produtor ajusta os níveis de volume de cada elemento (o fader), posiciona os sons no espaço estéreo esquerda-direita (o panning) e aplica equalização para cortar ou aumentar frequências de graves, médios e agudos. Também são adicionados efeitos como reverb (o eco que simula o som batendo em superfícies e voltando, criando sensação de profundidade espacial) e delay (a repetição do som criando efeitos rítmicos). O panning em particular é o que cria a sensação tridimensional: sons posicionados à esquerda e à direita criam a sensação de estar dentro da música.

## Masterização: o polimento final

A masterização é a etapa final de polimento. Ela prepara a música para competir em volume e clareza com outras músicas na plataforma onde vai ser lançada. O processo leva em conta o ambiente de reprodução: uma música masterizada para tocar em ambientes externos tem ajustes diferentes de uma música masterizada para fones de ouvido. O objetivo é fazer a música soar alta o suficiente e com a equanimidade certa para o contexto de uso.

## Nível de comunicação: leitmotiv, identidade sonora e universo de marca

Ruan encerra a aula com a camada de comunicação, que é o nível onde a música deixa de ser apenas sons e passa a ser narrativa e identidade. O conceito central aqui é o leitmotiv (do alemão, "motivo condutor"), que é um fragmento melódico ou temático que retorna ao longo de uma composição para criar identidade e memória emocional.

Ruan usa os Vingadores como exemplo mais imediato: o tema dos Vingadores é um leitmotiv que, quando ouvido, ativa imediatamente memórias, emoções e identificação com a narrativa. Apenas cantar a sequência de notas em voz alta já produz uma resposta emocional intensa no ouvinte que conhece o filme. Isso é neurociência aplicada à música.

O exemplo mais elaborado é a trilha sonora do Senhor dos Anéis: quando a cena está no Shire com os hobbits, a música é leve, inocente e pastoral. Quando a narrativa avança para a Sociedade do Anel, a música muda para algo com esperança e grandiosidade. A música não tem letra, mas ela está contando a história com a mesma precisão que o roteiro.

Para criar identidade sonora de uma marca, Ruan descreve a lógica do Sonic logo da Overlens: um motivo melódico curto que pode ser executado em arranjos diferentes, com timbres diferentes, mas sempre mantendo o mesmo fragmento central. Com arranjos que variam de instrumentos de corda para percussão para vocais, o motivo fica na cabeça porque identidade se constrói pela repetição. Esse é o trabalho do produtor que usa IA para construir universo sonoro de marca: não apenas gerar músicas, mas criar e repetir um motivo condutor através de arranjos que evoluem com o contexto.

Ruan recomenda três compositores de trilhas sonoras como referência de estudo para quem quer aprender a contar histórias com música: Ludwig Göransson (que ele descreve como o novo Hans Zimmer), Hans Zimmer (o clássico inevitável de qualquer conversa sobre composição) e John Williams, responsável pelos leitmotivs de Indiana Jones, Tubarão, Jurassic Park e Star Wars. Estudar esses compositores forma o repertório que transforma prompts mediocres em prompts precisos e eficazes.

## A síntese final de Ruan

Ao encerrar a seção sobre elementos, Ruan entrega uma frase síntese que resume tudo que foi ensinado: uma boa composição musical acontece quando o ritmo faz a gente se mexer, a melodia fica na cabeça, a harmonia dá o clima certo, o timbre traz os sons mais interessantes, a dinâmica nos dá arrepio e a forma conta a história do jeito certo. Essa frase é o mapa mental da aula inteira.

## Coloque em prática

Grave uma melodia simples de 4 a 8 notas humming (cantarolando) diretamente no campo de áudio do Suno. Com essa melodia salva na biblioteca, gere ao menos três versões usando arranjos completamente diferentes: um clássico (strings e piano), um eletrônico (synth e bass) e um orgânico (guitarra acústica e percussão). Compare os três resultados e observe como o mesmo motivo melódico pode ter identidades completamente distintas. Se quiser ir além, nomeie a escala que a sua melodia usa, pesquise na IA e peça ao Suno que componha dentro dessa escala.
