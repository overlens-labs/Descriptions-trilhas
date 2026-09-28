# CLIs: Manuseio de Terminais

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o que é um terminal e por que ele representa o nível avançado de uso de IA
- Distinguir os diferentes nomes e versões de terminal nos sistemas operacionais mais comuns
- Reconhecer a estrutura de camadas entre software, shell e hardware
- Aplicar o comando básico de navegação de pastas dentro do terminal

## Por que o terminal é o nível avançado

Quando o uso de IA avança além do aplicativo e entra no terminal, o salto é significativo. Não se trata de uma preferência estética ou de perfil desenvolvedor. As empresas de IA, incluindo a Anthropic, a OpenAI e o Google, lançam seus recursos mais recentes no terminal primeiro. Se você quer estar na vanguarda, é aqui que isso acontece.

A Anthropic deixou isso registrado de forma direta: os recursos chegam primeiro no terminal, e as integrações com IDEs oferecem uma experiência próxima para quem prefere o editor de código. Para quem não está em nenhum dos dois ambientes, está sempre um passo atrás das funcionalidades mais recentes.

## O que é um terminal

O terminal existe há mais tempo do que o mouse. Antes de existir interface gráfica, já existia terminal: uma interface de comunicação com o computador onde você envia comandos em texto e o computador os executa.

O terminal não usa mouse. Toda a interação é por digitação. Isso parece estranho no começo, mas é a forma mais direta de se comunicar com o computador. Qualquer coisa que você faz clicando, como entrar em uma pasta, abrir um arquivo ou instalar um programa, pode ser feito por texto no terminal.

## CLI: Command Line Interface

O terminal é tecnicamente chamado de CLI, Command Line Interface, ou Interface de Linha de Comando. Esse é o termo que vai aparecer com frequência ao longo do evento e em qualquer conversa sobre o tema.

No macOS, o terminal é acessado pelo Command + Espaço e digitando "terminal". No Windows, pelo Windows + R, digitando "cmd" para o terminal mais antigo ou "PowerShell" para o mais atual. O PowerShell é a versão recomendada para Windows por ser mais moderna.

## A anatomia do terminal: software, shell e hardware

O nome PowerShell não é aleatório. Shell significa concha. A analogia é esta: você tem o software, que é a camada de interface do usuário. Abaixo do software existe uma concha de proteção, o shell, que regula a comunicação com o hardware. O hardware são os componentes físicos do computador, o que roda tudo em binário, zeros e uns. O sistema operacional traduz essa linguagem para algo que você consiga ver e usar.

O CLI é a camada imediatamente acima do hardware, o ponto de contato mais direto com o computador sem entrar nas operações de boot do sistema. Por isso é uma interface de segurança: comandos dados por aqui mexem no computador de forma profunda, e é possível instalar, modificar ou remover arquivos com precisão total.

## Navegação de pastas: o primeiro comando

Um dos comandos mais usados no terminal é o `cd`, que significa "change directory". Ele permite entrar em uma pasta digitando o caminho completo dela. Por exemplo:

`cd c:/Users/nomedousuario/downloads`

Depois de dar Enter, o terminal entra naquela pasta e todos os próximos comandos se aplicam a ela. Comandos como NPM, NPX e NPM run dev são executados no terminal da mesma forma: você digita, dá Enter e o computador executa.

Saber esses comandos básicos era antes uma exigência técnica que afastava pessoas sem perfil de desenvolvedor. A mudança que aconteceu foi conectar uma IA ao terminal.

## Claude Code dentro do terminal: a demonstração ao vivo

*Para ver a demonstração desta seção, assista a partir de 06:33 no vídeo.*

Com Claude Code instalado no terminal, a conversa com a IA acontece em linguagem natural, sem precisar saber os comandos específicos. A demonstração feita ao vivo: ao digitar "Olá, Claude. Tudo bem? Dá um oi para a galera da Live", o Claude respondeu dentro do terminal em linguagem natural.

A diferença em relação ao terminal tradicional: antes, era preciso saber o comando exato. Agora, você fala o que quer e o Claude executa no ambiente com as permissões que você configurou.

O terminal com Claude Code tem modos de operação acessíveis pelo Shift+Tab: modo padrão, modo de aceitar edições e modo de planejamento. Existe também o modo chamado dangerously skip permissions, que libera permissão total para o Claude agir no computador sem pedir confirmação a cada passo. Esse modo não é recomendado para iniciantes. A seleção de modelo é feita pelo comando `/model`, que exibe as opções (Opus, Sonnet, Haiku) para navegar com as setas do teclado. Clique de mouse não funciona nessa interface.

## Coloque em prática

- Abra o terminal do seu sistema operacional: no macOS, Command + Espaço e pesquise "terminal"; no Windows, Windows + R e digite "PowerShell".
- Dentro do terminal, teste o comando `cd` para navegar até uma pasta que você conhece, usando o caminho completo dela.
- Acostume-se com a ideia de que o mouse não funciona no terminal e que toda interação é por digitação.
