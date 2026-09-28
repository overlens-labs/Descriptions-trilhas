Cálculo interno: [7 blocos] / [24 parágrafos totais] / [1167 palavras estimadas] / [1167 ÷ 200 = 6 minutos]

# Agentes no WhatsApp e Telegram

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar um primeiro pedido de prospecção ou produção de conteúdo em uma pasta
- Aplicar a validação de uma peça antes de pedir produção em volume
- Distinguir o agente, o modelo de IA e os canais usados para acioná-lo
- Reconhecer as escolhas de ferramenta apresentadas na demonstração

## Uma lista de leads como primeira entrega

Ruan abre o Claude Code e parte de um problema concreto: um estúdio individual que implementa IA, automações, agentes e sistemas para empresas precisa encontrar potenciais clientes em Belo Horizonte. O pedido descreve o serviço, pede busca e qualificação de leads e orienta o agente a considerar o tamanho das empresas, pois quem prestará o serviço trabalha sozinho.

Para demonstrar sem esperar uma lista extensa, ele reduz o pedido a cinco leads. Solicita busca no Google Maps, LinkedIn e outras fontes relevantes, com os dados encontrados organizados em uma visualização. O agente pede um recorte adicional de perfil; Ruan responde com pequenas e médias empresas e menciona 50 funcionários como referência.

A pasta local importa: é nela que o agente deve salvar a entrega. Quando percebe que havia iniciado o trabalho em uma pasta inadequada, Ruan abre outra sessão, seleciona a pasta de leads e repete o pedido. Essa correção mostra que a instrução e o local de saída precisam estar claros antes de deixar o agente executar.

O pedido original menciona centenas de leads como possibilidade para uma execução mais demorada. A demonstração fica nos cinco primeiros para permitir acompanhar o raciocínio ao vivo. Esse recorte também ajuda a conferir se o perfil escolhido é bom antes de gastar tempo e tokens numa lista grande.

## Um carrossel como segundo exemplo

Em outra sessão, numa pasta de conteúdo, ele pede um carrossel sobre a relação do mercado com agentes e SaaS. A estrutura solicitada tem sete imagens: capa com headline, telas intermediárias com título e parágrafo e uma última tela com chamada para o público comentar.

O pedido também define referências de pesquisa, como MIT, World Economic Forum e Stanford, orienta a capa a usar uma imagem disponível para uso e propõe gerar as telas com HTML, CSS e JavaScript antes de exportá-las em PNG. Esses detalhes transformam uma vontade genérica de produzir conteúdo em uma entrega com tema, formato, fontes e local de salvamento.

Ruan recomenda pedir uma primeira peça, avaliar e corrigir antes de solicitar dez ou vinte variações. Quanto maior o volume produzido antes da validação, maior pode ser o gasto de tokens e a quantidade de material a refazer. A primeira peça funciona como padrão para as próximas.

Na capa, a headline deve despertar interesse pela sequência; na última tela, o CTA, ou chamada para ação, pede uma resposta do público. As páginas centrais carregam o argumento em texto curto. A referência visual usada no pedido é um design minimalista inspirado na Apple, mas Ruan lembra que a pessoa também pode fornecer uma imagem de referência própria.

## A habilidade de delegar

Os exemplos são pedidos em linguagem comum. Ruan evita entregar um prompt pronto naquele momento para que os participantes exercitem a descrição do próprio problema. É preciso dizer o que se quer, quais dados importam, qual resultado será útil e onde os arquivos devem ficar.

Depois de receber a primeira entrega, a pessoa pode pedir ajustes e expansão. A automação inicial já existe porque o agente realizou trabalho que antes seria manual, mesmo sem um software próprio construído ao redor dele.

## Agente e modelo são peças diferentes

A aula apresenta Claude Code, Codex e ambientes ligados a outros modelos como caminhos para executar tarefas em uma pasta local. A pessoa escolhe uma ferramenta compatível com o acesso que já tem, abre uma sessão no modo de agente, aponta a pasta e faz o pedido. O princípio de delegação é o mesmo nos exemplos mostrados.

Na comparação feita por Ruan, Antigravity e Cursor aparecem como ambientes nos quais se pode conectar provedores diferentes. Ele chama essa possibilidade de BYOK, sigla de *Bring Your Own Key*: a pessoa leva a chave de API de um provedor que escolheu. Paperclip também é mencionado como uma estrutura de vários agentes, mais próxima do enxame discutido antes.

Ruan também apresenta o Hermes como um agente que pode trabalhar com provedores de modelos diferentes. Nesse arranjo, Hermes é a estrutura de execução; o modelo escolhido fornece a capacidade de linguagem. Para conectar um provedor por API, a demonstração passa por uma chave criada no OpenRouter.

A chave é uma credencial e deve permanecer privada; Ruan apaga a que exibiu durante a explicação.

No caminho mostrado, cria-se uma conta no OpenRouter, abre-se a área de chaves de API, define-se um nome e, se desejado, um limite e um prazo de expiração. Depois a chave é copiada para a configuração do provedor no Hermes.

O procedimento é um exemplo de conexão, não uma exigência para quem já vai usar diretamente o agente associado à sua assinatura.

## Custo em dinheiro e custo em tempo

Modelos gratuitos podem reduzir desembolso, mas exigem configuração, teste e correção quando entregam respostas insuficientes. Um modelo contratado pode poupar tempo. A escolha, portanto, depende da tarefa e do custo que a pessoa aceita assumir em dinheiro ou em horas de trabalho.

Ruan mostra que os provedores podem ser trocados em estruturas que aceitam múltiplos modelos. Ao mesmo tempo, lembra que uma ferramenta mais flexível também pede mais decisões de configuração. O critério continua sendo chegar a uma entrega útil para o contexto da pessoa.

## Acesso pelo celular e funcionamento contínuo

O agente local depende do computador ligado para receber um pedido remoto. Para mantê-lo disponível de forma contínua, a aula menciona o uso de uma VPS, um computador remoto que permanece ligado. Ruan apresenta a possibilidade de conectar o agente ao Telegram, WhatsApp e outros canais de mensagens, e prefere demonstrar Telegram com mais detalhe em outro momento.

Ele também mostra a opção de acessar o agente do Claude pelo aplicativo no telefone. Nesse caso, o celular funciona como controle para solicitar trabalho ao agente. O objetivo é poder fazer pedidos fora da mesa, mantendo claro onde o trabalho será executado e salvo.

Para equipes, Ruan menciona canais como Slack e Discord, além de e-mail e SMS. A escolha do canal depende de onde as pessoas já trabalham. O Telegram é apresentado como o caminho que ele considera mais simples para separar conversas com agentes das mensagens pessoais, enquanto a configuração detalhada fica para outro encontro.

## Materiais da aula

- [Vídeo de instalação do Hermes](https://www.youtube.com/watch?v=ulQYyltDXSA): link compartilhado por Daniel Silva no chat do primeiro encontro; Ruan menciona um vídeo de instalação durante a aula.

## Coloque em prática

Abra uma pasta para uma tarefa real. Peça a um agente uma única entrega e indique onde salvá-la. Revise o resultado antes de solicitar mais peças ou uma lista maior.
