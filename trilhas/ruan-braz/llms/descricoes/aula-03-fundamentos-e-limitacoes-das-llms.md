# Fundamentos e Limitações das LLMs

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar como o peso de cada palavra em um prompt influencia a qualidade e o nível da resposta gerada
- Distinguir janela de contexto, memória, input length e output length como grandezas diferentes e independentes
- Reconhecer o papel do reasoning como capacidade distinta da janela de contexto na qualidade das respostas
- Aplicar estratégias práticas de gestão de contexto, organização de arquivos e estruturação de chunks para uso mais eficaz de LLMs
- Estruturar prompts com vocabulário técnico para elevar o nível do contexto e da resposta recebida

## A LLM como espelho: o nível da resposta reflete o nível do prompt

Antes de falar sobre limitações, é necessário estabelecer uma verdade fundamental que conecta os fundamentos técnicos da aula anterior com o uso prático das LLMs: a qualidade da resposta que você recebe reflete diretamente o nível do contexto que você oferece. A LLM funciona como um espelho. O espelho não cria uma nova realidade: ele reflete com mais clareza o que já existe. Se você traz um vocabulário básico e perguntas genéricas, o modelo vai operar dentro desse espaço semântico restrito e devolver respostas igualmente genéricas.

Para demonstrar isso de forma concreta, considere dois prompts sobre o mesmo tema, o design. No primeiro caso, o usuário escreve: "qual é o impacto do design". A resposta gerada é competente, bem estruturada, organizada em tópicos com exemplos de vida cotidiana, impacto social e cultural, impacto sistêmico. Para quem está começando a aprender sobre o assunto, é excelente. Mas é essencialmente um livro introdutório, uma resposta de primeiro nível que cobre o básico de forma ampla e superficial.

No segundo caso, o mesmo tema é abordado com um vocabulário completamente diferente: "quero saber qual é o impacto do design no mundo, como ele influencia a percepção das pessoas, como cria novos futuros, influencia também o zeitgeist". Uma frase, com um único acréscimo de vocabulário específico, muda completamente o nível da conversa. A palavra "zeitgeist", que significa "espírito do tempo" em alemão e carrega um peso filosófico e cultural muito denso, coloca o modelo em um registro totalmente diferente. A resposta passa da introdução para um nível que conecta teoria da gestalt, Wolfgang Köhler, o conceito de espirito do tempo de cada era e a forma como o design não apenas reflete mas cria os comportamentos culturais de cada período.

E ainda nessa segunda conversa, quando a pergunta avança para pedir que o modelo traga também "a teoria do Wolfgang Köhler baseada nos estudos", o nível sobe ainda mais. O modelo começa a trabalhar com os princípios gestálticos de proximidade, semelhança, figura e fundo, fechamento e continuidade, aplicados à percepção visual no design. Ele distingue que o todo é "diferente" da soma das partes (não "maior", como a citação popular incorretamente afirma) e discute como o layout, a hierarquia visual, o ritmo e a composição criam condições para que o pensamento se estruture de determinada forma.

A diferença entre os dois prompts não está no tamanho. Está no peso semântico das palavras escolhidas.

## Por que cada palavra do prompt tem peso técnico

Agora que você sabe que a LLM quebra todo o input em tokens, converte cada um em embeddings multidimensionais e aplica múltiplas cabeças de atenção para identificar as relações de relevância, fica claro por que o vocabulário que você usa no prompt importa de forma estrutural, não apenas estilística.

Quando o mecanismo de Multi-Head Attention processa um prompt, ele não trata todas as palavras de forma igual. A palavra "e" (uma conjunção) recebe um peso muito menor do que a palavra "zeitgeist" (um conceito específico com uma rede semântica densa). O nome "Wolfgang Köhler" recebe um peso muito maior do que o pronome "ele". A palavra "gestalt" ativa conexões com toda uma tradição teórica da psicologia da percepção, enquanto "visual" ativa conexões mais amplas e difusas.

Isso tem uma implicação direta: uma pessoa com pouco repertório escreve prompts compostos majoritariamente por palavras de baixo peso semântico, palavras genéricas que não ativam contextos específicos na rede. A distribuição de probabilidade resultante sobre os tokens de resposta fica espalhada de forma difusa entre muitas opções possíveis, e o modelo tende a convergir para respostas estatisticamente seguras, ou seja, respostas médias que funcionam para a maioria dos contextos sem se especializar em nenhum.

Uma pessoa com repertório denso insere palavras que têm pesos específicos e elevados, que ativam cabeças de atenção para contextos particulares, e o modelo converge para uma resposta muito mais precisa, profunda e contextualizada. O modelo não está "sendo mais inteligente" nesse segundo caso: está sendo melhor direcionado pelo input.

A mesma lógica se aplica a prompts curtos com palavras funcionais diferentes. "O que é design", "como funciona o design" e "por que o design importa" são três prompts de tamanho similar, mas cada um ativa padrões completamente diferentes na rede. A palavra "o que é" convoca definições e categorias. A palavra "como" convoca processos, métodos e mecanismos. A palavra "por que" convoca motivações, causas profundas e justificativas filosóficas. A distinção entre essas três perguntas é técnica, não retórica.

## A primeira grande limitação: a janela de contexto

Para usar LLMs com competência, você precisa distinguir com precisão três conceitos que são frequentemente confundidos entre si: janela de contexto, input length e output length. São três grandezas diferentes que operam em dimensões diferentes da interação com o modelo.

O **input length** (comprimento do input) é o tamanho máximo de uma única mensagem que você pode enviar ao modelo. Esse limite existe e é aplicado na interface: se você tenta enviar uma mensagem que excede o limite de input do modelo, a interface bloqueia o envio e informa que a mensagem é muito longa. Você precisa reduzir o tamanho antes de enviar.

O **output length** (comprimento do output) é o tamanho máximo de uma única resposta que o modelo consegue gerar. O ChatGPT-4o, por exemplo, tem um output limit de aproximadamente 4.096 tokens, o que equivale a cerca de 5.000 a 6.000 palavras dependendo da densidade do texto. O modelo mesmo mencionou isso durante uma demonstração na aula: quando foi solicitado a escrever um texto que atingisse o limite da sua janela de output, ele explicou exatamente esse limite e gerou o texto correspondente.

A **janela de contexto** é algo completamente diferente e mais abrangente do que os dois conceitos anteriores. Ela é o espaço total de tokens que o modelo usa como referência a cada nova resposta que gera. A janela de contexto é a soma de tudo: cada mensagem que você enviou na conversa, cada resposta que o modelo gerou, cada arquivo que você subiu, cada resultado de busca que um scraper trouxe para a conversa. Tudo entra para dentro da janela de contexto e influencia a geração de cada nova resposta.

A imagem mais precisa para assimilar o que é a janela de contexto é a de uma conversa ao vivo em tempo real. Enquanto a conversa está acontecendo, você se lembra de tudo que foi dito até agora e usa esse histórico como referência para o que vai dizer a seguir. À medida que a conversa avança e você produz mais tokens, os tokens mais antigos começam a sair da janela. Eles não desaparecem da tela, você ainda consegue ver o histórico completo, mas a IA deixa de considerá-los na geração das próximas respostas. É como se as primeiras partes da conversa ficassem invisíveis para ela. O modelo começa a "esquecer" o início à medida que o final da conversa expande além do limite da janela.

Uma forma de observar isso concretamente é perguntar diretamente ao modelo quanto da janela de contexto já foi utilizado. Na demonstração da aula, após poucas mensagens, o modelo reportou menos de 5% da janela de contexto utilizada. Depois de gerar um texto longo que se aproximava do limite de output, o uso já chegava a cerca de 25%. Isso dá uma dimensão concreta de como cada interação consome capacidade da janela.

## Os tamanhos de janela de contexto dos principais modelos

A janela de contexto é medida em tokens, e cada modelo tem um limite diferente. À época desta aula, os valores aproximados eram:

- GPT-4o: 128 mil tokens de janela de contexto
- DeepSeek: 128 mil tokens
- Claude (Anthropic): 200 mil tokens
- Gemini (Google): de 1 a 2 milhões de tokens, dependendo da versão

O Gemini tem uma janela de contexto vastamente maior que os demais, chegando a 16 vezes a capacidade do GPT-4o. Uma janela de 1 milhão de tokens seria suficiente para conter vários romances completos. Isso parece uma vantagem esmagadora, mas aqui surge uma distinção técnica crítica que a maioria das pessoas ignora.

## Janela de contexto não é reasoning: uma distinção fundamental

A capacidade de aceitar mais tokens na janela de contexto (janela maior) não equivale à capacidade de raciocinar com eficácia sobre esses tokens (reasoning mais profundo). São duas dimensões completamente independentes, e confundi-las gera expectativas erradas sobre o desempenho dos modelos em tarefas que exigem análise complexa.

O **reasoning** é a capacidade do modelo de realizar inferências, conectar ideias que não estão explicitamente relacionadas no texto, seguir cadeias lógicas de múltiplos passos e aplicar conhecimento tácito que não está explicitado na janela de contexto atual. Um modelo com reasoning elevado vai além do que foi literalmente dito: ele identifica o que está implícito no pedido, percebe inconsistências que o usuário não sinalizou, antecipa consequências que não foram mapeadas e, em alguns casos, age sobre o que identificou mesmo sem ter sido solicitado.

Um exemplo concreto de reasoning avançado: você pede a um modelo que corrija um botão que está fora do alinhamento em um código. Um modelo com bom reasoning faz a correção solicitada e, adicionalmente, informa que identificou outro elemento com o mesmo problema durante a análise e aproveitou para corrigir também. Ele foi além do que foi pedido porque inferiu a intenção por trás do pedido (ter o código bem alinhado) e agiu sobre essa inferência. Isso é reasoning aplicado.

Pesquisas sobre desempenho de modelos mostram que, mesmo em modelos com janelas de contexto muito grandes como o GPT-4 Turbo (128 mil tokens), a eficácia do reasoning profundo começa a cair a partir de aproximadamente 60 a 100 mil tokens. O modelo continua lendo todo o conteúdo dentro da janela, mas sua capacidade de navegar logicamente por todo o material, construir inferências sobre o conjunto completo e produzir respostas coerentes que integrem informações de diferentes partes começa a diminuir. A exceção ocorre quando o conteúdo foi muito bem estruturado, indexado e organizado para facilitar a navegação.

A analogia que torna isso mais claro: janela de contexto é o campo de visão do modelo, o quanto ele consegue "ver" do input total. Reasoning é a inteligência estratégica com que ele usa o que está vendo para construir respostas. Você pode ter um campo de visão gigantesco e ainda assim não saber o que fazer com as informações que está enxergando.

Por isso, modelos com janelas menores mas reasoning mais sofisticado frequentemente superam modelos com janelas maiores e reasoning mais básico em tarefas que exigem análise profunda. O GPT-o3 (modelo de raciocínio avançado da OpenAI) frequentemente vence benchmarks de reasoning apesar de não ter a maior janela de contexto disponível no mercado.

## Memória: o que persiste entre conversas

A janela de contexto e a memória são sistemas distintos que as pessoas frequentemente tratam como se fossem a mesma coisa. É uma confusão que gera erros práticos sérios no uso das ferramentas.

A janela de contexto é o espaço de atenção dentro de uma conversa em andamento. Ela existe apenas durante aquela sessão específica. A memória é o que o modelo preserva entre conversas diferentes, carregando informações de uma sessão anterior para uma sessão futura.

Pense assim: você tem uma conversa longa com um amigo hoje. Enquanto a conversa acontece, você se lembra de tudo que foi dito porque está dentro do fluxo em tempo real (janela de contexto). Uma semana depois, você se encontra com esse mesmo amigo e retoma alguns pontos da conversa anterior porque você se lembra dela (memória). Para a LLM, quando você abre uma nova conversa, ela não tem acesso automático ao que foi discutido em conversas anteriores, a menos que isso tenha sido explicitamente salvo na memória.

No ChatGPT, o sistema de memória pode ser gerenciado ativamente. Você pode acessar as memórias salvas pelo menu de configurações, ver quais informações foram armazenadas, editar registros que foram gravados de forma incorreta e adicionar novas memórias manualmente. As informações salvas na memória são convertidas internamente em vetores com pesos específicos, e o modelo usa esses pesos para decidir quando recuperar uma memória particular em vez de carregar todas simultaneamente. Se o modelo carregasse todas as memórias de uma vez a cada resposta, elas ocupariam uma parcela significativa da janela de contexto, limitando o espaço para a conversa em si.

## Modelos Open Source, Open Weights e o ecossistema do Hugging Face

Para além das APIs pagas das grandes empresas, existe um ecossistema extenso de modelos de linguagem acessíveis publicamente. O **Hugging Face** é a plataforma de referência dessa comunidade. À época desta aula, ela listava mais de 1,5 milhão de modelos de IA diferentes, sendo mais de 208 mil especificamente voltados para a geração de texto na categoria de Natural Language Processing.

Dentro desse universo, é importante distinguir dois tipos de abertura:

**Open Source** significa que o código-fonte completo do modelo está disponível, incluindo a arquitetura, o código de treinamento e, em muitos casos, os próprios dados de treinamento. Com um modelo open source, você pode baixá-lo, rodar em sua própria infraestrutura, modificar a arquitetura, retreiná-lo ou usá-lo como base para aplicações derivadas. O **LLaMA**, desenvolvido pela Meta, é o exemplo mais influente: sua abertura permitiu que centenas de modelos derivados fossem construídos a partir dele, incluindo o NVIDIA LLaMA Nemotron Ultra, que é um fine-tuning especializado desenvolvido pela NVIDIA para casos de uso de alto desempenho.

**Open Weights** é uma abertura mais limitada. O modelo disponibiliza os pesos aprendidos durante o treinamento, permitindo que você faça fine-tuning e ajuste o comportamento para casos específicos, mas sem necessariamente disponibilizar o código de treinamento ou os dados originais. É uma abertura que permite uso e customização, mas não necessariamente reprodução ou modificação profunda da arquitetura.

Dentro do Hugging Face, a **Chatbot Arena LLM Leaderboard** é um ranking comunitário que compara o desempenho dos modelos com base em votação real de usuários. O mecanismo de votação é direto: dois modelos diferentes respondem à mesma pergunta e o usuário vota em qual resposta foi melhor, sem saber qual modelo gerou qual resposta. Isso gera um ranking baseado em preferência humana real, não em benchmarks automáticos que podem ser "julgados" pelos modelos.

O leaderboard permite filtrar por categorias específicas: matemática, seguir instruções, código, idiomas específicos (inglês, chinês, japonês). Isso é útil porque o modelo com melhor desempenho geral pode não ser o melhor para uma tarefa específica. Se você precisa de um modelo para geração de código, o ranking de código é o que importa. Se precisa de raciocínio matemático, o ranking de matemática é o critério correto.

## Chunks e RAG: organizando informação para LLMs

Dois conceitos que se tornam essenciais quando você trabalha com volumes de informação que excedem o que cabe confortavelmente na janela de contexto são **chunk** e **RAG** (Retrieval Augmented Generation).

Um **chunk** é um fragmento de informação estruturado com tamanho controlado, geralmente entre 100 e 500 tokens, com metadados associados: origem, título, tag, nível de importância, relação com outros chunks. A lógica por trás do chunking é simples: em vez de jogar um livro inteiro ou um conjunto de documentos longos diretamente na janela de contexto, você divide esse conteúdo em pedaços menores e cria um índice que descreve o que cada pedaço contém. O modelo não precisa ler o livro do início ao fim para responder sobre um trecho específico: ele localiza os chunks relevantes para a pergunta atual e opera sobre eles.

A razão técnica para isso é que os modelos raciocinam melhor com partes pequenas, coesas e bem definidas do que com blocos gigantes e desorganizados. Um chunk bem formado aborda um único conceito por vez, tem coerência interna, e começa e termina em pontos semanticamente completos. Quando você indexa chunks com metadados ricos, você está essencialmente criando um sistema de recuperação de informação que pode alimentar o modelo de forma muito mais eficiente do que simplesmente encher a janela de contexto com texto bruto.

O **RAG** (Retrieval Augmented Generation) combina dois sistemas diferentes: recuperação de informação e geração de resposta. O processo funciona assim: você faz uma pergunta, um sistema de recuperação busca os três a cinco chunks mais semanticamente relevantes para aquela pergunta em uma base de documentos indexados, e esses chunks são injetados na janela de contexto junto com a pergunta. O modelo então gera a resposta baseado apenas nesses trechos selecionados, não sobre o corpus inteiro.

Isso permite que o modelo responda com precisão sobre bases de conhecimento imensas, que poderiam ter 1 milhão de tokens ou mais, sem precisar carregar tudo na janela de contexto a cada pergunta. Você só carrega o que é relevante para aquela pergunta específica. Em uma demonstração durante a aula, o ChatGPT usou sua memória para oferecer um exemplo sobre "tokens de design e consistência de marca", mesmo sem ter sido instruído a usar exemplos de design. Isso aconteceu porque o histórico de memória do usuário criou um contexto persistente que o modelo usou para personalizar o exemplo, uma forma simples de RAG aplicada à memória do sistema.

## Aplicações práticas imediatas

Esses conceitos têm consequências diretas no modo como você deve usar LLMs hoje, mesmo que você não pretenda implementar RAG ou chunking técnico na sua empresa.

**Não mantenha conversas longas sobre assuntos diferentes dentro de uma única sessão.** Cada assunto diferente deveria ter uma nova conversa. Isso preserva a qualidade da janela de contexto para o que realmente importa no momento e evita que o modelo perca o fio de assuntos anteriores quando a janela começa a encher.

**Antes de subir arquivos para uma LLM, organize-os.** Divida em seções com títulos claros. Se possível, separe conteúdos em múltiplos arquivos temáticos distintos. Quando você usa um assistente personalizado ou GPT, nas instruções você pode especificar quando cada arquivo deve ser acessado, qual é o conteúdo de cada um e em que contexto o modelo deve recorrer a qual documento. Isso reduz o consumo de janela de contexto e melhora significativamente o reasoning sobre o material.

**Revise sempre as memórias que o modelo salva.** Sistemas de memória automática, como o do ChatGPT, são convenientes, mas cometem erros. O modelo pode transcrever incorretamente palavras específicas ou registrar um conceito de forma imprecisa. Se uma informação errada fica salva na memória, ela vai influenciar respostas futuras de forma sistemática. Acesse periodicamente o gerenciador de memórias, leia cada entrada e corrija o que estiver impreciso.

**Escolha o modelo adequado para cada tipo de tarefa.** Janela de contexto maior não significa melhor qualidade de resposta. Para tarefas que exigem raciocínio profundo, inferência e análise lógica complexa, um modelo com reasoning avançado pode produzir respostas muito superiores a um modelo com janela maior mas reasoning mais básico. Use a Chatbot Arena como referência para avaliar qual modelo performa melhor na dimensão específica que você precisa.

## O que acontece quando a janela de contexto transborda

É importante mapear o que concretamente acontece quando você ultrapassa o limite da janela de contexto, porque o comportamento do modelo não é interromper ou dar erro. Ele continua gerando respostas. O problema é que as informações mais antigas da conversa começam a sair da janela de forma silenciosa.

Imagine que a conversa tem 200 mil tokens de conteúdo acumulado e o modelo tem uma janela de 128 mil tokens. Os 72 mil tokens mais antigos ficam fora da janela. O modelo continua respondendo, mas age como se aquela parte inicial da conversa nunca tivesse existido. Se você estabeleceu um contexto importante no início, como "sempre que eu perguntar sobre estratégia, considere que meu orçamento é limitado", e esse contexto caiu fora da janela, o modelo não vai mais considerar essa restrição nas respostas seguintes. Ele não avisa que esqueceu, simplesmente não usa mais aquela informação.

Em casos mais graves, especialmente quando você sobe arquivos muito longos que excedem sozinhos uma parcela significativa da janela, o modelo pode começar a alucinar: gerar informações que parecem plausíveis mas que não estão no documento, porque está "completando" lacunas que ficaram fora da janela com o que sabe do treinamento. Isso é especialmente problemático quando você usa a LLM para análise de documentos e espera que as respostas sejam estritamente baseadas no conteúdo enviado.

A melhor estratégia para lidar com isso é preventiva: use conversas novas para assuntos novos, faça revisões periódicas do estado da conversa quando ela ficar longa, e para análise de documentos extensos, considere usar sistemas de RAG ou chunking para injetar apenas as partes relevantes em cada consulta, em vez de tentar colocar o documento inteiro na janela de uma vez.

## Coloque em prática

Escolha um tema que você domina com profundidade, seja uma área de atuação profissional, um hobby técnico, uma teoria que você estudou. Escreva dois prompts sobre esse tema: no primeiro, use apenas vocabulário cotidiano e genérico, sem termos técnicos. No segundo, use termos específicos do campo, nomes de autores, conceitos teóricos, metodologias, até palavras em outro idioma se fizer parte do vocabulário do campo. Envie ambos ao mesmo modelo, em conversas separadas, e compare a profundidade e o nível das respostas. Em seguida, abra uma nova conversa e pergunte explicitamente ao modelo: "quanto da sua janela de contexto já utilizamos?". Repita a pergunta depois de gerar um texto longo e observe como o percentual muda.
