Cálculo interno: [7 blocos] / [23 parágrafos totais] / [828 palavras estimadas] / [828 ÷ 200 = 5 minutos]

# Supabase princípios básicos

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar a criação de conta e projeto no Supabase
- Reconhecer organização, projeto, senha e região
- Executar a conexão do Claude com Supabase via MCP
- Identificar variáveis de ambiente e riscos de segurança

## Criação da conta no Supabase

A aula começa orientando a criação de uma conta no Supabase. O Ruan recomenda acompanhar com atenção e anotar, porque o fluxo tem várias telas e detalhes.

O primeiro passo é acessar o site do Supabase e criar conta com e-mail. Também é possível conectar pelo GitHub, mas o Ruan evita esse caminho porque Git e GitHub não foram explicados ainda na trilha.

Depois de criar a conta, o aluno confirma o e-mail e faz login. A partir daí, precisa criar uma organização, que pode ter o nome da empresa, do projeto ou do próprio usuário.

## Organização e projeto no plano gratuito

Na criação da organização, o tipo pode ficar como pessoal, e o plano gratuito é suficiente para a maioria dos projetos iniciais da trilha. O Ruan explica que projetos maiores, com muitos arquivos e dados, podem exigir plano pago ou outras ferramentas.

Dentro da organização, o aluno cria um projeto. No exemplo, o nome usado é Brand System. O Supabase permite ter projetos gratuitos dentro de uma organização, o que é adequado para o exercício.

O Ruan também menciona ferramentas como Neon para banco de dados, mas mantém o Supabase porque ele reúne banco de dados, autenticação e storage no mesmo lugar.

## Senha do banco e configurações iniciais

Durante a criação do projeto, o Supabase gera ou solicita uma senha. O Ruan reforça que essa senha precisa ser guardada, porque será necessária para acessar e configurar o projeto.

Ele recomenda usar senha forte, não senha fácil, pois esse é um ponto sensível do sistema. Se a senha se perder, será necessário trocar nas configurações e isso pode gerar retrabalho.

A região pode ficar nas opções padrão disponíveis, e configurações avançadas não precisam ser alteradas neste momento. A aula busca o caminho mais simples para o aluno avançar sem se perder em detalhes técnicos.

## O que será configurado no Supabase

Depois que o projeto é criado, a aula apresenta as áreas principais: autenticação, database, editor de tabelas e storage. Tudo poderia ser configurado manualmente na interface, mas isso exigiria uma trilha própria.

O caminho escolhido é pedir ao Claude para configurar o projeto. Para isso, o Claude precisa ter acesso ao Supabase por meio de MCP, o Model Context Protocol.

O MCP é apresentado como a conexão entre Claude e Supabase. Ele permite que o agente enxergue e opere o serviço externo, criando tabelas, buckets, configurações e integrações conforme as instruções.

## Conectando Claude ao Supabase via MCP

O Ruan abre o aplicativo desktop do Claude, acessa personalização, conectores e procura o conector Supabase. Depois, autoriza o Claude a acessar a organização criada no Supabase.

Na autorização, o usuário seleciona a organização correta. Se houver mais de uma conta ou organização, é importante conectar a certa, porque o agente só conseguirá enxergar o projeto associado àquele acesso.

Depois da conexão, o Claude passa a ter um canal para trabalhar com o Supabase. Ainda assim, permissões podem exigir confirmação do usuário, dependendo da configuração escolhida.

## Variáveis de ambiente

A aula introduz variáveis de ambiente como dados sensíveis que mudam de acordo com o ambiente. Exemplos incluem senhas, chaves de API, URLs e chaves de acesso a serviços.

Essas informações geralmente ficam em arquivos `.env`, enquanto um arquivo `.env.example` mostra a estrutura sem expor os valores reais. O `.env.example` ajuda a IA e outros desenvolvedores a entenderem quais variáveis existem sem revelar segredos.

O Ruan alerta que chaves de API conectadas a serviços pagos podem gerar prejuízo se vazarem. Alguém poderia usar a chave em outro sistema e gastar o dinheiro da conta. Mesmo em modelos gratuitos, uma chave vazada pode causar bloqueio ou abuso da conta.

## Segurança básica ao lidar com segredos

Variáveis de ambiente não devem ser expostas em repositórios, mensagens ou arquivos que a IA leia sem necessidade. Se um `.env` for enviado ao GitHub, mesmo que depois seja apagado, ele pode permanecer no histórico de commits.

A aula antecipa que ferramentas mais seguras podem gerenciar variáveis de ambiente sem deixá-las soltas no projeto. Ainda assim, para a trilha, o Ruan apresenta a base conceitual que o aluno precisa saber antes de conectar Supabase e outros serviços.

A regra prática é tratar senhas, chaves de API e tokens como segredos. A IA pode ajudar a configurar, mas o aluno precisa saber o que está sendo compartilhado e onde aquilo ficará armazenado.

## Coloque em prática

Crie sua organização e seu projeto no Supabase, salvando a senha do projeto em um local seguro.

Depois, conecte o Claude ao Supabase via MCP e peça apenas uma confirmação de acesso antes de solicitar qualquer alteração.
