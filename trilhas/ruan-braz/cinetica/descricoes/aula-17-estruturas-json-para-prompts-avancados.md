# Estruturas JSON para prompts avançados

**Tempo estimado de leitura:** 14 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Aplicar JSON como linguagem de prompt para geração de vídeo com controle paramétrico completo
- Usar timestamp prompting para definir o que acontece em cada segundo de um vídeo
- Solicitar a LLMs que convertam descrições em linguagem natural para shot breakdowns estruturados em JSON
- Versionar prompts com Git para rastrear mudanças, reverter versões e modificar parâmetros cirurgicamente
- Executar QA automatizado com agentes que identificam inconsistências no JSON antes da geração
- Rodar múltiplos agentes em paralelo para gerar cenas simultâneas a partir de JSON estruturado

## O que é JSON e por que ele importa para vídeo com IA

JSON significa JavaScript Object Notation. É uma linguagem de estruturação de dados criada para ser lida tanto por humanos quanto por máquinas. Em contextos de desenvolvimento de software, é o formato padrão para troca de informações entre sistemas. Em prompts de vídeo com IA, ele assume um papel diferente: substitui o texto livre por campos explícitos e sem ambiguidade.

Quando você escreve um prompt em linguagem natural, a IA precisa interpretar o que você quis dizer. "Uma personagem andando em uma floresta sombria com luz dramática" é uma instrução ambígua: a personagem está parada ou em movimento? A câmera acompanha o movimento ou está fixada? A luz vem de cima, de lado, de baixo? JSON elimina essa ambiguidade ao forçar que cada elemento ocupe um campo separado.

Um prompt em JSON para uma cena de vídeo pode conter:
- **subject:** quem ou o que está no frame, incluindo aparência, postura e ação
- **camera:** tipo de plano (close-up, wide shot, POV), ângulo e movimento da câmera
- **environment:** localização, hora do dia, condições climáticas e texturas de fundo
- **lighting:** fonte de luz, temperatura de cor, direção e intensidade
- **style:** estética geral, referências visuais, paleta e grão de imagem
- **motion:** descrição do movimento do sujeito e do ambiente frame a frame

Com esses seis campos preenchidos, a IA recebe uma instrução estruturada, não uma sugestão aberta.

## Quando JSON surgiu como prática de prompt de vídeo

O uso de JSON em prompts de vídeo emergiu no final de 2024 e se consolidou no início de 2025. Profissionais que trabalhavam com pipelines avançados de geração perceberam que o texto livre criava variações difíceis de controlar entre shots: a câmera mudava de ângulo sem motivo, o personagem perdia características visuais, a iluminação oscilava sem consistência narrativa.

JSON trouxe controle paramétrico: em vez de reescrever o prompt inteiro para ajustar apenas a iluminação, você altera somente o valor do campo "lighting" e mantém todo o resto intacto. Isso transforma prompts de um processo de tentativa e erro em um processo de engenharia de parâmetros.

## Quando JSON faz sentido, e quando não faz

JSON é desnecessário para geração de imagens estáticas. Uma imagem não tem duração, não tem movimento ao longo do tempo, não exige consistência entre frames. O controle de um prompt de imagem em texto livre é suficiente na maioria dos casos.

Em vídeo, JSON se justifica em três situações específicas:

**Controle temporal por segundo (timestamp prompting):** você especifica o que acontece em cada janela de tempo. Por exemplo: "de 0 a 3 segundos a câmera está estática em wide shot; aos 4 segundos a câmera começa a avançar lentamente em direção ao sujeito; de 5 a 8 segundos o sujeito reage e olha diretamente para a câmera". Esse nível de controle é impossível em texto livre sem criar ambiguidades sobre quando cada evento acontece.

**Trabalho em equipe com versionamento:** quando múltiplas pessoas precisam modificar shots, JSON permite que cada um altere apenas o campo de sua responsabilidade. O diretor de fotografia muda "lighting" sem tocar em "subject". O diretor de arte ajusta "style" sem afetar "camera". Cada mudança é rastreada individualmente, não como uma reescrita completa do prompt.

**Pipelines com APIs que aceitam parâmetros estruturados:** ferramentas como Hilo Minimax e LTX Studio aceitam JSON diretamente via API. Nessas plataformas, o JSON não é apenas mais legível, é o formato nativo que a ferramenta processa. Enviar texto livre nesses contextos é subotimizar o pipeline.

## Por que JSON não funciona em ferramentas de navegador

A maioria das plataformas de geração de vídeo acessadas pelo navegador tem mecanismos de proteção contra prompt injection, ataques em que um usuário tenta manipular o comportamento do sistema injetando instruções ocultas no prompt. Como JSON usa sintaxe estruturada com chaves e campos nomeados, essas ferramentas frequentemente o interpretam como uma tentativa de injeção e ou bloqueiam o input ou o processam de forma incorreta.

Isso significa que JSON como linguagem de prompt de vídeo funciona principalmente em contextos locais ou via API, onde você tem controle direto sobre como os dados chegam ao modelo. Para uso em navegador, Kling, Runway, Hailuo no modo web, texto livre ainda é o caminho mais confiável.

## O fluxo correto: LLM como conversor de linguagem

Você não precisa escrever JSON manualmente. Essa é uma das informações mais práticas da aula: escreva em linguagem natural e peça a um LLM para converter.

O fluxo funciona assim:

**Passo 1:** descreva a cena em linguagem natural para um LLM (Claude, ChatGPT ou Gemini). Não se preocupe com estrutura. Escreva como contaria a cena para alguém: "Uma robô feminina entra em uma sala escura, a câmera está no nível do chão olhando para cima, há apenas um feixe de luz vindo do teto".

**Passo 2:** peça ao LLM para gerar o shot breakdown dessa cena em JSON com os seis campos do framework. O LLM distribui automaticamente cada elemento da sua descrição para o campo correspondente e preenche campos que você não mencionou com valores neutros ou coerentes.

**Passo 3:** revise o JSON gerado para verificar consistência entre os shots e âncoras visuais. O personagem mantém as mesmas características físicas de um shot para outro? A temperatura de cor é consistente com a motivação narrativa da cena? A postura do sujeito faz sentido dado o movimento da câmera?

**Passo 4:** use o JSON via API no pipeline da ferramenta de vídeo escolhida.

O LLM funciona como um tradutor de linguagem narrativa para linguagem paramétrica. Você contribui com criatividade e intenção. O LLM contribui com a estrutura técnica.

## Timestamp prompting: controle por segundo

Timestamp prompting é a técnica de usar JSON para especificar eventos com precisão temporal dentro de um vídeo. Em vez de descrever uma cena genericamente, você mapeia o que acontece em cada janela de tempo.

Um exemplo estruturado:

```json
{
  "timestamps": {
    "0-3s": "câmera estática em wide shot, personagem parado no centro do frame",
    "4s": "câmera começa a avançar lentamente em direção ao personagem",
    "5-7s": "câmera em close-up, personagem levanta os olhos para a câmera",
    "8s": "fade para preto"
  }
}
```

Esse nível de controle permite criar correspondência entre o ritmo narrativo que você imaginou e o que a IA gera. Sem timestamp prompting, a IA decide sozinha quando os eventos acontecem e com qual velocidade.

Em vídeos curtos de 8 a 15 segundos, que é o range de muitos modelos atuais, timestamp prompting é especialmente poderoso porque cada segundo representa uma fração significativa do total.

## Versionamento com Git: por que prompts são código

Git é um sistema de controle de versão originalmente desenvolvido para código de software. A hipótese por trás de usar Git para prompts é que prompts estruturados em JSON têm as mesmas propriedades que código: são texto estruturado, podem ser modificados de forma granular, têm histórico relevante e precisam de rastreabilidade.

Com Git, você pode:

- **Guardar o histórico de cada versão do prompt:** se a versão 3 do prompt gerou um resultado melhor que a versão 7, você consegue voltar exatamente para a versão 3 sem ter que lembrar o que mudou.
- **Reverter para versões anteriores:** se uma mudança degradou a qualidade do resultado, `git revert` desfaz a mudança sem apagar o histórico.
- **Modificar um parâmetro específico sem reescrever o prompt inteiro:** em texto livre, qualquer mudança implica reescrever e perder a comparabilidade com a versão anterior. Em JSON versionado com Git, a mudança aparece como um diff preciso: "campo 'lighting' alterado de 'luz natural difusa' para 'luz lateral dramática'".
- **Colaborar em equipe com rastreabilidade:** cada colaborador tem sua branch, as mudanças são revisadas antes de serem incorporadas, e o histórico identifica quem mudou o quê e quando.

Isso transforma prompts de artefatos descartáveis em ativos de produção rastreáveis.

## QA automatizado com agentes

Antes de enviar um JSON para geração de vídeo, um agente instruído pode fazer Quality Analysis do JSON gerado e identificar problemas que passariam despercebidos em uma revisão manual rápida.

Problemas típicos que o agente identifica:

**Postura contraditória entre shots:** o personagem está sentado no shot 3, mas no shot 4 o JSON descreve o personagem "se levantando de uma cadeira" sem que no shot 3 houvesse qualquer indicação de que ele estava sentado.

**Inconsistência de âncoras visuais:** a personagem tem cabelo preto no shot 1 e o campo "subject" do shot 5 não menciona a cor do cabelo, abrindo espaço para a IA gerar com uma cor diferente.

**Temperatura de cor oscilando sem motivação narrativa:** o shot 2 tem iluminação fria (temperatura 6500K) e o shot 3 tem iluminação quente (temperatura 3200K) sem nenhuma mudança de ambiente ou tempo diegético que justifique a variação.

**Transições quebradas por salto de plano:** o shot 4 termina em close-up e o shot 5 começa em extreme wide shot sem nenhuma cena de transição que justifique o salto.

Quando o agente identifica um problema, ele não apenas aponta, ele propõe a correção cirúrgica: altera apenas a chave problemática, mantém tudo o mais intacto e apresenta o JSON corrigido para aprovação. Isso é muito mais eficiente do que revisar manualmente todos os campos de todos os shots em uma sequência longa.

## Execução paralela com múltiplos agentes

Um dos ganhos mais expressivos de trabalhar com JSON estruturado é a capacidade de rodar múltiplos agentes em paralelo para gerar shots simultaneamente.

O fluxo funciona assim: você tem um JSON com 9 shots. Em vez de gerar um shot, esperar o resultado, revisar, gerar o próximo, você instancia 9 agentes simultaneamente, cada um recebendo o JSON do seu shot correspondente. Todos os 9 shots são gerados ao mesmo tempo. O tempo de geração de 9 shots equivale ao tempo de geração de 1 shot.

Isso só é possível porque o JSON estrutura cada shot de forma independente e completa. Cada agente tem tudo o que precisa para executar sua tarefa sem depender do resultado dos outros agentes.

A paralelização não elimina a revisão humana, você ainda precisa verificar se cada resultado está adequado antes de levar para o próximo passo. Mas elimina o tempo de espera sequencial, que em produções longas representa uma fração enorme do tempo total de trabalho.

## O que JSON não resolve

JSON é uma ferramenta de precisão paramétrica. Ele não substitui a decisão narrativa, a identidade visual do personagem ou a consistência de universo.

Se o one-pager do personagem não foi definido antes, JSON não vai salvar a consistência visual, porque não há referência para ancorar os campos "subject" e "style". Se o storyboard não existe, JSON não vai criar a sequência narrativa, porque a estrutura de shots precisa vir de uma decisão criativa anterior, não de uma ferramenta técnica.

JSON funciona na execução. O processo criativo que o antecede é responsabilidade humana.

## Ferramentas que aceitam JSON nativamente

- **Hilo Minimax:** aceita parâmetros estruturados via API para geração de vídeo com controle temporal
- **LTX Studio:** plataforma construída em torno de estrutura de shots por parâmetro, com suporte nativo a JSON em pipelines avançados
- **Claude Code com APIs de vídeo:** permite criar agentes que consomem JSON, executam a geração e retornam resultados de forma programática

## Coloque em prática

Pegue um prompt de vídeo que você já usou ou criou agora. Escreva a cena em linguagem natural, depois peça a um LLM (Claude ou ChatGPT) para converter em JSON com os seis campos: subject, camera, environment, lighting, style e motion. Compare o JSON com o texto original e identifique: onde o JSON forçou precisão que o texto deixava em aberto? Qual campo teve mais divergência entre o que você imaginou e o que o LLM estruturou?

Se quiser ir além: crie dois shots em JSON, adicione timestamps em cada um e peça ao LLM para fazer QA da transição entre eles. Veja que problemas o agente identifica.
