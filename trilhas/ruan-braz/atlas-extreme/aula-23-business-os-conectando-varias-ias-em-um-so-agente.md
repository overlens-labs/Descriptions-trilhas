Cálculo interno: 11 blocos / 38 parágrafos totais / 941 palavras estimadas / 941 ÷ 200 = 4,7 minutos

# Business OS: conectando várias IAs em um só agente

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar testes do chat integrado
- Aplicar recuperação de contexto do Business OS
- Estruturar troca de modelos em uma interface
- Reconhecer limites de RAG, prompt e multimodalidade

## Validar a primeira resposta

Depois de reiniciar o servidor, o chat recebe uma mensagem simples e responde pela API. Em seguida, produz um texto para os membros do Atlas, confirmando que interface, backend e provedor estão conectados.

O primeiro teste confirma que o sistema consegue enviar uma mensagem e receber uma resposta do modelo conectado. Em seguida, a aula verifica se o chat também consegue consultar uma informação preenchida no Business OS.

A conversa de teste fica registrada na barra lateral, permitindo abrir as mensagens salvas enquanto novas interações são realizadas.

*Para ver a primeira resposta gerada dentro do Business OS, assista a partir de 00:00 no vídeo.*

## Consultar o contexto do founder

A pergunta seguinte solicita o objetivo do founder. A resposta recupera a meta de atuar na América Latina e alcançar 100 mil membros, informação preenchida anteriormente nos cards.

O resultado é comparado com o card de objetivo. A correspondência mostra que o chat recuperou a informação preenchida no dia anterior e a utilizou na resposta.

Esse é o comportamento esperado para as informações já conectadas à base de conhecimento. Outras áreas ainda precisam ser integradas para também aparecerem nas respostas.

*Para acompanhar a consulta ao objetivo salvo no Business OS, assista a partir de 01:23 no vídeo.*

## Salvar conversas e trocar modelos

O histórico passa a aparecer em uma barra lateral. As conversas criadas durante os testes ficam salvas e podem ser abertas novamente.

Um dropdown é solicitado para escolher o modelo. A interface pode oferecer modelos da OpenAI e também receber conexões com outros provedores.

Modelos mais avançados também podem ser adicionados, mas consomem mais créditos. A escolha no dropdown determina qual modelo será usado naquela conversa.

## Limitar respostas ao domínio

Impedir que o agente responda fora do contexto exige engenharia de prompt. Esse trabalho define como o agente deve se comportar e quais limites precisa seguir.

Ruan explica que esse aprofundamento exigiria uma aula própria. A primeira integração funcional ainda precisa de trabalho de RAG e engenharia de prompt para produzir respostas mais específicas.

A cautela aumenta à medida que o projeto parece simples. O efeito Dunning-Kruger é usado para lembrar que uma primeira integração funcional ainda deixa muitas camadas desconhecidas.

## Refinar a interação visual

A barra de conversas recebe animação de gaveta, ajustes de posição, ícones maiores e seletor de modelo. O refinamento utiliza capturas e instruções sobre comportamento, mantendo os componentes do design system.

Funcionalidade vem antes do polimento. Quando estrutura e dados ainda mudam, uma camada visual elaborada pode precisar ser refeita.

O fluxo sugerido começa por briefing, PRD e especificações, segue para agentes, skills, documentação e scaffold, adiciona componentes com shadcn/ui e Storybook e só depois aprofunda o design.

## Anexar não significa interpretar

A interface permite selecionar uma imagem, mas o primeiro teste informa que o modelo não consegue vê-la. O arquivo ainda não foi enviado a uma rota multimodal compatível.

Para o chat enxergar uma imagem, a API precisa ser configurada para enviá-la ao modelo. Para gerar uma imagem, também é necessário pedir ao Claude que conecte o recurso correspondente no chat.

Cada capacidade precisa ser solicitada e testada separadamente. Um campo de upload sozinho não comprova leitura, e uma chave do Google sozinha não comprova geração.

*Para ver os testes de leitura e geração de imagem, assista a partir de 06:31 no vídeo.*

## Usar segredos sem mostrá-los

O `.env.example` informa quais variáveis existem. O `.env.local` guarda os valores. O código do servidor pode usar uma variável sem imprimi-la ou transmiti-la ao modelo.

O Infisical é apresentado como uma ferramenta para guardar chaves de API e variáveis de ambiente. Ele pode ser conectado ao projeto para enviar esses valores ao servidor de desenvolvimento ou de produção.

Quando o agente precisar usar uma chave do `.env.local`, a instrução é utilizar o valor sem abrir, mostrar ou tocar diretamente no segredo.

## Explicar o Business OS pelo problema

O problema central é usar IAs desconectadas, cada uma sem conhecimento específico do negócio. Agregadores colocam modelos em um lugar, mas não necessariamente organizam objetivo, mercado, processos, cliente e decisões de uma empresa.

O Business OS conecta as IAs necessárias e oferece contexto do negócio. Dessa forma, os agentes podem trabalhar com metas, particularidades, dores, mercado e fontes internas.

Essa formulação começa pela dor e apresenta o sistema como meio. Ela é mais clara do que listar tecnologias como Supabase, PGVector ou APIs sem explicar o resultado.

## Identificar lacunas de recuperação

Uma pergunta externa sobre Epaminondas recebe respostas desconectadas do contexto da aula. Isso evidencia alucinação e ausência de fonte relevante.

Ao perguntar pelos leads prioritários, o chat também declara não possuir informações, embora o CRM contenha registros. A base de conhecimento ainda não indexou ou não consultou essa seção corretamente.

Conectar a API não conecta automaticamente todos os dados. O módulo de leads ainda precisa ser ligado ao chat, e respostas mais específicas exigem trabalho de RAG e engenharia de prompt.

*Para acompanhar a falha de contexto e o teste com os leads, assista a partir de 15:39 no vídeo.*

## Coloque em prática

Teste o chat com uma mensagem simples, uma informação conhecida do founder e uma pergunta sobre os leads do CRM. Compare as respostas com os dados que realmente estão no sistema.

Depois, adicione um seletor entre dois modelos e verifique quais áreas ainda precisam ser conectadas à base de conhecimento.
