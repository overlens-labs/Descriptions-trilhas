# Desenvolvimento de Brand System

**Tempo estimado de leitura:** 10 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir Brand System de Style Guide, Documentação de Identidade Visual e Design System
- Estruturar as etapas da metodologia de branding da Overlens em ordem lógica
- Aplicar agentes paralelos para quebrar um documento grande em arquivos markdown por tópico
- Reconhecer o conceito de banco vetorial como caminho avançado para criar uma marca viva com IA

## O que torna o Brand System diferente de tudo que você conhece

Brand System não é Style Guide. Style Guide é um documento com regras de uso visual da marca. Brand System não é documentação de identidade visual. Documentação de identidade visual registra como a marca foi construída. Brand System não é Design System. Design System é um conjunto de componentes de interface reutilizáveis.

O Brand System é um sistema da marca. Um sistema que funciona como fonte da verdade: o lugar onde humanos e inteligências artificiais consultam o que a marca é, como ela fala, como ela se posiciona e quais são seus ativos. Quando tudo está centralizado nesse sistema, a marca fica consistente em todos os pontos de contato, a equipe tem menos retrabalho e as IAs conseguem criar dentro das diretrizes sem precisar de instruções repetidas toda vez.

## A parte mais importante do Brand System: as diretrizes

Construir o sistema em si é a parte mais rápida. A parte mais importante e trabalhosa é ter as diretrizes já definidas e documentadas. A Overlens levou quatro anos construindo o conteúdo que alimenta o Brand System. O sistema foi montado em dois dias com IA.

A aula mostra o Livro de Branding da Overlens, um documento do Google Docs com muitas páginas construído desde 2021. Esse documento é a fonte de todo o conteúdo que vai para o Brand System. Para começar a construção, o documento é exportado em formato Markdown pelo caminho Arquivo > Fazer download > Markdown, com a opção "All Tabs" selecionada para incluir todas as abas do índice lateral.

## A metodologia de branding da Overlens

A metodologia da Overlens divide o processo de construção de identidade de marca em quatro grandes etapas:

**Auditorias:** são três, realizadas sobre mercado, público e negócio. As auditorias mapeiam o ambiente em que a marca vai operar antes de qualquer decisão criativa.

**Posicionamento:** define a vantagem injusta do negócio, conceito oriundo da metodologia Lean Canvas. Inclui os diferenciais da marca, as paridades com o mercado (o que ela faz igual à concorrência e não pretende mudar), e o mapa perceptual. O mapa perceptual é uma matriz onde a marca posiciona seus concorrentes usando dois eixos de atributos principais, revelando o espaço único que ela ocupa.

**Núcleo da marca:** começa com o roteiro, que é a história da marca. Depois vêm as virtudes, definidas com base no continuum de virtudes de Aristóteles, que indica o ponto de equilíbrio entre excesso e falta de cada atributo. Em seguida, os arquétipos: padrões de comportamento que existem no imaginário coletivo e criam reconhecimento imediato sem precisar de explicação. A brand persona é o resultado: se a Overlens fosse uma entidade, ela seria Prometeus, o titã que tirou o fogo do Olimpo e entregou à humanidade.

**Universo verbal:** vocabulário, tom de voz, clichês que a marca evita, arquitetura de nomes, e manifesto quando aplicável.

**Universo visual:** símbolos e signos da marca, cores com códigos completos, tipografia, grafismos, banco de imagens, banco de vídeos, objetos 3D e iconografia.

**Assets e touch points:** universo sonoro, voz literal da marca (se ela fosse uma voz física, qual seria), e pontos de contato como site, redes sociais e presença em plataformas.

O resultado de tudo isso são os guidelines: diretrizes que podem ser lidas e executadas tanto por humanos quanto por inteligências artificiais.

## Quem mais se beneficia de um Brand System

Marcas com equipe, marcas que trabalham com prestadores de serviços externos, agências e estúdios de criação que entregam esse serviço para clientes. Nesses contextos, o Brand System resolve dois problemas de forma simultânea: consistência, porque a marca aparece da mesma forma em todos os pontos de contato, e produtividade, porque tudo está centralizado em um único lugar.

Para quem usa IA, o Brand System agrega um terceiro benefício: consistência na criação da IA. Quando a IA tem acesso ao sistema da marca, ela consegue criar dentro das diretrizes sem precisar que o usuário explique tudo novamente em cada prompt.

## O conceito avançado: banco vetorial e marca viva

O nível mais avançado do Brand System é transformar todo o conteúdo em um banco vetorial. A diferença entre banco de dados tradicional (SQL, formato de tabela) e banco vetorial é fundamental: o banco vetorial quebra todo o conteúdo em números e vetores, incluindo textos, imagens e vídeos, e consegue identificar padrões de consistência entre todos eles. A IA que acessa esse banco entende a marca de forma muito mais profunda do que lendo um documento.

Com esse nível de implementação, é possível criar o que foi chamado de "marca viva": uma IA que entende a marca tão profundamente que pode criar conteúdo seguindo as diretrizes de forma autônoma, e até interagir com pessoas no estilo da marca. A referência visual usada na aula é uma cena do filme Blade Runner 2049, em que o protagonista conversa com um anúncio personalizado em um outdoor interativo. Nas devidas proporções, esse nível já é tecnicamente possível hoje.

## Construindo o Brand System na prática

*Para ver a demonstração desta seção, assista a partir de 02:25 no vídeo.*

O projeto é criado em uma pasta separada, diferente da pasta do BM Overlens. Misturar tudo em um único repositório (monorepo) não é recomendado para iniciantes porque a pasta fica grande demais e dificulta o controle.

O briefing para o Claude Code explica que o objetivo é construir um Brand System com as diretrizes já definidas. O arquivo do Livro de Branding em Markdown é enviado para dentro da pasta do projeto, em uma subpasta chamada "Overlens".

O próximo prompt pede ao Claude que atue como orquestrador e acione 15 subagentes em paralelo para quebrar o documento inteiro em arquivos Markdown separados por tópico. Cada agente extrai uma seção diferente. Um arquivo índice (`index-livro.md`) registra o que está completo e o que está incompleto. Todos os arquivos são salvos na pasta Overlens.

Enquanto os 15 agentes trabalham quebrando o documento, uma segunda instância do Claude recebe o briefing atualizado com a indicação de que o projeto terá uma interface web, e escolhe a stack técnica: Next.js, shadcn/ui, Tailwind CSS e MDX. O MDX permite renderizar os arquivos Markdown diretamente na interface, tornando a navegação mais rápida.

O resultado final é um Brand System responsivo em código, com sidebar de navegação, visualização de conteúdo por seção, funcionamento em mobile e telas maiores. O sistema foi construído do zero durante a aula.

## Coloque em prática

- Abra um documento do Google Docs com as informações da sua marca ou negócio. Se não tiver um, comece escrevendo pelo menos posicionamento, tom de voz e diferenciais.
- Exporte o documento como Markdown (Arquivo > Fazer download > Markdown, com "All Tabs" selecionado).
- Crie uma pasta de projeto separada para o Brand System e envie o arquivo Markdown para dentro dela como ponto de partida.
