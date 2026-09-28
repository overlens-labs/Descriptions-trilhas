# Chain of Thought: Como Dar uma Linha de Raciocínio para a IA

**Tempo estimado de leitura:** 11,5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o que é a técnica Chain of Thought (COT) e quando aplicá-la em prompts
- Estruturar uma cadeia de etapas numeradas que a IA vai seguir em sequência
- Distinguir entre COT executado diretamente no prompt e COT distribuído em múltiplos agentes via automação
- Reconhecer o problema da janela de contexto e como ele afeta sequências longas de instruções
- Aplicar o conceito de multipersonas para dividir tarefas complexas entre conversas diferentes
- Identificar o que é um workflow no contexto de automações com IA
## O que é Chain of Thought

COT é a sigla para Chain of Thought, expressão em inglês que significa cadeia de pensamento. É um termo muito comum no universo da engenharia de prompt e você vai ouvi-lo com frequência em artigos, tutoriais e discussões sobre uso avançado de modelos de linguagem.

A lógica central da técnica é simples: ao invés de dar uma tarefa aberta para a IA e esperar que ela decida sozinha como executá-la, você define explicitamente a linha de raciocínio que ela deve seguir. Você descreve passo a passo, em ordem, quais etapas a IA deve percorrer antes de entregar uma resposta. Isso transforma um pedido vago em uma instrução estruturada, onde cada etapa depende da anterior e contribui para o resultado final.

A diferença prática é enorme. Quando você simplesmente pede "me explique Design Thinking", a IA vai escolher um caminho baseado no que ela considera relevante segundo seus próprios critérios internos. Quando você usa COT, você decide o caminho. Você controla a profundidade, a ordem e o foco de cada etapa do raciocínio.

É importante perceber que COT não é uma técnica exclusiva de usuários avançados ou programadores. Qualquer pessoa que estruture um prompt com etapas numeradas está, tecnicamente, aplicando Chain of Thought. O que muda com o nível de experiência é a qualidade das etapas: um usuário iniciante vai numerar passos genéricos, enquanto um profissional vai numerar passos precisos, calibrados para o resultado que precisa. A técnica em si é acessível; a maestria vem com prática.
## Como Construir um Prompt com COT

A forma mais direta de aplicar COT é numerar as etapas dentro do próprio prompt. Cada número representa uma instrução que a IA deve executar em sequência, e a instrução seguinte só faz sentido depois que a anterior foi concluída.

Ruan demonstra isso ao vivo com um exemplo sobre Design Thinking. Em vez de pedir um sumário genérico, ele estrutura o seguinte prompt:

1. Busque os principais links sobre o assunto na internet.
2. Categorize os 10 principais links sobre Design Thinking e liste-os.
3. Avalie quais são os três links mais relevantes dessa lista.
4. Me explique os conceitos mais importantes presentes nesses links.

Essa estrutura força a IA a percorrer um processo de pesquisa, curadoria, avaliação e síntese, nessa ordem. O resultado é muito mais preciso e contextualizado do que qualquer resposta gerada por um prompt único e aberto.

O que acontece durante a execução é visível no próprio comportamento da IA: ela vai descrevendo internamente o que está fazendo a cada momento. Ela mapeia as etapas do Design Thinking (imersão, ideação, prototipagem, testes), verifica blogs especializados como Mind Miners, reavalia abordagens, analisa os quatro passos fundamentais da metodologia e recomenda caminhos específicos. Tudo isso porque o prompt definiu um processo, não apenas uma pergunta.

Vale observar que Ruan faz uma distinção sutil entre dois verbos ao estruturar o prompt: "busca" e "investiga". O "busca" vai ao Google e Bing, usando os navegadores padrões da ferramenta, e traz o que encontra de forma direta. O "investiga", quando disponível, é mais poderoso: ele faz uma análise mais profunda, cruza fontes e interpreta o conteúdo encontrado antes de devolver a resposta. Para o exemplo da aula, Ruan optou por "busca" para manter o exemplo mais simples e didático, mas sinaliza que "investiga" seria a escolha mais eficaz em uma situação real onde a profundidade importa.
## COT Embutido: O que as IAs Já Fazem por Você

Um ponto importante que Ruan levanta é que certas ferramentas já aplicam COT de forma automática, sem que o usuário precise escrever nada. O exemplo mais direto é o botão "Investigar" do ChatGPT.

Quando você clica em "Investigar", você não está escrevendo um prompt elaborado. Mas a OpenAI já programou internamente uma cadeia de etapas: a IA decide qual ferramenta usar, quais sites acessar, como filtrar a informação, como organizar a resposta. Toda essa sequência já está definida de antemão pela empresa, não pelo usuário.

Isso é COT embutido. A diferença em relação ao COT que você escreve é que você não tem controle sobre o processo. A IA vai seguir o caminho que foi definido para ela, não o caminho que você precisa. Quando você domina a engenharia de prompt, você consegue criar suas próprias cadeias, muito mais específicas e adaptadas ao seu contexto.

Ruan compara esse processo com agentes autônomos: a IA do botão "Investigar" age como um agente que decide sozinho qual é a próxima etapa, sem depender de novas instruções do usuário. O Manus (ferramenta mencionada como exemplo, ainda em beta fechado no momento da gravação) faz exatamente isso de forma ainda mais sofisticada: abre e fecha janelas de conversa, navega por páginas, lê artigos, interpreta conteúdo e devolve uma síntese. Tudo baseado em uma cadeia de pensamento que já foi definida na programação da ferramenta.

O Manus foi desenvolvido como um COT simplificado para usuários que não sabem escrever engenharia de prompt. Ele automatiza o processo para quem não tem o repertório técnico para estruturar as etapas manualmente. Ruan demonstra um exemplo de uso: ao pedir que o Manus crie um cartão de visitas minimalista e elegante inspirado na filosofia de design da Apple, a ferramenta executa todas as etapas autonomamente, navega por referências visuais, lê documentos em PDF, toma decisões estéticas e entrega o resultado. O processo fica visível na tela enquanto acontece, o que torna o comportamento do agente transparente e auditável.

A lição que Ruan extrai desse exemplo é direta: quando você aprende a escrever o COT manualmente, você ganha o que essas ferramentas automatizadas não conseguem te dar, que é controle total sobre cada etapa. Você decide quais fontes buscar, com quais critérios avaliar, em que ordem processar, e qual padrão de resposta aceitar. A ferramenta automatizada faz uma versão razoável para casos gerais. Mas quando o contexto é específico, quando você tem uma tarefa crítica para um cliente exigente ou para um projeto de alto valor, o COT manual que você escreve vai muito mais longe.
## O Problema da Janela de Contexto

Ao usar COT diretamente no prompt, você vai esbarrar em uma limitação técnica importante: a janela de contexto. Cada modelo de linguagem tem uma capacidade máxima de informação que consegue manter em "mente" ao longo de uma conversa. Quando essa capacidade é ultrapassada, o modelo começa a perder o fio da sequência.

Ruan ilustra isso com clareza: imagine que você coloca 30 etapas para a IA seguir dentro de um único prompt. A IA vai começar bem. Ela percorre a etapa 1, a etapa 2, a 3, a 4 sem problemas. Mas em algum momento, ela não consegue mais manter o rastro de tudo que já foi feito e de tudo que ainda falta. O que acontece depois disso é a alucinação: a IA começa a inventar informações para preencher os espaços que não consegue mais processar corretamente.

Isso prejudica diretamente a precisão do resultado. Se você precisa de 30 etapas bem executadas, colocar todas elas em um prompt único pode gerar um resultado que parece completo mas contém informações inventadas nas etapas finais.

A regra prática é: quanto mais longa e complexa for a cadeia de pensamento, maior é o risco de a janela de contexto ser insuficiente. Isso não significa abandonar o COT, significa adaptar a forma de aplicá-lo.

Ruan também menciona que ferramentas como Groq e Perplexity são bons exemplos de sistemas que gerenciam esse tipo de cadeia de forma eficiente. Cada um tem sua abordagem para lidar com a limitação de contexto, e mapear essas diferenças ajuda a escolher a ferramenta certa para cada tipo de tarefa. Perplexity, em particular, é citado como um exemplo de sistema que consegue manter coerência em buscas longas porque foi projetado para isso desde o início.
## A Solução: Multipersonas e Conversas em Sequência

A alternativa para contornar o problema da janela de contexto é distribuir a cadeia de pensamento entre várias conversas independentes. Cada conversa tem seu próprio contexto, sem acumular a carga das etapas anteriores. O resultado de uma conversa vira o input da próxima.

Ruan chama isso de multipersonas. A ideia é criar conversas diferentes, cada uma com uma função específica e um "papel" bem definido. Por exemplo:

- Conversa 1 - Exploradora: busca e expande o campo de possibilidades, gera alternativas sem julgamento.
- Conversa 2 - Avaliadora: recebe o que a exploradora gerou e aplica critérios de análise para qualificar as opções.
- Conversa 3 - Priorizadora: pega o que a avaliadora selecionou e decide qual caminho merece mais atenção.
- Conversa 4 - Defensora: aprofunda a ideia priorizada, argumenta a favor dela, apresenta seu potencial.
- Conversa 5 - Juíza: recebe a ideia defendida e a submete a um teste de avaliação rigoroso, buscando falhas e fraquezas.

Essa estrutura é semelhante ao que acontece no método Double Diamond, muito conhecido por designers. No Double Diamond, o processo passa por quatro fases: Descobrir, Definir, Desenvolver e Entregar. Cada fase tem uma função específica, e o resultado de uma alimenta a próxima. A lógica é a mesma: dividir um processo complexo em etapas menores, com papéis claros, para garantir qualidade em cada estágio.

Quando você distribui o COT em conversas separadas com papéis distintos, você preserva a janela de contexto de cada IA e elimina o risco de alucinação por sobrecarga.

Ruan é explícito sobre algo que pode confundir: multipersona não significa que você está usando vários modelos diferentes. Você pode usar o mesmo modelo, o mesmo ChatGPT ou o mesmo Claude, só que em conversas separadas. Cada conversa começa do zero, sem memória das anteriores, o que é exatamente o que você quer. A "persona" é definida pelo prompt inicial de cada conversa, não por qual IA você está usando. Isso coloca a técnica ao alcance de qualquer pessoa com acesso a qualquer ferramenta de IA, sem custo adicional ou configuração técnica complexa.
## Workflow e Automação com N8N

Quando essa distribuição de conversas é feita manualmente, funciona bem para tarefas pontuais. Mas para fluxos que precisam ser repetidos com frequência, o caminho é a automação. É aqui que entra o conceito de workflow.

Workflow é a cadeia de etapas organizada dentro de um software de automação. Ruan define o termo de forma direta: cadeia de etapas em automação. Uma das ferramentas mais usadas para isso é o N8N, uma plataforma open source de automação onde você conecta agentes de IA em sequência, cada um com seu prompt, seu papel e seu contexto específico.

No N8N, você cria um fluxo visual onde a saída de um agente vai diretamente para o próximo. Você conecta cada conversa à seguinte com "cabos" visuais, e o sistema executa tudo automaticamente. Mas para que cada IA se lembre do que as anteriores fizeram, você precisa de uma memória compartilhada, e é aí que entra o banco vetorial.

O banco vetorial é a estrutura que guarda as informações de forma que a IA consiga acessá-las de maneira otimizada. Ele não armazena texto simples: armazena representações matemáticas do conteúdo (os chamados embeddings), o que permite buscas muito mais inteligentes e eficientes do que um banco de dados comum. Ruan menciona esse conceito como algo mais avançado, fora do escopo principal da aula, mas o apresenta para que o aluno tenha clareza de como o ecossistema funciona quando a coisa escala.

O que o Manus e o próprio GPT fazem ao usar "Investigar" é justamente isso: gerenciam esse fluxo automaticamente. Eles abrem uma conversa, executam uma etapa, armazenam o que importa, fecham a conversa e abrem outra. Repetem esse ciclo quantas vezes for necessário para completar a tarefa, sem sobrecarregar a janela de contexto de nenhuma janela individual.
## COT no Prompt vs. COT no Workflow

Ruan faz uma distinção importante que ajuda a organizar o vocabulário da área:

COT (Chain of Thought) no sentido mais clássico e técnico refere-se ao que está dentro do prompt. É a sequência de instruções numeradas que você escreve em uma única conversa para guiar o raciocínio da IA.

Quando você começa a conectar várias IAs, vários agentes com papéis diferentes, em um sistema coordenado, você entra no território de outras nomenclaturas: enxame de agentes, multipersonas em workflow, ou simplesmente automação multi-agente. O COT continua presente, mas agora ele está distribuído entre vários agentes em vez de concentrado em um único prompt.

Saber essa diferença ajuda você a escolher a abordagem certa para cada situação. Para tarefas com 4 a 6 etapas, um COT bem escrito no prompt é suficiente. Para fluxos com 15, 20 ou 30 etapas, você precisa pensar em distribuição, seja manualmente (multipersonas) ou automaticamente (workflow com N8N ou similares).

Outro termo que aparece nesse contexto é "enxame de agentes". Quando você tem vários agentes de IA trabalhando em paralelo ou em sequência, cada um com seu papel e seu prompt específico, você tem um enxame. O COT pode estar dentro de cada agente individualmente, mas a coordenação entre eles é o que define a arquitetura do enxame. Essa nomenclatura começa a se misturar com o conceito de Tree of Thought, que será explorado na aula seguinte, e é importante não confundir: COT em série é uma cadeia linear; enxame de agentes pode ter cadeias paralelas, hierarquias e ciclos de feedback.

A fronteira entre engenharia de prompt e automação de IA está em constante mudança. O que hoje exige N8N e configuração técnica, amanhã pode estar disponível como um botão em uma interface. O valor de aprender as técnicas em sua forma fundamental, como o COT que você escreve no prompt, é que você vai reconhecer e adaptar essas técnicas independentemente de qual ferramenta estiver usando.
## Coloque em prática

Escolha uma tarefa que você costuma pedir para a IA de forma aberta, como "me ajude a criar um conceito de marca" ou "me explique esse assunto". Reescreva esse pedido como um prompt com COT: numere pelo menos quatro etapas em sequência, onde cada uma depende da anterior. Execute o prompt e compare o resultado com o que você obtinha antes. Depois, identifique se alguma das etapas poderia ser delegada a uma conversa separada, com um papel específico (exploradora, avaliadora, juíza). Documente as diferenças de precisão, profundidade e utilidade entre as duas abordagens.
