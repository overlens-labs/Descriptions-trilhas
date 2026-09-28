Cálculo interno: 6 blocos / 17 parágrafos totais / 452 palavras estimadas / 452 ÷ 200 = 2,3 minutos

# Como contornar o limite de e-mails do Supabase

**Tempo estimado de leitura:** 3 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar um teste público de cadastro e onboarding
- Identificar uma falha causada pelo limite de e-mails
- Estruturar uma integração com um provedor de envio

## Testar cadastro e onboarding

A aplicação publicada permite criar conta e iniciar um onboarding. O fluxo solicita nome, e-mail, contato, empresa e tamanho da equipe antes de abrir o Business OS.

O cadastro funciona durante a demonstração, mas algumas pessoas do público informam que não conseguiram criar a conta. Ruan reforça que publicar o sistema e pedir testes a outras pessoas ajuda a revelar problemas que não apareceram para o autor.

Quando alguém encontra uma falha, a orientação é pedir uma captura para observar o que aconteceu. Nesse caso, a diferença entre as contas ajuda a localizar o problema no envio do e-mail de confirmação.

*Para acompanhar o cadastro e o onboarding publicados, assista a partir de 00:00 no vídeo.*

## Reconhecer o limite do envio padrão

O cadastro exige a validação do e-mail. Quando muitas pessoas tentam receber a mensagem ao mesmo tempo, o limite do plano usado no Supabase faz o envio falhar.

Ruan estima que o limite esteja próximo de dez pessoas por vez. Quem não recebeu a confirmação pode tentar novamente depois, quando o envio estiver disponível.

O comportamento não significa que todo o cadastro esteja incorreto. O bloqueio acontece na etapa em que o Supabase precisa aceitar e enviar a confirmação por e-mail.

## Adicionar um provedor de e-mail

A solução sugerida é conectar o Resend para assumir o envio de e-mails usado pelo sistema. Essa integração contorna o limite encontrado no envio padrão do Supabase.

O repositório pode ser baixado e aberto com o Claude. Depois, basta solicitar a conexão com o Resend para que o agente prepare a integração.

Essa conexão não é executada durante a aula porque ultrapassaria o tempo disponível. Ruan entra no serviço apenas para mostrar onde a chave necessária seria criada.

## Proteger a chave do Resend

Na área `API Keys` do Resend, gere uma nova chave e salve o valor no `.env.local`. Essa é a credencial que o sistema usará para se conectar ao serviço.

Depois de salvar a variável, peça ao Claude que conecte o Resend usando a chave disponível no ambiente local. O agente configura o sistema para realizar os envios pela nova integração.

## Coloque em prática

Publique o sistema e peça que outras pessoas testem a criação de conta. Se o e-mail de confirmação falhar por causa do limite do Supabase, baixe o repositório, solicite ao Claude a conexão com o Resend, gere a chave no serviço e salve-a no `.env.local`.
