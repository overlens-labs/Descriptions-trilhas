# Prompts básicos e boas práticas

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar por que o tamanho do prompt não determina a qualidade do resultado
- Reconhecer como o sistema de embedding vetorial atribui pesos diferentes a cada tipo de palavra
- Distinguir substantivos, adjetivos e verbos pelo impacto que têm na geração de imagens
- Aplicar a regra de focar no que se deseja em vez de descrever o que se quer evitar
- Estruturar prompts com especificidade de números e adjetivos precisos
- Executar testes de isolamento de variável para mapear pesos de palavras-chave
## O mito do prompt longo

A crença mais comum e mais prejudicial sobre geração de imagens com IA é que prompt bom é prompt longo. Que quanto mais detalhe, melhor o resultado. Que prompts curtos são para iniciantes e prompts longos são para profissionais.

Essa crença é um mito. Você pode usar um prompt de uma única palavra e ter um resultado excelente. Você pode escrever um parágrafo inteiro e ter um resultado ruim. O que determina a qualidade do resultado não é o tamanho do prompt, mas a clareza de intenção e a precisão do vocabulário.

Em 2021, quando as primeiras versões do Midjourney rodavam no Discord e o ChatGPT tinha acabado de surgir, quem conseguia resultados precisos com prompts curtos não tinha um segredo técnico. Tinha uma mente clara e um vocabulário visual rico. A capacidade de navegar em pensamentos de forma organizada, articular uma imagem mental com palavras específicas, é o que diferencia o resultado, independentemente da ferramenta.

O contexto de 2021 exigia prompts mais longos porque os modelos eram menos capazes de inferir contexto a partir de poucas palavras. Com prompts curtos, os resultados eram frequentemente decepcionantes porque o modelo precisava de mais direcionamento para sair do óbvio estatístico. Nessa época, prompts com todos os detalhes de ângulo, câmera, iluminação e ambiente eram necessários. Foi daí que saiu muito do vocabulário técnico usado até hoje.

Hoje, os modelos são muito mais capazes de inferir. Um prompt de uma palavra gera uma imagem visualmente boa. A questão não é mais saber gerar: é saber direcionar.
## Como a IA processa palavras: embedding vetorial

Para usar prompts com inteligência, é necessário reconhecer como a IA processa o que você escreve. A IA não lê. Ela não imagina. Ela não interpreta no sentido humano de interpretar. O que ela faz é matematicamente mais simples e mais poderoso:

Qualquer informação que você manda para a IA passa por um Embedding Model. Esse modelo quebra o conteúdo em números, e esses números têm múltiplas dimensões. Cada palavra, cada pixel, cada elemento é representado por um vetor: uma sequência de números que posiciona aquele elemento em um espaço matemático de alta dimensionalidade.

Palavras com significados parecidos ficam próximas nesse espaço vetorial. Palavras opostas ficam distantes. Combinações de palavras criam um ponto novo nesse espaço, que é diferente do ponto de cada palavra individual.

A imagem gerada é o resultado mais provável para o ponto no espaço vetorial que o seu prompt criou. A IA não está imaginando: está calculando qual conjunto de pixels tem a maior probabilidade de corresponder ao ponto vetorial do seu prompt.

Isso tem duas implicações práticas:

**Primeira:** a IA não tem inconsciente, não tem vontade, não imagina. Ela atribui peso. Cada termo no seu prompt altera o ponto vetorial e, portanto, altera o resultado. Nenhuma palavra é neutra.

**Segunda:** a IA não "decide" o que incluir ou excluir na imagem com base em intenção. Ela calcula. Se o resultado não corresponde à sua intenção, o problema está na diferença entre o ponto vetorial que o seu prompt criou e o ponto que você queria criar.
## O peso de cada tipo de palavra

A pesquisa empírica da Overlens, feita por meio de testes sistemáticos de isolamento de variável, identificou que diferentes tipos de palavras têm pesos diferentes na geração de imagens. Esses pesos são aproximados e variam entre modelos, mas a hierarquia é consistente:

- Substantivos: peso estimado 5.
- Adjetivos: peso estimado de 4 a 4,5.
- Verbos: peso estimado 4.
- Artigos e palavras de conexão: peso estimado de 1 a 2.

**Substantivos** têm o maior peso. O substantivo é o sujeito ou o objeto da cena: o que a imagem é sobre. Se você escreve "elefante", a IA vai gerar algo que representa o conceito central de elefante, com todos os atributos estatisticamente mais comuns associados a esse conceito (savana, cinza, tromba, tamanho grande). Tudo que é implícito no conceito vai aparecer se você não especificar o contrário.

**Adjetivos** têm o segundo maior peso. O adjetivo qualifica o substantivo e é o que muda a natureza do resultado com mais eficácia. A diferença entre "elefante pequeno" e "elefante minúsculo" é perceptível. A diferença entre "elefante minúsculo" e "elefante microscópico" é grande. Quanto mais específico e extremo o adjetivo, mais ele empurra o resultado para longe do óbvio estatístico.

**Verbos** têm peso equivalente a adjetivos, mas são menos usados em prompts de imagem. O verbo define a ação: o que está acontecendo na cena. "Corre", "dorme", "olha" alteram a composição e a tensão visual da imagem.

**Artigos e palavras de conexão** têm peso secundário, mas não são irrelevantes. A diferença entre "o elefante" e "os elefantes" altera quantos elefantes aparecem na imagem. A IA interpreta número e definição. "O elefante" sinaliza um. "Os elefantes" sinaliza grupo. "Um elefante" é indefinido. Cada variação produz resultado diferente.

Palavras como "de", "com", "para", "na", "sem" têm peso baixo. Elas contribuem com relações semânticas, mas não dominam o resultado. A lição é focar energia nos substantivos e adjetivos: são eles que fazem a diferença mais visível.
## O que o tipo de palavra revela sobre o prompt

Ruan usa um ponto de referência interessante: quem domina português estruturalmente (quem tem clareza sobre a função de cada classe gramatical) tem uma vantagem na hora de escrever prompts porque já sabe intuitivamente o que tem mais peso.

Quando você está aprendendo uma língua nova, começa por substantivos, verbos e adjetivos. Não por artigos ou preposições. É exatamente essa hierarquia que a IA reproduz ao atribuir pesos. A lógica de "começa pelo essencial" é a mesma.

Isso também significa que vocabulário visual é um diferencial real. Se você domina o nome técnico de uma composição ("perspectiva de dois pontos"), de uma técnica de iluminação ("Rembrandt lighting"), de um estilo fotográfico ("chiaroscuro"), de um tipo de lente ("85mm f/1.4"), de uma textura ("bokeh"), de um movimento artístico ("expressionismo alemão"), cada um desses termos é um substantivo ou adjetivo com alta especificidade que empurra o resultado em uma direção muito precisa.

Quem construiu esse vocabulário ao longo da vida (por ler muito, por desenhar muito, por estudar fotografia, design ou artes visuais) sai na frente não porque a IA favorece experts, mas porque termos precisos criam pontos vetoriais precisos.
## O teste do elefante: o que o prompt mais curto revela

Ruan demonstra isso ao vivo com o prompt de uma palavra: "elefante". O resultado é uma imagem visualmente competente de um elefante. Mas analise o que está na imagem: é o clichê de um elefante. O óbvio estatístico. Savana, cinza, pele rugosa, visto de perfil ou três quartos, possivelmente com vegetação ao fundo.

Não há nada errado com essa imagem para muitos usos. O problema é que ela representa o que a maioria das pessoas associa ao conceito "elefante", não necessariamente o que você queria.

A imagem sem especificidade adicional é o ponto mais provável no espaço vetorial de "elefante". Se você queria o elefante de frente, de noite, em ambiente urbano, com cria ao lado, essa imagem não atende. Mas isso não é culpa da IA: você não pediu nada disso.

A evolução do prompt ilustra como cada elemento muda o resultado:

- "Elefante" > imagem genérica, ponto central do espaço vetorial
- "Elefante na savana de noite" > três pontos vetoriais diferentes criando um novo ponto conjunto
- "O elefante na savana de noite" > um indivíduo, não grupo
- "Os elefantes na savana" > grupo, composição diferente
- "Elefante minúsculo" > adjetivo de escala, resultado visualmente diferente do óbvio
- "Elefante microscópico perto de elefante estratosférico" > dois substantivos com adjetivos extremos que forçam a IA a criar uma composição que mostra escala relativa de forma não convencional

O resultado com adjetivos extremos (microscópico e estratosférico) força a IA a resolver um problema de escala visual que ela não pode representar no espaço convencional: um elefante invisível a olho nu e outro que vai até a estratosfera não cabem na mesma imagem literal, então a IA cria uma solução criativa que representa a escala de forma simbólica.
## A regra da negação: por que "sem elefante" não funciona

Essa é uma das informações mais contraintuitivas e mais práticas da aula. Quando você usa negação num prompt (sem elefante, não inclua cachorro, sem fundo, sem pessoas), existe uma probabilidade alta de a IA ignorar o "sem" e dar peso para o substantivo.

O motivo está nos pesos: "sem" é uma palavra de conexão com peso baixo (1 ou 2). "Elefante" é um substantivo com peso máximo (5). A relação matemática entre os dois vetores muitas vezes resulta em "elefante" dominando, e o "sem" sendo insuficiente para reverter isso.

O teste ao vivo na aula usa o prompt "uma savana sem um elefante" em um modelo de difusão pura (não multimodal). Resultado: em três das quatro variações geradas, aparecem elefantes. A IA deu peso ao substantivo "elefante" e ignorou efetivamente a negação.

O modelo NanoBanana (também chamado NanoFlux 2 na época da gravação), por ser multimodal (tem uma LLM integrada ao modelo de difusão), passa nesse teste: ele interpreta a negação antes de gerar, cria internamente um prompt reformulado que exclui o elefante (savana com zebras e girafas, por exemplo), e gera sem elefante. Mas mesmo ele não garante isso 100% das vezes.

Modelos como o ChatGPT (DALL-E 3 integrado com GPT) e o Gemini (Imagen 3 integrado com Gemini) também tendem a passar nesse teste porque são fundamentalmente multimodais: a LLM interpreta a negação antes de acionar a geração.

Modelos de difusão pura (como versões do Seedream sem LLM, ou versões antigas do Midjourney) falham sistematicamente na negação porque não têm o componente de interpretação semântica avançada.

**A regra prática:** escreva no prompt o que você quer ver, não o que você não quer. Em vez de "uma savana sem elefante", escreva "uma savana vazia". Em vez de "pessoa sem óculos", descreva as características da pessoa sem mencionar óculos. Em vez de "fundo branco sem elementos", escreva "fundo branco limpo, minimalista".

Você não precisa descrever o que está ausente. Descreva o que está presente.
## Adjetivos que ajudam versus adjetivos que atrapalham

Existem adjetivos que abrem o espaço de possibilidades demais e outros que o fecham na direção certa. A regra é: quanto mais amplo o adjetivo, mais a IA vai para o centro estatístico. Quanto mais específico, mais o resultado se afasta do óbvio.

**Adjetivos que atrapalham (muito amplos):**
- "Bonito" - subjetivo demais. A IA vai para o que a maioria considera bonito.
- "Incrível" - sem referência visual.
- "Profissional" - depende do contexto, varia muito.
- "Moderno" - mudou de significado várias vezes, a IA vai para o mais estatístico.
- "Criativo" - sem âncora visual.

Quando você usa "elefante bonito", a IA vai gerar o que estatisticamente mais pessoas associam a "bonito" aplicado a um elefante. Não vai gerar o que você considera bonito. O leque fica grande demais e o resultado raramente corresponde à intenção específica.

**Adjetivos que ajudam (precisos e visuais):**
- "Microscópico" - escala específica
- "Estratosférico" - escala específica oposta
- "Translúcido" - qualidade de material
- "Texturizado" - qualidade de superfície
- "Desfocado ao fundo" - técnica fotográfica
- "Iluminado por baixo" - fonte de luz específica
- "Vazio" - estado do ambiente
- "Miniatura" - escala com referência humana implícita

Quanto mais o adjetivo tem uma âncora visual clara (uma imagem mental que qualquer pessoa familiarizada com a palavra vai ter), mais ele funciona como vetor preciso no espaço de geração.
## Especificidade de números

Números são um tipo de informação que a IA processa com mais literalidade do que adjetivos vagos. Quando você especifica números, você reduz a ambiguidade e aumenta a precisão.

"Três gatos numa escada" gera um resultado muito mais previsível do que "gatos numa escada". A IA pode colocar dois gatos, sete gatos, ou um grupo de gatos indefinido. Com "três", ela tenta honrar o número.

"Um bando de pássaros" usa uma palavra coletiva que direciona a cena melhor do que "pássaros". O coletivo carrega a imagem mental de grupo em movimento, o que altera composição, perspectiva e dinâmica visual.

Expressões coletivas específicas (bando, cardume, manada, ninhada) têm um peso visual próprio porque evocam comportamentos e composições distintos. Usar essas palavras com precisão é parte do vocabulário técnico que diferencia resultados.
## A estrutura de prompt por categorias

Para imagens com alta especificidade (uma pessoa em contexto de marca, com roupa específica, em ambiente determinado, com expressão e luz definidas), a Overlens usa uma estrutura de prompt dividida em categorias. Essa estrutura não é obrigatória para todos os usos, mas garante que nenhum elemento importante seja esquecido:

1. **Contexto inicial:** define o tipo de imagem e o estilo geral. "Fotografia de produto", "ilustração editorial", "rendering 3D fotorealista".

2. **Sujeito:** o substantivo principal com seus adjetivos. A pessoa, o objeto, o animal. Com características específicas: idade, aparência, expressão, postura.

3. **Ambiente:** o espaço onde a cena acontece. Interior ou exterior, referências arquitetônicas, elementos de cenário.

4. **Ações:** o que está acontecendo. Verbos específicos. "Olha diretamente para a câmera", "caminha em direção ao observador", "segura o objeto com as duas mãos".

5. **Fotografia:** os parâmetros técnicos. Enquadramento (full shot, close-up, extreme close-up), ângulo (eye-level, high angle, worm's eye), iluminação (golden hour, studio light, split lighting), câmera e lente (Canon 5D com 85mm f/1.4), profundidade de campo.

Essa estrutura não precisa ser usada em ordem rígida, e nem sempre todos os campos precisam ser preenchidos. O objetivo é garantir que quando você precisa de precisão, você tem um mapa de onde colocar cada tipo de informação.
## Modelos multimodais versus modelos de difusão pura

A distinção entre esses dois tipos de modelos tem impacto direto no que você pode pedir e como deve escrever o prompt.

**Modelos de difusão pura** são treinados exclusivamente para gerar imagens a partir de texto. Eles transformam o prompt em um ponto no espaço vetorial e geram pixels. São extremamente bons em qualidade visual, mas têm limitações na interpretação semântica avançada. Exemplos: Seedream sem LLM, Flux sem wrapper.

**Modelos multimodais** combinam uma LLM com a geração de imagem. A LLM interpreta o prompt primeiro, pode reformulá-lo internamente, é capaz de processar negação, contexto, relações semânticas complexas, e só então aciona o modelo de geração. Exemplos: ChatGPT (DALL-E 3 + GPT-4), Gemini (Imagen 3 + Gemini), NanoBanana (Flux + wrapper LLM).

Modelos multimodais conseguem:
- Processar negação com mais precisão
- Interpretar pedidos em linguagem natural complexa
- Processar referências indiretas e contexto implícito
- Usar imagens enviadas como referência semântica, não só visual

Modelos de difusão pura precisam:
- Prompts mais diretos e afirmativos
- Descrição do que você quer ver, não do que não quer
- Vocabulário mais técnico e específico
- Parâmetros explícitos para o que você precisa controlar

A escolha entre os dois depende do objetivo. Para consistência de identidade visual e controle de detalhes específicos, os modelos multimodais são mais versáteis. Para qualidade visual bruta e geração rápida com vocabulário técnico preciso, os modelos de difusão pura ainda têm vantagens.
## Adjetivos de estilo: classificar antes de detalhar

Uma das técnicas mais eficientes para gerar resultados com estilo específico é nomear o tipo de imagem antes de descrever o conteúdo. Isso funciona como um substantivo de categoria que define o espaço visual antes de qualquer adjetivo entrar.

"Ícone 3D de um elefantinho fofo, imagem sem fundo PNG" produz um resultado completamente diferente de "foto realista de um elefante". O classificador "ícone 3D" define o espaço estético, os adjetivos "fofo" e "sem fundo" refinam dentro desse espaço.

Outros exemplos de classificadores que funcionam bem:
- "Ícone geométrico minimalista"
- "Ilustração editorial em aquarela"
- "Pintura a óleo expressionista"
- "Modelo 3D com textura de brinquedo"
- "Fotografia de produto em fundo branco"
- "Renderização arquitetônica fotorealista"
- "Desenho de traço fino sobre fundo branco"
- "Selo em textura patchwork"

Cada classificador abre um espaço visual distinto. Os adjetivos dentro desse espaço refinam o resultado dentro dos limites do que o classificador define. "Outline icon de elefante" vai em direção diferente de "3D icon de elefante" mesmo que o conteúdo seja o mesmo.
## Comprimento e nível de detalhe: quando usar cada um

A decisão de quanto detalhe colocar no prompt depende do que você quer:

**Prompt curto (uma a cinco palavras):** quando você quer que a IA tome decisões por você. Útil para exploração inicial, mood board, geração de muitas variações diferentes para descoberta de caminhos. Aceite a aleatoriedade como parte do processo.

**Prompt médio (uma frase completa):** quando você tem clareza sobre o que quer mas não precisa controlar todos os detalhes. A IA preenche o que você não especificou com as opções mais prováveis.

**Prompt longo e estruturado (múltiplos elementos por categoria):** quando você tem uma imagem específica em mente e precisa que o resultado se aproxime o máximo possível. Use a estrutura de categorias. Cada elemento do prompt tem um peso, e você está usando todos os pesos disponíveis para empurrar o resultado na direção certa.

A regra de Ruan: não existe prompt ideal para todos os casos. Existe o prompt que faz sentido para o seu objetivo naquele momento. Aprender a calibrar o nível de detalhe para o objetivo é parte da proficiência em geração de imagens.
## O princípio da metodologia científica na geração

Alterar tudo ao mesmo tempo é um erro. Quando você não está conseguindo o resultado que quer, a tentação é reescrever o prompt do zero. Mas reescrever do zero descarta o aprendizado: você não sabe o que estava funcionando e o que não estava.

A abordagem correta é isolar variáveis. Mantenha o prompt base fixo e altere uma coisa por vez:
- Troca o substantivo principal, mantém tudo mais.
- Troca o adjetivo de iluminação, mantém tudo mais.
- Adiciona um parâmetro de câmera, mantém tudo mais.
- Muda o classificador de estilo, mantém o conteúdo.

Cada teste com variável isolada te diz quanto aquele elemento contribui para o resultado. Com o tempo, você constrói um mapa de pesos específico para o modelo que usa e para o tipo de imagem que produz. Esse mapa não está disponível em nenhum trilha: é construído empiricamente.

Esse é o diferencial entre quem usa IA de forma mecânica e quem usa de forma sistematicamente profissional. O processo não muda: é metodologia científica aplicada a um contexto criativo.
## Coloque em prática

Escolha um elemento simples (um objeto, um animal, um ambiente) e escreva quatro versões do mesmo prompt:

1. Uma palavra (só o substantivo)
2. Três palavras (substantivo + dois adjetivos)
3. Uma frase completa com classificador de estilo + substantivo + adjetivos + ambiente
4. Prompt estruturado com sujeito, ambiente, ação e parâmetro de fotografia

Gere imagens com cada versão no mesmo modelo. Documente os resultados e registre qual versão chegou mais próximo de uma imagem que você usaria. Depois, teste o mesmo prompt com e sem um elemento de negação (ex: "sem pessoas") e observe se o modelo respeita ou ignora a negação. Esse experimento revela o comportamento específico do modelo que você usa.
