# Bônus: perguntas e respostas do chat

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Reconhecer por que banco vetorial ficou fora do Atlas
- Distinguir scripts, agentes genéricos, subagentes e skills
- Aplicar a lógica de Design System reutilizável com Storybook
- Identificar o fluxo básico de Git, GitHub, commit, push e deploy

## Banco vetorial como tema avançado

A aula bônus começa com uma pergunta sobre banco vetorial. O Ruan explica que não aprofundou esse tema porque ele exige uma sequência técnica anterior.

Antes de ensinar banco vetorial, seria necessário explicar embeddings, divisão de textos e arquivos em vetores, conexão do banco, segurança e validação de que o sistema realmente está recuperando e aprendendo a partir dos vetores corretos.

Por isso, o banco vetorial é tratado como uma etapa posterior. O Atlas foca primeiro em publicar um Brand System funcional, deixando esse aprofundamento para outros programas e estudos.

## Projetos harness e economia de tokens

Uma pergunta aborda a substituição de subagentes especializados por agentes genéricos com skills especializadas. O Ruan responde falando de projetos harness.

Um projeto harness usa infraestrutura própria para reduzir dependência direta da IA em tarefas repetitivas. Em vez de gastar tokens toda vez, o aluno pode pedir para a IA escrever scripts que o computador executa sozinho.

Scripts são roteiros de comandos executados localmente. Eles não gastam tokens porque não dependem do modelo a cada execução. Essa abordagem é mais inteligente para fluxos repetitivos, mas exige mais conhecimento técnico para ser construída corretamente.

## Storybook e Design System reutilizável

O Ruan confirma que é possível usar o mesmo Storybook em outros projetos para aproveitar componentes. Essa é justamente a vantagem de construir um Design System.

A recomendação é criar uma pasta separada apenas para o Design System, fora do Brand System específico. Nessa pasta, o aluno instala o Storybook, organiza componentes e cria a biblioteca visual.

Quando criar outro projeto, pode puxar a pasta do Design System para o agente e pedir que ele use aqueles componentes. Isso evita que o agente misture componentes próprios do Brand System com componentes reutilizáveis.

## Instalação e uso de skills

A aula esclarece que não se usa `/skill` de forma genérica. Para ativar uma skill, o usuário digita barra e o nome da skill, desde que ela esteja instalada no caminho correto.

No Claude, a pasta esperada é `.claude`. Se uma ferramenta instala as skills em `.agents`, o Claude pode não encontrá-las corretamente. Nesse caso, é preciso renomear a pasta para `.claude`.

Já Codex e Gemini usam a pasta `.agents`, então não precisam da mesma alteração. O Ruan indica um vídeo no canal Ruan Braz que mostra skills úteis e explica a instalação.

## Desenvolvimento na Vanguarda e Overpass

O Ruan diferencia os programas. O Overpass oferece conteúdos sobre IA, história das IAs, geração de imagem, vídeo, música e prompts melhores, além do acesso às gravações do Atlas para assinantes.

Desenvolvimento em profundidade, com acompanhamento mais próximo e formação acelerada em criação de sistemas com IA, fica concentrado na Vanguarda.

O Atlas serve como porta de entrada prática, mostrando o caminho e dando a experiência de construir algo. Quem quer dominar mais profundamente o processo pode seguir para conteúdos e mentorias mais avançados.

## Git, GitHub, commit e push

A aula explica a diferença entre Git, GitHub e publicação. Git é instalado no computador e serve para versionar o projeto. Ele cria histórico de mudanças, como versão 1, versão 2 e versão 3.

Commit é o registro de uma alteração. Cada recurso novo, correção ou ajuste importante deve gerar um commit com descrição clara do que mudou. Antigamente muitos desenvolvedores faziam commits pobres, mas hoje a IA pode ajudar a escrever mensagens melhores.

Push é o envio das mudanças para o repositório remoto, como GitHub. Quando o repositório está conectado à Vercel, o push pode disparar automaticamente o deploy.

## Branches, PR, merge e fluxo profissional

Quando alguém trabalha sozinho, pode fazer commit e push direto na branch principal. Em equipes, o processo usa branches, ou galhos, para que pessoas diferentes trabalhem em partes separadas.

Depois, essas pessoas abrem um PR, pull request, solicitando que as mudanças sejam revisadas e unidas ao projeto principal. O merge junta as alterações aprovadas à branch principal.

Em um fluxo mais robusto, antes disso ainda há backlog, stories, sprints, correções de bugs e organização ágil. O Ruan menciona essas camadas para mostrar que existe um processo profissional por trás do desenvolvimento de software.

## Localhost, stage e produção

O Ruan explica a diferença entre rodar localmente e publicar. `npm run dev` abre o projeto em `localhost`, que só funciona no computador de quem está rodando.

Enviar um link `localhost` para outra pessoa não funciona porque ela não tem o repositório nem os arquivos locais. Para outras pessoas acessarem, é preciso fazer deploy em um ambiente público, como Vercel.

Projetos mais robustos podem ter stage e produção. Stage é um ambiente de teste para validar antes de abrir para todos. Produção é a versão pública que usuários finais acessam.

## Coloque em prática

Crie um repositório de teste, faça uma alteração pequena, registre um commit e entenda o histórico gerado pelo Git.

Depois, publique uma versão simples e valide a diferença entre `localhost`, stage e produção antes de compartilhar o link.
