# Erros, mitos e limitações da geração de imagens

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os seis erros clássicos mais recorrentes na geração de imagens com IA desde 2022
- Distinguir cinco mitos frequentes sobre IA generativa das limitações técnicas reais dos modelos
- Aplicar a metodologia Double Diamond ao fluxo de geração de imagens com IA
- Reconhecer as três limitações estruturais dos modelos atuais e como contorná-las
- Estruturar um briefing antes de abrir qualquer ferramenta de geração
## Erro 1: Gerar sem função e sem canal

O primeiro erro, e o mais frequente desde 2022, é abrir a ferramenta e começar a gerar imagens antes de definir para que serve a imagem e onde ela vai ser usada. Esse erro acontece porque a maioria das pessoas não percebe que a definição de função e canal não é parte do prompt: é a etapa que vem antes do prompt.

A analogia que Ruan usa para explicar isso é o gênio da lâmpada. Se você pede ao gênio "eu quero um milhão", ele entrega um milho gigante. Ele não interpretou errado: interpretou literalmente o que você disse. A IA funciona da mesma forma. Ela é um sistema estatístico que responde ao que recebe com precisão literal. Vagidade no input gera entropia no output. Quanto menos intenção no pedido, mais aleatório e genérico é o resultado.

O "canal" aqui não é só plataforma: inclui o formato da imagem (quadrado para feed, vertical para stories, horizontal para banner), o contexto em que ela vai aparecer, e a mensagem que ela precisa comunicar. Definir isso antes de abrir a ferramenta não é burocracia: é o que garante que você vai gerar com intenção e não com sorte.

O fluxo recomendado é criar uma pasta de projeto, escrever o briefing ali dentro (objetivo da campanha ou peça, canal, formato, emoção que precisa provocar), e só depois iniciar a conversa com a ferramenta de geração. Esse briefing pode ser em texto simples, não precisa ser um documento formal.
## Erro 2: Prompts vagos e genéricos sem controle de expectativa

Prompts vagos não são erros em si: são erros quando a expectativa é de resultado preciso. Um prompt vago abre o espaço de possibilidades para a IA: ela pode trazer qualquer coisa conhecida pelos seres humanos que passou pelo treinamento, dentro da palavra-chave usada. Quanto mais vago o prompt, maior a entropia do resultado.

Isso pode ser útil quando o objetivo é explorar caminhos, criar um mood board inicial ou descobrir possibilidades visuais para uma campanha. Nesses casos, gerar muitas imagens diferentes com prompts vagos é parte legítima do processo. O erro acontece quando se usa um prompt vago esperando um resultado específico, sem documentar o que funcionou e sem refinar a partir dos resultados.

A solução não é escrever prompts longos. É escrever prompts claros. Clareza não depende de tamanho: depende de intenção e vocabulário visual. Um prompt de uma palavra pode ser mais preciso do que um parágrafo mal construído se a palavra escolhida for exata.
## Erro 3: Delegar o olhar para a IA

A IA não tem olhar. Ela tem estatística. Quando você coloca palavras, ela traduz essas palavras em pixels. Se você direciona, ela tenta traduzir o que você direcionou. Se você não fala, ela não traduz o que você não disse. E às vezes ela traduz as entrelinhas do que você disse: um objeto aparece porque estava no contexto das palavras, não porque você pediu explicitamente.

Sensibilidade para luz, para enquadramento, para ângulo, para equilíbrio de elementos, para espaços vazios e forma e contraforma: isso é o ser humano que tem. Delegar essas decisões para a IA produz imagens que são estatisticamente corretas mas visualmente sem direção. O resultado fica mecânico porque a IA não tem sensibilidade orgânica: ela tem padrões aprendidos de imagens existentes.

Isso não significa que a IA não pode contribuir para essas decisões. Significa que quem dirige é você. Você é o curador e a curadora das imagens que gera. A IA é o sistema que executa. A sensibilidade estética não é uma função que você delega: é uma função que você exerce ao escolher, refinar e descartar.
## Erro 4: Aceitar a primeira saída

Aceitar a primeira saída não é um erro absoluto: se você só precisa de uma imagem rápida para um uso simples, a primeira saída pode ser ótima. O erro acontece quando o objetivo é um resultado refinado e você para na primeira geração porque parece boa o suficiente.

Gerar mais imagens é barato em termos de tempo e custo, e a diferença entre a terceira e a décima geração pode ser enorme. Além disso, gerar muitas variações é parte do processo de design: você precisa de opções para poder escolher a melhor.

A metodologia que Ruan recomenda para esse processo é o Double Diamond, do Design Council do Reino Unido. Ela tem quatro fases:

1. **Descoberta:** você expande possibilidades. Gera muitas imagens com caminhos diferentes, vai amplo.
2. **Definição:** você afunila. Seleciona as melhores dentre o que gerou.
3. **Desenvolvimento:** você refina as selecionadas. Gera mais variações a partir delas, testa direções específicas.
4. **Entrega:** você escolhe as melhores dentre todas as que foram desenvolvidas.

Esse processo não é burocrático: é a diferença entre chegar num resultado refinado ou ficar no mediano. A mesma metodologia usada por startups no Lean Startup (prototipar, validar, escalar) vem das raízes do design. Ela se aplica a texto, imagem, vídeo, arquitetura, produto.

Aceitar a primeira saída é pular da fase de Descoberta direto para a Entrega. Você não refinou, não explorou alternativas, não sabe se havia algo melhor.
## Erro 5: Não fixar seed e não documentar o setup

Seed é um parâmetro que ainda é pouco usado, mas que é muito útil para quem trabalha com geração de imagens de forma sistemática. No Midjourney, por exemplo, o seed define o ponto de partida aleatório da geração. Usar o mesmo seed com o mesmo prompt produz resultados consistentes e reproduzíveis.

Mas mesmo quando o seed não está disponível, existe um princípio equivalente: documentar o setup. Isso significa:

- Guardar o prompt que funcionou
- Anotar quais palavras-chave tiveram mais impacto
- Testar palavras-chave em isolamento para saber o peso que cada uma tem no resultado
- Organizar isso por projeto, em uma pasta, em uma tabela de palavras-chave

O erro é gerar uma vez, dar certo, e partir para outro prompt sem guardar nada. Da próxima vez que você precisar de algo similar, vai ter que começar do zero. Profissionais que escalam o uso de IA criam suas próprias bibliotecas de palavras-chave, testadas e documentadas por projeto.

A estrutura de prompt que a Overlens usa divide o prompt em áreas: contexto inicial, sujeito, ambiente, ações, fotografia. Cada área tem suas palavras-chave testadas. Isso é a documentação de setup na prática.
## Erro 6: Alterar tudo ao mesmo tempo e avaliar fora de contexto

Quando um prompt não traz o resultado esperado, existe uma tentação de apagar tudo e escrever um prompt completamente novo. Isso é ineficiente porque você não sabe qual parte do prompt estava errada. O que funciona melhor é isolar variáveis: identifica qual elemento está errado (o sujeito? a iluminação? o enquadramento? o ambiente?) e altera só esse elemento, mantendo o resto fixo.

Isso é metodologia científica aplicada à geração de imagens. Ao alterar uma variável por vez, você aprende o que cada elemento do prompt contribui para o resultado. Com o tempo, você constrói um mapa de pesos por palavra-chave que nenhuma trilha pode te dar pronto, porque depende da ferramenta e do momento.

O segundo erro desta categoria é avaliar a imagem fora do contexto real de uso. A imagem parece ótima na ferramenta, mas quando você coloca no feed, no site ou no material impresso, percebe que não funciona. A avaliação precisa acontecer sempre no contexto: simula onde a imagem vai aparecer antes de aprovar.

Isso volta ao briefing: quando você define função e canal antes de gerar, já tem o contexto de avaliação na cabeça enquanto olha para os resultados.
## Mito 1: IA substitui diretores de arte, fotógrafos e designers

Esse mito tem uma parte verdadeira e uma parte errada. A parte verdadeira: a IA já está substituindo algumas funções específicas em alguns contextos. A Overlens já passou por isso internamente: tarefas que eram feitas por pessoas ou parceiros passaram a ser feitas com IA, e os contratos foram encerrados porque não fazia mais sentido pagar pelo que a ferramenta faz de graça.

A parte errada: o que substitui não é a IA isolada. São pessoas que usam IA em nível avançado. E o que a IA não substitui é o ato de criar com intenção, fazer curadoria, tomar decisões estéticas dentro de contexto de marca, e adaptar resultados a objetivos específicos.

O que está acontecendo na prática é uma evolução das profissões. Ruan usa o conceito de "designer nexialista" (também chamado de "designer orquestrador" ou "builder full stack"): alguém que domina tanto a camada visual quanto a funcional, que sabe construir produto do início ao fim e que usa IA como ferramenta dentro desse processo.

O diferencial não está em saber usar a ferramenta: está em saber o que fazer com o que a ferramenta produz. A imagem é um asset. O que você faz com esse asset, como ele encaixa numa narrativa, num produto, numa campanha: isso é humano.
## Mito 2: Qualquer pessoa faz imagem profissional com IA

Esse mito está se tornando verdade. Ruan discorda da framing de "mito" aqui: ele acredita que qualquer pessoa já consegue fazer imagens visualmente boas com IA hoje. A ferramenta toma muitas das decisões de composição, enquadramento e iluminação automaticamente.

O que muda é o que vem depois. Qualquer pessoa pode gerar uma imagem visualmente boa. Nem toda pessoa consegue escolher qual imagem faz sentido dentro de um contexto de marca, campanha ou canal. Isso é curadoria. E curadoria requer repertório: você precisa ter referências visuais suficientes para reconhecer o que é bom para aquele contexto específico, não só o que é tecnicamente bem gerado.

A diferença entre quem usa IA no nível básico e quem usa no nível profissional não está no acesso à ferramenta: está no repertório, na inteligência visual e na capacidade de tomar decisões criativas dentro de contexto.
## Mito 3: IA cria originalidade por padrão

A IA não é uma copiadora e também não é uma criadora original no sentido humano. Ela traduz a linguagem visual humana para números e gera combinações estatisticamente prováveis a partir desse mapeamento. O resultado é único numericamente (cada imagem é gerada pixel a pixel, não buscada da internet), mas visualmente apresenta padrões que já existem no repertório humano.

A questão da originalidade depende do que você considera original. Se originalidade é algo que nunca existiu em nenhuma forma anterior, a IA raramente chega lá sozinha. Se originalidade é algo novo dentro de um contexto específico, a IA consegue contribuir significativamente.

Para aumentar o grau de originalidade, existem mecanismos técnicos. No Midjourney, o parâmetro Weirdness (ou Strange) controla o nível de estranheza do resultado. Com Weirdness baixo, a IA produz os estilos e composições mais aprovados estatisticamente dentro da ferramenta: resultados seguros, previsíveis e esteticamente agradáveis para a maioria. Com Weirdness alto, a IA começa a tomar caminhos menos prováveis, gerando imagens que quebram os padrões estatísticos e trazem graus de estranheza que podem ser criativamente úteis.

O equivalente conceitual nas LLMs é a temperatura: aumentar a temperatura faz a IA alucinar, traçar caminhos menos seguidos estatisticamente, gerar coisas mais imprevisíveis e potencialmente mais originais.

A parte que depende do humano aqui é direcionar essa exploração. Pedir para a IA trabalhar num processo combinatório de possibilidades (dois ou mais elementos que raramente aparecem juntos, combinados de formas aleatórias) e fazer curadoria dos resultados é o que transforma a capacidade combinatória da IA em originalidade usável.
## Mito 4: Basta pedir e ajustar no feeling

Esse mito também está se tornando verdade. As IAs de geração de imagem estão cada vez melhores em interpretar o que os humanos consideram esteticamente agradável, e o processo de geração está ficando mais fácil. Se você quiser resultados genéricos que agradam a maioria, gerar por feeling funciona e vai funcionar cada vez melhor.

O problema é que gerar imagem boa não é o diferencial. O diferencial é o que você faz com ela. Beleza isolada não implica coerência de marca, mensagem precisa, composição adequada ao canal ou consistência com a identidade visual. Essas são decisões que o feeling não resolve: precisam de clareza de briefing, de referências e de curadoria intencional.

Design é uma profissão de tomada de decisão. Designers estudam para serem bons tomadores de decisão: decisões estéticas, de posicionamento, de caminhos criativos, de ativos visuais, de como a marca vai ser percebida. A IA não substitui essa capacidade de decisão. Ela acelera a execução. Mas quem decide é quem tem clareza de intenção.
## Mito 5: A IA copia imagens existentes

Esse mito confunde o processo de treinamento com o processo de geração. Durante o treinamento, a IA aprendeu padrões a partir de bilhões de imagens existentes. Durante a geração, ela não busca nem cola nenhuma imagem: ela gera pixel a pixel uma imagem nova, usando os padrões aprendidos como base estatística.

Numericamente, cada imagem gerada é única. Visualmente, pode conter padrões reconhecíveis de estilos, composições ou referências que existem no mundo real, porque o modelo aprendeu esses padrões. Mas não é uma réplica: é uma interpolação.
## Limitação 1: Falta de contexto temporal e cultural

A IA que você usa hoje é uma rede neural fixa. Ela não aprende em tempo real: ela recebe dados durante o uso, mas esses dados são usados para treinar o próximo modelo, não para atualizar o modelo atual. O modelo atual é um pacote fechado de parâmetros que pode navegar na internet para buscar informações contextuais, mas não incorpora esse conhecimento permanentemente.

Isso significa que:

- A IA é muito boa para gerar coisas consolidadas culturalmente. Quanto mais um elemento apareceu nos dados de treinamento, melhor ela gera. Uma Coca-Cola, por exemplo, ela representa com precisão quase fotográfica porque esse produto passou por bilhões de imagens no treinamento.
- A IA é ruim para gerar coisas novas culturalmente: tendências visuais emergentes, produtos lançados depois do cutoff do treinamento, referências culturais muito locais ou muito recentes.
- Para elementos novos, você precisa contextualizar a IA: descrever o produto, explicar o que é, fornecer imagens de referência. Sem contextualização, ela vai pegar as palavras do prompt e gerar a coisa mais próxima que tem em seus padrões.

A estética evolui mais rápido do que os ciclos de treinamento dos modelos. Isso cria uma defasagem: o modelo tende a gerar o que era visualmente relevante quando foi treinado, não necessariamente o que é relevante agora.
## Limitação 2: Emoção imitativa sem ancoragem vivida

A IA consegue gerar imagens com emoções. Mas a qualidade da representação emocional é limitada por um problema técnico: a IA não sente emoções, não tem inconsciente, não interpreta símbolos e signos da forma como o cérebro humano interpreta. Ela imita os padrões visuais associados a emoções que aprendeu de imagens e de descrições.

O problema é que o cérebro humano detecta microexpressões e detalhes sutis em rostos com alta precisão. Uma emoção levemente errada num rosto gera estranheza imediata, mesmo que o observador não saiba dizer o que está errado. A IA, sem esse senso de estranheza incorporado, às vezes entrega rostos que estão visualmente quase certos mas que provocam um desconforto difuso.

A solução é direcionar a emoção com precisão: em vez de "feliz", descrever a emoção com mais especificidade (sorriso contido, expressão de surpresa discreta, olhar de concentração). Quanto mais específico o vocabulário emocional no prompt, mais próximo o resultado.

Isso tende a melhorar com os modelos futuros. Dependendo de quando você estiver assistindo esta aula, a limitação pode já ter diminuído. Mas enquanto existir, é preciso direcionar com mais atenção do que em outras categorias visuais.
## Limitação 3: Criatividade verdadeiramente inédita é rara

Essa limitação não é exclusiva da IA: é uma limitação que a maioria das pessoas enfrenta porque não tem clareza sobre o que é criatividade do ponto de vista técnico.

A pesquisadora Margaret Boden (1936-2023), professora de ciências cognitivas na Universidade de Sussex e uma das fundadoras do campo de inteligência artificial e criatividade computacional, dividiu a criatividade em três tipos:

**Criatividade combinatória:** gerar algo novo a partir de combinações de ideias já existentes. É o que a IA faz naturalmente. Duas ideias aparentemente desconexas, combinadas de formas novas, podem gerar resultados que nunca existiram antes. A IA pode ser direcionada a trabalhar explicitamente nesse modo: você define os dois ou mais lados da combinação, ela gera variações, você faz curadoria. O processo combinatório é potente para descoberta criativa.

**Criatividade exploratória:** investigar profundamente um espaço conceitual (um conjunto de regras, estilos e linguagens) e encontrar novas possibilidades dentro dele. A IA também consegue fazer isso, mas precisa ser direcionada explicitamente para o espaço conceitual que você quer explorar. Prompts exploratórios para uma LLM primeiro, que depois são usados como entrada na ferramenta de imagem, ajudam a estruturar essa exploração.

**Criatividade transformacional:** mudar as próprias regras do espaço conceitual. Isso é o mais raro e o mais difícil para a IA, porque exige romper com os padrões estatísticos aprendidos. É aqui que o Weirdness e a temperatura entram: forçar a IA a tomar caminhos menos prováveis aumenta a chance de resultados transformacionais, mas a qualidade e a usabilidade caem. A curadoria humana fica ainda mais importante.

A conclusão de Boden é que criatividade não é mágica: é processo. E a IA pode participar de processos criativos sofisticados desde que você a direcione com intenção, não simplesmente peça uma imagem e espere originalidade por acaso.
## O diferencial real: processo, repertório e curadoria

O que separa resultados mediocres de resultados precisos não é a ferramenta. A mesma IA que os grandes estúdios usam está disponível para qualquer pessoa. A diferença está em três lugares:

**Repertório:** quanto de referência visual você tem. Quem teve contato com fotografia, pintura, design, cinema, arquitetura reconhece o que é bom dentro de cada contexto. Isso não é opcional: é a base da curadoria.

**Processo:** saber quando expandir (descoberta, gerar muito), quando afunilar (definição, selecionar os melhores), quando refinar (desenvolvimento, gerar variações dos selecionados) e quando entregar. Pular etapas é pular resultado.

**Curadoria:** a capacidade de escolher qual imagem faz sentido dentro de um contexto específico. Isso não é instintivo: é construído com repertório e prática.
## Coloque em prática

Antes do próximo projeto com IA, escreva um briefing com três respostas: qual é a função da imagem, em qual canal ela vai ser usada e qual sensação ela precisa provocar. Escreva isso antes de abrir qualquer ferramenta. Com o briefing em mãos, gere pelo menos dez variações antes de escolher. Documente o prompt que funcionou melhor e as palavras-chave que mais influenciaram o resultado.

Para testar a limitação da negação, experimente pedir a qualquer modelo de difusão pura (não multimodal) "uma savana sem elefante" e observe o resultado. Compare com "uma savana vazia" e registre a diferença de precisão. Esse experimento ilustra o princípio de focar no que você deseja, não no que quer evitar.
