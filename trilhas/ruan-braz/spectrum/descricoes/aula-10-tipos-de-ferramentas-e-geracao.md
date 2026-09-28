# Tipos de Ferramentas e Ferramentas de Geração de Imagens

**Tempo estimado de leitura:** 19 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os quatro tipos principais de ferramentas de IA para geração de imagem e o papel de cada tipo
- Distinguir entre modelos text-to-image, image-to-image, híbridos e multimodais
- Reconhecer as principais ferramentas do mercado em março de 2026 e suas características específicas
- Aplicar leaderboards e arenas de votação para acompanhar a evolução do ranking de ferramentas
- Executar a escolha de ferramentas de acordo com o objetivo e o contexto do projeto
- Estruturar um pack de ferramentas pessoal com critérios claros de custo-benefício e versatilidade

## O Ponto de Partida: Escolher Bem, não Escolher Tudo

O primeiro passo para poder escolher as ferramentas certas para cada contexto é saber quais tipos de ferramentas existem. Com esse mapa em mãos, a pesquisa e a escolha se tornam muito mais eficientes. Esta aula apresenta os tipos, mostra as principais ferramentas do mercado, e encerra com as recomendações pessoais de Ruan para quem está começando.

O ecossistema é enorme. Apenas para contextualizar: entre as ferramentas com maior presença no mercado em março de 2026, estão OpenAI (ChatGPT/Sora), Runway, CREA, Midjourney, Flux, ComfyUI, Leonardo.AI e muitas outras. E ainda não entram nessa lista ferramentas igualmente relevantes como Nanobanana (Imagen do Google), Seedream (C-Dream, da ByteDance) e Seedring (C-Dance, da ByteDance para vídeo). O objetivo desta aula não é cobrir tudo, mas criar o mapa que permite navegar com intenção.

## Os Tipos de Ferramentas

### Tipo 1: Modelos de Geração de Imagem

Os modelos de geração de imagem são a categoria principal quando o foco é criar imagens a partir de prompts. Existem três subtipos, definidos pelo que entra (input) e o que sai (output):

**Text-to-image:** O input é um texto (o prompt) e o output é uma imagem. O usuário descreve o que quer e o modelo gera a imagem. É o modo mais comum e o ponto de entrada para a maioria das pessoas.

**Image-to-image:** O input é uma imagem existente e o output é uma nova imagem gerada a partir dela. O modelo transforma, recria ou expande a imagem de entrada. Muito usado para estilização, variação de estilo, ou geração de imagens coerentes com uma referência visual.

**Híbrido:** Combina texto e imagem como input. O usuário envia uma imagem de referência junto com um prompt de texto, e o modelo usa os dois para gerar o output. O Nanobanana foi mencionado como exemplo de modelo com essa capacidade combinada, demonstrada em aulas anteriores da trilha.

### Tipo 2: Modelos Multimodais

Os modelos multimodais são aqueles que permitem gerar texto, imagem, vídeo e música - ou qualquer combinação desses formatos - dentro de um mesmo ambiente. Exemplos claros:

**Gemini (Google):** Quando você acessa o Gemini, encontra opções diretas de: criar imagem, criar música, escrever algo, me ajude a aprender, organizar meu dia. Além disso, tem integração com NotebookLM, Canva, pesquisa profunda e aprendizado guiado. O Gemini também permite gerar vídeo. É um modelo que começa no texto, mas aceita áudio e imagem como input. Tecnicamente, é um modelo com múltiplos modelos integrados.

**ChatGPT (OpenAI):** Multimodal, com capacidade de adicionar foto, criar imagem, fazer pesquisa profunda, pesquisa de produtos, busca na web. Tem modo agente, adicionar fontes, lousa, integração com Figma, questionários, e suporte a apps adicionais. O ChatGPT não gera vídeo diretamente pelo chat principal (isso fica no Sora, aplicativo separado), mas cobre uma gama ampla de modalidades.

**Claude (Anthropic):** Também multimodal. Foco em conversa, código, escrita e estratégia. Uma decisão de posicionamento importante: Claude lê imagens mas não gera imagens. A Anthropic decidiu não focar na geração de imagem por enquanto, priorizando outras capacidades. Claude lê imagem, interpreta e responde, mas não produz imagens como output.

**Grok (xAI):** Multimodal, inclui geração de imagem. Entrou nos testes de arena de qualidade como um dos competidores relevantes.

Os modelos multimodais têm uma vantagem central: custo-benefício. Em vez de pagar por várias ferramentas especializadas, você usa uma única assinatura para cobrir múltiplas necessidades. O Gemini foi destacado como um dos melhores exemplos dessa proposta de valor.

### Tipo 3: Chatbots Assistenciais com Capacidades Expansivas

Esse tipo é frequentemente confundido com modelos de IA completos, mas é conceitualmente diferente. Um chatbot assistencial é um assistente que você cria ou usa dentro de uma plataforma, com recursos limitados e sem capacidade autônoma agêntica.

**Gems (Gemini):** No Gemini, é possível criar "gems" - assistentes personalizados. Você configura o gem com instruções específicas, e ele deriva outputs a partir do que você envia. Joga um texto, ele deriva. Joga um e-mail, ele gera uma cópia. O gem precisa que você alimente ele com inputs: não age de forma autônoma, não inicia tarefas por conta própria. Dá para conectar APIs nesses assistentes para que acessem outros programas e extraiam informações, mas ainda são limitados em capacidade agêntica.

**GPTs (ChatGPT):** Equivalente dos gems no ChatGPT. Se você tem assinatura, acessa a seção "Explorar GPTs" e pode usar GPTs de outras pessoas ou criar o seu próprio. Um GPT muito conhecido do ecossistema Overlens é o Photoshoot - um GPT criado por Ruan no final de 2023 que escreve prompts para geração de imagens com base em uma estrutura proprietária. O Photoshoot bateu mais de 200 mil conversas no Brasil. Você pode pesquisar por ele no ChatGPT.

A distinção técnica importante: um GPT é um assistente de IA com capacidades reduzidas. Não é um agente. Um agente tem capacidade autônoma de tomar ações, executar tarefas em sequência sem supervisão contínua e operar com lógica de tomada de decisão independente. Um GPT precisa que você mande coisas para ele, responde, e para aí. São ferramentas úteis, especialmente para fluxos repetitivos, mas não devem ser confundidos com agentes de IA.

### Tipo 4: Ferramentas Especializadas

O quarto tipo engloba ferramentas focadas em capacidades específicas de edição e transformação de imagem:

- Aumentar qualidade de imagem (upscale)
- Aumentar o tamanho de uma imagem (enlarge)
- Expandir uma imagem para além das bordas originais (outpainting)
- Remover fundos, elementos ou objetos
- Adicionar movimento a imagens estáticas (animação)
- Ferramentas específicas de vídeo e animação (tratadas em trilha específica de vídeo)

## Recomendações de Março de 2026: O Pack do Professor

Nesta parte da aula, Ruan deixou de lado os tipos e entrou nas recomendações pessoais concretas para quem está começando ou quer otimizar o setup de ferramentas. O contexto: quem está começando, precisa de bom custo-benefício, quer pagar pouco, e já quer conseguir gerar resultados e até monetizar com a ferramenta.

O foco é específico em geração de imagens. Para texto, há uma trilha separada de geração de textos (Sintaxe).

### Primeira Recomendação: Gemini

Ruan abre um Google Docs ao vivo e registra as recomendações enquanto fala. A primeira da lista é o Gemini. Os motivos:

- É um modelo multimodal com LLM de alto nível - frequentemente fica em primeiro lugar nos rankings de raciocínio e qualidade de respostas
- Tem pesquisa muito boa, com capacidade de buscar centenas de fontes (200, 300, 400 fontes) em pesquisas profundas
- Integra o Nanobanana (Imagen do Google) - atualmente um dos melhores modelos de geração de imagem do mundo, que frequentemente disputa o primeiro lugar nas arenas de qualidade

O Nanobanana 2 foi lançado recentemente no momento da gravação, em competição direta com o Seedream 4.5 da ByteDance. No leaderboard de geração de imagens do Hugging Face, o GPT-Image aparecia em primeiro lugar, com Nanobanana em segundo, seguido por Flux e Seedream.

Além do modelo de geração de imagem, com o Gemini assinado você consegue: importar código, usar NotebookLM, adicionar arquivos do Drive, pesquisa profunda com centenas de fontes, e acesso ao Nanobanana para geração de imagens.

Os modelos disponíveis no Gemini incluem: modelo rápido, modelo de raciocínio e modelo pró. Na versão assinada, há acesso a mais capacidades e maiores limites de uso.

### Segunda Recomendação: Freepik

O Freepik é descrito como um hub - uma switch (comutador) de IAs, um único ambiente onde você acessa múltiplos modelos usando os mesmos créditos. Dentro do Freepik:

- Nanobanana 2 (Google): disponível para uso com créditos
- Seedring 5 Lite: disponível
- Outros modelos são adicionados regularmente

A proposta de valor do Freepik é clara: em vez de assinar várias ferramentas individualmente, você paga uma única assinatura e usa vários dos melhores modelos dentro de um ambiente unificado.

Ruan posicionou o uso da seguinte forma: se o foco é estúdio, geração de imagem como atividade principal, e você não precisa de uma LLM para conversa e raciocínio geral, vá para o Freepik. No momento, é a melhor referência nesse perfil de uso.

Analogia oferecida: "Freepik é tipo o YouTube e o Runway é tipo o Vimeo." Freepik tem posicionamento mais amplo e popular; Runway tem posicionamento mais premium e focado em criativos.

### Síntese da Recomendação

Para quem vai escolher apenas uma ferramenta para começar:
1. Se precisa de LLM + geração de imagem: **Gemini**
2. Se o foco é estúdio, geração de imagem: **Freepik**

Se tiver orçamento para dois, use os dois: Gemini para raciocínio, pesquisa e conversa; Freepik como estúdio de imagem.

## As Ferramentas do Mercado: Análise Detalhada

Após as recomendações pessoais, Ruan apresentou a lista preparada pela equipe, organizada por tipo, com análise de cada ferramenta:

### NanoBanana (Imagen do Google)

Atualmente entre os dois melhores modelos de geração de imagem do mundo. Frequentemente fica em primeiro lugar nas arenas de qualidade da comunidade. O Nanobanana 2 foi lançado em competição com o Seedream (ByteDance). Está integrado ao Gemini como ferramenta de geração de imagem, e também disponível no Freepik com créditos. Para uso via API em sistemas próprios, é possível conectar diretamente. Ponto forte: qualidade geral de geração, especialmente em realismo, renderização de materiais e coerência visual.

### Runway

O Runway é um hub com posicionamento premium. Faz muitas campanhas voltadas para criativos, festivais de cinema, projetos artísticos. Ruan acessa o Runway mais para consumir conteúdo e se inspirar do que para usar as ferramentas diretamente. Dentro do Runway existem vários modelos e ferramentas para diferentes tipos de transformação. Tem imagem e vídeo. Vale a pena assinar? Depende do objetivo. A Overlens não assina Runway. Ruan gosta do posicionamento premium, da curadoria de conteúdo criativo que a plataforma faz, mas para geração no dia a dia prefere outras ferramentas.

### Seedream (C-Dream) da ByteDance

O Seedream 4.5 é descrito como absurdo em qualidade. Dentro dos testes realizados por Ruan e para a maioria dos casos, é um dos melhores modelos de geração de imagem do mercado. Mas há um detalhe importante: a ByteDance não criou uma ferramenta própria com interface de usuário para o consumidor final. A empresa fornece API para outras ferramentas utilizarem.

Isso significa que para usar o Seedream, você o encontra dentro de hubs como o Freepik. A GetAPI (get.c-dream.ai) permite conectar o modelo em sistemas próprios via API, com pagamento conforme uso. Para uso agentico ou via código, conectar a API do Seedream é uma opção poderosa.

O C-Dance é o modelo de geração de vídeo da ByteDance, irmão do C-Dream para imagem. Será abordado na parte da trilha dedicada a vídeo.

O site do Seedream por si só já é uma referência visual: as imagens que eles mostram têm contraste e iluminação muito característicos, que Ruan aprecia especialmente. É uma boa fonte de referência estética mesmo para quem não vai usar o modelo diretamente.

### Flux (Black Forest Labs)

O Flux é famoso por uma característica específica: é gratuito. Amplamente disponível em ferramentas de vibe coding e em APIs, o Flux tem uma presença enorme no ecossistema de desenvolvimento. Quem constrói aplicativos com geração de imagem frequentemente começa com o Flux pela facilidade de acesso gratuito.

Para experimentar sem custo, o CREA é um hub que inclui o Flux e permite começar de graça. O CREA funciona no modelo freemium: gratuito para começar, com opção de assinar. O Flux é uma das IAs mais usadas gratuitamente para geração de imagem.

### ChatGPT / GPT-Image (OpenAI)

No momento da gravação, o GPT-Image estava em primeiro lugar no Arena AI (arena de votação da comunidade) com o maior score entre os modelos de geração de imagem. Na análise do leaderboard de geração de imagens do Hugging Face, também aparecia no topo.

Uma funcionalidade interessante: você pode usar o GPT diretamente no Sora (o aplicativo da OpenAI para imagem e vídeo). No Sora existe um feed da comunidade, onde você vê o que outras pessoas estão gerando. É quase uma rede social de imagens e vídeos gerados por IA.

Para código, o GPT também tem o Codex, que vai competir fortemente nesse mercado. Quem quer uma única ferramenta que seja forte em geração de imagem E em código, o GPT pode ser mais interessante do que o Gemini nesse aspecto específico.

### QWen (da Alibaba/China)

A QWen funciona como LLM (modelo de linguagem grande) e também permite gerar imagens. Uma das vantagens dos modelos chineses é o preço: geralmente são gratuitos ou mais baratos do que os ocidentais. Isso os torna interessantes como alternativas de custo mais baixo para quem quer acesso a múltiplas ferramentas sem aumentar muito o orçamento.

### Midjourney

O Midjourney é um favorito pessoal da equipe Overlens, com ressalvas claras. A equipe usa e paga o Midjourney, e tem um grande acervo de imagens geradas na plataforma ao longo de um ano. Mas a recomendação é contextual: se você tiver que assinar apenas uma ferramenta, Midjourney não é a primeira escolha.

O ponto forte do Midjourney é a conveniência operacional: você gerou uma imagem e quer transformá-la em vídeo? É simples, com a opção de "pouco movimento" ou "muito movimento". Ele gera quatro variações de vídeo a partir da imagem. Isso é muito bom para redes sociais quando se quer um fluxo rápido. O vídeo já pode ser baixado diretamente em formato otimizado para redes sociais ("Download Video for Social Media").

Outra vantagem do Midjourney é o sistema de seeds: permite reproduzir resultados com consistência, o que é valioso para projetos que precisam de coerência visual entre múltiplas imagens. A conexão com o Figma também funciona bem.

O Midjourney é focado exclusivamente no visual: imagem, vídeo, mood boards, estilos. É uma ferramenta puramente criativa, sem capacidades de texto ou pesquisa.

### Visual Electric

O Visual Electric ganhou destaque no Brasil em 2024. Ruan e o designer Marcelo Kimura fizeram uma série de workshops de IA para mais de 20 mil pessoas nesse período, e o Visual Electric foi bastante divulgado. O CEO da Visual Electric chegou a entrar em contato com o Kimura para fazer uma parceria, já que o designer estava divulgando muito a ferramenta. O CEO é ex-funcionário da Pentagram, agência americana gigante de design e branding.

Avaliação atual: "Se for assinar uma só, não é a que eu recomendo também." O Freepik tem batido o Visual Electric facilmente em termos de funcionalidades e custo-benefício. Mas tem histórico interessante e fluxos com resources, conhecidos como "flows".

### ReCraft

ReCraft é descrito como a ferramenta para designers gráficos. Os motivos: muitas conveniências para continuar editando a imagem dentro da plataforma (colagem, recorte, mockup), conexão com API, e especialmente a capacidade de criar consistência visual entre imagens - uma característica muito valorizada em projetos de identidade visual e branding.

Para identidade visual, o ReCraft funciona muito bem: você gera imagens com consistência entre si, o que economiza tempo no processo de criação. Para quem trabalha com design gráfico e quer integrar IA ao fluxo de trabalho sem ter que sair constantemente da ferramenta, ReCraft é uma boa escolha.

Para quem está num nível mais avançado de automação, usando agentes e código, pode fazer mais sentido usar a API do ReCraft diretamente dentro dos sistemas do que usar a interface. Mas para quem trabalha manualmente, a experiência direta no ReCraft é muito positiva.

Ressalva: se você é da arquitetura, design de ambientes ou outras áreas que não são design gráfico, o Nanobanana vai funcionar melhor.

### Adobe Firefly

A Adobe está, nas palavras de Ruan, "nos apuros dela". A Adobe reinava absoluta no mercado gráfico e agora enfrenta concorrência de múltiplas frentes. Ruan não lembra a última vez que usou uma ferramenta da Adobe no seu fluxo de trabalho pessoal.

Mas o Firefly tem um caso de uso específico onde faz sentido: quem já assina o pacote Adobe (Photoshop, Illustrator) ganha créditos para usar o Firefly. Se você já paga o Adobe e continua usando no dia a dia, o Firefly é uma mão na roda. Muitas empresas continuam utilizando o Adobe e fazem uso do Firefly integrado ao fluxo já existente.

O Firefly tem moodboards e storyboards, com capacidade de gerar ideações. Tem modelos variados internamente. A limitação: às vezes não entrega o que você quer, precisa de mais iterações, e os modelos mais potentes podem ser caros em créditos.

### Google Labs

Google Labs é um espaço de experimentação do Google com projetos da comunidade e da equipe interna. Ruan recomenda visitar para descobrir possibilidades inusitadas de usar IA.

Um exemplo destacado: um experimento dentro do Google Labs que cria identidades visuais inteiras baseadas em prompts. "Podem ver, muitas empresas vão sair disso aqui." A ferramenta ainda não estava disponível na região do Brasil no momento da gravação, mas funciona com VPN (basta ativar uma VPN e o acesso é liberado).

O Google Labs tem vários projetos assim: ferramentas experimentais que ainda não foram lançadas oficialmente, mas que dão sinais claros do que o futuro próximo vai oferecer.

### Leonardo.AI

O Leonardo.AI está na lista por estar, mas Ruan é honesto: "Para mim, Leonardo.AI está aqui só por estar." Não entra no ecossistema pessoal dele há muito tempo. Mas está evoluindo, cresceu, tem nova identidade visual, e pode fluir bem para alguns usos.

O Leonardo.AI entra na mesma categoria de hubs: Freepik, Runway, Firefly, Leonardo - todos são hubs com vários modelos internos e sistema de créditos. O modelo de negócio é parecido, mas o posicionamento e a qualidade dos modelos disponíveis variam.

## Como Acompanhar o Ranking de Ferramentas

Uma das perguntas mais frequentes é: como saber quais modelos estão sendo melhor avaliados pela comunidade? Ruan apresentou dois recursos práticos:

### Leaderboard de geração de imagens do Hugging Face

Você acessa o leaderboard de geração de imagens do Hugging Face e encontra as arenas de votação. O funcionamento é simples: a plataforma mostra duas imagens geradas por modelos diferentes, sem revelar qual modelo gerou cada uma. Você vota na que considera melhor. Depois da votação, a plataforma revela quais eram os modelos. Com centenas de milhares de votos acumulados, o ranking reflete a preferência da comunidade de forma razoavelmente robusta.

No momento da gravação, o ranking de text-to-image tinha: GPT-Image em primeiro, Nanobanana em segundo, seguido por Flux e Seedream. O Seedream ficava um pouco para trás da preferência da comunidade, apesar de Ruan gostar muito do modelo pessoalmente - o que ilustra que preferências individuais e preferências da comunidade podem divergir.

Importante: não é cravado que o que está em primeiro lugar é necessariamente "o melhor". É a análise de uma comunidade grande, que dá uma perspectiva coletiva. O contexto de uso específico pode mudar a escolha ideal.

### Arena AI

Um segundo recurso mencionado é o Arena AI, com 236 mil votos registrados no momento da consulta. No Arena AI, o GPT-Image também aparecia com maior score. A lista incluía: GPT-Image, Gemini, Grok, e o Seedream (C-Dream) ficava mais abaixo.

Para vídeo, o ranking muda completamente: Sora (OpenAI), Vue, Grok, One lideravam. O Seedance (vídeo da ByteDance) aparecia bem abaixo, contrariando a expectativa de Ruan baseada em testes pessoais - o que mostra que o ranking da comunidade é dinâmico e atualizado com frequência.

Usar esses leaderboards regularmente é uma forma eficiente de acompanhar a evolução do mercado sem precisar testar tudo você mesmo.

## O Modelo é Secundário: O Signo é o que Importa

Ruan encerrou a seção de ferramentas retomando o ponto central que percorre toda a trilha. Em um mundo onde qualquer pessoa pode gerar imagens clicando em um botão, onde todo mundo acessa os mesmos modelos e gera imagens lindas, hiperrealistas, com 3D e luz perfeita - o que vai diferenciar?

"O que vai fazer a diferença é a imagem em si. É o que você escolheu colocar ali dentro."

Aqui você tem dois grupos. O primeiro: pessoas que fazem imagens que prendem, que fazem você falar "eu não consigo sair dessa imagem". O segundo: todo o resto da internet que está clicando em botão e gerando imagem, achando as imagens lindas, estéticas, tudo perfeitinho, o 3D, a luzinha, tudo lindo, hiperrealista, tudo ótimo - mas não engaja ninguém. É genérico. É vazio. É oco.

Dominar os tipos de ferramentas, saber quando usar cada uma, escolher o modelo certo para cada contexto - isso importa. Mas é a segunda camada. A primeira camada é o repertório: saber o que é uma boa imagem, saber qual signo você quer transmitir, saber para qual público você está gerando, saber como o cérebro humano processa o que você criou.

"Gerar imagens melhores é muito mais sobre o seu repertório do que sobre a IA, porque ela consegue fazer tudo."

## Coloque em Prática

Monte o seu pack pessoal de ferramentas com base nas suas necessidades específicas:

1. **Defina o seu perfil:** Você é designer gráfico, arquiteto, criador de conteúdo, produtor de vídeo, ou tem um mix de necessidades? Qual é o volume de geração de imagem que você faz?

2. **Escolha a ferramenta principal de LLM + imagem:** Gemini ou ChatGPT. Leia o que cada um oferece no plano que faz sentido para o seu orçamento. Se precisar de foco em código também, o ChatGPT com Codex é forte nesse aspecto.

3. **Escolha a ferramenta de estúdio:** Freepik é a recomendação para quem quer acesso a múltiplos modelos com uma única assinatura. Midjourney é uma alternativa se você precisa de fluxo rápido de imagem para vídeo.

4. **Acesse um leaderboard esta semana:** Entre no leaderboard de geração de imagens do Hugging Face ou no Arena AI. Vote em pelo menos 10 pares de imagens. Observe qual modelo é revelado como vencedor nos pares que você votou. Isso ajuda a calibrar sua percepção de qualidade em relação à comunidade.

5. **Registre as recomendações:** Elas foram dadas em março de 2026 e serão atualizadas ao longo da trilha. O mercado muda rápido. O que está no topo hoje pode mudar em semanas. O método de acompanhamento (leaderboards + testes pessoais) não muda.
