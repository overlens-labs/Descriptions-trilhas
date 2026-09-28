# Ferramentas de edição de imagens

**Tempo estimado de leitura:** 6 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar as principais ferramentas de edição de imagens com IA disponíveis no mercado
- Distinguir o fluxo rápido do fluxo artesanal de edição e saber quando aplicar cada um
- Reconhecer as capacidades específicas do Photoshop, Lightroom e dos editores nativos das ferramentas de geração

## Geração e edição não são sempre o mesmo modelo

Um ponto essencial que a aula esclarece logo de início: o modelo que você usa para gerar uma imagem não é necessariamente o mesmo que vai editá-la. Existem ferramentas que geram e editam no mesmo ambiente, e ferramentas que fazem apenas uma das duas coisas. Reconhecer essa distinção é o primeiro passo para montar um fluxo eficiente.

O NanoBanana (Gemini) é um exemplo de modelo que faz as duas coisas. Ele pega partes da imagem e vai editando por cima, sem regenerar a imagem inteira. Se você quer tirar um carro de cena, remover uma pessoa, trocar a roupa de um personagem, ele faz isso de forma localizada por instrução em prompt. Essa edição regional é uma das funcionalidades mais poderosas para ajustes precisos. O GPT também já incorporou esse tipo de edição direto no modelo. Os modelos da ByteDance, segundo a memória de Ruan no momento da gravação, não tinham essa funcionalidade integrada da mesma forma.

## Midjourney: edição nativa dentro da plataforma

O Midjourney não é só uma ferramenta de geração. Depois que você gera uma imagem, a plataforma oferece um conjunto de opções de edição direto na interface. As principais são:

**Upscale:** aumenta a resolução da imagem e adiciona mais detalhamento a ela. É o recurso mais usado quando a imagem ficou boa e você quer prepará-la para uso final.

**Variação (Vari):** gera versões alternativas mantendo a composição geral, útil quando você gostou da direção mas quer explorar possibilidades próximas.

**Zoom:** expande o enquadramento da imagem mantendo o tamanho do canvas, como se você estivesse afastando a câmera. O conteúdo novo nas bordas é gerado pela IA.

**Pan:** desloca a imagem para os lados, como uma panorâmica, gerando conteúdo novo nas extremidades.

**Remix:** permite modificar elementos específicos da imagem a partir de um novo prompt, mantendo a estrutura geral.

Além desses recursos, o Midjourney tem uma aba de edição que permite subir uma imagem sua ou inserir a URL de uma imagem externa para editá-la diretamente, apagando partes e pedindo que a IA gere algo por cima. Funcional, mas segundo Ruan, não é a ferramenta favorita dele para edição. O que vem a seguir é.

## Photoshop: controle de camadas e integração com IA

O Photoshop é apresentado como a ferramenta favorita para edição na Overlens. A razão principal é o nível de controle que ele oferece. Enquanto as ferramentas de edição nativas das plataformas de geração permitem apagar e gerar por cima, o Photoshop permite trabalhar camadas invisíveis de ajuste que nenhuma outra ferramenta oferece da mesma forma.

Essas camadas são os adjustments: contraste, níveis, curvas, saturação, balanço de cor e outras correções que ficam empilhadas sobre a imagem original sem alterar os pixels dela. Isso é muito útil porque há casos em que a imagem gerada está quase perfeita, mas a iluminação está levemente errada ou o contraste precisa de ajuste. Tentar corrigir isso regenerando a imagem pode destruir o que estava bom. No Photoshop, você aplica o ajuste por cima, vê o resultado e desfaz se não gostar.

Além disso, o Photoshop agora vem com o Firefly integrado diretamente na interface. Isso significa que você pode expandir as bordas da imagem e pedir para a IA gerar o que falta, tudo dentro do Photoshop, sem exportar para outra ferramenta. Funciona bem e é uma beleza segundo Ruan.

A questão do Firefly é abordada de forma direta: se você já assina Adobe e tem acesso ao Firefly como hub de IAs, não faz sentido usar o Firefly isolado quando você pode ir direto para o Photoshop, que é mais completo.

## Lightroom: correção de cor e masking com IA

O Lightroom é apresentado como complemento natural ao Photoshop, especialmente para quem trabalha com fotografia ou com imagens geradas que precisam de acabamento fotográfico. O Lightroom é muito bom para correção de cor, ajuste de exposição e para fazer masking com IA, ou seja, selecionar automaticamente elementos da imagem para aplicar ajustes apenas neles. Profissionais que já trabalham com fotografia no nível mais avançado vão encontrar no Lightroom um conjunto de ferramentas que se integra bem ao fluxo de IA.

Para quem não vai trabalhar imagem em nível profissional e mais avançado, Ruan é claro: não há necessidade de Photoshop nem Lightroom. Existem alternativas gratuitas e mais simples que resolvem o trabalho.

## Outras ferramentas de edição relevantes

A aula apresenta uma lista de ferramentas adicionais que a equipe da Overlens organizou:

**Photoscape:** oferece correções guiadas por IA, uma opção mais acessível para quem não usa Adobe.

**Runway:** plataforma que além de ser hub de ferramentas tem recursos próprios de edição de imagem.

**Crea e ReCraft:** ferramentas com foco em criação e edição, com custo acessível.

**Canva Magic Edit:** edição por IA dentro do Canva, prático para quem já usa a plataforma no dia a dia.

**Freepik:** dentro da plataforma há uma seção específica de edição com várias funcionalidades: editar imagem, melhorar imagem, aplicar efeito de cinema, gerar mockup, alterar câmera. São edições rápidas, práticas, diferentes de trabalhar no nível do Photoshop, mas muito úteis para produção em volume.

Ruan deixa claro que essas opções são edições rápidas e que não substituem o nível de controle do Photoshop ou do Lightroom. Dependem do contexto e do nível de refinamento que o projeto exige.

## Dois fluxos de trabalho: rápido e artesanal

A aula encerra apresentando os dois fluxos de trabalho que Ruan usa na prática:

O **fluxo rápido** usa os próprios agentes para gerar as imagens e tenta corrigir tudo via prompt. Não há etapa de edição manual. O objetivo é velocidade e volume. Funciona melhor quando o prompt está bem ajustado e o resultado já vem dentro do esperado.

O **fluxo artesanal** entra quando o projeto pede algo refinado. Capas de livro, banners que vão aparecer muitas vezes na plataforma, materiais que representam a marca com mais peso. Nesses casos, a equipe dedica mais tempo, faz os ajustes no Photoshop, cuida dos detalhes. É um fluxo mais lento, mas que entrega um nível de acabamento diferente.

A escolha entre os dois depende do destino da imagem e da importância da peça dentro do projeto. Não existe um fluxo certo e um errado. Existe o fluxo adequado para cada situação.

## Coloque em prática

Pegue uma imagem gerada com IA que ainda não passou por edição. Aplique pelo menos um ajuste em cada nível: use um recurso de edição nativo dentro da ferramenta que gerou a imagem (Zoom, Pan ou Remix no Midjourney, ou edição regional no NanoBanana), depois importe no Photoshop ou Lightroom e aplique ao menos um ajuste de camada de correção de cor ou contraste. Observe a diferença entre os dois momentos e anote qual ajuste fez mais diferença no resultado final.
