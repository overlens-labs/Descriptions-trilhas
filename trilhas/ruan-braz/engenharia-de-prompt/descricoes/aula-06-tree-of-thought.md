# Tree of Thought: Fazendo a IA Explorar Vários Caminhos ao Mesmo Tempo

**Tempo estimado de leitura:** 17,5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o que é Tree of Thought (TOT) e no que ela difere do Chain of Thought
- Aplicar a técnica de multipersonas para simular uma equipe com papéis distintos dentro de um único prompt
- Distinguir entre Zero Shot, Few Shot e Tree of Thought usando o mesmo caso de uso como referência comparativa
- Estruturar um prompt que instrui a IA a gerar uma discussão entre especialistas com critérios definidos
- Reconhecer como o contexto fornecido muda radicalmente o tipo de resposta que a IA entrega
- Executar prompts com narrativa e storytelling para direcionar o comportamento da IA de forma orgânica
## O que é Tree of Thought

Tree of Thought, ou árvore de pensamentos, é uma técnica de engenharia de prompt onde você instrui a IA a explorar vários caminhos de raciocínio ao mesmo tempo, em paralelo, ao invés de seguir uma única sequência linear. Se o Chain of Thought é uma linha reta com etapas numeradas, o Tree of Thought é uma árvore: o tronco é o problema central, e os galhos são as diferentes perspectivas, abordagens ou personagens que vão trabalhar sobre ele simultaneamente.

O nome pode aparecer tanto no singular (Tree of Thought) quanto no plural (Tree of Thoughts), e ambas as formas são usadas na literatura técnica. O sentido é o mesmo: múltiplas linhas de raciocínio ativas ao mesmo tempo, cada uma contribuindo com sua própria visão para o resultado final.

A técnica é especialmente poderosa quando você precisa de avaliações multi-dimensionais. Um problema como "qual é o melhor nome para um estúdio de design" não tem uma resposta técnica única. Ele envolve estética, linguagem, estratégia de marca, viabilidade jurídica e impacto no público. Nenhuma perspectiva isolada dá conta de tudo. O TOT resolve isso criando personagens que representam cada uma dessas perspectivas e os coloca para trabalhar sobre o mesmo problema ao mesmo tempo.

A metáfora da árvore é precisa: o tronco é o problema, os galhos são os diferentes raciocínios possíveis, e as folhas são as respostas que cada galho produz. Em uma árvore real, todos os galhos crescem a partir do mesmo tronco, mas em direções diferentes, com formas diferentes, sem que um interfira no outro. No TOT, o mesmo acontece: cada perspectiva parte do mesmo ponto de origem (o prompt central) mas segue sua própria linha de raciocínio, com seus próprios critérios e sua própria lógica interna.
## Revisando o Ponto de Partida: Zero Shot e Few Shot

Antes de mostrar o TOT em ação, Ruan recapitula as técnicas anteriores usando o mesmo caso de uso, o que torna a comparação muito clara.

O caso de uso é encontrar um nome para um estúdio de design.

Com Zero Shot, o prompt é simples e direto: "Me ajude a encontrar um nome para o meu estúdio de design. Gere 10 nomes." Sem contexto adicional. A IA vai ao que ela considera razoável: lúmina, forma, nexo, aura, síntese, vértice, estro, traço, emes, fluxo. São nomes genéricos de design. Funcionais, mas sem direção específica.

Com Few Shot, você acrescenta contexto antes do pedido. Ruan demonstra com: "Meu conceito é filosófico. Gosto de ir em um caminho aprofundado, me inspiro muito no conhecimento humano, no renascimento, nos grandes filósofos. E crio projetos de design com um conceito muito forte." Com esse contexto, a IA vai em outra direção completamente: traz Ellen, Simbalem, Axioma, Hyperion, Phronesis (nome que o próprio Ruan considerou para sua agência antes de focar na Overlens), Maiôtica (referência à maiêutica de Sócrates), Artefato, Aleteia, Kairos.

O contraste é imediato. Com Few Shot, a IA percorreu a prateleira certa da biblioteca porque você indicou a direção. Os nomes têm carga filosófica real, referência histórica e profundidade conceitual.

Para reforçar ainda mais o impacto do contexto, Ruan faz uma terceira variação com o mesmo pedido de nomes, mas muda o contexto por completo: "Meu estúdio é extremamente prático. Focamos no minimalismo. Design inspirado pela Apple." O resultado é radicalmente diferente: Pure, Forma, Sense, Studio One, Lume, Núcleo, Clear, Prisma, Soma. Nomes curtos, precisos, funcionais, no estilo Apple. Mesmo modelo, mesma tarefa, contexto diferente, resultado diferente.

Isso demonstra o que Ruan explica com a metáfora da biblioteca: você não está mudando a biblioteca, está dizendo ao guardião para ir a outra coluna, a outra prateleira. O contexto é a instrução de navegação.

Essa comparação é útil para perceber por que o contexto é tão crítico em qualquer prompt. A IA não inventa informação do nada: ela navega em um espaço de conhecimento enorme e escolhe o caminho que você indicou. Se você não indicou nenhum caminho, ela escolhe o mais óbvio, o mais genérico, o centro da biblioteca. Se você indica uma direção clara, ela vai direto para as prateleiras mais relevantes para o seu problema. Quanto mais específico o contexto, mais precisa a navegação.
## Aplicando Chain of Thought ao Caso de Naming

Antes de chegar ao TOT, Ruan mostra como o COT funciona aplicado ao mesmo caso de naming filosófico. O prompt numerado que ele constrói:

1. Registre os 10 conceitos filosóficos mais influentes do mundo.
2. Trace uma relação desses conceitos com o meu estúdio de design.
3. Gere nomes inventados a partir do conceito principal.
4. Avalie os nomes gerados nos seguintes critérios: leiturabilidade, legibilidade, estética, potencial de registro do nome e memorabilidade.
5. Caso nenhum dos nomes atinja pelo menos 8 de 10 na nota geral, gere mais 10 nomes e repita o processo até encontrar um nome 8 de 10.

Ruan destaca que esse prompt exige repertório. Saber que critérios como "potencial de registro" e "memorabilidade" existem e são relevantes para naming não é trivial. Isso vem de experiência e estudo. Engenharia de prompt não substitui domínio de área, ela amplifica.

Esse ponto é retomado explicitamente durante a aula como uma das lições mais importantes da trilha: quanto mais você sabe sobre uma área, melhor são seus prompts para essa área. Um designer que domina teoria de marca vai escrever critérios de avaliação muito mais precisos do que alguém que nunca estudou branding. A IA executa o que você pede; a qualidade do pedido depende do que você sabe. Isso significa que aprender engenharia de prompt é um investimento multiplicador do seu conhecimento existente, não uma substituição de conhecimento.

A execução ao vivo mostra a IA seguindo cada etapa com precisão. Primeiro, ela lista os 10 conceitos filosóficos mais influentes: Logos, Aletheia, Areté, Élan Vital, Idealismo, Dialética, Sublime, Zeitgeist, Simulacro. Em seguida, passa para a etapa dois e traça a relação de cada conceito com um estúdio de design, explicando como cada conceito filosófico se conecta com princípios de design, identidade visual e processo criativo. Depois gera nomes inventados a partir dos conceitos que selecionou como mais relevantes, filtrando para trabalhar apenas com os seis que julgou mais promissores, faz a avaliação com os critérios fornecidos e entrega o resultado final, indicando Aletheon como o nome de maior pontuação na avaliação.

Ruan observa que a IA tomou uma decisão autônoma ao filtrar os dez conceitos para seis antes de gerar os nomes. Não foi instruída a fazer esse filtro: ela julgou que seria mais eficiente trabalhar com um número menor de conceitos antes de inventar os nomes. Esse tipo de decisão autônoma é comum em modelos mais avançados e mostra que, ao definir um processo com COT, você ainda deixa espaço para a IA otimizar dentro de cada etapa. Você controla a sequência, mas a IA decide como executar cada passo da forma mais eficiente segundo sua própria avaliação.

Ruan observa que, nessa execução, a IA foi além do que foi pedido: ela avaliou critérios de estética que Ruan não havia descrito em detalhes. Isso abre um caminho importante: depois de receber o resultado, você pode questionar a IA sobre como ela avaliou cada critério específico, pedindo a justificativa por trás de cada nota. Esse diálogo posterior é parte integrante do processo de prompt bem executado.
## O que é Tree of Thought na Prática

Agora Ruan apresenta o TOT de forma direta: ao invés de a IA seguir etapas em sequência como um indivíduo, você instrui a IA a agir como uma equipe. Vários papéis, simultâneos, cada um com seu ângulo de análise. A IA simula a dinâmica de um grupo de trabalho multidisciplinar.

A instrução que ele constrói no prompt é:

"A partir de agora, você vai agir como uma equipe de criação de nomes. Cada pessoa nessa equipe tem um papel e você vai gerar uma discussão de brainstorm entre as pessoas dessa equipe."

Em seguida, ele define os papéis:

- 1. Designer: avalia a estética do nome.
- 2. Linguista: avalia a semiótica do nome.
- 3. Especialista em registro de marcas: avalia a disponibilidade e o potencial de registro da marca.
- 4. Estrategista: avalia o impacto do nome no público.

Após definir a equipe, ele acrescenta o contexto do público ideal:

"Meu perfil ideal de cliente são médias empresas com faturamento acima de 10 milhões por ano. Eu tenho uma abordagem profunda que demora alguns meses para ser executada. Por isso, preciso de clientes que estejam preparados para essa imersão, tanto financeiramente quanto em disponibilidade de tempo, equipe e recursos."

Esse contexto de público não é decorativo. Ele determina como o estrategista vai avaliar o impacto do nome: um nome adequado para PMEs de nicho premium é diferente de um nome para startups de tecnologia de massa. A IA usa esse contexto para calibrar cada avaliação.
## A Discussão que a Equipe Gera

Após enviar o prompt, a IA começa a simular a discussão entre os membros da equipe. O exemplo que aparece ao vivo usa o nome "Ars Magna" como objeto de análise:

- O Designer avalia: nome elegante, remete ao latim e à tradição do conhecimento profundo.
- O Linguista contextualiza: significa "a grande arte", inspirado no trabalho de Ramon Lu, filósofo medieval que buscava um método universal de conhecimento.
- O Especialista em Registro de Marcas informa: poucas marcas registradas com esse nome no Brasil, mas há menções literárias. Boa chance de registro como segunda palavra ou com domínio diferenciado.
- O Estrategista conclui: o nome transmite exclusividade, sofisticação e um processo altamente conceitual.

Cada perspectiva traz uma informação que as outras não teriam. Juntas, elas constroem uma avaliação completa do nome. Ruan sinaliza que esse processo ainda pode ser muito melhorado: é possível dar instruções mais detalhadas para cada papel, definir critérios específicos de avaliação para cada especialista, instruir os personagens a discordarem entre si e apresentarem contra-argumentos, e pedir que a equipe chegue a um consenso com justificativa detalhada.

Ruan também menciona que, depois de receber esse tipo de resposta, você pode continuar o diálogo de forma produtiva. Se você não gostou de um nome específico, pode dizer para a IA qual foi o critério que não satisfez do seu ponto de vista. Por exemplo: "Esse nome que o designer aprovou esteticamente me parece muito difícil de pronunciar para clientes brasileiros. Qual é a opinião do linguista sobre isso?" A IA vai retomar os papéis e gerar uma nova rodada de análise com esse filtro adicional. O processo é iterativo e dialógico, não uma execução única e fechada.

Outro detalhe importante sobre esse exemplo específico: Ruan ressalta que a análise do especialista em registro de marcas diz que há "boa chance" de registro, mas que você precisaria checar no INPI e fazer o processo formal. A IA dá insights e possibilidades, não certezas jurídicas. Saber o que a IA pode e não pode garantir é parte fundamental do uso responsável da técnica.
## Exemplo Real: Storytelling com Tree of Thought

Ruan compartilha um exemplo prático que ele mesmo executou, usando uma abordagem que combina TOT com storytelling narrativo. O prompt que ele havia escrito anteriormente:

"Você é um designer inteligente que quer criar um nome para uma startup de criação de brand systems. Você é exigente e quer um nome tão bom quanto das maiores startups do mundo. Para isso, você contratou um profissional de naming e sua equipe extremamente capacitada para criar o nome perfeito. Vocês iniciam uma dinâmica. Você, o profissional e mais duas pessoas da sua equipe. Você explica seu contexto e a dinâmica começa. Vocês são obcecados e vão longe, explorando centenas de nomes para encontrar o ideal."

Esse é um prompt que usa narrativa como estrutura de instrução. Ao criar um personagem (o designer exigente), ao criar um contexto (a contratação de especialistas), ao estabelecer uma dinâmica (a sessão de naming) e ao definir um critério de qualidade (nível das maiores startups do mundo), o prompt instrui a IA de forma muito mais orgânica do que uma lista numerada. A IA mergulha na ficção e a usa como estrutura de raciocínio.

O prompt que Ruan havia escrito como output inicial da IA foi:

"Como vocês sabem, estamos criando uma empresa focada em Brand Systems, algo que vai além do design visual tradicional. Queremos ser referência em criar sistemas de marca completos, escaláveis e com personalidade única. Nosso desafio é encontrar um nome que transmita inovação, seja memorável, funcione globalmente, tenha domínio .com, capture a essência de construir marcas como sistemas vivos."

A IA gerou uma personagem chamada Sarah, especialista em naming, que conduziu a sessão. Depois, Ruan (como "fundador" dentro do roleplay) deu feedback: "Interessantes sugestões, mas ainda não chegamos lá. Quero algo no nível de Stripe ou Square. Simples, mas poderoso. Vamos continuar explorando. O que acham de palavras relacionadas à arquitetura de sistemas?" A IA continuou o roleplay, respondeu à pergunta, e o processo de naming seguiu até chegar a nomes de alta qualidade.

Ruan destaca que esse prompt era relativamente simples e poderia ser muito mais detalhado. Mas mesmo assim produziu resultados expressivos, porque o storytelling direciona o comportamento da IA de forma eficaz. A técnica de criar uma narrativa, um contexto e uma dinâmica é reconhecida e muito usada em engenharia de prompt avançada.

A diferença entre esse prompt narrativo e um prompt com lista numerada é o tom de imersão. Quando você instrui a IA com "você é um designer exigente que contratou uma equipe capacitada", você não está apenas atribuindo papéis: está criando uma ficção funcional que a IA usa como estrutura de raciocínio. A IA não precisa de uma lista de critérios explícitos porque o storytelling já contém os critérios implicitamente. Um designer "exigente" que quer algo "no nível de Stripe ou Square" já carrega um conjunto de padrões estéticos, de simplicidade, de memorabilidade e de sofisticação que a IA sabe interpretar.

Isso não significa que o prompt narrativo é superior ao prompt numerado em todos os casos. São abordagens diferentes para contextos diferentes. O prompt numerado é mais controlado e previsível; o prompt narrativo é mais fluido e orgânico, mas depende mais da capacidade da IA de interpretar o espírito da narrativa corretamente. Para iniciantes, o prompt numerado é mais seguro. Para profissionais com experiência em como a IA interpreta linguagem, o storytelling pode produzir resultados mais ricos e naturais.

Ruan encerra a demonstração do exemplo histórico observando que o prompt que ele havia escrito era "desleixado" do ponto de vista técnico, mas mesmo assim produziu nomes de alta qualidade. Isso reforça uma mensagem recorrente na trilha: a técnica importa, mas o contexto e a clareza de intenção importam tanto quanto a estrutura formal do prompt.
## A Diferença Central entre COT e TOT

Ruan retoma a distinção entre as duas técnicas de forma explícita, usando os exemplos que foram demonstrados ao longo da aula:

No Chain of Thought, a IA percorre etapas em sequência, como um indivíduo que segue um roteiro: primeiro faz isso, depois aquilo, depois aquilo outro. É linear, controlado, previsível.

No Tree of Thought, a IA assume múltiplos papéis ao mesmo tempo. O designer avalia estética enquanto o linguista avalia semiótica enquanto o especialista avalia registro. Não é uma fila de tarefas: é um painel de especialistas que trabalham em paralelo sobre o mesmo objeto.

A consequência prática é que o TOT é mais adequado para problemas que exigem avaliação multidimensional. Naming é um exemplo perfeito porque envolve dimensões que não se reduzem umas às outras: um nome pode ser esteticamente belo mas semanticamente fraco; pode ser fácil de registrar mas difícil de memorizar; pode ter ótima memorabilidade mas impacto estratégico fraco para o público-alvo específico. O TOT captura todas essas dimensões simultaneamente.
## Prompts Desleixados e o Que Eles Ensinam

Ruan faz um comentário honesto sobre seus próprios prompts históricos que apareceram durante a aula: alguns deles eram "desleixados", construídos rapidamente, às vezes ditados em áudio, sem a estrutura cuidadosa que ele está ensinando. Mesmo assim produziram resultados úteis. Isso é parte da transparência didática que percorre toda a trilha.

Esse ponto é importante porque remove a pressão de perfeição que muitos iniciantes sentem ao tentar aplicar técnicas de engenharia de prompt pela primeira vez. Engenharia de prompt é uma prática iterativa. Você não precisa de um prompt perfeito na primeira tentativa. Um prompt "desleixado" que usa few shot com um toque de tree of thought já vai muito além de um zero shot. À medida que você executa, percebe o que faltou e ajusta nas próximas iterações.

Ruan menciona que uma de suas práticas habituais é rodar várias IAs ao mesmo tempo com prompts diferentes, enviando comandos em paralelo. Às vezes ele digita o prompt rapidamente, às vezes grava um áudio e manda diretamente. O foco é na velocidade de iteração e na comparação de resultados. Você não está esperando a resposta perfeita de uma IA: você está coletando várias respostas de ângulos diferentes e sintetizando o melhor de cada uma. Essa prática de paralelismo com múltiplas ferramentas é, em si mesma, uma aplicação informal de Tree of Thought: você está criando múltiplos galhos de raciocínio ao mesmo tempo, só que cada galho está sendo executado por uma IA diferente, e você faz a síntese.

Isso também demonstra que a técnica não exige infraestrutura especial. Você pode aplicar TOT abrindo abas diferentes no navegador, cada uma com uma IA e um papel distinto, copiando o contexto inicial e diferenciando apenas a perspectiva. Não precisa de automação, de N8N, de banco vetorial ou de qualquer configuração técnica. A versão mais simples da técnica é acessível para qualquer pessoa com acesso a duas ferramentas de IA gratuitas.
## Referências e Aprofundamento

Ruan informa que os links de referência das técnicas COT e TOT estarão disponíveis na descrição da aula. Ambas as técnicas foram criadas por pesquisadores e documentadas em artigos acadêmicos, e ele cita que a autoria e os estudos originais estarão acessíveis para quem quiser ir fundo. Isso é relevante para quem quer usar a nomenclatura corretamente em contextos profissionais ou acadêmicos, ou para quem quer aprender implementações mais sofisticadas das técnicas.

O Tree of Thought tem múltiplos exemplos documentados de implementação, incluindo variações com critérios de avaliação explícitos, árvores de decisão entre personagens e dinâmicas de debate estruturado. Ruan deixa claro que o que foi mostrado na aula é uma versão simplificada, funcional e didática da técnica, mas que daria para destrinchar muito mais. As implementações mais avançadas de TOT incluem múltiplas rodadas de deliberação entre os personagens, mecanismos de votação, hierarquias de decisão onde personagens com mais autoridade têm o voto final, e integração com ferramentas externas de pesquisa que cada personagem pode usar de forma independente.

Para o contexto desta trilha, voltada para criativos que usam IA no dia a dia de trabalho, o que foi ensinado é suficiente para resultados muito acima da média. A maioria dos profissionais de design, branding e comunicação visual que usa IA ainda opera no nível do zero shot. Quem domina few shot já está em vantagem. Quem domina COT e TOT está operando em um nível completamente diferente.
## Coloque em prática

Escolha um problema criativo que tenha pelo menos três dimensões distintas de avaliação. Pode ser escolher um nome para um projeto, selecionar uma paleta de cores para uma marca, definir a voz de comunicação de um cliente ou avaliar opções de formato para um portfólio. Monte uma equipe de especialistas no prompt: defina de dois a quatro papéis com funções diferentes e critérios específicos para cada um. Acrescente contexto de público e objetivo. Depois, execute o prompt e observe quais perspectivas trouxeram as informações mais valiosas. Por fim, compare o resultado com uma tentativa de zero shot no mesmo problema e documente a diferença de profundidade e utilidade.
