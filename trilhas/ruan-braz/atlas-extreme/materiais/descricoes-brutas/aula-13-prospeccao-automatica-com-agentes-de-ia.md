Cálculo interno: 14 blocos / 48 parágrafos totais / 1.641 palavras estimadas / 1.641 ÷ 200 = 8,2 minutos

# Prospecção automática com agentes de IA

**Tempo estimado de leitura:** 9 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Estruturar uma base de contexto para agentes de pesquisa
- Distinguir agentes, skills e scripts
- Aplicar agentes à prospecção de empresas e decisores
- Reconhecer cuidados com fontes, dados pessoais e LGPD

## Refinar relatórios e propostas geradas por IA

A aula retoma o Business OS com agentes, direção do negócio e resultados de pesquisa já disponíveis. Antes de avançar para a prospecção, a interface dos relatórios é refinada para separar visualização e edição, melhorar hierarquia tipográfica e apresentar o formulário em modal.

O mesmo padrão visual deve ser aplicado a todos os relatórios. Em vez de editar cada tela isoladamente, agentes podem trabalhar em paralelo nos cards e componentes compartilhados. Referências visuais e capturas ajudam a explicar o resultado esperado, mas a consistência depende das matrizes do design system.

As propostas dos agentes também precisam de um fluxo de aprovação. O sistema deve permitir revisar, editar, aprovar ou rejeitar o que foi produzido antes que a informação se torne parte da fonte de verdade do negócio.

*Para ver o pedido de refinamento da tela de relatório, assista a partir de 02:31 no vídeo.*

## Memória como conhecimento estruturado

Memória de IA não se limita ao histórico de uma conversa. Para ser reutilizável, o conhecimento precisa estar organizado, recuperável e relacionado. O Business OS utiliza arquivos Markdown com front matter como etapa inicial, mantendo informações legíveis tanto pela pessoa quanto pelos agentes.

A evolução apresentada parte de prompts isolados, passa por recuperação de contexto e chega a grafos de conhecimento. Um banco relacional tradicional consulta correspondências e relações previamente modeladas. Bancos vetoriais recuperam conteúdos por similaridade semântica. Um grafo acrescenta nexos explícitos entre elementos como mapa de mercado, ICP, ímã de problemas, tese de valor e oferta.

Essas conexões formam um efeito cumulativo. Cada relatório aprovado enriquece o contexto usado no próximo trabalho. Por isso, números, fontes, hipóteses e expectativas devem ser identificados corretamente, evitando transformar uma estimativa em fato.

## Revisar mapa de mercado, problemas e ICPs

Os agentes geram mapa de mercado, estimativas de TAM, SAM e SOM, lista de problemas e perfis ideais de cliente. Como a entrada inicial é genérica, os resultados servem como hipótese e demonstração, não como análise definitiva para tomada de decisão.

O ímã de problemas reúne dores como medo da IA, dificuldade de executar, cursos não concluídos, solidão na jornada, desconfiança de promessas e incerteza profissional. Cada problema pode receber critérios e pontuações para orientar sua priorização.

Entre os ICPs aparecem o profissional em transição, o especialista que deseja transformar conhecimento em produto e o empreendedor individual. A utilidade desses perfis depende da qualidade do contexto fornecido e da validação com fontes e pessoas reais.

*Para acompanhar a revisão dos relatórios de mercado, problemas e ICPs, assista a partir de 22:42 no vídeo.*

## Planejar um CRM modular

O próximo módulo é um mini CRM para registrar pessoas, empresas e oportunidades. Dados fictícios são usados primeiro para validar a interface, permitindo ajustar cards, formulários, filtros e estados sem depender de uma integração externa.

Ruan explica que, em uma operação mais robusta, CRM, vendas, pesquisa de mercado e atendimento podem existir em sistemas separados e conectados por API. O mini CRM construído na aula é uma versão simples para demonstrar a lógica de pessoas, empresas e oportunidades.

Como a prospecção trabalha com informações de pessoas, a conexão com APIs e a coleta de dados envolvem segurança, LGPD e responsabilidade. Esses cuidados são apresentados como parte do trabalho que precisa ser feito corretamente.

## Projetar a experiência do CRM

A listagem prioriza cards no lugar de uma tabela extensa. Ao selecionar um lead, um drawer lateral apresenta seus detalhes e ações de edição. Em oportunidades, um Kanban organiza o avanço comercial e permite arrastar registros entre etapas.

Agentes paralelos implementam pessoas, empresas, oportunidades e ajustes visuais. O design system e o Storybook devem ser atualizados para que os novos componentes mantenham a mesma linguagem das telas anteriores.

O resultado precisa ser verificado em diferentes larguras. A inspeção do navegador e as capturas em modo mobile revelam sobreposição, excesso de scroll e componentes que não respondem corretamente. Se um agente não apresentar feedback visual durante uma tarefa, confirme o resultado diretamente no sistema.

*Para ver o drawer de detalhes e a organização do mini CRM, assista a partir de 36:33 no vídeo.*

## Formular a pesquisa de prospecção

O pedido da demonstração usa o contexto acumulado para localizar dez empresas de Belo Horizonte adequadas a uma oferta B2B. A oferta é um workshop presencial ou on-line, com valor entre R$ 15 mil e R$ 30 mil, voltado a equipes de empresas de médio porte que desejam implementar IA.

O prompt solicita pesquisa em LinkedIn, Google Maps, blogs e portais de notícias, identificação de decisores e coleta de contatos profissionais públicos. Também define que empresas e pessoas sejam separadas no CRM e que CNPJ e CPF recebam tratamentos distintos.

O agente não deve inventar endereço de e-mail nem preencher lacunas como se fossem fatos. Fontes públicas podem orientar a descoberta, mas contatos inferidos, portes estimados e sites encontrados precisam de confirmação antes de qualquer abordagem.

*Para acompanhar a formulação do pedido de prospecção com dez empresas, assista a partir de 43:03 no vídeo.*

## Dados fictícios, dados reais e persistência

Os leads fictícios são removidos antes da gravação dos resultados reais. Durante o protótipo, um arquivo JSON mantém pessoas e empresas, mas essa persistência é temporária. Uma aplicação publicada deve usar banco de dados, autenticação, autorização e regras que separem os dados de cada usuário.

O trabalho é dividido em etapas: pesquisar empresas, modelar os registros, preparar a persistência, ajustar filtros de pessoa e empresa e verificar o app. Essa decomposição torna o progresso observável e reduz a chance de misturar pesquisa, interface e armazenamento em uma única instrução vaga.

Uma landing page pode enviar novos cadastros diretamente ao CRM por API. Agentes e scripts também podem executar integrações sem depender de ferramentas externas de automação.

## API, scraping e responsabilidade

Na demonstração, o scraping coleta informações públicas disponíveis na internet, principalmente no Google Maps. Uma API muda o tipo de acesso porque permite buscar dados diretamente em outro sistema, inclusive informações que não estão expostas em páginas públicas.

Serviços como IBGE e bases de CNPJ podem enviar dados diretamente ao sistema. Nos registros pesquisados, informações inferidas ainda precisam ser confirmadas, como mostra o e-mail sinalizado como incerto e o site associado incorretamente a uma empresa real.

Ruan reforça que dados de pessoas exigem segurança, responsabilidade e atenção à LGPD. Uma conexão tecnicamente possível ainda precisa tratar essas informações de maneira correta.

## Agentes, skills e scripts

Um agente reúne identidade, objetivo, contexto e permissões. Ele pode, por exemplo, ler pesquisas, editar o CRM ou apenas revisar uma proposta. O escopo determina o que ele está autorizado a fazer.

Uma skill descreve um procedimento reutilizável, semelhante a um processo operacional padrão. Ela ensina como executar uma atividade, quais etapas seguir e quais critérios validar. Vários agentes podem usar a mesma skill.

Um script é código determinístico para uma operação repetível. Em vez de pedir que a IA improvise sempre, tarefas previsíveis podem ser executadas por scripts, enquanto o agente decide quando aplicá-los e interpreta os resultados.

## Automação local e execução em VPS

Agentes podem trabalhar de forma mais autônoma, mas uma automação local para quando o computador é desligado e compete pelos recursos da máquina durante o uso. Para execução contínua, uma VPS mantém processos ativos sem depender do notebook pessoal.

A configuração de uma VPS é apresentada como um processo mais avançado. Depois de configurada, ela pode manter agentes e automações funcionando continuamente sem depender do computador pessoal ligado.

Na comparação apresentada, o terminal e o aplicativo do Claude oferecem mais integração com o computador do que determinadas extensões de IDE. Uma extensão de navegador tem outro propósito: permitir que o Claude consulte páginas e interaja com a experiência web durante pesquisa e teste.

## Validar o resultado da prospecção

Ao final, a busca registra dez empresas e quinze pessoas no CRM. Os cards exibem dados como função, CNPJ, porte, site, justificativa de aderência e score. As oportunidades podem avançar pelo Kanban entre contato, qualificação, negociação, venda e perda.

A inspeção mostra também limitações importantes. Um e-mail aparece como inferido e precisa ser confirmado. Em outro registro, a empresa existe, mas o site está incorreto. O resultado demonstra capacidade de descoberta, não garantia de precisão.

Os resultados exigem conferência porque a própria demonstração encontra um e-mail inferido e um site incorreto. Integrações futuras podem consultar dados empresariais e acrescentar novas análises aos registros.

*Para ver os dez registros, as quinze pessoas encontradas e a movimentação no funil, assista a partir de 1:09:02 no vídeo.*

## Transformar a solução em oferta

Uma forma direta de monetizar é resolver primeiro um problema próprio e depois oferecer a solução a outras pessoas com a mesma necessidade. O Business OS, o CRM e os agentes podem ser adaptados a diferentes áreas profissionais e vendidos como implantação ou resultado pronto.

Assinatura não é a única possibilidade. Licenciamento, franquia, projeto e serviço de implementação possuem economias diferentes. Uma assinatura de baixo valor pode se tornar inviável quando custos de aquisição, suporte, infraestrutura e IA não foram modelados.

A tecnologia deve vir depois da definição do problema, do cliente e do modelo de negócio. O fato de uma solução ser tecnicamente possível não significa que ela seja sustentável ou adequada ao mercado.

## Coloque em prática

Revise o contexto do seu Business OS e escolha uma oferta B2B específica. Defina região, porte, faixa de investimento e perfil de decisor. Peça a um agente que pesquise dez empresas usando fontes públicas e marque qualquer informação inferida.

Importe os registros no CRM, confira os dados encontrados e mova as oportunidades pelo Kanban somente depois dessa verificação.
