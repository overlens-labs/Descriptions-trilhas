Cálculo interno: 15 blocos / 53 parágrafos totais / 1.521 palavras estimadas / 1.521 ÷ 200 = 7,6 minutos

# Entendendo a conexão via API

**Tempo estimado de leitura:** 8 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o fluxo de uma conexão por API
- Estruturar uma área de conversa com memória recuperável
- Aplicar chaves de Google e OpenAI por variáveis de ambiente
- Reconhecer custos, limites e cuidados de segurança

## O cabo que falta no Business OS

Banco, autenticação e storage já estão configurados, mas os relatórios ainda não podem ser gerados dentro da interface. Falta conectar um modelo de IA por API.

Uma assinatura de chatbot e o uso da API são produtos diferentes. Na API, a aplicação envia requisições diretamente ao provedor e paga pelo consumo. Cada modelo possui preço e capacidades próprios, e o custo se acumula conforme tokens e recursos são utilizados.

Agregadores podem atender quem deseja apenas conversar com vários assistentes. Para construir agentes integrados a um sistema, é necessário controlar chamadas, contexto, dados, permissões e cobrança em uma arquitetura própria.

## Projetar a área de conversa

Antes da conexão, o prompt pede uma página principal no topo do menu lateral. Ela deve conter uma área para conversar com a IA sobre as informações registradas no Business OS.

Uma segunda barra lateral aparece somente nessa página e lista conversas anteriores. A tela inicial recebe um campo de prompt, e a tela de conversa organiza mensagens, anexos e respostas sem abandonar o design system existente.

Capturas de tela são enviadas como referência de posição e comportamento. Agentes paralelos podem trabalhar em interface, histórico, banco e integração, desde que a responsabilidade de cada frente esteja clara.

*Para acompanhar a definição da página principal e do histórico de conversas, assista a partir de 03:19 no vídeo.*

## Transformar conteúdo em base de conhecimento

As respostas e pesquisas geradas pelo usuário devem alimentar uma base de conhecimento. Ela não precisa aparecer como uma tela separada, mas deve ser consultada sempre que a IA formular uma resposta.

O Supabase oferece PostgreSQL com a extensão PGVector. Ela permite guardar vetores associados aos conteúdos. Um modelo de embedding transforma trechos de texto em representações numéricas que ajudam a recuperar informações semanticamente relacionadas.

A demonstração escolhe um modelo de embedding do Google. O fluxo indexa entidades do negócio, respostas de pesquisas e novos conteúdos produzidos durante o uso. A base cresce conforme o usuário trabalha.

Isso forma uma arquitetura de RAG: a aplicação recupera trechos relevantes e os envia ao modelo junto com a pergunta. A qualidade depende de divisão dos conteúdos, metadados, filtros por usuário, busca, limiar de relevância e instrução do prompt.

## Requisição e resposta

Uma API é comparada a um garçom. A aplicação apresenta opções, o usuário faz um pedido, a API transporta a requisição ao serviço e devolve a resposta produzida.

Métodos HTTP representam intenções. `GET` costuma buscar recursos sem alterá-los. `POST` envia dados para processamento ou criação. Uma chamada de geração de texto normalmente usa `POST`, pois inclui prompt, modelo, mensagens e configurações no corpo da requisição.

O servidor do provedor processa o pedido em outra infraestrutura. A resposta volta em um formato estruturado, a aplicação interpreta esse resultado e o apresenta na interface.

Junto da mensagem podem seguir modelo, esforço, anexos, histórico e outras opções. A API envia essas informações ao servidor para que a resposta seja produzida conforme o pedido.

*Para acompanhar a analogia do garçom e os métodos de requisição, assista a partir de 10:51 no vídeo.*

## Integrar serviços além de texto

APIs também permitem enviar ações a outros sistemas. No exemplo do Instagram, uma imagem gerada é salva em storage, recebe um endereço acessível e esse endereço participa da requisição de publicação.

Cada provedor possui sua própria API e forma de conexão. Não basta possuir o arquivo local: o sistema precisa enviar o conteúdo no formato aceito pelo serviço que realizará a ação.

O mesmo princípio atende CRM, e-mail, dados empresariais e geração de mídia. A aplicação coordena serviços especializados em vez de tentar executar tudo sozinha.

## A chave identifica e autoriza

Uma API key associa a chamada a um projeto e a determinadas permissões. Quem obtém uma chave pode realizar tudo que o escopo dela autoriza, inclusive consumir créditos ou publicar conteúdo.

Por isso, chaves privadas ficam no servidor e em variáveis de ambiente. Elas não podem aparecer no código cliente, no GitHub, em prompts ou em transmissões de tela. Se houver exposição, revogue a chave e crie outra.

Nomeie a chave com o sistema que a utiliza. Assim, se for necessário apagar uma credencial, fica mais fácil identificar qual aplicação deixará de funcionar.

## Criar a chave do Google

O modelo de embedding exige uma chave do Google. O caminho demonstrado passa pelo Google AI Studio: entrar com uma conta, criar ou selecionar o projeto `Business OS` e gerar uma API key.

A chave é copiada diretamente para a variável correspondente no `.env.local`, com a tela protegida. O `.env.example` recebe somente o nome da variável, sem o valor.

Depois de inserir e salvar o segredo, feche o arquivo. Trabalhe com o exemplo durante explicações e revisões, evitando reabrir credenciais em uma apresentação ou captura.

*Para ver a criação da chave no Google AI Studio, assista a partir de 20:22 no vídeo.*

## Criar crédito e chave da OpenAI

A plataforma de desenvolvimento da OpenAI é separada da interface de conversa. Para usar a API, configure cobrança por créditos ou forma de pagamento, conforme as opções oferecidas à conta.

É possível adicionar um valor em créditos ou cadastrar um cartão. A recarga automática repõe o saldo quando ele chega ao limite configurado, enquanto o crédito sem recarga faz o sistema parar quando termina.

Na área de API keys, crie uma chave chamada `Business OS`. Copie o valor para `OPENAI_API_KEY` no `.env.local` e nunca para o arquivo de exemplo.

A mesma chave pode liberar diferentes recursos disponíveis naquela API, mas o código ainda precisa selecionar modelo e endpoint adequados. Ter a credencial não implementa texto, visão ou imagem automaticamente.

*Para acompanhar cobrança, créditos e criação da chave da OpenAI, assista a partir de 28:23 no vídeo.*

## Provedores, roteadores e modelos locais

OpenAI, Anthropic, Google e outros provedores possuem consoles próprios. Cada um exige conta, projeto, cobrança, chave e configuração específica.

Um roteador como OpenRouter permite acessar vários modelos por uma única integração e oferece opções gratuitas ou pagas. Também é possível conectar cada provedor diretamente pela própria plataforma de desenvolvimento.

Modelos abertos também podem ser executados localmente ou em um servidor. Nesse caso, o custo deixa de ser uma cobrança por chamada e passa a envolver a infraestrutura necessária para rodar o modelo.

## Clonar não transfere segredos

Arquivos ignorados pelo Git, como `.env.local` e `node_modules`, não acompanham o repositório. Quem baixar o projeto deve executar `npm install`, criar o arquivo local e preencher suas próprias variáveis com base em `.env.example`.

As chaves do autor nunca devem ser distribuídas. Caso contrário, todos os usuários consumiriam a mesma conta e poderiam ampliar o prejuízo de uma exposição.

Quando o proprietário publica o sistema, a aplicação pode usar a chave configurada no servidor. Já quem baixa o repositório precisa criar o próprio `.env.local` e inserir as próprias credenciais.

## Geração e leitura de imagens exigem implementação

A aula explora serviços de imagem como os modelos do Google e Seedream. Gerar uma chave é apenas a etapa de autorização. O agente precisa configurar o modelo, formato de entrada, saída, armazenamento e apresentação no chat.

Da mesma forma, anexar uma imagem à interface não faz o modelo enxergá-la. O backend deve enviar o arquivo ou uma referência compatível a um modelo com capacidade visual.

É possível usar a mesma chave do Google ou criar outra apenas para imagem. Chaves separadas ajudam a acompanhar o custo de cada uso.

## Expiração e rotação

O console da Anthropic é apresentado como outro exemplo de geração de chave. É possível definir expiração em vez de manter o segredo válido indefinidamente.

Definir uma expiração cria um prazo para a chave deixar de funcionar. Depois desse período, será necessário gerar outra credencial e conectá-la novamente ao sistema.

Se houver suspeita de exposição, não espere a expiração. Revogue imediatamente, gere outra chave, atualize todos os ambientes e analise os registros de uso.

## Aplicar migração e reiniciar

Depois de colocar as chaves, o Claude deve aplicar a migração do PGVector, indexar os conteúdos existentes e conectar os provedores ao sistema. O pedido deixa a execução da migração com o agente, em vez de apenas receber um comando para copiar.

Como variáveis de ambiente foram alteradas, o servidor precisa ser encerrado e iniciado novamente. Só então a aplicação poderá carregar os novos valores e testar a página principal.

Depois de aplicar a migração e reiniciar o servidor, aguarde a execução terminar antes de abrir a página principal e verificar se a conexão está funcionando.

## Coloque em prática

Desenhe o fluxo do chat entre navegador, servidor, base de conhecimento e provedor de IA. Crie no `.env.example` apenas os nomes das variáveis e insira as chaves de Google e OpenAI no `.env.local`.

Peça a criação do PGVector, a indexação do conteúdo e a conexão dos provedores. Reinicie o servidor e confirme que uma pergunta recupera uma informação registrada no Business OS.
