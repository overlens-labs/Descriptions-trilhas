# Iluminação e atmosfera

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Reconhecer como modelos de difusão processam iluminação de forma estatística, não física
- Aplicar vocabulário técnico de iluminação para guiar gerações com precisão
- Executar testes de isolamento de variável com a metodologia do laboratório de iluminação
- Identificar erros frequentes de iluminação (ring light, moonlight, neon, firelight) e seus resultados reais
- Estruturar prompts de enquadramento com os termos corretos do Close-Up ao Extreme Wide Shot
- Distinguir ângulos de câmera e reconhecer como cada um altera a leitura da cena
- Aplicar nomenclatura de câmeras e lentes para controlar perspectiva e profundidade de campo
## Como a IA processa iluminação

A IA não simula física de luz. Esse é o ponto de partida de toda a aula. Não existem raios de luz calculados, reflexos físicos precisos, sombras projetadas com geometria real, bounce de luz entre superfícies. O que existe é uma aproximação estatística que imita o resultado visual dessas propriedades a partir de bilhões de imagens de treinamento.

Isso significa que quando você escreve "chiaroscuro" ou "Rembrandt lighting" no prompt, a IA acessa um padrão específico: ela reconhece o conjunto de características visuais que aparecem frequentemente associadas a esse termo nas imagens de treinamento e reproduz essas características estatisticamente. Não está calculando o ângulo da luz e a posição das sombras. Está reproduzindo o que fotografias e pinturas com essa iluminação costumam parecer.

A consequência prática é dupla. Primeiro: vocabulário técnico de fotografia e pintura funciona muito bem porque esses termos têm padrões visuais consolidados no treinamento. Segundo: termos ambíguos ou metafóricos geram resultados inesperados porque a IA vai para a interpretação mais literal e estatisticamente comum.
## O laboratório de iluminação: metodologia de isolamento de variável

Para mapear sistematicamente o impacto de cada termo de iluminação, a Overlens criou o que Ruan chama de "laboratório de iluminação". O princípio é simples e deriva da metodologia científica: isolar uma variável por vez.

O prompt base usado no laboratório é fixo: uma esfera metálica (ou em algumas versões, uma esfera cromada) em um ambiente neutro, com todos os outros parâmetros idênticos. O único elemento que muda é o termo de iluminação.

A escolha da esfera cromada não é arbitrária. Uma superfície metálica reflexiva é o melhor detector de iluminação possível porque revela o ambiente de luz com clareza máxima: ela reflete o que está acima, o que está ao redor, e as fontes de luz. Com um objeto opaco em cor neutra, você não vê a iluminação com a mesma clareza. Com a esfera, você vê exatamente o que a IA processa e representa sobre o ambiente de luz gerado por cada termo.

O laboratório gerou dezenas de variações, documentadas e comparadas. Abaixo estão os principais tipos de iluminação testados, com os resultados observados.
## Tipos de iluminação testados e resultados

**Studio Light (luz de estúdio):** iluminação neutra, frontal ou levemente lateral, difusa, sem sombras duras. A esfera fica bem iluminada com gradação suave. É o resultado mais previsível e controlado. Útil quando você quer que o sujeito apareça sem interferência atmosférica, como em fotografia de produto.

**Split Lighting (iluminação dividida):** metade do rosto ou do objeto iluminado, metade em sombra. A divisão é próxima de 50/50, com linha de transição relativamente nítida. Na esfera, aparece claramente como duas metades distintas. É uma iluminação dramática que funciona bem para retratos com caráter forte, imagens de moda, composições com tensão visual.

**Rembrandt Lighting:** um dos termos mais reconhecidos no treinamento. Resulta na iluminação característica de retratos do estilo Rembrandt: triângulo de luz abaixo do olho no lado mais escuro do rosto, sombras dramáticas mas não totais, textura da pele evidenciada. Na esfera, a gradação de luz é muito específica com a área reflexiva característica. Funciona bem para retratos de alta dramaticidade e imagens com peso emocional.

**Butterfly Lighting:** luz posicionada acima e à frente do sujeito, projetando sombra em forma de borboleta abaixo do nariz. É uma iluminação usada classicamente em fotografia de moda e glamour dos anos 1950 e 1960. A IA reconhece bem o padrão e o aplica com consistência.

**Golden Hour:** luz quente, dourada, vinda de ângulo baixo, simulando o pôr do sol ou o nascer do sol. Gera tons âmbar, laranjas e rosas. A esfera reflete tons quentes com as características de um sol próximo ao horizonte. É um dos termos com resultado mais consistente e controlável. Amplamente usado para fotografia de natureza, retratos ao ar livre e composições com mood nostálgico ou romântico.

**Blue Hour:** equivalente ao golden hour mas nos minutos antes do amanhecer ou depois do pôr do sol, quando o céu fica com tons de azul profundo. A esfera reflete um ambiente crepuscular com tonalidades frias e azuladas. Gera mood mais misterioso ou melancólico.

**Overcast Light (luz nublada):** iluminação difusa de todo o céu coberto por nuvens. Sombras muito suaves, quase inexistentes. Contraste baixo. Cor fria e neutra. A esfera mostra reflexo de um céu branco uniforme. Útil para fotografias de produto onde sombras duras são indesejáveis, ou para retratos com aparência natural e sem dramaticidade.

**Cinematic Lighting:** não é uma técnica específica, mas um conjunto de características associadas à fotografia de cinema: contraste elevado, uso intencional de sombras, coloração específica (muitas vezes com viés para teal e laranja), dramaticidade na distribuição de luz. A IA vai para o clichê do visual cinemático e o resultado é visualmente impactante, mas genérico dentro da categoria "cinema".

**Hard Light (luz dura):** fonte de luz pequena e próxima, gerando sombras com bordas nítidas e alto contraste. Na esfera, as sombras projetadas são bem definidas. Funciona para composições com tensão ou agressividade visual.

**Soft Light (luz suave):** fonte de luz grande ou difusa, gerando sombras com bordas graduadas e contraste baixo. Na esfera, transição suave entre luz e sombra. Funciona para composições com leveza, suavidade ou mood romantizado.

**Neon Light:** aqui começa o território dos erros. "Neon light" no prompt não produz necessariamente iluminação por luz de neon. A IA frequentemente transforma o próprio objeto em neon, ou adiciona elementos neon à cena. A esfera pode aparecer com iluminação colorida saturada, mas o resultado varia muito e frequentemente o objeto deixa de ser o foco e o neon se torna o sujeito. Se o objetivo é luz colorida saturada de ambientação, termos mais específicos como "LED ambient light, cyan and magenta" funcionam com mais previsibilidade.

**Moonlight:** similarmente problemático. "Moonlight" frequentemente resulta na lua aparecendo na esfera (como reflexo ou como elemento da cena) em vez de iluminação com as características da luz lunar (azul fria, muito suave, baixa intensidade, sombras longas). Se você quer luz noturna com características lunares, descreva as características: "soft cold blue ambient light, low intensity, long shadows".

**Ring Light (luz de anel):** produz o reflexo de anel característico. Na esfera, o padrão de reflexo circular da ring light aparece com clareza. Mas isso pode ser um problema dependendo do objetivo: o reflexo de ring light é muito identificável e pode dar aparência de fotografia de selfie ou de vídeo de influenciador, o que pode não ser o tom desejado.

**Firelight:** "firelight" frequentemente adiciona fogo à cena. A IA associa o termo com a fonte de luz, não com o efeito de iluminação. Se você quer a atmosfera quente e oscilante de iluminação por chamas sem fogo visível, descreva: "warm flickering amber light, dramatic shadows, low key".

**Candlelight:** similar ao firelight, com mais consistência. A IA reconhece bem o padrão de iluminação por velas (quente, pequena, cercada por escuridão). Funciona melhor do que firelight para iluminação íntima sem fogo aparente.

**Chiaroscuro:** um dos termos mais poderosos do laboratório. Altamente específico na história da arte, gera resultados consistentes com as características da técnica: contraste extremo entre luz e sombra, com a luz moldando o volume do objeto contra um fundo escuro. Na esfera, o resultado é dramaticamente preciso. Funciona especialmente bem para composições com referência clássica ou alta dramaticidade.

**Backlight (contraluz):** a fonte de luz posicionada atrás do sujeito. Na esfera, aparece como halo de luz ao redor e o corpo da esfera em silhueta ou penumbra. Funciona para composições com silhueta, para separação do fundo, ou para mood de descoberta/revelação.

**Three-point lighting:** iluminação de três pontos (key light, fill light, back light). É o padrão clássico de iluminação de estúdio de cinema e televisão. A IA reconhece bem e produz uma distribuição de luz equilibrada, profissional, com o sujeito bem separado do fundo.
## Erros frequentes de iluminação

Quatro termos geram erros consistentes que valem documentação específica:

**"Ring light"** como intenção de iluminação profissional tende a produzir imagens com estética de selfie ou vídeo de lifestyle. O reflexo de anel no olho ou na superfície é muito característico e delimita o tipo de produção.

**"Moonlight"** produz lua visível na cena em vez de iluminação lunar. Para luz noturna fria e suave, use descritores de características físicas da luz.

**"Neon light"** frequentemente transforma o objeto em neon ou adiciona elementos neon à cena. Para luz de neon como ambientação, especifique cor e fonte: "cyan neon ambient light from the left".

**"Firelight"** adiciona fogo visível. Para iluminação por chama sem fogo aparente, descreva as características: quente, âmbar, oscilante, sombras dramáticas.

O padrão é claro: termos que são o nome do objeto emissor de luz (moonlight = luz da lua = lua, ring light = anel, firelight = fogo) tendem a incluir o objeto na cena. Termos que descrevem a qualidade da luz (warm light, soft light, hard light, diffused light) controlam melhor o efeito sem introduzir elementos indesejados.
## Enquadramentos: do Full Shot ao Extreme Close-Up

A linguagem de enquadramento fotográfico é um dos vocabulários mais eficientes para controlar a composição na IA porque é extremamente bem representada nos dados de treinamento. Cada termo tem um padrão visual específico e consistente.

Ruan demonstra os enquadramentos usando uma estátua (mencionada como Prometeu ou Atena nas demonstrações) como sujeito fixo, alterando apenas o termo de enquadramento no prompt. Os resultados são documentados e comparados.

**Extreme Wide Shot (EWS):** o sujeito é muito pequeno no enquadramento, em relação ao ambiente que o cerca. Usado para estabelecer localização e escala em relação ao contexto. A estátua aparece minúscula num ambiente vasto.

**Wide Shot (WS):** o sujeito é visível com seu ambiente imediato. Corpo inteiro do sujeito com espaço ao redor. Estabelece o sujeito no contexto.

**Full Shot (FS):** o sujeito ocupa o enquadramento de cima a baixo, com pouco espaço acima da cabeça e abaixo dos pés. É o enquadramento que mostra o sujeito inteiro sem excesso de ambiente ao redor. Para a estátua, aparece inteira com base e topo.

**Medium Wide Shot (MWS):** corte na altura dos joelhos, aproximadamente. Mostra sujeito e ambiente em proporção equilibrada.

**Medium Shot (MS):** corte na altura da cintura. Mostra a parte superior do corpo com expressão e linguagem corporal.

**Medium Close-Up (MCU):** corte no nível do peito ou ombros. Usado frequentemente em fotografia de retrato e cinema para criar conexão com o sujeito sem invasão de espaço pessoal.

**Close-Up (CU):** rosto inteiro, ou o elemento principal em detalhe. Na estátua, o rosto ocupa a maior parte do enquadramento.

**Extreme Close-Up (ECU):** detalhe extremo de um elemento específico: olhos, boca, mão, detalhe de textura. Para a estátua, um olho, o nariz, um detalhe da base.
## O erro do Cowboy Shot

"Cowboy shot" é um termo de enquadramento que significa corte na altura do coldre, aproximadamente no meio da coxa. O nome vem dos filmes de western, onde esse enquadramento mostrava o personagem e sua arma ao mesmo tempo.

O problema é que "cowboy" tem peso como substantivo. A IA interpreta "cowboy shot" como fotografia de cowboy. O enquadramento de corte na coxa fica em segundo plano e o cowboy vem à frente. Esse é um caso claro de conflito entre o peso do substantivo e a intenção do termo técnico.

A solução é substituir "cowboy shot" por "medium thigh shot" ou "waist-to-thigh crop": descritores que não carregam substantivo conflitante mas descrevem o enquadramento com precisão.
## O paradoxo do close-up com tênis

Outro erro demonstrado na aula é o paradoxo do "close-up" combinado com um elemento físicamente grande no plano. Se o prompt descreve um close-up de uma pessoa, mas também menciona tênis, a IA pode gerar um close-up dos tênis em vez do rosto, porque "tênis" é um substantivo com peso que conflita com a intenção de "close-up de rosto".

A solução é especificar o sujeito do close-up explicitamente: "close-up of face" ou "extreme close-up of the subject's eyes". Sem especificar o que está sendo enquadrado, a IA pode escolher qualquer elemento da cena como foco do close-up.

Regra geral: quando você usa um enquadramento específico, especifique também qual elemento está sendo enquadrado. Não assuma que a IA vai escolher o mesmo elemento que você tem em mente.
## Ângulos de câmera

Os ângulos de câmera funcionam com alta consistência na IA porque são termos com padrões visuais muito definidos. A Overlens usa uma escala aproximada de ângulo em graus para illustrar o espectro:

**Worm's Eye View (ângulo de minhoca, aproximadamente -75° a -90°):** câmera posicionada muito abaixo do sujeito, olhando para cima. O sujeito parece imponente, dominante, grande. O ambiente acima do sujeito ocupa grande parte do enquadramento (céu, teto). Usado para transmitir poder, grandiosidade, ameaça.

**Low Angle (ângulo baixo, aproximadamente -30° a -45°):** câmera abaixo do nível dos olhos, olhando levemente para cima. O sujeito ganha autoridade e presença sem o exagero extremo do worm's eye.

**Eye Level (nível dos olhos, 0°):** câmera na altura dos olhos do sujeito. É o ângulo neutro, de igual para igual. Transmite naturalidade, proximidade, identificação. É o ângulo padrão em muitos contextos fotográficos.

**High Angle (ângulo alto, +30° a +45°):** câmera acima do nível dos olhos, olhando para baixo. O sujeito parece menor, vulnerável, subordinado. Também pode transmitir leveza ou inocência dependendo do contexto.

**Bird's Eye View (visão de pássaro, +75° a +80°):** câmera muito acima do sujeito, olhando diretamente para baixo. O sujeito perde a tridimensionalidade percebida, o ambiente ao redor ganha protagonismo. Usado em fotografia aérea, flat lay, composições geométricas.

**Top Down (topo para baixo, +90°):** câmera diretamente acima, enquadramento perfeitamente perpendicular ao sujeito. É o flat lay clássico. Elimina completamente a perspectiva vertical e cria uma composição bidimensional.
## Dica de posicionamento do ângulo no prompt

Um aprendizado empírico documentado na aula: colocar o parâmetro de ângulo no início do prompt aumenta a probabilidade de ele ser respeitado na geração. Isso tem relação com a forma como a IA processa o texto sequencialmente: elementos no início tendem a ter mais peso contextual porque definem o espaço da cena antes de outros elementos serem processados.

Exemplo: "Low angle shot, woman walking in city, golden hour, 85mm lens" tende a produzir resultado mais consistente no ângulo do que "woman walking in city, golden hour, 85mm lens, low angle shot".

Isso não é uma regra absoluta: varia por modelo e por versão. Mas é um heurístico útil para quando o ângulo não está sendo respeitado.
## Câmeras e lentes

A nomenclatura de câmeras e lentes é uma das ferramentas mais poderosas e menos usadas em prompts de imagem. Quando você especifica uma câmera e uma lente, está definindo um conjunto inteiro de características visuais que a IA reproduz com consistência porque esses padrões estão bem documentados no treinamento.

**Câmeras:**
- **Canon 5D Mark IV / Canon R5:** full frame de alta qualidade, resultado fotorrealista, cores neutras com tendência para quente
- **Fujifilm X-T4:** simulação de filmes clássicos, tons que lembram película, granulação específica
- **Nikon D850:** alta resolução, cores frias e neutras, preferida em fotografia de natureza e retrato
- **Hasselblad (médio formato):** qualidade de imagem extremamente alta, perspectiva específica do médio formato, associada a fotografia de moda high-end e publicidade
- **Polaroid:** estética instantânea, bordas características, paleta de cores específica, granulação alta
- **Film photography (35mm film):** granulação de película, paleta de cores específica por filme, aberrações de cor

**Lentes:**
- **35mm:** angular, amplo, perspectiva que inclui ambiente, levemente distorção nas bordas, natural para fotojornalismo e street photography
- **50mm:** próximo da perspectiva humana, sem distorção significativa, versátil
- **85mm:** levemente tele, perspectiva comprimida, perspectiva de retrato clássica, fundo bem separado com abertura larga
- **135mm:** tele médio, compressão de perspectiva mais acentuada, separação de fundo excelente
- **200mm ou mais:** tele longa, alta compressão de perspectiva, sujeito isolado com fundo completamente desfocado
- **24mm:** angular, amplo, útil para ambientes e arquitetura, leve distorção
- **Macro:** proporção de reprodução 1:1, foco extremamente próximo, detalhes invisíveis a olho nu

**Efeitos de lente:**
- **f/1.4 ou f/1.8:** abertura muito larga, profundidade de campo extremamente rasa, bokeh intenso
- **f/8 ou f/11:** abertura pequena, tudo em foco, sem bokeh significativo, preferido em fotografia de paisagem e produto
- **Bokeh:** o desfoque do fundo em imagens com abertura larga, com formato das bolinhas determinado pelo número de lâminas do diafragma
- **Lens flare:** vazamento de luz na lente, cria raios e círculos de luz, associado a imagens com fonte de luz direta
## Coloque em prática

Execute o laboratório de iluminação na sua ferramenta de geração preferida. Escolha um sujeito simples (objeto geométrico, esfera, busto, cubo) e escreva um prompt base fixo. Mantenha tudo idêntico e altere apenas o termo de iluminação a cada geração. Documente ao menos oito variações: studio light, golden hour, rembrandt, split, chiaroscuro, overcast, backlight e blue hour.

Depois, repita o processo com enquadramentos: use o mesmo sujeito e troque apenas o enquadramento (full shot, medium shot, close-up, extreme close-up, wide shot, bird's eye view). Compare os resultados e registre qual termo produziu o enquadramento mais próximo do esperado.

Essas duas séries de testes constroem um mapa prático do comportamento da ferramenta que você usa, que é mais útil do que qualquer lista teórica.
