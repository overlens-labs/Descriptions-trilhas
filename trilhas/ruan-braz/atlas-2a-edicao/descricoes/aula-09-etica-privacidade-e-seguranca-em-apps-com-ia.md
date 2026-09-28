# Ética, Privacidade e Segurança em Apps com IA

**Tempo estimado de leitura:** 9 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Reconhecer os principais riscos de segurança ao criar e publicar aplicações com IA
- Aplicar práticas básicas de proteção de senhas e chaves de API
- Distinguir os níveis de risco entre uso local, ferramentas internas e sistemas com dados de terceiros
- Identificar os conteúdos obrigatórios para publicar um sistema que recebe dados de usuários

## Por que segurança é o assunto mais importante agora

Logo após mostrar o poder das ferramentas disponíveis, a aula faz uma pausa intencional. A mesma tecnologia que permite criar sistemas e agentes em horas também é usada para hacking, biotecnologia e outras finalidades críticas. Dois fatores estão subindo ao mesmo tempo: a capacidade das IAs em cibersegurança, e a quantidade de pessoas sem experiência que estão subindo projetos para produção sem nenhuma trava de proteção.

Esses dois fatores juntos criam um problema grave. Dados pessoais, dados de saúde, números de telefone e e-mails estão sendo carregados em servidores sem critério, com brechas de segurança que permitem acesso não autorizado. Isso não é alarmismo. É o cenário documentado por grandes organizações.

## O Projeto Glasswing e o Claude Mythos

A Anthropic lançou o Projeto Glasswing em parceria com AWS, Apple, Cisco, CrowdStrike, Google, JP Morgan, Linux Foundation, Microsoft e NVIDIA. O objetivo é usar IA para fortalecer a cibersegurança global diante de um cenário que eles reconhecem como crítico.

O projeto surgiu a partir do vazamento do Claude Mythos, um modelo interno da Anthropic ainda não lançado ao público, cujo codinome interno era Capibara. Dario Amodei, CEO da Anthropic, afirmou que o modelo é "perigoso demais para lançar". O histórico do CEO corrobora: ele saiu da OpenAI justamente por discordâncias sobre segurança e fundou a Anthropic com o propósito declarado de criar IA segura.

O que o Claude Mythos foi capaz de fazer: encontrou uma vulnerabilidade de 27 anos no OpenBSD, sistema operacional usado em firewalls e infraestrutura crítica, capaz de derrubar remotamente qualquer máquina que o executasse. Identificou também uma vulnerabilidade de 16 anos no FFmpeg, software de codificação de vídeo usado em inúmeros sistemas, que havia sido testado 5 milhões de vezes por ferramentas automatizadas sem detectar o problema. Encontrou ainda vulnerabilidades encadeadas no kernel do Linux que permitiriam escalar de acesso de usuário comum ao controle total de um servidor.

## A projeção de capacidade até 2027

A pesquisa AI-2027 (disponível em ai-2027.com), elaborada por especialistas incluindo pessoas que trabalharam na Anthropic, projeta a evolução da capacidade das IAs em hacking e programação até 2027.

Em abril de 2026, a projeção indica que a IA está no nível profissional tanto em hacking quanto em programação: tão boa quanto a maior parte dos profissionais humanos, mas ainda não superando os melhores do mundo. A previsão é que em janeiro de 2027, a IA possa alcançar o nível dos melhores humanos em ambas as áreas.

Apenas 0,04% da população trabalha com IA no nível de coding scaffold que foi ensinado no Atlas. Quem está dentro dessa bolha de informação tende a subestimar o quanto o restante das pessoas não sabe o que está acontecendo.

## Os três cenários de risco e suas diferenças

Trabalhar localmente com Claude Code no próprio computador é o cenário de menor risco. Se algo vazar, a probabilidade é que seja uma vulnerabilidade dos programas utilizados, não de algo que o usuário criou. O cuidado básico é o mesmo de qualquer computador: não baixar arquivos de fontes desconhecidas.

Criar ferramentas internas para uso próprio ou da equipe já exige mais atenção, especialmente com chaves de API e credenciais.

Vender um sistema que recebe dados de terceiros é o cenário de maior risco e responsabilidade. Aqui entram três obrigações: cumprir os princípios da LGPD (Lei Geral de Proteção de Dados), garantir que os servidores estejam protegidos contra acessos não autorizados, e ter um Termos de Uso e uma Política de Privacidade bem construídos. Quem ignora esses três pontos está correndo risco legal e moral que pode comprometer tanto os próprios dados quanto os dados dos usuários.

## Cofre de senhas: a prática mais urgente

A maioria das pessoas usa a mesma senha em vários lugares. Isso foi demonstrado de forma direta na aula: quem levantou a mão ao ser perguntado sobre o hábito forneceu essa informação ao vivo, em uma plataforma monitorada. O ponto é preciso: a gente não para para pensar que está fornecendo dados o tempo todo.

A solução recomendada é o vault de passwords, também chamado de cofre de senhas. Ferramentas como LastPass, 1Password e Zoho Vault funcionam da seguinte forma: você cria uma conta no cofre com uma senha mestra que não usa em nenhum outro lugar. Essa senha mestra pode ser anotada em um caderno físico, sem identificação do que ela é. Dentro do cofre, o gerador de senhas cria senhas fortes e únicas para cada serviço, e o cofre as guarda automaticamente.

Para projetos com IA, o ideal é criar um vault por projeto: um cofre separado com as senhas e chaves de API daquele projeto específico, com senha mestra própria. Isso limita o dano em caso de comprometimento. Quando precisar da senha de um serviço, você entra no cofre, copia e cola. O comportamento muda, mas não é difícil de adotar.

## Autenticação de dois fatores nas redes sociais

O segundo conselho prático é ativar a autenticação de dois fatores em todas as redes sociais e contas importantes. A resistência comum é que é inconveniente. O que é realmente inconveniente é ter a conta hackeada, ver stories sendo publicados em seu nome oferecendo produtos, ter os contatos sendo abordados por mensagens falsas que vieram da sua conta, e lidar com as consequências disso meses depois.

A autenticação de dois fatores é o mínimo. É uma prática que deve ser ensinada para qualquer pessoa que começa a usar internet, especialmente quem vai construir e publicar sistemas com dados de outros.

## Direção antes de execução

A aula encerra com um conselho sobre como usar o poder das ferramentas aprendidas: não sair atirando para todo lado. A empolgação de quem aprende a usar agentes e Claude Code tende a gerar um volume alto de projetos iniciados sem clareza de propósito.

O que resolve a vida de quem aprendeu essas ferramentas é ter direção: saber quais problemas reais de outras pessoas você consegue resolver. Não procure clientes para suas soluções. Procure soluções para as pessoas ao seu redor.

A Overlens vai disponibilizar um relatório com as 100 ideias de negócio com IA mais promissoras para 2026, baseado nos dados de investimento das principais aceleradoras de startups do mundo, não em suposições. A diferença entre uma lista assim e o que uma IA gera ao ser perguntada sobre "boas ideias de negócio" é exatamente o que separa hipótese de dado.

## Coloque em prática

- Ative a autenticação de dois fatores em todas as suas redes sociais e contas de ferramentas que você usa.
- Crie uma conta em um cofre de senhas, migre suas senhas mais importantes para ele e use o gerador para criar senhas únicas nos próximos acessos.
- Antes de qualquer projeto que envolva dados de outras pessoas, verifique se você tem Termos de Uso, Política de Privacidade e servidor configurado com proteção adequada.
