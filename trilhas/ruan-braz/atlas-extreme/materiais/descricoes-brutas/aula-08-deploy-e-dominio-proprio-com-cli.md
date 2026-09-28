Cálculo interno: 9 blocos / 24 parágrafos totais / 725 palavras estimadas / 725 ÷ 200 = 3,6 minutos

# Deploy e domínio próprio com CLI

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar um deploy na Vercel com Claude Code
- Distinguir CLI, terminal, domínio e subdomínio
- Aplicar um domínio próprio a um projeto
- Executar atualizações no ambiente de produção

## Pedir o deploy ao Claude Code

Com a conta da Vercel autenticada no navegador, peça ao Claude Code que publique o site, crie o projeto e utilize a Vercel CLI. Inclua no pedido que a ferramenta deve ser instalada caso ainda não esteja disponível no computador.

A Vercel CLI é preferida nesse fluxo porque permite ao agente executar a operação com comandos diretos e menor consumo de tokens do que outras integrações. O domínio próprio não precisa ser configurado no primeiro pedido.

## Autorizar a conexão com a Vercel

O agente verifica se a Vercel CLI está instalada. Se necessário, ele instala a ferramenta e inicia a autenticação. Uma página é aberta no navegador para que o usuário permita a conexão entre o terminal e a conta da Vercel.

Depois da autorização, o Claude Code cria o projeto e envia os arquivos. O agente realiza as etapas técnicas, mas o usuário continua responsável por conceder a permissão de acesso à conta.

*Para acompanhar o fluxo de autenticação, assista a partir de 02:48 no vídeo.*

## Terminal e CLI

O terminal é uma interface na qual o computador recebe comandos em texto. No Windows, ele pode ser aberto por PowerShell ou CMD. Essa forma de interação existe desde antes das interfaces gráficas com janelas, mouse e botões.

CLI significa Command Line Interface, ou interface de linha de comando. Uma ferramenta com CLI pode ser operada por instruções digitadas no terminal. A Vercel CLI permite autenticar, criar projetos e publicar arquivos dessa maneira.

O Claude Code usa esses comandos em nome do usuário. Em vez de clicar em cada etapa no painel, o agente conversa com o computador e com a Vercel por meio da interface de linha de comando.

## Site publicado e produção

Ao final do processo, a Vercel disponibiliza o site na internet e registra o projeto no painel da conta. Essa versão pública é chamada de produção. Ela é diferente dos arquivos locais, que continuam na pasta do computador.

*Para ver o site publicado e o projeto criado na Vercel, assista a partir de 05:05 no vídeo.*

## Domínio e subdomínio

Todo site publicado precisa de um endereço. Quando o usuário não fornece um domínio próprio, a Vercel usa `vercel.app` e cria um subdomínio relacionado ao nome do projeto. A parte acrescentada antes de `vercel.app` identifica aquele projeto dentro do domínio da plataforma.

Um domínio é tratado como um ativo registrado em nome de uma pessoa ou empresa. Sua titularidade deve ser considerada com cuidado, especialmente quando um profissional compra endereços para clientes. A aula compara essa posse à de um lote.

## Conectar um domínio próprio

Se o domínio já foi comprado em outro provedor, será necessário configurar os registros DNS para apontá-lo à Vercel. Se ainda não existe domínio, a recomendação apresentada é comprá-lo pela própria Vercel para que a conexão seja mais direta.

No painel do projeto, abra `Domains` e use a opção de compra para pesquisar nomes e extensões disponíveis. Os preços variam conforme a extensão e a renovação é anual. Depois da compra, associe o domínio ao projeto.

Se não souber configurar, peça ao Claude Code que conecte o domínio recém-comprado ao projeto por meio da Vercel CLI. O agente pode conduzir a operação usando a conta já autenticada.

*Para acompanhar a pesquisa de um domínio disponível, assista a partir de 08:17 no vídeo.*

## Atualizar o site publicado

Alterar um arquivo local não garante que a versão pública seja atualizada. Depois de pedir uma edição, verifique o site em produção. Se a mudança não aparecer, solicite explicitamente que o Claude Code publique a nova versão.

Não é obrigatório usar a palavra produção. Um pedido como `atualize o site que está publicado na Vercel` fornece contexto suficiente. O importante é distinguir a alteração feita na pasta local do novo deploy que leva essa alteração à internet.

## Coloque em prática

Peça ao Claude Code que publique seu projeto com a Vercel CLI. Autorize a conexão no navegador e abra o endereço gerado. Faça uma alteração pequena nos arquivos e solicite a atualização da versão publicada.
