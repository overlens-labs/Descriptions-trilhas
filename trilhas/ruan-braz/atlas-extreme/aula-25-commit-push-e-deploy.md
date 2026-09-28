Cálculo interno: 12 blocos / 42 parágrafos totais / 1.098 palavras estimadas / 1.098 ÷ 200 = 5,5 minutos

# Commit, push e deploy

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir commit, push e deploy
- Aplicar uma revisão de segredos antes do GitHub
- Executar a preparação de um repositório para terceiros
- Estruturar a publicação pela Vercel CLI

## Do ambiente local à publicação

O Business OS já possui IA, contexto, autenticação e criação de conta, mas continua acessível apenas no computador de desenvolvimento. Para publicá-lo, primeiro é necessário versionar as mudanças e enviá-las ao GitHub.

Um commit registra um conjunto de alterações no histórico local. O push envia commits ao repositório remoto. O deploy transforma uma versão do código em uma aplicação disponível em um ambiente de execução.

Essas etapas possuem responsabilidades diferentes. Um push bem-sucedido não torna o site público, e um deploy não substitui o cuidado com histórico, documentação e segredos.

## Preparar o commit

O pedido ao Claude reforça que nenhuma variável de ambiente pessoal deve entrar no repositório. Embora esse bloqueio deva estar automatizado, a regra é declarada antes da operação para orientar a revisão.

Quem conhece Git pode executar os comandos diretamente e não gastar tokens. Pedir ajuda à IA é útil para revisar o panorama, formular uma mensagem de commit e identificar arquivos que não pertencem à versão.

Antes de confirmar, leia a lista de alterações. Arquivos temporários, logs, artefatos de build, dependências baixadas e dados particulares não devem ser incluídos sem intenção.

## O papel do `.gitignore`

O `.gitignore` informa ao Git quais caminhos não devem ser rastreados. `.env.local`, `node_modules`, saídas de build e outros artefatos aparecem entre os candidatos comuns.

Uma cor cinza na IDE pode indicar arquivo ignorado, mas a confirmação deve vir do estado do Git. Regras de editor variam e um segredo já rastreado não deixa de existir no histórico apenas porque foi adicionado ao `.gitignore`.

O `.env.example` deve ser versionado com os nomes e sem valores reais. Assim, quem baixar o projeto sabe o que configurar sem receber as credenciais do autor.

## Procurar segredos hardcoded

Antes do commit, o agente faz uma varredura por chaves, tokens e senhas incluídos diretamente no código. Esse tipo de valor é chamado de hardcoded e pode permanecer acessível a qualquer pessoa com acesso ao repositório.

Robôs monitoram repositórios públicos em busca de credenciais. Um vazamento pode ser explorado em minutos, gerando acesso a dados ou consumo pago de APIs.

Uma varredura limpa reduz risco, mas não garante ausência completa. Revise arquivos, histórico, diffs e configurações. Se uma chave já entrou em commit, considere-a exposta e faça a rotação.

*Para acompanhar a verificação do `.gitignore` e o scan de segredos, assista a partir de 03:13 no vídeo.*

## Dados reais não pertencem ao código

Os arquivos Markdown iniciais contêm leads e notas de pesquisa. Depois da migração, esses dados devem viver no banco associados ao usuário, não no repositório público.

Adicionar os arquivos ao `.gitignore` impede novos commits, mas não altera o histórico antigo. O relatório do agente alerta que os arquivos usados como semente do ETL ainda permanecem nas versões anteriores.

Na demonstração, as informações eram de fontes públicas e a decisão é seguir sem reescrever o histórico. Em outro projeto, essa decisão pode ser inadequada. A natureza do dado e o risco para as pessoas precisam orientar a resposta.

## Confirmar o push

Depois da limpeza, commit e push são concluídos. Os indicadores de alteração voltam ao estado neutro e o GitHub mostra os arquivos atualizados.

O relatório do agente registra o que entrou, o que foi ignorado e quais pendências ficaram, como documentação desatualizada ou dados usados como semente de ETL.

Além de observar os indicadores da IDE, abra o repositório no GitHub e confira se os arquivos atualizados foram enviados. O relatório do agente também registra o que entrou no commit e o que ficou ignorado.

*Para ver o push concluído e a conferência do GitHub, assista a partir de 08:55 no vídeo.*

## Fork, clone e download

O GitHub oferece caminhos diferentes para reutilizar um projeto. Download ZIP cria uma cópia sem o histórico Git. Clone cria uma cópia ligada ao repositório remoto. Fork duplica o projeto para a conta da pessoa e preserva a relação com a origem.

Para personalizar um projeto que não receberá atualizações frequentes, o fork seguido de clone oferece autonomia e histórico. Para uma cópia pontual, o ZIP pode ser suficiente.

Depois do download, o projeto não está pronto. Dependências e segredos foram omitidos de propósito. Essa ausência é uma característica de segurança e portabilidade, não uma falha.

## Instalar dependências e variáveis

Na pasta do projeto, execute `npm install` para baixar as dependências declaradas. Em seguida, leia `.env.example`, crie `.env.local` e preencha valores próprios para Supabase, Google, OpenAI e demais serviços usados.

Nunca reutilize as chaves do repositório original. Cada pessoa precisa de projetos, limites e credenciais sob sua responsabilidade.

Se o arquivo de exemplo tiver sido ignorado por engano, corrija o `.gitignore`, confirme que ele não contém valores e faça um novo commit e push.

*Para acompanhar as instruções de fork, clone, ZIP e instalação, assista a partir de 11:03 no vídeo.*

## Revogar chaves antes de abrir o sistema

Uma aplicação pública pode gerar custo quando centenas de pessoas acessam a mesma API. Para evitar abuso na demonstração, as chaves de Google e OpenAI são removidas do ambiente e revogadas nos respectivos consoles.

Depois da revogação, partes que não dependem de IA continuam funcionando. O chat informa que uma chave precisa ser configurada, demonstrando degradação parcial do sistema.

Revogar no provedor é essencial. Apagar apenas o valor local não invalida uma cópia que já tenha vazado.

*Para ver a remoção e a revogação das chaves, assista a partir de 15:56 no vídeo.*

## Publicar pela Vercel CLI

Com o código no GitHub e as credenciais de demonstração removidas, o Claude recebe o pedido de publicar pela Vercel CLI. A sessão do navegador já está autenticada.

O fluxo cria um projeto na Vercel, publica a aplicação e devolve um endereço que pode ser compartilhado com outras pessoas.

Um domínio próprio pode ser comprado na Vercel ou conectado por DNS a partir de outro registrador. Também é possível continuar usando o endereço fornecido pela própria Vercel.

*Para acompanhar o início do deploy pela Vercel CLI, assista a partir de 17:30 no vídeo.*

## Coloque em prática

Revise o `.gitignore` e os arquivos que entrarão no commit em busca de segredos e dados pessoais. Confirme que `.env.example` contém apenas nomes, faça um commit descritivo e envie-o ao GitHub.

Em uma cópia do repositório, rode `npm install`, crie `.env.local` e preencha suas próprias variáveis. Depois, publique o projeto pela Vercel CLI.
