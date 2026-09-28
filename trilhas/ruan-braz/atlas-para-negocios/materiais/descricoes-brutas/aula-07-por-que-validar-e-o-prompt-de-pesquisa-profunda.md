Cálculo interno: [17 blocos] / [63 parágrafos totais] / [2130 palavras estimadas] / [2130 ÷ 200 = 11 minutos]

# Por que validar e o prompt de pesquisa profunda

**Tempo estimado de leitura:** 11 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir pesquisa qualitativa de pesquisa quantitativa na validação de uma hipótese
- Identificar quais quadrantes do Business Model Canvas precisam ser validados primeiro
- Estruturar um prompt de pesquisa de mercado com base, recorte, métricas e revisão
- Reconhecer o custo em crédito de rodar múltiplos agentes em paralelo

## Por que validar depois de fechar o modelo de negócio

Com o modelo de negócio definido e o Business Model Canvas construído, o passo seguinte é validar essas informações. Não dá para seguir adiante apenas com a sua opinião ou com uma resposta do ChatGPT.

Validar significa ir ao mercado atrás de dados e provas mais concretas de que a hipótese é forte e de que faz sentido continuar seguindo naquela direção. Esse trabalho se divide em duas etapas: pesquisa qualitativa e pesquisa quantitativa.

## Conversar com pessoas é o melhor jeito de validar uma hipótese

Quem quer sinais fortes para continuar colocando energia em um negócio precisa conversar com outras pessoas. Esse é o melhor caminho possível para validar uma hipótese.

Na prática, isso significa marcar entrevistas com potenciais clientes, com ex-colegas de trabalho e com pessoas que possam ser o seu perfil de cliente. Vale também procurar empresas da sua cidade ou de qualquer lugar do Brasil.

O contato pode ser marcado pelo LinkedIn ou pelo Google Maps, e ligar para as pessoas continua valendo. A pergunta é direta: elas têm o problema que você acha que elas têm?

O objetivo dessa etapa é sair da sua própria cabeça. Você verifica se o mundo real corresponde ao que está planejando, em vez de assumir que corresponde.

## Por que esta aula pesquisa com inteligência artificial

A imersão tem dois dias, e assistir a alguém pegar o telefone e ligar de uma em uma para fazer pesquisa não caberia nesse tempo.

Por isso o caminho adotado aqui é outro: usar a própria inteligência artificial para buscar dados fortes e sólidos que comprovem partes da tese. A entrevista continua sendo o ideal, ela apenas não cabe nesse formato.

## O que precisa ser validado agora

O ponto de partida é a primeira versão do Business Model Canvas, já construída na aula anterior e disponível no projeto.

A validação não começa por todos os quadrantes. Neste momento interessam apenas dois: segmento de cliente e proposta de valor.

É para esses dois que a pesquisa de mercado é disparada. Os demais quadrantes ficam para depois, quando houver sinal suficiente para sustentá-los.

## A IDE e a produtividade de trabalhar no terminal

A demonstração acontece dentro do Cursor. Na lateral ficam os arquivos do projeto, cada um deles pode ser aberto para estudo, e na parte de baixo fica o terminal, de onde os comandos são enviados ao agente.

O ganho do terminal é produtividade. Os modelos instalados como CLI na máquina podem ser abertos ali, um Claude, um Codex, o que estiver disponível, e quando o crédito de um acaba o trabalho passa para o outro.

O hábito mais usado, principalmente com o Claude, é abrir uma sessão, abrir outra e abrir mais uma. Enquanto uma trabalha, as outras seguem em camadas diferentes do mesmo projeto.

O processo é rápido, fácil e mantém tudo na mesma tela. Você não perde o controle do que está rodando porque não precisa sair do ambiente para acompanhar cada agente.

*Para ver o resultado desta demonstração, assista a partir de [02:18] no vídeo.*

## Quem não configurou a IDE continua pelo aplicativo

Nada do que é mostrado aqui fica inacessível para quem não conseguiu configurar o ambiente. Tudo que for enviado ao Claude ou ao ChatGPT dentro da IDE pode ser enviado dentro do aplicativo, e o trabalho segue normalmente por lá.

A IDE aparece na demonstração por um motivo declarado: mostrar o quanto a produtividade aumenta quando o trabalho passa para esse ambiente. Sem esse ganho real, ela nem teria sido apresentada na trilha.

## O plano usado e o limite de tokens

A demonstração roda em um plano Claude Max 20x, que libera um volume alto de tokens. Isso não quer dizer token infinito.

O limite já foi atingido antes nesse mesmo plano, principalmente ao usar o Fable. A diferença é que sobra folga suficiente para conduzir toda a conversa da aula sem interrupção.

## Trocar de modelo: aplicativo contra terminal

A troca de modelo é mais simples no aplicativo. Basta clicar no modelo em uso, no caso o Opus, e escolher outro: Fable, Sonnet ou Haiku, os mesmos modelos já apresentados na trilha.

No terminal o caminho é diferente. Você digita o comando de barra "model", dá enter, e a lista de modelos disponíveis aparece para escolha.

## Aumentar o esforço de raciocínio do modelo

Além de escolher o modelo, dá para ajustar a força aplicada à tarefa. Subir esse nível aumenta o esforço e o raciocínio do agente, que passa mais tempo pensando naquela tarefa antes de responder.

No terminal esse ajuste também é feito por um comando de barra próprio, seguido do nível desejado. É mais um entre os vários atalhos que precisam ser aprendidos para trabalhar bem nesse ambiente.

## Por que o terminal é o lugar mais avançado hoje

O terminal é hoje o ambiente mais avançado para usar agentes de inteligência artificial, e as atualizações chegam primeiro nele.

Existe um motivo técnico por trás disso: o terminal está conectado direto ao shell. Shell quer dizer concha, e a imagem serve para fixar o conceito, uma concha que protege o seu computador, uma espécie de kernel.

Esse shell conecta a parte de software com a parte de hardware e funciona como camada intermediária entre as duas. Trabalhar no nível do terminal é usar o ponto mais curto para conversar com o seu computador.

Na prática, quando o agente precisa rodar algum comando, isso costuma funcionar melhor ali do que no aplicativo. O aplicativo também funciona e dá para fazer tudo por ele, se for a sua preferência.

A recomendação é começar pelo terminal mesmo assim. No início é estranho, depois vira hábito, e o volume de arquivos criado ao longo da trilha torna inviável gerenciar o projeto só pelo aplicativo.

## Organizar os arquivos e limpar o contexto antes de pedir

Antes do prompt vem a arrumação. Uma pasta chamada docs é criada no projeto e os três arquivos existentes são movidos para dentro dela, apenas para manter a organização.

O modelo fica no Opus e o esforço não é levado ao máximo, porque a tarefa deste momento não exige isso. Se algo mais pesado for necessário depois, a troca é feita na hora.

O último passo antes de escrever é o comando de barra "clear", que limpa tudo o que estava na conversa. O agente entra na pesquisa com o contexto limpo.

## Ditar o prompt por voz dentro do terminal

O prompt não foi digitado. No terminal existe o comando voice, que habilita o envio de um áudio para o agente.

Depois de digitar o comando e apertar espaço, a gravação começa e o prompt é falado por inteiro. O texto ditado aparece transcrito na linha de comando, pronto para ser revisado antes do envio.

## O prompt de pesquisa profunda, parte por parte

O prompt ditado tem sete elementos declarados, e cada um deles cumpre uma função específica no pedido.

### A base do pedido

O prompt abre dizendo que é preciso realizar uma pesquisa de mercado com base no briefing já estruturado e no Business Model Canvas do negócio. A ideia declarada é validar as hipóteses e encontrar sinais fortes de que a direção está certa.

### O que substitui a entrevista

Em seguida o prompt registra de forma explícita que, no futuro, o trabalho vai incluir dados qualitativos e entrevistas, mas que essas informações não estão disponíveis agora. Por isso o pedido é por dados e informações relevantes e recentes.

### O recorte e a postura exigida

A análise pede o mercado dentro do Brasil, com o negócio operando pela internet. A exigência de postura aparece mais de uma vez no texto: ser extremamente realista e até conservador, porque o que se busca é uma validação refinada.

### Os documentos que o agente deve ler antes

Antes de pesquisar, o agente é instruído a analisar o primeiro Business Model Canvas, com a ressalva de que ele ainda vai ser atualizado e melhorado, e também a analisar o briefing. A função disso é fazer o agente entender a direção antes de sair atrás de dados.

### TAM, SAM e SOM com foco no SOM

O prompt pede o entendimento de TAM, SAM e SOM, mas declara interesse maior no SOM. Pede um SOM extremamente realista e conservador, com dados reais que mostrem inclusive como é possível entrar nesse mercado.

O go to market não é o objetivo deste momento, e isso também é dito dentro do prompt. O que se pede são sinais fortes de que aquela é uma boa direção.

### Paralelização e delegação

A instrução de execução é direta: trabalhar em paralelização, com múltiplos agentes trabalhando junto. A frase que define o papel do agente principal é "você não executa, você delega".

### O agente revisor no final

O último elemento é um agente especializado em revisão, com foco em mercado, rodado ao fim do processo. A tarefa dele é apontar pontos cegos e analisar as informações com precisão suficiente para dizer qual é o grau de certeza e confiança que se pode ter em cada um dos dados.

## Revisar o texto ditado antes de dar enter

Antes do envio, o prompt transcrito é conferido trecho por trecho. A transcrição de voz do Claude é pior que a do ChatGPT, e erros de termo aparecem com frequência.

O erro desta vez foi justamente em TAM, SAM e SOM, que saiu escrito de forma completamente diferente do que tinha sido falado. A correção foi manual, trocando o termo errado pelo certo em cada ocorrência.

O restante do texto foi lido e aprovado como estava. Essa conferência é parte do processo sempre que o prompt é ditado, não um passo opcional.

## Paralelização consome crédito

O trecho final do prompt, que pede múltiplos agentes em paralelo, é uma das coisas mais interessantes de fazer com agentes hoje. Ele tem um custo direto, e o custo é crédito e token.

Quem está no plano Plus do ChatGPT ou no plano Pro do Claude, que é o inicial, vai ver o crédito acabar antes de a tarefa ser concluída. Nesses planos, a recomendação é não enviar o prompt com essa parte final.

O resultado de ignorar isso é previsível e frustrante. O processo para na metade, sem aguentar chegar ao fim, e a pesquisa não é entregue.

## Como um agente orquestra vários outros

A explicação serve para quem nunca viu isso acontecer. Você fala com o Claude e pede que ele orquestre múltiplos agentes.

A partir daí ele invoca vários agentes diferentes e distribui uma tarefa para cada um deles, e todos começam a trabalhar ao mesmo tempo. O verbo invocar foi escolhido de propósito, para dar a dimensão mais agressiva do que está acontecendo ali.

O que precisa ficar claro é o que isso significa por baixo. É como abrir vários outros Claudes trabalhando para você ao mesmo tempo, então a tarefa anda mais rápido e o token vai embora junto.

Para quem tem plano mais baixo, esse não é um jeito de usar a ferramenta. Para quem já é usuário pesado e tem crédito de sobra, é exatamente assim que se entrega um volume grande de trabalho em um tempo absurdo.

Com a explicação dada, o prompt é enviado. Os termos de mercado que aparecem nele, TAM, SAM e SOM, são explicados na sequência, enquanto o agente trabalha.

## Materiais da aula

- [Prompt de pesquisa de mercado recuperado do chat](../materiais/organizados/Dia%2001/MD/Prompts/A07%20-%20Pesquisa%20de%20mercado%20-%20copia%20do%20chat.md): reprodução da participante Suelen em duas mensagens, com as lacunas originais preservadas.
- [Pesquisa de mercado ditada em aula](../materiais/organizados/Dia%2001/MD/Prompts/A07%20-%20Pesquisa%20de%20mercado%20-%20trecho%20ditado.md): recorte literal da transcrição.
- [Banco de prompts do SOS](https://sosatlasnegocios.vercel.app/#/prompts) e [SOS Atlas - Dia 01](https://sosatlasnegocios.vercel.app/#/dia-01): apoio geral.

O relatório resultante da pesquisa não veio anexado.

## Coloque em prática

Liste cinco pessoas que podem ter o problema que você acha que elas têm. Marque uma conversa com cada uma.

Escolha só dois quadrantes para validar agora: segmento de cliente e proposta de valor.

Junte o briefing e o Business Model Canvas na mesma pasta antes de pedir a pesquisa.

Peça a pesquisa com postura conservadora declarada e com foco no SOM.

Confira o crédito do seu plano antes de pedir agentes em paralelo.

Revise o texto ditado por voz antes de dar enter.
