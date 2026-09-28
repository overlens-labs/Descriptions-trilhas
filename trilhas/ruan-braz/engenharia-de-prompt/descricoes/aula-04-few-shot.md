# Few-Shot

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar o que diferencia uma solicitação few-shot de uma solicitação zero-shot
- Aplicar contexto adicional em seus prompts para aumentar a especificidade e a profundidade das respostas
- Reconhecer como LLMs mais avançadas processam zero-shots com qualidade de few-shot, e o que isso significa para sua prática

## O que é few-shot

Few-shot significa "alguns tiros". Ao contrário do zero-shot, onde você faz um pedido sem fornecer nenhuma informação prévia, no few-shot você entrega ao modelo algumas informações adicionais antes ou junto da sua solicitação. Esse contexto extra pode ser seu objetivo, seu nível atual de conhecimento sobre o assunto, o formato que você quer na resposta, referências que você quer que o modelo considere ou qualquer outro dado que ajude o modelo a calibrar melhor a resposta.

A diferença entre os dois pode parecer pequena, mas o impacto na qualidade da resposta é considerável.

## A diferença na prática: comparando zero-shot e few-shot

A aula demonstra a diferença com um exemplo direto. Dois pedidos sobre o mesmo assunto, design thinking, são enviados simultaneamente a dois instâncias do ChatGPT.

O zero-shot: "Estou estudando sobre design thinking e quero aprender mais sobre essa abordagem."

O few-shot: "Estou estudando sobre design thinking e quero aprender mais sobre essa abordagem. Mas eu quero ir mais fundo. Quero encontrar o conteúdo do básico ao avançado. Não quero me limitar ao superficial. Gere um sumário para mim, levando em consideração conteúdos, autores, referências bibliográficas e artigos que possam ser úteis para o meu estudo."

O resultado: o zero-shot entregou uma introdução ao conceito, os cinco estágios do design thinking e por que a abordagem é poderosa. Útil, mas raso. O few-shot entregou um sumário estruturado com introdução, origem, leituras recomendadas, comparação com outras abordagens, pensamento crítico, processo, ferramentas e métodos - exatamente o que foi pedido, com leituras indicadas em cada seção. Uma resposta de outra dimensão para o mesmo tema.

O que fez a diferença foi que no few-shot o modelo recebeu: o objetivo do usuário (aprender de forma estruturada), a profundidade desejada (básico ao avançado, sem se limitar ao superficial) e o formato esperado (sumário com conteúdos, autores, referências e artigos). Cada uma dessas informações adicionais foi um "tiro" extra que direcionou o guardião para um corredor diferente da biblioteca.

## Como o few-shot funciona na prática

Você não precisa de uma fórmula rígida para construir um few-shot. A lógica é simples: quanto mais você informa ao modelo sobre quem você é, o que você já sabe, o que você quer e como quer receber, mais precisa e profunda será a resposta.

O instrutor menciona que às vezes abre o microfone e começa a falar diretamente com a IA, construindo o contexto em voz alta antes de fazer o pedido final. Isso é few-shot em sua forma mais orgânica: você está dando ao modelo um conjunto de "exemplos" da sua situação atual para que ele responda dentro desse enquadramento.

Alguns elementos que tornam um few-shot mais eficaz:

- Declarar seu objetivo específico (não só o assunto, mas o que você quer fazer com a informação)
- Indicar seu nível de conhecimento (iniciante, intermediário, avançado)
- Especificar o formato da resposta (lista, sumário, análise, comparação)
- Incluir referências ou autores que você já mapeou e quer que sejam considerados
- Indicar o que você não quer (respostas rasas, repetições do óbvio)

## O que acontece com modelos mais avançados

A aula inclui uma demonstração importante: o mesmo pedido zero-shot ("Estou estudando sobre design thinking e quero aprender mais sobre essa abordagem") é enviado ao recurso de Deep Research do ChatGPT - uma funcionalidade de investigação profunda disponível na versão paga.

O resultado foi diferente do zero-shot convencional: o modelo respondeu com "ótimo, é uma abordagem muito útil", apresentou um índice e perguntou "você poderia especificar mais quais aspectos deseja explorar?" Ou seja, o modelo mais avançado recusou o zero-shot e pediu few-shot. Ele identificou que precisava de mais contexto para fazer uma pesquisa de qualidade e solicitou essa informação antes de continuar.

Quando o instrutor recusou fornecer mais contexto e pediu ao modelo que navegasse por conta própria, o Deep Research iniciou uma pesquisa autônoma - consultando fontes, cruzando referências e entregando um relatório com profundidade que um zero-shot convencional jamais alcançaria.

O ponto central dessa demonstração: modelos mais avançados estão ficando cada vez melhores em entregar profundidade com menos informação. Mas modelos mais antigos - como o GPT-3.5, o Mistral ou LLMs menores - ainda dependem muito do contexto que você fornece. Para esses modelos, o few-shot não é opcional: é o que separa uma resposta útil de uma resposta genérica.

## Coloque em prática

Pegue um zero-shot que você já usou com resultado mediano. Reescreva-o como few-shot: adicione seu objetivo real, seu nível de conhecimento atual, o que você não quer na resposta e o formato que prefere receber. Envie os dois para a mesma LLM e compare os resultados. Depois, tente o mesmo few-shot em um modelo mais avançado com Deep Research ativo e observe como o comportamento do guardião muda quando ele tem acesso a uma biblioteca externa.
