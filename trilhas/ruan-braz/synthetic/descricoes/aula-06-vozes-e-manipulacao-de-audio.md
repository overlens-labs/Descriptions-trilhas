# Vozes e manipulação de áudio

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Aplicar o Runway como alternativa ao HeyGen para criar personas interativas com áudio em tempo real
- Estruturar instruções e base de conhecimento separadas para um personagem sintético conversável
- Reconhecer as diferenças entre ferramentas e escolher a mais adequada conforme o caso de uso

## Runway como alternativa ao HeyGen

O HeyGen é focado em produção de vídeo com avatar. O Runway (RunwayML.com) expande essa possibilidade com outra abordagem: além de vídeo, ele permite criar personagens interativos que conversam via chamada de áudio em tempo real, com uma interface construída para integrar imagem, voz e base de conhecimento em um único fluxo.

Ruan demonstra a criação de um Custom Character no Runway. O processo começa com upload de uma imagem de boa qualidade do personagem. Para personas fictícias, a imagem precisa ser processada previamente para o formato 16:9, usando o Gemini do Google para completar o cenário ao redor do personagem de forma coerente.

## Separando instruções da base de conhecimento

Um ponto técnico importante que a aula explica: o Runway diferencia instruções de base de conhecimento, e essa distinção importa para a qualidade das respostas.

As instruções ficam no campo de configuração direta do personagem: são as diretrizes de como ele deve se comportar, qual é o tom de voz, como ele responde, quais são os seus limites. Ruan recomenda colocar o tom de voz e as características de comportamento nas instruções porque elas são processadas rapidamente.

A base de conhecimento, por outro lado, é carregada quando a persona precisa de informações mais profundas para responder. É onde ficam a biografia, o mapa de empatia e a história da persona. O processamento da base de conhecimento é mais lento, mas entrega respostas mais ricas e informadas quando consultada. Ruan condensa os dados do ChatGPT para 500 caracteres antes de colar nas instruções, para não sobrecarregar o campo principal.

## A conversa com a Lily no Runway

Ruan demonstra uma chamada ao vivo com a Lily criada no Runway. A persona se apresenta como "Lilian, consultora de branding, especialista em ajudar marcas a construírem narrativas fortes", mantendo coerência com a ficha que foi documentada nas aulas anteriores.

Quando Ruan menciona que não pode enxergá-la, a Lily reconhece a limitação de forma adequada, explicando que consegue processar áudio e texto mas não tem capacidade visual. Essa resposta revela um traço importante das personas sintéticas: elas não sabem o que não foi programado nelas, mas conseguem lidar com essa lacuna de forma consistente quando as instruções estão bem estruturadas.

O resultado ainda tem imperfeições, especialmente em chamadas ao vivo onde o sistema pode apresentar instabilidades. Mas a capacidade de sustentar uma conversa com personalidade definida e linguagem coerente já é suficiente para uso em testes de oferta e validação de comunicação.

## Explorando o HeyGen em maior profundidade

A aula retoma o HeyGen para mostrar recursos que não foram abordados na aula anterior. Ruan demonstra como escrever um script diretamente no painel, com a opção de ajustar entonação múltiplas vezes. Cada vez que o roteiro é gerado novamente, a entonação muda, o que é útil para testar variações de apresentação.

O recurso de Voice Mirroring usa o áudio original do usuário ao invés de síntese, entregando resultado mais próximo da voz real. Para quem cria conteúdo regularmente com o próprio rosto e voz, esse recurso reduz a estranheza que versões sintetizadas costumam gerar.

## Qualidade de entrada, qualidade de saída

O princípio se repete tanto no Runway quanto no HeyGen: o que entra determina o que sai. Uma imagem de baixa qualidade, uma instrução vaga ou um mapa de empatia superficial produzem uma persona que responde de forma genérica e inconsistente.

O esforço de construção que acontece antes da ferramenta, o preenchimento cuidadoso da ficha, a condensação das instruções para o campo certo, o processamento da imagem antes do upload, é o que separa personas sintéticas que funcionam de personas sintéticas que parecem bots genéricos.

## Como escolher entre as ferramentas

O Runway é mais indicado para criar personas interativas via áudio e para integração com fluxos conversacionais em tempo real. O HeyGen é mais indicado para produção de vídeos com avatar onde o roteiro é escrito previamente. O Character.ai é mais indicado para exploração inicial e testes rápidos sem necessidade de setup técnico. A escolha depende do caso de uso, não da ferramenta mais avançada disponível.

## Coloque em prática

Acesse o Runway e crie um Custom Character usando a imagem da sua persona processada em 16:9. Separe as instruções (tom de voz e comportamento) da base de conhecimento (biografia e mapa de empatia) e preencha os dois campos. Faça uma chamada de áudio com o personagem e compare a experiência com a que você teve no Character.ai na aula anterior. Observe qual entregou respostas mais coerentes com a ficha que você construiu.
