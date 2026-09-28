# Edição de vídeos com IA

**Tempo estimado de leitura:** 14 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Aplicar QA automatizado com agentes para identificar inconsistências em JSONs de shot breakdown antes de gerar qualquer vídeo
- Gerar imagens de referência de alta qualidade via API do Seedream e usá-las como first frames para image-to-video
- Criar prompts avançados para personagens usando o GPT Photoshoot e adaptar o output para geração com IA
- Rodar agentes em paralelo para gerar múltiplos shots com first frame simultaneamente
- Executar o fluxo completo de edição em CapCut: importar shots, adicionar transições, inserir áudio e exportar
- Reconhecer quando usar CapCut, DaVinci Resolve, Premiere Pro ou Remotion conforme o nível da produção

## QA do JSON antes de gerar: identificando problemas antes que eles existam

A aula começa com uma demonstração prática de QA automatizado em um JSON de shot breakdown. O agente recebe o JSON completo de uma sequência e analisa a consistência entre todos os shots antes de qualquer geração de vídeo.

O que o agente encontrou na demonstração:

**Shot 1 vs. Shot 2, Salto de câmera injustificado:** o shot 1 está em close-up e o shot 2 está em extreme wide shot sem nenhuma transição ou mudança de ambiente que justifique o salto de plano. O agente sinaliza isso como uma quebra de continuidade e sugere inserir um shot intermediário ou ajustar o plano do shot 2 para médio shot.

**Shot 3, Postura contraditória:** o campo "subject" do shot 3 descreve o personagem "se levantando de uma posição sentada", mas nos shots anteriores o JSON nunca indicou que o personagem estava sentado. A IA pode interpretar isso de formas inconsistentes. O agente propõe corrigir o shot 2 para incluir a posição sentada como estado final, criando a continuidade que justifica o movimento do shot 3.

**Shot 4, Inconsistência de âncora visual:** o personagem tem "cabelo escuro, textura metálica nas maçãs do rosto" no shot 1, mas o shot 4 não menciona nenhuma dessas características no campo "subject". Sem a âncora explícita, a IA pode gerar o personagem com variações visuais. O agente adiciona as características ao shot 4 sem alterar nenhum outro campo.

**Shot 5, Temperatura de cor sem motivação:** o shot 4 tem iluminação com temperatura 3200K (quente, tom âmbar) e o shot 5 tem temperatura 6500K (fria, tom azulado) sem mudança de ambiente ou tempo narrativo. O agente aponta que a oscilação vai parecer erro de produção, não escolha estética, e sugere criar uma justificativa narrativa ou manter a temperatura consistente.

Após o QA, o agente entrega o JSON corrigido com todas as alterações marcadas, somente as chaves problemáticas foram modificadas, o restante permanece intacto. Esse é o valor do JSON estruturado: correções cirúrgicas sem reescrita total.

## Geração de imagens via API do Seedream (ByteDance)

O Seedream é o modelo de geração de imagens da ByteDance, mesma empresa do Seedance (modelo de vídeo) e do TikTok. A API está disponível separadamente e oferece os primeiros 200 créditos gratuitamente após cadastro.

O Seedream tem uma característica importante para produção em escala: gerar em resolução 4K tem o mesmo custo de créditos que gerar em resolução menor. Isso inverte a lógica habitual das plataformas de imagem, onde resolução mais alta significa custo mais alto.

Na demonstração, o agente recebe um prompt de personagem e gera a imagem de referência via API. O retorno vem como URL de imagem, que o agente então usa como first frame no passo seguinte de geração de vídeo. Tudo acontece sem que o usuário abra o navegador: o agente gerencia o fluxo completo de geração de imagem e passagem do resultado para o próximo estágio.

## O GPT Photoshoot para prompts avançados de personagem

Antes de gerar a imagem de referência, a aula demonstra o uso do GPT Photoshoot, um GPT personalizado focado em prompts para fotografia de produto e personagem com nível de detalhe profissional.

O processo é:

**Passo 1:** você descreve o personagem em linguagem natural para o GPT Photoshoot. Inclui aparência física, estado emocional, contexto da cena e intenção visual.

**Passo 2:** o GPT Photoshoot gera um prompt estruturado com vocabulário fotográfico preciso, tipo de lente, distância focal, abertura, profundidade de campo, temperatura de cor, direção da luz, textura de fundo.

**Passo 3:** você copia o prompt gerado e usa em qualquer ferramenta de geração de imagem, Midjourney, Seedream, Gemini Imagen.

O diferencial é o vocabulário fotográfico: "lente 85mm f/1.8, bokeh suave, luz Rembrandt lateral esquerda, temperatura 4200K, textura de fundo concreto granulado" produz resultados muito mais previsíveis do que "foto de personagem com fundo escuro e luz dramática". A especificidade dos parâmetros fotográficos reduz a variância entre gerações.

## First frame como âncora de consistência em image-to-video

O princípio central da aula é que image-to-video supera text-to-video em consistência de personagem e ambiente porque a IA tem uma referência visual concreta para ancorar a geração.

Em text-to-video, a IA interpreta o texto e imagina o personagem do zero em cada geração. Mesmo com o mesmo prompt, variações são inevitáveis porque não há referência visual fixa. O resultado é um personagem que muda sutilmente de aparência entre shots, cabelo ligeiramente diferente, proporções do rosto variando, expressão padrão mudando.

Em image-to-video com first frame, a imagem de referência define visualmente quem é o personagem. A IA parte dessa imagem específica e anima a partir dela. O personagem do vídeo é literalmente aquele personagem da imagem, não uma interpretação textual. A consistência entre shots aumenta dramaticamente.

O fluxo correto:

1. Gere a imagem de referência com alta qualidade (Seedream via API, Midjourney, Gemini Imagen)
2. Revise a imagem: o personagem está com as características certas? O ambiente é o correto? A pose é consistente com o que o shot exige?
3. Use essa imagem como first frame no modelo de vídeo escolhido (Kling, Hailuo, Runway)
4. Para cada shot diferente da sequência, gere um first frame correspondente ao estado inicial daquele shot

O último ponto é importante: o first frame não é apenas uma imagem genérica do personagem, é uma imagem do personagem na posição exata em que o shot começa. Se o shot começa com o personagem de costas, o first frame mostra o personagem de costas. Se começa com o personagem sentado, o first frame mostra o personagem sentado.

## Last frame para controlar o estado de saída

Além do first frame, alguns modelos aceitam last frame, uma imagem que define o estado visual no qual o shot deve terminar. Isso é especialmente útil para criar continuidade entre shots: o last frame do shot 3 se torna o first frame do shot 4, garantindo que o personagem e o ambiente passem do final de uma cena para o início da próxima sem variação visual.

Nem todas as ferramentas suportam last frame. Na demonstração, o Kling é mencionado como uma das ferramentas que oferece esse controle.

## Paralelização: gerando múltiplos shots ao mesmo tempo

Com o JSON estruturado e os first frames gerados para cada shot, o agente pode rodar a geração de todos os shots em paralelo, exatamente como demonstrado na aula de JSON. Cada shot recebe seu primeiro frame correspondente e seu JSON de parâmetros. Múltiplos agentes executam simultaneamente.

O resultado prático: uma sequência de 9 shots que demoraria horas em geração sequencial é concluída no tempo de 1 shot. O tempo salvo vai para revisão criativa e ajustes, que são o trabalho que realmente requer julgamento humano.

Na demonstração, o agente gera os shots, retorna as URLs dos vídeos e o usuário pode abrir cada um diretamente para revisão. Não há interface gráfica intermediária, o fluxo é completamente programático.

## Negative prompt na geração: corrija antes de editar

Artefatos visuais recorrentes, brilho excessivo em superfícies metálicas, movimentos mecânicos e não naturais, ruído de textura em áreas de cor sólida, distorção de mãos ou rostos, são muito mais fáceis de eliminar no momento da geração do que em pós-produção.

O negative prompt instrui o modelo do que não gerar. Exemplos práticos:

- "sem brilho excessivo, sem reflexo de lente" para personagens com superfícies metálicas
- "sem movimento mecânico, sem distorção de articulações" para personagens androides
- "sem deformação de mãos, sem dedos extras" para qualquer cena com mãos visíveis
- "sem ruído de textura, sem granulação" para ambientes com paredes lisas

A regra é simples: identifique o artefato que aparece consistentemente nas suas gerações e adicione sua negação no negative prompt. Resolver na geração é mais rápido do que resolver em pós-produção com inpainting ou regeação parcial.

## Edição em CapCut: o fluxo básico de montagem

A aula demonstra o fluxo completo de edição no CapCut Online, a versão de navegador, gratuita, adequada para testes e produções simples.

**Importação dos shots:** os vídeos gerados são importados para a timeline do CapCut. Cada shot ocupa um segmento separado na timeline, permitindo reordenar, cortar e ajustar duração individualmente.

**Decupagem:** antes de montar, você assiste cada shot completo e identifica o trecho utilizável. Em um shot de 8 segundos, pode ser que apenas os 5 segundos centrais sejam aproveitáveis, os primeiros segundos às vezes têm o movimento ainda se desenvolvendo, e os últimos podem ter artefatos no fim da animação. O CapCut permite cortar com precisão de quadro.

**Transições:** entre shots, o CapCut oferece transições automáticas. Para vídeos com IA gerada, transições simples (fade, cross dissolve) funcionam melhor do que transições com efeitos elaborados, que podem chamar atenção para a junção em vez de suavizá-la. A duração da transição também importa: transições muito longas criam ritmo lento, transições muito curtas podem parecer cortes secos não intencionais.

**Inserção de áudio:** o CapCut tem biblioteca de músicas licenciadas integrada. Para remoção de ruído de fundo nos vídeos gerados (às vezes os modelos adicionam ruído ambiente inconsistente), a recomendação é usar o recurso de remoção de ruído antes de adicionar trilha sonora.

**Exportação:** o CapCut exporta em diferentes resoluções. Para validação do corte antes de subir para produção final, exportar em 720p é suficiente e mais rápido. A exportação em qualidade máxima fica para a versão aprovada.

## Quando usar cada ferramenta de edição

**CapCut Online:** para testes, validação rápida do corte e produções simples. Gratuito, sem instalação, suficiente para a maioria dos casos de uso de geração com IA. Limitação: não tem recursos avançados de color grading ou integração com pipelines profissionais.

**DaVinci Resolve:** referência profissional para produções que exigem color grading avançado. Tem recursos de IA nativos para upscale, redução de ruído e estabilização. A versão gratuita é robusta o suficiente para a maioria das produções independentes. Curva de aprendizado mais alta que CapCut.

**Adobe Premiere Pro:** padrão da indústria para produções complexas com múltiplos colaboradores, integrações com After Effects e workflows de longa duração. Faz sentido para quem já tem familiaridade com o ecossistema Adobe ou trabalha em produções maiores.

**Remotion:** para quem quer criar o próprio software de edição programaticamente. Remotion permite escrever a lógica de edição em código (React/JavaScript) e gerar vídeos como output de código. Isso abre a possibilidade de automatizar completamente a edição, um agente gera os shots, outro monta a sequência com Remotion, sem intervenção manual. É o nível mais avançado da stack e faz sentido para quem tem background técnico e produção em escala.

## A lógica do pipeline completo

O pipeline que a aula demonstra integra todas as etapas:

1. JSON de shot breakdown gerado e revisado por agente de QA
2. First frames gerados via API do Seedream com prompts do GPT Photoshoot
3. Shots gerados em paralelo com os first frames como âncora
4. Shots importados no CapCut para decupagem e montagem
5. Transições, áudio e ajustes de ritmo aplicados
6. Exportação em resolução de validação

Cada etapa reduz variância: o QA do JSON reduz inconsistências antes de gerar; o first frame reduz variância visual do personagem; o negative prompt reduz artefatos na geração; a decupagem cuidadosa seleciona apenas os trechos mais sólidos de cada shot.

O resultado é um produto final com consistência muito maior do que o que seria possível em text-to-video direto sem estrutura.

## Recomendação sobre música

Uma observação prática da aula: evite usar músicas com letra em produções de vídeo com IA quando o vídeo vai ser publicado em plataformas. Além de questões de direitos autorais, músicas com letra competem com a narração ou com a atenção visual. Músicas instrumentais, ambient, eletrônica, orquestral, funcionam melhor como camada sonora para vídeos gerados com IA. O CapCut tem boa biblioteca de instrumentais filtráveis por mood e BPM.

## Coloque em prática

Selecione um shot que você já gerou com text-to-video. Gere uma imagem de referência do mesmo personagem e ambiente com Seedream ou Midjourney. Use essa imagem como first frame no mesmo modelo de vídeo. Compare os dois resultados lado a lado: onde a consistência visual melhorou? O que ainda varia mesmo com first frame?

Se quiser ir além: monte uma sequência de 3 shots com first frames diferentes, cada shot começa exatamente onde o anterior termina visualmente. Use o CapCut para montar e avalie a continuidade entre os shots.
