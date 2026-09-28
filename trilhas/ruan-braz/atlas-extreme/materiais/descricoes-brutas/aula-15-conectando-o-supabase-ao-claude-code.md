Cálculo interno: 9 blocos / 30 parágrafos totais / 891 palavras estimadas / 891 ÷ 200 = 4,5 minutos

# Conectando o Supabase ao Claude Code

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar novamente o servidor de desenvolvimento
- Estruturar um projeto inicial no Supabase
- Distinguir conexões por MCP e CLI
- Aplicar autenticação do Supabase CLI com segurança

## Reabrir o servidor de desenvolvimento

O endereço `localhost` deixa de responder quando o computador é desligado ou o processo do servidor é encerrado. O código continua salvo, mas a aplicação precisa ser executada novamente.

É possível pedir ao Claude para abrir o dev server ou usar o comando do projeto. Se uma porta estiver bloqueada ou ocupada, selecione outra, como 3040. A mudança de porta afeta o endereço usado no navegador e, mais tarde, as configurações de redirecionamento da autenticação.

*Para acompanhar a reabertura do Business OS em outra porta, assista a partir de 00:18 no vídeo.*

## Por que adicionar um banco de dados

O Business OS já contém direção, mapa de mercado, ICPs, agentes, leads e oportunidades. Parte dessas informações pode estar em Markdown, JSON ou armazenamento do navegador. Nesse formato, o estado pode não acompanhar o usuário em outro computador.

Um banco de dados fornece persistência centralizada. Depois de autenticada, a pessoa acessa os próprios dados independentemente da máquina. Esse passo também prepara o sistema para múltiplos usuários, permissões e integrações por API.

A infraestrutura planejada inclui banco de dados, autenticação, autorização e storage. A API permitirá que botões da interface acionem uma IA diretamente, sem exigir que o usuário copie comandos para o terminal.

## Criar a conta e o projeto no Supabase

O Supabase reúne banco de dados, autenticação, autorização e storage em uma plataforma. Firebase, MongoDB e Neon são alternativas citadas, mas o Supabase é escolhido por facilitar o primeiro contato com esses serviços.

Crie a conta, preferencialmente usando o GitHub já configurado, e inicie um projeto chamado `Business OS`. Defina uma senha forte para o banco e guarde-a em um gerenciador seguro. Se for possível escolher a região, uma localização próxima aos usuários tende a reduzir latência.

Ative Row Level Security, ou RLS. Essa camada ajuda a restringir quais linhas cada usuário pode acessar. A presença de RLS não elimina a necessidade de modelar políticas e testar permissões, mas oferece uma base mais segura.

O cuidado cresce com a escala. Um sistema interno para poucas pessoas possui exigências diferentes de um produto usado por milhares. Banco, desempenho, segurança, privacidade e tratamento de dados precisam evoluir em camadas.

*Para ver a criação e as configurações iniciais do projeto, assista a partir de 08:10 no vídeo.*

## Conectar o Supabase no aplicativo do Claude

No aplicativo do Claude, abra a área de personalização, acesse conectores, navegue pela lista e selecione Supabase. O navegador solicita login e autorização para a organização escolhida.

Essa autorização permite que o Claude realize operações no Supabase de acordo com os acessos concedidos. A área de aprovações permite revisar permissões. Conceda somente o necessário e remova a conexão quando ela não for mais usada.

O conector utiliza MCP. Depois de vinculado, ele também pode aparecer na gestão de conexões do Claude Code. MCP é útil quando a IA precisa navegar pelas capacidades oferecidas pelo serviço.

*Para acompanhar a autorização do conector do Supabase, assista a partir de 15:08 no vídeo.*

## Preferir a CLI no terminal

Para trabalhar dentro do repositório, a aula recomenda também o Supabase CLI. O Claude verifica o projeto, prepara os arquivos locais e executa comandos como inicialização e login.

Uma CLI expõe comandos diretos e costuma consumir menos tokens do que uma integração MCP. Nem todo serviço oferece CLI e alguns trabalhos só podem ser feitos por MCP ou por uma conexão personalizada.

Quem já conhece os comandos pode seguir a documentação e executá-los manualmente, sem gastar tokens. Para iniciantes, pedir que o Claude oriente a instalação reduz erros de sequência, desde que credenciais privadas não sejam enviadas na conversa.

## Autenticar no navegador

O login da CLI exige uma ação humana. Execute o comando orientado em um terminal, confirme a abertura do navegador, autorize a conta e, quando solicitado, devolva ao terminal o código temporário exibido no fluxo.

Se o modo interativo dentro da conversa falhar, copie apenas o comando e execute-o em um terminal separado. Depois do sucesso, avise ao Claude que o login foi concluído para que ele valide a conexão.

*Para ver a autenticação do Supabase CLI pelo navegador, assista a partir de 22:14 no vídeo.*

## Não entregar credenciais à IA

Ao solicitar a conexão, o agente pode apresentar alternativas que incluem fornecer um token. A opção mais segura para quem ainda não distingue credenciais públicas e privadas é realizar pessoalmente o login interativo.

Autorizar no navegador é diferente de colar uma chave secreta em uma conversa. O primeiro fluxo delega acesso dentro de um mecanismo controlado; o segundo pode expor uma credencial em histórico, logs ou serviços externos.

O próximo passo é configurar variáveis de ambiente. Peça instruções em etapas e insira os valores privados diretamente nos arquivos apropriados, sem publicá-los no chat.

## Coloque em prática

Reabra o Business OS e confirme a porta ativa. Crie um projeto no Supabase com senha forte e RLS habilitado. Vincule o conector no aplicativo do Claude, configure o Supabase CLI no repositório e conclua o login pelo navegador. Ao final, peça apenas uma validação da conexão, sem enviar tokens ou chaves privadas.
