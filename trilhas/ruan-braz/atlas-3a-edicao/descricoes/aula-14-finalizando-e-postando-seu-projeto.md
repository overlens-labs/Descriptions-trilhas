# Finalizando e postando seu projeto

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir build e deploy
- Reconhecer o papel da Vercel na publicação do projeto
- Executar uma publicação inicial com ajuda do Claude
- Identificar cuidados ao corrigir problemas de deploy

## Publicação do Brand System

A aula começa com a decisão de publicar o Brand System. O Ruan avisa que publicar pode parecer simples, mas envolve cuidados, principalmente quando há variáveis de ambiente, Supabase, autenticação e storage.

O sistema não será publicado no Supabase, porque o Supabase não é servidor de hospedagem para esse tipo de interface. Ele será publicado em um serviço de produção, e a escolha da aula é a Vercel.

O objetivo é transformar o projeto local em um link acessível por outras pessoas, saindo do `localhost` e indo para um ambiente público.

## Build e deploy

A Vercel é apresentada como um ecossistema focado em build e deploy. Build é o processo de empacotar o projeto e deixá-lo pronto para produção.

Deploy é o processo de enviar o projeto para produção, tornando-o público. Antes disso, o projeto pode estar em desenvolvimento local ou em estágios de teste.

A aula reforça que produção é o ambiente em que outras pessoas realmente acessam o sistema. Por isso, erros de configuração, variáveis e autenticação precisam ser tratados com cuidado.

## Vercel, V0 e ShadCN

O Ruan contextualiza a Vercel no mundo da IA. Antes de ferramentas como Lovable se popularizarem, a Vercel já havia lançado o V0, conectado à lógica de criação de interfaces por IA.

Ele também explica a importância de ShadCN, que organizou componentes e padrões em cima do Tailwind. A parceria entre ShadCN e Vercel permitiu criar uma IA capaz de gerar sistemas com esses componentes.

Ferramentas como Lovable, Bolt e V0 foram importantes para popularizar a criação de sistemas, mas o Ruan defende que trabalhar direto em IDE com agente via terminal oferece outro nível de controle, custo e personalização.

## Criação de conta e projeto na Vercel

O aluno é orientado a criar uma conta na Vercel, podendo usar Google ou e-mail. Para o exercício, pode escolher uso pessoal e permanecer no plano gratuito.

Depois, cria um projeto vazio e dá nome a ele, como Brand System. A aula mostra que o Project ID pode ser copiado nas configurações e usado para orientar o Claude durante a publicação.

O Ruan lembra que, em um processo profissional, o ideal seria usar Git e GitHub, com commit e push antes do deploy. Como isso não foi ensinado na trilha, o deploy é feito de forma mais direta.

## Publicando com Claude e Vercel CLI

O Ruan pede ao Claude para instalar a Vercel CLI, conectar a conta da Vercel e publicar o Brand System no projeto criado. Também fornece o e-mail da conta e o Project ID para reduzir ambiguidade.

Em um caso simples, bastaria pedir: publique o projeto na Vercel. O agente provavelmente conduziria a instalação, login e deploy. A instrução mais detalhada ajuda a ir direto ao ponto.

Durante o processo, a Vercel pode pedir login, verificação ou autorização no navegador. O aluno precisa copiar códigos ou permitir acesso quando solicitado.

## Problemas de conta, variáveis e proteção de deploy

A demonstração encontra alguns problemas porque o Ruan tem mais de uma conta Vercel aberta. O Claude tenta usar uma conta diferente, e o Ruan precisa desconectar e reconectar na conta correta.

Também surge um alerta sobre variáveis do Supabase salvas com caracteres incorretos por causa do pipe do PowerShell. O Claude oferece caminhos para corrigir pelo terminal ou pela dashboard da Vercel.

Outro problema aparece quando o deploy fica protegido por autenticação padrão da Vercel. A correção é desligar a proteção de deployment nas configurações do projeto.

## Quando a correção automática pode ser insegura

A aula destaca um cuidado importante: quando algo não funciona, insistir para a IA resolver de qualquer jeito pode fazer com que ela ultrapasse limites de segurança.

Às vezes, o erro existe porque uma configuração está protegendo o projeto. Se o usuário manda apenas resolver sem critério, a IA pode expor variável, contornar proteção ou criar uma solução insegura.

Por isso, quando surgir erro de deploy, é melhor pedir explicação, entender a causa e aprovar a correção conscientemente. A IA é aliada, mas o usuário precisa continuar exercendo julgamento.

## Encerramento da publicação

Ao final, o sistema é publicado, mas a demonstração mostra que algumas partes podem não carregar corretamente, como Markdown do Supabase ou assets do storage. Isso indica que a conexão com Supabase ainda precisa de ajustes.

O Ruan explica que, em uma situação normal, tiraria print do erro, mandaria para o Claude e pediria para corrigir a leitura dos Markdowns e a configuração do storage.

Como a aula acontece em evento ao vivo e o objetivo é mostrar o caminho geral, o Ruan encerra a trilha mostrando que os problemas são específicos e corrigíveis em novas rodadas de trabalho.

## Coloque em prática

Crie uma conta na Vercel, crie um projeto vazio e publique a primeira versão do Brand System.

Depois, valide o link público em outra janela e anote quais partes não carregaram para pedir correção pontual ao agente.

Esta descrição cobre os principais conteúdos da aula. Alguns detalhes complementares estão disponíveis apenas no vídeo.
