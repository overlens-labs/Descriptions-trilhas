# Instalando o Claude Code

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar as dependências necessárias para o Claude Code funcionar corretamente
- Executar a instalação do Claude Code no Windows via terminal
- Resolver o problema de PATH que impede o Claude Code de ser reconhecido pelo terminal
- Distinguir as opções de autenticação e os planos de assinatura disponíveis

## Dependências antes da instalação

Antes de instalar o Claude Code, é necessário ter duas ferramentas instaladas: Git e Node.js. No Windows, o Claude Code exige o Git. No Mac, exige tanto Git quanto Node.js. A aula mostra a instalação em uma máquina Windows 10 completamente limpa, o que permite ver cada dependência sendo resolvida do zero.

O processo de instalação do Node.js segue a mesma lógica simples: acesse nodejs.org pelo navegador, clique em "Baixar Node.js", selecione o instalador para Windows (formato .msi) e avance pelas etapas com as configurações padrão. O Node.js é instalado sem necessidade de ajustes.

## Instalando o Claude Code

Com as dependências instaladas, o próximo passo é acessar a página oficial do Claude Code, disponível em anthropic.com, na seção de produtos de IA para código. Na página, clique em "Documentation" e localize o comando de instalação para o seu sistema operacional.

Para Windows, o comando pode ser executado tanto via CMD quanto via PowerShell. O PowerShell costuma funcionar de forma mais direta. No Mac, o terminal é acessado pelo Command + Espaço e o comando de instalação é diferente do Windows, então atenção ao copiar o link correto para cada sistema. O comando é colado no terminal e executado com Enter. A instalação leva cerca de um minuto.

## Resolvendo o problema de PATH no Windows

*Para ver esta etapa demonstrada ao vivo, assista a partir de 09:01 no vídeo.*

Após a instalação no CMD do Windows, pode aparecer um aviso de "setup notes" indicando que um caminho precisa ser adicionado às variáveis de ambiente. Isso acontece quando o caminho de instalação do Claude não está registrado no PATH do sistema, o que faz com que o terminal não reconheça o comando "claude".

Para resolver: pressione Windows + R, digite `sysdm.cpl` e pressione Enter. Na janela que abrir, vá em "Avançado" e clique em "Variáveis de Ambiente". Localize a variável "Path", clique em "Editar" e adicione o caminho indicado no aviso de instalação. Confirme com OK em todas as janelas. Feche o terminal, abra novamente e execute o comando "claude". O problema estará resolvido.

## Autenticação e planos

Na primeira execução, o Claude Code pede que você escolha como vai utilizar os tokens. Existem três opções:

A terceira opção, via plataforma de terceiros, não é recomendada para iniciantes. A segunda opção, via API, cobra por demanda: centavos por milhão de tokens, o que faz sentido quando você está construindo um sistema que outros usuários vão utilizar. A primeira opção, via assinatura, é a recomendada para uso pessoal, pois a Anthropic tem dado mais tokens e benefícios para quem assina do que para quem paga por demanda.

Os planos disponíveis: Pro a $20 por mês, Max a $100 por mês e Max 25X a $200 por mês. A recomendação é sempre assinar no plano mensal, não no anual, enquanto o mercado de IA estiver em disputa acelerada. O que é bom hoje pode mudar no mês seguinte, e uma assinatura anual pode prender você em uma ferramenta que deixou de ser a melhor opção.

O login é feito pelo navegador: ao selecionar "Claude Account with Subscription", o terminal abre automaticamente o navegador para autorização. Basta clicar em "Autorizar" estando logado na conta do Claude.

## Abrindo o Claude Code na pasta correta

Uma prática de segurança importante: nunca abra o Claude Code na pasta raiz do usuário. Ao abrir na pasta raiz, o Claude Code ganha acesso a todos os arquivos do sistema. O correto é navegar até a pasta do projeto com o comando `cd` e só então digitar "claude".

O Claude perguntará "você confia nesta pasta?" na primeira vez. Responda "Yes". A partir daí, o Claude Code está ativo dentro daquele projeto, com acesso restrito àquela pasta.

## O que o Claude Code pode fazer

O Claude Code conectado ao terminal não é um modelo de linguagem baixado localmente. É a IA da Anthropic acessada via API, com permissão para agir no seu computador. Isso inclui criar arquivos, editar, apagar, ler o conteúdo de arquivos e instalar programas quando solicitado.

A demonstração ao vivo: ao pedir para o Claude "contar um segredo e colocar dentro de um arquivo txt na pasta atual", ele criou o arquivo sem que o usuário tocasse no mouse, utilizando Tool Calling, que é a capacidade de chamar ferramentas externas e executar ações no ambiente. Esse é o nível de poder que está disponível com o Claude Code ativo no terminal.

## Coloque em prática

- Instale o Node.js a partir de nodejs.org seguindo as configurações padrão.
- Acesse a documentação do Claude Code, copie o comando correto para o seu sistema operacional e execute no terminal.
- Se aparecer o aviso de PATH, siga o processo de adicionar o caminho às variáveis de ambiente do sistema.
- Crie uma pasta de projeto, navegue até ela com o comando `cd` e então execute "claude" para abrir dentro da pasta correta.
