Cálculo interno: 11 blocos / 31 parágrafos totais / 825 palavras estimadas / 825 ÷ 200 = 4,1 minutos

# Entendendo as variáveis de ambiente

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir `.env.local` de `.env.example`
- Estruturar variáveis públicas e privadas
- Aplicar credenciais do Supabase sem expô-las à IA
- Executar uma validação segura da conexão

## O papel dos arquivos `.env`

Variáveis de ambiente guardam valores que mudam entre máquinas e ambientes, como URLs, chaves e configurações. Em projetos web, aparecem em arquivos como `.env`, `.env.local` e `.env.example`.

O `.env.local` contém valores reais usados no computador. Ele não deve ser versionado. O `.env.example` documenta apenas os nomes necessários, com valores vazios ou fictícios, e pode ser enviado ao GitHub para orientar outras pessoas.

Os arquivos com valores privados não acompanham o projeto enviado ao GitHub. Cada pessoa usa as próprias variáveis para testar o software localmente, ou a equipe adota um sistema de gestão dessas variáveis.

## Nomes no exemplo, valores no ambiente local

Uma variável possui nome e valor. O arquivo de exemplo mostra nomes como `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` e `SUPABASE_SERVICE_ROLE_KEY`, mas não publica os segredos correspondentes.

O código consulta esses nomes em tempo de execução. Um script pode ler o valor do ambiente sem precisar mostrá-lo na conversa. Comentários no arquivo ajudam a separar grupos, documentar finalidade e indicar se uma chave é pública ou usada somente no servidor.

O mesmo padrão comporta integrações com Anthropic, OpenAI, Gemini, Meta, CRM e outros serviços. Adicionar uma variável não conclui a integração, mas cria o ponto de configuração usado pelo código.

## Público no cliente, secreto no servidor

Na demonstração, `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` são apresentadas como variáveis públicas. O Claude consegue localizar esses valores sem receber uma chave privada.

A `service_role` aparece como a chave secreta que não deve vazar. Ela precisa ser inserida no `.env.local` pela própria pessoa, sem ser entregue ao Claude.

O arquivo de exemplo permite que o código saiba quais nomes procurar. O script acessa o valor correspondente no ambiente local sem expor o conteúdo privado na conversa.

## Criar os arquivos na raiz

Se o projeto ainda não possui `.env.local`, crie o arquivo na raiz do repositório, não dentro da pasta do Supabase. Use `.env.example` como matriz e preencha os valores reais somente no arquivo local.

É possível pedir ao Claude que crie o exemplo, pois ele não contém segredos. Depois, faça pessoalmente a cópia dos nomes e a inserção dos valores privados.

Salve o arquivo com `Ctrl+S`. Uma alteração ainda não salva fica apenas no editor e o servidor não consegue lê-la. Evite responder ao agente com instruções para abrir o arquivo secreto como prova de que a chave foi inserida.

*Para ver a criação e a organização dos arquivos de ambiente, assista a partir de 00:00 no vídeo.*

## Localizar a URL do projeto

Confirme primeiro que o Claude e a CLI estão conectados ao projeto correto. Compare o nome e o identificador do projeto no Supabase com a configuração local.

A URL pública do projeto aparece no painel do Supabase. Copie-a para `NEXT_PUBLIC_SUPABASE_URL` no `.env.local`. Se o Claude já a obteve por uma conexão autorizada, apenas confirme que corresponde ao projeto desejado.

## Localizar a chave pública `anon`

Dentro do projeto, abra as configurações e a área de chaves de API. A interface apresenta a chave pública `anon`, que deve ser colocada em `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

A chave `anon` é pública e pode ser copiada para o arquivo local. Ela não deve ser confundida com a `service_role`, identificada no painel como secreta.

## Proteger a chave `service_role`

Na mesma área existe a chave secreta `service_role`. Copie-a diretamente para `SUPABASE_SERVICE_ROLE_KEY` no `.env.local`, sem passar pela conversa com a IA.

Na aula, a chave aparece apenas para fins didáticos porque o projeto seria apagado depois. Em um projeto real, ela deve permanecer protegida dentro do arquivo local.

*Para acompanhar o caminho até as chaves `anon` e `service_role`, assista a partir de 10:01 no vídeo.*

## Alternativas mais maduras

Arquivos locais não são a única estratégia. Uma equipe também pode usar um sistema de gestão de variáveis para disponibilizar as chaves necessárias sem colocá-las no repositório.

O projeto pode ser configurado para funcionar tanto no ambiente local quanto no deploy. Em cada caso, o sistema precisa receber as variáveis no ambiente em que será executado.

## Validar sem criar estruturas

Depois de salvar as variáveis, feche os arquivos e informe ao Claude que a configuração foi concluída. Peça primeiro que valide a conexão sem criar tabelas, autenticação ou storage.

O pedido deve deixar claro que a primeira tarefa é somente fazer a conexão e confirmar que ela funciona. A criação de tabelas, autenticação e storage fica para a etapa seguinte.

*Para ver a solicitação de validação da conexão, assista a partir de 22:01 no vídeo.*

## Coloque em prática

Crie `.env.example` com os nomes das três variáveis do Supabase e confirme que os valores estão vazios. Crie `.env.local`, insira a URL e a chave `anon` e depois adicione `service_role` sem mostrá-la à IA. Salve os arquivos e solicite apenas um teste de conexão.
