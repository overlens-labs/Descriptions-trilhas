# Como Trabalhamos Dentro da Overlens

**Tempo estimado de leitura:** 18 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o processo completo de criação de imagens usado pela equipe da Overlens, do prompt à entrega final
- Aplicar o Freepik Spaces como canvas de workflow visual para conectar referências, prompts, imagens e vídeos em nós
- Reconhecer como a consistência de personagens e produtos é obtida na prática, usando referências de imagem com qualidade
- Distinguir quando usar Gemini Imagen, Seedream (C-Dream), Flux, Grok, Runway e outros modelos disponíveis dentro de hubs
- Estruturar fluxos de geração com múltiplas referências simultâneas conectadas a um único nó de saída
- Executar a lógica de text-to-image, image-to-image e text-to-video dentro do Freepik Spaces
## O ponto de partida: mood bagunçado e processo real

A aula abre com o instrutor compartilhando a tela em modo não filtrado, o "mood bagunçado" real de trabalho da equipe, sem edição ou limpeza prévia. O objetivo explícito é que o aluno veja como o processo funciona de verdade em diferentes tipos de uso, não como ele parece em uma demonstração preparada.

O primeiro exemplo exibido é um projeto de text-to-image. A imagem mostrada era para a capa da trilha, que inicialmente se chamaria "Imaging" e depois foi renomeada para "Spectrum." O processo documentado começa sempre da mesma forma: um prompt é gerado primeiro. A estrutura desse prompt usa exatamente o que foi ensinado nas aulas anteriores, e o instrutor pede que o aluno pause o vídeo para ler e identificar a estrutura presente.

Depois de ter o prompt e gerar o primeiro modelo de imagem, a equipe usa esse modelo como referência para aplicar uma roupa sobre ele. É assim que se obtém consistência, principalmente dentro do Nanobanana (Gemini Imagen). O processo é usar a imagem de referência do modelo e a partir dela gerar variações com roupa ou outros elementos aplicados.
## Qualidade da imagem de referência como fator crítico

Um ponto técnico importante é destacado logo no início: quando você usa uma imagem de referência no fluxo de geração, a qualidade da imagem que você sobe interfere diretamente na qualidade da imagem gerada. Suba a referência com a maior qualidade possível. A IA vai gerar uma imagem com qualidade proporcional à entrada.

Depois da geração inicial, o processo pode incluir upscale. As ferramentas de upscale apresentadas aqui como parte do pipeline da Overlens são Freepik (com função nativa de upscale), Enhancor e o upscale interno do Midjourney, que é considerado muito bom. O uso de cada uma depende do contexto e do destino final da imagem.

Para a parte de roupas especificamente, a equipe usa duas ferramentas combinadas: Gemini e Seedream (referenciado como "C-Dream" ao longo da aula, nome interno da equipe para o modelo Seedream/Seedring).
## Freepik Spaces: o canvas de workflow visual

O instrutor dedica uma parte significativa da aula a mostrar o Freepik Spaces ao vivo. O Spaces é descrito como um canvas, uma área de trabalho visual no estilo nó a nó, onde você conecta elementos (prompt de texto, imagens, vídeos, assistentes) e eles se relacionam para gerar novas saídas.

O instrutor menciona outras ferramentas similares que existem no mercado: Adobe Firefly tem seu próprio canvas, havia uma ferramenta chamada Fauna Flora que era muito boa mas está sendo eclipsada pelo Freepik Spaces. O diferencial do Spaces está na combinação de qualidade dos modelos disponíveis e na simplicidade do fluxo visual.

### Como o Spaces funciona na prática

O fluxo básico dentro do Spaces começa assim:

**Passo 1:** Clique no botão "mais" em qualquer área do canvas. As opções que aparecem são: gerar texto, gerar imagem, gerar vídeo, abrir um assistente de IA ou melhorar uma imagem existente.

**Passo 2:** Comece com um nó de texto. Escreva o que você quer gerar. O instrutor demonstra com o exemplo mais simples possível: "um elefante." Esse texto aparece como um nó no canvas.

**Passo 3:** Puxe uma conexão desse nó de texto para um nó de imagem. O Spaces vai usar o prompt de texto para gerar a imagem automaticamente quando você der o comando de executar.

**Passo 4:** Quando a imagem do elefante é gerada, ela aparece como um novo nó no canvas. Agora você pode puxar uma conexão dessa imagem para um novo nó de imagem e adicionar um segundo nó de texto com instruções adicionais. O instrutor demonstra isso ao vivo: pega a imagem do elefante gerada, cria um segundo nó de texto com "armadura cyberpunk biônica" e conecta os dois ao novo nó de imagem. O resultado é uma imagem do elefante com armadura cyberpunk, gerada a partir da referência da imagem anterior combinada com a nova descrição textual.

Esse fluxo encadeia gerações: a saída de uma geração vira a entrada da próxima. É assim que você mantém consistência de personagem ao longo de múltiplas imagens.
## Trocar modelos de IA dentro do Spaces

Um ponto que o instrutor destaca é que, se você não estiver gostando da qualidade das imagens geradas, pode trocar o modelo de IA dentro do próprio Spaces sem sair da plataforma. Os modelos disponíveis listados ao vivo incluem: Flux, Google Nanobanana (Imagen), GPT, Grok, QAIN, Havi, Runway, Seedream (Seedring) e outros. Você escolhe o modelo e gera uma nova imagem a partir do mesmo fluxo existente.

Essa troca de modelo é especialmente útil no processo de comparação: você pode abrir múltiplos nós de imagem a partir do mesmo prompt e trocar o modelo em cada um deles para comparar os resultados lado a lado, dentro do mesmo canvas.
## Fluxo com múltiplas referências simultâneas

Uma das funcionalidades mais poderosas do Spaces é a capacidade de conectar múltiplas referências ao mesmo nó de saída. O instrutor demonstra isso assim: você abre vários nós de texto ou imagem (três, quatro referências) e arrasta conexões de todos eles para o nó de imagem que você quer gerar. O Spaces vai pegar todas essas referências simultaneamente e combiná-las para produzir a imagem final.

Isso é útil quando você tem múltiplas referências visuais que precisam ser combinadas em um único output. Por exemplo: uma referência de iluminação, uma referência de personagem, uma referência de ambiente, e um texto descrevendo a cena. Todas conectadas ao mesmo nó de geração.
## O segredo da consistência não é a ferramenta, é o repertório

O instrutor usa o trabalho da integrante da equipe Thais como exemplo central desta aula. Thais pegou uma imagem de referência de um modelo e, a partir dela, gerou múltiplas variações usando C-Dream (Seedream), mantendo a consistência do personagem ao longo de todas as imagens. O resultado, segundo o instrutor, é de imagens incríveis com "consistência absurda."

O ponto que ele faz questão de ressaltar é que muita gente no mercado vende esse tipo de resultado como se o truque fosse a ferramenta. Não é. O instrutor está entregando o processo de graça e afirma com clareza: o que produz esses resultados é repertório. O segredo da consistência técnica está no modelo de IA que você usa: modelos mais antigos ou mais fracos perdem consistência. Os modelos atuais e de ponta mantêm consistência, mas gastam mais créditos. Isso precisa entrar no planejamento de custo.
## Demonstração completa: texto para imagem para vídeo

Uma das demonstrações mais completas da aula mostra o fluxo de text-to-image-to-video dentro do Spaces. O instrutor demonstra ao vivo:

**Geração de imagem:** A partir do prompt "um elefante" e do fluxo descrito anteriormente, a imagem é gerada.

**Geração de vídeo a partir da imagem:** Depois de ter a imagem gerada, o instrutor puxa uma conexão dela para um nó de vídeo. O Spaces exibe opções de configuração: modelo de geração (ele escolhe o modelo "Fast" para demonstração mais rápida), duração (4 segundos), qualidade (720p, 1080p ou 4K) e formato de saída. O instrutor adiciona um nó de texto com o prompt de movimento: "um elefante de armadura correndo na estrada." Esse texto é conectado ao nó de vídeo junto com a imagem de referência. Ao executar, o Spaces gera um vídeo de 4 segundos baseado na imagem do elefante com a descrição do movimento.

Esse fluxo inteiro, do texto inicial até o vídeo final, ocorre dentro do mesmo canvas do Spaces sem precisar alternar entre plataformas diferentes.
## Uso prático: consistência de produto para e-commerce

A aula dedica um bloco relevante a casos de uso de produto, especialmente para e-commerce, que o instrutor aponta como uma das oportunidades mais claras para aplicar esse processo.

O exemplo demonstrado por Thais usa um objeto extremamente específico, como se fosse um produto real com detalhes únicos. O processo documentado é:

1. Gerar o prompt com a estrutura ensinada nas aulas anteriores, incluindo o enquadramento desejado (por exemplo, "Extreme Close-Up Detail Shot")
2. Gerar a imagem do produto no Spaces usando um modelo de ponta
3. Gerar variações com diferentes ângulos e enquadramentos a partir da mesma referência
4. Aplicar o produto em um ambiente (uma mesa, uma prateleira, um quarto), gerando uma segunda camada de imagens

O resultado é uma série de imagens do produto em close-up, em outro ângulo, e inserido em ambiente, tudo mantendo a consistência visual do produto original. Para e-commerce, isso representa uma fotografia de produto profissional gerada sem estúdio físico.

O instrutor menciona também um segundo exemplo com um objeto similar a uma Alexa (dispositivo de assistente de voz), mostrando o produto em zoom e em diferentes posicionamentos. O comentário é direto: "imagina um e-commerce com essas fotos."

O segredo técnico para essa qualidade é o modelo usado. O instrutor destaca que a equipe tem preferido o Seedream (C-Dream) ao Nanobanana para esse tipo de geração, embora o Nanobanana também produza boas imagens nesse contexto.
## Caso de uso: mercado imobiliário com sketch para render

Um dos exemplos mais impactantes da aula envolve geração de renders arquitetônicos a partir de sketches. O instrutor mostra ao vivo um projeto no Nanobanana onde:

1. A entrada é um sketch simples de uma casa (desenho de referência arquitetônica)
2. A saída é um render fotorrealista da casa a partir desse sketch, em ângulo específico

O resultado mostrado inclui detalhes como um pergolado no segundo andar, cadeiras na varanda, e outros elementos que estavam no sketch original. A casa gerada tem uma estética que o instrutor compara a Jurerê Internacional em Florianópolis.

O processo também demonstra um ponto de limitação e como lidar com ele: a IA nem sempre interpreta todos os elementos do sketch corretamente. No exemplo ao vivo, o que era um pergolado no sketch foi gerado como vidro em uma das variações. A solução é simples: se o elemento está no prompt descrito com precisão, a IA vai gerar corretamente. Se não estava descrito, a interpretação é livre. Portanto, a descrição no prompt precisa ser específica para cada elemento que importa.

O instrutor aponta o mercado imobiliário como uma das oportunidades de janela mais claras para quem vai montar um estúdio de criação com IA: arquitetos e construtoras precisam de renders, o processo com IA é mais rápido e barato, e a qualidade já está no nível de uso comercial.
## Edição e correção de imagens geradas

A aula também cobre o processo de edição depois que a imagem é gerada. O instrutor descreve a situação comum: a IA gera um carro que não existe, ou um elemento que não ficou correto. Como corrigir?

Dentro do Freepik, há uma funcionalidade de edição de imagem: você sobe a imagem gerada e entra no modo de edição. Lá você pode selecionar a área problemática e pedir para a IA corrigir, seja trocando por um elemento que existe, seja removendo o elemento por completo. O instrutor menciona também o Photoshop como alternativa para quem já tem domínio da ferramenta.

O fluxo recomendado para quem está usando Freepik como plataforma principal é fazer toda a edição dentro do próprio Freepik, sem precisar alternar para outras ferramentas. Quem já está assinando o Freepik tem acesso à edição de imagem sem custo adicional.
## O processo de edição como fechamento do ciclo

Ao final da sessão de demonstração, o instrutor anuncia que o próximo bloco da aula vai cobrir o processo de edição, descrevendo como a equipe faz depois de ter gerado e selecionado as melhores imagens.

O ciclo completo que a aula documenta é:

1. Gerar prompt com estrutura correta
2. Usar o modelo certo para a tarefa (Seedream para consistência de produto e personagem, Nanobanana para sketches, modelos de vídeo como Fast para demonstrações rápidas)
3. Conectar referências de imagem com qualidade no Spaces
4. Gerar variações com múltiplos ângulos e enquadramentos
5. Selecionar as melhores imagens
6. Aplicar edição e correção onde necessário (dentro do Freepik ou no Photoshop)
7. Aplicar upscale quando necessário (Freepik, Enhancor ou Midjourney upscale)

Esse ciclo é o processo real da Overlens, documentado sem filtro para que o aluno veja que não existe segredo técnico inacessível. A caixa preta foi aberta.
## Simplicidade como princípio de controle

Um ponto filosófico que o instrutor reforça ao longo de toda a aula é que simplicidade ganha o jogo. Não porque o processo seja limitado, mas porque simplicidade dá controle. Quando você tem controle sobre o que está pedindo para a IA, o resultado melhora. Quando você manda um prompt excessivamente complexo achando que está arrasando, a imagem frequentemente sai pior do que um prompt mais limpo e direto.

O objetivo do Freepik Spaces e de todo o fluxo descrito não é exibir complexidade técnica. É otimizar o processo para que você produza mais, com mais controle, em menos tempo. Qualquer pessoa que criar uma conta no Freepik e começar a usar vai perceber em minutos que a dificuldade técnica é baixa. O que diferencia os resultados não é o domínio da interface. É o repertório visual e conceitual de quem está por trás do prompt.
## O que a ferramenta não substitui

O instrutor é direto sobre o que a ferramenta não resolve: ela não tem olhar. Quem tem olhar é o arquiteto que percebe que o carro gerado nunca existiu. O designer que percebe que o pergolado virou vidro. O criador de conteúdo que percebe que a imagem do produto está com um detalhe errado. A IA produz. O profissional ajusta, corrige, seleciona e entrega.

Essa distinção é importante porque define o valor do profissional no processo: não está em saber apertar botões. Está em saber o que está certo e o que está errado no resultado, e ter o repertório para corrigir com precisão.
## Coloque em prática

Com base no que foi demonstrado nesta aula, execute o seguinte exercício completo no Freepik Spaces:

**Cenário:** Você vai gerar imagens de consistência de um produto fictício usando o fluxo completo da Overlens.

**Passo 1:** Crie uma conta no Freepik (plano gratuito funciona para começar). Acesse o Spaces no menu principal.

**Passo 2:** No canvas, crie um nó de texto com uma descrição de produto simples. Exemplo: "garrafa de água minimalista, superfície fosca, cor cinza escuro, tampa metálica prateada."

**Passo 3:** Conecte esse nó de texto a um nó de imagem. Selecione o modelo Seedream ou equivalente de ponta disponível. Execute e aguarde a geração.

**Passo 4:** Com a imagem gerada, crie dois novos nós de imagem. No primeiro, adicione um segundo texto com "Extreme Close-Up, studio lighting, white background." No segundo, adicione "product in lifestyle environment, kitchen counter, natural light." Conecte a imagem original e o texto de cada variação aos respectivos novos nós. Execute os dois.

**Passo 5:** Analise os três resultados. O que ficou consistente entre eles? O que mudou? Se algum elemento saiu errado, entre na edição de imagem do Freepik e corrija a área problemática com um prompt específico.

Esse exercício instala o ciclo de geração, variação, análise e correção que a Overlens usa no dia a dia.
## Contexto dos modelos usados pela Overlens: escolhas e justificativas

A aula revela, ao longo das demonstrações, quais modelos a equipe tem preferido e por quê. Essas informações aparecem de forma dispersa na gravação mas merecem ser consolidadas aqui.

**Seedream (chamado internamente de "C-Dream"):** O modelo de preferência da equipe para tarefas que exigem consistência, especialmente para produtos e personagens. O instrutor e a integrante Thais usam esse modelo para a maioria das gerações de produto e para as séries de imagens com personagens consistentes. Modelos de ponta como o Seedream gastam mais créditos, mas a qualidade de consistência compensa o custo.

**Nanobanana (Gemini Imagen):** Usado para a parte de sketches e renders arquitetônicos. O instrutor demonstra ao vivo um fluxo onde um sketch de casa vira um render fotorrealista usando esse modelo. Também utilizado para roupas em combinação com o Gemini. O modelo produz boas imagens de produto, mas a equipe tem preferido o Seedream para esse tipo de trabalho atualmente.

**Flux:** Disponível dentro do Freepik Spaces como uma das opções de modelo para geração de imagem. Citado na listagem de modelos disponíveis que aparecem ao trocar o modelo dentro do canvas.

**Grok:** Disponível como opção de modelo dentro do Freepik Spaces. Citado na listagem ao vivo durante a demonstração de troca de modelos.

**Runway:** Disponível como opção para geração de vídeo dentro do Freepik Spaces.

**Midjourney:** O exemplo de roupa mostrado na aula foi gerado no Midjourney, com parâmetros visíveis na tela. O instrutor sugere pausar o vídeo para ler o prompt ou tirar um print e jogar em uma LLM pedindo tradução e explicação em português. O upscale interno do Midjourney é descrito como muito bom e faz parte do pipeline de melhoria de qualidade da equipe.

**FreePix Spaces (canvas de orquestração):** Não é um modelo de IA, mas a ferramenta que orquestra múltiplos modelos em um único fluxo visual. A distinção importante: o Spaces não tem modelo próprio de geração. Ele conecta os modelos listados acima em um canvas onde você define as relações entre eles.
## Como a Overlens pensa processo versus ferramenta

Um dos temas mais recorrentes na aula é a distinção entre processo e ferramenta, e como a equipe resolve essa tensão no dia a dia.

O instrutor declara que se tivesse passado a aula inteira ensinando a apertar botões no Freepik Spaces, o aluno estaria perdido assim que a interface mudasse ou uma ferramenta nova surgisse. Em vez disso, a aula ensina o processo: identifique o que você quer gerar, saiba qual tipo de referência usar, conecte as referências certas, selecione o modelo certo para o resultado desejado, analise o output e corrija onde necessário.

Esse processo se aplica a qualquer ferramenta. O canvas pode ser o Freepik Spaces hoje, pode ser outra ferramenta daqui a seis meses. O que não muda é a lógica: você tem uma intenção, você tem referências, você tem um modelo que vai interpretar essas referências, e você tem um critério para avaliar se o resultado serve ou não.

A equipe da Overlens aplica esse processo em contextos muito diferentes dentro do mesmo dia: geração de imagem para e-commerce, renders arquitetônicos para cliente imobiliário, personagens para conteúdo de redes sociais, roupas em modelos para marca de moda. O processo é o mesmo. O que muda são os modelos escolhidos e as referências conectadas.
## A lógica dos créditos e o planejamento de custo

A aula toca em um aspecto prático que muitos alunos ignoram: os modelos de ponta dentro do Freepik Spaces gastam mais créditos do que os modelos mais antigos ou mais fracos. Isso tem uma implicação direta no planejamento de uso.

Se você está em fase de testes e exploração, pode usar modelos menos onerosos para assimilar o fluxo sem gastar seus créditos. Quando você já sabe o que quer gerar e está em fase de produção, migra para o modelo de ponta e gasta os créditos de forma direcionada.

O instrutor menciona que modelos mais antigos ou mais fracos perdem consistência. Portanto, usar modelos econômicos para consistência de personagem ou produto não funciona bem. Para consistência, o modelo precisa ser de ponta, e o custo em créditos é maior. Planejar isso como parte do orçamento de produção é tão importante quanto planejar o tempo de trabalho.
## Onde esta aula se posiciona dentro da trilha Spectrum

Esta aula aparece depois das aulas de prompts avançados, iluminação, text-to-image, image-to-image, outpainting e consistência de personagens. Ela funciona como uma "aula de bastidores" que conecta tudo que foi ensinado anteriormente ao processo real da equipe que criou a trilha.

O instrutor avisa que o conteúdo mais avançado ainda está por vir. O que foi demonstrado nesta aula, processo de Spaces, consistência com Seedream, renders a partir de sketch, é descrito como o básico que qualquer pessoa consegue reproduzir depois de criar uma conta. O avançado, que "vai fritar a cabeça," é o que está sendo desenvolvido para o evento Atlas e para os módulos seguintes da trilha.

Para o aluno que está consumindo esta descrição: o que você viu aqui é o processo real sem filtro. Não existe segredo técnico inacessível. O que diferencia quem produz resultados profissionais é o repertório acumulado, o olhar treinado para avaliar o que está certo e o que precisa ser corrigido, e a prática sistemática de testar, iterar e documentar.
## Compartilhe o que aprendeu: a orientação do instrutor

No final da aula, o instrutor faz um apelo direto aos alunos que estão assistindo: compartilhem este conteúdo. O argumento é consistente com o que ele ensina ao longo de toda a trilha. O processo mostrado nesta aula, usando o Freepik Spaces com fluxos de referência, gerando produto com o Seedream, aplicando prompts com enquadramento como "Extreme Close-Up Detail Shot", já está acessível para qualquer pessoa. Não é mais um segredo de mercado. Qualquer pessoa que criar uma conta e começar a usar vai perceber que funciona e que é simples.

A Overlens abre a caixa preta porque acredita que o valor real não está em esconder a técnica. Está em ter repertório e contexto para aplicar a técnica com inteligência. Ensinar o processo de graça não diminui o valor de quem o executa com excelência. Reforça. Porque a pessoa que vê o processo e aplica sem repertório vai gerar resultados medianos. A pessoa que vê o mesmo processo com repertório visual acumulado, com senso crítico desenvolvido e com prática consistente vai gerar resultados profissionais. A diferença não está no acesso à ferramenta. Está no que você traz para a mesa quando usa a ferramenta.

Esse raciocínio é o que sustenta a decisão pedagógica de não cobrar por mostrar o Freepik Spaces, de não cobrar por revelar que o Seedream produz consistência, de não cobrar por demonstrar como um sketch vira render. O acesso a essas informações está ficando cada vez mais democratizado. O que não está disponível de graça é o repertório, o treinamento de olhar e a metodologia de trabalho. Isso é o que a trilha Spectrum está entregando.
