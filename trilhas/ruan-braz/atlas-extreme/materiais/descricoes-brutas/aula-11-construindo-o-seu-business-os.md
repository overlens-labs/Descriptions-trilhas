Cálculo interno: 14 blocos / 47 parágrafos totais / 1.690 palavras estimadas / 1.690 ÷ 200 = 8,5 minutos

# Construindo o seu Business OS

**Tempo estimado de leitura:** 9 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Estruturar os pilares de um Business OS
- Distinguir briefing, PRD e especificação técnica
- Aplicar Markdown e front matter à gestão de contexto
- Executar uma construção paralela com múltiplos agentes

## Clareza antes de precisão

O trabalho começa com o Claude Code em ambiente local e com a pasta `Business OS` selecionada. Antes de iniciar uma nova construção, também é importante encerrar processos anteriores que ficaram aguardando uma entrada, evitando misturar tarefas de sessões diferentes.

O principal erro ao trabalhar com IA é a falta de clareza. Se o resultado não corresponde à intenção, é provável que a ferramenta não tenha recebido informação suficiente para decidir corretamente. Sem uma direção explícita, ela preencherá as lacunas por conta própria.

Ruan compara essa situação a tentar acertar um alvo. Com luz, distância adequada e visão do ponto desejado, é possível mirar. No escuro, a precisão desaparece porque não há clareza sobre onde acertar. O primeiro trabalho do Business OS é tornar o alvo visível.

## Founder, direção e validação

A estrutura do negócio começa pelo founder, a pessoa que funda e movimenta o sistema. Objetivos de vida, ambição de crescimento e estilo de vida precisam ser considerados antes das decisões operacionais. Um modelo incompatível com a vida desejada tende a produzir conflito mesmo quando cresce.

O segundo pilar é a direção. Ele reúne o mapa do mercado, o ímã de problemas, o perfil ideal de cliente, a tese de valor e a oferta. O mapa localiza oportunidades. O ímã organiza problemas relevantes. O perfil ideal define quem será atendido.

A tese de valor formula qual problema será resolvido e quanto valor o negócio espera capturar. Para quem ainda não possui dados, ela é uma hipótese. A oferta transforma essa hipótese em uma proposta concreta, com entregas, preço e garantias.

Depois da direção vem a validação. É necessário testar a oferta, conquistar os primeiros clientes e verificar o fluxo de caixa. Ruan compara o dinheiro ao oxigênio do negócio e os dados e processos ao sangue que percorre suas operações.

## Começar do zero ou usar dados existentes

Quem está começando do zero precisa formular hipóteses e registrar as decisões iniciais. O Business OS servirá para organizar essas respostas, permitir ajustes e manter os agentes alinhados à mesma visão.

Quem já possui um negócio deve reunir dados de mercado, concorrência, oportunidades, CRM, clientes e pesquisas. Também entram produtos, serviços, ofertas, playbooks, POPs e outras documentações existentes.

Empresas maduras costumam ter ofertas e procedimentos bem definidos. Mesmo nesse caso, o sistema não deve apenas armazenar o passado. Ele deve ajudar a revisitar a direção e verificar se o negócio continua coerente com os objetivos do founder.

## Negócio e estilo de vida

Ruan usa a Overlens como exemplo de uma escolha de escala. Seu objetivo é construir um negócio de experiência em educação, não necessariamente uma empresa global que dispute todos os mercados. A proposta é tornar o estudo tão envolvente quanto outras experiências às quais as pessoas se dedicam espontaneamente.

A reflexão se estende à relação entre trabalho e vida. Ruan apresenta a tese de que o desgaste aumenta quando existe incoerência entre o ambiente vivido, a recompensa percebida e aquilo em que a pessoa acredita. Ele diferencia essa situação do simples volume de trabalho e reconhece que descanso, alimentação, lazer e conforto continuam necessários.

O ponto aplicado ao Business OS é registrar o tipo de vida que o negócio deve sustentar. Mercado e vida pessoal não são completamente separáveis. Entrar em um mercado envolve competição, por isso é necessário construir um ambiente de trabalho no qual seja possível permanecer sem contrariar continuamente os próprios objetivos.

## O Business OS como inteligência do negócio

O pedido inicial define o Business OS como um sistema de tomada de decisão e inteligência do negócio. A interface terá campos nos quais informações poderão ser escritas e salvas. Os mesmos dados também deverão ficar disponíveis para agentes e skills.

Essa estrutura permite que vários agentes trabalhem com a visão da empresa. Quando uma tarefa for solicitada, eles poderão consultar como o negócio funciona, quais decisões já foram tomadas e que direção deve orientar a resposta.

## Markdown e front matter

Os documentos serão armazenados em Markdown porque a estrutura é legível por pessoas e eficiente para IAs. Cabeçalhos e outros marcadores deixam explícita a hierarquia da informação sem exigir uma formatação pesada, o que também ajuda a economizar tokens.

Cada arquivo pode começar com front matter, um bloco de metadados que resume o conteúdo. Antes de ler o documento inteiro, o agente consulta título, tipo, status, versão, responsável, data e tags para decidir se aquele arquivo é relevante para a tarefa atual.

O restante do Markdown desenvolve a informação completa. Essa combinação transforma o documento em uma fonte de contexto que pode ser editada por pessoas, consultada por agentes e organizada de forma consistente.

## Stack e decisões iniciais de tecnologia

O projeto será um web app criado com uma stack baseada em Next.js, tecnologia construída sobre JavaScript e acompanhada de estruturas que aceleram o desenvolvimento. Um web app é um aplicativo executado no navegador.

O banco de dados ainda não será conectado, mas o briefing registra que o Supabase será utilizado depois. Antecipar essa decisão evita que a arquitetura inicial siga um caminho incompatível com a integração futura.

A interface é definida como minimalista, preta e branca, com fonte Inter, bordas arredondadas, sidebar e mudança de fundo ao passar o mouse pelos itens. Cada elemento do mapa do negócio receberá uma página própria.

Cards são escolhidos no lugar de tabelas porque se adaptam melhor a telas pequenas. Eles poderão ser exibidos em grade ou lista, com um seletor para alternar a visualização. Essas decisões dão ao agente critérios concretos em vez de deixar todo o design em aberto.

## Briefing, PRD e especificação técnica

Antes de programar o sistema, a IA deve produzir três documentos. O briefing resume as decisões e funciona como fonte principal do projeto. O PRD, sigla de Product Requirements Document, lista requisitos, comportamentos, fluxos e necessidades do produto.

A especificação técnica, ou spec, registra as tecnologias, frameworks, lógicas e decisões de implementação. Ruan a compara a uma tabela nutricional que mostra do que o projeto é composto.

Esse trio separa planejamento e execução. A IA produz uma primeira versão, mas o usuário precisa revisar o conteúdo e corrigir decisões antes que outros agentes o tratem como verdade.

## Scaffold, shadcn/ui e componentes

O primeiro resultado de código será o scaffold, a estrutura ou andaime sobre o qual o sistema será construído. Ele organiza diretórios, páginas e dependências antes de preencher todas as funções.

O prompt solicita shadcn/ui como base estrutural do design system. Em vez de escrever cada botão separadamente, o projeto cria um componente matriz e utiliza instâncias vinculadas a ele. Se o estilo da matriz mudar, todas as instâncias acompanham a alteração.

Sem essa estrutura, dezenas de botões podem ficar hardcoded, cada um com código próprio. Uma mudança visual exigiria editar todos, consumindo mais tempo e tokens e aumentando a chance de inconsistência.

O Storybook é adicionado para gerir e visualizar componentes e decisões de interface. A equipe da Overlens prefere ajustar o produto diretamente com IA e design system, sem criar previamente todas as telas no Figma. Ruan ressalta que outras pessoas podem continuar usando Figma se esse fluxo fizer mais sentido para elas.

## Paralelização e múltiplos agentes

O prompt orienta o Claude a trabalhar em paralelização, usar múltiplos agentes e delegar em vez de executar tudo sozinho. Um agente principal funciona como orquestrador e distribui documentos ou partes do projeto a outros agentes.

Esse arranjo pode formar um enxame, no qual agentes delegam tarefas a outros agentes dentro de workflows. A execução não começa toda ao mesmo tempo porque o briefing é um gargalo: os demais agentes precisam dessa fonte comum antes de produzir PRD, modelo de conteúdo, design system e código.

Assim que o briefing termina, o orquestrador abre novas frentes em paralelo. A própria IA decide a organização do fluxo de trabalho com base no pedido, mantendo cada especialista alinhado ao documento canônico.

*Para acompanhar o início da construção com o prompt e a imagem de referência, assista a partir de 22:02 no vídeo.*

## Revisar o briefing gerado

O primeiro documento aparece na pasta `docs` em formato Markdown. Seu front matter identifica o tipo de documento, título, status canônico, versão, responsável, data e tags. O corpo descreve problema, visão, usuário, proposta de valor, escopo e o que não fará parte do MVP.

O briefing também registra o modelo mental do produto, as seções, a stack e os objetivos excluídos da fase atual. Delimitar o que não será construído impede que os agentes ampliem o escopo sem necessidade.

O arquivo precisa ser lido e editado quando alguma decisão não representar o projeto. Como todos os agentes seguintes o usam como fonte, um erro não corrigido nessa etapa se propaga pelo restante da construção.

*Para acompanhar a leitura do briefing em Markdown, assista a partir de 38:35 no vídeo.*

## Trabalhar em uma IDE

Uma IDE é um ambiente de desenvolvimento integrado. Ela centraliza visualização e edição de arquivos, diretórios, extensões e terminal, permitindo colaborar com a IA no mesmo projeto.

A aula menciona Antigravity, Cursor, Windsurf e VS Code. Quem já possui preferência pode continuar com sua ferramenta. Para iniciantes, Ruan recomenda o Antigravity porque será a referência usada nas demonstrações.

Na página do Antigravity, é necessário escolher especificamente o produto IDE, instalar a versão do sistema operacional e entrar com a conta Google. Depois do setup inicial, abra a pasta `Business OS` para acompanhar em tempo real os arquivos criados pelos agentes.

*Para acompanhar a instalação e a abertura da pasta na IDE, assista a partir de 46:39 no vídeo.*

## Coloque em prática

Registre seu objetivo de vida, mapa de mercado, problema, cliente, tese de valor e oferta. Envie esse material ao Claude Code e peça briefing, PRD e spec antes do código. Defina Markdown com front matter, Next.js, Supabase futuro, shadcn/ui, Storybook e construção paralela por agentes. Revise o briefing gerado antes de avançar.
