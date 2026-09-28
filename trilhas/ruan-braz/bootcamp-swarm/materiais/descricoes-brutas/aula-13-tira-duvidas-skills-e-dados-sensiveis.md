Cálculo interno: [8 blocos] / [24 parágrafos totais] / [1109 palavras estimadas] / [1109 ÷ 200 = 6 minutos]

# Tira-dúvidas: skills e dados sensíveis

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir uma skill de um agente com função específica
- Identificar os arquivos e conhecimentos mínimos para orientar um projeto
- Aplicar o raciocínio de entrada de dados a automações criativas e operacionais
- Reconhecer limites de privacidade ao lidar com informação sensível

## Usar o projeto compartilhado como ponto de partida

Na conversa que encerra o segundo encontro, Ruan retoma o projeto local de pesquisa e copy e o quadro desenhado no Figma. A cópia compartilhada serve de referência para experimentar. Para funcionar em outro computador, ainda é preciso configurar o agendamento, trocar as fontes e adaptar prompts, identidade verbal e critérios de entrega.

Ele convida a turma a desenhar os próprios fluxos e compartilhar o que construiu. O ponto central da atividade é executar uma primeira versão, observar o resultado e melhorar o processo com dados do uso.

## Skills, agentes e permissões

Uma pergunta da turma leva à diferença entre skill e subagente. Ruan descreve a skill como um arquivo com instruções de uma tarefa ou etapa: uma receita que o agente consulta quando aquele trabalho aparece. Ela pode estar ligada a um bloco do fluxo, como escrever headline ou organizar um formulário.

O agente de código já é um agente e pode receber uma função temporária pelo pedido. Criar outro agente apenas para lhe dar uma persona nem sempre acrescenta algo. Na explicação de Ruan, agentes separados fazem mais sentido quando precisam de limites diferentes de atuação, como ler, editar, publicar ou auditar.

As permissões tornam explícito o que cada um pode fazer.

Skills e configurações de agentes são arquivos. Essa constatação reduz a distância entre o desenho do fluxo e sua implementação: a pessoa pode marcar uma etapa no Figma, pedir ao agente que crie a instrução correspondente e depois inspecionar ou editar o texto.

## Aprender o suficiente para orientar o agente

Para quem não tem formação técnica, Ruan recomenda começar pelo próprio objetivo e pedir ao agente uma explicação curta dos conceitos necessários. Entender a diferença entre pasta e arquivo, saber que um `.py` pode conter um script, que um `.md` guarda instruções legíveis e que HTML e CSS organizam estrutura e aparência já ajuda a acompanhar o trabalho.

Não é preciso dominar uma linguagem inteira antes de fazer um projeto. A familiaridade cresce ao abrir arquivos, perguntar o que cada um faz e identificar o que depende da pessoa e o que o computador executa. O agente ajuda a construir, enquanto a pessoa define problema, contexto, critérios e revisão.

## Redesenhar trabalhos criativos pelo resultado

Uma pergunta sobre Illustrator, Photoshop e InDesign abre um exemplo de produção gráfica. Conectar diretamente programas de criação por MCP pode exigir muitos passos e tokens. Ruan sugere pensar na entrega final e nas alternativas disponíveis para produzi-la.

Ele descreve um kit de materiais para um evento de uma empresa de suprimentos laboratoriais. O agente poderia levantar identidade visual no site, preparar assinatura de e-mail, cartão e folders, e usar o gabarito da gráfica. Para peças impressas, são citados CMYK, curvas, sangria, margens de segurança e PDF adequado.

A revisão humana precisa conferir texto, medidas e especificações antes de mandar imprimir.

O exemplo acompanha uma reflexão sobre modos de trabalhar, incluindo operantes, convergentes, emergentes e nexialistas. Ruan usa essas categorias para discutir como alguém pode deixar de repetir um processo antigo quando há outro caminho para entregar o mesmo resultado. O objetivo não é dispensar critério profissional, e sim aplicá-lo também ao planejamento e à conferência da produção.

## Toda automação precisa de um fato de entrada

Ao discutir um aplicativo de acompanhamento de obras, Ruan pergunta como o sistema saberia que uma etapa foi concluída. Poderia haver atualização humana, foto de nota enviada a um grupo, marco informado pelo responsável, câmera ou sensor. Sem uma fonte que registre o acontecimento, o agente não consegue conhecer o progresso real apenas porque existe um painel.

A mesma regra se aplica a um arquivo criado no InDesign: salvar o projeto em uma pasta compartilhada pode ser o evento observado por um script que o envia a outro sistema. O gatilho deve corresponder a um fato verificável do processo, e a pessoa decide qual fonte é confiável para aquela decisão.

## Serviço, tempo e padrões de interface

Ruan comenta que uma empresa pode usar agentes e sistemas próprios para entregar posts, campanhas, peças e governança a clientes. O valor está na entrega do serviço; vender um SaaS também pode fazer sentido, conforme o negócio. Sua ênfase para quem está começando é obter resultado antes de construir uma plataforma extensa.

Na gestão do trabalho, cita o ClickUp e o tempo investido para a equipe adotá-lo. Escolher prioridades, dizer não e atacar gargalos ou alavancas é mais decisivo do que apenas preencher uma agenda. Parcerias e divisão de recursos também entram nessa escolha.

Para design de produto, exemplifica uma skill que padroniza tabelas e formulários: poucos campos de busca ficam visíveis; filtros adicionais podem abrir numa lateral. A mesma instrução pode oferecer tipos de tela e critérios para escolhê-los. Um onboarding muito diferente, por sua vez, pode merecer instruções próprias.

## Dados sensíveis e limites de acesso

A turma pergunta sobre propostas que envolvem números e informações confidenciais. Ruan distingue enviar um dado a um modelo remoto de usar esse dado para treinar o modelo. Informações inseridas no pedido seguem para o serviço que processa a solicitação; a política de treinamento é outra questão.

Uma solução discutida é deixar o agente criar o modelo de proposta com campos vazios e usar um script local para preencher os valores privados a partir de uma tabela restrita.

O desenho exige conferir se o agente não lê essa tabela, se logs e saídas não expõem os valores e se o documento final vai apenas para o destino previsto. Um modelo local também é mencionado, com outras exigências de equipamento e qualidade.

Essas escolhas dependem da política de dados da empresa e das regras aplicáveis ao caso. A aula oferece uma forma de separar planejamento, preenchimento e revisão, sem tratar a presença de um arquivo local como garantia automática de sigilo.

## Materiais da aula

- [Quadro do Bootcamp Swarm no Figma](https://www.figma.com/board/pWajXLautZ6pMWOUcQ7t3O/Bootcamp%2D%2D%2DSwarm?node-id=9-25&t=FuFcgjYkuBsE8KKR-1), retomado por Ruan no chat do segundo encontro.

## Coloque em prática

Escolha uma etapa do seu fluxo e escreva a instrução que o agente precisa seguir para executá-la. Indique os arquivos de entrada, as permissões necessárias, o resultado esperado e quem o confere. Se houver dado sensível, desenhe por onde ele circula antes de permitir a execução.
