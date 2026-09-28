# Apresentando o Claude

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar as funcionalidades principais da interface do Claude, reconhecendo onde cada recurso está localizado e como acessá-lo na versão gratuita e na versão paga.
- Distinguir os cenários em que o Claude supera o ChatGPT, mapeando as vantagens concretas para tarefas criativas e de código com base em exemplos demonstrados na aula.
- Aplicar a configuração de estilos de voz personalizados no Claude, estruturando instruções que moldem o tom das respostas às necessidades específicas de cada projeto ou cliente.
- Estruturar projetos no Claude com arquivos de contexto, instruções persistentes e conversas organizadas por cliente, área de trabalho ou tema de pesquisa.
- Reconhecer o papel dos Artefatos, da integração com GitHub e do protocolo MCP no fluxo de trabalho criativo e técnico com o Claude.

## Por que o Claude merece atenção separada no seu repertório

Dentro do universo das LLMs disponíveis hoje para o trabalho criativo e técnico, o Claude ocupa uma posição particular que justifica uma aula dedicada somente a ele. Desenvolvido pela Anthropic, empresa fundada em 2021 por ex-pesquisadores da OpenAI incluindo Dario Amodei e Daniela Amodei, o Claude foi construído com um foco deliberado em segurança, alinhamento com valores humanos e qualidade de escrita. Esses princípios não são apenas marketing: eles se traduzem em comportamentos específicos que qualquer usuário frequente consegue perceber na prática.

O Claude tem uma presença consistentemente forte em dois domínios que raramente coexistem na mesma ferramenta com a mesma qualidade: escrita criativa e programação. Para o profissional que produz copy, conteúdo editorial, roteiros ou qualquer texto que exige voz e estilo, o Claude entrega resultados que o ChatGPT dificilmente alcança com a mesma naturalidade. Para o desenvolvedor que quer uma LLM conectada ao ambiente de código, o Claude 3.7 Sonnet tornou-se a escolha padrão de grande parte da comunidade de devs que usa ferramentas como Cursor e Windsurf.

Esta aula é uma visão geral da plataforma, apresentada de forma progressiva: começa pelo plano gratuito, avança para os recursos exclusivos do plano Pro, mostra a demonstração ao vivo da criação de código com Artefatos, e fecha com a perspectiva prática de quando e por que assinar o Claude mesmo que você já tenha uma assinatura do ChatGPT.

## Primeiro acesso: a interface gratuita e os modelos disponíveis

Ao acessar o Claude pela primeira vez, você encontra uma interface limpa e sem excesso de elementos visuais. Não há menus laterais carregados, onboarding forçado ou tour interativo: a tela inicial é direta ao ponto. O plano gratuito dá acesso ao modelo Sonnet, que já é uma versão capaz para a maioria das tarefas cotidianas. O plano Pro abre o acesso ao modelo mais avançado, identificado pela versão mais alta disponível no momento da assinatura. Os créditos do plano gratuito se esgotam com mais velocidade em conversas longas, na geração de documentos extensos ou em tarefas de código, que consomem mais tokens por resposta.

Na tela inicial, antes de você digitar qualquer coisa, o Claude já apresenta algumas categorias de uso sugeridas: escrever, aprender, código, assuntos pessoais, e uma opção para deixar que o próprio Claude escolha a abordagem mais adequada com base no que você vai digitar. Ao clicar em qualquer uma dessas categorias, ele exibe sugestões específicas de como trabalhar naquela área. A categoria código, por exemplo, já menciona o conceito de Vibe Coding, que é o processo de programar em conversa com a IA, descrevendo em linguagem natural o que você quer construir e refinando iterativamente até chegar ao resultado. Esse fluxo de trabalho emergente ganhou muita tração na comunidade de desenvolvedores em 2024 e 2025, e o Claude o abraçou com mais naturalidade do que a maioria das outras plataformas, em parte porque o modelo foi historicamente treinado com foco maior em código.

O campo de input aceita texto digitado, arquivos do computador e imagens. Uma funcionalidade que já diferencia o Claude do ChatGPT na interface básica é a possibilidade de subir arquivos diretamente conectados ao GitHub. Você pode trazer um repositório inteiro como contexto, conversar sobre o código, pedir revisões de arquivos específicos, gerar novos trechos que se integram ao que já existe, identificar bugs com contexto de toda a base de código ou solicitar refatorações com visão arquitetural. Para desenvolvedores, essa integração nativa com GitHub é um diferencial operacional significativo que o ChatGPT não oferece no mesmo nível de fluidez dentro da interface.

## Estilos de voz: configurando o tom de forma persistente

Um dos recursos que distingue o Claude de outras LLMs na questão de personalização é o sistema de estilos de voz. Qualquer LLM aceita instruções de tom no próprio prompt, mas o Claude dedicou uma área separada da interface exclusivamente para essa configuração. Essa separação tem uma utilidade prática clara: libera o espaço do prompt para as instruções da tarefa em si, enquanto o tom fica configurado de forma persistente para a sessão atual ou para o projeto onde aquele estilo foi definido.

O Claude já vem com quatro tons pré-definidos que você pode ativar com um clique: um tom mais formal e profissional, um tom equilibrado e neutro (que é o padrão), um tom direto e objetivo, e um tom exploratório e reflexivo. Mas a funcionalidade mais interessante é a criação de estilos personalizados, que podem ser feita de duas formas.

A primeira forma é descritiva: você escreve em palavras como quer que o modelo se comunique. A segunda forma é por exemplo: você cola um trecho de texto que representa o estilo que quer replicar, e o Claude identifica as características daquele texto e gera um prompt de estilo a partir delas.

Na demonstração da aula, Ruan cria um estilo chamado "Mano Verdade", descrito brevemente como: comunicação direta, fala a verdade na cara sem medo, igual os manos de SP. A partir dessa descrição curta e informal, o Claude gera automaticamente um prompt estruturado que captura a essência daquele tom: "Comunique de forma direta, autêntica e desafiadora com a energia crua das ruas de São Paulo." Para verificar se o estilo foi capturado corretamente, Ruan pede uma prévia com o tema "explique por que o céu muda de cor no pôr do sol". A resposta começa com "Mano, o bagulho do pôr do sol é massa. Quando o sol vai descendo, os raios de luz atravessam mais a atmosfera. Tipo um rolê mais longo." O estilo foi absorvido com precisão.

Depois de criar um estilo, você pode renomeá-lo, editá-lo manualmente para ajustar detalhes ou excluí-lo quando não precisar mais. A partir daí, sempre que iniciar uma nova conversa, pode selecionar aquele estilo no menu e o Claude vai trabalhar com aquele tom durante toda a conversa. Para projetos criativos que exigem uma voz de marca consistente, seja para escrever copies, roteiros, posts de redes sociais, newsletters ou conteúdos editoriais para um cliente específico, essa funcionalidade economiza tempo de prompt e garante coerência sem repetição.

## Projetos: memória persistente e contexto organizado por cliente

Um dos recursos mais poderosos do Claude, disponível exclusivamente no plano Pro, é o sistema de projetos. Enquanto no plano gratuito cada conversa começa do zero, sem memória de interações anteriores, os projetos permitem criar ambientes persistentes onde o Claude carrega contexto, arquivos e instruções específicas antes mesmo de você digitar a primeira mensagem de uma nova conversa.

Para criar um projeto, você acessa a seção de projetos no menu lateral, define um nome e opcionalmente uma descrição. A partir daí, pode configurar uma instrução personalizada do projeto. Essa instrução é lida pelo Claude toda vez que uma conversa acontece dentro daquele projeto, funcionando como um sistema de memória de contexto. Você pode escrever ali: o papel que o Claude deve desempenhar naquele projeto, o cliente para o qual o trabalho se destina, o nível de formalidade das respostas, as restrições específicas daquele contexto, ou qualquer outro dado relevante que você não quer precisar repetir a cada nova conversa.

Além das instruções, você pode subir arquivos ao projeto. O Claude aceita arquivos carregados do computador, conectados via GitHub, importados do Google Drive, ou colados diretamente como texto no campo de adição de conteúdo. Todos esses arquivos ficam disponíveis como contexto base para todas as conversas dentro do projeto, e o Claude indica em tempo real quanto da janela de contexto do projeto já foi consumida com um indicador de percentual.

Na demonstração da aula, Ruan cria um projeto fictício e imediatamente começa a populá-lo com documentos gerados na própria sessão. Ele pede ao Claude que crie um briefing completo e detalhado de uma padaria do futuro, com modelo de negócio emergente, produtos inovadores, mercado-alvo e informações estruturadas no formato Lean Canvas. O Claude gera o briefing como um Artefato, o formato de documento estruturado com visualização em painel lateral. Com um clique na seta do Artefato, Ruan copia o documento direto para o projeto.

Em seguida, sem sair do projeto, ele inicia uma nova conversa e pede ao Claude que crie a plataforma de posicionamento da marca baseada no briefing. O Claude, agora com o briefing disponível como contexto, gera a plataforma de posicionamento. Como ela não foi gerada como Artefato automaticamente, Ruan usa uma abordagem alternativa mais rápida: copia o conteúdo gerado, vai ao projeto, clica em "adicionar conteúdo", cola o texto e nomeia o documento. Agora o projeto tem dois documentos. O indicador de contexto marca 3%, o que significa que há enorme capacidade ainda disponível para continuar construindo mais camadas.

Esse fluxo de construção progressiva, criar documentos e ir acumulando-os como camadas de contexto dentro do projeto, é exatamente o processo que a Overlens usa com IA: auditoria de negócio, auditoria de mercado, auditoria de público, benchmarking de comunicação, plataforma de posicionamento. Cada etapa alimenta a próxima, e o Claude usa todo o histórico acumulado para respostas cada vez mais contextualizadas.

## Artefatos e criação de código: onde o Claude brilha de verdade

O sistema de Artefatos do Claude é a resposta da Anthropic ao conceito de geração de conteúdo estruturado com visualização em tempo real. Quando você pede ao Claude que gere um documento longo, uma tabela estruturada, código HTML, JavaScript, CSS ou qualquer arquivo que tenha uma forma visual definitiva, ele pode criar isso como um Artefato, que aparece em um painel lateral com a visualização do resultado enquanto o código ainda está sendo gerado.

A capacidade de código do Claude é consistentemente citada como sua maior vantagem técnica, e a demonstração da aula ilustra isso de forma prática e progressiva. Ruan começa com uma solicitação de complexidade média: criar o menu inicial de um jogo chamado Chronicles, com opções New Game e Continue. As especificações são detalhadas: fundo preto, texto branco, fonte JetBrains Mono, título grande, itens de menu menores, e efeito de glitch ao passar o mouse nos itens, onde os caracteres são substituídos por símbolos especiais e depois voltam ao texto normal, letra por letra, rapidamente. Além disso, pede sons de sintetizador no estilo anos 80 ao passar o mouse sobre os itens de menu, e uma música de fundo tocando as notas C, D, E, F em versão lenta e várias oitavas abaixo, para criar uma atmosfera sombria.

O Claude gera o código completo em JavaScript com Web Audio API para os sons e a música, estrutura HTML para o menu e CSS para a estilização, e entrega o menu funcional no painel de visualização. Na primeira versão, a música de fundo não aparece. Ruan simplesmente digita: "Veio sem a música. Além disso, centralize os textos." O Claude edita apenas as partes que precisam de ajuste, não regenera o arquivo inteiro. Esse comportamento de edição cirúrgica e incremental é uma das características que mais diferencia o Claude em fluxos de trabalho iterativo de código.

Depois que a música está funcionando (com interação necessária do usuário para iniciar por limitação do navegador), Ruan vai além. Na mesma conversa, adiciona uma segunda camada ao projeto: ao clicar em New Game, o jogador controla uma cobra branca contra uma cobra inimiga em um jogo de snake modificado. Há ratinhos andando pelo mapa, e quando qualquer uma das cobras come dez ratinhos, ela fica habilitada a comer a outra por quinze segundos como mecânica de power-up. O Claude trabalha sobre o código existente do menu e evolui o projeto de forma incremental.

Esse processo de protótipo rápido, onde você descreve em linguagem natural o que quer construir e o modelo entrega código funcional que você pode testar imediatamente, é o que ficou conhecido como Vibe Coding. O Claude é considerado pela comunidade de desenvolvedores como a melhor LLM para esse fluxo específico, especialmente para aplicações web com JavaScript, CSS e HTML, onde os Artefatos permitem visualização imediata do resultado.

Uma observação prática importante: para aplicações mais complexas, projetos de produção ou sistemas com múltiplos arquivos e dependências, o fluxo recomendado não é trabalhar diretamente no Claude. Ruan recomenda conectar o Claude a ambientes de desenvolvimento especializados como o Cursor ou o Windsurf, onde ele opera com mais contexto de repositório, as iterações são mais eficientes e você consegue gerenciar projetos maiores com mais controle.

## Onde o Claude ganha e onde o ChatGPT ainda tem vantagem

Uma das seções mais práticas da aula é a comparação direta e honesta entre Claude e ChatGPT. Não é uma comparação para decretar qual é "melhor", porque essa pergunta não tem resposta universal. É uma comparação para ajudar você a decidir quando usar cada um e por quê.

O Claude ganha claramente em três domínios. O primeiro é escrita criativa com voz e estilo. Para produzir um conto, uma história, um poema, uma música, uma copy de produto, um roteiro, um manifesto de marca ou qualquer texto que exige uma voz específica e fluência natural, o Claude entrega resultados que o ChatGPT dificilmente alcança com a mesma qualidade. O Claude tem uma capacidade superior de capturar nuances de estilo, manter coerência de tom ao longo de textos longos e produzir linguagem com personalidade real em vez de soar genérico.

O segundo domínio é o código, especialmente em projetos iterativos. A comunidade de desenvolvedores migrou em massa para o Claude 3.7 Sonnet como motor principal nas ferramentas de Vibe Coding. A integração com GitHub, a capacidade de manter contexto de repositório extenso, o comportamento de edição incremental (em vez de regenerar tudo do zero a cada pedido) e o desempenho geral em tarefas de programação tornam o Claude consistentemente superior ao ChatGPT para esse uso específico.

O terceiro domínio é a organização por projetos com contexto persistente: a capacidade de estruturar um projeto completo com documentos acumulados e instruções específicas é uma vantagem real para profissionais que gerenciam múltiplos clientes ou projetos com histórico complexo.

O ChatGPT ainda tem vantagens relevantes. O modelo O3 da OpenAI tem capacidade de raciocínio profundo que é difícil de superar para análises complexas, problemas matemáticos, investigações filosóficas ou qualquer situação que exige uma cadeia de raciocínio muito longa e estruturada. Para conversas investigativas de múltiplas camadas onde você quer explorar um tema com profundidade progressiva, o O3 tende a performar melhor. Embora o Claude também seja capaz de conversas profundas, a vantagem do O3 nesse domínio específico é real no momento desta aula.

A conclusão prática: se você pode assinar os dois, assine. O custo de ter ambos é justificado quando você usa cada um para o que faz de melhor. Usar o Claude para tudo na esperança de economizar a assinatura do ChatGPT, ou vice-versa, é deixar valor na mesa.

## MCP, API e o Claude como componente de infraestrutura

O Claude não é apenas uma interface de chat. A Anthropic foi a empresa que lançou o protocolo MCP, o Model Context Protocol, um padrão aberto que está se tornando a base para a integração de LLMs com ferramentas externas em toda a indústria de IA. O MCP define um protocolo padronizado que permite ao Claude e a outros modelos compatíveis se conectarem a serviços externos de forma estruturada, segura e sem a necessidade de integrações customizadas para cada ferramenta.

Antes do MCP, integrar uma LLM a ferramentas externas exigia código específico para cada integração. Um plugin para o Google Drive, outro para o GitHub, outro para o Notion, cada um com sua própria lógica. O MCP padroniza essa comunicação: qualquer servidor MCP pode ser conectado ao Claude sem que você precise escrever código de integração do zero. A Anthropic lançou o padrão e o ecossistema de servidores MCP cresceu rapidamente, com ferramentas como Google Drive, Gmail, GitHub, Notion, Linear, Jira e dezenas de outros já disponíveis.

Na prática para o usuário final, isso significa que você pode configurar o Claude para ter acesso ao seu Google Drive e trabalhar diretamente sobre os documentos que estão lá, sem precisar fazer download e re-upload manual. Pode conectá-lo ao seu repositório GitHub e solicitar que ele leia arquivos, proponha alterações ou crie pull requests diretamente. Pode integrá-lo ao Google Calendar para que ele tenha contexto sobre sua agenda nas conversas e possa ajudar a planejar com base em disponibilidade real. Pode usá-lo como nó em pipelines de automação mais complexos, onde ele é um dos agentes de um sistema maior que executa tarefas encadeadas.

Essa capacidade de integração transforma o Claude de assistente de chat em componente de infraestrutura de trabalho. Desenvolvedores que montam sistemas de múltiplos agentes de IA escolhem o Claude como motor principal com frequência exatamente por causa dessa adoção pioneira e nativa do MCP, que reduz o trabalho de integração e torna o modelo mais confiável em contextos de automação.

Para o usuário criativo que não é desenvolvedor, a parte mais acessível do MCP é a conexão com Google Drive e Google Calendar diretamente pela interface do Claude. Conectar esses serviços é relativamente simples via configurações de integrações disponíveis no painel do Claude, e a partir daí o Claude consegue acessar e trabalhar sobre documentos reais do seu fluxo de trabalho sem que você precise copiar e colar conteúdo manualmente. Para quem usa Google Workspace como base do trabalho diário, essa integração reduz significativamente o atrito de trazer contexto para as conversas com o modelo.

## Plano gratuito versus Pro: o que muda em termos práticos

O plano gratuito do Claude oferece acesso ao modelo Sonnet com limite de mensagens por período de tempo, geralmente com um cooldown quando os créditos da sessão se esgotam. Para uso casual, tarefas simples, exploração da ferramenta e avaliação antes de assinar, o gratuito já entrega bastante valor. Mas três recursos críticos para uso profissional consistente só estão disponíveis no Pro, e esses recursos mudam completamente o teto do que você pode fazer com a plataforma.

O primeiro é o acesso ao modelo Claude mais avançado disponível. A diferença de qualidade entre o Sonnet e o modelo mais recente é perceptível em tarefas que exigem raciocínio mais sofisticado, manutenção de contexto longo e qualidade máxima de escrita. Para escrita criativa que precisa chegar a um padrão editorial alto, para código que exige arquitetura mais cuidadosa, ou para análises onde a nuance importa, essa diferença tem impacto real no output.

O segundo é o sistema de projetos. No plano gratuito, a aba de projetos simplesmente não existe. Cada conversa começa do zero, sem memória de interações anteriores, sem arquivos de contexto acumulados, sem instrução persistente de projeto. Para qualquer uso profissional que envolva múltiplos clientes ativos, projetos em andamento com histórico complexo, ou necessidade de manter o Claude contextualizado com materiais de referência ao longo de semanas, essa limitação é crítica e incontornável no plano gratuito.

O terceiro é o volume de mensagens. O Pro oferece um limite significativamente maior de interações por período, o que faz diferença real em dias de trabalho intenso: quando você está iterando sobre código em múltiplas versões, quando está refinando um documento longo em várias rodadas, ou quando está em um processo de pesquisa que gera muitas perguntas encadeadas. O limite gratuito aparece rápido nesses contextos e interrompe o fluxo em momentos críticos.

A recomendação é direta: se você pode investir, assine o Pro, mesmo que já tenha assinatura do ChatGPT. As ferramentas ocupam papéis diferentes e o custo de manter as duas se justifica quando você usa cada uma para o que faz de melhor, ao invés de forçar uma única ferramenta a fazer tudo em um nível médio. O retorno em qualidade de output, especialmente para projetos criativos e de código, justifica o investimento com consistência.

## O fluxo de trabalho completo com o Claude: da briefing à entrega

Um ponto prático que a aula demonstra de forma progressiva é como o Claude pode ser integrado em um fluxo de trabalho criativo do começo ao fim, não apenas para tarefas pontuais. O processo demonstrado com a padaria do futuro ilustra um ciclo que pode ser replicado para qualquer tipo de projeto: cliente real, produto, conteúdo editorial ou campanha.

O ciclo começa com a geração de um briefing de negócio baseado no contexto inicial que você tem sobre o cliente. Mesmo com poucas informações, o Claude consegue estruturar um briefing no formato Lean Canvas com problemas, soluções, segmentos de clientes, proposta de valor e diferenciais. Esse briefing é a primeira camada. A segunda camada é a plataforma de posicionamento: a partir do briefing, o Claude gera os pilares de comunicação, a promessa de marca, o tom de voz e os territórios criativos. Cada nova camada se apoia na anterior porque elas estão todas no mesmo projeto.

A partir da plataforma de posicionamento, você pode continuar: pedir que o Claude escreva copies com base nos pilares definidos, gere conceitos de campanha alinhados com os territórios criados, ou sugira abordagens de conteúdo para diferentes canais. Em cada etapa, o modelo tem acesso ao histórico completo do projeto e responde com consistência crescente, porque o contexto vai se tornando mais rico a cada documento adicionado.

Esse fluxo não é exclusivo de projetos de comunicação. Para desenvolvimento de produto, você pode construir um documento de especificação técnica, adicionar referências de código e pedir que o Claude gere componentes alinhados com a arquitetura já definida. Para educação, você pode construir uma ementa, adicionar objetivos de aprendizado e pedir que o Claude gere exercícios alinhados com cada módulo. O padrão é o mesmo: construir contexto progressivamente e usar o Claude para executar etapas que se apoiam nesse contexto acumulado.

## Coloque em prática

Acesse o Claude com qualquer plano disponível e crie um estilo de voz personalizado que represente a identidade de comunicação de um cliente ou projeto seu. Escreva a descrição do estilo em duas ou três frases curtas, com linguagem coloquial. Não precisa ser um prompt técnico elaborado: "fala como especialista descomplicado, sem jargões, direto ao ponto" já é suficiente para o Claude gerar um prompt de estilo funcional.

Depois de criar o estilo, peça uma prévia com um tema simples relacionado ao negócio ou projeto. Avalie se o tom capturado está correto para o contexto. Se precisar de ajustes, use a opção de edição manual do prompt do estilo para refinar os detalhes.

Se você tiver o plano Pro, crie um projeto para esse cliente e adicione pelo menos dois documentos: um briefing do negócio e um documento com exemplos de comunicação de referência. Inicie uma conversa dentro do projeto pedindo que o Claude sugira três conceitos de comunicação baseados nos materiais disponíveis. Observe como ele usa o contexto dos documentos automaticamente sem que você precise explicar nada sobre o cliente naquela conversa. Depois, peça que ele escreva um exemplo de copy no estilo de voz que você configurou anteriormente, combinando os dois recursos ao mesmo tempo.
