# Roteiro e Storyboard: prática

**Tempo estimado de leitura:** 19 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar o pipeline completo de storyboard-para-vídeo usando 9 agentes em paralelo via API do Seedream
- Aplicar single-context prompting para manter consistência visual de personagem entre todos os frames de um storyboard
- Usar o Freepik Spaces como alternativa manual ao pipeline com agentes para geração frame a frame
- Distinguir image-to-video de text-to-video na prática e aplicar o primeiro com Kling para cada shot da sequência
- Executar pós-produção completa: decupagem, transições, remoção de áudio de máquina, color grading e exportação multicanal
- Aplicar o hack de geração em baixa resolução para economizar créditos e usar Topaz Video AI para upscale seletivo
- Usar inpainting para corrigir artefatos cirurgicamente sem regenerar o shot inteiro
- Estender shots curtos com o recurso "Estender" do Freepik editor ou Higgsfield
- Aplicar motion transfer para animar personagens gerados com IA a partir de referência de movimento humano

## Do storyboard ao vídeo: o pipeline completo em prática

Esta aula é a continuação prática da aula de teoria. O processo teórico de 8 etapas foi coberto, aqui você vê cada etapa executada, desde a geração paralela dos frames do storyboard até a exportação multicanal do produto final.

O ponto de partida é um storyboard visual já definido: cada cena tem enquadramento, ângulo de câmera, posição do personagem e intenção narrativa documentados. O que falta é transformar esse storyboard em imagens de alta qualidade e depois em vídeos.

## Geração paralela de frames com 9 agentes e API do Seedream

O primeiro desafio técnico é gerar todas as imagens do storyboard com consistência visual entre elas. A solução demonstrada usa 9 agentes rodando em paralelo, cada um gerando o frame de uma cena específica via API do Seedream.

O Seedream é o modelo de geração de imagens da ByteDance. A API está disponível gratuitamente nos primeiros 200 créditos após cadastro. Uma característica importante para esse pipeline: gerar em 4K tem o mesmo custo que gerar em resolução menor, o que torna viável usar resolução máxima para todos os frames de referência.

O que cada agente recebe:

- O prompt do frame correspondente, construído com as características visuais do personagem (do one-pager) mais a descrição específica da cena (enquadramento, ação, ambiente)
- A resolução de saída
- Os parâmetros de estilo (paleta, temperatura de luz, referência estética)

Os 9 agentes rodam simultaneamente. O tempo total de geração de 9 frames equivale ao tempo de geração de 1 frame. Quando todos terminam, o usuário revisa os resultados e identifica quais frames precisam de ajuste.

## Single-context prompting: consistência entre frames

A principal preocupação ao gerar múltiplos frames de um mesmo personagem é a variação visual, cada geração pode produzir uma versão ligeiramente diferente, quebrando a identidade ao longo do storyboard.

A solução é single-context prompting: todos os agentes recebem o mesmo bloco de descrição do personagem como contexto fixo. Esse bloco não muda de frame para frame, é o one-pager traduzido em linguagem de prompt, contendo todas as características visuais que não podem variar.

O que muda de frame para frame é apenas o que é específico daquela cena: a ação do personagem, o enquadramento da câmera, o ambiente ao fundo, o estado emocional.

O que permanece fixo em todos os frames: a aparência física do personagem (cor da pele, olhos, estrutura do rosto, cabelo), a paleta de cores associada ao personagem, os elementos visuais distintivos (marcas, texturas, roupa), o estilo geral de iluminação do universo.

Esse contexto fixo é a implementação técnica do conceito de identidade da aula anterior: você documenta o que não muda e garante que nenhuma geração o modifique.

## Nano Banana para construção de prompts de personagem

A aula demonstra o uso do Nano Banana como ferramenta de apoio para criar prompts detalhados de personagem. O Nano Banana é uma ferramenta focada especificamente em prompts para geração de imagem, você fornece as características do personagem e ela estrutura um prompt otimizado para os modelos de imagem.

O output do Nano Banana é então ajustado manualmente para incluir as especificidades do frame (enquadramento, ação, ambiente) e usado como entrada para os agentes. Isso combina a capacidade de estruturação do Nano Banana com as decisões criativas específicas de cada cena.

## Freepik Spaces: o fluxo manual como alternativa aos agentes

Para quem ainda não trabalha com agentes e APIs, a aula demonstra o mesmo pipeline executado manualmente no Freepik Spaces.

O Freepik Spaces é um ambiente de trabalho dentro do Freepik que permite organizar projetos de geração de imagem e manter contexto entre gerações. O fluxo manual funciona assim:

**Passo 1:** você cria um Space para o projeto e sobe o storyboard como referência visual.

**Passo 2:** para cada frame do storyboard, você extrai o prompt descrevendo o enquadramento e a ação, adiciona o contexto fixo do personagem (as características que não mudam) e gera o frame individualmente.

**Passo 3:** compara o resultado com o frame do storyboard de referência, o enquadramento corresponde? O personagem está correto? O ambiente é coerente?

**Passo 4:** ajusta e regera até que o frame esteja aprovado. Avança para o próximo.

A diferença em relação ao pipeline com agentes não é no resultado final, é no tempo. O fluxo manual é sequencial: um frame de cada vez. O fluxo com agentes é paralelo: todos os frames ao mesmo tempo. Para um storyboard de 9 cenas, a diferença de tempo pode ser de horas.

Para começar, o fluxo manual é suficiente. À medida que o volume de produção aumenta, a migração para agentes se justifica pelo ganho de tempo.

## Image-to-video com Kling: da imagem aprovada ao shot animado

Com os frames do storyboard aprovados, cada imagem se torna o first frame de um shot de vídeo. A demonstração usa o Kling para a etapa de image-to-video.

O processo no Kling:

**Passo 1:** você seleciona a modalidade image-to-video (não text-to-video) e carrega a imagem aprovada como first frame.

**Passo 2:** adiciona o prompt de movimento, o que acontece durante o shot, como a câmera se move, qual é a ação do personagem.

**Passo 3:** define a duração do shot (5 ou 10 segundos, dependendo da necessidade narrativa da cena).

**Passo 4:** gera e revisa. Se o movimento não está correto, ajusta o prompt de movimento e regera somente esse shot, o first frame permanece o mesmo.

A comparação demonstrada na aula entre image-to-video e text-to-video no Kling com o mesmo personagem mostra a diferença: o text-to-video produz um personagem que se parece com o descrito no prompt, mas com variações inevitáveis de aparência. O image-to-video anima literalmente aquela imagem específica, o personagem é visualmente o mesmo da imagem de referência, sem variação.

## O hack de baixa resolução: economize créditos, faça upscale só do aprovado

Gerar todos os shots em resolução final (1080p ou 4K) antes de revisar é um desperdício de créditos, porque parte dos shots vai ser descartada ou refeita após a revisão.

O hack demonstrado inverte essa lógica:

**Passo 1:** gere todos os shots em resolução baixa (720p ou até 480p para validação de movimento). O custo por shot é significativamente menor.

**Passo 2:** revise todos os shots na resolução baixa. Identifique quais estão aprovados, quais precisam de ajuste, quais vão ser descartados.

**Passo 3:** faça upscale apenas dos shots aprovados usando Topaz Video AI.

O Topaz Video AI é o software de referência para upscale de vídeo com IA. Ele aumenta a resolução mantendo a qualidade visual e pode ser rodado localmente. Para produções com muitos shots, um agente pode rodar o Topaz em batch, você entrega uma pasta com todos os shots aprovados e o agente processa todos em sequência sem intervenção manual.

O ganho de eficiência é significativo em produções longas: em vez de gastar créditos gerando 20 shots em 4K para descobrir que 8 precisam ser refeitos, você gasta o mínimo em todos, refaz apenas os necessários, e só então investe no upscale dos que ficam.

## Inpainting: correção cirúrgica de artefatos

Mesmo com negative prompt e revisão cuidadosa, artefatos aparecem. Inpainting é a técnica de corrigir apenas a área problemática de um frame sem regenerar o shot inteiro.

O processo básico de inpainting:

**Passo 1:** identifique o frame problemático e o trecho exato do vídeo onde o artefato aparece (por exemplo, o frame 47 de um shot de 120 frames tem uma distorção na mão do personagem).

**Passo 2:** exporte esse frame específico como imagem.

**Passo 3:** use uma ferramenta de inpainting, Runway, Adobe Firefly, para selecionar a área problemática com uma máscara e instruir a IA a regenerar apenas essa área com consistência com o resto do frame.

**Passo 4:** reexporte o frame corrigido e o insira de volta no vídeo, substituindo o frame problemático.

Para artefatos que aparecem em múltiplos frames consecutivos (como uma mão distorcida que persiste por 3 segundos), pode ser mais eficiente regenerar o shot do que fazer inpainting frame a frame. A decisão depende do custo de regeneração versus o custo de tempo do inpainting manual.

Ferramentas mencionadas:
- **Runway:** tem inpainting integrado com suporte a máscaras e instruções em texto
- **Adobe Firefly:** integrado ao Photoshop, permite inpainting com controle preciso de área e prompt

## Extensão de shots: quando o vídeo gerado é curto demais

Muitos modelos de vídeo geram clips de 5 a 10 segundos. Às vezes a narrativa exige um shot mais longo. A extensão de vídeo resolve isso sem regenerar o shot do zero.

O recurso "Estender" do editor do Freepik pega o último frame de um vídeo existente e gera novos segundos de continuação a partir dali. O resultado é um vídeo mais longo que mantém a continuidade visual do original porque parte do estado visual final do clip anterior.

A mesma funcionalidade existe no Higgsfield, outra ferramenta especializada em extensão de vídeo com IA. A escolha entre Freepik e Higgsfield depende de qual produz resultado mais consistente para o tipo de shot específico que você está estendendo.

Uso prático: você gerou um shot de 8 segundos de uma personagem andando por um corredor. A montagem exige 14 segundos. Em vez de regenerar pedindo 14 segundos (que pode produzir resultado diferente), você estende o shot de 8 para 14, mantendo a continuidade de movimento e ambiente.

## Motion transfer: animar com movimento humano

Motion transfer, também chamado de retexturização de movimento, é uma técnica que permite usar movimento humano real como referência para animar personagens gerados com IA.

O processo:

**Passo 1:** grave a si mesmo ou a um ator executando o movimento desejado. Não precisa de câmera profissional, câmera de celular funciona. A gravação captura o ritmo, a velocidade e a qualidade do movimento real.

**Passo 2:** use uma ferramenta de motion transfer para sobrepor o personagem gerado com IA sobre o movimento capturado. A ferramenta retexturiza o vídeo original com a aparência do personagem, mantendo a mecânica do movimento.

**Passo 3:** revise o resultado. A qualidade do motion transfer depende da clareza do movimento na gravação original e da consistência do personagem com a escala e proporções da pessoa filmada.

Vantagens do motion transfer:
- Movimentos humanos são naturais e orgânicos, a IA raramente consegue reproduzir a mesma naturalidade ao gerar movimento do zero
- Para cenas com movimentos específicos (dança, luta, gesto característico), o motion transfer é muito mais eficiente do que tentar descrever o movimento em prompt
- O processo é rápido: gravar 30 segundos e transferir é mais rápido do que gerar e regenerar até conseguir o movimento certo

Limitação: o motion transfer funciona melhor quando as proporções do personagem são similares às da pessoa filmada. Personagens com proporções muito diferentes (muito altos, membros exageradamente longos) podem apresentar distorções.

## Pós-produção completa: da montagem à distribuição

A aula demonstra o pipeline completo de pós-produção após todos os shots terem sido gerados, revisados e aprovados.

### Decupagem

Antes de montar, você revisa cada shot e identifica o trecho utilizável. Em um shot de 8 segundos gerado com IA, é comum que:

- Os primeiros 1-2 segundos tenham o movimento ainda se iniciando (o personagem "acorda" no movimento)
- Os últimos 1-2 segundos tenham o movimento desacelerando de forma estranha ou artefatos aparecendo no fim da animação

O trecho utilizável é geralmente o miolo do shot, os segundos centrais onde o movimento está fluído e o personagem está consistente. A decupagem marca os pontos de entrada e saída de cada shot antes da montagem.

### Transições

Para vídeos com IA gerada, transições simples funcionam melhor. As razões:

- Corte direto: funciona bem quando os dois shots têm continuidade visual forte (mesmo ambiente, mesma paleta, personagem em posição coerente)
- Fade: funciona para separar cenas com mudança de ambiente ou tempo narrativo
- Cross dissolve: funciona para transições mais suaves entre shots do mesmo personagem

Transições elaboradas (wipes, zooms dramáticos, efeitos de glitch) chamam atenção para a junção e revelam que os shots foram gerados separadamente. Em produções que buscam imersão narrativa, é contraproducente.

### Remoção de áudio de máquina

Modelos de geração de vídeo frequentemente adicionam ruído ambiente inconsistente ou sons de máquina nos clips gerados. Antes de adicionar trilha sonora, remova todo o áudio original dos shots gerados. Não há informação útil nele, só ruído que vai competir com a música ou narração.

### Color grading

O color grading é o processo de ajustar a paleta de cores de todos os shots para criar coerência visual e reforçar a atmosfera narrativa.

Os parâmetros básicos ajustados nessa ordem:

1. **Contraste:** define a relação entre as áreas mais escuras e mais claras do frame. Contraste alto dá uma estética mais dramática e cinemática; contraste baixo dá uma estética mais suave e documental.

2. **Saturação:** define a intensidade das cores. Saturação alta cria impacto visual; saturação baixa aproxima do look descolorido de filmes mais sérios.

3. **Brilho:** o ajuste global de luminosidade. Cuidado para não superexpor (perder detalhes nas altas luzes) ou subexpor (perder detalhes nas sombras).

4. **LUTs e presets:** após os ajustes básicos, um LUT (Look Up Table) ou preset pode aplicar uma grade de cor específica que define o look estético do projeto. LUTs de filmes de sci-fi, por exemplo, tendem a ter ciano nas sombras e magenta nas altas luzes. A escolha do LUT deve ser consistente com a atmosfera do universo narrativo.

O objetivo do color grading não é fazer os shots ficarem bonitos individualmente, é fazer todos os shots parecerem que foram feitos no mesmo universo, com a mesma câmera, sob as mesmas condições de luz. Isso é o que diferencia uma compilação de clips de uma narrativa visual coerente.

### Exportação multicanal com agentes

Após o corte final aprovado, vem a exportação para diferentes plataformas. Cada plataforma tem especificações diferentes de proporção, resolução e duração:

- YouTube: 16:9, 1080p ou 4K, sem limite de duração definido para conteúdo do canal
- Instagram Reels: 9:16 (vertical), até 90 segundos
- TikTok: 9:16 (vertical), até 10 minutos
- LinkedIn: 16:9 ou 1:1, até 10 minutos

Fazer o reframe manual para cada plataforma é repetitivo e demorado. A solução com agentes: um agente recebe o vídeo final em 16:9 e exporta automaticamente versões para cada plataforma, fazendo o recorte vertical inteligente (mantendo o personagem ou o elemento principal no centro do frame vertical) e ajustando a resolução conforme necessário.

Isso transforma a distribuição multicanal de um processo que levaria horas em um processo automático que roda enquanto você trabalha em outra coisa.

## O que muda com agentes: execução versus julgamento

A aula termina com uma reflexão sobre o papel dos agentes em todo esse processo.

Agentes eliminam a execução repetitiva: gerar 9 frames em paralelo, fazer upscale em batch, exportar para múltiplos formatos, rodar QA de JSON, nomear e organizar arquivos de saída. Tudo isso é execução, tarefas que seguem regras e podem ser automatizadas.

O que agentes não eliminam é o julgamento criativo: decidir quais frames do storyboard realmente funcionam, avaliar se o color grading está correto para o tom da cena, escolher o ponto de corte certo dentro de um shot, julgar se a transição entre dois shots cria o ritmo narrativo desejado. Essas são decisões que requerem a perspectiva humana sobre o que a narrativa precisa comunicar.

O processo com agentes não simplifica o trabalho criativo, ele concentra o trabalho criativo. Você passa menos tempo em execução manual e mais tempo nas decisões que fazem a diferença na qualidade da narrativa.

## A recomendação final: Trilha Maestro

Para quem quer se aprofundar na parte de som, composição musical e design de áudio para as produções, a aula recomenda a Trilha Maestro, outra trilha da Overlens focada especificamente em produção musical e sonora com IA. A menção reconhece que áudio é uma dimensão inteira de produção que a Cínetica não cobre em profundidade, e que o som tem impacto enorme na percepção de qualidade do produto final.

## Coloque em prática

Monte um storyboard de 3 cenas para uma ideia sua. Use o one-pager do personagem como contexto fixo para todos os prompts e gere os 3 frames, manualmente no Freepik ou com agentes via API do Seedream.

Para cada frame aprovado, use image-to-video (Kling ou outro modelo disponível) com a imagem como first frame. Monte os 3 shots no CapCut, aplique color grading consistente entre eles e exporte.

O exercício revela algo importante: a diferença de qualidade entre uma sequência com contexto fixo e uma sequência gerada shot a shot sem referência. Faça as duas versões e compare.
