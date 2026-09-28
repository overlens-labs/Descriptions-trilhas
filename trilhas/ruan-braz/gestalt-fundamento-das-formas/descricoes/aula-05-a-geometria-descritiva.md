# A Geometria Descritiva

**Tempo estimado de leitura:** 8 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Identificar os princípios fundamentais da geometria descritiva e os três tipos de projeção existentes
- Distinguir os conceitos de cota, afastamento e abscissa como coordenadas de um ponto no espaço tridimensional
- Aplicar a metodologia da dupla e tripla projeção ortogonal para representar pontos, retas e sólidos na épura
- Reconhecer os tipos de linha utilizados no desenho técnico e sua função em cada contexto

## O que é a geometria descritiva e por que ela existe

A geometria descritiva é a área da geometria que representa objetos tridimensionais em suportes bidimensionais. O objetivo dela é descrever e detalhar um objeto com volume em um plano, o que corresponde ao que chamamos de desenho técnico. Ela já existia antes de ser formalizada, mas era feita de forma intuitiva, sem padrões definidos.

Ruan apresenta três projetos de Leonardo da Vinci como exemplo dessa prática pré-formalizada. Da Vinci descrevia seus projetos usando perspectiva e escolhendo o ponto de vista do objeto que revelava mais detalhes. O problema era que essa abordagem dependia da interpretação individual: sem um sistema padronizado, duas pessoas olhando para o mesmo projeto podiam entender coisas diferentes.

Foi entre 1700 e 1800 que o matemático Gaspard Monge criou a geometria descritiva formal, com planos horizontais e verticais. Essa metodologia tornou possível que duas pessoas olhando para o mesmo projeto chegassem à mesma compreensão do objeto. Para o designer, estudar geometria descritiva desenvolve a intuição geométrica, o raciocínio lógico e a visão espacial, além de permitir ler projetos que contêm desenhos técnicos.

## O centro de projeção e o princípio do ponto de vista

O princípio básico da geometria descritiva é o ponto de vista, chamado tecnicamente de centro de projeção. Para ilustrar, Ruan propõe a seguinte situação: imagine que você está de frente para um plano retangular e há três esferas perfeitamente alinhadas com seus olhos. O que você enxerga é apenas uma esfera, porque as outras estão escondidas atrás dela, como em um eclipse.

Esse exemplo mostra que o centro de projeção determina o que fica visível. O sistema de projeção tem quatro elementos: o centro de projeção (o ponto de vista do observador), o objeto (o que está sendo projetado), o plano de projeção (o suporte onde a representação é feita) e a projeção em si (a representação do objeto nesse plano). Há também uma linha de referência que indica alinhamento, mas ela é apenas uma linha de construção.

## Os três tipos de projeção

Ruan apresenta três tipos de projeção que existem na geometria descritiva.

### Projeção central ou cônica

É a projeção que mais se aproxima da nossa visão. Por termos dois olhos, conseguimos perceber a lateral dos objetos e criar uma ilusão de tridimensionalidade. O centro de projeção é fixo e determinado. Quanto mais próximo o objeto está do centro de projeção, menor ele aparece na projeção. Quanto mais distante, maior. A forma resultante é uma pirâmide, com o vértice no centro de projeção e a base no plano. Apesar de ser a mais intuitiva, não é essa a projeção usada no desenho técnico.

### Projeção cilíndrica ortogonal

É a projeção usada nos desenhos técnicos. Nela, o centro de projeção é infinito, o que significa que a dimensão do objeto não muda com a distância. "Orto" vem de certo, como em ortografia, e indica que as medidas se mantêm independentemente da posição do observador. É com essa projeção que se consegue representar as dimensões reais do objeto com exatidão.

### Projeção cilíndrica oblíqua

Também tem centro de projeção infinito, mas o centro de projeção está inclinado em relação ao plano de projeção. Isso gera um deslocamento na projeção: ela não fica paralela ao plano. É uma variação do sistema cilíndrico, mas com eixo inclinado.

## A metodologia de Gaspard Monge: dupla projeção ortogonal

Quando Monge criou a geometria descritiva, ele o fez por meio de um método chamado dupla projeção ortogonal. O nome vem da combinação de dois conceitos: ortogonal, porque usa a projeção cilíndrica ortogonal onde as medidas não mudam; e dupla, porque trabalha com pelo menos dois planos diferentes. Esses planos funcionam como os eixos do plano cartesiano, mas tridimensionais.

No plano cartesiano, há o eixo X horizontal e o eixo Y vertical. Na geometria descritiva, em vez de duas retas como eixos, temos dois planos. A linha que separa o plano vertical do plano horizontal é chamada de linha de terra. Os quatro espaços gerados pela intersecção desses dois planos são chamados de diédros, não quadrantes como no plano cartesiano. Os nomes dos planos são: horizontal anterior, horizontal posterior, vertical superior e vertical inferior.

Para o trabalho de design, Ruan esclarece que o primeiro diédro é o suficiente. Ele contempla o mundo real, com valores positivos em ambos os eixos. Os outros três diédros são usados principalmente em engenharia e física. O primeiro diédro contém todas as medidas necessárias para representar um objeto em projetos de design.

## Coordenadas de um ponto: cota e afastamento

Para localizar um ponto no espaço do primeiro diédro, é necessário definir duas distâncias: a distância desse ponto até o plano vertical e a distância até o plano horizontal.

A distância horizontal entre o objeto e o plano vertical se chama afastamento. No primeiro diédro, o afastamento é positivo. No segundo diédro, é negativo. Quando o objeto está exatamente sobre o plano vertical, o afastamento é zero.

A distância vertical entre o objeto e o plano horizontal se chama cota. É análoga à altura, mas o nome é diferente porque "altura" e "largura" já são termos usados para descrever as dimensões do próprio objeto. A cota é positiva no primeiro diédro e negativa no quarto diédro. Quando o objeto está sobre o plano horizontal, a cota é zero.

Ruan justifica a necessidade desses nomes distintos: se tudo se chamasse altura e largura, não haveria como diferenciar a dimensão do objeto da distância do objeto até o plano. Cota e afastamento são espaços, não dimensões do objeto em si. Com esses dois valores, é possível posicionar qualquer ponto no espaço dos dois planos. Ruan demonstra com um exemplo prático: um ponto com cota de 125 pixels e afastamento de 200 pixels, mostrando onde essas medidas aparecem no diagrama.

## O plano de perfil e a épura de tripla projeção

Com apenas dois planos, afastamento e cota definem a posição do objeto no eixo X e no eixo Y. Mas para trabalhar em tridimensionalidade completa, é necessário um terceiro elemento de coordenada, referente ao eixo Z. Para isso, existe o plano de perfil.

O plano de perfil é adicionado perpendicularmente ao plano vertical e ao plano horizontal. A distância do objeto até o plano de perfil recebe o nome de abscissa. Assim, as três coordenadas de um ponto no espaço são: abscissa (distância ao plano de perfil), afastamento (distância ao plano vertical) e cota (distância ao plano horizontal), correspondendo respectivamente a X, Y e Z.

Para visualizar essas três projeções ao mesmo tempo, é necessário planificar os planos. O plano horizontal é rotacionado para baixo e o plano de perfil é rotacionado para o lado, como se fossem cortados por uma tesoura no eixo e abertos. O resultado dessa planificação com os três planos é chamado de épura. Na épura de dupla projeção, há dois planos. Na épura de tripla projeção, há três. Ruan explica que a linha tracejada que aparece na épura representa uma transferência de medida: ela mostra que a abscissa marcada em um eixo precisa ser transferida para a coordenada correspondente no outro eixo, usando uma linha de 45 graus ou um arco de círculo centrado na origem. A notação usada é A1 para a projeção no plano horizontal, A2 para o plano vertical e A3 para o plano de perfil.

## Representação de retas e construção prática da épura

Uma reta precisa de pelo menos dois pontos para existir. Ruan demonstra a construção da épura para uma reta com dois pontos, A e B, cada um com suas próprias coordenadas de cota, afastamento e abscissa.

O exemplo prático usa os seguintes valores: ponto A com cota 5, afastamento 5 e abscissa 3,5; ponto B com cota 5, afastamento 5 e abscissa 2. A ordem correta de construção é: primeiro definir os eixos (Y, X, e os planos); depois começar pela abscissa, marcando a distância no eixo e transferindo para a posição horizontal; em seguida, definir o afastamento no plano horizontal; por fim, definir a cota no plano vertical. Ruan ressalta que começar pela abscissa é especialmente importante ao trabalhar no caderno, onde não se pode apagar facilmente.

Quando a reta está paralela tanto ao plano vertical quanto ao plano horizontal, a projeção no plano de perfil resulta em um ponto, e não em uma linha. Isso acontece porque os dois extremos da reta estão na mesma coordenada daquele plano e coincidem, formando o que Ruan chama de eclipse. Quando a reta está inclinada, cada ponto de vista revela uma forma diferente: de cima pode aparecer inclinada, de frente pode aparecer horizontal. Esse comportamento é central para entender por que a geometria descritiva usa múltiplos planos.

## Representação de sólidos e os tipos de linha no desenho técnico

Ruan apresenta o exemplo de uma cadeira para mostrar como a épura de tripla projeção funciona com sólidos. A vista lateral da cadeira é a que entrega mais informações sobre sua silhueta. A vista de cima entrega menos informações gerais, mas revela a largura. A vista frontal revela a profundidade. Cada plano entrega informações que os outros não entregam, e por isso as três vistas juntas permitem compreender o objeto com precisão.

No desenho técnico, cada tipo de linha tem uma função específica e regida pela norma ABNT. Ruan apresenta quatro tipos: a linha contínua larga, usada para arestas e contornos visíveis; a linha contínua estreita, usada para linhas auxiliares, de chamada, de cota, de construção e de rachura; a linha tracejada estreita, usada para representar arestas e contornos invisíveis (o que existe no objeto mas não é visível naquele ponto de vista); e a linha de traço e ponto, usada para eixos de simetria e linhas de centro. As linhas tracejadas no exemplo da cadeira representam arestas que existem, mas ficam escondidas quando vistas de cima.

## Outros métodos e indicações de aprofundamento

Além do método de Gaspard Monge, existe também o método de representação de Felipe Buache. Ruan menciona sua existência, mas não o apresenta na aula, deixando para pesquisa autônoma.

Para aprofundamento, Ruan indica três livros: "Representação Gráfica para Desenho e Projeto" (2001), da editora GG, que não existe mais, mas cujos títulos podem ser encontrados pela editora Olhares; "Geometria Descritiva", de Gil do Monte Negro, volume 1, da editora Blucher, que apresenta mais exemplos e aprofunda os conceitos da aula; e "Expressão Gráfica", que abrange tanto geometria descritiva quanto os tipos de desenhos geométricos tratados na aula anterior de geometria plana.

## Coloque em prática

Escolha um objeto simples do cotidiano, como uma caixa ou uma cadeira.

Defina os três planos da épura: plano horizontal, plano vertical e plano de perfil.

Identifique os pontos principais do objeto e atribua a cada um os valores de cota, afastamento e abscissa.

Construa a épura com os três pontos de vista usando os tipos de linha corretos: contínua larga para arestas visíveis e tracejada estreita para arestas invisíveis.

