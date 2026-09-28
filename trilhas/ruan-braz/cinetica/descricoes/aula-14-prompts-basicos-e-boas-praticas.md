# Prompts básicos e boas práticas

**Tempo estimado de leitura:** 19 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o peso algorítmico de cada posição dentro de um prompt e usar isso a seu favor
- Aplicar o framework de 6 partes em ordem correta para gerar vídeos com mais controle e previsibilidade
- Distinguir quando usar text-to-video e quando usar image-to-video para cada tipo de objetivo
- Executar a técnica de isolamento de variáveis para refinar um prompt sem perder o que já está funcionando
- Reconhecer os erros mais comuns de imprecisão no prompt e aplicar a versão corrigida de cada um
- Estruturar um fluxo de trabalho de prompts com versionamento em documento externo

## A ordem das palavras importa

A posição de cada elemento dentro do prompt tem peso diferente. Modelos de difusão atribuem pesos algorítmicos exponencialmente maiores aos termos no início do texto. O meio do prompt é a região de menor influência. O final tem mais peso que o meio, mas menos que o início. E os parâmetros da ferramenta, resolução, aspect ratio, duração, modelo selecionado, têm peso ainda maior do que qualquer parte do texto.

Isso não é teoria abstrata. Significa que, na prática, a ordem em que você coloca os elementos determina o que a IA vai priorizar na hora de construir a cena. Se você começa pelo enquadramento da câmera, o modelo vai construir a geometria da cena com base nesse enquadramento antes de tentar posicionar qualquer sujeito ou ambiente. Se você começa pelo nome de um personagem e só depois fala do enquadramento, o modelo interpreta que o personagem é o elemento central e vai tomar decisões sobre composição a partir dessa hierarquia.

Um exemplo concreto: quando você coloca nos primeiros tokens do prompt "Wild Establishing Shot, 24mm Wide Angle", o modelo constrói o campo de visão e a geometria da cena antes de renderizar qualquer elemento. Esse enquadramento aberto já sinaliza que a cena vai ter muitos elementos e uma composição espacial ampla. Se depois você colocar "fundo branco", a IA ainda assim vai organizar a cena com a lógica do ângulo aberto, só que com menos elementos no cenário.

O erro mais comum de iniciantes é escrever o prompt na ordem que veio na cabeça, sem perceber que está criando incoerências. Alguém escreve "wide angle" e logo depois "macro fotografia", os dois são antagônicos. Wide angle é um ângulo muito aberto; macro é para capturar detalhes de muito perto. A IA vai tentar resolver isso com estatística, e o resultado geralmente não satisfaz nenhuma das duas intenções.

## Os 5 níveis de evolução do criador de IA

A pesquisa que embasou esta trilha analisou mais de 200 fontes globais de pessoas que usam IA em nível avançado. Ela identificou cinco níveis de maturidade na construção de prompts. Não se trata da estrutura do prompt em si, mas do nível de sofisticação de quem produz:

**Nível 1 - Ideia:** o criador novato opera com fragmentos conceituais vagos. "Uma mulher bonita." "Um cenário futurista." O resultado é genérico porque a IA precisa tomar todas as decisões sozinha.

**Nível 2 - Estrutura:** o profissional já reconhece que a direção da câmera no início absoluto do prompt atua como o alicerce matemático da cena. Ele constrói o prompt nas 6 partes, na ordem correta, e os resultados ficam muito mais previsíveis.

**Nível 3 - Controle:** uso de referências visuais como parte do prompt, negative prompts quando necessário, e conhecimento dos parâmetros da ferramenta.

**Nível 4 - Alavancagem:** combinação de image-to-video com referências de estilo, seeds de consistência e workflow com primeiro e último frame.

**Nível 5 - Pipeline:** integração de múltiplos modelos em fluxo automatizado, com agentes trabalhando em paralelo e controle paramétrico via API.

## A dimensão nova do vídeo: o tempo

A diferença fundamental entre um prompt de imagem e um prompt de vídeo é que agora você tem uma dimensão a mais para controlar: o tempo. A imagem é estática; o vídeo é uma imagem em movimento. Isso significa que o seu prompt agora precisa descrever dois tipos de movimento distintos:

O movimento da câmera, como a câmera se desloca, gira, aproxima ou afasta durante o clipe.

O movimento do sujeito, o que o personagem ou objeto faz dentro do frame durante esse mesmo tempo.

Esses dois movimentos precisam ser coerentes entre si. Se a câmera vai se aproximar (dolly in) e o personagem vai se afastar correndo, você precisa decidir qual dos dois vai dominar a composição e garantir que o prompt deixe isso claro. Se você não especificar, a IA decide sozinha, e a decisão dela pode não ser a que você queria.

## O prompt de vídeo como prompt multimídia

Quando você trabalha com geração de vídeo, o seu prompt não é mais apenas o texto que você escreve. É a combinação de:

O texto do prompt com a estrutura de 6 partes.

A imagem de referência que você sobe (first frame, last frame ou imagem de personagem).

O vídeo de referência que você sobe quando quer replicar um movimento ou estética.

As configurações da ferramenta: modelo escolhido, duração, resolução, aspect ratio, efeito sonoro ativado ou não.

Isso muda completamente a lógica de como você pensa o processo. Muitas das informações que você normalmente tentaria descrever em texto, enquadramento, iluminação, ângulo, estética, são muito mais eficientes quando entregues por uma imagem de referência. Uma imagem resolve em pixels o que levaria dez linhas de texto, e com muito mais precisão.

A regra prática é esta: quando você quer explorar e se surpreender, use text-to-video. Quando você quer ter controle e consistência, use image-to-video com a referência certa.

## O framework de 6 partes em detalhe

A estrutura de 6 partes é o padrão de facto para geração de vídeo com IA no momento em que esta aula foi gravada. Ela não foi inventada arbitrariamente, é a estrutura que aparece consistentemente nas recomendações das próprias empresas que criam os modelos, e é usada por quem está fazendo produções reais com IA no cinema.

**Parte 1: Câmera e movimento**

Vai no início absoluto do prompt, sem exceção. Define a malha geométrica espacial da cena, ou seja, a composição, a perspectiva e como os elementos vão se distribuir no frame ao longo do tempo.

Exemplos de termos que a IA reconhece com precisão: tripé estático (câmera parada, sem movimento), dolly in slow (câmera se aproximando devagar), dolly out (câmera se afastando), pan left / pan right (panorâmica horizontal para esquerda ou direita), tilt up / tilt down (câmera inclinando para cima ou para baixo), tracking shot (câmera acompanhando o sujeito), handheld shake (câmera na mão, sem estabilização, sensação casual), orbit shot (câmera orbitando em 360 graus ao redor do sujeito).

Você pode combinar o tipo de plano com o movimento de câmera logo no início. Exemplo: "Wide Shot, dolly in slow" já diz ao modelo que a cena começa aberta e a câmera vai se aproximar lentamente.

**Parte 2: Sujeito com atributos físicos específicos**

Descreva o sujeito com precisão visual. Se você vai usar uma imagem de referência, não precisa detalhar tanto, a imagem resolve. Se vai fazer text-to-video sem referência, seja específico: "mulher de 28 anos, jaqueta de couro vermelha, cabelo platinado curto". Quanto mais específico, mais controle você tem, mas mais variáveis a IA precisa gerenciar.

A recomendação prática é sempre gerar a imagem de referência do personagem primeiro e depois usar image-to-video. Isso reduz dramaticamente a inconsistência de personagem entre clipes.

**Parte 3: Ação única e precisa**

Uma ação por clipe. Esta é a regra do 1. Múltiplos verbos dinâmicos em um único prompt geram o que se chama de colapso de coerência física: a IA tenta calcular a cinemática de todas as ações ao mesmo tempo e o resultado fica fisicamente inconsistente.

Se a cena for complexa, decomponha. Em vez de "ela corre, olha para trás, tropeça e cai", você tem quatro clipes: ela corre, ela olha para trás, ela tropeça, ela cai. Cada clipe tem uma ação. Você depois edita em sequência e tem a cena completa.

A ação também influencia o enquadramento. Se o personagem está "olhando para o chão", a IA vai interpretar que precisa mostrar o chão. Se o enquadramento for wide shot, tem espaço para isso. Se for extreme close-up no rosto, você provavelmente quer escrever "olhando para baixo" em vez de "olhando para o chão", porque "chão" como substantivo vai ter peso no prompt e a IA vai tentar representá-lo mesmo que o enquadramento não comporte.

**Parte 4: Ambiente e contexto**

Descreva o lugar com os detalhes que importam para a composição. "Rua de Tóquio à noite, chuva fina, reflexos de neon no asfalto" já carrega muita informação para a IA. Cada detalhe que você coloca aqui é algo que a IA vai tentar representar visualmente.

O cuidado aqui é não colocar tantos detalhes que o prompt fique confuso. Se você quer preservar muitos detalhes de ambiente, gere a imagem de referência primeiro com esses detalhes todos, e depois gere o vídeo a partir dela. O texto não é o melhor canal para transmitir ambiente complexo, a imagem faz isso muito melhor.

**Parte 5: Iluminação com temperatura e estilo de referência**

A iluminação define o clima emocional da cena. Seja específico: "luz neon azul e rosa, 8.000 Kelvin, frio, sombras profundas" é muito mais útil do que "boa iluminação". Quando você coloca a temperatura em Kelvin, você ancora a IA num range de cor muito preciso que ela foi treinada a reconhecer.

Coerência é fundamental aqui. Se o ambiente é "rua de Tóquio à noite com reflexos de neon", colocar "dia ensolarado, 5.600 Kelvin" como iluminação cria uma contradição que aumenta a chance de alucinação. A IA vai tentar resolver o conflito de alguma forma, e o resultado vai ser imprevisível.

**Parte 6: Estilo e referência**

Aqui você ancora a estética. "Estética neo-noir, grão de 35mm, inspirado em Wong Kar-wai" já carrega uma direção visual específica. Nomes de diretores e fotógrafos funcionam como referência, mas Ruan prefere ir além: em vez de só citar o nome, ele pesquisa a técnica específica daquele diretor usando o Gemini, extrai os termos técnicos da cinematografia dele, e coloca esses termos no prompt. Isso dá resultados mais precisos do que apenas citar o nome.

Exemplo prático: para uma cena no estilo de Denis Villeneuve, você pergunta ao Gemini quais são as técnicas de cinematografia usadas por ele. O modelo vai trazer termos como "extreme wide shot, escala monumental, ritmo contemplativo, narrativa visual, planos longos, profundidade de campo ampla, distâncias focais de 14mm a 70mm". Você usa esses termos diretamente no prompt, sem precisar citar o nome do diretor.

## Ferramentas para gerar e testar

A aula mostrou quatro plataformas principais para praticar a estrutura de prompt:

**Freepik:** hub de múltiplos modelos de IA com interface de referências bem estruturada. Permite subir imagem inicial, imagem final, vídeo de referência e áudio. O painel de referências fica visível e você pode adicionar quantas quiser, mas cuidado: muita referência pode criar confusão para o modelo.

**Runway:** hub com interface didática que mostra presets de câmera, movimento e ação. É a ferramenta mais fácil para visualizar o que cada termo de movimento de câmera faz. Tem presets como pan left, pan right, handheld shake, tracking, push, pull back, crash zoom, entre outros. Altamente recomendado para quem está aprendendo os movimentos de câmera pela primeira vez.

**Higgsfield:** hub alternativo, gratuito em alguns momentos, com modelos competitivos.

**Kling / Cling (via Freepik ou direto):** considerado o melhor em qualidade de output visual no momento da gravação. No acesso direto tem mais controle, incluindo seed e configurações de first frame / last frame.

**VEL do Google (via AI Studio ou Gemini Pro):** bom para geração com áudio nativo, foi um dos primeiros modelos a integrar áudio ao vídeo de forma nativa.

## Fluxo de trabalho com versionamento de prompt

Nunca escreva o prompt diretamente no campo de texto da ferramenta. A ferramenta pode bugaar e você perde o prompt. O processo correto é:

Abra um Google Docs ou arquivo Markdown antes de qualquer coisa.

Escreva o prompt em português primeiro, a lógica é mais fácil de organizar na língua que você pensa.

Traduza para o inglês. Prompts em inglês têm aderência melhor na maioria dos modelos porque o dataset de treinamento é predominantemente em inglês.

Salve as duas versões no documento.

Quando quiser refinar, não apague o prompt anterior. Marque o que não funcionou (Ruan usa vermelho), escreva a versão nova (usa azul), e guarda o registro da mudança. Assim você sempre sabe o que mudou e pode voltar a uma versão anterior se algo que estava funcionando parar de funcionar.

Altere apenas uma variável por vez. Se a iluminação ficou plana, ajuste só o bloco de luz. Se o personagem distorceu, adicione mais atributos físicos. Nunca reconstrua o prompt inteiro de uma vez, você perde a referência do que já estava funcionando.

## Erros de vocabulário: vago versus específico

A habilidade de comunicação é o que diferencia resultados mediocres de resultados bons. Quando o vídeo não chega no resultado que você quer, o problema provável é que você não descreveu com precisão suficiente. A IA precisou tomar decisões sozinha, e as decisões dela não foram as suas.

**Erro: "uma mulher bonita"**
O que é bonita para a IA é o cruzamento estatístico de tudo que ela foi treinada a associar com "bonita". Isso cria estereótipos e não corresponde à sua visão. Melhor: "uma mulher de 30 anos, cabelo castanho curto, usando um casaco azul marinho com botões dourados". Ou, ainda melhor: use uma imagem de referência do personagem.

**Erro: "câmera cinematográfica"**
Existem dezenas de tipos de câmeras cinematográficas, com lentes completamente diferentes, gerando estéticas completamente diferentes. Isso não diz nada de útil. Melhor: "tripé estático, lente cinematográfica de 50mm, perspectiva na altura do olho".

**Erro: "iluminação boa"**
O que é boa para você pode ser sombria e dramática. Para outra pessoa é luz suave de estúdio. Melhor: "tungstênio, 3.200 Kelvin, luz lateral, triângulo de Rembrandt, sombras definidas". Aí você está descrevendo exatamente como a luz vai desenhar a cena.

**Erro: "ele caminha e olha ao redor"**
Para onde ele olha? Em qual direção ele caminha? Melhor: "ele caminha cautelosamente para frente, segurando um escudo, olhando para o horizonte à direita".

**Erro: "estilo de filme"**
O que é estilo de filme? Noir? Documentário? Animação? Melhor: "fotorrealístico, granulação anamórfica de 35mm, paleta dessaturada, sombras duras".

## Sobre comandos afirmativos e negativos

Prefira sempre comandos afirmativos. Em vez de dizer o que você não quer, diga o que você quer. A IA trabalha com distribuições de probabilidade, e substantivos e adjetivos têm muito mais peso do que negativas. Se você escreve "sem elefante na savana", a palavra "elefante" entra no prompt com peso de substantivo, e o modelo vai tentar representar o que está associado a "elefante" mesmo com a negativa.

Em vídeo isso é ainda mais crítico do que em imagem, porque o vídeo é uma sequência de frames interpolados. Em algum desses frames interpolados, o substantivo pesado pode aparecer. Use prompt negativo, quando disponível na ferramenta, no campo específico de negative prompt. Coloque lá o que você não quer, não no corpo do prompt principal.

## Coloque em prática

Escreva um prompt para uma cena simples usando as 6 partes em ordem. Guarde o prompt em um Google Docs com a versão em português e a versão traduzida para inglês. Gere o vídeo, assista com atenção ao que a IA decidiu por conta própria, identifique um elemento que não ficou como você queria, e altere apenas esse elemento no prompt. Gere de novo e compare. Repita até chegar em três iterações conscientes.
