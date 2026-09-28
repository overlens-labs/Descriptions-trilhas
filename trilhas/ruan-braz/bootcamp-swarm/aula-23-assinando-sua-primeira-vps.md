Cálculo interno: [6 blocos] / [16 parágrafos totais] / [775 palavras estimadas] / [775 ÷ 200 = 4 minutos]

# Assinando sua primeira VPS

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os recursos de um plano de VPS relevantes para o projeto
- Distinguir sistema simples, painel e aplicação pré-instalada
- Reconhecer o que muda ao reconstruir um servidor
- Estruturar a escolha inicial do sistema operacional e da região

## Instalação depende do sistema operacional

Ruan começa mostrando que a instalação de um agente de código já muda entre Windows, macOS e Linux. O mesmo programa pode exigir comandos distintos conforme o sistema. Git, Node e outras dependências também precisam existir no ambiente em que o agente será executado.

Ao levar o trabalho para uma VPS, instala-se um novo ambiente. O que está pronto no computador pessoal não aparece automaticamente no servidor. A aula passa, então, pela escolha do fornecedor, do plano e do sistema operacional antes de conectar as duas máquinas.

## Ler os recursos do plano

Na demonstração, Ruan abre a contratação de uma VPS da HostGator e compara planos com diferentes quantidades de CPU, memória RAM e armazenamento. CPU participa do processamento; RAM é necessária para manter processos ativos; armazenamento guarda sistema, programas e arquivos. Mais automações ou serviços simultâneos aumentam o consumo desses recursos.

O plano menor é apresentado como ponto de partida para testar um agente simples, com possibilidade de ampliar recursos quando o uso justificar. Ruan menciona outros fornecedores como alternativas. Preço, oferta e capacidade exibidos na gravação são exemplos daquele momento; a escolha deve considerar a carga real e as condições atuais do fornecedor.

## Sistema simples, painel ou aplicação pronta

Na contratação mostrada, é possível escolher um sistema operacional simples, um sistema com painel ou uma aplicação pré-instalada. O painel oferece uma interface adicional de administração e também consome recursos. A opção com aplicação pode entregar um agente ou serviço já configurado, mas sua organização interna precisa ser compreendida para manutenção.

Ruan cita aplicações que o fornecedor apresentava, como Hermes, n8n, Paperclip, Docker e outras. No caso de uma instalação pronta, nomes de usuários, senhas, arquivos e caminhos podem seguir as escolhas do fornecedor. Se o acesso não estiver claro, o trabalho de investigar a configuração pode superar o tempo de instalar o necessário por conta própria.

Para a prática da aula, ele escolhe o sistema simples. A VPS recebe apenas o sistema operacional, e o agente ajudará a acrescentar as dependências de cada projeto. Essa escolha dá visibilidade ao que foi instalado e evita manter componentes que a demonstração não usará.

## Sistema operacional e localização

Entre as opções exibidas estão Ubuntu, AlmaLinux e Rocky Linux. Ruan usa Ubuntu na demonstração por ser comum e ter amplo material de referência; explica que AlmaLinux também pode atender ao exercício. O comando de instalação e alguns detalhes de administração variam conforme o sistema escolhido.

Ele seleciona uma região próxima ao uso esperado, em São Paulo, para reduzir a latência das conexões. Essa decisão influencia o tempo de resposta entre o usuário e o servidor. A localização não substitui avaliar hardware, disponibilidade e exigências do projeto.

## Acesso da VPS e acesso da aplicação

No painel do fornecedor, Ruan compara uma VPS simples a outra que veio com Hermes instalado. O usuário e a senha mostrados para SSH dão acesso à máquina. Eles não são necessariamente os mesmos usados para entrar na aplicação. Confundir essas duas credenciais dificulta descobrir por que um login funciona no servidor e falha no programa.

Quando o fornecedor prepara uma aplicação, o e-mail de acesso pode chegar depois da liberação da VPS. Ruan menciona recorrer ao suporte se faltar a credencial da aplicação ou investigar sua instalação pelo terminal. Para quem está acompanhando a aula do zero, a VPS simples evita esse passo extra.

## Reconstruir exige conferir o que será perdido

Ruan mostra a opção de trocar o sistema ou a aplicação de uma VPS e solicita um *rebuild* para voltar a um Ubuntu simples. O painel avisa que os dados existentes serão apagados permanentemente. Ele recomenda verificar serviços e arquivos já presentes e fazer backup antes de confirmar.

Após o pedido, o painel marca o servidor como em preparação. A demonstração só segue quando o status volta a indicar que a máquina está online. Participantes que já haviam escolhido Ubuntu simples são orientados a manter a configuração; a reconstrução não é uma etapa obrigatória para todos.

## Coloque em prática

Anote o que pretende executar na VPS e compare CPU, RAM e armazenamento necessários. Registre sistema operacional, região e tipo de instalação escolhidos. Se já houver dados no servidor, identifique o backup antes de considerar qualquer reconstrução.
