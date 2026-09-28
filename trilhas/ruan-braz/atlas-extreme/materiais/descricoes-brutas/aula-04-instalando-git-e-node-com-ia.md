Cálculo interno: 8 blocos / 21 parágrafos totais / 658 palavras estimadas / 658 ÷ 200 = 3,3 minutos

# Instalando Git e Node com IA

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Estruturar uma pasta local para o Business OS
- Distinguir um agente de um chatbot
- Reconhecer Git e Node como dependências do ambiente
- Executar a instalação assistida dessas ferramentas

## Criar a pasta do Business OS

Comece criando uma pasta chamada `Business OS` na área de trabalho. Ela será o espaço usado pelo Claude Code durante a construção do sistema que ajudará a gerenciar um negócio. O projeto também é relevante para colaboradores, pois as práticas apresentadas servem como preparação para mudanças no mercado de trabalho.

No aplicativo do Claude, abra o modo Code e confirme que o ambiente selecionado é `Local`, pois os arquivos serão manipulados no computador. Use o seletor de pasta para abrir `Business OS`. A partir desse momento, o agente passa a trabalhar dentro desse diretório.

Se apenas os modos Chat e Cowork estiverem visíveis, abra o menu principal e selecione Code. A configuração esperada reúne três elementos: modo Code, ambiente local e pasta `Business OS` selecionada.

*Para acompanhar a seleção da pasta local, assista a partir de 01:21 no vídeo.*

## Agente e autonomia

O Claude Code é apresentado como um agente, não apenas como um chatbot. Um agente possui autonomia para tomar decisões e executar ações. Ele consegue operar ferramentas instaladas no computador, criar arquivos e realizar tarefas no ambiente autorizado.

Essa capacidade é chamada de tool calling, ou chamada de ferramenta. Em vez de somente explicar como uma ação deveria ser feita, o agente pode usar um programa para executá-la. A autonomia depende das permissões concedidas e das ferramentas disponíveis no computador.

## Git e Node como dependências

Dependências são programas de que o ambiente precisa para funcionar corretamente. Para o fluxo apresentado, duas dependências importantes são Git e Node. Elas fornecem recursos que o Claude Code utilizará nas etapas seguintes da construção.

A aula não aprofunda a teoria de cada ferramenta neste momento. A prioridade é preparar o computador e permitir que o próprio agente conduza a instalação, deixando o estudo técnico detalhado para a documentação complementar.

## Instalação pelo Cowork

Abra uma conversa no modo Cowork e solicite em linguagem natural: `Instale o Git e o Node no meu PC`. No modo Chat, o Claude pode informar que não consegue instalar programas. O Cowork é necessário porque possui acesso às ações no computador.

Se a resposta trouxer apenas instruções, peça que a IA faça a instalação por você. Na demonstração em Windows de 64 bits, o agente identifica o sistema e escolhe o WinGet como caminho de instalação. Quando Git e Node já estão presentes, ele verifica o estado em vez de instalar novamente.

*Para acompanhar a verificação e a tentativa de instalação, assista a partir de 08:24 no vídeo.*

## Alternativa com Codex

Quem acompanha com ChatGPT pode abrir o Codex e fazer o mesmo pedido para instalar Git e Node. O princípio permanece igual: usar um agente local com permissão para operar ferramentas, não uma conversa restrita ao navegador.

Depois da instalação, feche e abra novamente o aplicativo da IA para que ele reconheça as dependências. Não é necessário reiniciar todo o computador, a menos que o próprio processo indique essa necessidade.

## Corrigir erros com a própria IA

Computadores diferentes podem produzir erros diferentes. Quando isso acontecer, capture a tela, envie a imagem ao Claude e explique que a instalação falhou. Peça uma análise do erro e um passo a passo de correção.

Esse fluxo evita tentar adivinhar a solução sem contexto. A mensagem de erro e a imagem fornecem ao agente os dados necessários para orientar a próxima ação, mantendo o usuário responsável por acompanhar e autorizar o processo.

## Coloque em prática

Crie a pasta `Business OS` e abra-a no modo Code com ambiente local. No Cowork ou no Codex, solicite a instalação de Git e Node. Reinicie o aplicativo e peça que o agente verifique as versões instaladas.
