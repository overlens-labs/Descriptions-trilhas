# Estruturas avançadas de prompt para texto

**Tempo estimado de leitura:** 7 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Reconhecer o que torna um prompt avançado: não o tamanho, mas o repertório e a estrutura de raciocínio que ele carrega
- Aplicar quatro técnicas avançadas de prompt, self-consistency, prompt chaining, RAG e ReAct, a tarefas reais de escrita
- Usar a técnica de Reflections para pedir que a IA critique e reescreva o próprio resultado com base em critérios explícitos

## Estrutura avançada: direção, não tamanho

A aula começa esclarecendo o que é uma estrutura avançada de prompt: a maneira de organizar o prompt e o raciocínio que a IA vai seguir. Vantagens são redução de ambiguidade, aumento de coerência e aproximação ao comportamento que você quer da ferramenta.

A metáfora usada: um modelo de IA é como uma orquestra capaz de tocar vários instrumentos ao mesmo tempo. Mas sem partitura, vira ruído. A falha não é a falta de capacidade, é falta de direção. O modelo pode fazer tudo, mas precisa saber exatamente o que você quer que ele faça.

## Self-consistency: dialética aplicada

A primeira técnica apresentada é a self-consistency, que significa forçar múltiplos raciocínios antes de aceitar uma resposta. Em vez de aceitar o primeiro resultado, o prompt pede várias linhas de pensamento, o que a técnica chama de chain of thoughts, e solicita que a IA escolha o mais consistente.

Ruan aponta que essa técnica não é tecnologia, é filosofia. Na tradição filosófica, isso se chama dialética: tese, antítese e síntese. Pedir à IA uma abordagem dialética é pedir que ela traga argumentos, contra-argumentos e uma síntese, o que evita enviesar o resultado em uma única direção.

Exemplo prático de instrução: gerar cinco esboços de tese para um ensaio, incluindo para cada um tese, três argumentos, três contra-argumentos e refutação. Em seguida, pedir que a IA faça um voto de autoconsciência, selecione o esboço com melhor coerência lógica e justificativa empírica, explique por quê e entregue a versão final editada. O prompt é curto, mas avançado porque exige repertório de quem o escreve.

## Prompt chaining: construir o raciocínio em etapas

A segunda técnica é o prompt chaining, encadear o prompt em vários estágios sequenciais. O exemplo demonstrado:

- **Etapa 1, Mapa:** listar tópicos e perguntas para um artigo, com dez tópicos
- **Etapa 2, Outline:** transformar o mapa em sumário hierárquico com H1 e H3 e tempo estimado por sessão
- **Etapa 3, Parágrafos:** escrever somente a introdução, com gancho, contexto e tese clara
- **Etapa 4, Revisão:** avaliar a introdução com critérios de clareza, evidência e ritmo, propor três melhorias e aplicar

Ruan reforça que ninguém chega a uma instrução assim de primeira. O processo é o da aula anterior: testar, ajustar, pedir à IA que sintetize as instruções em etapas ao final. O que torna esse prompt avançado não é o número de caracteres, mas a estrutura de raciocínio construída em camadas.

## RAG: tratar o dado antes de gerar o texto

A terceira técnica é o RAG, Retrieval Augmented Generation. A tradução prática: fazer a IA buscar e tratar informação antes de entregar um resultado, reduzindo alucinações e aumentando a factualidade.

O processo tem três momentos. Primeiro, trazer dados tratados para a IA, parágrafos sobre um tema, fatos específicos, notícias relevantes. Segundo, instruir a IA a estudar esse material antes de gerar o conteúdo. Terceiro, usar o conteúdo gerado.

A ferramenta recomendada para aplicar RAG é o **NotebookLM**, do Google. Nele é possível criar notebooks com arquivos subidos como base de conhecimento, documentos, PDFs, planilhas. Ruan demonstra ao vivo um notebook criado para um personagem chamado COG, professor de lógica de uma trilha criado pela própria IA. Com as fontes subidas, curso de lógica básica, introdução à lógica, falácias, raciocínio dedutivo e indutivo, entre outros, a IA produz roteiros, podcasts e infográficos com o conteúdo daquele material específico.

A recomendação prática: não colocar tudo em um único prompt. Fazer o RAG em uma etapa separada, tratar o dado, depois subir apenas o essencial para a ferramenta de geração. Trabalhar em etapas vai funcionar melhor do que tentar resolver tudo em um único bloco.

Os GPTs do ChatGPT e os Gems do Gemini também funcionam como um tipo de RAG quando recebem documentos de base de conhecimento.

## ReAct: raciocinar e agir

A quarta técnica é o ReAct, Reasoning mais Action. A estrutura divide o prompt em duas partes: primeiro explica como pensar, depois explica como agir. O resultado é uma instrução que orienta o raciocínio e depois determina a ação.

O exemplo apresentado é sobre um dossiê de impacto de políticas de dados abertos na cultura de design cívico. Ruan aproveita o tema para fazer uma demonstração sobre como transformar conteúdo chato em conteúdo envolvente. A primeira pergunta antes de qualquer prompt é: quem está do outro lado? E o primeiro objetivo de quem comunica é tornar familiar, porque comunicar é tornar comum, e tornar comum exige pensar na pessoa que vai receber a mensagem antes de colocar o conteúdo.

O título "impacto de políticas de dados abertos na cultura do design cívico" vira "a extinção dos creators através dos dados", mais familiar, com mais tensão, com mais motivo para quem trabalha com criação querer ler.

## Reflections: autocrítica iterativa

A quinta técnica é o Reflections, pedir que a IA questione e avalie o que ela mesma está entregando. A estrutura funciona em três momentos: a IA escreve, depois avalia sua própria versão com critérios explícitos, depois reescreve corrigindo as falhas identificadas.

O exemplo usa uma carta manifesto sobre bibliotecas públicas. Após escrever o manifesto, a IA avalia com cinco métricas, clareza, ritmo, densidade de ideia, força retórica e memorabilidade, e atribui notas. Em seguida, reescreve. E depois testa a versão reescrita contra um leitor cético: o que ainda não está convincente. O resultado final é ajustado a 200 ou 250 palavras.

Ruan recomenda separar a etapa de Reflections em um assistente diferente. Após gerar o texto, pegar a versão final e enviá-la ao assistente de persona para testar a perspectiva do público real. O exemplo demonstrado usa o Bruninho, uma persona da Overlens com ficha completa, história, tom de voz, vocabulário, frase típica ("cara, eu sei que preciso aprender coisas novas, mas não sei como começar"), estilo do cara comum de São Paulo da geração atual.

O resultado da conversa com o Bruninho: o texto é envolvente para quem gosta de pensar, mas denso para quem quer estímulo rápido, "se eu tô com o cérebro acelerado de TikTok, demoro uns parágrafos pra entrar". O diagnóstico é preciso porque a persona tem critérios definidos.

## Estrutura clássica de prompt e o guardião da Big Idea

A aula apresenta também a estrutura clássica de prompt para texto: papel (o que o assistente é, o que faz, qual a especialidade), tarefa, contexto, raciocínio, saída ou formato e critérios ou condições de parada. Prompt grande não significa automaticamente prompt bom, às vezes um prompt curto funciona melhor. O que importa é a especificidade.

O exercício final demonstra como criar o GPT chamado "guardião da Big Idea" para quem está escrevendo um livro. O processo: instruir a IA a fazer as perguntas essenciais sobre a big idea do livro, responder essas perguntas, depois pedir que ela gere um prompt detalhado seguindo a estrutura clássica (papel, tarefa, contexto, raciocínio, formato, condições) para uso nas instruções do GPT. Depois de criado, o assistente analisa cada trecho do livro com estrutura fixa, veredito, alinhamento com a big idea, riscos, ajustes recomendados e próximos passos.

O aviso sobre esse processo: deixar a IA responder as perguntas por você resulta em critérios da própria IA, não seus. A orientação é responder com suas próprias ideias para que o assistente seja treinado na sua direção.

## A lógica que atravessa tudo

A conclusão da aula traz o ponto central que conecta todas as técnicas: a IA estatisticamente encontra o melhor padrão para uma resposta. Mas o que faz as pessoas engajarem é a quebra de padrão. Para que a IA vá contra o padrão, você precisa definir os critérios explicitamente. Sem critérios, ela vai pelo caminho mais provável, que é o mais genérico.

A pergunta que orienta a escolha da técnica: qual protocolo você precisa para esse tipo de tarefa nesse contexto específico? Depois de criar uma vez e direcionar a IA, pedir que ela estruture o aprendizado em um prompt. E guardar esse prompt no banco pessoal para reutilizar sem precisar refazer o processo.

## Coloque em prática

Escolha uma das cinco técnicas apresentadas e aplique a um texto real. Depois de iterar com a IA até chegar perto do resultado que quer, peça que ela leia toda a conversa e estruture um prompt com os critérios que você ensinou ao longo do processo. Guarde esse prompt no seu banco pessoal para reutilizar sem refazer do zero.
