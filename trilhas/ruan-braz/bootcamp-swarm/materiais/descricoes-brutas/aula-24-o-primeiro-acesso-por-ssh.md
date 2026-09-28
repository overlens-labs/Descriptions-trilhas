Cálculo interno: [5 blocos] / [15 parágrafos totais] / [715 palavras estimadas] / [715 ÷ 200 = 4 minutos]

# O primeiro acesso por SSH

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar usuário, IP, porta e credencial para uma conexão SSH
- Executar o primeiro acesso a uma VPS pelo terminal
- Distinguir o terminal local da sessão remota
- Reconhecer o risco de expor a senha de administração

## O servidor como computador remoto

Ruan retoma a ideia de que uma VPS é um computador no qual se instalam programas e se executam automações. A máquina demonstrada usa uma interface de linha de comando, ou CLI. Ela pode ser acessada pelo console no navegador do fornecedor, mas ele prefere o terminal do próprio computador para trabalhar no dia a dia.

O SSH, sigla de *Secure Shell*, cria a conexão com o servidor. Depois de entrar, os comandos digitados naquela sessão passam a rodar na VPS. A aparência continua sendo a de um terminal, o que torna necessário observar quando se está no PC local e quando se está na máquina remota.

## Reunir os dados do acesso

No painel da VPS, Ruan localiza o usuário administrativo, o endereço IP, a porta SSH e a opção de definir uma senha. Esses dados são diferentes das credenciais de um aplicativo instalado no servidor. Caso a senha inicial não esteja disponível, ele mostra a opção de alterá-la no painel.

O formato apresentado para a conexão é `ssh usuario@IP`, com `-p PORTA` quando a porta não é a padrão. A pessoa substitui os exemplos pelo usuário, IP e porta da própria VPS. Se a porta for 22, pode usar a forma mais curta. Um erro em `-p`, no endereço ou no usuário impede a conexão.

## Entrar, reconhecer e sair

Ruan abre o PowerShell no Windows e executa o comando SSH. Na primeira conexão, o terminal pede uma confirmação antes de guardar a identificação do servidor. Depois, solicita a senha. Os caracteres digitados não aparecem na tela; isso não significa que o terminal deixou de receber o texto.

Após a autenticação, a mensagem de boas-vindas mostra o Ubuntu e informações do sistema. Esse é o sinal usado na aula para confirmar que a sessão está no servidor remoto. O comando `exit` encerra essa sessão e devolve o controle ao terminal local.

Ele repete o processo para que a turma localize cada elemento do comando e compare com o próprio painel. Quem usa macOS abre o Terminal; quem usa Windows pode abrir PowerShell. O protocolo de acesso é o mesmo, embora a interface local seja diferente.

## Resolver diferenças entre computadores

Durante o exercício, participantes recebem avisos distintos: porta digitada incorretamente, senha recusada, primeira confirmação da identidade do servidor e dúvida sobre qual terminal abrir. Ruan recomenda registrar a mensagem ou a tela e pedir ao agente uma explicação curta do que ocorreu.

Ele chama essa prática de independência intelectual. A pessoa não precisa reconhecer cada erro de memória; precisa aprender a observar a mensagem, buscar o significado e testar uma correção de cada vez. Como a turma usa sistemas e configurações diferentes, uma solução única não cobriria todos os casos.

Uma participante pergunta sobre autenticação por chave SSH para evitar digitar a senha em cada acesso. Ruan confirma que ela é possível e aponta o guia para a configuração. A demonstração detalhada da chave fica para a etapa seguinte.

## A senha enviada ao agente na demonstração

Para mostrar um caminho alternativo, Ruan cola dados de acesso e uma senha temporária em uma conversa com o agente. Ele avisa que isso expõe a credencial. O agente verifica a conectividade e prepara o comando, mas recusa digitar a senha por ele, mesmo após um novo pedido.

Ruan então volta ao terminal, percebe tentativas com senha incorreta e altera a credencial no painel. A sequência ilustra por que a senha de administração merece cuidado: quem a obtém pode acessar o servidor e modificar seu conteúdo. O resultado da demonstração foi a conexão manual, seguida da troca da senha que havia sido exposta.

## Coloque em prática

Localize no painel o usuário, IP e porta da sua VPS. Monte o comando SSH com esses dados e entre pelo terminal. Confirme pela mensagem do sistema que está na máquina remota; depois use `exit` para voltar ao computador local.
