Cálculo interno: [11 blocos] / [29 parágrafos totais] / [1365 palavras estimadas] / [1365 ÷ 200 = 7 minutos]

# Os níveis de automação

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir automações manuais, assistidas e automáticas
- Identificar gatilho, entrada, contexto, processamento, decisão, ação, saída e memória
- Estruturar um fluxo com condições, revisão e ciclos de execução
- Reconhecer onde cada tarefa cabe a humanos, IA, scripts ou serviços conectados

## A divisão do trabalho como ponto de partida

Ruan retoma as três naturezas de trabalho. Humanos ficam com escolhas, criatividade e objetivos. A IA contribui com raciocínio, planejamento, busca e decisões limitadas, em conjunto com as pessoas quando necessário. Scripts cuidam de fluxos, eventos e integrações, como a conexão entre duas ferramentas.

Essa divisão prepara os primeiros princípios da automação. Ao conhecer seus componentes, fica mais fácil desenhar fluxos próprios e localizar o ponto em que cada recurso deve entrar.

## Nível 1: automação manual

Uma automação pode começar por um pedido humano. A pessoa solicita, uma entidade executa e entrega. Essa entidade pode ser outra pessoa, uma IA ou um script acionado por comando. No exemplo da aula, pedir que um agente resuma um PDF inicia uma execução automatizada, embora o pedido inicial seja manual.

O termo manual se refere ao gatilho, também chamado de trigger. É o usuário quem o aciona. Um chatbot usado por mensagem segue essa lógica: a mensagem recebida dispara a resposta, mesmo que a estrutura interna tenha sido criada previamente pela empresa que oferece o produto.

## Nível 2: automação assistida

Na automação assistida existe um gatilho e uma execução, seguidos de uma etapa de aprovação. A evidência produzida é avaliada por uma pessoa ou por uma IA antes da conclusão. Essa pessoa não precisa ser quem iniciou o fluxo.

Ruan usa o recebimento de um currículo para ilustrar a ideia de uma entrada que dispara trabalho e depois passa por uma verificação. O elemento central desse nível é a revisão incorporada ao fluxo. Ela permite continuar ou interromper o processo conforme o resultado encontrado.

## Nível 3: automação automática

No terceiro nível, o ciclo inteiro ocorre sem acompanhamento constante. Ruan desenha um exemplo de vendas: chega um lead, uma IA o qualifica, o CRM recebe os dados e, quando o lead aparece como qualificado, outro agente agenda uma reunião. A pessoa pode receber um aviso da reunião marcada e assumir a conversa com o cliente.

O agente que qualifica e o que agenda não precisam ser o mesmo. A condição de qualificação no CRM liga as duas etapas. Se, depois da reunião, uma IA grava, transcreve e gera uma proposta, isso já pode formar outra automação com início e fim próprios.

A qualificação pode ocorrer por perguntas feitas no WhatsApp segundo um método escolhido pela empresa. O registro atualizado no CRM funciona como uma passagem de responsabilidade: somente leads que atingiram a condição definida seguem para agendamento. Esse detalhe evita confundir uma sequência de ações com um fluxo que realmente verifica o estado do trabalho.

## Gatilho e entrada

O gatilho responde à pergunta: quando a automação começa? Pode ser um clique, um e-mail recebido, um horário, a chegada de um cliente, um pagamento, uma mensagem no WhatsApp ou um pedido escrito num chat.

A entrada, ou input, é o que o fluxo recebe para trabalhar. Pode ser texto, áudio, PDF, imagem, formulário, planilha ou dados de um banco. Gatilho e entrada estão relacionados, mas cumprem funções diferentes: o primeiro aciona o trabalho; a segunda fornece o material recebido naquele momento.

No chatbot, por exemplo, escrever uma mensagem é o gatilho e o texto enviado é a entrada. Se a pessoa anexar imagem ou gravar áudio, esses arquivos também passam a integrar o input. Essa distinção ajuda a diagnosticar se o problema foi a falta de acionamento ou a ausência dos dados que deveriam acompanhar o pedido.

## O papel do contexto

Contexto é o conjunto de informações e instruções que a IA precisa para interpretar a entrada. Um agente SDR, por exemplo, recebe a mensagem do possível cliente como input, mas também precisa conhecer perguntas de qualificação, postura e tom de voz. Informações da empresa, produtos, histórico e dados do CRM podem compor esse contexto.

Na produção de conteúdo, uma pesquisa recente pode entrar no fluxo, enquanto as diretrizes de marca e linguagem oferecem o contexto para transformá-la em um post. O contexto pode estar disponível desde o início ou ser buscado depois. Scripts executam passos definidos; a necessidade de interpretar o contexto pertence à IA ou ao humano.

O exemplo diferencia uma novidade encontrada por um agente pesquisador dos elementos estáveis da empresa. A notícia muda a cada execução; marca, tom de voz e critérios editoriais orientam a transformação dessa notícia em conteúdo. Misturar as duas camadas torna mais difícil perceber se uma falha veio do material novo ou de instruções ausentes.

## Processamento e distribuição de tarefas

O processamento responde quem faz o trabalho. Nessa etapa, o fluxo distribui tarefas entre pessoas, agentes, scripts e serviços conectados. APIs podem trazer dados ou permitir ações em outras ferramentas. Bancos de dados, bancos vetoriais e armazenamento de arquivos também podem participar.

Publicar um conteúdo automaticamente, por exemplo, pode depender da conexão com a API da plataforma onde o conteúdo será exibido. A automação precisa determinar qual ferramenta realiza cada parte e como os dados passam de uma etapa para a seguinte.

## Decisão, condição e repetição

A decisão define que caminho o fluxo deve seguir. A aula apresenta condições básicas da lógica de programação, como `if`, `else` e `while`: se algo ocorreu, faça uma ação; caso contrário, siga outro caminho; enquanto uma condição persistir, repita uma etapa. Filtros, classificação, aprovação, confiança e verificação entram nessa camada.

Uma decisão pode vir antes da ação, para escolher o caminho, e depois dela, para avaliar o resultado. Se a entrega não atende à condição, a automação retorna à execução. Esse retorno forma um loop. O ciclo de decisão e ação continua até que a condição estabelecida seja satisfeita ou o processo seja encerrado.

No desenho do fluxo, filtros e classificações reduzem o conjunto de dados antes de agir. Aprovações podem vir de pessoas ou de agentes. Ruan ressalta que a lógica não se limita a código: a estrutura do tipo se acontecer isto, então faça aquilo já é usada para pensar processos e escolher os caminhos possíveis.

## Ação e saída

A ação é o que acontece depois da decisão: enviar um e-mail, criar uma tarefa, atualizar o CRM, mandar uma mensagem, gerar um documento ou publicar conteúdo. A escolha depende do objetivo do fluxo.

A saída, ou output, é o resultado apresentado ou entregue. Pode ser um arquivo, um registro em um sistema ou uma mensagem. Algumas automações são cíclicas e não têm uma saída final isolada, pois continuam rodando e aguardando novos eventos.

É possível haver ação sem um documento para baixar. Atualizar o CRM ou publicar um post já modifica o ambiente. Ao desenhar a automação, vale indicar tanto a ação que muda o estado do sistema quanto a evidência que permitirá confirmar que ela ocorreu.

## Memória para a próxima execução

Memória responde o que fica salvo. Guardar a entrega, as decisões e os dados permite analisar o que aconteceu e melhorar a automação. No fluxo desenhado, uma execução concluída grava informação que poderá voltar como contexto quando surgir o próximo gatilho.

Ruan dá à memória um papel central nos agentes. Sem ela, cada pedido tende a começar de novo, como ocorre com um assistente que recebe prompts soltos. A IA ou os scripts podem fazer os registros, desde que o fluxo tenha definido o que precisa ser preservado.

## O desenho completo

O fluxo apresentado segue gatilho, entrada, contexto, processamento, decisão, ação, saída e memória. Decisões adicionais podem levar de volta a novas ações. Essa sequência é um mapa para construir automações de diferentes tipos, sem pressupor que todas terão exatamente o mesmo número de etapas ou uma saída final visível.

## Coloque em prática

Escolha uma tarefa da sua lista. Escreva o gatilho, a entrada e o contexto necessário. Indique quem executa, qual condição precisa ser verificada, qual ação entrega o resultado e o que deve ficar salvo.
