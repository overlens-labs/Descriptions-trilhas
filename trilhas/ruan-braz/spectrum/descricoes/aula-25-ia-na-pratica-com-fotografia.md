# IA na prática com fotografia

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar o fluxo completo de ensaio fotográfico virtual com IA usando imagens reais como referência
- Aplicar o Freepik Personagem para treinar um modelo com fotos reais e manter consistência facial
- Reconhecer as diferenças operacionais entre NanoBanana (NanoFlux 2) e Seedream para consistência de identidade
- Estruturar o Freepik Spaces como ambiente de mood board iterativo e substituição de rostos
- Executar a técnica de usar Gemini para descrever uma imagem de referência em prompt detalhado
## O fluxo completo: de briefing a ensaio fotográfico virtual

Esta aula encerra um arco que começou nas aulas de briefing e mood board. O objetivo é usar tudo o que foi construído ao longo da trilha (referências, entendimento de iluminação, enquadramento, estilo fotográfico, vocabulário de prompt) num processo prático completo: gerar fotografias com IA que mantenham consistência de identidade visual a partir de imagens reais.

O processo tem três componentes fundamentais:

1. **Referências de identidade:** fotos reais do sujeito (a pessoa que vai aparecer nas imagens) em diferentes ângulos, com diferentes expressões e iluminações.
2. **Mood board:** as referências visuais do estilo, da atmosfera e do ambiente desejado, construídas nas aulas anteriores.
3. **Ferramenta de geração com suporte a consistência facial:** não qualquer ferramenta, mas uma que permita treinar com as fotos reais ou que ofereça image-to-image com referência de rosto.

A qualidade da referência de entrada determina a qualidade do resultado. Fotos de baixa resolução, com iluminação ruim ou com muitas variáveis diferentes geram resultados inconsistentes. O ideal são fotos em boa resolução (ao redor de 1200 a 1300px de lado), com iluminação neutra, mostrando o rosto com clareza. A exportação deve ser na maior resolução possível que a ferramenta aceitar.
## NanoBanana versus Seedream: qual usar para quê

Dois modelos são comparados extensivamente nesta aula para o objetivo específico de consistência facial: o NanoBanana (NanoFlux 2, disponível no Freepik) e o Seedream (da ByteDance, também integrado ao Freepik na época da gravação).

**NanoBanana (NanoFlux 2):**
- Excelente consistência facial com image-to-image
- Mantém as características faciais do sujeito com fidelidade alta ao longo de múltiplas gerações
- Permite alterar roupa, cenário, estilo, expressão, iluminação sem perder a identidade do rosto
- Demonstração prática: Ruan usa fotos suas de uma palestra em Alphaville para gerar variações com trocas de roupa, óculos, barba, até versão careca, mantendo o rosto reconhecível
- Risco: às vezes "cola" demais na referência e reduz a criatividade visual do resultado

**Seedream:**
- Geração de alta qualidade visual
- Consistência facial menos precisa do que o NanoBanana para o mesmo conjunto de referências
- Melhor para geração quando a consistência não é o principal requisito
- Comparação direta na aula mostra que o Seedream perde mais as características faciais do sujeito quando o prompt altera significativamente o estilo ou o contexto

A recomendação prática da aula: para ensaios virtuais com identidade real (quando o rosto precisa ser reconhecível), o NanoBanana é o mais confiável. Para geração de imagens fotográficas de alta qualidade onde a pessoa não precisa ser exatamente você, o Seedream pode produzir resultados visualmente superiores.
## Freepik Spaces: o mood board iterativo

O Freepik Spaces é apresentado nesta aula como o ambiente central de trabalho para o ensaio fotográfico virtual. Ele funciona de forma diferente de uma ferramenta de geração convencional: é um espaço onde você agrupa referências, gerações e variações para trabalhar de forma iterativa.

O fluxo dentro do Space funciona assim:

1. **Importar referências:** você carrega as fotos do mood board (ambientes, iluminações, estilos fotográficos, composições de referência).
2. **Gerar a partir de referências:** você usa as referências como guia visual, não apenas como texto.
3. **Iterar:** você mantém o que funciona, descarta o que não funciona, refina progressivamente.
4. **Substituir rostos:** você pode trocar o rosto gerado por um rosto real a partir de uma foto de referência.

A função de troca de rosto (face swap) dentro do Space é demonstrada ao vivo: você pega uma imagem que ficou bem em termos de composição, iluminação e estilo, e substitui o rosto gerado pelo rosto do sujeito real. O resultado combina o melhor dos dois processos: a qualidade fotográfica da geração com a identidade facial precisa da referência real.
## O Freepik Personagem: treinar o modelo com suas fotos

"Personagem" é o nome da funcionalidade do Freepik que permite treinar um modelo personalizado a partir de fotos reais. É o recurso central para quem precisa de consistência facial de alta qualidade ao longo de muitas gerações.

**Como funciona:**
- Você carrega entre 10 e 24 fotos do sujeito
- O Freepik treina um modelo específico para aquela identidade
- Depois do treinamento, você pode usar esse modelo como base para gerar imagens: o rosto é preservado, e você controla todo o resto pelo prompt

**Qualidade das fotos de referência:**
- Diversidade de ângulos (frontal, três quartos, perfil)
- Diversidade de expressões (neutro, sorrindo, sério)
- Diversidade de iluminação (frontal, lateral, ambiente)
- Sem óculos escuros, sem chapéu cobrindo o rosto, sem obstrução
- Resolução adequada (ao redor de 1200-1300px de lado)
- Fundo variado ou fundo neutro (evitar todas as fotos no mesmo fundo pois o modelo pode aprender o fundo como parte da identidade)

**Custo de treinamento:**
- Modo rápido: consome 10 créditos do Freepik
- Modo Ultra (maior fidelidade): consome 3000 créditos

A diferença entre os modos não é apenas de velocidade: o modo Ultra produz um modelo com fidelidade significativamente maior, capturando mais nuances do rosto. Para uso profissional ou para projetos onde a identidade é crítica, o modo Ultra vale o investimento de créditos.

**Técnica importante ao usar o Personagem:** não descreva o rosto no prompt. Quando você treinou o modelo com as fotos, o modelo já sabe como é o rosto. Se você adiciona descrições de rosto ao prompt (cor dos olhos, formato do rosto, cor do cabelo), você cria conflito entre o que o modelo aprendeu e o que você está pedindo, e o resultado perde consistência. Descreva tudo exceto o rosto: ambiente, roupa, iluminação, expressão emocional geral, enquadramento, câmera.
## A técnica de descrever imagem de referência com Gemini

Uma das técnicas mais valiosas demonstradas nesta aula é usar o Gemini para extrair um prompt detalhado a partir de uma imagem de referência. O fluxo é:

1. Você encontra uma fotografia de referência que tem exatamente o estilo, iluminação, enquadramento ou atmosfera que você quer.
2. Você envia essa imagem para o Gemini e pede: "Descreva esta fotografia em detalhes técnicos precisos que eu possa usar como prompt para geração de imagem com IA."
3. O Gemini analisa a imagem e produz uma descrição detalhada: tipo de iluminação, ângulo, enquadramento, profundidade de campo, câmera estimada, lente, tom de cor, textura, composição.
4. Você usa esse texto como base do seu prompt, substituindo apenas os elementos que são específicos da referência (a pessoa, o objeto, o lugar) pelos seus.

Essa técnica tem duas vantagens principais. Primeira: você captura vocabulário técnico que talvez você não tivesse e que descreve com precisão o que está na imagem. Segunda: você elimina a tradução subjetiva do visual para o verbal. Em vez de tentar descrever o que você vê, você tem uma descrição técnica gerada por um sistema com vocabulário fotográfico robusto.

O resultado é que você pode replicar o estilo de uma fotografia com alta fidelidade sem necessariamente saber o nome de cada técnica que foi usada na imagem original.
## Fluxo prático do ensaio virtual

A demonstração ao vivo na aula segue um fluxo específico que Ruan usa para ensaios fotográficos virtuais com imagens reais:

**Passo 1: Preparar as referências**
- Exportar as fotos do sujeito em boa resolução
- Selecionar fotos com diversidade de ângulo e expressão
- Selecionar imagens do mood board com o estilo e atmosfera desejados

**Passo 2: Criar ou usar o Personagem treinado**
- Se o cliente ou sujeito já tem um Personagem treinado, selecionar
- Se não, treinar com as fotos disponíveis
- Preferência pelo modo Ultra para projetos de cliente

**Passo 3: Descrever o estilo com o Gemini**
- Enviar imagem de referência do mood board para o Gemini
- Extrair descrição técnica detalhada
- Adaptar o prompt removendo elementos específicos da referência e inserindo os do projeto

**Passo 4: Gerar as primeiras variações no Space**
- Usar o Personagem como base
- Aplicar o prompt extraído do Gemini
- Gerar múltiplas variações com o mesmo prompt (Double Diamond: fase de descoberta)

**Passo 5: Selecionar e refinar**
- Identificar as variações que funcionam em termos de composição, luz e atmosfera
- Para as selecionadas, refinar com ajustes de prompt (fase de desenvolvimento)

**Passo 6: Ajustar rosto se necessário**
- Se o Personagem não manteve o rosto com fidelidade suficiente, usar face swap dentro do Space
- Carregar a foto real do sujeito como referência de rosto
- Substituir o rosto gerado pelo real

**Passo 7: Exportar**
- Selecionar as imagens finais
- Exportar na maior resolução disponível
## A palestra em Alphaville: demonstração de variação

Uma das demonstrações mais ilustrativas da aula usa fotos de Ruan numa palestra em Alphaville como conjunto de referências. A partir dessas fotos:

- Gerou variações com diferentes roupas (terno, casual, jaqueta)
- Gerou variações com e sem óculos
- Gerou variações com e sem barba
- Gerou uma versão careca (sem cabelo)
- Manteve o rosto reconhecível em todas as variações

Isso demonstra o poder do NanoBanana para ensaios de moda, lookbooks, apresentações de produto ou qualquer contexto onde você precisa mostrar o mesmo sujeito em múltiplos contextos visuais sem fazer um ensaio fotográfico real.

Outro participante mencionado na aula, Thaís, também realiza testes ao vivo durante a sessão, o que ilustra que o processo é acessível e não requer conhecimento técnico avançado: é uma questão de aprender o fluxo e executar.
## Tamanho de imagem para referência: o número que importa

A resolução das imagens de referência tem impacto direto na qualidade do resultado. A referência ideal para o Freepik Personagem e para image-to-image é ao redor de 1200 a 1300 pixels de lado.

Acima disso, a ferramenta pode reduzir internamente e perder detalhes relevantes. Abaixo disso, o modelo não tem informação suficiente para capturar nuances faciais. O intervalo de 1200-1300px representa o ponto onde a informação é suficiente sem ser excessiva.

Para referências de mood board (imagens de estilo, não de rosto), a resolução pode ser mais flexível, mas imagens muito pequenas resultam em geração com menos detalhes de textura e iluminação.
## A troca de rosto dentro do Space

A funcionalidade de troca de rosto no Freepik Spaces permite um fluxo alternativo ao Personagem: em vez de treinar um modelo antes de gerar, você gera primeiro com mais liberdade e substitui o rosto depois.

O processo:
1. Gere imagens focando em composição, iluminação e estilo, sem se preocupar com o rosto
2. Selecione as imagens que ficaram melhores em termos visuais
3. Use a função de face swap para substituir o rosto gerado pelo rosto real a partir de uma foto de referência

Essa abordagem tem vantagens em contextos onde a composição é mais crítica do que a identidade: você não fica preso à face gerada pelo Personagem e pode primeiro encontrar a composição ideal.

A limitação é que a qualidade da integração do rosto real na imagem gerada depende de compatibilidade de iluminação e ângulo. Se o rosto na foto de referência está em ângulo completamente diferente do ângulo da pessoa gerada, a integração fica mais artificial. Escolha fotos de referência de rosto que tenham ângulo compatível com o da imagem gerada.
## O papel do mood board no processo de fotografia virtual

O mood board não é opcional neste fluxo: é o que garante consistência visual entre as gerações. Sem referências visuais claras, cada geração parte de um ponto diferente e o resultado é uma coleção de imagens tecnicamente competentes mas sem coesão.

O mood board para fotografia virtual deve conter pelo menos três tipos de referências:

**Referências de estilo fotográfico:** fotos reais ou geradas que exemplificam o tipo de fotografia desejada. Se o objetivo é um ensaio editorial de moda, inclua imagens de ensaios editoriais com a atmosfera que você quer. Se é um ensaio corporativo, inclua retratos corporativos com o tom desejado. O modelo vai aprender o estilo a partir do conjunto, não de uma única imagem.

**Referências de iluminação:** imagens que mostram especificamente o tipo de luz desejado. Uma imagem com golden hour perfeito para indicar a temperatura e direção da luz. Uma imagem com Rembrandt lighting para indicar o contraste dramático. Essas referências respondem perguntas que o vocabulário de texto nem sempre consegue responder com precisão.

**Referências de ambiente e cenário:** onde as imagens vão acontecer. Rua de cidade ao entardecer, estúdio minimalista branco, sala com paredes de tijolo exposto, jardim ao ar livre. O ambiente na referência é interpretado pelo modelo como contexto para a geração.

A ferramenta de Spaces permite usar cada referência com graus diferentes de influência. Você pode dizer "use o estilo desta foto mas não o ambiente" ou "use o ambiente desta foto mas mude a iluminação". Esse controle granular é o que torna o Spaces mais poderoso do que simplesmente gerar com prompt de texto.
## Por que o Seedream perde na consistência facial

A comparação entre NanoBanana e Seedream na aula não é apenas de preferência: tem uma explicação técnica. O Seedream, na versão demonstrada, funciona como modelo de difusão com alta qualidade visual mas com interpretação menos precisa de referências faciais quando o contexto muda muito.

O que acontece na prática: você carrega uma foto de referência do sujeito no Seedream. Para um contexto próximo da referência (mesma iluminação, ângulo similar, expressão parecida), o resultado é muito bom. Para um contexto muito diferente (mudar completamente a iluminação, o ângulo, a roupa, o ambiente), o modelo começa a perder as características faciais específicas e gera um resultado que é "parecido" com o sujeito mas não reconhecível como a mesma pessoa.

O NanoBanana, especialmente com o Personagem treinado, mantém as características faciais mesmo quando o contexto muda drasticamente. Isso é porque o Personagem cria um vetor específico para aquela identidade que tem peso maior no espaço de geração do que o contexto. As características da pessoa têm prioridade sobre o estilo da cena.

A limitação inversa existe: o NanoBanana às vezes produz imagens que parecem "grudadas" na referência de forma excessiva, com menos liberdade criativa. Para romper isso quando necessário, você pode usar strength baixo (grau de influência da referência) e deixar o modelo ter mais liberdade, depois refinar com face swap se necessário.
## Construindo consistência visual em um projeto completo

Quando o objetivo é criar um conjunto de imagens para um projeto (campanha de marketing, lookbook, portfólio, conteúdo de redes sociais), a consistência entre as imagens é tão importante quanto a qualidade individual de cada uma.

Consistência visual em um conjunto de imagens tem três camadas:

**Consistência de identidade:** o rosto é sempre reconhecível como o mesmo. O Personagem treinado cuida disso.

**Consistência de estilo:** a paleta de cores, a temperatura de luz, o nível de contraste, o tipo de bokeh são os mesmos em todas as imagens. Isso é garantido pelo mood board e pelo prompt base que é mantido fixo entre as gerações, alterando apenas os elementos que devem mudar.

**Consistência de composição:** o enquadramento, a proporção e a forma como o sujeito se posiciona no frame seguem um padrão recognizível. Isso é definido antes de começar a gerar, como parte do briefing visual.

A técnica prática para manter essas três camadas ao longo de muitas gerações é documentar o prompt base que funcionou para a primeira geração aprovada. Esse prompt base contém todos os elementos fixos do projeto: estilo fotográfico, iluminação, câmera, lente, proporção de imagem, tom de cor. A cada nova geração, você parte dessa base e altera apenas o que precisa mudar (ação, ambiente, expressão).
## Quando usar Personagem e quando usar face swap: decisão de fluxo

A escolha entre treinar um Personagem ou usar face swap depois não é sempre óbvia. Aqui estão os critérios práticos que emergem das demonstrações:

**Use Personagem quando:**
- Você vai gerar muitas imagens do mesmo sujeito (mais de cinco a dez)
- A identidade facial é crítica e precisa ser preservada em todos os contextos
- O cliente ou sujeito pode fornecer entre 10 e 24 fotos de qualidade
- O projeto tem prazo que justifica o investimento de tempo no treinamento

**Use face swap quando:**
- Você precisa de uma ou duas imagens específicas e o Personagem ainda não foi treinado
- A composição e a iluminação da imagem gerada são mais críticas do que a identidade facial
- O modelo gerou uma imagem excelente em todos os aspectos mas com o rosto errado
- Você quer testar o resultado antes de investir créditos no modo Ultra do Personagem

O fluxo híbrido também é válido: você treina o Personagem em modo rápido (10 créditos) para ter uma base, gera imagens com ele, e usa face swap nas que ficaram próximas mas com pequenas inconsistências faciais. Para o projeto final que vai ao cliente, você treina o Personagem no modo Ultra para a entrega definitiva.
## Repertório e processo acima de ferramenta

Um ponto que Ruan retoma ao longo de toda a aula, especialmente nas demonstrações práticas, é que a ferramenta não é o diferencial. O NanoBanana, o Seedream, o Gemini, o Freepik Spaces: todos estão acessíveis para qualquer pessoa. O que varia é:

**Repertório visual:** saber o que é uma boa foto, saber o que você quer antes de abrir a ferramenta, ter referências que comunicam a intenção com precisão. Alguém que passou anos olhando para fotografia de moda vai identificar rapidamente quais das dez variações geradas têm composição profissional e quais têm algo deslocado. Esse senso não vem da IA: vem do repertório acumulado.

**Processo:** saber quando gerar muito (descoberta), quando afunilar (seleção), quando refinar (desenvolvimento) e quando entregar. Sem processo, a geração fica aleatória mesmo com as melhores ferramentas. O Double Diamond aplicado à geração de fotografias virtuais garante que você não entrega a primeira coisa que sai, mas também não fica gerando infinitamente sem critério de seleção.

**Curadoria:** a capacidade de olhar para dez variações e identificar qual delas tem a composição, a iluminação e a expressão que funcionam para o objetivo específico. Isso não é instinto: é repertório aplicado. E é a habilidade humana que nenhuma IA substitui nesse fluxo.

**Direção criativa:** saber o que você quer e conseguir comunicar isso em termos que a ferramenta processa. Isso inclui vocabulário técnico de fotografia, clareza sobre o objetivo da imagem, e a capacidade de reconhecer quando o resultado está ou não no caminho certo.

A aula fecha com Ruan demonstrando que resultados profissionais não requerem conhecimento técnico de fotografia convencional, mas requerem o vocabulário fotográfico suficiente para comunicar intenção à IA, a capacidade de fazer curadoria com clareza de objetivo, e a disposição de seguir um processo em vez de aceitar a primeira saída.
## Coloque em prática

Selecione entre 10 e 15 fotos suas (ou de alguém que queira testar) com diversidade de ângulos e expressões. Exporte em resolução de 1200-1300px. Acesse o Freepik e treine um Personagem no modo rápido para começar. Enquanto o treinamento ocorre, construa um mood board no Freepik Spaces com três a cinco referências visuais do estilo de fotografia que você quer. Envie uma dessas referências ao Gemini e peça a descrição técnica detalhada. Use essa descrição como base do seu prompt no Space, substituindo a pessoa da referência pelo seu Personagem. Gere ao menos dez variações e selecione as três melhores. Para as três selecionadas, teste a troca de rosto com a foto real do sujeito no ângulo mais próximo do enquadramento gerado. Documente o que funcionou e o que não funcionou em cada passo.
