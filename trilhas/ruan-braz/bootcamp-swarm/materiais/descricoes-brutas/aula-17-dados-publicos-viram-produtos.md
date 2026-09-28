Cálculo interno: [7 blocos] / [22 parágrafos totais] / [1015 palavras estimadas] / [1015 ÷ 200 = 6 minutos]

# Dados públicos viram produtos

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar fontes de dados que podem alimentar uma automação
- Distinguir consulta a dados, uso de ferramentas e integração de sistemas
- Reconhecer limites de acesso, custo, qualidade e uso de uma API
- Estruturar uma hipótese antes de cruzar bases diferentes

## Explorar o catálogo de possibilidades

Ruan começa por APIs de dados, que podem fornecer informação a um projeto sem que o agente pesquise a página do serviço a cada execução. Ele sugere perguntar ao agente que aplicações de API existem, em vez de buscar somente sua classificação técnica.

Sua divisão didática é entre dados, ferramentas e integração de sistemas; uma API concreta pode cumprir mais de uma função.

Entre os exemplos levantados na aula estão IBGE, BrasilAPI, ViaCEP, Portal da Transparência, NASA, GitHub, bases de clima, notícias e dados econômicos. A lista funciona como mapa de possibilidades, não como garantia de que cada fonte oferece hoje os mesmos dados, preço ou permissões. Antes de conectar uma delas, é preciso ler sua documentação e verificar o recorte disponível.

Ruan propõe uma pesquisa orientada pelo próprio trabalho: listar APIs que poderiam ajudar no projeto, separar as gratuitas das pagas e explicar o que cada uma devolve. O resultado dessa busca precisa ser revisado antes de virar decisão técnica.

## Pesquisa prolongada com loop e cron

Como exercício, Ruan sugere pedir ao Claude Code que procure APIs relevantes para os processos já conhecidos do usuário durante a noite. O comando `/loop` define uma repetição por intervalo. Ele menciona agentes em paralelo para dividir a busca e um cron para retomar a tarefa após a renovação do limite da sessão.

A retomada precisa ser configurada antes de o limite impedir novas ações. Ruan apresenta isso como um modo de planejar a continuidade da pesquisa; a gravação não mostra uma busca de oito horas concluída. O horário, os limites de uso e o custo precisam ser conferidos no ambiente em que a rotina for executada.

## GET, POST e lugar da conexão

A aula apresenta duas operações frequentes. `GET` consulta dados; `POST` envia dados para uma operação do serviço. Buscar indicadores para o painel é exemplo de consulta. Enviar uma publicação para uma plataforma é exemplo de ação. A documentação de cada API define os métodos e as condições realmente aceitos.

No projeto de pesquisa das aulas anteriores, uma API de dados poderia substituir ou complementar algumas fontes. Ruan prefere, porém, criar uma pequena demonstração isolada para que a turma veja a conexão com clareza. O gatilho será um botão; o projeto consultará as fontes escolhidas e apresentará o resultado numa tela.

## Testar a hipótese de cruzar bases

Como exercício, Ruan imagina cruzar informações de empresas de uma região com comportamento de compra local. Antes de escrever código, pede ao agente que liste fontes públicas e pagas, avalie a ideia, encontre pontos cegos e proponha oportunidades.

A resposta apresentada em aula aponta uma diferença essencial entre os conjuntos: cadastro de empresas pode existir por estabelecimento, enquanto indicadores de consumo frequentemente aparecem agregados por município ou região maior. Cruzar essas escalas sem critério pode sugerir um padrão que os dados não sustentam.

Para trabalhar com esse tipo de hipótese, é preciso escolher indicadores aproximados, declarar seus limites e evitar apresentar correlação como comportamento individual ou causa.

No levantamento aparecem cadastro de CNPJ, emprego, população, renda, pagamentos e séries de varejo. Ruan cita CAGED e RAIS para emprego e salários. Fontes pagas de geomarketing também entram na comparação.

Ruan e o agente discutem que bases grandes podem ser mais adequadas a download e consulta local, por exemplo com DuckDB ou PostgreSQL, do que a chamadas individuais repetidas.

O exemplo serve para aprender a perguntar qual fonte é apropriada para cada volume e nível de detalhe.

## Ler termos e qualidade antes de usar

Ruan chama atenção para limite de requisições, preço por uso, atraso de atualização, recorte geográfico e regras para armazenar ou redistribuir dados. Informações de pessoas e empresas também exigem cuidado com privacidade e com os termos da fonte. A existência de um endpoint público não resolve essas questões.

Ele pede ao agente que resuma riscos e pontos cegos da documentação, mas mantém a necessidade de conferir as regras originais. A discussão inclui falácia ecológica, cadastros desatualizados, endereços que não representam o local da atividade e indicadores que funcionam só como aproximação. A qualidade da decisão depende de reconhecer esses limites.

Ruan compartilha um artigo sobre assimetria de informação para explicar por que organizar dados acessíveis pode gerar valor para outra pessoa. O valor não está apenas em possuir a base, mas em transformá-la em análise útil, verificável e adequada ao problema do cliente.

## APIs de ferramenta e coleta por páginas

Ao final, Ruan mostra a Apify como um catálogo de ferramentas oferecidas por diferentes criadores. Uma delas pode coletar informações de páginas, processo chamado de scraping. Ele distingue essa coleta de consultar uma API oferecida pelo próprio serviço. Em um marketplace, a qualidade e a estabilidade variam conforme o fornecedor.

A recomendação da aula é examinar avaliações, uso, preço e confiabilidade da ferramenta. Quando houver uma API oficial para a necessidade, sua documentação e suas permissões oferecem um caminho mais claro. Para qualquer opção, termos de uso e dados obtidos precisam ser considerados antes de construir a automação.

## Materiais da aula

- [Quadro do Bootcamp Swarm no Figma](https://www.figma.com/board/pWajXLautZ6pMWOUcQ7t3O/Bootcamp%2D%2D%2DSwarm?node-id=0-1&t=RxnIk759kJaYUfvT-1), usado para desenhar o exemplo.
- [The Market for Lemons, no JSTOR](https://www.jstor.org/stable/1879431), link compartilhado por Ruan no chat ao discutir assimetria de informação.
- [Lista de APIs públicas](https://atraca.com.br/lista-de-apis-publicas/): referência complementar compartilhada por uma participante no chat do terceiro encontro; confira a documentação da API escolhida antes de usá-la.

## Coloque em prática

Escolha um dado que faria diferença no seu projeto. Peça uma lista de fontes possíveis e confira, na documentação de duas delas, o recorte, a atualização, o custo, o limite de consultas e o direito de uso. Registre o que ainda não pode ser concluído a partir desses dados.
