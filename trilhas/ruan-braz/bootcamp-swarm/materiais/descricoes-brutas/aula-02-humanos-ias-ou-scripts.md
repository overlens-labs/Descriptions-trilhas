Cálculo interno: [9 blocos] / [23 parágrafos totais] / [1155 palavras estimadas] / [1155 ÷ 200 = 6 minutos]

# Humanos, IAs ou scripts

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir tarefas de julgamento, inteligência e execução determinística
- Identificar a diferença entre assistentes, agentes e enxames de agentes
- Estruturar a divisão inicial de tarefas entre pessoas, IA e scripts
- Executar o levantamento de tarefas proposto no formulário de entrada

## Três participantes do trabalho

Ruan organiza o trabalho em três grupos: humanos, inteligências artificiais e computadores executando scripts. Essa distinção ajuda a escolher o recurso adequado para cada tarefa. Um script é uma receita com passos definidos, como os ingredientes e o modo de preparo de um bolo. Ele pode ser escrito, por exemplo, em Python e executado pelo computador sem usar IA.

O exemplo inicial é programar o computador para desligar ou reiniciar em determinado horário. Um agendamento do tipo cron aciona o script, que segue uma sequência fixa. Esse é um trabalho determinístico: diante das mesmas condições, a tarefa é feita da mesma maneira. Reservar esse tipo de execução para scripts evita gastar tokens em etapas que não exigem interpretação.

## Quando entra a inteligência artificial

As tarefas de inteligência exigem interpretar informações, pesquisar, analisar e organizar dados. Ruan coloca a IA nessa camada porque ela consegue processar um volume de dados maior do que uma pessoa conseguiria sustentar mentalmente durante o trabalho. Inteligência, no sentido usado aqui, é capacidade de interpretar; ela não equivale a consciência, emoção ou vontade.

Hooks, ou ganchos, conectam as camadas. Uma IA pode acionar um script existente ou escrever um novo para que o computador o execute. Assim, a IA interpreta e decide qual procedimento usar, enquanto o script realiza os passos previsíveis. A combinação também reduz o uso desnecessário de tokens.

## O julgamento permanece humano

Julgamento envolve escolher objetivos, assumir responsabilidade e decidir o que se quer realizar. Para ilustrar, Ruan compara animais da mesma espécie que reagem de modos diferentes à comida: suas experiências e seu instinto de sobrevivência influenciam a escolha. Ele associa essa dimensão de vontade e vivência aos seres vivos.

Na situação apresentada, uma IA não assume responsabilidade como uma pessoa. Se um sistema causar dano, a responsabilidade recai sobre pessoas ou organizações que o colocaram em operação. Por isso, os objetivos, as escolhas relevantes e a responsabilidade pelo resultado continuam com humanos. A IA é usada como ferramenta para executar o que eles decidiram realizar.

## A tecnologia por trás dos agentes

As inteligências artificiais não surgiram com os chatbots recentes. Ruan remete à história dos perceptrons e ao avanço de dados e métodos como big data, machine learning, deep learning, transformers e GPT. Ele indica as trilhas de fundamentos da Overlens para estudar essa evolução e o funcionamento dos LLMs com mais calma.

LLMs são os modelos de linguagem que servem de motor para produtos e agentes de IA. A qualidade de uma automação depende em grande parte das instruções e da arquitetura em que esse modelo trabalha. Saber conversar com ele por meio de prompts ajuda, mas a construção do sistema ao redor também determina o resultado.

## Assistentes respondem a comandos

Um assistente de IA, como um chatbot, recebe um comando e devolve uma peça de trabalho: um e-mail, um roteiro, uma imagem, uma tabela ou um texto. A pessoa precisa iniciar cada pedido. Essa forma de uso continua valiosa quando a tarefa é pontual e fazer uma automação inteira custaria mais esforço do que pedir diretamente.

Nesse arranjo, o humano envia uma tarefa de cada vez e recebe resultados separados. O assistente não recebe, por si só, um objetivo amplo para decompor e executar até a entrega final.

## Agentes trabalham por objetivo

Com um agente, o pedido muda de escala: uma pessoa define um objetivo e o agente o divide em várias tarefas para entregar um resultado. Ele pode planejar a sequência, usar ferramentas e executar etapas sem exigir que cada uma seja comandada separadamente.

Ruan usa o Claude Code como exemplo: Claude é o modelo, enquanto Claude Code já traz instruções, ferramentas, conexões e uma estrutura de trabalho que o tornam um agente. Codex e outros ambientes agênticos cumprem papel semelhante na aula. O agente não depende de construir outro software para começar a trabalhar.

## O que caracteriza um enxame

Um agente pode realizar as tarefas sozinho. No enxame, um agente delegador divide o objetivo entre vários agentes executores e, quando necessário, avaliadores. Os resultados são reunidos e sintetizados em uma entrega. Agentes subordinados podem, por sua vez, delegar partes do trabalho.

Pedir a um agente que trabalhe em paralelo já permite que ele organize uma distribuição de tarefas. No Bootcamp, a proposta é ir além dessa delegação aberta: desenhar um workflow com etapas explícitas. Isso permite incorporar a metodologia, a sequência de trabalho e as escolhas próprias de quem está construindo a automação.

Paralelização significa executar partes independentes ao mesmo tempo. Ela pode acelerar uma entrega, mas não elimina a necessidade de definir como os resultados serão reunidos e avaliados. Na estrutura desenhada, o agente principal distribui o objetivo, acompanha os executores e devolve uma resposta única ao humano.

Descrever cada etapa do fluxo é uma forma de inserir julgamento humano no processo. A pessoa escolhe a ordem, os critérios e as formas de revisão que fazem sentido para seu negócio. Deixar o agente desenhar tudo sozinho é possível; registrar o workflow próprio permite repetir uma metodologia específica.

## O formulário como mapa de trabalho

Antes de construir o primeiro agente, Ruan pede que cada participante responda ao formulário de entrada. Nele entram a expectativa para os 30 dias, a situação profissional, a área de atuação, o cargo e o que seria uma entrega capaz de superar a expectativa inicial.

A parte central é listar todas as tarefas realizadas no dia a dia, sem tentar classificá-las perfeitamente como estratégicas, táticas ou operacionais. Depois, a pessoa copia para outro campo as tarefas que acredita poder automatizar. A lista original permanece inteira, pois servirá para decidir onde humanos, agentes e scripts devem atuar.

Planejar a direção do negócio aparece como exemplo de julgamento humano. Escrever roteiros de conteúdo é usado como exemplo de trabalho que pode receber ajuda da IA. Essa separação inicial não precisa estar impecável. O objetivo é tornar visível o volume de trabalho e começar a perceber quais tarefas aceitam delegação.

O formulário deve ser preenchido com calma antes de clicar em concluir. Durante o preenchimento é possível voltar às perguntas; depois da conclusão, não. O levantamento é um primeiro exercício e pode ser refeito com mais cuidado nos dias seguintes.

## Materiais da aula

- [Formulário de entrada do Bootcamp Swarm](https://stacker.plus/f/swarm-onboarding): link publicado por Ruan no chat do primeiro encontro.

## Coloque em prática

Liste todas as tarefas que você executa numa semana. Copie para uma segunda lista as que podem ser automatizadas. Marque as que exigem uma escolha sua antes da execução.
