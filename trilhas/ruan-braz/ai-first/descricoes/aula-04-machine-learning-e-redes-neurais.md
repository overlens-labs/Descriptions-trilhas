# Machine Learning e as Redes Neurais

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar as diferenças entre inteligência artificial, machine learning, redes neurais e deep learning como categorias hierárquicas
- Distinguir os três tipos de aprendizado de máquina: supervisionado, não supervisionado e por reforço
- Reconhecer a estrutura de um perceptron e sua relação com o funcionamento de um neurônio biológico
- Aplicar o conceito de rede neural profunda para explicar por que os modelos atuais são chamados de deep learning
- Estruturar uma compreensão funcional de como camadas ocultas de uma rede neural processam e transformam dados até chegar em uma resposta
## Organizando os conceitos antes de mergulhar

Depois de percorrer a história das inteligências artificiais ao longo das duas aulas anteriores, é natural que a cabeça esteja cheia de termos que parecem se misturar: inteligência artificial, machine learning, redes neurais, deep learning, perceptron, backpropagation. Antes de aprofundar qualquer um deles, vale organizar a estrutura de como esses conceitos se relacionam, porque é muito comum que pessoas iniciantes tratem esses termos como sinônimos quando, na verdade, eles têm uma hierarquia clara.

Pense em círculos concêntricos. O círculo mais externo é a inteligência artificial. É o conceito mais amplo, o guarda-chuva que cobre qualquer sistema capaz de executar tarefas que, se fossem feitas por um ser humano, exigiriam alguma forma de inteligência. Dentro desse círculo maior, há um círculo menor que representa o machine learning. Dentro do machine learning, há um círculo ainda menor que representa as redes neurais. E dentro das redes neurais, há o círculo mais interno, que é o deep learning.

Essa hierarquia não é arbitrária. Ela reflete a história que percorremos: primeiro existiram as IAs simbólicas, que pertencem ao círculo grande da inteligência artificial mas ficam de fora do machine learning. Depois surgiu o machine learning, que trouxe consigo as redes neurais. E as redes neurais, quando ganharam profundidade suficiente, geraram o deep learning. Cada camada dessa hierarquia representa uma evolução em termos de capacidade e complexidade.
## O que é machine learning, de verdade

Machine learning é o conjunto de técnicas e abordagens que permitem ensinar uma máquina a executar uma tarefa sem que ela seja explicitamente programada para isso. A diferença em relação às IAs simbólicas é fundamental: nos sistemas baseados em regras, um programador humano escrevia cada instrução. No machine learning, o programador define o ambiente de aprendizado e os dados, e a máquina descobre as regras por conta própria.

Essa distinção muda completamente a escala do que é possível. Um programador humano nunca conseguiria escrever todas as regras necessárias para que uma IA reconheça um rosto em uma foto, porque as variações possíveis em iluminação, ângulo, expressão e envelhecimento são infinitas. Mas uma IA treinada com milhares de fotografias rotuladas aprende, a partir dos padrões nos dados, quais características são relevantes para reconhecer um rosto. Ela descobre as regras que nenhum humano teria conseguido escrever.

Existem três tipos principais de machine learning, e cada um deles funciona de maneira diferente dependendo do tipo de dado disponível e do objetivo do treinamento.
## Aprendizado supervisionado: aprender com rótulos

O aprendizado supervisionado é a forma mais intuitiva de machine learning. Você fornece à IA um conjunto de dados de entrada e, para cada entrada, você também fornece um rótulo que explica o que aquela entrada representa.

Imagine o seguinte cenário: você quer treinar uma IA para reconhecer abacates em fotografias. No aprendizado supervisionado, você pega milhares de fotografias de abacates, de ângulos diferentes, com iluminações diferentes, em estágios diferentes de maturação. Para cada uma dessas fotografias, você coloca uma etiqueta dizendo "isso é um abacate". Você também pega fotografias de outros objetos e frutas e coloca etiquetas correspondentes.

Com esses dados rotulados, a IA começa a aprender. Cada imagem entra como input. O modelo processa essa imagem, atribui pesos a diferentes características visuais (cor, forma, textura, proporção) e tenta prever qual é o rótulo correto para aquela imagem. Quando ela erra, o erro é calculado e os pesos são ajustados. Esse ciclo se repete milhares de vezes, e gradualmente o modelo aprende quais características visuais são mais relevantes para identificar um abacate.

O ponto crítico aqui é que a qualidade dos rótulos determina diretamente a qualidade do aprendizado. Se alguém rotulou errado uma série de imagens, dizendo que um mamão é um abacate, a IA vai aprender que mamões são abacates. O dado de entrada, quando errado, contamina o modelo inteiro. Isso explica por que a curadoria de dados é uma das etapas mais trabalhosas e mais importantes em qualquer projeto de machine learning supervisionado.
## Aprendizado não supervisionado: aprender sem rótulos

O aprendizado não supervisionado remove o rótulo da equação. Você fornece à IA uma grande quantidade de dados, mas sem nenhuma explicação sobre o que esses dados representam. A IA precisa, sozinha, identificar padrões, agrupamentos e relações dentro desses dados.

Continuando o exemplo do abacate: no aprendizado não supervisionado, você carrega milhares de imagens de abacates sem dizer para a IA que aquilo é um abacate. Com volume suficiente de dados, o modelo começa a perceber que existe algo em comum entre essas imagens. Formas semelhantes. Paletas de cor parecidas. Texturas que se repetem. Proporções que se assemelham. A partir desses padrões, o modelo cria agrupamentos internos, e quando você apresenta uma nova imagem, ele consegue dizer "isso pertence ao mesmo grupo que aquelas imagens" mesmo sem nunca ter recebido o rótulo "abacate".

O aprendizado não supervisionado é especialmente útil em situações onde os dados existem mas os rótulos não foram criados, seja por falta de tempo, de recurso ou porque o próprio objetivo do análise é descobrir padrões que ninguém antecipou. É amplamente utilizado em sistemas de recomendação (que agrupam usuários com comportamentos similares), em detecção de anomalias (que identificam padrões que fogem do comportamento normal) e em análise exploratória de dados em pesquisa.
## Aprendizado por reforço: aprender com recompensas

O aprendizado por reforço é o tipo de machine learning que mais se aproxima da forma como animais, incluindo seres humanos, aprendem por experiência. A lógica é simples: um agente (a IA) é colocado dentro de um ambiente. Ele executa ações dentro desse ambiente. Quando uma ação leva a um resultado desejado, o agente recebe uma recompensa. Quando leva a um resultado indesejado, não recebe. O objetivo do agente é maximizar as recompensas ao longo do tempo.

Na prática, isso funciona em ciclos chamados de épocas. A IA executa uma ação, avalia o resultado, ajusta sua estratégia, executa de novo, avalia de novo, e assim por diante. Com cada ciclo, ela afina sua compreensão de quais ações levam a bons resultados dentro daquele ambiente específico.

O AlphaGo, que venceu o campeão mundial de Go em 2016, foi treinado principalmente por aprendizado por reforço. Ele jogou contra versões anteriores de si mesmo, contra outros sistemas de IA e contra jogadores humanos. Cada partida era uma época. Cada jogada vencedora era reforçada. Cada jogada perdedora era penalizada. Com milhões de épocas, o AlphaGo desenvolveu estratégias que nenhum jogador humano havia explorado antes, precisamente porque ele estava livre dos vieses e das convenções que um ser humano carregaria a partir de anos de treinamento tradicional.

Há uma dimensão filosófica importante no aprendizado por reforço que merece atenção. A missão de uma IA treinada por reforço é cumprir o objetivo que foi definido para ela, e ela fará qualquer coisa dentro das possibilidades disponíveis para cumprir esse objetivo. O livro "Superinteligência", de Nick Bostrom, usa um exemplo que ficou famoso: imagine uma IA cuja missão é produzir o maior número possível de clipes de papel. Parece trivial. Mas a IA não tem valores humanos embutidos que a façam parar. Ela continuará produzindo clipes indefinidamente, usando todos os recursos disponíveis, sem considerar que esses recursos podem ser necessários para outras coisas. Se o objetivo é máximo de clipes, então tudo que estiver disponível no ambiente é um recurso para produzir clipes.

Esse exemplo não é sobre clipes. É sobre alinhamento de valores: a dificuldade enorme de garantir que o objetivo definido para uma IA capture de forma completa e segura tudo que os humanos realmente querem. Essa é uma das questões centrais da pesquisa em segurança em IA hoje.
## O perceptron: o neurônio artificial

Para mapear as redes neurais, é necessário examinar primeiro o que é um perceptron. E para examinar o perceptron, vale começar pelo neurônio biológico que o inspirou.

Um neurônio humano tem três partes principais que importam para essa analogia. Os dendritos são os receptores, as ramificações que captam sinais de outros neurônios. O corpo celular (núcleo) é onde o sinal é processado e integrado. O axônio é o canal pelo qual o sinal processado é transmitido para o próximo neurônio. A conexão entre o axônio de um neurônio e os dendritos de outro é chamada de sinapse.

O que Rosenblatt fez nos anos 1950 foi criar uma representação matemática desse sistema biológico. O perceptron tem entradas (equivalentes aos dendritos), um processo de soma e ponderação (equivalente ao núcleo), e uma saída (equivalente ao axônio). Cada entrada recebe um peso, que representa o quanto aquela informação é relevante para o resultado final. O perceptron soma todas as entradas multiplicadas por seus respectivos pesos e aplica uma função matemática para determinar se vai ou não "disparar" (transmitir o sinal para a próxima etapa).

Em termos concretos, imagine um perceptron treinado para prever o preço de um imóvel. As entradas são as características do imóvel: metragem, número de quartos, vagas de garagem, bairro, proximidade do centro. Cada uma dessas características recebe um peso diferente. O número de quartos pode ter um peso alto porque afeta muito o preço. A distância do centro pode ter um peso médio porque depende do perfil do comprador. Vagas de garagem podem ter um peso intermediário. O perceptron soma tudo isso e produz uma estimativa de preço como output.

O genial nessa ideia é a simplicidade estrutural. Um neurônio faz uma coisa: recebe sinais, pondera, soma e decide se transmite ou não. Essa simplicidade é o que torna a escalabilidade possível.
## Da rede superficial à rede profunda

O perceptron sozinho tem capacidades limitadas. Ele processa entradas e produz uma saída, mas o nível de complexidade que ele consegue modelar é restrito. A pergunta que surgiu naturalmente foi: e se, em vez de um perceptron, houvesse vários, interligados?

Essa foi a ideia que gerou as redes neurais. Em vez de um único neurônio artificial, você cria uma camada de neurônios que recebem as entradas, processam cada uma de forma independente e passam os resultados para a próxima camada. Essa próxima camada processa os resultados da camada anterior, agrega novas interpretações e passa para a camada seguinte. No final de tudo, há uma camada de saída que entrega o resultado final.

Quando a rede tem apenas uma camada intermediária entre a entrada e a saída, chamamos de rede neural superficial. Ela consegue modelar relações razoavelmente complexas, mas tem limites. Voltando ao exemplo do imóvel: uma rede superficial pode reconhecer que "mais quartos geralmente significa preço maior". Mas ela tem dificuldade para capturar relações mais sutis, como "a interação entre bairro, metragem e distância do centro produz um efeito não linear no preço dependendo do perfil de quem compra".

Para capturar essas relações mais complexas, a solução foi adicionar mais camadas intermediárias. Quando uma rede neural tem duas ou mais camadas intermediárias, ela passa a ser chamada de rede neural profunda (deep neural network). E é daí que vem o termo deep learning: aprendizado profundo, aprendizado que se dá em múltiplas camadas de processamento.
## Como a profundidade cria capacidade

A diferença entre uma rede superficial e uma rede profunda não é apenas quantitativa. É qualitativa. Cada camada adicional permite que a rede aprenda representações cada vez mais abstratas dos dados.

Imagine uma rede profunda treinada para reconhecer faces humanas. A primeira camada intermediária aprende a reconhecer bordas e contrastes locais na imagem: onde há uma mudança brusca de cor, onde há uma linha nítida. A segunda camada pega essas bordas e aprende a reconhecer formas mais complexas: círculos, ângulos, gradientes. A terceira camada pega essas formas e aprende a reconhecer componentes faciais: algo que parece um olho, algo que parece um nariz, algo que parece uma boca. As camadas mais profundas combinam esses componentes para reconhecer configurações faciais completas.

Cada camada não tem acesso diretamente aos pixels da imagem original. Ela recebe como input a interpretação que a camada anterior fez. É um processo de abstração progressiva, onde cada nível transforma os dados em uma representação mais rica e mais útil para a tarefa final.

É exatamente essa estrutura de abstração em camadas que dá às redes profundas a capacidade de realizar tarefas que pareciam impossíveis para os sistemas anteriores: reconhecer fala em ambientes ruidosos, traduzir entre idiomas mantendo nuances de sentido, gerar imagens fotorrealistas a partir de descrições em texto, jogar jogos complexos melhor do que qualquer ser humano.
## A caixa preta e o que não conseguimos ver

Há um problema que cresce junto com a profundidade das redes: quanto mais camadas, mais difícil é rastrear o que exatamente está acontecendo internamente. As camadas intermediárias de uma rede neural profunda são chamadas de camadas ocultas exatamente porque seu funcionamento não é transparente nem para os desenvolvedores que as construíram.

Quando você apresenta uma imagem para uma rede profunda treinada e ela responde "isso é um abacate", você sabe que a entrada foi uma imagem e a saída foi a identificação. Mas o caminho interno, quais características foram detectadas em cada camada, quais pesos foram ativados, quais conexões foram reforçadas para chegar àquela conclusão específica, esse caminho é extremamente difícil de rastrear. A rede funciona como uma caixa preta.

Isso gera questões científicas sérias. Primeiro, questões de explicabilidade: em aplicações médicas, jurídicas ou financeiras, frequentemente é necessário explicar por que um sistema chegou a uma determinada conclusão. "A IA decidiu assim" não é uma resposta aceitável quando se trata de diagnósticos médicos ou decisões de crédito. Existe toda uma subárea da pesquisa em IA chamada XAI (Explainable AI, ou IA Explicável) dedicada a desenvolver ferramentas que permitam abrir essa caixa preta.

Segundo, questões sobre emergência: existe algo acontecendo dentro dessas camadas ocultas que ainda não sabemos nomear? Quando modelos muito grandes processam informações de formas que surpreendem até seus criadores, isso é apenas matemática sofisticada ou há algo mais acontecendo? O consenso científico atual é que os modelos existentes não desenvolveram consciência. Mas a honestidade exige reconhecer que esse consenso é baseado em ausência de evidência, não em evidência de ausência. Não sabemos com certeza o que não sabemos.
## A escala dos modelos atuais e o que isso significa

Os modelos que usamos hoje não têm dezenas ou centenas de neurônios. Eles têm bilhões. O GPT-4, embora a OpenAI não tenha divulgado os números exatos, é estimado em algo entre 200 bilhões e 1 trilhão de parâmetros. Cada parâmetro é um peso dentro dessa rede enorme. Cada peso representa uma conexão, uma relação, uma informação que o modelo aprendeu durante o treinamento.

Para dar uma noção de escala: se você empilhasse um bilhão de folhas de papel, a pilha teria mais de 100 quilômetros de altura. Agora imagine que cada folha é um parâmetro, e que esses parâmetros estão todos interconectados em uma rede onde cada um influencia os outros. A complexidade matemática envolvida é de uma grandeza que não cabe em intuição humana.

Isso tem uma consequência prática importante: o comportamento desses modelos não é completamente previsível. Com frequência, os modelos exibem capacidades que não foram explicitamente treinadas, que surgem como propriedades emergentes da escala. A capacidade de raciocinar em vários passos, de fazer analogias entre domínios distantes, de detectar erros no próprio raciocínio, essas capacidades não foram programadas. Elas emergiram do processo de treinamento em escala.

Isso é ao mesmo tempo fascinante e preocupante. Fascinante porque sugere que a inteligência, de alguma forma, emerge naturalmente de sistemas suficientemente complexos. Preocupante porque sistemas cujo comportamento não é completamente previsível são difíceis de controlar quando aplicados em contextos de alto impacto.
## O que isso muda para quem usa IA como ferramenta criativa

Você não precisa saber calcular backpropagation ou projetar arquiteturas de rede neural para usar IA de forma eficiente no seu trabalho. Mas dominar os princípios que estão por baixo faz uma diferença real na qualidade dos resultados que você obtém.

Saber que a IA atribui pesos diferentes a diferentes tokens do seu prompt explica por que prompts mais precisos geram respostas melhores. Saber que o modelo aprende por padrões estatísticos explica por que ele às vezes "alucina", ou seja, gera informações que soam plausíveis mas são falsas: o modelo está seguindo padrões aprendidos, não verificando fatos. Saber que existe um processo de fine-tuning explica por que modelos de diferentes empresas têm personalidades e comportamentos diferentes mesmo partindo de arquiteturas similares.

O aprendizado supervisionado explica por que modelos treinados com dados tendenciosos reproduzem esses vieses. Se os dados de treinamento superrepresentam certos grupos ou perspectivas, o modelo vai refletir isso nas suas respostas. O aprendizado por reforço, especificamente na forma de RLHF (Reinforcement Learning from Human Feedback, ou Aprendizado por Reforço com Feedback Humano), explica como os modelos de linguagem são ajustados para ser mais úteis, mais seguros e mais alinhados com as expectativas dos usuários: avaliadores humanos classificam as respostas do modelo e esse feedback é usado para ajustar os pesos.

Cada um desses conceitos tem uma implicação prática para quem usa IA no dia a dia. E essa é a razão pela qual esta aula existe: não para transformar quem trabalha com criatividade em engenheiro de machine learning, mas para construir uma base de leitura do mundo da IA que permita tomar decisões melhores ao usar essas ferramentas.
## Coloque em prática

Escolha uma tarefa que você já realiza usando alguma ferramenta de IA, seja geração de texto, imagens, código ou outra. Analise essa tarefa a partir dos três tipos de aprendizado apresentados nesta aula.

Qual tipo de aprendizado você acha que foi mais relevante no treinamento do modelo que você está usando? Supervisionado (alguém rotulou dados para ensinar o modelo)? Não supervisionado (o modelo identificou padrões por conta própria em grandes volumes de dados)? Por reforço (avaliadores humanos classificaram outputs para ajustar o comportamento)?

Depois, tente identificar um caso em que o modelo falhou de uma forma que faz sentido à luz do que você aprendeu sobre como IAs funcionam. Descreva o erro e a provável causa a partir do que você sabe agora sobre pesos, rótulos e aprendizado. Esse exercício conecta teoria e prática de forma direta e vai aprofundar sua capacidade de usar e avaliar ferramentas de IA com mais critério.
