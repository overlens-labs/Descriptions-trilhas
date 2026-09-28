Cálculo interno: 18 blocos / 68 parágrafos totais / 2.384 palavras estimadas / 2.384 ÷ 200 = 11,9 minutos

# Business OS: refinando o design com prompts

**Tempo estimado de leitura:** 12 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar o Business OS em um servidor local
- Aplicar prompts visuais para refinar interface e experiência
- Estruturar versionamento com Git e GitHub
- Aplicar agentes ao preenchimento da direção do negócio

## Revisar o sistema construído pelos agentes

Depois do período de execução, a pasta antes vazia contém documentos, código, componentes e agentes. O Claude apresenta caminhos possíveis para continuar: conectar os agentes, polir a interface, preencher informações ou preparar testes e deploy. A escolha inicial é ligar os agentes e revisar a primeira versão visual.

O scaffold contém as áreas de founder, objetivo, estilo de vida, direção, mapa do mercado, ímã de problemas, perfil ideal de cliente, validação e caixa. A IA também criou campos para registrar informações, mas essas decisões ainda são uma primeira hipótese e podem ser personalizadas.

O sistema continua sendo uma casca. Seu propósito é salvar dados que agentes poderão consultar para ajudar na tomada de decisão. Quem já forneceu documentos sobre um negócio pode encontrar alguns campos previamente preenchidos, pois o Claude utilizou o contexto disponível durante a construção.

*Para ver a primeira versão do Business OS gerada pelos agentes, assista a partir de 00:54 no vídeo.*

## Next.js, Node e servidor de desenvolvimento

O projeto foi criado com Next.js, que utiliza Node e pacotes distribuídos por ferramentas como npm e npx. Esses pacotes instalam dependências necessárias para o sistema funcionar.

Como não se trata de um arquivo HTML isolado, a interface precisa de um servidor de desenvolvimento. O endereço `localhost` só responde enquanto esse processo estiver em execução. Fechar a sessão que mantém o servidor ativo torna o site temporariamente inacessível.

É possível pedir ao Claude: `rode o projeto em um dev server para mim`. O agente lê o `package.json`, inicia o processo e informa um endereço como `localhost:3000`. Também é possível executar diretamente `npm run dev` no terminal, evitando o consumo de tokens para uma ação conhecida.

No terminal, `Ctrl+C` interrompe o processo em execução, não copia texto. Se a porta 3000 já estiver ocupada, uma nova execução pode escolher 3001. Encerre o servidor antigo antes de reiniciar se quiser recuperar a porta padrão.

*Para acompanhar a inicialização do dev server e a abertura do localhost, assista a partir de 15:18 no vídeo.*

## Trabalhar pelo aplicativo ou pela IDE

Há dois caminhos válidos. Quem instalou o Claude Code no terminal pode abrir um novo terminal dentro do Antigravity, executar o comando do Claude e trabalhar diretamente na pasta aberta. Quem ainda não concluiu essa instalação pode manter o aplicativo do Claude Code em paralelo com a IDE.

Nos dois casos, confirme sempre a pasta ativa. A IDE serve para visualizar, editar e organizar os arquivos, enquanto o agente executa tarefas no mesmo diretório. O aplicativo continua funcional, mas exige alternar entre janelas para acompanhar código e conversas.

Uma IDE também permite abrir vários terminais. É possível executar sessões diferentes do Claude Code e, se estiverem instalados, Codex e Gemini CLI. Essa centralização aumenta a produtividade, embora exija um período de familiarização.

## Editar a interface com capturas de tela

Para indicar uma alteração visual, capture a região relevante e envie a imagem ao agente. No Claude Code pelo terminal, a aula usa `Alt+V` para colar a captura. No aplicativo, `Ctrl+V` adiciona a imagem normalmente.

O primeiro pedido remove a borda lateral dos itens do menu e cria um botão no canto superior direito para alternar entre dark mode e light mode. Outro pedido troca o fundo totalmente branco por off-white e aumenta o contraste da área de conteúdo.

A imagem elimina a necessidade de descrever coordenadas. O texto ainda deve explicar o que incomoda e qual mudança é desejada. O agente combina a referência visual com a instrução para localizar o componente e alterar o código.

*Para ver a remoção da borda, o novo fundo e o seletor de tema, assista a partir de 25:01 no vídeo.*

## Paralelizar ajustes independentes

Enquanto uma sessão altera o menu, outra pode trabalhar no fundo ou nos campos. Na IDE, abra um terminal adicional e inicie uma nova sessão do Claude. No aplicativo, crie conversas separadas e acompanhe os indicadores de execução.

Essa paralelização funciona quando as tarefas são suficientemente independentes. Também exige atenção: é fácil confundir qual sessão terminou ou permitir que duas mudanças atinjam o mesmo arquivo ao mesmo tempo.

Leia o relatório de cada agente antes de prosseguir. Ele informa arquivos, skills, ferramentas e decisões alteradas nos bastidores, permitindo verificar se o resultado corresponde ao pedido.

## Usar uma referência visual

Sites como Dribbble ajudam a encontrar referências de UI e dashboards. Depois de escolher uma imagem, envie-a ao Claude e peça que o design system e as telas sigam aquela direção.

O prompt orienta a analisar cada detalhe, editar primeiro os componentes e depois atualizar as telas usando instâncias das matrizes. Também pede múltiplos agentes em paralelo. A ordem evita criar ajustes hardcoded em cada página.

A referência não substitui um design system e o resultado não será uma cópia exata. Ela reduz o atrito para chegar a uma direção visual coerente. Quem utiliza um plano com menos tokens pode executar essa análise com Sonnet e esforço médio, pois interpretar e reescrever muitos componentes aumenta o consumo.

Depois da primeira tentativa, compare o resultado com a referência e envie as duas imagens ao agente. Solicite uma análise das diferenças antes de repetir a edição. Esse ciclo usa evidência visual para orientar a próxima melhoria.

*Para acompanhar o envio de uma referência e o prompt de atualização dos componentes, assista a partir de 35:14 no vídeo.*

## Design como compreensão, não apenas aparência

O refinamento aumenta cabeçalhos, melhora contraste, usa toda a largura disponível e organiza formulários dentro de containers. Breadcrumbs registram a sequência de navegação. A área de conteúdo pode ocupar toda a largura enquanto os formulários permanecem centralizados internamente.

Essas decisões não servem apenas para deixar a aplicação bonita. Uma hierarquia clara ajuda o usuário a compreender onde está, o que precisa responder e qual ação vem depois. O objetivo mínimo é impedir que o sistema pareça quebrado ou dificulte a gestão da informação.

Quando for necessária precisão em todos os componentes, a alteração deve acontecer no design system. O Storybook permite visualizar botões, cards, inputs e outras matrizes. Mudar apenas uma tela pode repetir o erro em novas páginas; mudar a matriz propaga a regra para todas as instâncias.

## Versionar com Git e GitHub

Um projeto pode ser corrompido, apagado por engano ou alterado de forma incorreta. O Git registra versões localmente e permite acompanhar o que mudou. Conceitos como commit, branch, merge, push e pull request fazem parte desse fluxo, embora a aula não os aprofunde neste momento.

O GitHub armazena o repositório na nuvem. Ele não é equivalente ao Google Drive: o Drive é armazenamento genérico, enquanto o GitHub foi criado para gerir projetos versionados e colaboração em código.

Depois de criar a conta e autenticar no navegador, peça ao Claude que crie um repositório chamado `Business OS` e envie o projeto. Escolha se ele será público ou privado. O agente prepara também o `.gitignore`, evitando subir arquivos desnecessários ou inadequados.

Cores ao lado dos arquivos na IDE indicam alterações locais ainda não enviadas. O repositório remoto não é atualizado automaticamente. Depois de novas edições, será necessário registrar e subir as mudanças para manter a cópia na nuvem atualizada.

*Para acompanhar a criação do repositório pelo Claude Code, assista a partir de 44:06 no vídeo.*

## Transformar campos vagos em questionário guiado

Os primeiros cards de founder possuíam campos genéricos como objetivo, status e resumo. O refinamento pede mais perguntas e define que uma IA deve analisar as respostas para gerar um briefing.

Também são solicitados inputs mais altos, tipografia maior e contraste melhor. O editor de Markdown deixa de ficar exposto ao usuário. Em seu lugar, aparece um questionário guiado, enquanto o corpo em Markdown continua sendo produzido por baixo da interface.

O fluxo é ajustado novamente para apresentar uma pergunta de cada vez, como um onboarding. Ao final, o sistema reúne as respostas em uma página editável. Os inputs recebem um container para não ficarem soltos sobre o fundo e passam a ocupar melhor o espaço disponível.

Esse padrão pode ser aplicado a briefings de agência, diagnósticos contábeis, planejamento tributário ou coleta inicial de informações jurídicas. A função muda conforme o setor, mas a lógica permanece: perguntas estruturadas produzem contexto que uma IA consegue sintetizar.

*Para ver o questionário do founder e sua evolução para o fluxo de onboarding, assista a partir de 47:03 no vídeo.*

## IA local e integração por API

O sistema pergunta como deve gerar o briefing. O caminho ideal para uma aplicação publicada é conectar uma API, pois o processamento continua funcionando em qualquer servidor e para outros usuários.

Nesta etapa, a opção escolhida é usar o Claude Code já disponível no repositório, sem API. A interface gera um prompt que precisa ser copiado para o agente local. Depois, a IA lê as respostas e devolve o conteúdo sintetizado ao projeto.

Quando a API for conectada, o botão poderá executar a mesma operação dentro da interface. Para transformar o projeto em uma plataforma para terceiros, também serão necessários banco de dados, autenticação, autorização e armazenamento.

## Preencher o contexto do founder

O questionário começa pelo objetivo central, dimensão do sonho, motivo pelo qual o momento é adequado, evidências de sucesso e limites inegociáveis. No exemplo da Overlens, o objetivo é levar o poder da criação às pessoas por meio de educação, conteúdo e experiências de aprendizagem.

A visão mencionada envolve atuar na América Latina e alcançar 100 mil membros. A justificativa considera que as pessoas precisam se reinventar diante do avanço tecnológico e que a realização de ideias tende a ganhar importância diante da especialização isolada.

Em estilo de vida, entram tempo dedicado ao negócio, renda necessária, convivência com a família, possibilidade de morar onde quiser, desejo ou não de formar equipe e ambição de escala. As respostas devem representar o founder, não um modelo genérico de empreendedor.

Depois de salvar, o conteúdo recebe status como `aguardando revisão`. Um agente pode enriquecer a resposta, gerar resumo e tags e propor uma nova versão. O usuário decide se aprova, rejeita ou edita essa proposta.

## Onde os dados ficam antes do banco

Sem banco de dados, as informações podem estar no navegador ou em arquivos do projeto. Na demonstração, o conteúdo é salvo em Markdown dentro da estrutura do Business OS.

Esse armazenamento é suficiente para experimentar localmente e mantém os dados acessíveis ao Claude Code. Para uma aplicação publicada, o caminho correto será migrar o conteúdo para um banco de dados e separar a informação de cada usuário.

Também é necessário evitar forçar uma ação quando o agente informa uma restrição de repositório ou permissão sem compreender a causa. Insistir em comandos durante uma configuração sensível pode produzir alterações indesejadas. Primeiro identifique o arquivo, a política e a autoridade envolvida.

## Agentes dentro do projeto

Os agentes do Claude ficam na pasta de configuração do projeto. Codex ou Gemini podem usar outra convenção. Esses arquivos podem ser lidos e editados para ajustar instruções, ferramentas e comportamento.

O projeto gerado contém agentes para fluxo de caixa, revisão de contexto, orientação do founder, perfil ideal de cliente, mapa de mercado, estratégia de oferta, ímã de problemas, seed, sumarização, validação e tese de valor.

Se os agentes não tiverem sido criados, peça ao Claude que examine o Business OS e gere os papéis adequados. O Founder Coach é acionado para ler o objetivo, verificar campos ausentes e propor uma versão mais precisa.

## Contexto antes da automação

À primeira vista, preencher perguntas pode parecer genérico ou distante de tarefas como prospectar clientes. A lógica é construir a fundação antes do telhado. Sem um negócio definido, um agente não sabe qual mercado pesquisar, que problema priorizar ou quem representa um lead adequado.

O Business OS busca formar uma fonte de verdade. Objetivo, estilo de vida e direção alimentam as decisões posteriores. Quando agentes trabalham em paralelo, o resultado parece autônomo, mas sua especificidade vem do contexto acumulado.

Essa é a aplicação inicial ao negócio. As respostas orientarão mapa de mercado, ímã de problemas, definição de ICP e, mais tarde, busca de leads. Quanto maior a clareza dos dados, menos o agente precisa adivinhar.

## Páginas de agentes e workflow

Para tornar o trabalho tangível, o sistema ganha uma página que lista todos os agentes. Cada card exibe nome, descrição, ferramentas e system prompt. A interface permite editar instruções e pode receber um botão para criar novos agentes.

Se um novo card repetir um problema visual, a correção deve entrar nas regras de design e no componente matriz. Isso garante que futuras páginas herdem o mesmo comportamento sem ajustes manuais.

Outra página, chamada Workflow, apresenta quais agentes estão trabalhando e em que tarefa. O formato sugerido é um Kanban com estados como `a iniciar` e `validado`. A interface pode depois receber ações de arrastar e soltar.

*Para ver a página de agentes com system prompts editáveis, assista a partir de 1:32:14 no vídeo.*

## Colocar os agentes em uma meta

O comando `/goal` define um objetivo no qual a IA continua trabalhando até concluir. Ele consome tokens, por isso deve ser usado com intenção e com modelo e esforço compatíveis com o plano.

O objetivo da demonstração solicita análise de mercado, ímã de problemas e três perfis ideais de cliente. Os agentes devem trabalhar em paralelização e, quando terminarem, preencher a seção de direção do Business OS.

A primeira pesquisa é simples. Etapas posteriores poderão segmentar região, avaliar qualidade de leads e criar uma página de prospecção. Oferta e tese de valor ficam para depois, pois dependem da definição do produto ou serviço.

*Para acompanhar a criação da meta de pesquisa e preenchimento da direção, assista a partir de 1:38:13 no vídeo.*

## Coloque em prática

Rode o Business OS em um dev server. Use capturas para corrigir menu, contraste e inputs. Transforme os campos do founder em onboarding e responda objetivo e estilo de vida. Crie um repositório no GitHub, revise os agentes gerados e solicite uma página para editá-los.

Por fim, defina uma meta de análise de mercado, ímã de problemas e três ICPs com preenchimento automático da direção.
