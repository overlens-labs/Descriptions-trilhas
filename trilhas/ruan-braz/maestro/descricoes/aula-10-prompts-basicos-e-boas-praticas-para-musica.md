# Prompts básicos e boas práticas para música

**Tempo estimado de leitura:** 20 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir prompt de texto corrido de prompt por tags e aplicar o formato correto para geração musical com IA
- Aplicar o template de quatro blocos do Método Maestro para estruturar prompts eficazes no Suno e no Udio
- Identificar e aplicar as técnicas de exclusão de estilos para refinar o resultado gerado pela IA
- Reconhecer os poços de gravidade semânticos das tags musicais e escolher termos que evitem resultados indesejados
- Aplicar os vocabulários de articulação (legato, staccato, pizzicato, tremolo), de dinâmica (crescendo, decrescendo, sforzando, pianíssimo, fortíssimo) e de controle narrativo (marcadores estruturais, modificadores vocais, hacks de pronúncia) para obter controle preciso sobre a geração musical
- Estruturar a narrativa de uma música, com ou sem letra, usando o arco de verso, refrão e ponte como guia para a IA

## Escopo da aula: foco no Suno, foco no processo

Ruan começa com clareza sobre o que esta aula é e o que não é. Este não é uma trilha profissionalizante de produção musical. Não há abertura de DAW, não há plugins avançados, não há configurações técnicas complexas. O foco é o Suno e o processo de criar músicas com qualidade usando boas práticas de prompt que qualquer pessoa pode aplicar desde o primeiro uso.

O Suno é recomendado porque funciona bem para iniciantes, serve igualmente bem para intermediários e avançados, e permite exportar o arquivo MIDI para quem quiser continuar a produção em ambiente profissional com uma DAW. É uma ferramenta que cresce junto com o produtor. Ruan também apresenta o documento chamado "Método Maestro", que é um guia de engenharia de prompt para composição musical com IA que ele desenvolveu e que está disponível na descrição da aula para consulta.

## Por que prompts de música funcionam diferente de prompts de imagem ou texto

Uma das distinções mais práticas da aula é que a forma de escrever prompts para IAs de música é fundamentalmente diferente da forma de escrever prompts para imagem ou texto. Ignorar essa diferença é a causa mais comum de resultados ruins.

Para imagens, é possível escrever em linguagem natural e o modelo interpreta bem. Para texto, o mesmo vale. Para música, texto corrido causa um problema específico e recorrente: a IA pode interpretar as palavras do prompt como parte da letra da música e inserir o texto do prompt no meio do vocal. Ruan descreve o cenário: você pede "uma música que soe como rock antigo misturado com eletrônico" e a IA coloca exatamente essa frase sendo cantada em alguma estrofe. O resultado é o que ele chama de "aberrações".

A solução é usar tags estruturadas no lugar de frases completas. Tags são termos curtos, precisos, geralmente em inglês, separados por vírgula ou em listas. Ao invés de "uma música rock misturada com eletrônico", o prompt correto é "synthwave, heterotech house". O modelo responde muito melhor porque cada tag é processada como um parâmetro musical específico, não como frase a ser interpretada ou cantada.

Ruan explica o mecanismo: os modelos de difusão de áudio foram treinados em corpora de dados musicais onde cada tag tem associações matemáticas muito fortes com determinados padrões sonoros. Uma tag limpa e precisa ativa as conexões certas. Uma frase completa ativa múltiplas conexões simultâneas e produz resultados imprevisíveis.

A recomendação prática de Ruan para quem não sabe quais tags usar: escreva a ideia em linguagem natural, passe para o ChatGPT ou Gemini e peça "transforme isso em tags para prompt de IA de música". A IA intermediária faz a tradução para você. Você então copia as tags e cola no Suno ou no Udio. Funciona muito melhor.

## O template de quatro blocos: Método Maestro

Ruan apresenta a estrutura de prompt mais utilizada por profissionais de produção musical com IA, que ele chama de template de quatro partes ou método dos blocos. A ordem dos blocos não é arbitrária: ela imita o processo de pensamento de um produtor musical ao definir uma faixa do zero.

### Bloco 1: Gênero e formato

Este é o primeiro elemento a escrever no prompt porque define o que Ruan chama de "centro de gravidade" da música. O gênero é o ponto de referência a partir do qual todos os outros elementos são interpretados pelo modelo.

Exemplos ruins de como definir gênero: "uma música que soe como rock antigo misturado com eletrônica" (frase completa, gera ruído no processamento). Exemplos bons: "deep house", "baroque piece", "ambient", "synthwave". Ruan deixa claro que quem tem conhecimento de história da música e de gêneros musicais vai escrever prompts muito mais precisos aqui, porque vai saber os termos exatos que o modelo reconhece como categorias bem definidas.

### Bloco 2: Vocalista

Este bloco orienta o motor de síntese de voz sobre timbre, gênero do cantor e estilo de entrega. O contraste entre forma errada e forma certa é demonstrado diretamente.

Forma errada: "Quero uma mulher cantando de forma muito triste e suave." Essa frase usa muitas palavras para transmitir algo que pode ser dito com três tags. Forma certa: "female vocal, whispered, vocals only" (em português: voz feminina, sussurrada, apenas vocais). Ruan enfatiza que escrever em inglês faz diferença no resultado porque os modelos foram treinados predominantemente em dados em inglês. A orientação é sempre traduzir o prompt para o inglês antes de gerar.

### Bloco 3: Clima e emoção

Este bloco usa adjetivos para direcionar a teoria musical subjacente: as escalas que o modelo vai usar, os acordes, o andamento geral e o caráter emocional da composição. Ruan demonstra o contraste.

Forma errada: "A música deve ter uma vibe bem feliz, mas um pouco sombria." Forma certa: "bold, happy" separado de "dissonant, but euphoric" (usando múltiplas tags que, juntas, criam a tensão emocional desejada). Adjetivos como "triumphant" (triunfante), "melancholic" (melancólico), "ethereal" (etéreo), "dark", "euphoric" são tags de clima que os modelos processam com muito mais precisão do que frases descritivas.

### Bloco 4: Instrumentação

O quarto bloco define os timbres e instrumentos específicos que devem aparecer na faixa. É aqui que o conhecimento de timbres faz diferença direta.

Forma errada: "use sons de computador e bateria forte com baixo." Forma certa: "synth drums, super sol, rolling bass line" (descrevendo o tipo exato de percussão eletrônica, o tipo de lead sintetizado e o padrão de baixo). Ruan reforça que, assim como no bloco de gênero, o repertório técnico melhora diretamente a precisão desta parte do prompt.

A orientação para quem não domina os termos de instrumentação: descreva o que você quer em linguagem natural, passe para uma IA e peça para converter em tags seguindo a estrutura da tabela do Método Maestro.

## Regras sintáticas de tokenização

Ruan apresenta brevemente as regras de sintaxe que ajudam o modelo a processar as tags com mais precisão. O uso de underline em vez de espaço para tags compostas, a separação por vírgula entre tags distintas e a evitar palavras de conexão como artigos e preposições dentro das tags são os pontos principais. Esses detalhes não são obrigatórios para iniciantes, mas fazem diferença em prompts mais avançados.

## Poços de gravidade: por que algumas tags puxam para direções inesperadas

Este é um dos conceitos mais práticos e contraintuitivos da aula. Ruan apresenta o conceito de "poços de gravidade" (gravity wells) no espaço latente dos modelos de geração musical.

A explicação começa com um exemplo real: se um produtor insere a tag "emo metal" com a intenção de gerar uma faixa pesada e agressiva, o resultado frequentemente decepciona, soando como pop emo polido e suave. A razão é matemática: no corpus de treinamento do modelo, a tag "emo" tem bilhões de conexões com pop, piano e melodias suaves. Isso cria um poço de gravidade que puxa o resultado para longe do metal pesado, independentemente da intenção do produtor.

Ruan usa outro exemplo: a tag "black school" pode conectar fortemente com heavy metal e subgêneros extremos, mesmo que o produtor não fosse essa direção. O universo musical é, nas palavras de Ruan, "uma taxonomia bizarra": muitos termos que parecem adjetivos descritivos são na verdade nomes de gêneros inteiros com associações muito específicas nos dados de treinamento.

A implicação prática é dupla. Primeiro: ao escolher tags, é necessário pesquisar se o termo tem um significado técnico fixo na música que possa puxar o resultado na direção errada. Segundo: quando um resultado sai inesperadamente para um estilo diferente, provavelmente existe um poço de gravidade em alguma tag do prompt. A solução é testar termos alternativos para descrever o mesmo conceito e observar como o modelo responde.

Ruan sugere usar a própria IA como parceira nesse processo: copie a tabela de poços de gravidade do documento do Método Maestro, passe para o ChatGPT ou Gemini e peça que ela escreva um prompt para a sua ideia "levando em consideração os poços de gravidade". A IA vai escolher tags que evitem as armadilhas semânticas mais comuns.

## Engenharia de exclusão: o campo "exclude styles" do Suno

A compreensão dos poços de gravidade leva diretamente ao conceito de engenharia de exclusão. Se instruir a IA sobre o que criar é insuficiente, é necessário também instruí-la sobre o que não criar. Para isso, o Suno tem um campo específico chamado "Exclude Styles" dentro das opções avançadas de geração.

Ruan demonstra ao vivo o processo completo de uso da exclusão no Suno. O fluxo é o seguinte:

Primeiro, define-se o objetivo artístico. No exemplo ao vivo: "trance instrumental puro e progressivo." Segundo, define-se o gênero e estilo no campo de tags: "Hype, Nautic Trance, 138 BPM, Super Sound Leads." Ruan digita as tags separadas por vírgula no campo de estilos do Suno. Terceiro, acessa-se o campo de exclusão (More Options > Exclude Styles) e inserem-se as tags que representam o oposto do que se quer: "Vocal, Strap, Dubstep, Pop, Acoustic." Quarto, clica-se em gerar.

Ruan também mostra os outros controles avançados disponíveis no Suno: a opção de escolher voz masculina ou feminina, o modo lírico (com voz cantada) ou não, o controle de "Weirdness" (estranheza, que adiciona elementos inesperados quando aumentado) e o controle de influência de estilo (o quanto o modelo deve seguir fielmente o estilo especificado). Ruan avisa que o Weirdness fica vermelho e começa a produzir resultados estranhos acima de 80, e recomenda manter abaixo desse valor.

A lógica da exclusão é a mesma da técnica fotográfica de recorte: você não apenas enquadra o que quer, você também elimina ativamente o que não quer do frame. Para a IA musical, isso significa que o campo de exclusão funciona como um filtro ativo que remove elementos indesejados do espaço de possibilidades.

## Vocabulário de articulação: ADSR e como descrever a maneira de tocar

Ruan entra em um território mais técnico ao apresentar o vocabulário de articulação musical. A premissa é importante: os modelos generativos de última geração não processam termos de técnica musical apenas como adjetivos estéticos. Eles os traduzem em modificações matemáticas diretas sobre o áudio gerado, alterando parâmetros de ADSR (Ataque, Decay, Sustain, Release).

Ruan explica os dois parâmetros mais relevantes com exemplos sonoros ao vivo. O ataque é a forma como o som começa. Uma guitarra tocada com um plectro rápido tem um ataque curto e percussivo; uma guitarra tocada com arco ou com dedilhado suave tem um ataque lento e gradual. Dois ataques completamente diferentes produzem sons que parecem instrumentos diferentes mesmo usando o mesmo instrumento físico.

O sustain é a duração da nota após o ataque. Uma nota seca tem sustain zero: o som some imediatamente após o ataque. Uma nota sustentada mantém o som por vários segundos. Para comunicar essa diferença à IA em palavras, é necessário usar os termos técnicos corretos.

As técnicas de articulação que Ruan apresenta são seis:

**Legato** (ligado): garante que as notas fluam suavemente de uma para outra, sem silêncio entre elas. É o efeito de um violinista que toca várias notas com um único movimento de arco.

**Staccato**: o oposto do legato. Encurta severamente o decay e o sustain de cada nota, produzindo notas curtas, secas e altamente percussivas. O efeito é de pontuação rítmica.

**Pizzicato**: a técnica de dedilhar as cordas de um instrumento de corda em vez de usar o arco, produzindo um som mais seco e curto.

**Tremolo**: repetição rápida e contínua de uma nota, criando um efeito de vibração ou oscilação.

**Glissando**: deslizamento suave e contínuo de uma nota para outra, passando por todos os tons intermediários. É o efeito de arrastar o dedo pelo harp ou pelo trombône.

**Scoop, Airfall e Mute**: técnicas vocais e instrumentais mais específicas que afetam a forma de ataque e de término de cada nota.

Ruan reconhece abertamente que não decora todos esses termos, mas sabe onde encontrá-los. Essa é, segundo ele, a essência de ser um nexialista: não ser especialista em tudo, mas saber onde buscar a informação certa na hora certa. O documento do Método Maestro concentra esse vocabulário para consulta sempre que necessário.

A dica operacional mais valiosa desta seção: copie o texto do documento sobre vocabulário de articulação, passe para o ChatGPT ou Gemini e peça "escreva um prompt de música seguindo essas técnicas de articulação para a seguinte ideia". A IA vai usar os termos corretos no lugar certo, mesmo que você não os domine ainda.

## Arquitetura de dinâmica e curva de energia

Ruan apresenta o segundo vocabulário técnico da aula: as marcações de dinâmica, que controlam como o volume e a intensidade evoluem ao longo da música. Modelos de difusão de áudio foram treinados com notação musical formal e respondem muito bem a esses termos.

As marcações clássicas de dinâmica de volume são:

**Pianíssimo** (pp): volume muito baixo, quase imperceptível.

**Piano** (p): volume baixo.

**Forte** (f): volume alto.

**Fortíssimo** (ff): volume muito alto, máxima intensidade.

Para descrever como o volume evolui ao longo do tempo, Ruan apresenta três termos de movimento dinâmico:

**Crescendo**: aumento gradual de volume. Produz o efeito de fade-in progressivo, como se a música estivesse ganhando intensidade e chegando ao ouvinte. Ruan descreve tecnicamente: o crescendo atua como uma automação de volume algorítmica ascendente.

**Decrescendo**: o oposto. Redução gradual de volume até o silêncio. Produz o esvaziamento da mixagem, o fade-out. Ruan descreve: o decrescendo adiciona um esvaziamento de mixagem e retorna ao silêncio.

**Sforzando** (sforz): aplica um transiente de ataque fortíssimo instantâneo em uma batida específica. É o efeito de um acento súbito e poderoso em um momento preciso da música, como um bombo explodindo depois de um trecho mais suave.

Ruan destaca que toda essa documentação pode ser passada para a IA para que ela escreva os prompts com esses vocabulários. A lógica é: você fala em linguagem humana o que quer que a música faça ("quero que fique mais intenso no refrão", "quero que termine suavemente"), a IA traduz para a linguagem técnica correta, e você usa essa tradução como prompt para o gerador musical.

O modo mais avançado, para quem usa Claude Code, é baixar o documento completo do Método Maestro, colocar na pasta do projeto e conectar o Claude Code ao Ableton via MCP. Nesse cenário, você diz ao Claude Code em linguagem natural o que quer que a música faça, ele traduz para os parâmetros técnicos corretos e opera a DAW diretamente para implementar as mudanças. Ruan menciona que está explorando isso como hobby.

## Técnica de extensão e refinamento cirúrgico de arranjos

Ruan apresenta uma técnica específica de fluxo de trabalho que profissionais usam com frequência: a extensão segmentada. Em vez de gerar a música inteira de uma vez com um único prompt, o produtor gera a introdução com um prompt específico para aquela seção, valida o resultado, e então usa a função de extensão (Extend) do Suno para continuar a música a partir daquele ponto com um prompt modificado.

A mudança de prompt entre a extensão da introdução e a extensão do refrão é o que cria as mudanças de intensidade e clima que não seriam possíveis de programar de uma vez só. Por exemplo: a introdução pode ser gerada com "slow tempo, ethereal, sparse piano, soft strings." Após validar, o produtor ativa a extensão a partir do último compasso e modifica o prompt para "fast tempo, loud, powerful, full orchestra", forçando uma transição sistêmica de energia que reflete a progressão narrativa da música.

Ruan descreve essa técnica como "refinamento cirúrgico de arranjos": em vez de aceitar o que saiu ou gerar do zero novamente, o produtor vai ajustando seção por seção até que cada parte da música esteja exatamente onde quer. Isso reduz o desperdício de gerações e aumenta o controle.

## Marcadores estruturais e arquitetura de seção na letra

Ruan passa a demonstrar como os marcadores estruturais funcionam na prática dentro do campo de letra do Suno. Para músicas com letra, a estrutura é escrita diretamente no campo "lyrics" do Suno, usando colchetes para indicar cada seção.

Os marcadores apresentados são:

**[intro]**: instrui o modelo a criar uma introdução instrumental ou suave antes da entrada do vocal.

**[verso]** ou **[verse]**: seção de desenvolvimento narrativo. Conta a história da música.

**[pré-coro]** ou **[pre-chorus]**: seção de transição que cria expectativa antes do refrão. Nem toda música precisa ter, mas quando presente, aumenta o impacto do refrão.

**[refrão]** ou **[chorus]** e **[hook]**: o clímax principal da música. É a seção que se repete e que o ouvinte memoriza. O hook é o gancho que traz o ouvinte de volta para a próxima repetição.

**[ponte]** ou **[bridge]**: o ponto de contraste essencial. A ponte desvia matematicamente da progressão de acordes estabelecida até aquele momento, criando um contraste antes do retorno ao refrão final. Ruan destaca que esse desvio é um comando real para o algoritmo, não apenas uma marcação descritiva.

**[outro]**: a saída da música. É o fechamento da narrativa. Ruan mostra sua música "Futuro é Agora" ao vivo e aponta que usou "final" como marcador, mas que o termo correto que prefere atualizar é "outro".

A estrutura clássica mais usada é: intro, verso 1, pré-coro, refrão, verso 2, refrão, ponte, refrão final, outro. Ruan explica que essa arquitetura não é arbitrária: ela existe porque cada seção cumpre uma função específica no arco narrativo emocional da música. Seguir a estrutura não limita a criatividade; ela canaliza a criatividade para onde tem mais impacto.

## Direção vocal: modificadores de entrega e hacks de pronúncia

Ruan apresenta dois recursos adicionais do Método Maestro relacionados ao controle da voz gerada.

Os modificadores de entrega são termos que descrevem como o cantor executa a performance, além do timbre e do gênero. Os exemplos apresentados são: "whispered" (sussurrado), "airy" (suave, etéreo), "belted" (voz de peito, potente), "husky" (voz rouca). Cada um produz uma característica diferente na síntese de voz, mesmo com o mesmo modelo de voz base.

Os hacks de pronúncia são técnicas para corrigir problemas de dicção que surgem quando a IA pronuncia mal palavras específicas. Ruan demonstra com um exemplo real: a palavra "paradoxal" em português era pronunciada de forma errada pelo modelo que estava usando. A solução foi escrever a palavra foneticamente, da forma como ela deve sonar quando lida em voz alta: "paradoxal" escrito como "paradocsau" ou variante fonética. A IA leu corretamente.

Outras técnicas de pronúncia apresentadas: quebrar palavras longas com hífen para que a IA as leia sílaba por sílaba ("unbelievable" escrito como "un-be-liev-able"), ou escrever as sílabas da forma como seriam pronunciadas em inglês se a pronúncia correta não está saindo. Ruan reconhece que isso parece contraintuitivo, mas funciona na prática porque o modelo processa a fonética da representação escrita.

## A música conta uma história com ou sem letra: conteúdo é o valor

Ruan dedica uma seção ao princípio mais amplo que orienta sua abordagem de composição: o conteúdo da música é o que dá valor a ela. Sempre foi. E isso vale tanto para músicas com letra quanto para instrumentais.

Para músicas com letra, Ruan é direto: no momento de escrever o prompt, o primeiro foco deve ser a letra. A letra é o conteúdo narrativo principal, e ela precisa existir antes de qualquer decisão de arranjo.

Para instrumentais, Ruan usa a trilha sonora do Senhor dos Anéis como referência analítica: quando a cena está no Shire com os hobbits, a música tem inocência, leveza e calma. Quando avança para a Sociedade do Anel, a música ganha esperança e grandiosidade. Quando chega nos momentos de ação épica, a música tem urgência e poder. Não há uma palavra cantada, mas a narrativa está sendo contada com a mesma precisão que o roteiro. O arco narrativo existe, e é a música que o carrega emocionalmente.

Aplicar isso ao trabalho com IA significa estruturar o prompt de um instrumental com o mesmo raciocínio narrativo: o que acontece na introdução? O que muda no desenvolvimento? Qual é o clímax? Como a música termina? Essas perguntas guiam as escolhas de timbre, dinâmica, andamento e estrutura de seção.

## Referências de estudo: compositores que ensinam a contar histórias com som

Ruan recomenda três compositores de trilhas sonoras como referências obrigatórias para quem quer desenvolver o repertório de composição narrativa. O raciocínio é explícito: bom prompt é de quem tem repertório. Ouvir e analisar grandes compositores treina a capacidade de identificar o que cria emoção, narrativa e identidade em uma música.

**Ludwig Göransson** (Ruan reconhece não saber pronunciar o sobrenome corretamente): descrito como o novo Hans Zimmer. As trilhas do Black Panther e Tenet são exemplos do trabalho dele, que combina elementos contemporâneos com sofisticação orquestral.

**Hans Zimmer**: o clássico inevitável, referência de qualquer conversa sobre composição de trilha sonora. Identidades musicais de filmes inteiros construídas sobre motivos simples e poderosos.

**John Williams**: o mestre dos leitmotivs. Ruan cita Indiana Jones, Tubarão, Jurassic Park e Star Wars como exemplos de identidades sonoras que se tornaram inseparáveis dos filmes que acompanham. Ouvir dois segundos do tema de Jurassic Park já ativa memórias visuais e emocionais completas. Esse é o nível de eficiência comunicativa que o leitmotiv bem construído atinge.

Ruan instrui: ouça as músicas desses compositores. Observe o que muda entre as cenas. Identifique os motivos que retornam. Entenda como a música está contando a história antes mesmo de uma palavra ser dita. Esse é o treinamento de ouvido que vai transformar a forma como você escreve prompts e como você avalia o que a IA gera.

## Aplicação para universo de marca: leitmotiv como identidade sonora

Ruan encerra a aula conectando tudo ao uso prático mais relevante para o público da trilha: a construção de universo sonoro de marca. A mesma lógica dos Vingadores e do Senhor dos Anéis aplica-se à identidade sonora de empresas e projetos.

O exemplo é o Sonic logo da Overlens: um motivo melódico curto, reconhecível, que pode ser executado com instrumentos de corda, com percussão, com vocais e com sintetizadores, mas que em qualquer arranjo mantém o fragmento central intacto. A identidade sonora se constrói pela repetição do motivo em contextos diferentes. Quanto mais um ouvinte escuta aquele fragmento associado à marca, mais profunda a memória emocional que se forma.

Para criar esse tipo de identidade com IA, o processo é: primeiro, criar o motivo central (que pode ser gravado como uma melodia simples humming, cantarolando para o Suno). Segundo, usar esse motivo como base e gerar versões com arranjos completamente diferentes: orquestral, eletrônico, acústico, épico, suave. Terceiro, selecionar os arranjos que correspondem a diferentes contextos de uso da marca (abertura de vídeo, música de espera, tema de evento, jingle de redes sociais). A repetição do motivo central em todos esses contextos cria o leitmotiv da marca.

Ruan encerra afirmando que tudo que foi apresentado nesta aula representa ferramentas que estão ao alcance de qualquer pessoa, sem necessidade de formação musical formal. Quem não tem o vocabulário técnico pode pedir à IA que faça a tradução. Quem não tem o repertório pode começar ouvindo os compositores recomendados. O ponto de partida está acessível, e o resultado é proporcional ao cuidado com que cada elemento é trabalhado.

## Coloque em prática

Escolha um projeto que já tem ou que quer criar: uma música com letra, uma trilha instrumental ou um Sonic logo para uma marca. Escreva o prompt usando os quatro blocos do Método Maestro: gênero (tags), vocalista (tags em inglês), clima (adjetivos), instrumentação (timbres específicos). Use o campo Exclude Styles para eliminar pelo menos dois elementos que definitivamente não quer no resultado. Gere a música e analise o que saiu. Se algum elemento inesperado apareceu, identifique qual tag pode ter criado um poço de gravidade e substitua por um termo mais específico. Na próxima versão, adicione pelo menos um marcador de dinâmica (crescendo, fortíssimo, pianíssimo) e observe o impacto.
