# Depoimento Fernando

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar exemplos reais do que é possível construir com Claude Code em poucas semanas
- Reconhecer o padrão de aprendizado por execução como caminho para criar ferramentas próprias
- Aplicar o conceito de dependências de projeto ao mover repositórios entre computadores

## Como Fernando chegou à Vanguarda

Fernando é membro da Vanguarda há dois meses no momento do depoimento. A entrada aconteceu depois que ele assistiu a uma live da Kiza, onde ela mostrava automações. Ele entrou em contato com ela, ela o indicou para agendar uma call com a equipe. Durante a conversa, o fundador falou que o passo que Fernando queria dar com a metodologia do Bootcamp Sintrópico seria o nível 1 da Vanguarda e que valeria entrar. Fernando entrou.

O ponto de destaque no perfil de Fernando é a atenção aos detalhes. Ele aplicou a metodologia de entropia temporal para organizar o próprio tempo, e o padrão de aprender fazendo é o que mais caracteriza sua trajetória dentro da comunidade.

## Aplicativo de glossário e aprendizado

*Para ver a demonstração das ferramentas desta seção, assista a partir de 00:38 no vídeo.*

A primeira ferramenta que Fernando mostra é um aplicativo de aprendizado com interface inspirada na Anthropic, construído intencionalmente como exercício: ele queria saber se conseguia criar algo parecido com aquele visual. O app organiza conceitos básicos de Claude Code, como CLI, terminal e configuração de agentes, em formato navegável.

O aplicativo inclui uma seção de setup pessoal onde Fernando pode consultar o que tem instalado (skills, agentes configurados, hooks, MCPs). Uma das motivações foi centralizar em uma interface o que antes estava espalhado em documentos do Google.

## Token Editor e Design System

A segunda ferramenta é um token editor: uma interface onde é possível ajustar as variáveis de tipografia como tamanho do título, peso da fonte e espaçamento entre linhas, e ver as mudanças aplicadas em tempo real em toda a interface. Há também uma visualização de como o layout fica no mobile.

Junto ao editor, Fernando criou um visualizador de design system separado, com escala tipográfica, paleta de cores, escala de espaçamento, botões aplicados e um style guide completo. A motivação foi prática: ao pedir para o Claude ajustar um elemento tipográfico, ele muitas vezes alterava apenas uma instância e não as outras. O token editor resolve isso sistemicamente.

## Claudinho Generator

Outra ferramenta criada por Fernando é o Claudinho Generator: uma aplicação que permite personalizar o mascote do Claude (o personagem Cloudinho) com variações de cor, versões temáticas como "Claudinho do mal", "Claudinho do gelo" e "Baby Claudinho", e exportar o resultado como arquivo SVG. A ferramenta começou como um experimento lúdico, depois de Fernando ter tentado fazer o personagem fugir do mouse e criado um jogo de Pac-Man como treino.

## Pipeline de geração de imagens para endomarketing

A ferramenta mais complexa apresentada é um pipeline de geração de imagens para o time interno. O fluxo funciona assim: o usuário entra um prompt na interface, o Claude refina esse prompt, o Gemini gera a imagem com base no prompt refinado, o sistema remove automaticamente o fundo da imagem, faz o upscale e entrega o PNG final com fundo transparente.

O contexto de criação: o time usava muito um avatar 3D gerado no Gemini, mas o processo de geração, remoção de fundo e upscale era sempre manual. Fernando criou a ferramenta para que o cliente final pudesse fazer isso sem depender da equipe. Na demonstração ao vivo, a ferramenta apresentou um problema de dependências ao ser aberta em outro computador, o que deu oportunidade para explicar um conceito técnico importante.

## O conceito de dependências de projeto

Quando um projeto é criado localmente e depois movido para outro computador via GitHub, alguns arquivos não vão junto. Isso acontece de forma intencional: certos arquivos de configuração e bibliotecas são ignorados no upload porque precisam ser instalados localmente. Ao mudar de máquina, é necessário reinstalar essas dependências no novo ambiente. Foi exatamente o que impediu a pipeline de imagens de funcionar ao vivo na demonstração.

O padrão de Fernando, sintetizado ao final: ver o conceito, colocar em prática, deixar as dúvidas surgirem da prática e trazer essas dúvidas. Dúvidas que surgem da execução real são mais precisas do que perguntas abstratas, e é a partir delas que o aprendizado avança com mais velocidade.

## Coloque em prática

- Escolha uma tarefa repetitiva do seu fluxo de trabalho e experimente criar uma ferramenta simples com Claude Code para automatizá-la.
- Se você mudar um projeto de computador, verifique se as dependências foram reinstaladas no novo ambiente antes de tentar rodar o projeto.
- Use o padrão de Fernando: execute primeiro, deixe as dúvidas surgirem da prática.
