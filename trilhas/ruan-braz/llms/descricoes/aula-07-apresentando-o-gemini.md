# Apresentando o Gemini

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os principais recursos da interface do Gemini, reconhecendo o Canvas, o Deep Research, os modelos disponíveis e as opções de interação por voz e tela em cada plano.
- Distinguir o Gemini de outras LLMs pela profundidade de integração com o ecossistema Google, mapeando como ele funciona dentro do Docs, Sheets, Slides e Meet de forma prática.
- Reconhecer as características e limitações do Google AI Studio como ambiente de experimentação técnica distinto da interface principal do Gemini Advanced.
- Aplicar o recurso de compartilhamento de tela e interação por voz do Gemini Live para navegar e receber orientação em tempo real sobre qualquer aplicação aberta.
- Estruturar pesquisas avançadas com o Deep Research do Gemini, reconhecendo as etapas do processo e quando esse recurso gera mais valor do que uma busca convencional.

## O Gemini e o diferencial do ecossistema Google

Se você já usa Gmail, Google Docs, Google Sheets, Google Slides ou Google Meet no seu dia a dia, o Gemini tem uma vantagem estrutural frente às outras LLMs antes mesmo de você abrir qualquer janela de chat. Essa vantagem não é apenas de conveniência. Ela é arquitetural: o Gemini não é apenas um assistente conversacional que você abre em outra aba. Ele é a camada de inteligência artificial que a Google está integrando por dentro de toda a sua suíte de produtividade, e isso muda fundamentalmente a proposta de valor da ferramenta para quem já vive dentro do ecossistema Google.

Esta aula apresenta o Gemini em três frentes distintas que você precisa reconhecer separadamente para usar a ferramenta com inteligência. A primeira é a interface principal do Gemini em gemini.google.com, o chat conversacional de uso geral. A segunda é o Google AI Studio, o ambiente de experimentação técnica voltado para prototipagem e ajuste de configurações avançadas. A terceira é a integração nativa com as ferramentas do Google Workspace, onde o Gemini opera dentro do Docs, do Sheets, do Slides e do Meet. Cada uma dessas frentes tem um propósito diferente, e reconhecer esse mapa evita confusão e subutilização da plataforma.

## Interface principal: o Gemini em gemini.google.com

Acessar o Gemini é simples: você acessa gemini.google.com e, se estiver logado na sua conta Google, já cai diretamente na interface. Não é necessário criar uma conta nova: a sua conta Google já serve. A conversa básica funciona como qualquer outra LLM: você digita no campo de input, o modelo responde. Os controles padrão de qualidade estão disponíveis: curtir a resposta, reportar como inadequada, pedir que o modelo refaça, compartilhar a conversa, exportar o conteúdo, copiar o texto ou ouvir a resposta em voz.

Esses controles são padrão na maioria das LLMs e a aula não se demora neles. O que importa é o que o Gemini faz de forma diferente ou melhor.

O Canvas é o primeiro recurso que diferencia o Gemini nessa camada. Ele é o equivalente do Artefato do Claude e da Lousa do ChatGPT: quando você pede ao Gemini a geração de um documento mais estruturado, ele abre um painel lateral com o conteúdo formatado, com cabeçalhos, listas e parágrafos organizados, ao invés de jogar tudo como bloco de texto no chat. Você pode editar o conteúdo diretamente no Canvas, fazer alterações específicas e solicitar que o Gemini continue trabalhando sobre o documento sem precisar sair do contexto de edição.

Na demonstração, Ruan pede um briefing fictício de um Happy Hour do futuro para designers se encontrarem em realidades paralelas. O Gemini gera o documento no Canvas, estruturado com seções, e insere uma capa visual automaticamente. O Canvas traz recursos visuais de edição semelhantes ao Google Docs, o que faz sentido dado que a Google investiu pesadamente em tornar essa interface familiar para quem já usa o Workspace.

A seleção de modelos no plano Advanced é outro diferencial relevante. No gratuito, o modelo disponível é o padrão. No Advanced, você tem acesso ao Gemini 2.5 Flash, que prioriza velocidade, e ao Gemini 2.5 Pro, que prioriza profundidade de raciocínio. O 2.5 Pro é considerado um dos modelos de maior capacidade de raciocínio disponíveis no mercado no momento desta aula, com desempenho excepcional em análise técnica, código e tarefas que exigem síntese de informações complexas.

A janela de contexto do Gemini é um dos seus diferencias mais significativos frente à concorrência. O 2.5 Pro suporta até 1 milhão de tokens em modo padrão e pode chegar a 2 milhões em configurações específicas. Para referência prática: 1 milhão de tokens equivale a aproximadamente 750 mil palavras em inglês, o que é suficiente para processar um livro inteiro, uma base de código extensa ou centenas de documentos de um projeto de uma só vez. Essa capacidade de janela de contexto longa é especialmente útil para análises que exigem visão ampla de um corpus grande de informações.

## As integrações com Google Workspace: onde o Gemini se separa da concorrência

Esta seção é o coração da proposta de valor do Gemini para quem usa o ecossistema Google. A integração com o Workspace não é uma integração via API que você precisa configurar: ela está embutida nas ferramentas que você já usa, acessível a um clique dentro dos menus do Google Docs, Sheets, Slides e Meet.

No Google Docs, a experiência de usar o Gemini integrado é direta. Você abre qualquer documento existente ou cria um novo, e o Gemini está disponível no painel lateral direito. A partir daí, você conversa com ele sobre aquele documento: pede que escreva uma seção específica com base no contexto já existente, solicita revisão de um trecho selecionado, pede que reformule um parágrafo com outro tom, ou peça que expanda um argumento que está incompleto. O Gemini lê o documento, processa a solicitação e insere o resultado diretamente no documento com um botão de inserção. Você não precisa copiar e colar nada: o conteúdo vai direto para onde precisa ir.

No Google Sheets, o comportamento é similar e com uma camada que impressiona quem ainda não viu funcionando. Ruan faz um teste simples: pede ao Gemini dentro do Sheets que crie uma tabela de raças de gatos exóticas, com organização livre para que o modelo mostre como estruturaria os dados por conta própria. O Gemini gera a tabela dentro de um painel, com raças, características e curiosidades organizadas em colunas. Com um clique em "inserir", a tabela aparece diretamente nas células da planilha. A partir daí, você pode pedir que ele adicione mais raças, adicione uma coluna de preços médios ou reorganize por critério de raridade. Todas essas edições acontecem dentro da planilha, sem intermediário.

Para quem usa planilhas para organizar dados de clientes, métricas de projetos, pesquisas de mercado ou gestão de conteúdo, essa integração significa que você pode construir estruturas de dados complexas em conversa natural com o Gemini, sem precisar saber fórmulas avançadas ou estruturar as tabelas manualmente.

No Google Slides, a integração também está disponível, embora em desenvolvimento mais recente. Ruan pede ao Gemini que gere uma apresentação sobre como criar agentes de IA no Google AI Studio. O resultado gerado na demonstração é apenas um slide inicial com estrutura básica, o que Ruan reconhece como limitado no momento. Mas a possibilidade está ali: o Gemini pode gerar slides, inserir conteúdo e servir como ponto de partida para a construção de apresentações, com a expectativa de que essa integração vai evoluir nos próximos ciclos de atualização.

No Google Meet, a integração com o Gemini está focada em transcrição e anotações automáticas durante reuniões. Quando você entra em uma chamada no Meet com o recurso habilitado, o Gemini transcreve a reunião em tempo real e pode gerar um resumo ao final. Para equipes que usam o Workspace corporativo, esse resumo vai automaticamente para o Google Drive compartilhado da equipe, criando um histórico organizado de reuniões sem esforço manual. Ruan prefere o Zoom ou o Fathom para suas próprias reuniões, mas reconhece que o recurso do Meet funciona bem e resolve para quem já está no ecossistema Google.

## Gemini Live: colaboração por voz e visão em tempo real

O Gemini Live é um dos recursos mais diferenciados de toda a categoria de LLMs disponíveis hoje, e ele transforma completamente a forma de interagir com o modelo. Em vez de uma troca de mensagens escritas, o Live permite uma conversa por voz em tempo real enquanto você compartilha sua tela com o Gemini. O modelo vê o que está na sua tela e você conversa com ele por voz enquanto navega por qualquer aplicação.

A demonstração da aula mostra isso em funcionamento real com o Google AI Studio aberto. Ruan ativa o compartilhamento de tela, o Gemini passa a observar o que está sendo feito, e a conversa começa por voz: "E aí, Gemini, eu preciso da sua ajuda para mostrar para as pessoas como utilizar o Gemini Advanced." O modelo responde por voz, vê a tela e começa a guiar a navegação.

Quando Ruan pergunta sobre o menu do Google AI Studio, o Gemini descreve com precisão o que está vendo: "No menu lateral esquerdo, você tem as seguintes opções: Chat, Stream, Video Jam, Starter Apps, History e Enable Save." Quando Ruan pergunta sobre as configurações do menu lateral direito, o Gemini explica: "No menu lateral direito, você pode ajustar as configurações do modelo Gemini, como a versão, a temperatura, e também usar ferramentas como saída estruturada, execução de código, chamada de função e pesquisa no Google."

Ruan aproveita para explorar os conceitos enquanto navega pela interface. Ele pergunta sobre temperatura, e o Gemini explica ao vivo: temperatura é a configuração que controla a aleatoriedade das respostas. Valores mais baixos tornam as respostas mais determinísticas e previsíveis. Valores mais altos as tornam mais criativas e variadas. Depois pede explicação sobre Structured Output, e o Gemini esclarece: saída estruturada permite que você defina um formato específico para a resposta do modelo, como JSON ou CSV, facilitando a integração com outros sistemas ou aplicativos.

Ruan vai além na exploração e pede ao Gemini Live que sugira um prompt disruptivo para testar no AI Studio. O modelo sugere pedir ao Gemini que crie um novo sistema de leis para regular a inteligência artificial, protegendo direitos humanos e promovendo o bem comum. Ruan digita o prompt no AI Studio enquanto o Gemini Live observa, e depois pede que o Gemini Live leia a resposta que apareceu na tela. O modelo lê a resposta em voz alta, incluindo o título "Lei Marco da Inteligência Artificial e Direitos Digitais" que o Gemini no AI Studio havia proposto.

Essa interação em que a LLM vê sua tela, ouve sua voz e responde também por voz transforma o modelo em algo próximo de um colaborador presente enquanto você trabalha. Ruan consegue navegar por uma interface complexa como o AI Studio com orientação em tempo real, sem precisar parar, escrever uma pergunta, ler a resposta e voltar. O fluxo é contínuo.

A qualidade de síntese de voz do Gemini evoluiu consideravelmente. Ruan ajusta as configurações de idioma durante a demonstração e nota a melhoria na naturalidade da fala em português. O modelo consegue manter uma conversa por voz fluida, o que abre possibilidades para fluxos de trabalho de acessibilidade, navegação hands-free e qualquer situação onde digitar é menos prático do que falar.

## Google AI Studio: ambiente técnico de experimentação

O Google AI Studio, acessível em aistudio.google.com, é uma ferramenta diferente do Gemini em gemini.google.com. Enquanto o Gemini é a interface conversacional de uso geral, o AI Studio é o ambiente de experimentação técnica para desenvolvedores, pesquisadores e usuários avançados que querem testar configurações de modelo e explorar capacidades que a interface comum não expõe.

A primeira diferença operacional que você precisa ter clara é que o AI Studio não salva conversas. Ele é um estúdio, um espaço de teste e prototipagem. As conversas que você faz ali são temporárias e desaparecem quando você fecha a aba ou começa uma nova sessão. Isso é deliberado: o AI Studio é para experimentação, não para trabalho que você quer preservar. Para conversas que você quer salvar e retomar, use o Gemini na interface principal. Uma boa prática é manter os dois abertos em abas separadas quando estiver experimentando configurações que pretende depois aplicar em conversas salvas.

O painel de configurações do AI Studio expõe parâmetros que não estão disponíveis na interface comum. O mais importante para dominar é a temperatura. A temperatura controla a aleatoriedade das respostas: valores baixos (próximos de 0) tornam o modelo mais determinístico, o que significa que ele vai sempre escolher o token de maior probabilidade, gerando respostas consistentes e previsíveis. Valores altos (próximos de 2, dependendo do modelo) aumentam a aleatoriedade, fazendo o modelo explorar opções menos óbvias, o que pode resultar em respostas mais criativas mas também mais imprevisíveis.

Para tarefas técnicas que exigem consistência, como geração de dados estruturados, extração de informações ou respostas que precisam sempre seguir o mesmo formato, a temperatura baixa é preferível. Para brainstorming, geração de nomes, escrita criativa exploratória ou qualquer tarefa onde a variação é bem-vinda, a temperatura alta abre possibilidades que o modo padrão não alcança.

A saída estruturada (Structured Output) permite definir um schema em JSON ou CSV e garantir que o modelo sempre responda exatamente naquele formato, sem variações de estrutura. Isso é fundamental para quem integra o Gemini com sistemas externos, planilhas ou pipelines de automação que precisam de dados em formato fixo e previsível.

A execução de código (Code Execution) permite que o modelo escreva e execute código Python dentro do próprio AI Studio, mostrando os resultados computados diretamente na resposta. Para verificações matemáticas, análises de dados e prototipagem de lógica computacional, isso transforma o AI Studio em um notebook interativo.

A chamada de função (Function Calling) é o recurso para integração com sistemas externos via API. Você define funções que o modelo pode chamar, e ele decide quando chamá-las com base na conversa, recebendo os dados retornados e usando-os na resposta. Esse recurso é a base para construção de agentes de IA que interagem com ferramentas externas.

A integração com pesquisa no Google traz dados em tempo real para as respostas do AI Studio, o que é essencial quando você está prototipando aplicações que precisam de informações atualizadas, não apenas do conhecimento de treinamento do modelo.

## Deep Research: pesquisa estruturada em múltiplas etapas

O Deep Research é o recurso do Gemini que mais se aproxima de um processo de pesquisa acadêmica ou consultoria assistida por IA. Ao contrário de uma busca simples, onde a LLM responde com base em seu conhecimento de treinamento e talvez faça uma busca rápida na web, o Deep Research executa um processo estruturado e explícito em múltiplas etapas: planejar, pesquisar, analisar resultados e sintetizar em um relatório.

Antes de executar, o Gemini apresenta ao usuário um plano do que pretende fazer: quais aspectos do tema vai investigar, em que ordem, e que tipo de relatório vai produzir. Isso não é cosmético. Você pode revisar esse plano, editar os pontos que quer aprofundar, adicionar ângulos que ele não considerou ou redirecionar o foco antes que o modelo gaste tempo pesquisando na direção errada. Essa etapa de aprovação do plano é um diferencial de transparência e controle que outros modelos com funcionalidade similar nem sempre oferecem.

Na demonstração da aula, Ruan solicita uma pesquisa avançada sobre o uso de IDEs conectadas com LLMs, explicando que IDEs são ambientes de gerenciamento de código. O Gemini ativa o processo, apresenta o plano de pesquisa com os passos planejados, e pergunta se Ruan quer fazer alterações. Ruan confirma sem alterações e o modelo começa a pesquisa. O raciocínio é visível: você consegue acompanhar em tempo real quais sites estão sendo consultados e como o modelo está processando as informações.

O resultado aparece no Canvas como um relatório estruturado, com seções organizadas, tópicos analisados, síntese de tendências e fontes citadas. Para projetos que precisam de documentação de pesquisa embasada, essa funcionalidade substitui horas de trabalho manual de coleta, leitura e síntese de fontes.

No contexto do Google Workspace, o resultado do Deep Research pode ser exportado diretamente para um Google Doc, o que torna trivial compartilhar o relatório com a equipe ou continuar editando-o colaborativamente. Essa integração entre o resultado da pesquisa e as ferramentas de trabalho da equipe é uma vantagem real para quem usa o Workspace corporativo.

## Organização de conversas, modelos e diferenças frente ao Claude

O Gemini não tem um sistema de projetos com contexto persistente tão desenvolvido quanto o Claude. A organização de conversas no Gemini é mais simples: você tem um histórico de conversas na barra lateral, pode nomear e categorizar as conversas, trocar o modelo a qualquer momento durante uma conversa ativa e gerenciar os arquivos que você subiu naquela sessão. Mas a memória persistente de contexto entre conversas diferentes, como acontece nos projetos do Claude com arquivos e instruções acumuladas, não está disponível na interface padrão do Gemini da mesma forma.

Para quem usa o Workspace corporativo, essa limitação é parcialmente atenuada porque os documentos gerados ficam salvos no Google Drive compartilhado e o Gemini pode acessá-los quando você os referencia explicitamente em uma nova conversa. Se você cria um briefing no Docs, salva no Drive e depois abre uma nova conversa com o Gemini passando o link do documento, ele consegue usar esse conteúdo como contexto. Mas isso exige que você gerencie ativamente esses arquivos e os referencie manualmente, enquanto no Claude o projeto carrega esses arquivos automaticamente em cada nova conversa dentro do espaço.

Uma limitação específica mencionada na aula é a ausência de controle sobre o modelo quando você está usando o Gemini integrado dentro do Google Docs ou Google Sheets. Quando está trabalhando dentro do Docs, o Gemini usa automaticamente o modelo que a plataforma escolhe, sem que você possa selecionar entre o 2.5 Flash e o 2.5 Pro manualmente. Você só tem esse controle na interface principal do Gemini em gemini.google.com ou no AI Studio. Isso pode mudar com atualizações futuras, mas no momento da gravação era uma limitação presente que impacta quem quer ter controle preciso sobre qual modelo está executando cada tarefa.

Também não há equivalente direto ao sistema de estilos de voz do Claude para personalizações persistentes de tom dentro do Gemini Advanced. Você pode dar instruções de tom no prompt em cada conversa, o que funciona bem, mas não existe uma área dedicada para salvar esses estilos e ativá-los com um clique como no Claude. Para trabalho com múltiplos clientes que exigem vozes diferentes, isso significa ter que repetir as instruções de tom no início de cada nova conversa, o que é um atrito pequeno mas real no fluxo diário.

## Quando assinar o Gemini Advanced

O plano pago do Gemini, o Advanced, é integrado ao Google One AI Premium e custa R$ 96 por mês no Brasil, com primeiro mês por apenas R$ 1. Esse valor não é apenas pelo Gemini Advanced isoladamente: ele inclui o acesso ao Gemini em todas as ferramentas do Workspace, ou seja, o assistente dentro do Docs, Sheets, Slides, Meet, Gmail e outros serviços Google, todos com os modelos mais avançados. Para quem usa o Workspace corporativo em equipe, o custo ainda pode ser diluído dependendo do plano de negócio contratado.

Para quem já usa o Google Workspace corporativo de forma intensiva, a lógica de custo-benefício é diferente do que para uso pessoal casual. Se você já paga pelo Workspace e usa as ferramentas Google como base do seu fluxo de trabalho, o custo adicional do Advanced é relativamente baixo pelo valor que a integração entrega. Você não está pagando por mais uma ferramenta separada: está desbloqueando a inteligência artificial embutida nas ferramentas que já são a base da sua operação. Para equipes que produzem muitos documentos, precisam de transcrições de reuniões, gerenciam planilhas complexas ou fazem apresentações frequentemente, o Gemini integrado ao Workspace tem potencial de economizar horas de trabalho por semana.

Se você usa o Google apenas ocasionalmente e tem o fluxo principal em outras ferramentas, o custo pode não se justificar da mesma forma. A recomendação de Ruan é clara: ele assina o Gemini, o Claude, o ChatGPT e outras LLMs de acordo com o que faz sentido para cada projeto específico. O Gemini não substitui o Claude para escrita criativa com voz específica nem o ChatGPT para raciocínio profundo encadeado. Ele complementa, especialmente para pesquisa integrada com fontes verificadas, janela de contexto longa para processar documentos extensos, trabalho fluido dentro do ecossistema Google, e qualquer projeto onde a integração com Workspace é uma vantagem operacional real que justifica o investimento adicional.

## O papel do Gemini no ecossistema de ferramentas de IA

Uma perspectiva que fecha bem a aula é perceber o Gemini não como ferramenta isolada, mas como parte de uma estratégia de uso de múltiplas IAs. A lógica que Ruan demonstra ao longo de todo o minicurso é que profissionais que usam IA com seriedade não ficam presos a uma só plataforma. Cada LLM tem um perfil de vantagens que a torna mais adequada para determinados contextos.

O Gemini ocupa o papel da LLM com maior profundidade de integração com o cotidiano digital de quem vive no ecossistema Google. Para pesquisas que precisam de fontes verificadas e síntese estruturada, o Deep Research do Gemini é referência. Para projetos que exigem processar grandes volumes de texto de uma vez, a janela de contexto do 2.5 Pro de 1 a 2 milhões de tokens é imbatível. Para equipes que já usam Google Workspace e querem IA diretamente nas ferramentas que já usam, sem integração externa, o Gemini é a escolha natural.

Mapear o perfil do Gemini nesse ecossistema de ferramentas permite que você tome decisões conscientes sobre quando abrí-lo, quando usar o Claude, quando usar o ChatGPT, e quando combinar dois ou mais deles em um mesmo fluxo de trabalho. Por exemplo: usar o Gemini para fazer o Deep Research inicial de um tema, exportar o relatório para o Google Docs, e depois levar esse documento para o Claude para escrever o conteúdo criativo a partir da pesquisa. Cada ferramenta faz o que faz de melhor, e o resultado é melhor do que qualquer uma faria sozinha.

## Coloque em prática

Acesse o Gemini em gemini.google.com com sua conta Google e peça que ele gere um Canvas com um briefing fictício de qualquer projeto ou negócio que você queira explorar. Observe como o Canvas se comporta: como o conteúdo é formatado, quais opções de edição estão disponíveis no painel lateral e como você pode fazer alterações solicitando ao Gemini dentro do mesmo Canvas.

Se você tem acesso ao Google Workspace, abra um Google Sheets em branco e ative o Gemini no painel lateral. Peça que ele crie uma tabela para organizar qualquer tipo de dado que você usa no seu trabalho, seja uma lista de tarefas, um comparativo de ferramentas ou um catálogo de referências. Observe como ele gera e insere a tabela diretamente na planilha.

Se você tem o Gemini Advanced, ative o recurso de Live e compartilhe a tela. Abra qualquer interface que você usa regularmente no trabalho e peça ao Gemini, por voz, que descreva o que está vendo e sugira como você poderia usar aquela interface de forma mais eficiente. Esse exercício transforma o conceito abstrato de "IA que vê sua tela" em experiência prática e imediata.
