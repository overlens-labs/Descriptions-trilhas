# Video: [A] Aula - 22.mp4
# FPS: 30.0
# Idioma: pt
# Modelo: large-v3
# Dispositivo: CUDA
# Data: 2026-07-16 10:32
# Formato: [HH:MM:SS:FF --> HH:MM:SS:FF] texto
#          #KAIROS E:rms Pk:pico Ph:pitch_Hz V:variacao_Hz R:wps S:silencio_ms
#
[00:00:00:00 --> 00:00:05:29] Voltando aqui de onde nós paramos, está aqui nosso projetinho funcionando muito bem.
#KAIROS E:0.0284 Pk:0.3127 Ph:0.0Hz V:0.0Hz R:2.17wps S:0ms

[00:00:07:08 --> 00:00:08:00] E nosso projeto.
#KAIROS E:0.0353 Pk:0.2308 Ph:0.0Hz V:0.0Hz R:4.05wps S:1279ms

[00:00:09:21 --> 00:00:12:13] precisa agora de uma conexão com as IAs.
#KAIROS E:0.0465 Pk:0.3584 Ph:0.0Hz V:0.0Hz R:2.92wps S:1692ms

[00:00:13:05 --> 00:00:15:16] Porque quando a gente tem os relatórios aqui,
#KAIROS E:0.054 Pk:0.3718 Ph:0.0Hz V:0.0Hz R:3.36wps S:719ms

[00:00:15:19 --> 00:00:17:06] olha, mas não dá para gerar nenhum relatório,
#KAIROS E:0.0644 Pk:0.4824 Ph:0.0Hz V:0.0Hz R:5.13wps S:99ms

[00:00:17:08 --> 00:00:19:03] ela está travada aqui para gerar relatório,
#KAIROS E:0.0469 Pk:0.302 Ph:0.0Hz V:0.0Hz R:3.8wps S:59ms

[00:00:19:03 --> 00:00:21:09] nem consegue gerar relatório nenhum aqui.
#KAIROS E:0.0357 Pk:0.3974 Ph:0.0Hz V:0.0Hz R:2.7wps S:0ms

[00:00:22:02 --> 00:00:24:06] Então, nós temos que conectar aqui a API.
#KAIROS E:0.0444 Pk:0.3788 Ph:0.0Hz V:0.0Hz R:3.74wps S:759ms

[00:00:25:03 --> 00:00:27:06] E aí, eu preciso explicar para vocês
#KAIROS E:0.0408 Pk:0.3199 Ph:0.0Hz V:0.0Hz R:3.37wps S:899ms

[00:00:27:06 --> 00:00:31:05] como funciona essa conexão API, tá bom?
#KAIROS E:0.0315 Pk:0.4124 Ph:0.0Hz V:0.0Hz R:1.76wps S:0ms

[00:00:31:09 --> 00:00:33:01] Então, a gente vai passar por isso aqui agora,
#KAIROS E:0.039 Pk:0.374 Ph:0.0Hz V:0.0Hz R:5.23wps S:140ms

[00:00:33:07 --> 00:00:35:00] mas enquanto o pessoal está chegando,
#KAIROS E:0.0372 Pk:0.3175 Ph:0.0Hz V:0.0Hz R:3.37wps S:200ms

[00:00:35:00 --> 00:00:36:20] só uma recapitulação para vocês.
#KAIROS E:0.0335 Pk:0.2455 Ph:0.0Hz V:0.0Hz R:3.05wps S:0ms

[00:00:36:25 --> 00:00:39:17] Nós conectamos o nosso projeto aqui durante a manhã
#KAIROS E:0.0284 Pk:0.2726 Ph:0.0Hz V:0.0Hz R:3.31wps S:179ms

[00:00:39:17 --> 00:00:44:04] com o Supabase, então passamos por todo o processo de conexão com o Supabase,
#KAIROS E:0.0239 Pk:0.2004 Ph:0.0Hz V:0.0Hz R:3.06wps S:0ms

[00:00:44:04 --> 00:00:49:20] passamos pelo processo também de autenticação, de configuração da autenticação,
#KAIROS E:0.0228 Pk:0.2553 Ph:0.0Hz V:0.0Hz R:1.81wps S:0ms

[00:00:50:11 --> 00:00:54:13] também conectamos aqui o storage, para caso você queira enviar arquivos, imagens, vídeos,
#KAIROS E:0.0352 Pk:0.2965 Ph:0.0Hz V:0.0Hz R:3.2wps S:700ms

[00:00:54:18 --> 00:00:57:03] principalmente quando a gente criar a área de prompt ali da IA,
#KAIROS E:0.0279 Pk:0.3333 Ph:0.0Hz V:0.0Hz R:4.76wps S:159ms

[00:00:57:07 --> 00:01:03:03] então tudo isso já está aqui configurado, os cabos já estão quase todos conectados.
#KAIROS E:0.0363 Pk:0.361 Ph:0.0Hz V:0.0Hz R:2.39wps S:119ms

[00:01:03:14 --> 00:01:07:25] Falta a gente conectar o cabo aqui da API, da inteligência artificial.
#KAIROS E:0.0388 Pk:0.3507 Ph:0.0Hz V:0.0Hz R:2.74wps S:359ms

[00:01:07:25 --> 00:01:10:11] E aí presta muita atenção no que eu vou falar aqui agora.
#KAIROS E:0.0233 Pk:0.2315 Ph:0.0Hz V:0.0Hz R:4.72wps S:0ms

[00:01:10:18 --> 00:01:11:26] Tinha um pessoal aí perguntando,
#KAIROS E:0.0315 Pk:0.2026 Ph:0.0Hz V:0.0Hz R:3.97wps S:239ms

[00:01:11:27 --> 00:01:14:19] ah, vale a pena usar esses agregadores de A,
#KAIROS E:0.0387 Pk:0.2821 Ph:0.0Hz V:0.0Hz R:3.28wps S:19ms

[00:01:14:23 --> 00:01:18:03] esses hubs de A, Inner AI, Adapta?
#KAIROS E:0.046 Pk:0.3329 Ph:0.0Hz V:0.0Hz R:2.08wps S:119ms

[00:01:18:06 --> 00:01:21:20] E isso vale muito a pena se você é iniciante,
#KAIROS E:0.0298 Pk:0.2451 Ph:0.0Hz V:0.0Hz R:2.89wps S:79ms

[00:01:21:21 --> 00:01:24:10] se você está começando e se você não vai usar agentes de A.
#KAIROS E:0.0281 Pk:0.2225 Ph:0.0Hz V:0.0Hz R:4.96wps S:60ms

[00:01:24:13 --> 00:01:27:18] Você só quer chatbots ali para conversar, assistentes,
#KAIROS E:0.0252 Pk:0.2369 Ph:0.0Hz V:0.0Hz R:2.53wps S:100ms

[00:01:27:20 --> 00:01:29:18] mas não chega no nível de agentes de A
#KAIROS E:0.0217 Pk:0.1477 Ph:0.0Hz V:0.0Hz R:4.64wps S:60ms

[00:01:29:18 --> 00:01:33:01] e muito menos ainda chega nesse nível que nós estamos trabalhando aqui.
#KAIROS E:0.0246 Pk:0.1747 Ph:0.0Hz V:0.0Hz R:3.49wps S:0ms

[00:01:33:06 --> 00:01:35:05] Para quem quer trabalhar com IA avançada,
#KAIROS E:0.0293 Pk:0.3221 Ph:0.0Hz V:0.0Hz R:3.54wps S:159ms

[00:01:35:05 --> 00:01:36:08] igual eu estou ensinando para vocês,
#KAIROS E:0.026 Pk:0.2177 Ph:0.0Hz V:0.0Hz R:5.56wps S:0ms

[00:01:36:08 --> 00:01:38:20] e vocês estão percebendo que vocês também podem,
#KAIROS E:0.0305 Pk:0.2368 Ph:0.0Hz V:0.0Hz R:3.33wps S:0ms

[00:01:40:11 --> 00:01:43:05] nós gerenciamos as IAs através de API.
#KAIROS E:0.0242 Pk:0.1613 Ph:0.0Hz V:0.0Hz R:2.5wps S:1700ms

[00:01:43:24 --> 00:01:46:19] Então, nós conectamos o nosso sistema direto
#KAIROS E:0.0298 Pk:0.2502 Ph:0.0Hz V:0.0Hz R:2.46wps S:640ms

[00:01:46:19 --> 00:01:48:29] na ferramenta de IA que a gente quer utilizar
#KAIROS E:0.032 Pk:0.3177 Ph:0.0Hz V:0.0Hz R:3.85wps S:0ms

[00:01:48:29 --> 00:01:52:12] e aí nós vamos utilizando os tokens por demanda.
#KAIROS E:0.0352 Pk:0.3468 Ph:0.0Hz V:0.0Hz R:2.62wps S:0ms

[00:01:52:14 --> 00:01:54:03] Então, cada pedido que você faz,
#KAIROS E:0.0329 Pk:0.3032 Ph:0.0Hz V:0.0Hz R:3.61wps S:39ms

[00:01:54:05 --> 00:01:56:28] você vai gastando centavos ali, vai acumulando isso
#KAIROS E:0.042 Pk:0.489 Ph:0.0Hz V:0.0Hz R:2.9wps S:60ms

[00:01:56:28 --> 00:01:59:15] e aí depois você paga ali uma fatura no final.
#KAIROS E:0.0307 Pk:0.2642 Ph:0.0Hz V:0.0Hz R:3.88wps S:0ms

[00:01:59:27 --> 00:02:02:03] Então, a gente vai falar mais sobre isso aqui também.
#KAIROS E:0.0275 Pk:0.2893 Ph:0.0Hz V:0.0Hz R:4.5wps S:379ms

[00:02:02:08 --> 00:02:04:23] Vai ser bem interessante, tem muita coisa ainda para acontecer,
#KAIROS E:0.0265 Pk:0.1705 Ph:0.0Hz V:0.0Hz R:3.97wps S:140ms

[00:02:04:23 --> 00:02:06:29] por mais que a gente esteja caminhando para o final.
#KAIROS E:0.0224 Pk:0.2015 Ph:0.0Hz V:0.0Hz R:4.55wps S:0ms

[00:02:07:03 --> 00:02:09:01] Então, fizemos a conexão aqui.
#KAIROS E:0.0324 Pk:0.2989 Ph:0.0Hz V:0.0Hz R:2.6wps S:140ms

[00:02:09:17 --> 00:02:11:02] Vou pegar nosso projeto aqui também.
#KAIROS E:0.0205 Pk:0.1732 Ph:0.0Hz V:0.0Hz R:4.0wps S:539ms

[00:02:11:08 --> 00:02:14:20] Olha o tanto de coisa que o nosso projeto tem.
#KAIROS E:0.0416 Pk:0.4677 Ph:0.0Hz V:0.0Hz R:2.96wps S:199ms

[00:02:14:21 --> 00:02:16:29] Lembra que a gente começou essa pasta aqui com nada.
#KAIROS E:0.036 Pk:0.4288 Ph:0.0Hz V:0.0Hz R:4.42wps S:60ms

[00:02:17:04 --> 00:02:19:06] Não tinha nada zerado, não tinha nada aqui.
#KAIROS E:0.0496 Pk:0.364 Ph:0.0Hz V:0.0Hz R:3.85wps S:159ms

[00:02:19:17 --> 00:02:21:03] E agora olha o tanto de coisa que tem.
#KAIROS E:0.0273 Pk:0.2629 Ph:0.0Hz V:0.0Hz R:5.92wps S:360ms

[00:02:21:15 --> 00:02:23:08] Está vendo que tem vários coloridinhos?
#KAIROS E:0.0426 Pk:0.3955 Ph:0.0Hz V:0.0Hz R:3.41wps S:399ms

[00:02:23:12 --> 00:02:26:06] Isso significa que a gente não subiu o projeto para o GitHub
#KAIROS E:0.0246 Pk:0.1996 Ph:0.0Hz V:0.0Hz R:4.26wps S:139ms

[00:02:26:06 --> 00:02:30:07] desde que a gente conectou no GitHub pela primeira vez ontem à tarde.
#KAIROS E:0.0249 Pk:0.2214 Ph:0.0Hz V:0.0Hz R:3.23wps S:0ms

[00:02:30:15 --> 00:02:34:06] Eu só vou subir para o GitHub quando a gente finalizar aqui.
#KAIROS E:0.0322 Pk:0.3127 Ph:0.0Hz V:0.0Hz R:3.24wps S:259ms

[00:02:34:06 --> 00:02:40:24] Aí eu vou mostrar para vocês como que funciona esse processo de subir para o GitHub e vocês vão poder fazer o download do projeto.
#KAIROS E:0.0262 Pk:0.3483 Ph:0.0Hz V:0.0Hz R:3.79wps S:0ms

[00:02:41:03 --> 00:02:44:02] Então, a gente vai passar por esse processo aí.
#KAIROS E:0.0265 Pk:0.3307 Ph:0.0Hz V:0.0Hz R:3.04wps S:300ms

[00:02:44:08 --> 00:02:50:08] Nós temos aqui todo o trabalho que foi feito pelas IAs, trabalhando aqui até então em todo o projeto.
#KAIROS E:0.0376 Pk:0.3359 Ph:0.0Hz V:0.0Hz R:3.17wps S:200ms

[00:02:50:17 --> 00:02:57:10] Isso aqui a gente pode fechar e nós temos o nosso localhost acontecendo aqui na porta 3040.
#KAIROS E:0.0283 Pk:0.2795 Ph:0.0Hz V:0.0Hz R:2.51wps S:299ms

[00:02:57:12 --> 00:03:00:07] Então, o servidor foi reiniciado ali, tudo certinho.
#KAIROS E:0.025 Pk:0.2731 Ph:0.0Hz V:0.0Hz R:2.84wps S:80ms

[00:03:01:01 --> 00:03:03:10] Como a gente terminou essa etapa aqui agora,
#KAIROS E:0.0339 Pk:0.3123 Ph:0.0Hz V:0.0Hz R:3.48wps S:800ms

[00:03:03:15 --> 00:03:05:06] nós podemos dar um clear.
#KAIROS E:0.0302 Pk:0.206 Ph:0.0Hz V:0.0Hz R:2.94wps S:159ms

[00:03:05:14 --> 00:03:06:23] Então, eu vou dar um barra clear aqui.
#KAIROS E:0.0278 Pk:0.2522 Ph:0.0Hz V:0.0Hz R:6.15wps S:280ms

[00:03:07:07 --> 00:03:08:26] Estamos de volta com o Claudinho aqui
#KAIROS E:0.0324 Pk:0.3008 Ph:0.0Hz V:0.0Hz R:4.27wps S:460ms

[00:03:08:26 --> 00:03:10:24] para poder iniciar a próxima etapa.
#KAIROS E:0.0264 Pk:0.2897 Ph:0.0Hz V:0.0Hz R:3.09wps S:0ms

[00:03:11:00 --> 00:03:15:00] E o que nós vamos fazer aqui é conectar a API da IA
#KAIROS E:0.035 Pk:0.3515 Ph:0.0Hz V:0.0Hz R:3.25wps S:179ms

[00:03:15:00 --> 00:03:17:26] para que a gente possa utilizar ela aqui no projeto,
#KAIROS E:0.026 Pk:0.292 Ph:0.0Hz V:0.0Hz R:3.5wps S:0ms

[00:03:18:18 --> 00:03:19:08] no nosso sistema.
#KAIROS E:0.025 Pk:0.1923 Ph:0.0Hz V:0.0Hz R:4.69wps S:759ms

[00:03:19:14 --> 00:03:22:15] Só que antes de conectar a API, eu quero criar a tela.
#KAIROS E:0.032 Pk:0.3223 Ph:0.0Hz V:0.0Hz R:3.95wps S:219ms

[00:03:22:20 --> 00:03:23:23] Então, o que eu vou fazer?
#KAIROS E:0.0147 Pk:0.0813 Ph:0.0Hz V:0.0Hz R:5.45wps S:139ms

[00:03:23:28 --> 00:03:26:07] Eu vou vir aqui na tela do nosso sistema.
#KAIROS E:0.0219 Pk:0.1822 Ph:0.0Hz V:0.0Hz R:3.91wps S:179ms

[00:03:27:16 --> 00:03:29:28] E vou tirar um print dele aqui, posso deixar em Founder aqui?
#KAIROS E:0.0358 Pk:0.3363 Ph:0.0Hz V:0.0Hz R:5.0wps S:1316ms

[00:03:30:02 --> 00:03:30:23] Vou tirar um print.
#KAIROS E:0.0189 Pk:0.1794 Ph:0.0Hz V:0.0Hz R:5.71wps S:120ms

[00:03:31:13 --> 00:03:33:01] E eu quero criar uma tela diferente.
#KAIROS E:0.0531 Pk:0.4359 Ph:0.0Hz V:0.0Hz R:4.32wps S:659ms

[00:03:33:12 --> 00:03:34:12] Então, vou printar aqui.
#KAIROS E:0.0143 Pk:0.1193 Ph:0.0Hz V:0.0Hz R:4.0wps S:340ms

[00:03:35:07 --> 00:03:39:17] Eu posso até fazer um print contextualizado para ir aqui.
#KAIROS E:0.0372 Pk:0.343 Ph:0.0Hz V:0.0Hz R:2.31wps S:859ms

[00:03:40:00 --> 00:03:41:04] Eu gosto de fazer assim, ó.
#KAIROS E:0.0336 Pk:0.3421 Ph:0.0Hz V:0.0Hz R:5.26wps S:419ms

[00:03:41:25 --> 00:03:43:04] Jogo um rabiscozinho assim.
#KAIROS E:0.0289 Pk:0.3277 Ph:0.0Hz V:0.0Hz R:3.03wps S:700ms

[00:03:45:03 --> 00:03:46:16] Cola aqui e fala para a IA.
#KAIROS E:0.0501 Pk:0.3818 Ph:0.0Hz V:0.0Hz R:4.86wps S:1936ms

[00:03:47:03 --> 00:03:51:09] Adicione uma página na parte de cima do sidebar.
#KAIROS E:0.0214 Pk:0.2961 Ph:0.0Hz V:0.0Hz R:2.15wps S:580ms

[00:03:53:01 --> 00:03:58:18] em que teremos um prompt area para conversar com a IA.
#KAIROS E:0.032 Pk:0.354 Ph:0.0Hz V:0.0Hz R:1.97wps S:1736ms

[00:03:59:29 --> 00:04:01:03] Sobre as informações.
#KAIROS E:0.0428 Pk:0.2447 Ph:0.0Hz V:0.0Hz R:2.68wps S:1364ms

[00:04:05:10 --> 00:04:06:03] Adicionamos.
#KAIROS E:0.0374 Pk:0.3261 Ph:0.0Hz V:0.0Hz R:1.32wps S:4256ms

[00:04:08:03 --> 00:04:08:21] Sistema.
#KAIROS E:0.0358 Pk:0.2429 Ph:0.0Hz V:0.0Hz R:1.67wps S:1992ms

[00:04:11:04 --> 00:04:13:09] Além da área de prompt.
#KAIROS E:0.0416 Pk:0.3664 Ph:0.0Hz V:0.0Hz R:2.31wps S:2439ms

[00:04:15:08 --> 00:04:15:20] Eu quero.
#KAIROS E:0.0275 Pk:0.1718 Ph:0.0Hz V:0.0Hz R:4.76wps S:1967ms

[00:04:17:09 --> 00:04:26:18] você conecte todas as respostas e pesquisas que são geradas pelo usuário em...
#KAIROS E:0.0235 Pk:0.3141 Ph:0.0Hz V:0.0Hz R:1.4wps S:1627ms

[00:04:28:13 --> 00:04:30:29] uma base de conhecimento da IA.
#KAIROS E:0.04 Pk:0.3812 Ph:0.0Hz V:0.0Hz R:2.38wps S:1855ms

[00:04:31:04 --> 00:04:36:00] Essa base não precisa ficar visível no sistema,
#KAIROS E:0.0279 Pk:0.3697 Ph:0.0Hz V:0.0Hz R:1.65wps S:160ms

[00:04:36:26 --> 00:04:37:20] mas sempre...
#KAIROS E:0.0238 Pk:0.2032 Ph:0.0Hz V:0.0Hz R:2.5wps S:879ms

[00:04:38:28 --> 00:04:40:06] que ela responde.
#KAIROS E:0.0367 Pk:0.2567 Ph:0.0Hz V:0.0Hz R:2.38wps S:1276ms

[00:04:43:08 --> 00:04:44:28] Responde baseado.
#KAIROS E:0.0213 Pk:0.2031 Ph:0.0Hz V:0.0Hz R:1.2wps S:3060ms

[00:04:48:02 --> 00:04:53:20] Para isso, utilize, aí aqui vem mais um conceitinho, PG Vector.
#KAIROS E:0.0328 Pk:0.372 Ph:0.0Hz V:0.0Hz R:1.96wps S:3139ms

[00:04:54:02 --> 00:04:57:21] PG Vector é o banco vetorial feito com Postgrease.
#KAIROS E:0.04 Pk:0.2939 Ph:0.0Hz V:0.0Hz R:2.49wps S:419ms

[00:04:58:01 --> 00:05:02:08] Então é uma junção aqui, que o Supabase já entrega para a gente,
#KAIROS E:0.0333 Pk:0.2993 Ph:0.0Hz V:0.0Hz R:3.05wps S:319ms

[00:05:02:11 --> 00:05:07:20] então a notícia boa é que a gente não vai ter que fazer configuração complicada e técnica nenhuma aqui,
#KAIROS E:0.027 Pk:0.3121 Ph:0.0Hz V:0.0Hz R:3.58wps S:80ms

[00:05:07:22 --> 00:05:12:13] porque como a nossa IA já está conectada no Supabase, ela mesma vai gerenciar isso.
#KAIROS E:0.0304 Pk:0.3282 Ph:0.0Hz V:0.0Hz R:3.21wps S:79ms

[00:05:12:19 --> 00:05:16:22] Vai ser importante trabalhar com PG Vector.
#KAIROS E:0.0266 Pk:0.4034 Ph:0.0Hz V:0.0Hz R:1.72wps S:219ms

[00:05:18:07 --> 00:05:18:15] Para.
#KAIROS E:0.0659 Pk:0.2898 Ph:0.0Hz V:0.0Hz R:3.57wps S:1515ms

[00:05:22:15 --> 00:05:23:12] Trans... para...
#KAIROS E:0.0268 Pk:0.2445 Ph:0.0Hz V:0.0Hz R:2.22wps S:3975ms

[00:05:24:18 --> 00:05:25:10] Lidarmos...
#KAIROS E:0.0441 Pk:0.3731 Ph:0.0Hz V:0.0Hz R:1.39wps S:1211ms

[00:05:27:27 --> 00:05:30:17] os dados de maneira relacional.
#KAIROS E:0.0191 Pk:0.1823 Ph:0.0Hz V:0.0Hz R:1.88wps S:2575ms

[00:05:31:12 --> 00:05:32:20] Aí vem mais um conceitinho aqui.
#KAIROS E:0.0394 Pk:0.3484 Ph:0.0Hz V:0.0Hz R:4.76wps S:839ms

[00:05:32:22 --> 00:05:38:14] Para isso, você pode utilizar o Embedding 2 do Google.
#KAIROS E:0.0365 Pk:0.3623 Ph:0.0Hz V:0.0Hz R:1.74wps S:60ms

[00:05:38:24 --> 00:05:41:08] O Embedding é um...
#KAIROS E:0.0399 Pk:0.3814 Ph:0.0Hz V:0.0Hz R:1.61wps S:340ms

[00:05:43:01 --> 00:05:48:27] É uma ferramenta do Google que vai quebrar qualquer informação em vetor para a gente.
#KAIROS E:0.0363 Pk:0.3868 Ph:0.0Hz V:0.0Hz R:2.56wps S:1756ms

[00:05:49:01 --> 00:05:54:27] Então, lembra que o banco tradicional de dados, ele vai salvar ali vários dados,
#KAIROS E:0.0368 Pk:0.304 Ph:0.0Hz V:0.0Hz R:2.39wps S:139ms

[00:05:55:02 --> 00:05:59:02] só que ele salva dentro de uma tabela, e isso são chars, caracteres.
#KAIROS E:0.0302 Pk:0.3011 Ph:0.0Hz V:0.0Hz R:3.27wps S:180ms

[00:05:59:05 --> 00:06:03:11] A gente precisa transformar esses caracteres em números, em vetores,
#KAIROS E:0.0335 Pk:0.2165 Ph:0.0Hz V:0.0Hz R:2.38wps S:120ms

[00:06:03:27 --> 00:06:07:27] que a IA vai conseguir estabelecer relações mais fácil,
#KAIROS E:0.0375 Pk:0.3129 Ph:0.0Hz V:0.0Hz R:2.24wps S:520ms

[00:06:08:01 --> 00:06:10:04] se ela conseguir trabalhar com esses vetores.
#KAIROS E:0.0262 Pk:0.2553 Ph:0.0Hz V:0.0Hz R:3.33wps S:120ms

[00:06:10:20 --> 00:06:12:20] Então, eu vou fazer aqui de um jeito simples,
#KAIROS E:0.0415 Pk:0.3592 Ph:0.0Hz V:0.0Hz R:4.5wps S:539ms

[00:06:12:22 --> 00:06:15:29] tem várias camadas, várias maneiras diferentes de trabalhar isso aqui,
#KAIROS E:0.0349 Pk:0.3005 Ph:0.0Hz V:0.0Hz R:3.09wps S:60ms

[00:06:16:02 --> 00:06:18:23] mas eu vou pedir para a IA fazer de uma maneira bem simples para a gente.
#KAIROS E:0.0308 Pk:0.2734 Ph:0.0Hz V:0.0Hz R:5.97wps S:100ms

[00:06:19:03 --> 00:06:22:03] Então, eu vou falar para ela usar aqui o Embedding 2 do Google.
#KAIROS E:0.0427 Pk:0.3779 Ph:0.0Hz V:0.0Hz R:4.36wps S:360ms

[00:06:22:06 --> 00:06:24:04] Se quiserem saber mais sobre isso depois,
#KAIROS E:0.0271 Pk:0.2459 Ph:0.0Hz V:0.0Hz R:3.61wps S:100ms

[00:06:24:25 --> 00:06:29:20] vocês podem vir aqui, olha só, digitem Embedding 2 Google,
#KAIROS E:0.0244 Pk:0.2565 Ph:0.0Hz V:0.0Hz R:2.07wps S:699ms

[00:06:29:26 --> 00:06:32:26] que é o Gemini Embedding 2.
#KAIROS E:0.03 Pk:0.3135 Ph:0.0Hz V:0.0Hz R:2.01wps S:219ms

[00:06:33:06 --> 00:06:35:20] Aí tem toda a explicação aqui de como que ele funciona.
#KAIROS E:0.0306 Pk:0.2498 Ph:0.0Hz V:0.0Hz R:4.44wps S:340ms

[00:06:36:03 --> 00:06:38:28] Como é uma questão mais técnica, não é o objetivo aqui agora,
#KAIROS E:0.0301 Pk:0.2067 Ph:0.0Hz V:0.0Hz R:4.23wps S:420ms

[00:06:38:28 --> 00:06:40:22] eu não vou mergulhar nisso aqui não, tá bom?
#KAIROS E:0.0217 Pk:0.2442 Ph:0.0Hz V:0.0Hz R:5.0wps S:0ms

[00:06:41:05 --> 00:06:42:15] Então vamos voltar aqui pro
#KAIROS E:0.0241 Pk:0.1632 Ph:0.0Hz V:0.0Hz R:3.73wps S:420ms

[00:06:43:03 --> 00:06:44:12] pro prompt e
#KAIROS E:0.0287 Pk:0.3572 Ph:0.0Hz V:0.0Hz R:2.31wps S:620ms

[00:06:44:24 --> 00:06:46:26] beleza. Vou falar pra ele mais
#KAIROS E:0.0501 Pk:0.415 Ph:0.0Hz V:0.0Hz R:2.88wps S:379ms

[00:06:46:26 --> 00:06:47:09] uma coisa.
#KAIROS E:0.0466 Pk:0.2154 Ph:0.0Hz V:0.0Hz R:4.55wps S:0ms

[00:06:48:26 --> 00:06:50:09] Mais um detalhe importante.
#KAIROS E:0.0378 Pk:0.2711 Ph:0.0Hz V:0.0Hz R:2.78wps S:1544ms

[00:06:52:08 --> 00:06:53:20] Precisamos salvar...
#KAIROS E:0.0424 Pk:0.2597 Ph:0.0Hz V:0.0Hz R:1.43wps S:1951ms

[00:06:54:28 --> 00:06:56:17] As conversas do usuário.
#KAIROS E:0.0304 Pk:0.3067 Ph:0.0Hz V:0.0Hz R:2.44wps S:1288ms

[00:06:59:00 --> 00:07:04:00] e ter um sidebar para acessar conversas anteriores.
#KAIROS E:0.0325 Pk:0.296 Ph:0.0Hz V:0.0Hz R:1.6wps S:2424ms

[00:07:05:20 --> 00:07:08:05] Podemos fazer uma sidebar.
#KAIROS E:0.026 Pk:0.2196 Ph:0.0Hz V:0.0Hz R:1.6wps S:1656ms

[00:07:10:08 --> 00:07:12:29] Aí eu vou mostrar para ele aqui como que eu vou fazer essa sidebar dupla.
#KAIROS E:0.0212 Pk:0.2043 Ph:0.0Hz V:0.0Hz R:5.56wps S:2107ms

[00:07:13:03 --> 00:07:15:28] Então eu volto aqui no nosso site.
#KAIROS E:0.0233 Pk:0.3828 Ph:0.0Hz V:0.0Hz R:2.48wps S:139ms

[00:07:16:26 --> 00:07:19:01] E eu vou tirar um print aqui para ele.
#KAIROS E:0.0377 Pk:0.4149 Ph:0.0Hz V:0.0Hz R:4.17wps S:939ms

[00:07:19:23 --> 00:07:21:05] E vou falar para ele colocar aqui.
#KAIROS E:0.0267 Pk:0.2859 Ph:0.0Hz V:0.0Hz R:5.0wps S:739ms

[00:07:23:27 --> 00:07:24:09] Pronto.
#KAIROS E:0.0089 Pk:0.069 Ph:0.0Hz V:0.0Hz R:2.5wps S:2731ms

[00:07:28:09 --> 00:07:35:04] Essa sidebar só aparece se eu acessar a página do Prompt Area,
#KAIROS E:0.027 Pk:0.2818 Ph:0.0Hz V:0.0Hz R:1.75wps S:3983ms

[00:07:35:13 --> 00:07:38:06] que podemos chamar de principal.
#KAIROS E:0.0245 Pk:0.1971 Ph:0.0Hz V:0.0Hz R:1.81wps S:319ms

[00:07:39:06 --> 00:07:39:13] Então, beleza.
#KAIROS E:0.0198 Pk:0.1029 Ph:0.0Hz V:0.0Hz R:7.69wps S:980ms

[00:07:41:11 --> 00:07:47:09] Para fechar, também vamos precisar de uma página da conversa.
#KAIROS E:0.0412 Pk:0.5259 Ph:0.0Hz V:0.0Hz R:1.69wps S:1927ms

[00:07:48:09 --> 00:07:51:06] Vou deixar um exemplo aqui para você.
#KAIROS E:0.0262 Pk:0.2047 Ph:0.0Hz V:0.0Hz R:2.4wps S:992ms

[00:07:51:19 --> 00:07:56:04] Então, vou pegar aqui o exemplo do próprio chat GPT, acho que ele vai ser suficiente para a gente.
#KAIROS E:0.0258 Pk:0.2363 Ph:0.0Hz V:0.0Hz R:4.2wps S:420ms

[00:07:56:21 --> 00:08:00:18] E eu quero printar essa caixinha aqui.
#KAIROS E:0.0421 Pk:0.4255 Ph:0.0Hz V:0.0Hz R:1.8wps S:560ms

[00:08:01:28 --> 00:08:03:00] Então vou printar aqui para ele.
#KAIROS E:0.0218 Pk:0.1453 Ph:0.0Hz V:0.0Hz R:5.77wps S:1363ms

[00:08:08:17 --> 00:08:10:28] Vai ficar assim na página principal.
#KAIROS E:0.0151 Pk:0.2162 Ph:0.0Hz V:0.0Hz R:2.54wps S:5584ms

[00:08:12:27 --> 00:08:17:21] E assim, aí eu vou responder com uma coisa, escreva um parágrafo.
#KAIROS E:0.0152 Pk:0.1841 Ph:0.0Hz V:0.0Hz R:2.49wps S:1959ms

[00:08:23:17 --> 00:08:24:28] Beleza, beleza, beleza, beleza.
#KAIROS E:0.0096 Pk:0.0498 Ph:0.0Hz V:0.0Hz R:2.99wps S:5867ms

[00:08:27:00 --> 00:08:28:01] Vou printar aqui para ele.
#KAIROS E:0.0331 Pk:0.2219 Ph:0.0Hz V:0.0Hz R:4.9wps S:2084ms

[00:08:29:25 --> 00:08:33:16] Só para ele ter uma estrutura, dá para mudar o design depois, fazer do jeito que...
#KAIROS E:0.0254 Pk:0.2458 Ph:0.0Hz V:0.0Hz R:4.3wps S:1795ms

[00:08:34:25 --> 00:08:39:08] E assim na parte da conversa.
#KAIROS E:0.0148 Pk:0.1881 Ph:0.0Hz V:0.0Hz R:1.36wps S:1304ms

[00:08:40:09 --> 00:08:43:25] Mantenha nosso design sistema e componentes.
#KAIROS E:0.0098 Pk:0.1078 Ph:0.0Hz V:0.0Hz R:1.7wps S:1039ms

[00:08:44:26 --> 00:08:48:08] Vamos precisar criar um... Ah, vou deixar só desse jeito.
#KAIROS E:0.0138 Pk:0.1709 Ph:0.0Hz V:0.0Hz R:2.92wps S:1036ms

[00:08:48:19 --> 00:08:55:09] Coloque múltiplos agentes em paralelização para trabalharem por você.
#KAIROS E:0.0193 Pk:0.2105 Ph:0.0Hz V:0.0Hz R:1.35wps S:340ms

[00:08:56:10 --> 00:08:58:04] Você delega, eles...
#KAIROS E:0.0139 Pk:0.1148 Ph:0.0Hz V:0.0Hz R:1.67wps S:1020ms

[00:08:59:29 --> 00:09:02:27] Então essa é a primeira parte aqui, para ir a construir ali a tela,
#KAIROS E:0.0435 Pk:0.3708 Ph:0.0Hz V:0.0Hz R:4.76wps S:1844ms

[00:09:02:28 --> 00:09:04:07] montar isso aí para a gente.
#KAIROS E:0.0185 Pk:0.1943 Ph:0.0Hz V:0.0Hz R:4.62wps S:39ms

[00:09:04:27 --> 00:09:07:21] Vou mandar esse prompt aí, podem printar também, né?
#KAIROS E:0.0315 Pk:0.3077 Ph:0.0Hz V:0.0Hz R:3.21wps S:659ms

[00:09:07:22 --> 00:09:09:07] A Nanda vai colocar para vocês aí no...
#KAIROS E:0.0128 Pk:0.1031 Ph:0.0Hz V:0.0Hz R:5.33wps S:40ms

[00:09:10:14 --> 00:09:11:04] Não é só esse?
#KAIROS E:0.0124 Pk:0.0887 Ph:0.0Hz V:0.0Hz R:5.88wps S:1216ms

[00:09:13:03 --> 00:09:14:24] Mas vocês conseguem printar aí também.
#KAIROS E:0.0213 Pk:0.1702 Ph:0.0Hz V:0.0Hz R:3.53wps S:1975ms

[00:09:18:12 --> 00:09:20:02] Deixa eu ver, não consegui colar não
#KAIROS E:0.0071 Pk:0.0703 Ph:0.0Hz V:0.0Hz R:4.22wps S:3579ms

[00:09:21:21 --> 00:09:23:08] Para eu soltar para vocês eu tenho que colocar aqui.
#KAIROS E:0.0157 Pk:0.1679 Ph:0.0Hz V:0.0Hz R:6.41wps S:1635ms

[00:09:24:24 --> 00:09:27:11] Salva mais uma vez e toma aí para vocês.
#KAIROS E:0.0102 Pk:0.0969 Ph:0.0Hz V:0.0Hz R:3.49wps S:1544ms

[00:09:32:20 --> 00:09:34:00] A gente vai voltar pra cá daqui a pouquinho.
#KAIROS E:0.0358 Pk:0.2782 Ph:0.0Hz V:0.0Hz R:6.82wps S:5292ms

[00:09:35:21 --> 00:09:37:03] Lá no grupo da Vanguarda...
#KAIROS E:0.0506 Pk:0.4183 Ph:0.0Hz V:0.0Hz R:3.52wps S:1699ms

[00:09:38:20 --> 00:09:42:13] O grupo do pessoal tá printando isso aqui, ó, e tá montando uma historinha.
#KAIROS E:0.0471 Pk:0.3907 Ph:0.0Hz V:0.0Hz R:3.7wps S:1544ms

[00:09:43:22 --> 00:09:45:20] Falaram que vão fazer uma exposição de arte dessa.
#KAIROS E:0.0345 Pk:0.3099 Ph:0.0Hz V:0.0Hz R:4.64wps S:1307ms

[00:09:47:05 --> 00:09:48:05] Esses desenhos aqui.
#KAIROS E:0.0275 Pk:0.1948 Ph:0.0Hz V:0.0Hz R:3.0wps S:1484ms

[00:09:48:16 --> 00:09:49:17] Vamos voltar pra cá.
#KAIROS E:0.028 Pk:0.192 Ph:0.0Hz V:0.0Hz R:3.85wps S:360ms

[00:09:51:02 --> 00:09:53:25] Então, ele já começou a trabalhar, já começou a mapear aqui para a gente
#KAIROS E:0.0538 Pk:0.4879 Ph:0.0Hz V:0.0Hz R:5.07wps S:1504ms

[00:09:53:25 --> 00:09:55:25] e nós não precisamos ficar parados.
#KAIROS E:0.0416 Pk:0.252 Ph:0.0Hz V:0.0Hz R:2.97wps S:0ms

[00:09:56:00 --> 00:09:58:04] Enquanto ele está aqui configurando tudo isso,
#KAIROS E:0.0384 Pk:0.3622 Ph:0.0Hz V:0.0Hz R:3.27wps S:140ms

[00:09:58:06 --> 00:10:01:06] nós já podemos entender aqui como que funcionam as APIs
#KAIROS E:0.0374 Pk:0.2622 Ph:0.0Hz V:0.0Hz R:3.33wps S:79ms

[00:10:01:06 --> 00:10:04:25] e já conectar a API da IA aqui para eles, tá bom?
#KAIROS E:0.0321 Pk:0.2819 Ph:0.0Hz V:0.0Hz R:3.3wps S:0ms

[00:10:05:06 --> 00:10:07:21] Para o agente, quando eu quis dizer para eles.
#KAIROS E:0.0334 Pk:0.3223 Ph:0.0Hz V:0.0Hz R:3.6wps S:360ms

[00:10:08:01 --> 00:10:10:08] Então, eu vou voltar aqui na nossa...
#KAIROS E:0.0297 Pk:0.23 Ph:0.0Hz V:0.0Hz R:3.13wps S:320ms

[00:10:12:09 --> 00:10:14:13] no nosso navegador, e vou digitar aqui o seguinte,
#KAIROS E:0.0431 Pk:0.2925 Ph:0.0Hz V:0.0Hz R:4.17wps S:2015ms

[00:10:14:24 --> 00:10:16:10] API funcionamento.
#KAIROS E:0.0454 Pk:0.3038 Ph:0.0Hz V:0.0Hz R:1.3wps S:360ms

[00:10:16:12 --> 00:10:17:23] Por que eu estou digitando desse jeito?
#KAIROS E:0.0281 Pk:0.1797 Ph:0.0Hz V:0.0Hz R:5.07wps S:39ms

[00:10:18:05 --> 00:10:20:10] Porque, às vezes, se vocês se esquecerem,
#KAIROS E:0.0465 Pk:0.357 Ph:0.0Hz V:0.0Hz R:3.21wps S:399ms

[00:10:20:16 --> 00:10:22:06] vocês podem digitar isso no Google,
#KAIROS E:0.0375 Pk:0.2721 Ph:0.0Hz V:0.0Hz R:3.66wps S:199ms

[00:10:22:10 --> 00:10:24:09] e aí vocês têm vários exemplos aqui
#KAIROS E:0.0343 Pk:0.3999 Ph:0.0Hz V:0.0Hz R:3.57wps S:139ms

[00:10:24:09 --> 00:10:25:21] de como uma API funciona.
#KAIROS E:0.0302 Pk:0.2589 Ph:0.0Hz V:0.0Hz R:3.52wps S:0ms

[00:10:26:00 --> 00:10:28:00] Eu quero mostrar aqui para vocês
#KAIROS E:0.0379 Pk:0.3008 Ph:0.0Hz V:0.0Hz R:3.0wps S:300ms

[00:10:28:00 --> 00:10:30:27] mais como uma referência mesmo,
#KAIROS E:0.0397 Pk:0.277 Ph:0.0Hz V:0.0Hz R:1.72wps S:0ms

[00:10:31:02 --> 00:10:34:26] e aí, isso aqui é mais para poder enriquecer
#KAIROS E:0.0418 Pk:0.403 Ph:0.0Hz V:0.0Hz R:2.37wps S:159ms

[00:10:34:26 --> 00:10:36:06] e vocês entenderem como funciona,
#KAIROS E:0.0191 Pk:0.1276 Ph:0.0Hz V:0.0Hz R:3.73wps S:0ms

[00:10:36:13 --> 00:10:39:05] mas a gente nem precisa disso aqui para...
#KAIROS E:0.0342 Pk:0.4039 Ph:0.0Hz V:0.0Hz R:2.92wps S:220ms

[00:10:40:25 --> 00:10:41:17] conectar a API não.
#KAIROS E:0.043 Pk:0.3057 Ph:0.0Hz V:0.0Hz R:5.41wps S:1663ms

[00:10:41:20 --> 00:10:43:16] É mais mesmo uma curiosidade para vocês.
#KAIROS E:0.0415 Pk:0.4874 Ph:0.0Hz V:0.0Hz R:3.72wps S:100ms

[00:10:43:20 --> 00:10:45:26] Então vamos pegar essa daqui da Akamai,
#KAIROS E:0.0539 Pk:0.6129 Ph:0.0Hz V:0.0Hz R:3.18wps S:120ms

[00:10:45:27 --> 00:10:47:28] a Akamai patrocinando aqui o Atos Brincadeira.
#KAIROS E:0.0352 Pk:0.3119 Ph:0.0Hz V:0.0Hz R:3.43wps S:39ms

[00:10:47:28 --> 00:10:49:21] Está patrocinando nada, acabei de pegar no Google,
#KAIROS E:0.0197 Pk:0.1569 Ph:0.0Hz V:0.0Hz R:4.6wps S:0ms

[00:10:49:22 --> 00:10:50:08] nem sei o que é.
#KAIROS E:0.0139 Pk:0.073 Ph:0.0Hz V:0.0Hz R:9.26wps S:39ms

[00:10:51:03 --> 00:10:52:06] Mas olha só que interessante.
#KAIROS E:0.0545 Pk:0.442 Ph:0.0Hz V:0.0Hz R:4.63wps S:839ms

[00:10:52:23 --> 00:10:54:26] Nós temos aqui o consumidor da API
#KAIROS E:0.0406 Pk:0.3734 Ph:0.0Hz V:0.0Hz R:3.33wps S:580ms

[00:10:55:18 --> 00:10:58:12] e nós temos aqui a internet.
#KAIROS E:0.032 Pk:0.3996 Ph:0.0Hz V:0.0Hz R:2.13wps S:719ms

[00:10:59:18 --> 00:11:02:04] Então o consumidor API, via internet,
#KAIROS E:0.0419 Pk:0.3196 Ph:0.0Hz V:0.0Hz R:2.34wps S:1179ms

[00:11:02:13 --> 00:11:03:06] acessa a API.
#KAIROS E:0.0253 Pk:0.2148 Ph:0.0Hz V:0.0Hz R:3.95wps S:299ms

[00:11:03:12 --> 00:11:06:05] A API acessa o servidor web da aplicação.
#KAIROS E:0.044 Pk:0.4648 Ph:0.0Hz V:0.0Hz R:2.88wps S:180ms

[00:11:06:10 --> 00:11:08:06] O servidor acessa o banco de dados.
#KAIROS E:0.0519 Pk:0.4085 Ph:0.0Hz V:0.0Hz R:3.76wps S:159ms

[00:11:08:10 --> 00:11:10:02] O banco de dados envia para o servidor.
#KAIROS E:0.0324 Pk:0.3391 Ph:0.0Hz V:0.0Hz R:4.65wps S:159ms

[00:11:10:02 --> 00:11:13:21] o servidor envia isso para a API, a API envia isso para o consumidor.
#KAIROS E:0.0319 Pk:0.2302 Ph:0.0Hz V:0.0Hz R:3.87wps S:0ms

[00:11:13:22 --> 00:11:14:22] Mas essa imagem aqui...
#KAIROS E:0.0452 Pk:0.3809 Ph:0.0Hz V:0.0Hz R:4.08wps S:60ms

[00:11:16:07 --> 00:11:18:29] Tá ruim. Vamos pegar uma outra aqui pra ver se eu consigo mostrar pra vocês.
#KAIROS E:0.0302 Pk:0.2951 Ph:0.0Hz V:0.0Hz R:5.47wps S:1492ms

[00:11:19:25 --> 00:11:21:05] Essa do garçom é legal.
#KAIROS E:0.0293 Pk:0.2595 Ph:0.0Hz V:0.0Hz R:3.68wps S:860ms

[00:11:24:27 --> 00:11:26:08] Então, basicamente, pensem no seguinte.
#KAIROS E:0.0604 Pk:0.4698 Ph:0.0Hz V:0.0Hz R:3.62wps S:3712ms

[00:11:27:03 --> 00:11:28:24] A gente tem o cliente aqui na cozinha.
#KAIROS E:0.034 Pk:0.2312 Ph:0.0Hz V:0.0Hz R:4.71wps S:819ms

[00:11:28:26 --> 00:11:30:16] O que é o cliente? O cliente é o nosso app, tá?
#KAIROS E:0.0414 Pk:0.3117 Ph:0.0Hz V:0.0Hz R:7.23wps S:79ms

[00:11:31:02 --> 00:11:32:09] Então, está aqui o nosso appzinho.
#KAIROS E:0.0262 Pk:0.2471 Ph:0.0Hz V:0.0Hz R:4.84wps S:519ms

[00:11:32:18 --> 00:11:34:12] E nós queremos colocar aqui um campo
#KAIROS E:0.0364 Pk:0.3227 Ph:0.0Hz V:0.0Hz R:3.89wps S:299ms

[00:11:34:27 --> 00:11:37:13] em que nós vamos poder fazer uma pergunta para a Yala,
#KAIROS E:0.0327 Pk:0.2556 Ph:0.0Hz V:0.0Hz R:4.37wps S:519ms

[00:11:37:13 --> 00:11:37:26] e ela vai responder.
#KAIROS E:0.0308 Pk:0.1732 Ph:0.0Hz V:0.0Hz R:9.09wps S:0ms

[00:11:38:12 --> 00:11:43:09] O nosso sistema, ele é o cardápio aqui, beleza?
#KAIROS E:0.052 Pk:0.614 Ph:0.0Hz V:0.0Hz R:1.84wps S:520ms

[00:11:43:14 --> 00:11:44:15] Nosso sistema é o cardápio.
#KAIROS E:0.0336 Pk:0.2736 Ph:0.0Hz V:0.0Hz R:4.81wps S:159ms

[00:11:44:21 --> 00:11:47:11] E aí, o usuário, que pode ser vocês ou outra pessoa
#KAIROS E:0.0505 Pk:0.3509 Ph:0.0Hz V:0.0Hz R:4.17wps S:220ms

[00:11:47:11 --> 00:11:49:15] que está usando esse sistema, vai fazer um pedido aqui
#KAIROS E:0.0362 Pk:0.2939 Ph:0.0Hz V:0.0Hz R:4.63wps S:0ms

[00:11:50:21 --> 00:11:51:13] nesse cardápio.
#KAIROS E:0.0573 Pk:0.3851 Ph:0.0Hz V:0.0Hz R:2.78wps S:1200ms

[00:11:52:02 --> 00:11:54:24] Quando ele faz o pedido aqui no cardápio,
#KAIROS E:0.0493 Pk:0.4181 Ph:0.0Hz V:0.0Hz R:2.92wps S:620ms

[00:11:54:27 --> 00:11:56:23] Esse cardápio é conectado na API.
#KAIROS E:0.0519 Pk:0.4249 Ph:0.0Hz V:0.0Hz R:3.19wps S:100ms

[00:11:57:01 --> 00:11:57:26] E o que é a API?
#KAIROS E:0.0431 Pk:0.3367 Ph:0.0Hz V:0.0Hz R:7.32wps S:259ms

[00:11:58:00 --> 00:11:58:28] A API é o garçom.
#KAIROS E:0.0434 Pk:0.2851 Ph:0.0Hz V:0.0Hz R:5.43wps S:159ms

[00:11:59:06 --> 00:12:00:07] O que a API faz?
#KAIROS E:0.0455 Pk:0.3353 Ph:0.0Hz V:0.0Hz R:4.9wps S:279ms

[00:12:00:18 --> 00:12:03:27] Ela pega o pedido que foi feito, isso aqui a gente chama de requisição,
#KAIROS E:0.0364 Pk:0.4062 Ph:0.0Hz V:0.0Hz R:4.22wps S:360ms

[00:12:03:29 --> 00:12:08:25] o seu sistema vai fazer uma requisição para a API, que é o garçomzinho aqui.
#KAIROS E:0.0357 Pk:0.3507 Ph:0.0Hz V:0.0Hz R:3.07wps S:39ms

[00:12:10:01 --> 00:12:12:28] E aí, a requisição pode ser de vários tipos,
#KAIROS E:0.0482 Pk:0.5008 Ph:0.0Hz V:0.0Hz R:3.12wps S:1211ms

[00:12:13:04 --> 00:12:15:11] mas tem dois clássicos que são os mais importantes,
#KAIROS E:0.0426 Pk:0.4235 Ph:0.0Hz V:0.0Hz R:4.02wps S:200ms

[00:12:15:18 --> 00:12:17:00] que é uma requisição chamada de GET
#KAIROS E:0.0346 Pk:0.278 Ph:0.0Hz V:0.0Hz R:5.0wps S:240ms

[00:12:17:00 --> 00:12:19:22] e tem uma outra requisição chamada POST.
#KAIROS E:0.0372 Pk:0.3393 Ph:0.0Hz V:0.0Hz R:2.55wps S:0ms

[00:12:20:00 --> 00:12:22:25] Tem outras também, mas essas daqui, se vocês entenderem,
#KAIROS E:0.0405 Pk:0.3646 Ph:0.0Hz V:0.0Hz R:3.17wps S:259ms

[00:12:22:28 --> 00:12:25:12] vocês já vão entender a base de uma API,
#KAIROS E:0.0548 Pk:0.4155 Ph:0.0Hz V:0.0Hz R:3.63wps S:79ms

[00:12:25:16 --> 00:12:26:13] porque ela é tão importante.
#KAIROS E:0.0235 Pk:0.1935 Ph:0.0Hz V:0.0Hz R:5.56wps S:120ms

[00:12:27:05 --> 00:12:29:22] A própria palavra já vai facilitar para vocês.
#KAIROS E:0.0593 Pk:0.6142 Ph:0.0Hz V:0.0Hz R:3.13wps S:740ms

[00:12:30:18 --> 00:12:32:06] POST, lembrem de postar.
#KAIROS E:0.0502 Pk:0.3358 Ph:0.0Hz V:0.0Hz R:2.5wps S:879ms

[00:12:33:19 --> 00:12:34:02] Lembra disso.
#KAIROS E:0.0374 Pk:0.2084 Ph:0.0Hz V:0.0Hz R:4.55wps S:1424ms

[00:12:34:09 --> 00:12:37:09] Então, se eu vou postar alguma coisa, quem está fazendo o post?
#KAIROS E:0.0509 Pk:0.3539 Ph:0.0Hz V:0.0Hz R:4.0wps S:220ms

[00:12:37:14 --> 00:12:38:01] Sou eu.
#KAIROS E:0.0444 Pk:0.2164 Ph:0.0Hz V:0.0Hz R:3.57wps S:179ms

[00:12:38:07 --> 00:12:40:12] Então, eu estou enviando alguma coisa para o sistema.
#KAIROS E:0.0402 Pk:0.3147 Ph:0.0Hz V:0.0Hz R:4.17wps S:199ms

[00:12:41:01 --> 00:12:42:06] Agora, o que é GET?
#KAIROS E:0.0618 Pk:0.4434 Ph:0.0Hz V:0.0Hz R:4.31wps S:639ms

[00:12:42:11 --> 00:12:43:08] GET significa pegar.
#KAIROS E:0.0362 Pk:0.2496 Ph:0.0Hz V:0.0Hz R:3.33wps S:180ms

[00:12:44:06 --> 00:12:46:09] Então, quando eu mando uma requisição de GET,
#KAIROS E:0.0499 Pk:0.3566 Ph:0.0Hz V:0.0Hz R:3.81wps S:919ms

[00:12:46:16 --> 00:12:48:29] eu estou querendo pegar alguma coisa do sistema.
#KAIROS E:0.0496 Pk:0.3319 Ph:0.0Hz V:0.0Hz R:3.31wps S:259ms

[00:12:49:18 --> 00:12:52:00] Geralmente, nós queremos pegar dados.
#KAIROS E:0.0376 Pk:0.3235 Ph:0.0Hz V:0.0Hz R:2.08wps S:620ms

[00:12:53:03 --> 00:12:56:11] Então, quando o nosso sisteminha aqui faz uma requisição de GET,
#KAIROS E:0.0442 Pk:0.5242 Ph:0.0Hz V:0.0Hz R:3.37wps S:1119ms

[00:12:57:18 --> 00:12:59:13] basicamente, o nosso garçom vai falar.
#KAIROS E:0.0448 Pk:0.3968 Ph:0.0Hz V:0.0Hz R:3.26wps S:1239ms

[00:12:59:15 --> 00:13:00:24] Então, ele está querendo alguma coisa.
#KAIROS E:0.0379 Pk:0.3054 Ph:0.0Hz V:0.0Hz R:4.69wps S:60ms

[00:13:00:28 --> 00:13:02:09] Aí vai ter o seu pedido ali.
#KAIROS E:0.0372 Pk:0.3946 Ph:0.0Hz V:0.0Hz R:5.22wps S:159ms

[00:13:02:09 --> 00:13:05:00] o garçom, que é a API, anota esse pedido,
#KAIROS E:0.0405 Pk:0.3717 Ph:0.0Hz V:0.0Hz R:3.33wps S:0ms

[00:13:05:17 --> 00:13:06:21] vai até a cozinha.
#KAIROS E:0.081 Pk:0.5078 Ph:0.0Hz V:0.0Hz R:3.57wps S:579ms

[00:13:06:21 --> 00:13:07:22] O que é a cozinha aqui?
#KAIROS E:0.042 Pk:0.3093 Ph:0.0Hz V:0.0Hz R:5.77wps S:19ms

[00:13:07:25 --> 00:13:09:00] A cozinha, no caso...
#KAIROS E:0.0381 Pk:0.2788 Ph:0.0Hz V:0.0Hz R:3.51wps S:99ms

[00:13:10:18 --> 00:13:13:10] o sistema no qual você está conectando a API.
#KAIROS E:0.0528 Pk:0.489 Ph:0.0Hz V:0.0Hz R:3.28wps S:1599ms

[00:13:13:17 --> 00:13:15:08] Então, a gente vai conectar aqui na OpenAI.
#KAIROS E:0.045 Pk:0.4274 Ph:0.0Hz V:0.0Hz R:4.71wps S:240ms

[00:13:15:19 --> 00:13:17:01] Então, tem a cozinha da OpenAI.
#KAIROS E:0.0349 Pk:0.2693 Ph:0.0Hz V:0.0Hz R:4.29wps S:360ms

[00:13:17:06 --> 00:13:18:06] Só que o que é legal?
#KAIROS E:0.0356 Pk:0.2204 Ph:0.0Hz V:0.0Hz R:6.0wps S:159ms

[00:13:18:10 --> 00:13:19:27] Que a gente pode ter várias cozinhas.
#KAIROS E:0.0431 Pk:0.3971 Ph:0.0Hz V:0.0Hz R:4.49wps S:159ms

[00:13:20:00 --> 00:13:22:04] Então, tem cozinha de OpenAI, posso conectar Antropic,
#KAIROS E:0.0317 Pk:0.3702 Ph:0.0Hz V:0.0Hz R:3.77wps S:100ms

[00:13:22:06 --> 00:13:23:29] posso conectar quantas APIs eu quiser.
#KAIROS E:0.0306 Pk:0.2707 Ph:0.0Hz V:0.0Hz R:3.41wps S:79ms

[00:13:25:09 --> 00:13:26:23] Pagando, não tem problema nenhum.
#KAIROS E:0.0409 Pk:0.2694 Ph:0.0Hz V:0.0Hz R:3.38wps S:1320ms

[00:13:27:01 --> 00:13:28:25] Tem APIs gratuitas também, tá?
#KAIROS E:0.0468 Pk:0.3648 Ph:0.0Hz V:0.0Hz R:2.78wps S:279ms

[00:13:28:27 --> 00:13:31:12] Estou brincando aqui só, mas você vai conectar.
#KAIROS E:0.0313 Pk:0.3812 Ph:0.0Hz V:0.0Hz R:3.23wps S:60ms

[00:13:31:12 --> 00:13:33:06] Vamos supor que a gente conectou na OpenAI,
#KAIROS E:0.039 Pk:0.2578 Ph:0.0Hz V:0.0Hz R:4.44wps S:19ms

[00:13:33:09 --> 00:13:34:07] que é o que a gente vai fazer aqui.
#KAIROS E:0.0198 Pk:0.1515 Ph:0.0Hz V:0.0Hz R:9.57wps S:80ms

[00:13:35:16 --> 00:13:39:24] A API, então, acessa aqui o server,
#KAIROS E:0.0448 Pk:0.4935 Ph:0.0Hz V:0.0Hz R:1.64wps S:1300ms

[00:13:40:18 --> 00:13:42:12] da OpenAI,
#KAIROS E:0.0474 Pk:0.3264 Ph:0.0Hz V:0.0Hz R:1.1wps S:779ms

[00:13:42:17 --> 00:13:45:09] e fala, olha, tem algumas informações.
#KAIROS E:0.0537 Pk:0.4892 Ph:0.0Hz V:0.0Hz R:2.19wps S:159ms

[00:13:45:21 --> 00:13:49:21] A API não vai pegar apenas a informação que o usuário pediu,
#KAIROS E:0.0425 Pk:0.3709 Ph:0.0Hz V:0.0Hz R:3.02wps S:399ms

[00:13:49:22 --> 00:13:53:12] mas todos os outros metadados que o próprio sistema envia.
#KAIROS E:0.0331 Pk:0.2636 Ph:0.0Hz V:0.0Hz R:2.75wps S:60ms

[00:13:53:13 --> 00:13:58:02] Por exemplo, o usuário selecionou para usar o GPT-Terra
#KAIROS E:0.0446 Pk:0.461 Ph:0.0Hz V:0.0Hz R:1.95wps S:59ms

[00:13:58:02 --> 00:13:59:28] ao invés do GPT-Sol.
#KAIROS E:0.0282 Pk:0.2729 Ph:0.0Hz V:0.0Hz R:2.15wps S:0ms

[00:14:00:25 --> 00:14:01:18] Foi uma solicitação.
#KAIROS E:0.0379 Pk:0.2323 Ph:0.0Hz V:0.0Hz R:4.05wps S:919ms

[00:14:01:18 --> 00:14:03:16] Isso aqui tem que vir junto na informação.
#KAIROS E:0.0299 Pk:0.2912 Ph:0.0Hz V:0.0Hz R:4.12wps S:0ms

[00:14:03:27 --> 00:14:05:16] Ele está usando no esforço alto.
#KAIROS E:0.056 Pk:0.4042 Ph:0.0Hz V:0.0Hz R:3.66wps S:360ms

[00:14:06:03 --> 00:14:07:25] Ele enviou uma imagem junto.
#KAIROS E:0.0498 Pk:0.3336 Ph:0.0Hz V:0.0Hz R:2.87wps S:579ms

[00:14:09:28 --> 00:14:14:17] Ele enviou também um PDF, tudo que o usuário.
#KAIROS E:0.0475 Pk:0.3968 Ph:0.0Hz V:0.0Hz R:1.95wps S:2100ms

[00:14:15:26 --> 00:14:18:29] aqui no caso, se você está enviando coisas também,
#KAIROS E:0.0619 Pk:0.5306 Ph:0.0Hz V:0.0Hz R:2.9wps S:1300ms

[00:14:19:22 --> 00:14:23:03] no caso o que a gente quer receber de volta são as informações.
#KAIROS E:0.0515 Pk:0.5934 Ph:0.0Hz V:0.0Hz R:3.87wps S:759ms

[00:14:23:13 --> 00:14:27:15] Só para não confundir vocês, eu não vou entrar em cada tópico aqui,
#KAIROS E:0.0464 Pk:0.529 Ph:0.0Hz V:0.0Hz R:3.22wps S:360ms

[00:14:27:18 --> 00:14:30:18] mas no caso a gente está fazendo um get, a gente quer pegar uma informação.
#KAIROS E:0.0447 Pk:0.4444 Ph:0.0Hz V:0.0Hz R:5.0wps S:119ms

[00:14:31:27 --> 00:14:35:13] Então, o usuário e todos esses dados vêm para cá e falam,
#KAIROS E:0.0505 Pk:0.489 Ph:0.0Hz V:0.0Hz R:3.39wps S:1300ms

[00:14:35:14 --> 00:14:39:21] então a gente precisa devolver uma resposta que considera tudo isso aqui.
#KAIROS E:0.0353 Pk:0.3372 Ph:0.0Hz V:0.0Hz R:2.84wps S:19ms

[00:14:41:01 --> 00:14:43:27] Aí, a IA, que está lá no servidor da Antropic,
#KAIROS E:0.0628 Pk:0.5002 Ph:0.0Hz V:0.0Hz R:3.52wps S:1360ms

[00:14:44:20 --> 00:14:45:23] Toda hora eu estou falando Antropic.
#KAIROS E:0.0161 Pk:0.1472 Ph:0.0Hz V:0.0Hz R:5.45wps S:779ms

[00:14:45:28 --> 00:14:48:29] A IA, que está lá no servidor da OpenAI aqui nesse caso,
#KAIROS E:0.0768 Pk:0.5583 Ph:0.0Hz V:0.0Hz R:3.95wps S:159ms

[00:14:49:03 --> 00:14:53:09] ela vai gerar a resposta lá no servidor, em outro computador.
#KAIROS E:0.0427 Pk:0.3744 Ph:0.0Hz V:0.0Hz R:2.61wps S:120ms

[00:14:53:16 --> 00:14:55:03] Então, ela gera a resposta lá.
#KAIROS E:0.0304 Pk:0.2565 Ph:0.0Hz V:0.0Hz R:3.9wps S:240ms

[00:14:55:13 --> 00:14:57:03] Depois que ela gerou essa resposta,
#KAIROS E:0.0481 Pk:0.2861 Ph:0.0Hz V:0.0Hz R:3.66wps S:360ms

[00:14:57:13 --> 00:15:00:16] ela embrulha isso aqui no pacote, devolve para a API.
#KAIROS E:0.0335 Pk:0.3153 Ph:0.0Hz V:0.0Hz R:3.25wps S:360ms

[00:15:01:27 --> 00:15:03:17] Então, a setinha de volta aqui.
#KAIROS E:0.044 Pk:0.2868 Ph:0.0Hz V:0.0Hz R:3.66wps S:1388ms

[00:15:04:05 --> 00:15:07:27] Então, está aqui, vamos imaginar, já que está falando de cozinha.
#KAIROS E:0.0383 Pk:0.5498 Ph:0.0Hz V:0.0Hz R:2.93wps S:599ms

[00:15:09:07 --> 00:15:10:21] Embrulhou o pacotinho todo aqui.
#KAIROS E:0.0452 Pk:0.3245 Ph:0.0Hz V:0.0Hz R:3.42wps S:1327ms

[00:15:12:27 --> 00:15:13:16] para poder entregar.
#KAIROS E:0.0353 Pk:0.2528 Ph:0.0Hz V:0.0Hz R:4.69wps S:2188ms

[00:15:14:03 --> 00:15:15:26] Então vem todas essas informações
#KAIROS E:0.0483 Pk:0.4157 Ph:0.0Hz V:0.0Hz R:2.87wps S:579ms

[00:15:16:26 --> 00:15:17:18] via API
#KAIROS E:0.0326 Pk:0.2581 Ph:0.0Hz V:0.0Hz R:2.7wps S:1019ms

[00:15:17:18 --> 00:15:19:12] e devolve isso para o sistema.
#KAIROS E:0.0551 Pk:0.4068 Ph:0.0Hz V:0.0Hz R:3.33wps S:0ms

[00:15:19:22 --> 00:15:21:16] Aí o sistema imprime isso na tela.
#KAIROS E:0.0348 Pk:0.3934 Ph:0.0Hz V:0.0Hz R:3.89wps S:319ms

[00:15:22:21 --> 00:15:23:08] Aqui um exemplo.
#KAIROS E:0.0255 Pk:0.1954 Ph:0.0Hz V:0.0Hz R:5.17wps S:1151ms

[00:15:23:21 --> 00:15:26:18] Um outro exemplo diferente é o seguinte.
#KAIROS E:0.037 Pk:0.2773 Ph:0.0Hz V:0.0Hz R:2.4wps S:419ms

[00:15:27:06 --> 00:15:29:26] Imagina que você quer conectar uma API com o Instagram.
#KAIROS E:0.0414 Pk:0.3238 Ph:0.0Hz V:0.0Hz R:3.76wps S:599ms

[00:15:31:16 --> 00:15:33:26] Então você quer que a sua IA faça posts no Instagram.
#KAIROS E:0.0379 Pk:0.313 Ph:0.0Hz V:0.0Hz R:4.74wps S:1683ms

[00:15:35:06 --> 00:15:37:11] Então tá ali o Instagram, o Instagram tem borda redonda, né?
#KAIROS E:0.0224 Pk:0.2225 Ph:0.0Hz V:0.0Hz R:5.09wps S:1327ms

[00:15:37:22 --> 00:15:39:23] Não pode ser assim não, esse aqui é o Instagram antigo.
#KAIROS E:0.0244 Pk:0.2903 Ph:0.0Hz V:0.0Hz R:5.45wps S:379ms

[00:15:40:09 --> 00:15:41:15] Esse Instagram novo aí, ó.
#KAIROS E:0.0184 Pk:0.1942 Ph:0.0Hz V:0.0Hz R:4.17wps S:560ms

[00:15:42:07 --> 00:15:42:18] Aí.
#KAIROS E:0.0048 Pk:0.0675 Ph:0.0Hz V:0.0Hz R:2.78wps S:720ms

[00:15:43:17 --> 00:15:44:14] Então tá ali o Instagram.
#KAIROS E:0.0493 Pk:0.5168 Ph:0.0Hz V:0.0Hz R:5.56wps S:980ms

[00:15:45:11 --> 00:15:46:26] E tá o seu sistema aqui.
#KAIROS E:0.0638 Pk:0.5449 Ph:0.0Hz V:0.0Hz R:4.05wps S:899ms

[00:15:48:11 --> 00:15:50:14] Beleza? Tem o seu sisteminha funcionando aqui.
#KAIROS E:0.0256 Pk:0.164 Ph:0.0Hz V:0.0Hz R:3.37wps S:1524ms

[00:15:50:26 --> 00:15:52:25] Aí você fez um post lá no seu sistema.
#KAIROS E:0.04 Pk:0.4567 Ph:0.0Hz V:0.0Hz R:4.64wps S:419ms

[00:15:54:17 --> 00:15:56:18] o post. Só que você precisa
#KAIROS E:0.0278 Pk:0.3239 Ph:0.0Hz V:0.0Hz R:2.94wps S:1735ms

[00:15:56:18 --> 00:15:58:13] enviar esse post pro Instagram. O Instagram
#KAIROS E:0.0367 Pk:0.3848 Ph:0.0Hz V:0.0Hz R:3.8wps S:0ms

[00:15:58:13 --> 00:16:00:14] ele tem algumas peculiaridades, ele vai precisar
#KAIROS E:0.0412 Pk:0.3123 Ph:0.0Hz V:0.0Hz R:3.47wps S:0ms

[00:16:00:14 --> 00:16:02:14] de um link público. Não tem como enviar
#KAIROS E:0.0319 Pk:0.3154 Ph:0.0Hz V:0.0Hz R:3.96wps S:0ms

[00:16:02:14 --> 00:16:04:17] imagem via API
#KAIROS E:0.0382 Pk:0.3681 Ph:0.0Hz V:0.0Hz R:1.44wps S:0ms

[00:16:04:17 --> 00:16:06:05] no jeito que o Instagram funciona.
#KAIROS E:0.0466 Pk:0.3326 Ph:0.0Hz V:0.0Hz R:3.7wps S:0ms

[00:16:06:08 --> 00:16:08:11] A meta não funciona assim. Então o caminho
#KAIROS E:0.0276 Pk:0.3511 Ph:0.0Hz V:0.0Hz R:3.81wps S:79ms

[00:16:08:11 --> 00:16:10:10] é um pouquinho diferente, mas funciona. Basicamente
#KAIROS E:0.033 Pk:0.3213 Ph:0.0Hz V:0.0Hz R:3.54wps S:0ms

[00:16:10:10 --> 00:16:12:17] é assim, você gerou aquela imagem bonitinha sua ali,
#KAIROS E:0.0389 Pk:0.2804 Ph:0.0Hz V:0.0Hz R:4.05wps S:0ms

[00:16:13:07 --> 00:16:14:12] seu sistema gerou,
#KAIROS E:0.0356 Pk:0.3703 Ph:0.0Hz V:0.0Hz R:2.59wps S:679ms

[00:16:14:14 --> 00:16:16:11] seu sistema vai salvar isso
#KAIROS E:0.0572 Pk:0.4499 Ph:0.0Hz V:0.0Hz R:2.63wps S:60ms

[00:16:16:11 --> 00:16:17:16] no storage pra você.
#KAIROS E:0.0384 Pk:0.3021 Ph:0.0Hz V:0.0Hz R:3.39wps S:0ms

[00:16:20:03 --> 00:16:20:28] Pode ser no Supabase.
#KAIROS E:0.0264 Pk:0.161 Ph:0.0Hz V:0.0Hz R:4.76wps S:2556ms

[00:16:21:02 --> 00:16:25:26] Esse storage vai gerar um link para você, público.
#KAIROS E:0.0417 Pk:0.4268 Ph:0.0Hz V:0.0Hz R:1.87wps S:120ms

[00:16:26:24 --> 00:16:29:23] Esse link público é o link que representa as suas imagens.
#KAIROS E:0.0353 Pk:0.2767 Ph:0.0Hz V:0.0Hz R:3.72wps S:920ms

[00:16:29:27 --> 00:16:32:06] E é esse link aqui que é enviado via API.
#KAIROS E:0.0427 Pk:0.3745 Ph:0.0Hz V:0.0Hz R:4.35wps S:140ms

[00:16:33:29 --> 00:16:35:26] para o seu Instagram.
#KAIROS E:0.0323 Pk:0.3478 Ph:0.0Hz V:0.0Hz R:2.11wps S:1788ms

[00:16:36:05 --> 00:16:38:23] Você precisa desbloquear seu iPhone antes.
#KAIROS E:0.0085 Pk:0.061 Ph:0.0Hz V:0.0Hz R:2.31wps S:279ms

[00:16:39:05 --> 00:16:40:08] Não, não precisa não, Siri.
#KAIROS E:0.0113 Pk:0.1016 Ph:0.0Hz V:0.0Hz R:4.63wps S:419ms

[00:16:41:26 --> 00:16:44:19] Então, eu vi ela piscando ali, fui pegar ela ao mesmo tempo.
#KAIROS E:0.0453 Pk:0.5581 Ph:0.0Hz V:0.0Hz R:4.35wps S:1620ms

[00:16:45:02 --> 00:16:48:10] Então, a API aqui no caso é uma API que usa...
#KAIROS E:0.0538 Pk:0.5841 Ph:0.0Hz V:0.0Hz R:3.4wps S:440ms

[00:16:51:06 --> 00:16:54:11] Nós estamos enviando uma informação para o sistema.
#KAIROS E:0.029 Pk:0.2095 Ph:0.0Hz V:0.0Hz R:2.53wps S:2875ms

[00:16:54:20 --> 00:16:59:25] E aí tem toda essa lógica aqui na hora de trabalhar com a PACE.
#KAIROS E:0.0349 Pk:0.273 Ph:0.0Hz V:0.0Hz R:2.7wps S:299ms

[00:17:00:09 --> 00:17:03:12] Para que isso aqui funcione, pensem comigo.
#KAIROS E:0.031 Pk:0.377 Ph:0.0Hz V:0.0Hz R:2.24wps S:460ms

[00:17:03:17 --> 00:17:08:26] A gente precisa, de alguma maneira, verificar essa requisição
#KAIROS E:0.0338 Pk:0.3115 Ph:0.0Hz V:0.0Hz R:1.7wps S:139ms

[00:17:08:26 --> 00:17:11:06] para saber quem realmente está me enviando isso.
#KAIROS E:0.0361 Pk:0.3493 Ph:0.0Hz V:0.0Hz R:3.39wps S:0ms

[00:17:11:20 --> 00:17:14:23] Imagina que a gente consegue interceptar aqui
#KAIROS E:0.0467 Pk:0.3698 Ph:0.0Hz V:0.0Hz R:2.26wps S:460ms

[00:17:14:23 --> 00:17:20:14] essa comunicação aqui do seu sistema com o Instagram de alguém.
#KAIROS E:0.0406 Pk:0.4261 Ph:0.0Hz V:0.0Hz R:1.94wps S:0ms

[00:17:21:06 --> 00:17:25:00] eu consigo trocar e postar outra coisa no Instagram das pessoas.
#KAIROS E:0.0396 Pk:0.4049 Ph:0.0Hz V:0.0Hz R:2.88wps S:740ms

[00:17:26:18 --> 00:17:28:18] se eu tiver a chave API.
#KAIROS E:0.0523 Pk:0.4625 Ph:0.0Hz V:0.0Hz R:3.0wps S:1571ms

[00:17:30:15 --> 00:17:32:13] eu consigo postar, eu consigo...
#KAIROS E:0.0326 Pk:0.2737 Ph:0.0Hz V:0.0Hz R:2.58wps S:1903ms

[00:17:32:13 --> 00:17:35:02] Se você tem a chave API, você consegue fazer qualquer coisa
#KAIROS E:0.0415 Pk:0.383 Ph:0.0Hz V:0.0Hz R:4.2wps S:0ms

[00:17:35:02 --> 00:17:38:00] que é permitida fazer naquela API da pessoa.
#KAIROS E:0.0291 Pk:0.2517 Ph:0.0Hz V:0.0Hz R:2.7wps S:0ms

[00:17:38:08 --> 00:17:39:26] Então, se eu estou com uma API de IA,
#KAIROS E:0.0369 Pk:0.3562 Ph:0.0Hz V:0.0Hz R:5.62wps S:259ms

[00:17:40:11 --> 00:17:42:03] eu consigo usar essa IA para mim.
#KAIROS E:0.0522 Pk:0.4113 Ph:0.0Hz V:0.0Hz R:4.02wps S:500ms

[00:17:42:27 --> 00:17:45:03] Então, se você deixa vazar sua chave API,
#KAIROS E:0.0439 Pk:0.3248 Ph:0.0Hz V:0.0Hz R:3.64wps S:799ms

[00:17:45:09 --> 00:17:47:06] eu pego ela, eu posso pegar sua chave API,
#KAIROS E:0.0431 Pk:0.3543 Ph:0.0Hz V:0.0Hz R:4.69wps S:179ms

[00:17:47:08 --> 00:17:49:27] conectar no meu sistema e pedir um monte de coisa para IA.
#KAIROS E:0.0246 Pk:0.1649 Ph:0.0Hz V:0.0Hz R:4.55wps S:59ms

[00:17:50:00 --> 00:17:50:20] Sair pedindo.
#KAIROS E:0.0338 Pk:0.2484 Ph:0.0Hz V:0.0Hz R:3.03wps S:99ms

[00:17:51:08 --> 00:17:52:08] Aí vai fazer para mim.
#KAIROS E:0.0209 Pk:0.1797 Ph:0.0Hz V:0.0Hz R:5.0wps S:599ms

[00:17:53:18 --> 00:17:59:06] Entendeu? Então, por isso que a gente não pode deixar vazar as nossas chaves API, que é a API Key.
#KAIROS E:0.0347 Pk:0.3876 Ph:0.0Hz V:0.0Hz R:3.57wps S:1324ms

[00:17:59:25 --> 00:18:02:10] E é isso exatamente que nós vamos pegar aqui agora.
#KAIROS E:0.0394 Pk:0.3732 Ph:0.0Hz V:0.0Hz R:4.0wps S:640ms

[00:18:03:17 --> 00:18:04:11] Então, o que eu vou fazer?
#KAIROS E:0.0485 Pk:0.3123 Ph:0.0Hz V:0.0Hz R:7.69wps S:1243ms

[00:18:05:02 --> 00:18:08:07] Nós vamos conectar a OpenAI no nosso sistema.
#KAIROS E:0.0362 Pk:0.3083 Ph:0.0Hz V:0.0Hz R:2.53wps S:700ms

[00:18:08:16 --> 00:18:10:19] Só que antes, deixa eu verificar aqui, olha aí,
#KAIROS E:0.033 Pk:0.2562 Ph:0.0Hz V:0.0Hz R:4.25wps S:299ms

[00:18:10:20 --> 00:18:11:10] estava me fazendo pergunta.
#KAIROS E:0.0215 Pk:0.1877 Ph:0.0Hz V:0.0Hz R:6.06wps S:39ms

[00:18:11:24 --> 00:18:14:20] O que deve alimentar a base de conhecimento e o que será indexado?
#KAIROS E:0.0318 Pk:0.2643 Ph:0.0Hz V:0.0Hz R:4.51wps S:460ms

[00:18:15:05 --> 00:18:17:25] Entidades do chat indexam as 11 entidades de negócio
#KAIROS E:0.0319 Pk:0.2962 Ph:0.0Hz V:0.0Hz R:3.38wps S:480ms

[00:18:17:25 --> 00:18:20:14] e a resposta das pesquisas do chat conforme são geradas.
#KAIROS E:0.0205 Pk:0.1705 Ph:0.0Hz V:0.0Hz R:3.79wps S:0ms

[00:18:20:17 --> 00:18:23:17] A base cresce com uso, recomendado, cobre tudo que o usuário gera.
#KAIROS E:0.0266 Pk:0.2996 Ph:0.0Hz V:0.0Hz R:4.0wps S:99ms

[00:18:23:20 --> 00:18:24:02] É isso mesmo.
#KAIROS E:0.0084 Pk:0.0734 Ph:0.0Hz V:0.0Hz R:7.5wps S:120ms

[00:18:24:23 --> 00:18:26:13] Quem gera as respostas do chat?
#KAIROS E:0.0434 Pk:0.3901 Ph:0.0Hz V:0.0Hz R:3.57wps S:680ms

[00:18:26:19 --> 00:18:27:13] Modelo de linguagem.
#KAIROS E:0.024 Pk:0.1672 Ph:0.0Hz V:0.0Hz R:3.75wps S:200ms

[00:18:27:26 --> 00:18:28:14] Ele falou do...
#KAIROS E:0.02 Pk:0.1466 Ph:0.0Hz V:0.0Hz R:5.0wps S:419ms

[00:18:28:14 --> 00:18:30:02] Olha, ele nem falou o que a gente vai escolher.
#KAIROS E:0.0533 Pk:0.4819 Ph:0.0Hz V:0.0Hz R:6.25wps S:0ms

[00:18:30:20 --> 00:18:37:05] Eu vou escolher aqui, vou conectar uma chave API do chat GPT aqui.
#KAIROS E:0.0272 Pk:0.3101 Ph:0.0Hz V:0.0Hz R:2.0wps S:620ms

[00:18:37:08 --> 00:18:39:04] Mas poderia ser Cloud, poderia ser Gemini.
#KAIROS E:0.0392 Pk:0.3219 Ph:0.0Hz V:0.0Hz R:3.76wps S:99ms

[00:18:39:05 --> 00:18:41:07] Inclusive, eu vou mostrar onde pegar em cada um desses, tá?
#KAIROS E:0.0366 Pk:0.2672 Ph:0.0Hz V:0.0Hz R:5.34wps S:19ms

[00:18:42:23 --> 00:18:44:13] Você já tem uma chave API do Google?
#KAIROS E:0.0493 Pk:0.4182 Ph:0.0Hz V:0.0Hz R:4.82wps S:1559ms

[00:18:44:19 --> 00:18:45:02] Que Google?
#KAIROS E:0.0196 Pk:0.1462 Ph:0.0Hz V:0.0Hz R:4.35wps S:179ms

[00:18:46:17 --> 00:18:48:20] Vou conectar para os embeds.
#KAIROS E:0.047 Pk:0.416 Ph:0.0Hz V:0.0Hz R:2.38wps S:1500ms

[00:18:48:21 --> 00:18:50:03] É verdade, eu vou precisar dela aqui.
#KAIROS E:0.0294 Pk:0.22 Ph:0.0Hz V:0.0Hz R:5.0wps S:19ms

[00:18:50:10 --> 00:18:52:00] Você já tem uma chave API do Google para os embeds?
#KAIROS E:0.0392 Pk:0.2793 Ph:0.0Hz V:0.0Hz R:6.55wps S:220ms

[00:18:52:00 --> 00:18:53:03] Ainda não, cabo solto.
#KAIROS E:0.0322 Pk:0.293 Ph:0.0Hz V:0.0Hz R:3.64wps S:0ms

[00:18:53:04 --> 00:18:55:13] Construa a degradação, já tem a chave.
#KAIROS E:0.0334 Pk:0.5215 Ph:0.0Hz V:0.0Hz R:3.02wps S:19ms

[00:18:55:16 --> 00:18:59:13] Vou assumir que Google Generative API Key estará no Envelope.
#KAIROS E:0.0315 Pk:0.336 Ph:0.0Hz V:0.0Hz R:2.56wps S:79ms

[00:18:59:23 --> 00:19:01:15] Então, a gente precisa pegar essa daqui.
#KAIROS E:0.0427 Pk:0.3834 Ph:0.0Hz V:0.0Hz R:4.02wps S:339ms

[00:19:02:10 --> 00:19:03:17] Primeiro que a gente vai precisar gerar.
#KAIROS E:0.0346 Pk:0.261 Ph:0.0Hz V:0.0Hz R:5.65wps S:819ms

[00:19:03:20 --> 00:19:04:21] Aí vem uma coisa importante.
#KAIROS E:0.0487 Pk:0.3968 Ph:0.0Hz V:0.0Hz R:4.81wps S:100ms

[00:19:05:10 --> 00:19:09:13] Nesse momento aqui, por segurança, são 537 pessoas assistindo.
#KAIROS E:0.0244 Pk:0.2577 Ph:0.0Hz V:0.0Hz R:2.2wps S:619ms

[00:19:09:14 --> 00:19:10:08] Então, tem que tomar cuidado.
#KAIROS E:0.0273 Pk:0.1969 Ph:0.0Hz V:0.0Hz R:6.41wps S:59ms

[00:19:10:08 --> 00:19:12:02] cuidado. Até aqui no banco de dados
#KAIROS E:0.0413 Pk:0.4196 Ph:0.0Hz V:0.0Hz R:3.89wps S:0ms

[00:19:12:02 --> 00:19:14:07] está tudo bem, mas essas outras chavinhas
#KAIROS E:0.0446 Pk:0.3489 Ph:0.0Hz V:0.0Hz R:3.21wps S:0ms

[00:19:14:07 --> 00:19:15:11] que nós vamos gerar aqui,
#KAIROS E:0.0192 Pk:0.1272 Ph:0.0Hz V:0.0Hz R:4.39wps S:0ms

[00:19:16:04 --> 00:19:18:05] eu não vou mostrar mais
#KAIROS E:0.0552 Pk:0.3001 Ph:0.0Hz V:0.0Hz R:2.45wps S:739ms

[00:19:18:28 --> 00:19:20:07] eu colando elas aqui.
#KAIROS E:0.0498 Pk:0.3357 Ph:0.0Hz V:0.0Hz R:3.08wps S:779ms

[00:19:21:16 --> 00:19:24:14] Então, eu vou mostrar onde que pega, mas na hora de colar,
#KAIROS E:0.0464 Pk:0.3539 Ph:0.0Hz V:0.0Hz R:4.08wps S:1291ms

[00:19:24:14 --> 00:19:29:02] eu vou esconder na tela aqui, vou colar e depois eu volto para cá.
#KAIROS E:0.0339 Pk:0.341 Ph:0.0Hz V:0.0Hz R:3.06wps S:0ms

[00:19:29:18 --> 00:19:30:02] Beleza?
#KAIROS E:0.043 Pk:0.2905 Ph:0.0Hz V:0.0Hz R:2.27wps S:560ms

[00:19:30:05 --> 00:19:34:11] A primeira que a gente vai pegar é essa Google Generative API Key.
#KAIROS E:0.0357 Pk:0.4139 Ph:0.0Hz V:0.0Hz R:3.1wps S:100ms

[00:19:34:20 --> 00:19:37:10] Uma dica para vocês, quando acontecer esse tipo de coisa
#KAIROS E:0.0336 Pk:0.3054 Ph:0.0Hz V:0.0Hz R:3.73wps S:299ms

[00:19:37:10 --> 00:19:38:21] e vocês não sabem onde pegar,
#KAIROS E:0.0265 Pk:0.196 Ph:0.0Hz V:0.0Hz R:4.41wps S:0ms

[00:19:38:28 --> 00:19:41:27] vocês sempre podem abrir o Cloud aqui e perguntar para ele.
#KAIROS E:0.0316 Pk:0.2868 Ph:0.0Hz V:0.0Hz R:3.72wps S:240ms

[00:19:42:15 --> 00:19:44:09] Inclusive, você pode pedir o link para ele.
#KAIROS E:0.0288 Pk:0.2347 Ph:0.0Hz V:0.0Hz R:4.44wps S:599ms

[00:19:46:12 --> 00:19:50:12] cola aqui o link onde pego essa API.
#KAIROS E:0.023 Pk:0.2632 Ph:0.0Hz V:0.0Hz R:1.99wps S:2104ms

[00:19:50:22 --> 00:19:53:09] Pode falar desse jeito, pode falar até assim, resposta curta.
#KAIROS E:0.0382 Pk:0.3842 Ph:0.0Hz V:0.0Hz R:3.88wps S:320ms

[00:19:53:17 --> 00:19:55:05] Quero que você fique pensando demais, não.
#KAIROS E:0.0162 Pk:0.1815 Ph:0.0Hz V:0.0Hz R:4.43wps S:259ms

[00:19:55:20 --> 00:19:58:24] Aí ele vai colar aqui para mim, eu acesso o link e pego a API lá.
#KAIROS E:0.0404 Pk:0.346 Ph:0.0Hz V:0.0Hz R:5.13wps S:519ms

[00:19:58:27 --> 00:19:59:15] Tão simples.
#KAIROS E:0.012 Pk:0.0666 Ph:0.0Hz V:0.0Hz R:3.45wps S:119ms

[00:19:59:23 --> 00:20:02:24] Vocês vão precisar de uma conta no Google para poder pegar a API aqui.
#KAIROS E:0.0302 Pk:0.3052 Ph:0.0Hz V:0.0Hz R:4.61wps S:259ms

[00:20:03:00 --> 00:20:04:19] Olha lá, ele já me deu o link do AI Studio.
#KAIROS E:0.0379 Pk:0.2754 Ph:0.0Hz V:0.0Hz R:6.79wps S:220ms

[00:20:05:02 --> 00:20:08:02] Posso segurar o Ctrl aqui, clico nela e vai para lá.
#KAIROS E:0.0384 Pk:0.353 Ph:0.0Hz V:0.0Hz R:3.69wps S:440ms

[00:20:08:05 --> 00:20:10:28] Ou então eu posso selecionar aqui.
#KAIROS E:0.0283 Pk:0.2484 Ph:0.0Hz V:0.0Hz R:2.17wps S:119ms

[00:20:13:00 --> 00:20:13:10] colar
#KAIROS E:0.0451 Pk:0.2102 Ph:0.0Hz V:0.0Hz R:2.94wps S:2052ms

[00:20:15:27 --> 00:20:17:10] Olha, ele já veio para cá, no meu.
#KAIROS E:0.0272 Pk:0.238 Ph:0.0Hz V:0.0Hz R:5.56wps S:2572ms

[00:20:17:17 --> 00:20:22:07] No meu, se vocês repararem, tem uma chave aqui e eu posso já criar outras chaves.
#KAIROS E:0.0447 Pk:0.3504 Ph:0.0Hz V:0.0Hz R:3.42wps S:220ms

[00:20:22:14 --> 00:20:29:29] Eu estou aqui no aistudio.google.com.br, se vocês virem direto nesse link aqui, vocês conseguem acessar.
#KAIROS E:0.0395 Pk:0.4785 Ph:0.0Hz V:0.0Hz R:2.01wps S:240ms

[00:20:30:04 --> 00:20:33:00] Mas se vocês repararem, eu já estou logado na minha conta Google.
#KAIROS E:0.0552 Pk:0.5293 Ph:0.0Hz V:0.0Hz R:4.17wps S:159ms

[00:20:33:06 --> 00:20:38:24] Se não tiverem logado, vocês vão logar primeiro e aí vocês vão clicar aqui em criar chave API.
#KAIROS E:0.0353 Pk:0.3316 Ph:0.0Hz V:0.0Hz R:3.21wps S:200ms

[00:20:42:21 --> 00:20:44:07] Então, clica aqui em criar chave API.
#KAIROS E:0.0287 Pk:0.3127 Ph:0.0Hz V:0.0Hz R:4.55wps S:3884ms

[00:20:44:24 --> 00:20:47:14] Na hora que você clicar aqui, você pode colocar um nome.
#KAIROS E:0.0545 Pk:0.4598 Ph:0.0Hz V:0.0Hz R:4.14wps S:580ms

[00:20:47:17 --> 00:20:50:19] Eu gosto de colocar o nome do sistema, para eu ter um controle melhor.
#KAIROS E:0.0374 Pk:0.3265 Ph:0.0Hz V:0.0Hz R:4.58wps S:100ms

[00:20:50:21 --> 00:20:55:07] Se eu precisar apagar uma chave API depois, eu sei qual sistema vai parar de funcionar.
#KAIROS E:0.0353 Pk:0.329 Ph:0.0Hz V:0.0Hz R:3.54wps S:79ms

[00:20:55:10 --> 00:20:57:12] Porque sem a chave, o sistema quebra.
#KAIROS E:0.0321 Pk:0.315 Ph:0.0Hz V:0.0Hz R:3.4wps S:120ms

[00:20:57:14 --> 00:20:59:18] Então, eu vou colocar aqui.
#KAIROS E:0.0315 Pk:0.2994 Ph:0.0Hz V:0.0Hz R:2.36wps S:59ms

[00:20:59:27 --> 00:21:02:19] Vocês podem criar um projeto novo aí de vocês.
#KAIROS E:0.0423 Pk:0.3968 Ph:0.0Hz V:0.0Hz R:3.26wps S:299ms

[00:21:03:02 --> 00:21:06:08] No caso aqui, eu vou criar o projeto Business OS.
#KAIROS E:0.0208 Pk:0.2732 Ph:0.0Hz V:0.0Hz R:3.13wps S:420ms

[00:21:08:11 --> 00:21:10:05] Aumentar um pouquinho, né? Está bem pequeno aí.
#KAIROS E:0.0122 Pk:0.1686 Ph:0.0Hz V:0.0Hz R:4.49wps S:2116ms

[00:21:10:18 --> 00:21:11:05] Business OS.
#KAIROS E:0.021 Pk:0.1585 Ph:0.0Hz V:0.0Hz R:3.45wps S:439ms

[00:21:12:06 --> 00:21:14:10] Criar projeto. Ele vai criar o projeto aqui para mim.
#KAIROS E:0.0232 Pk:0.3232 Ph:0.0Hz V:0.0Hz R:4.72wps S:1019ms

[00:21:14:23 --> 00:21:16:11] E depois eu vou criar a chave.
#KAIROS E:0.0214 Pk:0.1494 Ph:0.0Hz V:0.0Hz R:4.43wps S:460ms

[00:21:19:24 --> 00:21:21:19] Aí selecionou, criar chave.
#KAIROS E:0.0294 Pk:0.4511 Ph:0.0Hz V:0.0Hz R:2.17wps S:3444ms

[00:21:21:29 --> 00:21:24:00] Na hora que vocês fazerem isso, ele vai gerar,
#KAIROS E:0.0445 Pk:0.3951 Ph:0.0Hz V:0.0Hz R:4.41wps S:319ms

[00:21:24:01 --> 00:21:26:24] eu vou mostrar a primeira vez, eu apago ela e faço de novo, tá?
#KAIROS E:0.0474 Pk:0.3882 Ph:0.0Hz V:0.0Hz R:5.04wps S:19ms

[00:21:27:18 --> 00:21:28:19] Só para eu mostrar para vocês.
#KAIROS E:0.0305 Pk:0.2817 Ph:0.0Hz V:0.0Hz R:5.77wps S:779ms

[00:21:28:22 --> 00:21:30:01] Então ele gerou a chave aqui, tá vendo?
#KAIROS E:0.0515 Pk:0.3128 Ph:0.0Hz V:0.0Hz R:6.25wps S:119ms

[00:21:30:21 --> 00:21:34:01] Vocês vão copiar essa chave e vão colar lá no sistema.
#KAIROS E:0.0447 Pk:0.4108 Ph:0.0Hz V:0.0Hz R:3.29wps S:680ms

[00:21:34:15 --> 00:21:36:14] Como eu estou vazando ela aqui, eu vou excluir ela.
#KAIROS E:0.0497 Pk:0.3926 Ph:0.0Hz V:0.0Hz R:5.05wps S:439ms

[00:21:38:26 --> 00:21:40:14] E vou fazer de novo, sem vocês verem.
#KAIROS E:0.0144 Pk:0.0928 Ph:0.0Hz V:0.0Hz R:5.0wps S:2412ms

[00:21:41:24 --> 00:21:42:28] Aí vocês podem fazer aí também.
#KAIROS E:0.02 Pk:0.1552 Ph:0.0Hz V:0.0Hz R:5.17wps S:1311ms

[00:22:03:08 --> 00:22:03:28] Copiei a minha aqui.
#KAIROS E:0.0297 Pk:0.1694 Ph:0.0Hz V:0.0Hz R:6.06wps S:20311ms

[00:22:04:20 --> 00:22:06:04] Vou voltar aqui no...
#KAIROS E:0.0379 Pk:0.2471 Ph:0.0Hz V:0.0Hz R:2.74wps S:759ms

[00:22:07:23 --> 00:22:08:15] No Supabase.
#KAIROS E:0.0361 Pk:0.2239 Ph:0.0Hz V:0.0Hz R:2.78wps S:1631ms

[00:22:08:20 --> 00:22:12:15] E agora vem aquela parte importante, que eu vou colar ela aqui.
#KAIROS E:0.0488 Pk:0.3913 Ph:0.0Hz V:0.0Hz R:3.12wps S:180ms

[00:22:12:26 --> 00:22:16:05] Só que eu não vou mostrar para vocês também, para não vazar a chave aqui.
#KAIROS E:0.0356 Pk:0.3615 Ph:0.0Hz V:0.0Hz R:4.55wps S:360ms

[00:22:16:12 --> 00:22:17:18] Então, eu vou puxar para cá.
#KAIROS E:0.0193 Pk:0.1804 Ph:0.0Hz V:0.0Hz R:5.0wps S:240ms

[00:22:17:20 --> 00:22:21:17] A partir de agora, todas as outras chaves que eu vou colar no Envy Local,
#KAIROS E:0.0421 Pk:0.5072 Ph:0.0Hz V:0.0Hz R:3.85wps S:39ms

[00:22:21:21 --> 00:22:24:29] eu vou explicar para vocês só no Envy Example, sem colar elas.
#KAIROS E:0.0333 Pk:0.3365 Ph:0.0Hz V:0.0Hz R:3.7wps S:160ms

[00:22:25:04 --> 00:22:28:24] Na hora de colar, eu puxo aqui para o lado, colo e volto.
#KAIROS E:0.0261 Pk:0.2613 Ph:0.0Hz V:0.0Hz R:3.53wps S:180ms

[00:22:28:26 --> 00:22:32:12] Então, salvei, fechei e prontinho.
#KAIROS E:0.012 Pk:0.1075 Ph:0.0Hz V:0.0Hz R:1.41wps S:40ms

[00:22:32:14 --> 00:22:33:06] Então, voltei para cá.
#KAIROS E:0.0125 Pk:0.1383 Ph:0.0Hz V:0.0Hz R:5.41wps S:79ms

[00:22:33:14 --> 00:22:34:26] Então, já salvei ela lá.
#KAIROS E:0.0433 Pk:0.3181 Ph:0.0Hz V:0.0Hz R:3.57wps S:259ms

[00:22:35:06 --> 00:22:36:23] Agora, eu não vou abrir mais o Envy Local.
#KAIROS E:0.0445 Pk:0.3533 Ph:0.0Hz V:0.0Hz R:5.77wps S:319ms

[00:22:36:23 --> 00:22:41:04] Vou trabalhar com vocês aqui só no Envy Example.
#KAIROS E:0.0241 Pk:0.4265 Ph:0.0Hz V:0.0Hz R:2.05wps S:0ms

[00:22:41:11 --> 00:22:43:26] Porque aqui não tem problema, não vai vazar nenhuma chave API.
#KAIROS E:0.0203 Pk:0.1744 Ph:0.0Hz V:0.0Hz R:4.4wps S:220ms

[00:22:44:12 --> 00:22:44:26] Beleza?
#KAIROS E:0.037 Pk:0.2652 Ph:0.0Hz V:0.0Hz R:2.08wps S:539ms

[00:22:45:19 --> 00:22:47:24] Aproveitando, eu vou atualizar aqui também o...
#KAIROS E:0.0463 Pk:0.31 Ph:0.0Hz V:0.0Hz R:3.21wps S:759ms

[00:22:49:12 --> 00:22:52:23] o exemplo, para a gente ter aqui essa chave também,
#KAIROS E:0.0159 Pk:0.1841 Ph:0.0Hz V:0.0Hz R:2.98wps S:1592ms

[00:22:53:08 --> 00:22:54:03] e tudo certo.
#KAIROS E:0.0147 Pk:0.1224 Ph:0.0Hz V:0.0Hz R:3.57wps S:500ms

[00:22:54:14 --> 00:22:56:07] Agora que eu já peguei, eu posso fechar
#KAIROS E:0.0328 Pk:0.2737 Ph:0.0Hz V:0.0Hz R:4.49wps S:359ms

[00:22:56:23 --> 00:22:58:21] e falar para ele que eu já tenho a chave.
#KAIROS E:0.0381 Pk:0.3483 Ph:0.0Hz V:0.0Hz R:5.21wps S:519ms

[00:22:58:27 --> 00:23:00:14] Então, vou dar Enter aqui também,
#KAIROS E:0.0105 Pk:0.1237 Ph:0.0Hz V:0.0Hz R:3.85wps S:220ms

[00:23:00:18 --> 00:23:01:22] falar para ele que eu tenho a chave,
#KAIROS E:0.0104 Pk:0.1 Ph:0.0Hz V:0.0Hz R:7.02wps S:120ms

[00:23:01:22 --> 00:23:05:00] e deixo ele trabalhar aí nesses detalhes.
#KAIROS E:0.0217 Pk:0.2653 Ph:0.0Hz V:0.0Hz R:2.16wps S:19ms

[00:23:06:11 --> 00:23:09:09] Agora ele vai começar todo um processo de quebrar os dados,
#KAIROS E:0.0494 Pk:0.4556 Ph:0.0Hz V:0.0Hz R:3.77wps S:1380ms

[00:23:09:15 --> 00:23:10:27] vai conectar ali o API.
#KAIROS E:0.036 Pk:0.3039 Ph:0.0Hz V:0.0Hz R:3.62wps S:219ms

[00:23:11:02 --> 00:23:12:14] Toda vez que o usuário manda uma informação,
#KAIROS E:0.0392 Pk:0.2831 Ph:0.0Hz V:0.0Hz R:5.71wps S:180ms

[00:23:12:17 --> 00:23:14:07] ele quebra e joga no PG Vector.
#KAIROS E:0.0278 Pk:0.1946 Ph:0.0Hz V:0.0Hz R:4.17wps S:100ms

[00:23:15:03 --> 00:23:15:16] Beleza?
#KAIROS E:0.0374 Pk:0.238 Ph:0.0Hz V:0.0Hz R:2.27wps S:860ms

[00:23:15:25 --> 00:23:18:19] Então, aqui ele já começou a fazer o trabalho bonitinho dele,
#KAIROS E:0.0456 Pk:0.3982 Ph:0.0Hz V:0.0Hz R:3.93wps S:279ms

[00:23:18:24 --> 00:23:20:20] só que agora a gente já vai aproveitar
#KAIROS E:0.0455 Pk:0.308 Ph:0.0Hz V:0.0Hz R:4.26wps S:160ms

[00:23:20:20 --> 00:23:24:16] para conectar aqui a API da nossa IA.
#KAIROS E:0.0404 Pk:0.3638 Ph:0.0Hz V:0.0Hz R:2.07wps S:0ms

[00:23:24:18 --> 00:23:27:07] No caso, a gente vai usar OpenAI API Key.
#KAIROS E:0.0403 Pk:0.3946 Ph:0.0Hz V:0.0Hz R:3.38wps S:60ms

[00:23:27:11 --> 00:23:28:06] Nós queremos essa.
#KAIROS E:0.0192 Pk:0.176 Ph:0.0Hz V:0.0Hz R:3.57wps S:120ms

[00:23:29:21 --> 00:23:32:25] OpenAI, underline, API, underline.
#KAIROS E:0.0142 Pk:0.1621 Ph:0.0Hz V:0.0Hz R:1.27wps S:1500ms

[00:23:35:11 --> 00:23:38:22] Aí aqui eu só salvei no exemplo, mas nós vamos colar no local, tá?
#KAIROS E:0.0399 Pk:0.4373 Ph:0.0Hz V:0.0Hz R:4.14wps S:2511ms

[00:23:41:19 --> 00:23:46:21] Pergunta, quando você der acesso ao projeto, vamos ter que reconfigurar essa parte ou vai funcionar com as suas chaves?
#KAIROS E:0.023 Pk:0.2011 Ph:0.0Hz V:0.0Hz R:3.94wps S:2891ms

[00:23:47:09 --> 00:23:47:21] Não.
#KAIROS E:0.0372 Pk:0.3068 Ph:0.0Hz V:0.0Hz R:2.5wps S:599ms

[00:23:48:23 --> 00:23:50:24] Boa pergunta, excelente pergunta, tá?
#KAIROS E:0.0511 Pk:0.5768 Ph:0.0Hz V:0.0Hz R:2.45wps S:1059ms

[00:23:51:19 --> 00:23:52:16] O que que acontece?
#KAIROS E:0.0307 Pk:0.2127 Ph:0.0Hz V:0.0Hz R:4.55wps S:839ms

[00:23:52:27 --> 00:23:57:04] Tá vendo que tem algumas pastinhas e arquivos que estão cinzas?
#KAIROS E:0.0349 Pk:0.4049 Ph:0.0Hz V:0.0Hz R:2.59wps S:359ms

[00:23:57:14 --> 00:23:58:09] Tá vendo aí, ó?
#KAIROS E:0.0424 Pk:0.2429 Ph:0.0Hz V:0.0Hz R:4.76wps S:340ms

[00:23:58:27 --> 00:24:00:05] Será que eu consigo dar mais um?
#KAIROS E:0.0134 Pk:0.1062 Ph:0.0Hz V:0.0Hz R:5.56wps S:599ms

[00:24:01:16 --> 00:24:02:16] Não consigo dar mais um não.
#KAIROS E:0.0149 Pk:0.1333 Ph:0.0Hz V:0.0Hz R:6.0wps S:1364ms

[00:24:02:20 --> 00:24:02:26] Aí, ó.
#KAIROS E:0.028 Pk:0.2105 Ph:0.0Hz V:0.0Hz R:9.09wps S:120ms

[00:24:03:21 --> 00:24:04:16] Repara aqui do lado.
#KAIROS E:0.0753 Pk:0.4964 Ph:0.0Hz V:0.0Hz R:4.88wps S:839ms

[00:24:05:12 --> 00:24:08:12] Cinza, cinza, cinza, cinza.
#KAIROS E:0.0205 Pk:0.2003 Ph:0.0Hz V:0.0Hz R:1.32wps S:860ms

[00:24:08:24 --> 00:24:12:14] Tudo isso que está cinza não vai para o repositório.
#KAIROS E:0.0374 Pk:0.5624 Ph:0.0Hz V:0.0Hz R:2.73wps S:379ms

[00:24:13:01 --> 00:24:13:26] Fica só local.
#KAIROS E:0.0376 Pk:0.2568 Ph:0.0Hz V:0.0Hz R:3.57wps S:579ms

[00:24:14:18 --> 00:24:17:27] Por segurança ou por otimização, porque é desnecessário.
#KAIROS E:0.0298 Pk:0.2282 Ph:0.0Hz V:0.0Hz R:2.42wps S:740ms

[00:24:18:04 --> 00:24:20:10] Por exemplo, essa pastinha aqui, Node Modules,
#KAIROS E:0.0467 Pk:0.3582 Ph:0.0Hz V:0.0Hz R:3.18wps S:220ms

[00:24:20:15 --> 00:24:23:09] ela é muito grande e é chato ter que ficar subindo ela toda hora
#KAIROS E:0.0438 Pk:0.3908 Ph:0.0Hz V:0.0Hz R:5.0wps S:159ms

[00:24:23:09 --> 00:24:25:28] e é desnecessário, porque isso aqui a gente baixa da internet
#KAIROS E:0.0391 Pk:0.301 Ph:0.0Hz V:0.0Hz R:4.17wps S:0ms

[00:24:26:17 --> 00:24:28:15] automaticamente quando a gente roda um comando.
#KAIROS E:0.0245 Pk:0.2112 Ph:0.0Hz V:0.0Hz R:3.57wps S:619ms

[00:24:29:05 --> 00:24:31:24] Então o que vai acontecer quando vocês baixarem o projeto?
#KAIROS E:0.0467 Pk:0.3073 Ph:0.0Hz V:0.0Hz R:3.82wps S:660ms

[00:24:32:00 --> 00:24:34:09] O projeto vai quebrar, ele não vai funcionar.
#KAIROS E:0.0278 Pk:0.2857 Ph:0.0Hz V:0.0Hz R:3.48wps S:220ms

[00:24:34:11 --> 00:24:37:26] Vocês vão ter que rodar esse comando aqui, ó, npm install.
#KAIROS E:0.0311 Pk:0.2445 Ph:0.0Hz V:0.0Hz R:3.14wps S:60ms

[00:24:39:19 --> 00:24:43:15] Quando vocês rodarem esse comando, ele vai instalar as dependências do projeto.
#KAIROS E:0.0472 Pk:0.548 Ph:0.0Hz V:0.0Hz R:3.12wps S:1771ms

[00:24:43:28 --> 00:24:47:12] Então, ele instala o NodeModules, instala tudo o que precisa para o projeto aqui.
#KAIROS E:0.0452 Pk:0.4344 Ph:0.0Hz V:0.0Hz R:4.07wps S:460ms

[00:24:47:20 --> 00:24:49:01] Só que o que acontece depois?
#KAIROS E:0.0434 Pk:0.3987 Ph:0.0Hz V:0.0Hz R:4.41wps S:279ms

[00:24:49:22 --> 00:24:51:25] Ainda vão faltar as variáveis de ambiente.
#KAIROS E:0.0504 Pk:0.4664 Ph:0.0Hz V:0.0Hz R:3.37wps S:720ms

[00:24:52:07 --> 00:24:54:21] E como que vocês sabem quais são as variáveis de ambiente?
#KAIROS E:0.0379 Pk:0.3128 Ph:0.0Hz V:0.0Hz R:4.51wps S:419ms

[00:24:54:27 --> 00:24:57:28] Vocês acessam o exemplo, vê todas que estão aqui,
#KAIROS E:0.0382 Pk:0.3063 Ph:0.0Hz V:0.0Hz R:2.96wps S:200ms

[00:24:58:01 --> 00:24:59:28] e aí vocês têm que ir lá e conectar tudo.
#KAIROS E:0.0357 Pk:0.2989 Ph:0.0Hz V:0.0Hz R:5.26wps S:99ms

[00:25:00:09 --> 00:25:02:06] Só que eu vou dar dois caminhos para vocês, né?
#KAIROS E:0.0437 Pk:0.4437 Ph:0.0Hz V:0.0Hz R:5.21wps S:360ms

[00:25:02:07 --> 00:25:03:22] Eu vou dar aqui o caminho do repositório,
#KAIROS E:0.0376 Pk:0.3099 Ph:0.0Hz V:0.0Hz R:5.33wps S:19ms

[00:25:03:25 --> 00:25:06:06] mas lembra, a gente vai publicar esse projeto aqui,
#KAIROS E:0.0409 Pk:0.3578 Ph:0.0Hz V:0.0Hz R:3.78wps S:100ms

[00:25:06:08 --> 00:25:07:27] vocês vão poder usar ele também, se quiserem,
#KAIROS E:0.0271 Pk:0.213 Ph:0.0Hz V:0.0Hz R:4.94wps S:59ms

[00:25:07:27 --> 00:25:11:04] só criando uma conta sem precisar fazer tudo isso.
#KAIROS E:0.0184 Pk:0.1851 Ph:0.0Hz V:0.0Hz R:2.78wps S:0ms

[00:25:12:27 --> 00:25:14:23] vir com as chaves junto seria o sonho.
#KAIROS E:0.0283 Pk:0.316 Ph:0.0Hz V:0.0Hz R:4.26wps S:1768ms

[00:25:16:23 --> 00:25:18:24] Aí vocês iam gastar meus créditos aqui, né?
#KAIROS E:0.0466 Pk:0.4352 Ph:0.0Hz V:0.0Hz R:3.96wps S:1991ms

[00:25:19:05 --> 00:25:20:27] Mas beleza, então vamos voltar lá.
#KAIROS E:0.041 Pk:0.2448 Ph:0.0Hz V:0.0Hz R:3.49wps S:379ms

[00:25:21:15 --> 00:25:23:00] O agente já está trabalhando.
#KAIROS E:0.051 Pk:0.4706 Ph:0.0Hz V:0.0Hz R:3.29wps S:599ms

[00:25:23:07 --> 00:25:26:00] Agora, prestem atenção aqui que eu vou mostrar para vocês
#KAIROS E:0.0387 Pk:0.4099 Ph:0.0Hz V:0.0Hz R:3.62wps S:240ms

[00:25:26:00 --> 00:25:29:06] como pegar as chaves API das IAs que vocês vão trabalhar.
#KAIROS E:0.0369 Pk:0.3719 Ph:0.0Hz V:0.0Hz R:3.44wps S:0ms

[00:25:29:29 --> 00:25:33:04] Então, basicamente, todos esses modelos de IA,
#KAIROS E:0.0356 Pk:0.3075 Ph:0.0Hz V:0.0Hz R:2.2wps S:759ms

[00:25:33:04 --> 00:25:35:25] eles possuem uma plataforma de desenvolvimento.
#KAIROS E:0.0324 Pk:0.2519 Ph:0.0Hz V:0.0Hz R:2.24wps S:0ms

[00:25:36:00 --> 00:25:38:10] Se eu digito Platform OpenAI,
#KAIROS E:0.0443 Pk:0.383 Ph:0.0Hz V:0.0Hz R:2.12wps S:159ms

[00:25:38:29 --> 00:25:41:25] eu vou acessar aqui a plataforma da OpenAI de desenvolvimento.
#KAIROS E:0.0401 Pk:0.3815 Ph:0.0Hz V:0.0Hz R:3.5wps S:619ms

[00:25:42:07 --> 00:25:45:26] Se eu digito aí o do Cloud Console,
#KAIROS E:0.0423 Pk:0.3656 Ph:0.0Hz V:0.0Hz R:2.21wps S:419ms

[00:25:45:26 --> 00:25:52:16] Se eu digito Cloud Console, eu vou acessar aqui a plataforma de desenvolvimento do Cloud.
#KAIROS E:0.0301 Pk:0.2503 Ph:0.0Hz V:0.0Hz R:2.25wps S:0ms

[00:25:52:22 --> 00:25:59:02] Se eu digito AI Studio, eu vou acessar a plataforma de desenvolvimento do Gemini.
#KAIROS E:0.0331 Pk:0.307 Ph:0.0Hz V:0.0Hz R:2.21wps S:200ms

[00:25:59:07 --> 00:26:00:16] Cada uma tem o seu.
#KAIROS E:0.0424 Pk:0.2823 Ph:0.0Hz V:0.0Hz R:3.85wps S:159ms

[00:26:00:19 --> 00:26:05:25] Se eu digito Platform Grok API, vai aparecer aqui... Cadê?
#KAIROS E:0.0362 Pk:0.3835 Ph:0.0Hz V:0.0Hz R:1.93wps S:120ms

[00:26:10:08 --> 00:26:10:19] console.
#KAIROS E:0.0438 Pk:0.2959 Ph:0.0Hz V:0.0Hz R:2.63wps S:4443ms

[00:26:13:27 --> 00:26:15:17] Ah, já ia falar, eu nem estou conectado.
#KAIROS E:0.0387 Pk:0.3125 Ph:0.0Hz V:0.0Hz R:4.76wps S:3236ms

[00:26:15:18 --> 00:26:18:00] Ele já conectou para eu gerar a API do GOROK aqui.
#KAIROS E:0.0265 Pk:0.2412 Ph:0.0Hz V:0.0Hz R:4.58wps S:39ms

[00:26:18:18 --> 00:26:19:28] Cada uma delas tem um.
#KAIROS E:0.0551 Pk:0.4002 Ph:0.0Hz V:0.0Hz R:3.73wps S:600ms

[00:26:20:02 --> 00:26:23:18] E aí, existe um jeito de você criar também um roteador
#KAIROS E:0.0458 Pk:0.4206 Ph:0.0Hz V:0.0Hz R:3.13wps S:120ms

[00:26:24:12 --> 00:26:26:28] que você conecta várias IAs diferentes
#KAIROS E:0.0531 Pk:0.4059 Ph:0.0Hz V:0.0Hz R:2.36wps S:819ms

[00:26:27:17 --> 00:26:29:10] e ele consegue...
#KAIROS E:0.0458 Pk:0.3165 Ph:0.0Hz V:0.0Hz R:1.7wps S:620ms

[00:26:31:10 --> 00:26:32:18] Fazer essa troca para você.
#KAIROS E:0.073 Pk:0.6217 Ph:0.0Hz V:0.0Hz R:3.91wps S:2000ms

[00:26:32:21 --> 00:26:34:12] Tem tanto um gerenciador da Vercel,
#KAIROS E:0.0388 Pk:0.2728 Ph:0.0Hz V:0.0Hz R:3.57wps S:99ms

[00:26:34:15 --> 00:26:36:27] mas tem também um que o pessoal usa muito
#KAIROS E:0.0435 Pk:0.4527 Ph:0.0Hz V:0.0Hz R:3.78wps S:119ms

[00:26:36:27 --> 00:26:38:05] para poder fazer isso,
#KAIROS E:0.0317 Pk:0.269 Ph:0.0Hz V:0.0Hz R:3.12wps S:0ms

[00:26:38:09 --> 00:26:40:25] que é o, deu branco aqui agora o nome dele, cara.
#KAIROS E:0.0446 Pk:0.4666 Ph:0.0Hz V:0.0Hz R:4.33wps S:120ms

[00:26:41:19 --> 00:26:42:03] OpenRouter.
#KAIROS E:0.0475 Pk:0.2775 Ph:0.0Hz V:0.0Hz R:2.27wps S:819ms

[00:26:42:25 --> 00:26:44:00] Digita aqui OpenRouter.
#KAIROS E:0.0416 Pk:0.3021 Ph:0.0Hz V:0.0Hz R:2.54wps S:740ms

[00:26:44:19 --> 00:26:47:04] E o OpenRouter, eu não vou ensinar ele aqui agora,
#KAIROS E:0.045 Pk:0.3441 Ph:0.0Hz V:0.0Hz R:4.03wps S:640ms

[00:26:47:10 --> 00:26:50:18] mas você consegue conectar todas as suas APIs direto nele,
#KAIROS E:0.0421 Pk:0.4158 Ph:0.0Hz V:0.0Hz R:3.07wps S:200ms

[00:26:50:18 --> 00:26:53:09] e aí você só usa a API do OpenRouter no seu sistema.
#KAIROS E:0.0494 Pk:0.3895 Ph:0.0Hz V:0.0Hz R:4.44wps S:19ms

[00:26:53:18 --> 00:26:55:13] E aí, o legal do OpenRouter
#KAIROS E:0.0603 Pk:0.4702 Ph:0.0Hz V:0.0Hz R:3.26wps S:299ms

[00:26:55:13 --> 00:26:58:10] é que ele tem várias IAs gratuitas.
#KAIROS E:0.0417 Pk:0.3202 Ph:0.0Hz V:0.0Hz R:2.41wps S:0ms

[00:26:58:27 --> 00:27:01:17] Então dá para usar as IAs gratuitas do Open Router também.
#KAIROS E:0.0486 Pk:0.3905 Ph:0.0Hz V:0.0Hz R:4.14wps S:559ms

[00:27:01:25 --> 00:27:05:01] E uma IA gratuita que é legal para alguns projetos mais simples,
#KAIROS E:0.0469 Pk:0.4672 Ph:0.0Hz V:0.0Hz R:3.77wps S:279ms

[00:27:05:04 --> 00:27:09:11] se vocês não quiserem gastar, também é a Gema do Google.
#KAIROS E:0.043 Pk:0.3707 Ph:0.0Hz V:0.0Hz R:2.59wps S:100ms

[00:27:11:13 --> 00:27:12:19] E vocês conseguem, o que acontece?
#KAIROS E:0.0432 Pk:0.3288 Ph:0.0Hz V:0.0Hz R:4.92wps S:2056ms

[00:27:13:00 --> 00:27:16:26] A Gema é uma IA do Google, gratuita,
#KAIROS E:0.0363 Pk:0.5065 Ph:0.0Hz V:0.0Hz R:2.07wps S:359ms

[00:27:16:26 --> 00:27:19:13] que qualquer pessoa consegue usar, ela é open source,
#KAIROS E:0.0275 Pk:0.2826 Ph:0.0Hz V:0.0Hz R:3.49wps S:0ms

[00:27:19:28 --> 00:27:22:25] e você pode instalar ela no seu computador se você quiser,
#KAIROS E:0.0492 Pk:0.3928 Ph:0.0Hz V:0.0Hz R:3.79wps S:480ms

[00:27:22:26 --> 00:27:24:10] só que vai ficar bem pesado,
#KAIROS E:0.0352 Pk:0.2903 Ph:0.0Hz V:0.0Hz R:4.11wps S:60ms

[00:27:24:14 --> 00:27:28:28] ou você pode usar a Gema pelo Open Router.
#KAIROS E:0.0484 Pk:0.3278 Ph:0.0Hz V:0.0Hz R:2.02wps S:120ms

[00:27:29:19 --> 00:27:32:27] Aí você cria a conta no Open Router, gera a API no Open Router,
#KAIROS E:0.0366 Pk:0.2776 Ph:0.0Hz V:0.0Hz R:4.29wps S:720ms

[00:27:33:13 --> 00:27:35:25] explica para o Cloud que você vai usar o Open Router
#KAIROS E:0.0369 Pk:0.244 Ph:0.0Hz V:0.0Hz R:4.58wps S:519ms

[00:27:35:25 --> 00:27:37:23] e que você quer o modelo Gema 4.
#KAIROS E:0.0343 Pk:0.2844 Ph:0.0Hz V:0.0Hz R:4.08wps S:0ms

[00:27:38:04 --> 00:27:41:07] E aí ele vai trazer para você o modelo gratuito,
#KAIROS E:0.0367 Pk:0.3093 Ph:0.0Hz V:0.0Hz R:3.23wps S:339ms

[00:27:41:07 --> 00:27:43:04] você consegue utilizar ali. Beleza?
#KAIROS E:0.0234 Pk:0.2145 Ph:0.0Hz V:0.0Hz R:2.63wps S:0ms

[00:27:43:07 --> 00:27:45:04] No nosso caso aqui, eu quero
#KAIROS E:0.0331 Pk:0.2947 Ph:0.0Hz V:0.0Hz R:3.19wps S:120ms

[00:27:45:04 --> 00:27:47:01] usar o chat GPT. Então, o que
#KAIROS E:0.0315 Pk:0.3477 Ph:0.0Hz V:0.0Hz R:3.65wps S:0ms

[00:27:47:01 --> 00:27:48:24] eu vou fazer? Eu vou acessar aqui a plataforma
#KAIROS E:0.0411 Pk:0.2904 Ph:0.0Hz V:0.0Hz R:5.11wps S:0ms

[00:27:48:24 --> 00:27:51:01] da OpenAI, que é o Platform OpenAI.
#KAIROS E:0.0309 Pk:0.3394 Ph:0.0Hz V:0.0Hz R:3.13wps S:0ms

[00:27:51:05 --> 00:27:52:28] Um jeito simples também, vocês podem
#KAIROS E:0.0321 Pk:0.2458 Ph:0.0Hz V:0.0Hz R:3.41wps S:120ms

[00:27:52:28 --> 00:27:54:17] colocar assim, chat GPT API.
#KAIROS E:0.0419 Pk:0.3569 Ph:0.0Hz V:0.0Hz R:3.05wps S:0ms

[00:27:55:04 --> 00:27:56:19] E aí vai aparecer aqui, API
#KAIROS E:0.0494 Pk:0.4532 Ph:0.0Hz V:0.0Hz R:4.05wps S:580ms

[00:27:56:19 --> 00:27:59:02] Platform. Dá para fazer assim
#KAIROS E:0.0365 Pk:0.4005 Ph:0.0Hz V:0.0Hz R:2.03wps S:0ms

[00:27:59:02 --> 00:28:00:24] também. No caso, ele me mandou
#KAIROS E:0.0391 Pk:0.5028 Ph:0.0Hz V:0.0Hz R:3.49wps S:0ms

[00:28:00:24 --> 00:28:02:26] para a página principal. Não quero a página
#KAIROS E:0.0352 Pk:0.2755 Ph:0.0Hz V:0.0Hz R:3.88wps S:0ms

[00:28:02:26 --> 00:28:03:17] principal, não.
#KAIROS E:0.0095 Pk:0.0768 Ph:0.0Hz V:0.0Hz R:2.78wps S:0ms

[00:28:04:25 --> 00:28:05:24] Quero outra página.
#KAIROS E:0.0191 Pk:0.1782 Ph:0.0Hz V:0.0Hz R:3.12wps S:1248ms

[00:28:05:27 --> 00:28:07:01] Aqui, ó, plataforma de API.
#KAIROS E:0.0293 Pk:0.2383 Ph:0.0Hz V:0.0Hz R:4.39wps S:119ms

[00:28:07:22 --> 00:28:09:00] Ah, mandou para cá também.
#KAIROS E:0.0142 Pk:0.1651 Ph:0.0Hz V:0.0Hz R:4.03wps S:700ms

[00:28:09:11 --> 00:28:13:21] Peguem aqui essa página aqui, ó, platform.opni.com.login.
#KAIROS E:0.0382 Pk:0.3673 Ph:0.0Hz V:0.0Hz R:1.61wps S:379ms

[00:28:13:25 --> 00:28:15:13] Vou fazer login aqui na minha conta.
#KAIROS E:0.0381 Pk:0.2779 Ph:0.0Hz V:0.0Hz R:4.32wps S:119ms

[00:28:17:16 --> 00:28:18:18] Vou logar nessa daqui mesmo.
#KAIROS E:0.0142 Pk:0.1096 Ph:0.0Hz V:0.0Hz R:4.63wps S:2083ms

[00:28:20:19 --> 00:28:22:11] E aí vem um ponto muito importante.
#KAIROS E:0.0401 Pk:0.3466 Ph:0.0Hz V:0.0Hz R:4.02wps S:2023ms

[00:28:23:14 --> 00:28:25:16] Como a API funciona on-demand,
#KAIROS E:0.0399 Pk:0.2512 Ph:0.0Hz V:0.0Hz R:2.4wps S:1079ms

[00:28:26:05 --> 00:28:30:19] então nós precisamos cadastrar uma forma de pagamento
#KAIROS E:0.0424 Pk:0.4631 Ph:0.0Hz V:0.0Hz R:1.79wps S:639ms

[00:28:30:19 --> 00:28:32:18] para que a gente consiga usar essa API.
#KAIROS E:0.0372 Pk:0.3766 Ph:0.0Hz V:0.0Hz R:4.04wps S:0ms

[00:28:33:11 --> 00:28:35:18] Então a gente cadastra aqui, pode ser o cartão,
#KAIROS E:0.0461 Pk:0.3713 Ph:0.0Hz V:0.0Hz R:3.98wps S:740ms

[00:28:35:18 --> 00:28:38:15] ou você pode, se você não quiser deixar o cartão aberto,
#KAIROS E:0.0435 Pk:0.3138 Ph:0.0Hz V:0.0Hz R:3.82wps S:0ms

[00:28:38:18 --> 00:28:40:06] aí eu quero ser mais seguro e tal.
#KAIROS E:0.0416 Pk:0.3621 Ph:0.0Hz V:0.0Hz R:5.06wps S:119ms

[00:28:40:08 --> 00:28:42:20] Você pode adicionar crédito, então você pode falar assim,
#KAIROS E:0.0425 Pk:0.4113 Ph:0.0Hz V:0.0Hz R:3.72wps S:60ms

[00:28:42:21 --> 00:28:47:12] eu vou deixar 20 reais aqui, 20 reais não, 20 dólares aqui.
#KAIROS E:0.0253 Pk:0.3018 Ph:0.0Hz V:0.0Hz R:2.55wps S:39ms

[00:28:47:17 --> 00:28:50:02] E aí quando acabar o seu sistema vai parar de funcionar,
#KAIROS E:0.0701 Pk:0.5258 Ph:0.0Hz V:0.0Hz R:4.4wps S:140ms

[00:28:50:02 --> 00:28:51:13] mas aí você pode voltar e recarregar.
#KAIROS E:0.0362 Pk:0.2405 Ph:0.0Hz V:0.0Hz R:5.07wps S:0ms

[00:28:51:21 --> 00:28:54:05] Ou você pode conectar o cartão de crédito ali
#KAIROS E:0.0646 Pk:0.628 Ph:0.0Hz V:0.0Hz R:3.66wps S:259ms

[00:28:54:05 --> 00:28:57:02] e ele vai pagando ali a medida que usa.
#KAIROS E:0.0482 Pk:0.5379 Ph:0.0Hz V:0.0Hz R:3.08wps S:0ms

[00:28:57:23 --> 00:28:59:20] Também tem como colocar limite de uso aqui,
#KAIROS E:0.0519 Pk:0.6114 Ph:0.0Hz V:0.0Hz R:4.26wps S:700ms

[00:28:59:21 --> 00:29:01:04] eu vou mostrar para vocês, tá bom?
#KAIROS E:0.0187 Pk:0.2055 Ph:0.0Hz V:0.0Hz R:4.93wps S:59ms

[00:29:02:03 --> 00:29:04:18] Então, qual que é a primeira coisa que vocês vão precisar fazer?
#KAIROS E:0.0612 Pk:0.4391 Ph:0.0Hz V:0.0Hz R:4.8wps S:980ms

[00:29:05:12 --> 00:29:06:17] Adicionar a créditos aqui, ó.
#KAIROS E:0.0563 Pk:0.4335 Ph:0.0Hz V:0.0Hz R:4.24wps S:779ms

[00:29:06:21 --> 00:29:08:09] Ele já até está me mostrando nessa conta.
#KAIROS E:0.0361 Pk:0.3075 Ph:0.0Hz V:0.0Hz R:4.94wps S:119ms

[00:29:08:15 --> 00:29:11:27] Tem aqui Add Credits e tem aqui também Go to Billing.
#KAIROS E:0.0396 Pk:0.3781 Ph:0.0Hz V:0.0Hz R:3.25wps S:200ms

[00:29:12:03 --> 00:29:13:08] Então, eu vou clicar aqui.
#KAIROS E:0.0572 Pk:0.4912 Ph:0.0Hz V:0.0Hz R:4.31wps S:200ms

[00:29:13:22 --> 00:29:15:28] Eu posso clicar aqui também em cima, cadê?
#KAIROS E:0.0557 Pk:0.452 Ph:0.0Hz V:0.0Hz R:3.64wps S:480ms

[00:29:18:25 --> 00:29:19:22] Não está aparecendo aqui não.
#KAIROS E:0.0188 Pk:0.1717 Ph:0.0Hz V:0.0Hz R:5.56wps S:2908ms

[00:29:19:27 --> 00:29:21:14] Vamos por aqui, deve ser aqui.
#KAIROS E:0.0286 Pk:0.2437 Ph:0.0Hz V:0.0Hz R:3.8wps S:140ms

[00:29:23:06 --> 00:29:25:03] Não, eu queria mostrar o outro caminho, mas vamos nesse então.
#KAIROS E:0.0274 Pk:0.2339 Ph:0.0Hz V:0.0Hz R:5.73wps S:1731ms

[00:29:25:05 --> 00:29:26:15] A gente vai clicar aqui em Go to Billing.
#KAIROS E:0.0458 Pk:0.4835 Ph:0.0Hz V:0.0Hz R:6.82wps S:59ms

[00:29:27:03 --> 00:29:30:15] Quando chegar aqui em Go to Billing, vocês vão adicionar detalhes de pagamento.
#KAIROS E:0.048 Pk:0.4095 Ph:0.0Hz V:0.0Hz R:3.82wps S:619ms

[00:29:30:27 --> 00:29:34:07] Aqui em detalhes de pagamento, vazou os quatro últimos dígitos.
#KAIROS E:0.0452 Pk:0.5182 Ph:0.0Hz V:0.0Hz R:3.01wps S:399ms

[00:29:34:17 --> 00:29:36:29] Vocês vão colocar aqui o cartão de vocês.
#KAIROS E:0.0566 Pk:0.5394 Ph:0.0Hz V:0.0Hz R:3.36wps S:339ms

[00:29:37:02 --> 00:29:39:13] Clicar aqui, Use a New Payment Method.
#KAIROS E:0.034 Pk:0.3686 Ph:0.0Hz V:0.0Hz R:2.97wps S:120ms

[00:29:40:18 --> 00:29:42:28] Provavelmente os seus não vão ter esse, porque vai ser a primeira vez.
#KAIROS E:0.0401 Pk:0.3157 Ph:0.0Hz V:0.0Hz R:5.6wps S:1180ms

[00:29:43:04 --> 00:29:45:20] Então ele vai aparecer aqui para vocês, New Payment Method.
#KAIROS E:0.0352 Pk:0.425 Ph:0.0Hz V:0.0Hz R:3.97wps S:200ms

[00:29:46:23 --> 00:29:47:05] Beleza?
#KAIROS E:0.0335 Pk:0.2075 Ph:0.0Hz V:0.0Hz R:2.5wps S:1100ms

[00:29:47:18 --> 00:29:49:27] Então dá para conectar ele aqui também.
#KAIROS E:0.0386 Pk:0.2882 Ph:0.0Hz V:0.0Hz R:3.04wps S:460ms

[00:29:49:27 --> 00:29:54:02] Como eu já tenho um conectado, posso selecionar ele aqui.
#KAIROS E:0.0408 Pk:0.5061 Ph:0.0Hz V:0.0Hz R:2.42wps S:0ms

[00:29:55:26 --> 00:29:57:20] E aí, no caso aqui, eu estou conectando o cartão.
#KAIROS E:0.0653 Pk:0.5321 Ph:0.0Hz V:0.0Hz R:5.56wps S:1811ms

[00:29:58:13 --> 00:30:01:15] Aqui, agora, ele está falando quantos créditos eu quero comprar.
#KAIROS E:0.0556 Pk:0.5029 Ph:0.0Hz V:0.0Hz R:3.27wps S:760ms

[00:30:02:01 --> 00:30:03:28] Então, igual eu falei, eu posso colocar 10 créditos.
#KAIROS E:0.0534 Pk:0.4109 Ph:0.0Hz V:0.0Hz R:4.74wps S:559ms

[00:30:04:03 --> 00:30:07:07] E vocês vão reparar isso aqui, usar auto-recarga.
#KAIROS E:0.0602 Pk:0.4434 Ph:0.0Hz V:0.0Hz R:2.56wps S:159ms

[00:30:07:19 --> 00:30:11:28] Então, ele está falando aqui, auto-recarga quando bater 5 dólares
#KAIROS E:0.0534 Pk:0.4844 Ph:0.0Hz V:0.0Hz R:2.33wps S:419ms

[00:30:12:27 --> 00:30:15:08] e restaura quando bater 10 dólares.
#KAIROS E:0.0564 Pk:0.3658 Ph:0.0Hz V:0.0Hz R:2.52wps S:939ms

[00:30:20:06 --> 00:30:23:07] Tá, ele está falando basicamente que quando o crédito chegar em 5 dólares,
#KAIROS E:0.0528 Pk:0.5059 Ph:0.0Hz V:0.0Hz R:4.28wps S:4920ms

[00:30:23:27 --> 00:30:25:01] reseta ele para 10 dólares.
#KAIROS E:0.0509 Pk:0.3447 Ph:0.0Hz V:0.0Hz R:4.31wps S:659ms

[00:30:26:13 --> 00:30:29:18] Certo? E aí você clica em continuar aqui e compra crédito.
#KAIROS E:0.0289 Pk:0.3527 Ph:0.0Hz V:0.0Hz R:3.48wps S:1380ms

[00:30:29:19 --> 00:30:32:09] Eu acho que eu estou com crédito na outra conta ali, vou usar ela.
#KAIROS E:0.0288 Pk:0.3379 Ph:0.0Hz V:0.0Hz R:5.22wps S:39ms

[00:30:32:16 --> 00:30:34:27] Aqui ficam os métodos de pagamento.
#KAIROS E:0.04 Pk:0.5197 Ph:0.0Hz V:0.0Hz R:2.54wps S:240ms

[00:30:35:23 --> 00:30:40:13] Aí ele está falando aqui que eu não iniciei nenhuma forma de pagamento.
#KAIROS E:0.0268 Pk:0.3081 Ph:0.0Hz V:0.0Hz R:2.79wps S:860ms

[00:30:40:16 --> 00:30:41:00] Beleza, beleza.
#KAIROS E:0.0158 Pk:0.0668 Ph:0.0Hz V:0.0Hz R:4.35wps S:99ms

[00:30:41:05 --> 00:30:42:11] Vou entrar na minha outra conta aqui.
#KAIROS E:0.0466 Pk:0.3385 Ph:0.0Hz V:0.0Hz R:5.83wps S:179ms

[00:30:44:27 --> 00:30:45:11] Logo, out.
#KAIROS E:0.0065 Pk:0.0517 Ph:0.0Hz V:0.0Hz R:4.35wps S:2524ms

[00:30:46:24 --> 00:30:48:25] Tem alguns créditos nela aqui, vamos usar eles.
#KAIROS E:0.0206 Pk:0.2716 Ph:0.0Hz V:0.0Hz R:3.96wps S:1459ms

[00:30:56:06 --> 00:31:00:14] Aqui dá para colocar 5 dólares, tipo 20 reais, e já dá para fazer, entendeu?
#KAIROS E:0.0469 Pk:0.4734 Ph:0.0Hz V:0.0Hz R:3.5wps S:7355ms

[00:31:00:24 --> 00:31:02:10] Inclusive eu estou com 5 dólares aqui.
#KAIROS E:0.036 Pk:0.2813 Ph:0.0Hz V:0.0Hz R:4.49wps S:319ms

[00:31:03:16 --> 00:31:03:24] Pra usar.
#KAIROS E:0.0178 Pk:0.0915 Ph:0.0Hz V:0.0Hz R:8.33wps S:1200ms

[00:31:05:08 --> 00:31:08:05] Uma vez, então, que a gente cadastra o valor,
#KAIROS E:0.0473 Pk:0.3938 Ph:0.0Hz V:0.0Hz R:3.12wps S:1488ms

[00:31:09:13 --> 00:31:11:26] nós conseguimos vir aqui em API Keys.
#KAIROS E:0.0401 Pk:0.277 Ph:0.0Hz V:0.0Hz R:2.89wps S:1279ms

[00:31:13:06 --> 00:31:17:00] E aí aqui em API Keys, nós vamos gerar uma nova chave.
#KAIROS E:0.0454 Pk:0.4249 Ph:0.0Hz V:0.0Hz R:3.17wps S:1355ms

[00:31:17:02 --> 00:31:21:03] Então aqui eu já tenho algumas, mas vocês podem clicar aqui para gerar outra.
#KAIROS E:0.0402 Pk:0.3985 Ph:0.0Hz V:0.0Hz R:3.47wps S:59ms

[00:31:21:15 --> 00:31:26:01] Então clica aqui em gerar nova chave, coloca o nome, então vamos colocar o Business OS,
#KAIROS E:0.0387 Pk:0.3911 Ph:0.0Hz V:0.0Hz R:3.54wps S:419ms

[00:31:26:15 --> 00:31:29:17] e aí vocês vão clicar aqui em Create Secret Key.
#KAIROS E:0.0399 Pk:0.4084 Ph:0.0Hz V:0.0Hz R:3.27wps S:460ms

[00:31:31:17 --> 00:31:35:17] Só que eu não vou mostrar de novo, eu vou gerar aqui e vou colocar lá.
#KAIROS E:0.0524 Pk:0.4234 Ph:0.0Hz V:0.0Hz R:4.0wps S:2028ms

[00:31:35:28 --> 00:31:36:27] Onde que a gente vai colocar?
#KAIROS E:0.0299 Pk:0.205 Ph:0.0Hz V:0.0Hz R:6.12wps S:340ms

[00:31:37:10 --> 00:31:39:22] Aqui eu estou no exemplo, vocês vão colocar aqui no local,
#KAIROS E:0.0433 Pk:0.4272 Ph:0.0Hz V:0.0Hz R:4.58wps S:419ms

[00:31:40:08 --> 00:31:43:11] nessa parte aqui, OpenAI API Key.
#KAIROS E:0.0441 Pk:0.3313 Ph:0.0Hz V:0.0Hz R:1.94wps S:559ms

[00:31:43:23 --> 00:31:45:24] É aqui que a gente vai colocar ela, beleza?
#KAIROS E:0.0247 Pk:0.4517 Ph:0.0Hz V:0.0Hz R:4.41wps S:379ms

[00:31:46:10 --> 00:31:47:26] Então, vou gerar do lado de cá.
#KAIROS E:0.0474 Pk:0.4028 Ph:0.0Hz V:0.0Hz R:4.49wps S:519ms

[00:31:52:07 --> 00:31:56:06] copiar, pronto, e vou colar aqui no Envy Local.
#KAIROS E:0.0378 Pk:0.3572 Ph:0.0Hz V:0.0Hz R:2.26wps S:4339ms

[00:31:56:10 --> 00:31:59:02] Só que eu vou puxar aqui, para não vazar nada.
#KAIROS E:0.0138 Pk:0.132 Ph:0.0Hz V:0.0Hz R:3.65wps S:139ms

[00:32:00:20 --> 00:32:03:03] Não tem noção quantas vezes eu já vazei chave assim sem querer.
#KAIROS E:0.016 Pk:0.104 Ph:0.0Hz V:0.0Hz R:4.92wps S:1587ms

[00:32:03:08 --> 00:32:05:28] Aí tem que gerar tudo de novo, é muito chato.
#KAIROS E:0.0098 Pk:0.1141 Ph:0.0Hz V:0.0Hz R:3.76wps S:160ms

[00:32:06:18 --> 00:32:06:29] Prontinho.
#KAIROS E:0.0254 Pk:0.1755 Ph:0.0Hz V:0.0Hz R:2.78wps S:679ms

[00:32:07:22 --> 00:32:10:03] Então, coloquei aqui minha chave da OpenAI.
#KAIROS E:0.0308 Pk:0.2562 Ph:0.0Hz V:0.0Hz R:2.97wps S:759ms

[00:32:10:19 --> 00:32:12:14] Aí vamos supor, por exemplo, que vocês falam assim,
#KAIROS E:0.0397 Pk:0.3919 Ph:0.0Hz V:0.0Hz R:4.95wps S:559ms

[00:32:12:16 --> 00:32:12:28] Juan...
#KAIROS E:0.0431 Pk:0.1886 Ph:0.0Hz V:0.0Hz R:2.38wps S:59ms

[00:32:14:19 --> 00:32:18:02] Eu quero também colocar aqui, conectar uma IA de imagem,
#KAIROS E:0.0558 Pk:0.4041 Ph:0.0Hz V:0.0Hz R:2.89wps S:1671ms

[00:32:18:10 --> 00:32:19:21] para gerar imagem para mim.
#KAIROS E:0.0484 Pk:0.3537 Ph:0.0Hz V:0.0Hz R:3.68wps S:259ms

[00:32:19:22 --> 00:32:20:04] Tem como?
#KAIROS E:0.0354 Pk:0.2085 Ph:0.0Hz V:0.0Hz R:5.26wps S:39ms

[00:32:21:18 --> 00:32:22:07] Tem como, cara.
#KAIROS E:0.0158 Pk:0.133 Ph:0.0Hz V:0.0Hz R:4.69wps S:1476ms

[00:32:22:11 --> 00:32:26:12] O bom é que a chave API da OpenAI já vem com...
#KAIROS E:0.0408 Pk:0.3972 Ph:0.0Hz V:0.0Hz R:2.97wps S:139ms

[00:32:27:13 --> 00:32:29:02] o gerador de imagens do ChatGPT.
#KAIROS E:0.0406 Pk:0.3603 Ph:0.0Hz V:0.0Hz R:3.66wps S:1004ms

[00:32:29:10 --> 00:32:31:17] Então, ele já gera imagem para a gente se a gente quiser.
#KAIROS E:0.04 Pk:0.4147 Ph:0.0Hz V:0.0Hz R:5.41wps S:279ms

[00:32:32:00 --> 00:32:34:16] Mas e se eu quiser usar um nanobanana, por exemplo?
#KAIROS E:0.0445 Pk:0.3885 Ph:0.0Hz V:0.0Hz R:3.97wps S:440ms

[00:32:35:02 --> 00:32:37:16] Aí a gente precisa gerar uma chave para o nanobanana.
#KAIROS E:0.0378 Pk:0.539 Ph:0.0Hz V:0.0Hz R:4.1wps S:559ms

[00:32:37:17 --> 00:32:40:25] Posso colocar aqui Gemini API Key,
#KAIROS E:0.0297 Pk:0.3428 Ph:0.0Hz V:0.0Hz R:1.84wps S:59ms

[00:32:40:28 --> 00:32:43:05] ou eu posso colocar aqui, se eu quiser também,
#KAIROS E:0.0517 Pk:0.3791 Ph:0.0Hz V:0.0Hz R:4.05wps S:100ms

[00:32:45:07 --> 00:32:45:20] nanobanana.
#KAIROS E:0.0452 Pk:0.2098 Ph:0.0Hz V:0.0Hz R:2.27wps S:2079ms

[00:32:47:00 --> 00:32:48:16] Banana, banana, API key.
#KAIROS E:0.0277 Pk:0.1911 Ph:0.0Hz V:0.0Hz R:2.6wps S:1323ms

[00:32:48:22 --> 00:32:51:02] Dá para fazer assim também, para poder organizar se quiser.
#KAIROS E:0.0197 Pk:0.1585 Ph:0.0Hz V:0.0Hz R:4.27wps S:179ms

[00:32:51:19 --> 00:32:52:18] Aí o que eu vou fazer?
#KAIROS E:0.0392 Pk:0.4584 Ph:0.0Hz V:0.0Hz R:6.25wps S:559ms

[00:32:53:09 --> 00:32:55:27] Eu vou lá no nosso sistema.
#KAIROS E:0.0284 Pk:0.2312 Ph:0.0Hz V:0.0Hz R:2.31wps S:720ms

[00:32:57:17 --> 00:33:04:00] Tem vários, tá? Tem vários modelos aqui, aí dá para usar nanobanana, dá para usar o Seedream.
#KAIROS E:0.0416 Pk:0.4379 Ph:0.0Hz V:0.0Hz R:2.65wps S:1660ms

[00:33:04:03 --> 00:33:06:12] O Seedream é da dona do TikTok.
#KAIROS E:0.0573 Pk:0.4075 Ph:0.0Hz V:0.0Hz R:3.04wps S:100ms

[00:33:08:29 --> 00:33:10:11] Vamos pegar o Seedream para vocês verem?
#KAIROS E:0.0518 Pk:0.4008 Ph:0.0Hz V:0.0Hz R:4.93wps S:2571ms

[00:33:10:14 --> 00:33:11:29] Acho que o Seedream é de vídeo, né?
#KAIROS E:0.0252 Pk:0.1696 Ph:0.0Hz V:0.0Hz R:5.41wps S:100ms

[00:33:12:01 --> 00:33:12:23] Vou pegar o Seed...
#KAIROS E:0.0389 Pk:0.3118 Ph:0.0Hz V:0.0Hz R:5.56wps S:80ms

[00:33:12:23 --> 00:33:14:28] Não, o Seedream é de imagem e o Seedance que é de vídeo.
#KAIROS E:0.02 Pk:0.1623 Ph:0.0Hz V:0.0Hz R:5.96wps S:0ms

[00:33:15:16 --> 00:33:15:27] Aqui, ó.
#KAIROS E:0.0069 Pk:0.0748 Ph:0.0Hz V:0.0Hz R:5.56wps S:600ms

[00:33:15:27 --> 00:33:16:22] O Seedream é muito bom.
#KAIROS E:0.0355 Pk:0.2845 Ph:0.0Hz V:0.0Hz R:6.1wps S:19ms

[00:33:17:12 --> 00:33:19:15] Vamos pegar o do Seedream.
#KAIROS E:0.0392 Pk:0.3446 Ph:0.0Hz V:0.0Hz R:2.4wps S:679ms

[00:33:20:00 --> 00:33:21:17] Aqui embaixo, quando eu entro na página,
#KAIROS E:0.0551 Pk:0.479 Ph:0.0Hz V:0.0Hz R:4.55wps S:519ms

[00:33:21:20 --> 00:33:24:02] olha, eu digitei seed.bytedance.com.
#KAIROS E:0.0351 Pk:0.3288 Ph:0.0Hz V:0.0Hz R:1.67wps S:119ms

[00:33:24:09 --> 00:33:25:09] Bytedance é a dona do TikTok.
#KAIROS E:0.0259 Pk:0.1973 Ph:0.0Hz V:0.0Hz R:6.0wps S:220ms

[00:33:25:20 --> 00:33:26:26] Ou vocês podem vir aqui, ó.
#KAIROS E:0.0383 Pk:0.2771 Ph:0.0Hz V:0.0Hz R:5.0wps S:379ms

[00:33:26:29 --> 00:33:29:00] Seedream 4.0, Bytedance Seed.
#KAIROS E:0.0307 Pk:0.2716 Ph:0.0Hz V:0.0Hz R:1.98wps S:100ms

[00:33:30:05 --> 00:33:32:01] Aí a gente vai clicar aqui embaixo, escondido,
#KAIROS E:0.0488 Pk:0.4021 Ph:0.0Hz V:0.0Hz R:4.3wps S:1175ms

[00:33:32:01 --> 00:33:33:17] em Get API Key.
#KAIROS E:0.036 Pk:0.2606 Ph:0.0Hz V:0.0Hz R:2.63wps S:0ms

[00:33:35:23 --> 00:33:37:13] Eu ia pegar um nano banana, mas eu vou pegar essa daqui.
#KAIROS E:0.049 Pk:0.3174 Ph:0.0Hz V:0.0Hz R:7.23wps S:2220ms

[00:33:40:10 --> 00:33:41:07] Eu vou criar minha conta.
#KAIROS E:0.0685 Pk:0.4966 Ph:0.0Hz V:0.0Hz R:5.56wps S:2915ms

[00:33:43:23 --> 00:33:44:04] Sign up.
#KAIROS E:0.0228 Pk:0.155 Ph:0.0Hz V:0.0Hz R:5.56wps S:2523ms

[00:33:47:29 --> 00:33:48:28] Continua com o Google.
#KAIROS E:0.0187 Pk:0.0974 Ph:0.0Hz V:0.0Hz R:4.17wps S:3831ms

[00:33:59:24 --> 00:34:00:20] Vai logar aqui para mim.
#KAIROS E:0.0368 Pk:0.2466 Ph:0.0Hz V:0.0Hz R:5.81wps S:10880ms

[00:34:02:12 --> 00:34:04:05] Aceito enviar meus dados para a China.
#KAIROS E:0.0231 Pk:0.164 Ph:0.0Hz V:0.0Hz R:3.98wps S:1731ms

[00:34:09:22 --> 00:34:12:16] Agora eu vou voltar lá para ver se vai funcionar.
#KAIROS E:0.0403 Pk:0.321 Ph:0.0Hz V:0.0Hz R:3.55wps S:5568ms

[00:34:12:22 --> 00:34:13:14] Se drear.
#KAIROS E:0.0035 Pk:0.0275 Ph:0.0Hz V:0.0Hz R:2.7wps S:180ms

[00:34:16:08 --> 00:34:17:16] Já está no 4.5 já.
#KAIROS E:0.0248 Pk:0.2622 Ph:0.0Hz V:0.0Hz R:3.91wps S:2788ms

[00:34:18:03 --> 00:34:18:23] Get API.
#KAIROS E:0.035 Pk:0.3097 Ph:0.0Hz V:0.0Hz R:3.03wps S:579ms

[00:34:21:13 --> 00:34:24:04] Aí ele me levou para o console, então aqui, BytePlus, console.
#KAIROS E:0.0386 Pk:0.3711 Ph:0.0Hz V:0.0Hz R:4.07wps S:2664ms

[00:34:24:23 --> 00:34:27:06] Estou aqui no console, confirmo que eu tenho 18 anos.
#KAIROS E:0.0362 Pk:0.2759 Ph:0.0Hz V:0.0Hz R:4.1wps S:619ms

[00:34:27:25 --> 00:34:28:06] Beleza.
#KAIROS E:0.0516 Pk:0.2276 Ph:0.0Hz V:0.0Hz R:2.78wps S:639ms

[00:34:28:07 --> 00:34:30:12] O legal é que o console tem essa área aqui
#KAIROS E:0.0604 Pk:0.3611 Ph:0.0Hz V:0.0Hz R:4.63wps S:39ms

[00:34:30:12 --> 00:34:31:25] se eu quiser gerar imagens aqui também,
#KAIROS E:0.0347 Pk:0.2863 Ph:0.0Hz V:0.0Hz R:4.86wps S:0ms

[00:34:31:28 --> 00:34:33:08] mas nós queremos aqui em cima, olha.
#KAIROS E:0.0193 Pk:0.1372 Ph:0.0Hz V:0.0Hz R:5.3wps S:100ms

[00:34:34:16 --> 00:34:35:21] Access API Key.
#KAIROS E:0.0314 Pk:0.2881 Ph:0.0Hz V:0.0Hz R:2.54wps S:1280ms

[00:34:35:26 --> 00:34:37:03] É isso aqui que nós queremos pegar.
#KAIROS E:0.013 Pk:0.1194 Ph:0.0Hz V:0.0Hz R:5.56wps S:140ms

[00:34:37:11 --> 00:34:38:11] Então, eu vou clicar aqui.
#KAIROS E:0.0459 Pk:0.3587 Ph:0.0Hz V:0.0Hz R:5.0wps S:260ms

[00:34:38:17 --> 00:34:40:24] Quando eu clicar em gerar, ele vai gerar para mim,
#KAIROS E:0.0476 Pk:0.3394 Ph:0.0Hz V:0.0Hz R:4.5wps S:199ms

[00:34:40:26 --> 00:34:41:29] e aí eu pego a API.
#KAIROS E:0.046 Pk:0.2586 Ph:0.0Hz V:0.0Hz R:5.45wps S:80ms

[00:34:42:03 --> 00:34:43:29] Vou digitar aqui Business OS.
#KAIROS E:0.0179 Pk:0.1713 Ph:0.0Hz V:0.0Hz R:2.66wps S:119ms

[00:34:46:25 --> 00:34:49:17] E aí eu vou clicar aqui para puxar isso.
#KAIROS E:0.0203 Pk:0.2223 Ph:0.0Hz V:0.0Hz R:3.31wps S:2867ms

[00:34:49:20 --> 00:34:50:21] No caso...
#KAIROS E:0.0402 Pk:0.425 Ph:0.0Hz V:0.0Hz R:1.96wps S:100ms

[00:34:51:29 --> 00:34:53:10] Eu vou colocar essa chave API.
#KAIROS E:0.038 Pk:0.3168 Ph:0.0Hz V:0.0Hz R:4.35wps S:1279ms

[00:34:55:11 --> 00:34:55:24] Nooooo
#KAIROS E:0.0268 Pk:0.096 Ph:0.0Hz V:0.0Hz R:2.27wps S:2012ms

[00:34:57:26 --> 00:34:59:08] Tem crédito gratuito, tá, inclusive.
#KAIROS E:0.038 Pk:0.2521 Ph:0.0Hz V:0.0Hz R:3.57wps S:2056ms

[00:34:59:17 --> 00:35:03:08] Vocês conseguem aí colocar créditos gratuitos no Seedream
#KAIROS E:0.0209 Pk:0.1515 Ph:0.0Hz V:0.0Hz R:2.16wps S:300ms

[00:35:03:08 --> 00:35:04:26] para usar algumas imagens de graça.
#KAIROS E:0.0215 Pk:0.1937 Ph:0.0Hz V:0.0Hz R:3.75wps S:0ms

[00:35:06:20 --> 00:35:07:25] Deixa eu só ver aqui.
#KAIROS E:0.0118 Pk:0.0807 Ph:0.0Hz V:0.0Hz R:4.24wps S:1800ms

[00:35:15:29 --> 00:35:16:24] Que ele está falando aqui.
#KAIROS E:0.0138 Pk:0.0926 Ph:0.0Hz V:0.0Hz R:6.1wps S:8132ms

[00:35:17:05 --> 00:35:18:02] Automatic Pause.
#KAIROS E:0.0065 Pk:0.0501 Ph:0.0Hz V:0.0Hz R:2.22wps S:380ms

[00:35:23:14 --> 00:35:24:20] Acho que nesse aqui...
#KAIROS E:0.0195 Pk:0.1701 Ph:0.0Hz V:0.0Hz R:3.28wps S:5388ms

[00:35:25:08 --> 00:35:28:16] Ah, ele está falando que quando bater a cota...
#KAIROS E:0.0362 Pk:0.4012 Ph:0.0Hz V:0.0Hz R:2.76wps S:599ms

[00:35:33:27 --> 00:35:34:13] Please enter.
#KAIROS E:0.0098 Pk:0.0523 Ph:0.0Hz V:0.0Hz R:3.57wps S:5351ms

[00:35:34:25 --> 00:35:38:13] Quando bater a cota, ele vai começar a usar.
#KAIROS E:0.0328 Pk:0.2683 Ph:0.0Hz V:0.0Hz R:2.5wps S:380ms

[00:35:39:05 --> 00:35:42:01] Aí vai ter que colocar o cartão também.
#KAIROS E:0.0232 Pk:0.2636 Ph:0.0Hz V:0.0Hz R:2.8wps S:740ms

[00:35:42:03 --> 00:35:43:12] Vai ser chato eu fazer no Cdream.
#KAIROS E:0.0128 Pk:0.1191 Ph:0.0Hz V:0.0Hz R:5.3wps S:59ms

[00:35:44:10 --> 00:35:45:10] Na verdade, é fácil.
#KAIROS E:0.0569 Pk:0.4313 Ph:0.0Hz V:0.0Hz R:4.0wps S:940ms

[00:35:45:13 --> 00:35:47:01] Só que eu vou ter que ficar cadastrando cartão aqui.
#KAIROS E:0.0243 Pk:0.2209 Ph:0.0Hz V:0.0Hz R:6.25wps S:79ms

[00:35:47:14 --> 00:35:48:15] Então, eu vou fazer o seguinte.
#KAIROS E:0.0299 Pk:0.2314 Ph:0.0Hz V:0.0Hz R:5.77wps S:440ms

[00:35:48:21 --> 00:35:49:18] Ao invés de fazer no Cdream,
#KAIROS E:0.0126 Pk:0.0903 Ph:0.0Hz V:0.0Hz R:6.52wps S:180ms

[00:35:50:07 --> 00:35:51:14] vocês podem fazer o que quiser.
#KAIROS E:0.0303 Pk:0.2488 Ph:0.0Hz V:0.0Hz R:4.84wps S:620ms

[00:35:51:22 --> 00:35:52:18] Eu caminho aquele ali,
#KAIROS E:0.0327 Pk:0.2852 Ph:0.0Hz V:0.0Hz R:4.76wps S:280ms

[00:35:52:21 --> 00:35:54:13] depois vocês geram o cartão e funciona.
#KAIROS E:0.0238 Pk:0.1949 Ph:0.0Hz V:0.0Hz R:4.02wps S:100ms

[00:35:54:24 --> 00:35:57:01] Eu vou voltar com a ideia aqui do...
#KAIROS E:0.0249 Pk:0.2061 Ph:0.0Hz V:0.0Hz R:3.57wps S:380ms

[00:35:59:18 --> 00:36:03:05] do Google, que vai funcionar para a gente.
#KAIROS E:0.0171 Pk:0.2365 Ph:0.0Hz V:0.0Hz R:2.25wps S:2568ms

[00:36:04:00 --> 00:36:06:13] Do Google é só ir lá em Chaves API de novo,
#KAIROS E:0.0481 Pk:0.3434 Ph:0.0Hz V:0.0Hz R:4.51wps S:820ms

[00:36:06:16 --> 00:36:07:21] lembra que a gente estava aqui?
#KAIROS E:0.0218 Pk:0.2007 Ph:0.0Hz V:0.0Hz R:5.17wps S:100ms

[00:36:08:01 --> 00:36:09:24] A gente já gerou esse Business OS.
#KAIROS E:0.0386 Pk:0.343 Ph:0.0Hz V:0.0Hz R:3.93wps S:340ms

[00:36:10:09 --> 00:36:12:22] Você pode tanto usar ela, se você quiser,
#KAIROS E:0.0485 Pk:0.3462 Ph:0.0Hz V:0.0Hz R:3.31wps S:500ms

[00:36:13:11 --> 00:36:15:11] quanto também pode gerar uma nova.
#KAIROS E:0.0501 Pk:0.3026 Ph:0.0Hz V:0.0Hz R:3.03wps S:639ms

[00:36:15:24 --> 00:36:17:27] Pode gerar uma nova aqui só para a imagem, se quiser,
#KAIROS E:0.0367 Pk:0.2655 Ph:0.0Hz V:0.0Hz R:5.24wps S:440ms

[00:36:18:03 --> 00:36:21:16] que aí você consegue gerenciar o custo de cada uma.
#KAIROS E:0.0323 Pk:0.3132 Ph:0.0Hz V:0.0Hz R:2.91wps S:200ms

[00:36:23:11 --> 00:36:26:11] Como ela já está conectada aqui, eu vou tentar conectar ali sem ter que gerar uma nova.
#KAIROS E:0.0331 Pk:0.2948 Ph:0.0Hz V:0.0Hz R:5.63wps S:1824ms

[00:36:27:03 --> 00:36:30:10] Vamos ver o que acontece, se ele vai conseguir fazer para funcionar com a imagem também.
#KAIROS E:0.0111 Pk:0.1025 Ph:0.0Hz V:0.0Hz R:4.94wps S:719ms

[00:36:31:29 --> 00:36:33:06] E o bichinho está trabalhando.
#KAIROS E:0.0259 Pk:0.1632 Ph:0.0Hz V:0.0Hz R:4.03wps S:1628ms

[00:36:35:07 --> 00:36:37:07] Agora ele está finalizando, todos os agentes concluíram.
#KAIROS E:0.0199 Pk:0.2346 Ph:0.0Hz V:0.0Hz R:3.96wps S:2023ms

[00:36:40:07 --> 00:36:43:21] Basicamente então, só para recapitular aqui para vocês, como eu mudei de ideia.
#KAIROS E:0.0269 Pk:0.3011 Ph:0.0Hz V:0.0Hz R:3.74wps S:2971ms

[00:36:45:09 --> 00:36:47:10] Basicamente, a gente conectou aqui, então,
#KAIROS E:0.0413 Pk:0.4484 Ph:0.0Hz V:0.0Hz R:2.94wps S:1608ms

[00:36:47:14 --> 00:36:48:19] tira esse nano banana,
#KAIROS E:0.0141 Pk:0.0995 Ph:0.0Hz V:0.0Hz R:3.45wps S:119ms

[00:36:49:21 --> 00:36:52:12] nós conectamos a API do Google,
#KAIROS E:0.0356 Pk:0.2933 Ph:0.0Hz V:0.0Hz R:2.22wps S:1079ms

[00:36:52:18 --> 00:36:55:13] que é o Google Generative API Key.
#KAIROS E:0.0271 Pk:0.1731 Ph:0.0Hz V:0.0Hz R:2.45wps S:180ms

[00:36:55:18 --> 00:36:58:16] Essa daqui já serve, inclusive, para o nano banana,
#KAIROS E:0.0332 Pk:0.3138 Ph:0.0Hz V:0.0Hz R:3.06wps S:140ms

[00:36:58:22 --> 00:37:00:07] não precisa gerar outra para o nano banana, não.
#KAIROS E:0.0157 Pk:0.1355 Ph:0.0Hz V:0.0Hz R:6.0wps S:200ms

[00:37:00:14 --> 00:37:02:03] E nós conectamos a da OpenAI.
#KAIROS E:0.0466 Pk:0.3678 Ph:0.0Hz V:0.0Hz R:3.66wps S:239ms

[00:37:02:13 --> 00:37:04:00] Não conectamos a da Anthrop,
#KAIROS E:0.0403 Pk:0.3424 Ph:0.0Hz V:0.0Hz R:3.16wps S:319ms

[00:37:04:01 --> 00:37:05:05] que quem quiser usar o Cloud,
#KAIROS E:0.044 Pk:0.2957 Ph:0.0Hz V:0.0Hz R:5.36wps S:39ms

[00:37:05:07 --> 00:37:06:26] eu vou mostrar aqui porque é muito fácil, tá?
#KAIROS E:0.0251 Pk:0.2426 Ph:0.0Hz V:0.0Hz R:5.56wps S:79ms

[00:37:06:28 --> 00:37:08:16] Então, já vou mostrar de uma vez.
#KAIROS E:0.018 Pk:0.1783 Ph:0.0Hz V:0.0Hz R:4.32wps S:59ms

[00:37:08:22 --> 00:37:10:17] Vocês vão logar aqui no Cloud Console
#KAIROS E:0.0487 Pk:0.3769 Ph:0.0Hz V:0.0Hz R:3.85wps S:200ms

[00:37:10:17 --> 00:37:12:15] com a mesma conta do Cloud de vocês.
#KAIROS E:0.0303 Pk:0.2292 Ph:0.0Hz V:0.0Hz R:4.17wps S:0ms

[00:37:12:23 --> 00:37:14:00] Então, pode logar aí.
#KAIROS E:0.0315 Pk:0.1954 Ph:0.0Hz V:0.0Hz R:3.28wps S:280ms

[00:37:16:22 --> 00:37:18:04] E depois que você logar...
#KAIROS E:0.055 Pk:0.3692 Ph:0.0Hz V:0.0Hz R:3.57wps S:2744ms

[00:37:20:09 --> 00:37:23:28] Ele entrou nessa plataforma toda, inclusive tem muita coisa legal aqui.
#KAIROS E:0.0368 Pk:0.2999 Ph:0.0Hz V:0.0Hz R:3.04wps S:2183ms

[00:37:24:01 --> 00:37:25:16] Estou com 3 dólares aqui para usar.
#KAIROS E:0.0188 Pk:0.1208 Ph:0.0Hz V:0.0Hz R:4.67wps S:99ms

[00:37:26:03 --> 00:37:27:06] O que eu vou fazer agora?
#KAIROS E:0.0772 Pk:0.5306 Ph:0.0Hz V:0.0Hz R:5.45wps S:559ms

[00:37:27:09 --> 00:37:28:29] Eu vou vir aqui do lado em chaves de API.
#KAIROS E:0.0549 Pk:0.4168 Ph:0.0Hz V:0.0Hz R:6.1wps S:119ms

[00:37:29:21 --> 00:37:33:00] E aqui em chaves de API, eu vou clicar em criar uma chave.
#KAIROS E:0.0417 Pk:0.4118 Ph:0.0Hz V:0.0Hz R:3.94wps S:739ms

[00:37:33:01 --> 00:37:33:21] Coloco o nome.
#KAIROS E:0.0498 Pk:0.2748 Ph:0.0Hz V:0.0Hz R:4.41wps S:39ms

[00:37:34:03 --> 00:37:36:09] Isso aqui é em quanto tempo a chave expira.
#KAIROS E:0.0372 Pk:0.3821 Ph:0.0Hz V:0.0Hz R:4.09wps S:380ms

[00:37:36:09 --> 00:37:39:03] Você pode colocar nunca ou depois de X dias.
#KAIROS E:0.0279 Pk:0.2557 Ph:0.0Hz V:0.0Hz R:3.21wps S:0ms

[00:37:39:11 --> 00:37:41:08] Isso aqui é legal por segurança também.
#KAIROS E:0.0507 Pk:0.429 Ph:0.0Hz V:0.0Hz R:3.65wps S:260ms

[00:37:41:14 --> 00:37:43:03] Vai que se você...
#KAIROS E:0.0345 Pk:0.233 Ph:0.0Hz V:0.0Hz R:2.44wps S:200ms

[00:37:44:14 --> 00:37:47:15] Se você não sabe se a sua chave pode vazar ou não,
#KAIROS E:0.0463 Pk:0.4153 Ph:0.0Hz V:0.0Hz R:3.95wps S:1360ms

[00:37:47:18 --> 00:37:50:01] se você acha que ela vazou, deleta e cria outra.
#KAIROS E:0.0545 Pk:0.4984 Ph:0.0Hz V:0.0Hz R:4.13wps S:99ms

[00:37:50:14 --> 00:37:53:04] Se você quer de tempo em tempo fazer esse check-up de segurança,
#KAIROS E:0.0353 Pk:0.3636 Ph:0.0Hz V:0.0Hz R:4.48wps S:420ms

[00:37:53:10 --> 00:37:55:25] coloca para ela inspirar depois de determinado tempo.
#KAIROS E:0.0364 Pk:0.2555 Ph:0.0Hz V:0.0Hz R:3.2wps S:199ms

[00:37:56:01 --> 00:37:57:24] Que aí, de certo dia, você vai usar o sistema,
#KAIROS E:0.0482 Pk:0.3916 Ph:0.0Hz V:0.0Hz R:5.62wps S:200ms

[00:37:57:26 --> 00:37:59:24] não vai conseguir, vai ter que clicar e conectar de novo.
#KAIROS E:0.0268 Pk:0.2962 Ph:0.0Hz V:0.0Hz R:5.73wps S:60ms

[00:38:00:01 --> 00:38:01:14] Só é chato, mas tem como fazer.
#KAIROS E:0.0227 Pk:0.2151 Ph:0.0Hz V:0.0Hz R:4.93wps S:240ms

[00:38:01:20 --> 00:38:04:05] E ele deixa o nunca vermelho, porque é uma recomendação
#KAIROS E:0.0473 Pk:0.2915 Ph:0.0Hz V:0.0Hz R:4.03wps S:219ms

[00:38:04:05 --> 00:38:07:14] nunca usar o nunca, não usar o nunca aqui.
#KAIROS E:0.0251 Pk:0.2248 Ph:0.0Hz V:0.0Hz R:2.73wps S:0ms

[00:38:07:21 --> 00:38:10:23] No caso, eu não vou gerar nenhuma chave do Cloud,
#KAIROS E:0.0363 Pk:0.4424 Ph:0.0Hz V:0.0Hz R:3.25wps S:239ms

[00:38:10:27 --> 00:38:13:03] porque a gente vai usar a chave do chat GPT
#KAIROS E:0.0232 Pk:0.1838 Ph:0.0Hz V:0.0Hz R:4.5wps S:120ms

[00:38:13:03 --> 00:38:14:09] que a gente acabou de conectar.
#KAIROS E:0.0103 Pk:0.0958 Ph:0.0Hz V:0.0Hz R:5.08wps S:0ms

[00:38:15:15 --> 00:38:16:14] Volto para cá para o sistema.
#KAIROS E:0.0345 Pk:0.2824 Ph:0.0Hz V:0.0Hz R:6.12wps S:1188ms

[00:38:18:13 --> 00:38:18:23] E agora?
#KAIROS E:0.0368 Pk:0.2504 Ph:0.0Hz V:0.0Hz R:5.88wps S:1963ms

[00:38:20:19 --> 00:38:22:06] Vamos ver aqui se ele já terminou.
#KAIROS E:0.0274 Pk:0.1982 Ph:0.0Hz V:0.0Hz R:4.43wps S:1867ms

[00:38:23:15 --> 00:38:24:28] Tudo no lugar principal, beleza?
#KAIROS E:0.0524 Pk:0.3646 Ph:0.0Hz V:0.0Hz R:3.42wps S:1268ms

[00:38:25:25 --> 00:38:26:28] Lendo os arquivos.
#KAIROS E:0.0238 Pk:0.1985 Ph:0.0Hz V:0.0Hz R:2.73wps S:900ms

[00:38:27:26 --> 00:38:29:19] Eu vou falar, já vou começar a escrever, olha.
#KAIROS E:0.0378 Pk:0.3094 Ph:0.0Hz V:0.0Hz R:5.06wps S:920ms

[00:38:30:16 --> 00:38:31:06] Já conectei.
#KAIROS E:0.0477 Pk:0.4709 Ph:0.0Hz V:0.0Hz R:2.94wps S:880ms

[00:38:33:05 --> 00:38:39:12] API do Google e já conectei a API do Google.
#KAIROS E:0.0293 Pk:0.5181 Ph:0.0Hz V:0.0Hz R:1.61wps S:1975ms

[00:38:41:02 --> 00:38:41:25] Xaxe PT.
#KAIROS E:0.0373 Pk:0.3276 Ph:0.0Hz V:0.0Hz R:2.56wps S:1652ms

[00:38:44:27 --> 00:38:47:20] Conecte agora ao sistema.
#KAIROS E:0.0259 Pk:0.2799 Ph:0.0Hz V:0.0Hz R:1.44wps S:3059ms

[00:38:49:20 --> 00:38:52:26] Ele falou, ó, aplicar a migration, essa migração aqui, ele que faz.
#KAIROS E:0.0576 Pk:0.519 Ph:0.0Hz V:0.0Hz R:3.75wps S:1987ms

[00:38:54:18 --> 00:38:56:22] Aplique a migration você.
#KAIROS E:0.0161 Pk:0.222 Ph:0.0Hz V:0.0Hz R:1.87wps S:1728ms

[00:38:57:05 --> 00:38:59:27] E depois a gente tem que, como nós estamos mexendo com variáveis de ambiente,
#KAIROS E:0.0421 Pk:0.3367 Ph:0.0Hz V:0.0Hz R:5.15wps S:440ms

[00:39:00:02 --> 00:39:02:07] a gente tem que fechar o servidor e abrir de novo, tá?
#KAIROS E:0.0368 Pk:0.2499 Ph:0.0Hz V:0.0Hz R:5.5wps S:180ms

[00:39:02:10 --> 00:39:03:06] Senão ele não vai funcionar.
#KAIROS E:0.0159 Pk:0.1956 Ph:0.0Hz V:0.0Hz R:5.68wps S:79ms

[00:39:03:25 --> 00:39:06:28] Mas beleza, aqui está certo, as chaves API a gente já pegou também,
#KAIROS E:0.0312 Pk:0.2746 Ph:0.0Hz V:0.0Hz R:4.19wps S:639ms

[00:39:07:06 --> 00:39:07:26] backfill, ok.
#KAIROS E:0.0249 Pk:0.2027 Ph:0.0Hz V:0.0Hz R:2.94wps S:240ms

[00:39:08:19 --> 00:39:12:05] Além disso, pmpmdev, acesso principal e as respostas já viram ancoradas.
#KAIROS E:0.0255 Pk:0.2042 Ph:0.0Hz V:0.0Hz R:3.11wps S:760ms

[00:39:13:22 --> 00:39:18:00] Aproveita e adiciona um button para gerar...
#KAIROS E:0.0261 Pk:0.2862 Ph:0.0Hz V:0.0Hz R:1.64wps S:1559ms

[00:39:18:00 --> 00:39:20:21] Ah, isso aqui vai gastar tempo agora, a gente faz daqui a pouco.
#KAIROS E:0.0354 Pk:0.3917 Ph:0.0Hz V:0.0Hz R:4.81wps S:0ms

[00:39:20:28 --> 00:39:22:14] Vamos primeiro fazer funcionar isso aqui.
#KAIROS E:0.0166 Pk:0.1695 Ph:0.0Hz V:0.0Hz R:3.95wps S:239ms

[00:39:25:19 --> 00:39:27:06] provavelmente já dá para ver as páginas.
#KAIROS E:0.0291 Pk:0.1591 Ph:0.0Hz V:0.0Hz R:4.43wps S:3160ms

[00:39:28:11 --> 00:39:29:05] A página principal.
#KAIROS E:0.0311 Pk:0.3028 Ph:0.0Hz V:0.0Hz R:3.75wps S:1172ms

[00:39:29:29 --> 00:39:31:06] Vamos ver como é que ele fez.
#KAIROS E:0.0155 Pk:0.119 Ph:0.0Hz V:0.0Hz R:5.65wps S:780ms

[00:39:32:16 --> 00:39:32:26] Deu errado.
#KAIROS E:0.0228 Pk:0.1127 Ph:0.0Hz V:0.0Hz R:6.25wps S:1340ms

[00:39:34:07 --> 00:39:35:09] Tem que esperar ele terminar, então.
#KAIROS E:0.0272 Pk:0.1826 Ph:0.0Hz V:0.0Hz R:5.56wps S:1375ms

[00:39:35:18 --> 00:39:39:24] Vamos esperar ele acabar e a gente vê a página principal, como é que ficou, a página da IA.
#KAIROS E:0.0293 Pk:0.3388 Ph:0.0Hz V:0.0Hz R:4.52wps S:280ms

