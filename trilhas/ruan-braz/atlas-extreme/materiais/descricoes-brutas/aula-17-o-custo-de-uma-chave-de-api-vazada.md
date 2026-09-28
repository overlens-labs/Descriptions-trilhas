Cálculo interno: 7 blocos / 17 parágrafos totais / 504 palavras estimadas / 504 ÷ 200 = 2,5 minutos

# O custo de uma chave de API vazada

**Tempo estimado de leitura:** 3 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Reconhecer uma chave de API como credencial de acesso
- Identificar impactos financeiros e de privacidade de um vazamento
- Reconhecer a responsabilidade envolvida no uso de segredos

## A chave que atravessa todas as proteções

A aula compara um sistema a uma casa protegida por muro, câmeras, cerca elétrica, guarita e um portão aberto apenas por senha. Todas essas camadas perdem o valor quando a senha do portão é entregue a outra pessoa.

Uma chave de API funciona como essa senha. Ela permite que outro sistema acesse um serviço, um banco de dados ou créditos de uso em nome de quem criou a credencial.

## O risco de colocar segredos em conversas

Na analogia, o Claude recebe a senha para entrar na casa e executar um trabalho. O problema é que as informações enviadas ao modelo são processadas na infraestrutura da empresa que oferece o serviço.

Mesmo que a empresa seja grande, os dados podem ser interceptados ou vazados. Ruan mostra que existem listas de senhas, e-mails e chaves de API expostas na internet, inclusive em ambientes da deep web e da dark web.

A proteção do projeto não compensa o compartilhamento da chave. Entregar a credencial cria um caminho de acesso que atravessa as demais barreiras construídas no sistema.

## Dados de usuários em risco

Uma chave de banco de dados pode abrir acesso às informações armazenadas no sistema. Pessoas começam a preencher uma aplicação interna porque acreditam que os dados estão seguros.

Quando a chave vaza, usuários que não participaram da decisão técnica também podem ser afetados. A responsabilidade deixa de envolver somente quem criou o projeto e passa a alcançar todas as pessoas que confiaram dados ao sistema.

## Cobranças causadas por abuso

Uma chave de API de IA permite usar créditos e tokens por demanda. Quem obtém essa chave pode fazer solicitações em nome da conta e continuar usando até o limite disponível.

O exemplo mostra uma conta que normalmente gastaria poucos dólares recebendo uma cobrança de 5 mil dólares, cerca de R$ 25 mil, porque outra pessoa utilizou a credencial vazada.

## Agir sem paralisar

Segurança não significa abandonar a construção. Significa perceber que, quando o sistema passa a lidar com dados e serviços pagos, a responsabilidade aumenta.

Ruan resume esse momento com a ideia de que grandes poderes trazem grandes responsabilidades. O projeto deixa de ser apenas uma brincadeira quando um erro pode expor dados de usuários ou gerar cobranças reais.

*Para acompanhar a analogia da casa e o impacto de uma chave exposta, assista a partir de 00:00 no vídeo.*

## Coloque em prática

Liste as chaves usadas no seu projeto e identifique o que cada uma permite acessar: banco de dados, informações de usuários ou créditos de IA. Confirme que nenhuma chave privada foi enviada em uma conversa com a IA e registre quais consequências um vazamento teria para o sistema e para as pessoas que o utilizam.
