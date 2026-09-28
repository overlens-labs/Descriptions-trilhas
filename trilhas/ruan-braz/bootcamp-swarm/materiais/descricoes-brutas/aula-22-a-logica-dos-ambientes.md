Cálculo interno: [7 blocos] / [19 parágrafos totais] / [946 palavras estimadas] / [946 ÷ 200 = 5 minutos]

# A lógica dos ambientes

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir ambiente local, serviço em nuvem e VPS
- Identificar os recursos que limitam uma automação contínua
- Reconhecer como SSH permite acessar um servidor remoto
- Estruturar a função de containers na instalação de projetos

## A peça que faltava ao fluxo

Ruan abre o quarto encontro retomando o caminho da turma. Nos encontros anteriores, foram separadas tarefas de pessoas, IA e scripts; depois vieram os módulos de pesquisa e copy; por fim, as APIs de dados e ferramentas. O exemplo de pesquisa já funciona, mas depende de um computador ligado no horário agendado.

Um caso ajuda a lembrar por que separar as entidades. Ao tentar resumir muitos dados com uma IA, uma pessoa recebeu valores inventados. Ruan propõe usar um script determinístico para colocar os dados nos lugares corretos e deixar ao modelo a interpretação. Essa divisão reduz a chance de o agente preencher lacunas de informação com suposições.

Neste encontro, a questão passa a ser onde cada parte vai rodar. A intenção é levar uma automação funcional para um ambiente disponível continuamente e, depois, conectá-la a um canal de conversa como Telegram. Ruan apresenta um guia de VPS e SSH para acompanhar os comandos e o processo.

## O que o ambiente determina

Preparar o computador local para um agente de código já foi uma configuração de ambiente: instalar ferramentas como Git e Node e permitir que o agente trabalhe numa pasta. Nesse lugar, a pessoa controla arquivos e dependências. Em troca, as rotinas param se o computador estiver desligado e podem disputar memória e processamento com o uso normal da máquina.

Uma sessão oferecida na nuvem pelo fornecedor do agente tem regras e recursos definidos por esse fornecedor. Ela pode ser conveniente, mas oferece menos controle sobre o servidor. Já uma VPS é um computador virtual remoto alugado para executar aplicações. A pessoa escolhe o sistema, instala dependências e acessa a máquina a partir do próprio terminal.

Ruan apresenta a VPS como opção para manter rotinas ativas e separar seu ambiente de trabalho do ambiente de execução. O hardware contratado precisa comportar os projetos. Se houver vários processos, agentes e serviços rodando juntos, memória, CPU e armazenamento passam a ser critérios de escolha.

Um computador próprio dedicado, como o Mac Mini citado por um participante, também pode exercer esse papel se permanecer ligado e for administrado para a tarefa. A VPS é a opção alugada e remota usada na demonstração.

## Modelo hospedado e modelo instalado no servidor

Uma VPS também permite instalar determinados modelos de linguagem quando seus pesos estão disponíveis e o hardware é suficiente. Ruan cita LLMs, modelos pequenos chamados SLMs e modelos de pesos abertos como possibilidades. O custo do servidor e a capacidade do modelo precisam ser comparados ao uso de uma API externa.

Ele distingue instalar um modelo no servidor de instalar ali apenas um cliente do Claude Code ou de outro serviço remoto. No segundo caso, as solicitações ao modelo continuam sendo processadas pelo provedor. Para um projeto que requer que dados permaneçam em um ambiente controlado, essa diferença precisa ser verificada antes de escolher a ferramenta.

O exemplo não significa que qualquer VPS rode qualquer modelo. Tamanho de memória, capacidade de processamento, armazenamento, qualidade desejada e configuração técnica determinam o que é viável.

## O túnel SSH

Ruan desenha um computador pessoal ligado à VPS por SSH, sigla de *Secure Shell*. O usuário digita comandos no terminal local e, depois de se autenticar, passa a executá-los na máquina remota. A tela ainda parece um terminal comum; por isso, é importante reconhecer em qual computador cada comando está rodando.

Esse acesso depende do endereço IP, da porta, do usuário e de uma credencial. O passo a passo será demonstrado na aula seguinte. No momento, a ideia central é que SSH oferece um caminho de administração sem exigir uma tela gráfica aberta na VPS.

## Uma aplicação pode ocupar vários ambientes

O mesmo produto pode aparecer como web app, programa de desktop e aplicativo móvel. Cada ambiente traz dependências, recursos e regras de distribuição próprios. Ruan usa essa diferença para explicar por que conhecer a arquitetura ajuda mais do que decorar uma única linguagem: a ferramenta pode escrever código, mas a pessoa ainda decide onde o projeto precisa funcionar.

Um web app responsivo pode ser acessado em dispositivos diferentes pelo navegador. Se o projeto exigir acesso a recursos locais ou uma experiência específica para celular, talvez precise de outra forma de aplicação. A escolha muda as tecnologias, os testes e o modo de entrega.

## O papel do Docker

Ruan apresenta containers como pacotes de aplicação e dependências configurados para rodar de forma repetível. Docker é a ferramenta citada para criar e executar esses ambientes. Em uma VPS, o container ajuda a reproduzir a instalação do projeto, organizar serviços e facilitar uma migração ou reconstrução posterior.

Ele usa a imagem de carregar as regras do ambiente junto com o projeto. A ideia prática é evitar que uma instalação só funcione porque alguém configurou a máquina manualmente e esqueceu os passos. Containers ajudam a registrar dependências, mas cada sistema operacional e aplicativo ainda tem limites próprios; a compatibilidade precisa ser testada.

## Materiais da aula

- [Quadro do Bootcamp Swarm no Figma](https://www.figma.com/board/pWajXLautZ6pMWOUcQ7t3O/Bootcamp%2D%2D%2DSwarm?node-id=613-121&p=f), compartilhado no chat do quarto encontro.

## Coloque em prática

Escolha uma automação que já funciona no seu computador. Liste suas dependências, o horário em que precisa rodar e os recursos que consome. Decida se ela exige uma máquina sempre ligada e registre o que será necessário reproduzir em outro ambiente.
