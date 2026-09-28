# Construção de Agentes

**Tempo estimado de leitura:** 8 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Estruturar um briefing completo para que o Claude Code comece um projeto com contexto adequado
- Aplicar os conceitos de TAM, SAM e SOM na análise de mercado via agentes
- Distinguir a lógica de ICP correta: encontrar soluções para clientes, não clientes para soluções
- Estruturar um documento de workflow com subagentes, skills e critérios de execução

## Iniciando o projeto com uma nova pasta

O projeto da aula é a construção do modelo de negócio da Overlens do zero usando agentes de IA. O processo começa criando uma pasta chamada "BM Overlens" na área de trabalho. O Antigravity é aberto a partir dessa pasta, e o Claude Code é iniciado dentro dela com o modo modo dangerously skip permissions, o que permite que ele trabalhe sem pedir confirmação a cada ação.

Esse modo é mais rápido, mas também mais arriscado. Para iniciantes, a recomendação é usar o modo "Enable Auto Mode", que mantém mais controle sobre o que o Claude pode fazer sem aprovação manual.

## O briefing: como explicar o projeto para o Claude

O Claude Code começa cada sessão zerado, sem contexto. A primeira tarefa é sempre dar um briefing explicando o que será construído. O briefing é digitado diretamente no terminal, como uma conversa.

O briefing desta aula descreve a Overlens: uma plataforma de aprendizagem baseada em comunidade, não uma área de membros com videoaulas empilhadas, não um marketplace de cursos, não um bootcamp com currículo. O diferencial é o aprendizado puxado por demanda: o aluno traz um projeto real e a IA mapeia quais aprendizados e habilidades ele precisa para executá-lo. O modelo se inverte em relação ao educação tradicional: ao invés de aprender primeiro para aplicar depois, você traz o que quer fazer e descobre o que precisa aprender.

O Claude gera um briefing estruturado a partir desse contexto, com a descrição do negócio, o que ele não é, as premissas fundamentais e a visão. Esse documento é salvo automaticamente como `briefing.md` na pasta do projeto.

## TAM, SAM e SOM: dimensionando o mercado

A primeira etapa de análise que o workflow vai executar é o TAM/SAM/SOM. Os três termos representam níveis diferentes do mercado:

SOM (Serviceable Obtainable Market) é o mercado obtível, onde o negócio começa a buscar seus primeiros clientes. SAM (Serviceable Available Market) é o mercado endereçável, o potencial de clientes que o negócio é capaz de atingir nos próximos dois a cinco anos. TAM (Total Addressable Market) é o mercado total, onde o negócio compete com seus concorrentes.

Essa hierarquia serve para não confundir o tamanho do sonho com o ponto real de partida. Começar pelo SOM e expandir progressivamente é a forma inteligente de dimensionar.

## A lógica correta do ICP

A segunda etapa é o ICP, que significa Ideal Customer Profile ou Perfil Ideal de Cliente. O conceito central apresentado na aula: não se encontram clientes para as soluções. Encontram-se soluções para os clientes.

O erro mais comum de quem está começando é criar um produto ou serviço e depois ficar tentando achar quem quer comprar. A lógica correta é inversa: conversar com pessoas, entender quais são os seus maiores desafios, e criar algo que resolve exatamente esses desafios. Quando existe esse alinhamento, o atrito de vendas cai porque a solução chega na frente do problema que a pessoa já está sentindo.

O ICP serve para definir qual é o perfil de cliente que tem esse problema de forma mais intensa: quantas pessoas na equipe, qual faturamento mensal e anual, qual a margem, em qual momento da empresa a dor se torna urgente, e quem é o decisor da compra dentro do negócio.

## O fluxo completo do workflow

O processo que os agentes vão executar segue esta sequência: briefing, pesquisa de mercado com TAM/SAM/SOM, mapeamento de problemas do mais latente ao menos latente, definição do ICP, tese de valor, oferta seguindo o framework de Alex Hormozi (oferta de valor percebido), e copy da landing page.

Cada etapa gera um documento específico que alimenta a etapa seguinte. O Claude não executa tudo de uma vez: primeiro planeja, depois o usuário valida o plano antes de autorizar a execução.

## Criando o documento de workflow

Depois do briefing, o próximo prompt pede ao Claude que crie um documento `workflow.md` especificando quais subagentes são necessários, quais skills cada um precisa, e qual será o fluxo de trabalho entre eles. O Claude não executa nada ainda. Apenas planeja.

A instrução pede também que o Claude sugira um "project manager" para coordenar o fluxo e um agente de QA para verificar ao final de cada etapa se o trabalho foi executado corretamente. Além disso, pede que o workflow use MERMAID para gerar diagramas visuais do processo. Os critérios de execução de cada etapa também devem constar no documento.

Essa separação entre planejar e executar é essencial. Aprovar o workflow antes de começar garante que os agentes não sairão fazendo coisas fora do escopo.

## O comando /clear e o gerenciamento do contexto

Após o Claude concluir um documento, é boa prática limpar o contexto de conversa com o comando `/clear`. Isso reseta a janela de contexto sem fechar o terminal, permitindo iniciar a próxima tarefa do zero. Dar um briefing completo a cada nova tarefa é melhor do que deixar o Claude carregando o histórico de toda a sessão, o que pode aumentar o uso de tokens sem necessidade.

## Os agentes do Estúdio Vanguarda como referência

Para mostrar o resultado final desse processo, a aula abre o projeto Estúdio Vanguarda, um projeto de orquestração de agentes construído previamente na Vanguarda. O projeto tem os seguintes agentes construídos:

O agente "Maestro" é o orquestrador central do projeto. Ele é o único que coordena os outros, decide quando acionar cada agente e em que ordem. Os demais agentes têm funções específicas: Definição de CP (perfil de cliente), Direção Estratégica, Ímã de Problemas, Mapa de Mercado, Motor Moral, Oferta e Tese de Valor. Cada arquivo de agente contém um conjunto completo de instruções para aquela função específica.

O projeto Estúdio Vanguarda não é compartilhado porque foi construído com a metodologia proprietária da Vanguarda. A aula o mostra apenas para evidenciar o que é possível construir e como os arquivos de agentes são organizados dentro de um projeto real.

## Coloque em prática

- Crie uma pasta para um projeto seu, abra o Claude Code dentro dela e escreva um briefing explicando o que você quer construir.
- Depois que o Claude gerar o briefing, peça que ele escreva um documento de workflow com os subagentes, skills e fluxo necessários para executar o projeto, sem executar ainda.
- Revise o workflow gerado e valide se faz sentido antes de autorizar qualquer execução.
