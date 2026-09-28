# Diferença entre gerar imagens e vídeos com IA

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar as cinco dimensões que separam a geração de imagens da geração de vídeos com IA
- Distinguir as principais falhas de cada modalidade e por que elas ocorrem
- Aplicar a técnica de image-to-video como padrão para aumentar a consistência e reduzir alucinações
- Reconhecer a regra de um vetor de câmera mais uma ação principal por clipe e por que ela existe
- Executar um teste ao vivo de image-to-video usando o Seedance 1.5 Pro diretamente no site da ByteDance

## A demonstração ao vivo que abre a aula

Ruan abre mostrando um vídeo gerado pela IA que exibe uma imagem fingindo ser estática, mas que se mexe levemente. Ele nota isso com humor: "Ela está mexendo um pouco, ela está fingindo que é uma imagem, mas ela é um vídeo. Muito bom." Esse pequeno detalhe serve para ilustrar que a linha entre imagem e vídeo, para a IA, não é a mesma que para o olho humano.

A partir daí, ele apresenta cinco dimensões que tornam a geração de vídeo fundamentalmente diferente da geração de imagem.

## As 5 dimensões que separam imagem de vídeo

### Dimensão temporal

Uma imagem existe em um único instante. Um vídeo existe no tempo. A IA precisa manter coerência não só no espaço visual, mas na sequência de momentos. Cada frame está relacionado ao anterior e ao próximo, e qualquer inconsistência nessa sequência é visualmente perceptível. Isso exige que o modelo raciocine em uma dimensão que simplesmente não existe na geração de imagens estáticas.

### Fluxo óptico

O modelo precisa calcular o fluxo de movimento entre quadros para garantir que objetos se desloquem de forma fisicamente plausível. Um personagem que levanta o braço precisa ter o braço em posições intermediárias coerentes entre os frames. Em imagens, esse cálculo não existe. A imagem está lá, pronta e final. No vídeo, o modelo precisa interpolar o movimento e decidir como cada elemento se comporta ao longo do tempo.

### Física simulada

Tecidos, líquidos, pele, cabelo e partículas precisam se comportar de acordo com padrões físicos aprendidos durante o treinamento do modelo. Quando um personagem corre, a roupa precisa se mover. Quando há vento, os elementos certos precisam reagir. Em imagens estáticas, a física é implícita: o pixel simplesmente fica onde está e ninguém questiona. No vídeo, a física é explícita e contínua, e qualquer falha aparece imediatamente como algo "errado" para o olho do espectador.

### Consistência de frames

Cada quadro do vídeo precisa ser compatível com o anterior e o próximo. Um rosto não pode mudar de estrutura entre frames. Um objeto não pode aparecer e desaparecer sem motivo. Um cenário não pode alterar sua geometria no meio do clipe. Em geração de imagem, cada resultado é independente. No vídeo, todos os frames fazem parte de um único objeto coeso, e a IA precisa manter essa coesão durante toda a duração do clipe.

### Custo computacional

Ruan oferece um cálculo simples para tornar esse ponto concreto: gerar uma imagem equivale a processar 1 frame. Gerar 4 segundos de vídeo a 24 FPS, que é o padrão cinema, significa processar 96 frames de forma coerente entre si. Isso é 96 vezes mais trabalho computacional do que gerar uma imagem, e ainda assim precisa ser feito de forma integrada, não como 96 imagens independentes. Ruan resume: "Imagem é 1x, vídeo é 98x."

## A regra prática: um vetor de câmera mais uma ação por clipe

A partir das cinco dimensões, Ruan apresenta a primeira regra prática que profissionais seguem ao trabalhar com geração de vídeo com IA no momento atual: cada clipe deve ter um único vetor de câmera, ou seja, um único movimento de câmera, e uma única ação principal.

Quando você tenta combinar vários movimentos de câmera ou várias ações simultâneas em um único clipe, a probabilidade de alucinação, de artefatos e de inconsistência sobe drasticamente. A IA ainda tem dificuldade de orquestrar complexidade dentro de um clipe. A solução é simplificar: planejar cenas simples, cortar para outro clipe quando precisar de outro movimento ou outra ação, e usar a edição para compor a complexidade a partir de clipes simples e limpos.

## Por que image-to-video é o padrão profissional

Ruan apresenta e demonstra ao vivo a técnica mais importante desta aula: usar uma imagem de referência como ponto de partida para a geração de vídeo, em vez de começar só com texto.

No fluxo text-to-video, o modelo precisa decidir sozinho como será o personagem, o cenário, a iluminação, a composição. Isso abre espaço para alucinações, para resultados genéricos e para inconsistências com o que você visualizava. No fluxo image-to-video, você fornece uma âncora visual. O modelo sabe como o personagem ou ambiente deve aparecer, e se limita a animá-lo. O resultado é mais consistente, mais controlado e mais próximo da intenção do criador.

Ruan demonstra isso ao vivo gerando um vídeo de um coala. Ele busca uma imagem de coala com licença Creative Commons para garantir que está dentro dos direitos autorais, baixa a imagem e a carrega no Seedance 1.5 Pro, acessado diretamente no site da ByteDance. O prompt que ele usa é simples: coala fugindo de um predador. Ele configura 5 segundos de duração, 4 variações e resolução 480p para visualização rápida.

## A demonstração ao vivo com o Seedance 1.5 Pro

Enquanto os vídeos geram, Ruan explica onde usar essa ferramenta. O Seedance 1.5 Pro é acessível diretamente no site da ByteDance, sem precisar comprar créditos em sites de terceiros. Para quem já assina o Freepik, há versões do Seedance disponíveis dentro do Freepik. Para quem usa o Runway, essa ferramenta também será coberta na aula de ferramentas.

Os quatro vídeos gerados chegam um a um e Ruan assiste ao vivo com o aluno. O primeiro mostra feature drift: no meio do vídeo, algo muda de forma estranha. Ruan aponta imediatamente: "Feature drift. Pegou agora? No meio do vídeo a gente viu." Outro vídeo gera um movimento muito calculado, artificialmente fluido, com cara de IA. Um terceiro entrega um resultado surpreendente: o vídeo inclui narração em áudio, como um documentário do National Geographic, com voz dizendo que o coala detectou a presença de um predador. Ruan reage com humor: "Fizemos um National Geographic aqui."

Um quarto vídeo mostra falhas na física: o coala anda no ar, em cima de superfícies invisíveis, saindo do tronco da árvore e continuando o movimento em um espaço que não existe. Ruan aponta: "Acontece, isso aqui são limitações da IA que tem como a gente driblar elas."

## As principais falhas de imagem e de vídeo

Ruan fecha com um resumo comparativo das falhas mais comuns em cada modalidade. Para imagens, os problemas mais frequentes são: mãos com dedos errados, texto gerado de forma incorreta e detalhes finos que a IA distorce. Para vídeos, os principais problemas são feature drift, que é quando a IA adiciona elementos que você não pediu ao longo do clipe, e artefatos de movimento, que são animações estranhas ou fisicamente implausíveis.

Saber identificar esses problemas antes de acontecerem é parte do processo de se tornar um bom diretor de IA de vídeo. A trilha vai apresentar técnicas para minimizar cada uma dessas falhas.

## Duração ideal dos clipes

Ruan apresenta a faixa de duração que funciona melhor na maioria dos modelos atuais: de 8 a 20 segundos. Abaixo de 8 segundos, o clipe pode cortar no meio de uma ação, deixando o movimento incompleto e forçando tentativas de expansão que raramente ficam perfeitas. Acima de 20 segundos, a maioria dos modelos nem oferece essa opção. E quando oferecem, a chance de alucinação e feature drift sobe junto com a duração.

## Coloque em prática

Escolha uma imagem com licença Creative Commons, acesse o Seedance 1.5 Pro diretamente no site da ByteDance e gere quatro variações de um vídeo curto de 4 a 5 segundos usando a imagem como referência. Depois compare os resultados e identifique em quais deles ocorreu feature drift ou falha na física. Anote o que aconteceu e o que você mudaria no prompt para tentar evitar esses problemas.
