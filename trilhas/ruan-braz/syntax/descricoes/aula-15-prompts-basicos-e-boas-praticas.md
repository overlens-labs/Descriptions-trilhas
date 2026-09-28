# Prompts básicos e boas práticas

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os quatro erros mais comuns ao escrever prompts para texto e como corrigi-los
- Aplicar critérios explícitos no prompt para obter resultados direcionados em vez de genéricos
- Usar o processo de iteração com a IA para refinar um resultado progressivamente e extrair o prompt que o produziu

## Prompt é um processo, não uma fórmula

A aula começa com uma afirmação que desfaz um equívoco comum: não existe prompt certo ou errado. O que existe é prompt adequado ou inadequado para o objetivo. Prompt longo pode ser bom ou ruim. Prompt curto também pode. O que determina a qualidade é a clareza de quem escreve sobre o que quer.

O foco desta aula é texto especificamente, exemplos, critérios e estruturas voltados para quem quer usar IA para escrever.

## Erro 1: ser genérico

O primeiro e mais comum problema é a falta de especificidade. Um prompt amplo abre estatisticamente o espaço de respostas da IA, e quanto mais amplo, maior a chance de a IA devolver o que você não queria.

Prompts genéricos têm seu lugar: são úteis quando o objetivo é explorar ideias novas, obter variações ou descobrir abordagens que você não teria pensado sozinho. Nesses casos, abrir o espaço é intencional. Mas quando o objetivo é um caminho específico, a especificidade precisa estar no prompt. Isso não tem nada a ver com o tamanho do prompt, tem a ver com a precisão do que está sendo pedido.

## Erro 2: não definir o público

O segundo erro é enviar um texto sem definir para quem ele se destina. A IA aceita qualquer coisa, diferente de um ser humano real, que tem limitações, visão de mundo, problemas e desejos específicos.

Ruan recomenda criar um documento de público: um Google Docs onde o perfil do leitor está descrito, quem é, o que vê, o que ouve, o que pensa, o que sente, como age, qual o vocabulário dele. Esse documento pode ser subido para a IA como base de conhecimento. Uma vez feito, está pronto para ser usado em qualquer sessão.

A lógica dos GPTs de persona que apareceu na aula anterior parte do mesmo princípio: criar um assistente por persona já embutindo esse contexto, para não precisar reescrever a cada prompt.

## Erro 3: não ter critérios

Pedir "escreva um conteúdo sobre design" é um prompt sem critérios. A IA vai cumprir o pedido, e provavelmente vai entregar um texto genérico. Não porque errou, mas porque você não disse para onde ir.

Critérios são parâmetros explícitos que orientam o que a IA deve priorizar. Podem ser de estrutura, ritmo, tom, estilo, objetivo ou variação emocional. Um exemplo prático: ao invés de "escreva sobre design", o prompt pode especificar: "quero um conteúdo com variação emocional, envolva no começo, gere desconforto no meio, ofereça solução no final, seguindo esta estrutura: reforce a crença do leitor, mostre as crenças que estão atrapalhando, aponte as implicações, apresente a solução, feche com chamada para a ação".

Sem critérios, o prompt é genérico. E o resultado da IA vai ser genérico também.

## Erro 4: querer o resultado final de uma vez

O quarto erro é misturar a etapa de rascunho com a entrega final. Um único prompt raramente produz o texto que você quer, e esperar isso é a receita para a frustração.

O processo funciona melhor em camadas: primeiro gerar variações, coletar ideias e frases que chamam atenção, montar isso no Google Docs, e depois levar o material acumulado para um novo chat, pedindo revisão e refinamento. A IA é repetível, quando você ensina uma vez o que quer, ela replica. O trabalho da primeira vez é fazer ela interpretar os critérios.

## Como usar IA para aprender antes de criar

Uma abordagem prática apresentada na aula: ao invés de pedir direto para a IA gerar um texto, pedir que ela traga os princípios e fundamentos de um tema. O exemplo dado é pedir "Traga os princípios e fundamentos da escrita de prompts", a saída é um mapa estruturado do tema, com mitos, erros e acertos, que serve de referência para o processo criativo.

Esse tipo de prompt (bottom-up, como chamado na trilha NexGen) produz uma base de estudo antes de qualquer produção.

## Iteração na prática: o exercício do título

A aula demonstra o processo de iteração completo a partir de um exercício: criar um título para um texto sobre ética da criação.

**Prompt inicial:** "escreva um título para um texto sobre ética da criação." Resultado: títulos acadêmicos, distantes, genéricos, "Ética da Criação: Responsabilidade, Limites e Sentido".

**Adicionando critérios:** familiaridade, quebra de padrão, gap cognitivo (o título deve ser incompleto, abrir uma ideia sem fechá-la, fazer o leitor sentir que algo ficou faltando). O resultado melhora, mas ainda não chega ao ponto.

**Usando exemplos (few-shot):** ao invés de explicar os critérios em texto, Ruan dá um exemplo de título que funciona, "Criar é perigoso. E você faz parte disso.", e pede variações com outros enquadramentos. A IA consegue replicar o padrão com mais precisão do que quando só recebe descrições.

**Ajuste final:** Ruan percebe que os títulos ainda pressupõem que o leitor já sabe que o texto é sobre criação. Instrui a IA para que o título não entregue o tema diretamente, apenas crie tensão e lacuna que puxem o leitor para dentro. Resultado: "Criar é perigoso. Quem assume a responsabilidade?"

A lição que atravessa todo o exercício: escrever um bom prompt é ter clareza mental. Quanto mais claro está o que você quer, mais fácil é instruir a IA.

## Criar o prompt a partir da iteração

Uma técnica apresentada ao final: depois de iterar com a IA até chegar perto do resultado que você quer, peça para ela ler toda a conversa e estruturar um prompt baseado nos critérios que você foi ensinando ao longo do processo.

Esse prompt gerado pela própria IA pode ser guardado no banco de prompts pessoal e reutilizado sempre que precisar do mesmo tipo de resultado, sem ter que refazer o processo de iteração do zero.

## O banco de prompts pessoal

A recomendação prática com que a aula encerra: comece a guardar suas melhores instruções. Uma tabela no Google Sheets já resolve. Instrução é uma nova moeda, assim como escritores guardam bancos de citações e referências, quem trabalha com IA precisa guardar os prompts que já funcionaram.

Para quem quer um ponto de partida, o Overchat da Overlens tem um banco de prompts disponível, com estruturas prontas para tarefas específicas de texto.

## Coloque em prática

Crie uma tabela no Google Sheets para guardar seus melhores prompts. Escreva o primeiro prompt nela: peça à IA que resuma todos os critérios que você usou ao longo de uma conversa e estruture um prompt reutilizável. Guarde esse prompt como ponto de partida do banco pessoal.
