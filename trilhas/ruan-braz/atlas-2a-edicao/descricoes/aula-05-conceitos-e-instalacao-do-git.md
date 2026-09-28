# Conceitos e Instalação do Git

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o problema que o Git resolve no contexto de trabalho com agentes de IA
- Distinguir Git de GitHub e a função de cada um no fluxo de projetos
- Reconhecer os conceitos de branch, merge e repositório no gerenciamento de versões
- Executar a instalação do Git no Windows com as configurações recomendadas

## Por que o Git é necessário quando se trabalha com IA

Quando você começa a trabalhar com agentes de IA, aparece um problema que a maioria não antecipa: a IA modifica seus arquivos. O Claude Code pode entrar em uma pasta, reescrever arquivos, mover coisas, alterar estruturas, tudo como parte da execução de uma tarefa.

Se a IA apagou ou sobrescreveu algo que não devia, sem Git você não tem como voltar. Não há histórico, não há versão anterior. O arquivo simplesmente foi. É por isso que Git é pré-requisito para instalar o Claude Code no terminal. Não é opcional.

## O que é Git

Git é um sistema de controle de versões. Ele funciona como um histórico automático do seu projeto, com cada ponto de salvamento registrado. Se a IA fizer uma mudança que quebre algo, você volta para a versão anterior sem perder o trabalho.

A analogia mais simples: Git é como o Ctrl+S evoluído. Em vez de salvar um arquivo por cima do anterior, ele cria um registro de cada versão, com histórico completo. Você pode navegar entre versões, ver o que mudou em cada uma, e voltar para qualquer ponto no tempo.

Git é instalado localmente no seu computador. Ele gerencia o histórico dentro da sua máquina.

## O que é GitHub

GitHub é onde o Git vai para a nuvem. É um hub de repositórios Git, armazenados online para que várias pessoas possam acessar e colaborar num mesmo projeto.

A analogia direta: GitHub é para Git o que o Google Drive é para documentos. Você cria um repositório no GitHub, faz o upload do seu projeto e outras pessoas podem clonar, acessar e contribuir com aqueles arquivos.

Repositório é o nome dado à pasta do projeto armazenada no GitHub. Cada repositório guarda todos os arquivos do projeto e o histórico completo de versões gerado pelo Git.

## Branches: trabalhando em paralelo sem quebrar o principal

Quando mais de uma pessoa trabalha num projeto, ou quando você quer testar algo sem arriscar o que já funciona, você usa branches. Branch significa galho, e a ideia é exatamente essa: você cria um caminho paralelo ao projeto principal.

O projeto principal fica na branch chamada main. Você cria outra branch, por exemplo "ruan-teste", e faz suas alterações ali. Se algo der errado, só a sua branch fica comprometida. A branch main permanece intacta.

Quando as mudanças na sua branch estão prontas e testadas, você une ela de volta à main. Esse processo se chama merge. É como se dois galhos se juntassem de volta ao tronco.

## Por que se usa "main" e não "master"

Durante a instalação do Git, aparece uma configuração para o nome da branch principal. A recomendação é escolher "main". O termo "master" é legado e foi substituído porque remetia a uma nomenclatura associada a escravidão (master e slave). O mercado migrou para "main" como padrão e é esse que deve ser usado em projetos novos.

## Instalação do Git no Windows: passo a passo

*Para ver a demonstração desta seção, assista a partir de 06:38 no vídeo.*

O processo de instalação começa acessando o site oficial do Git pelo Google. O resultado aparece com o logo laranja do Git. A versão para download é a 64x para Windows (ou ARM se o seu sistema for ARM).

Durante a instalação, as configurações são as seguintes: a pasta de destino pode ser mantida como o instalador sugere. O editor padrão a configurar é o WordPad no Windows. Quando chegar na seleção do nome da branch inicial, marcar a segunda opção para definir "main" como padrão. As demais opções podem ser mantidas nos valores recomendados pelo instalador: SSH bundled, Windows security library, Windows style, MinTTY, Fast Forward or Merge e credential manager habilitado. A opção de Symbolic Links não deve ser marcada.

Depois de instalar, o Git fica rodando em segundo plano. Você não vai abrir o Git diretamente. Quem vai usar o Git pelo usuário é o próprio Claude Code: ele cria os commits, gerencia as branches e registra o histórico de forma automática conforme trabalha nos seus projetos.

## O que você não precisa saber agora

Git e GitHub têm muitos conceitos além do que foi apresentado aqui: conflitos de merge, pull requests, forks, rebase e outros. Para o que será construído no Atlas, o necessário é ter o Git instalado e entender para que ele serve.

A recomendação feita na aula é direta: quem quer se tornar uma pessoa orquestradora, que cria coisas reais com IA no próprio computador, precisa entender como isso funciona. Não é necessário saber programar. É necessário entender o funcionamento para conseguir conduzir o processo e se comunicar com as ferramentas e com o agente.

## Coloque em prática

- Acesse o site do Git pelo Google, baixe o instalador para o seu sistema operacional e instale com as configurações recomendadas nesta aula.
- Durante a instalação, confirme que a branch padrão está configurada como "main".
- Depois de instalar, abra o terminal e digite o comando de verificação da versão do Git para confirmar que a instalação foi concluída com sucesso.
