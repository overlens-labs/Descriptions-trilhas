# Estruturas avançadas de prompt

**Tempo estimado de leitura:** 16 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Aplicar a estrutura de 6 camadas como axioma global e explicar por que ela funciona matematicamente
- Identificar os movimentos de câmera disponíveis nas ferramentas e associar cada um ao efeito visual que produz
- Distinguir quando usar seeds para consistência de estética e quando usar image-to-video para consistência de personagem
- Executar o workflow de primeiro e último frame para gerar transições com controle máximo
- Aplicar negative prompt de forma cirúrgica: quando usar, onde usar e quais termos são mais eficazes
- Estruturar prompts em camadas de forma que a IA gere o prompt final a partir das suas anotações brutas

## O axioma global da estrutura de 6 camadas

A ordem câmera e movimento, sujeito e atributos, ação, ambiente e contexto, luz e atmosfera, estilo de referência, no momento em que esta aula foi gravada, é um axioma global. Um axioma global é uma regra adotada no mundo inteiro por pessoas que estão obtendo resultados relevantes com IA em produções de alto nível, não apenas criadores independentes, mas pessoas fazendo grandes filmes e usando IA em produções cinematográficas reais.

Não é uma sugestão pessoal de Ruan. As próprias empresas que desenvolvem as ferramentas sugerem estruturas que seguem essa mesma direção. Isso significa que os modelos foram treinados e otimizados para interpretar inputs nessa ordem, e quando você respeita essa hierarquia, você está trabalhando a favor do modelo, não contra ele.

## Camada 1: câmera e movimento

**Por que câmera vem primeiro, sempre.** Quando você define o tipo de plano e o movimento de câmera no início absoluto do prompt, você está estabelecendo o que se chama de malha geométrica espacial. A malha geométrica espacial é a estrutura que define perspectiva e fluxo óptico. Fluxo óptico é o resultado de combinar a dimensão espacial (composição do frame) com a dimensão temporal (como essa composição muda ao longo do tempo). Quando a câmera se move, a composição vai mudando, e essa mudança precisa manter harmonia, o personagem precisa permanecer ancorado em uma parte da composição, ou se revelar, ou sair de cena. Tudo isso é calculado a partir do enquadramento inicial.

**Termos que o Runway mostra como presets de câmera:**

Pan left / pan right: panorâmica horizontal para esquerda ou direita. A câmera gira lateralmente sem se deslocar fisicamente.

Handheld shake: câmera na mão, sem gimbal ou estabilização. Cria sensação casual, documental, de presença real.

Tracking: câmera rastreia e acompanha o sujeito em movimento. Diferente de follow, que fica atrás do sujeito como um cameraman, tracking faz um acompanhamento mais preciso e frontal.

Push (zoom in): câmera se aproxima do sujeito, semelhante a dolly in mas sem o deslocamento físico com trilho.

Pull back: câmera recua, criando sensação vertiginosa de profundidade, diferente de zoom out, que apenas alarga o campo de visão sem criar essa distorção de perspectiva.

Crash zoom: zoom dramático e rápido, usado para impacto narrativo.

Orbit / Product Orbit: câmera orbita o sujeito em 360 graus. Alto risco de alucinação porque o modelo precisa imaginar as partes do objeto que ele nunca viu, o verso de um produto, por exemplo. Quando a IA precisa imaginar, ela frequentemente inventa, e objetos somem ou distorcem durante o movimento.

Follow: câmera acompanha o sujeito por trás, como um cameraman seguindo.

Flight through: câmera voa através de um espaço ou ambiente.

Rise / ascendente: câmera sobe verticalmente.

Rotation: câmera gira ao redor do próprio eixo.

Minimal camera / static tripod shot: câmera completamente parada. Baixíssimo risco de alucinação, mais fácil de controlar.

**A diferença entre dolly e dolly zoom.** Uma tomada dolly move fisicamente a câmera em direção ao objeto usando um trilho. Uma tomada dolly zoom combina esse movimento de câmera com zoom simultâneo, criando uma perspectiva distorcida vertiginosa, é o efeito famoso de "Tubarão" e "Vertigo". São dois movimentos diferentes com resultados visuais bem distintos, e a IA responde de forma diferente a cada um.

**Risco de alucinação por movimento.** Alguns movimentos têm risco baixo (static, pan, tilt) porque a IA nunca precisa imaginar informação que não existe na imagem de referência. Outros têm risco alto (orbit, complex tracking em ambientes densos) porque o modelo precisa inferir partes do objeto ou ambiente que não são visíveis. Quanto mais a IA precisa inventar, mais provável é que o resultado tenha artefatos.

## Camada 2: sujeito e atributos

A recomendação mais enfática desta aula é: gere a imagem de referência primeiro e use image-to-video. Isso dá muito mais controle do que tentar descrever o sujeito em texto.

Quando você está em text-to-video sem referência, seja o mais específico possível nos atributos físicos. Não use termos vagos como "bonita" ou "jovem", descreva o que você vê na sua cabeça: cabelo, cor, corte, roupa, acessórios, postura, etnia descrita visualmente. Cada atributo que você deixa vago é uma decisão que a IA vai tomar sozinha com base na estatística do dataset de treinamento.

## Camada 3: ação

**Regra do 1, uma ação por clipe.** O princípio da ação única estipula que múltiplos verbos dinâmicos em um único prompt geram colapso de coerência física. A IA calcula a cinemática das partes do corpo e dos objetos para cada ação, e quando há várias ações simultâneas, esses cálculos entram em conflito.

A solução não é simplificar a narrativa, é decompor em clipes. Uma cena de luta que você quer mostrar em 15 segundos pode ser feita com cinco clipes de 3 segundos: jab de esquerda, gancho de direita, personagem recuando, queda, close no rosto. Cada clipe resolve uma ação. Na edição você monta a sequência e tem a cena completa.

## Camada 4: ambiente e contexto

Detalhar o ambiente ajuda a ter mais riqueza visual na cena, mas existe um limite. Se você vai fazer text-to-video com muitos detalhes de ambiente, o prompt fica grande e a chance de alucinação aumenta. A regra prática: se você tem muitos detalhes de ambiente que quer preservar, gere a imagem de referência com todos esses detalhes, e depois gere o vídeo a partir da imagem. O texto serve para descrever movimento e ação, a imagem serve para descrever composição e ambiente.

## Camada 5: luz e atmosfera

Luz pode ser trabalhada junto com movimento de forma que não é possível em fotografia estática. Em vídeo, você pode descrever como a luz muda durante o clipe: "raios de luz volumétricos que atravessam o arco do templo ao amanhecer, névoa captando a luz enquanto a câmera avança". Isso cria uma cena muito mais viva do que qualquer descrição de luz estática.

Especificar temperatura em Kelvin ancora a IA em um range de cor preciso. Os modelos foram treinados com esse vocabulário técnico e respondem a ele com muito mais consistência do que a descrições qualitativas como "luz quente" ou "luz fria".

## Camada 6: estilo e referência

O estilo pode ser orientado para a estética da imagem (fotorrealista, granulação de 35mm, anamórfico) ou para a estética de um diretor ou fotógrafo específico. Ruan prefere ir além do nome: usar o Gemini para pesquisar a técnica cinematográfica daquele diretor, extrair os termos específicos, e colocar esses termos no prompt. Denis Villeneuve, por exemplo, usa escala monumental, ritmo contemplativo, narrativa visual, planos longos e lentes entre 24mm e 70mm. Esses termos descrevem a técnica com precisão muito maior do que apenas colocar "dirigido por Denis Villeneuve".

**Como escrever o prompt em camadas.** Ruan usa uma notação estilo markdown: maiúsculas para separar seções, barras, hashtags, tags. Isso ajuda a estruturar antes de gerar. Depois, você pode pegar essa estrutura bruta e jogar em um LLM para formatar e enriquecer. O processo é: você anota as camadas, a IA gera o prompt final já formatado para a ferramenta de vídeo. Você não precisa memorizar a sintaxe técnica toda vez.

## Consistência de personagem: três abordagens

**Ancoragem de identidade por texto.** Se você vai fazer text-to-video em vários clipes com o mesmo personagem, repita os atributos mais marcantes em todos os prompts. Cabelo branco, óculos de aro fino, jaqueta verde, esses identificadores invariáveis precisam aparecer toda vez que você mencionar o sujeito. A IA vai tentar manter esses atributos entre os clipes, mas sem referência visual a consistência ainda é limitada.

**Image-to-video como padrão.** Gerar a imagem de referência do personagem e usá-la como base para todos os clipes é a prática mais eficaz e mais usada hoje. Quando a IA tem a imagem como ponto de partida, ela precisa fazer muito menos suposições sobre como o personagem parece, e a consistência melhora dramaticamente.

**Seeds.** Sementes são códigos que ancoram um resultado específico dentro do processo de geração. Se você gerou um resultado que ficou exatamente como queria, você pode pegar a seed daquele resultado e usá-la para gerar variações que mantêm a mesma estética ou o mesmo estilo visual. É o mesmo princípio do Minecraft: a seed é o código que reproduz o mesmo mundo. No Kling, no Midjourney e no Hailuo você pode fixar seeds depois de encontrar um resultado satisfatório. O Freepik e o Higgsfield costumam remover as seeds da interface nas atualizações.

**Quando usar seed.** A seed é uma ferramenta de refinamento final, não de início. Primeiro você itera com prompts até chegar num resultado que satisfaz. Depois, quando você quer gerar variações mantendo a mesma estética ou o mesmo personagem, aí você fixa a seed daquele resultado específico.

## Workflow de primeiro e último frame

O fluxo de trabalho de primeiro e último frame (First and Last Frame Workflow) é o que mais traz consistência e qualidade de output entre todos os métodos disponíveis. Você define a imagem de abertura do clipe e a imagem de fechamento do clipe. A IA gera a transição entre as duas.

Isso é especialmente poderoso quando você quer controlar exatamente onde a cena começa e onde ela termina, porque você tem controle visual sobre ambos os extremos. A IA só precisa resolver o que acontece no meio, e o "meio" é a parte que ela gerencia melhor.

Todas as ferramentas principais suportam esse workflow. No Freepik, você sobe imagem inicial e imagem final no painel de referências. No Higgsfield, também. No Runway, você vai em Animate Keyframes, First Frame, Last Frame. No Kling, você acessa em Generate, Add Start, End Frames. No AI Studio do Google, você sobe duas imagens e especifica no prompt qual é a inicial e qual é a final.

Cuidado com o AI Studio especificamente: se você jogar muitas imagens sem especificar claramente o papel de cada uma, o resultado pode ser uma aberração visual. Seja preciso sobre o que cada imagem representa.

## Negative prompt: quando e como usar

**Regra principal: prefira afirmações.** O caminho mais eficiente é descrever o que você quer, não o que você não quer. Substantivos e adjetivos têm muito mais peso algorítmico do que negativas. Se você escreve "sem movimento excessivo", a palavra "movimento" vai ter peso de substantivo no prompt. Use o campo de negative prompt separado, quando a ferramenta disponibilizar.

**Nem toda ferramenta tem negative prompt.** O Runway removeu completamente. O Kling tinha e parece que também removeu em versões mais recentes. O Freepik tem, aparece um ícone de sinal negativo no painel de prompt. O Higgsfield não tem. O uso diminuiu nas interfaces porque a recomendação geral é trabalhar com afirmações precisas, e isso é um sinal de que a prática mais correta é afirmativa.

**Quando usar negative prompt.** Faça o teste primeiro sem o negative prompt. Se o resultado vier bom, não precisa. Se o resultado vier com artefatos específicos e repetidos, mãos distorcidas, olhos assimétricos, CGI quando você queria realismo, movimentos mecânicos, aí você entra com o negative prompt cirurgicamente.

**O que colocar no negative prompt.**

Para anatomia: mutated hands, extra fingers, asymmetric eyes, deformed face.

Para prevenção de drift de estética: CGI, 3D render, cartoon, anime, coloque os estilos que você não quer.

Para estabilidade de movimento: dependendo do que você quer, coloque "camera shake" para ter mais estabilidade, ou "static" para ter mais movimento.

**Como montar o negative prompt sem saber os termos.** Suba a imagem de referência para o Gemini, Claude ou ChatGPT e peça: "analise esta imagem e identifique os termos que, se aparecessem em um vídeo gerado por IA, quebrariam a estética visual dela." A IA vai listar os elementos de contraste, você copia e cola no campo de negative prompt. Só faça isso se o resultado sem negative prompt já não estiver funcionando.

**Negative prompt em image-to-video.** Quando você usa uma imagem de referência com paleta soturna e melancólica, existe risco de o processo de animação introduzir luminosidade excessiva que quebra o tom. Nesse caso, coloque proativamente no negative prompt termos como "bright, sun-drenched, vibrant, cheerful lighting". Isso instrui a IA a manter a paleta original da imagem durante a animação.

## Exemplo de prompt completo em camadas

Ruan mostrou ao vivo a construção de um prompt completo para uma cena de guerreira num templo:

Câmera: plano geral estático, lente de 24mm, ângulo ao nível do chão do templo.

Personagem: guerreira de 35 anos, cabelos trançados prateados, cicatriz profunda na bochecha esquerda, armadura de bronze desgastada com fecho de esmeralda no ombro.

Ação: ajoelha-se lentamente no chão de pedra, coloca a mão direita espalmada sobre a pedra fria e úmida, cabeça baixa em silenciosa reverência.

Ambiente: pátio de um antigo templo de pedra ao amanhecer, pilares cobertos de musgo, névoa matinal chegando.

Luz: raios de luz volumétricos na hora dourada, 3.200 Kelvin, feixes de luz distintos através do arco do templo, névoa atmosférica profunda captando a luz.

Estilo: fotorrealista, granulação anamórfica de 35mm, gradação de cores cinematográfica, referência Ridley Scott.

O resultado gerado pelo Kling teve todos os elementos da cena, mas ficou com estética de cutscene de jogo, o que é esperado quando não se usa imagem de referência. Com referência visual, a qualidade do output melhora significativamente.

## Coloque em prática

Construa o prompt completo da cena que você quer criar usando as 6 camadas em ordem, num documento externo. Depois jogue esse rascunho numa IA de texto (Gemini, Claude ou ChatGPT) e peça para ela formatar como prompt cinematográfico para geração de vídeo. Compare o prompt que você escreveu com o que a IA gerou. Use o prompt da IA como base, ajuste o que não representou a sua intenção, e gere o vídeo. Na próxima iteração, altere apenas uma camada por vez.
