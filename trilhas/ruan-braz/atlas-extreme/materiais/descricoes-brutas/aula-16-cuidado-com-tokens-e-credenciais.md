Cálculo interno: 5 blocos / 11 parágrafos totais / 327 palavras estimadas / 327 ÷ 200 = 1,6 minutos

# Cuidado com tokens e credenciais

**Tempo estimado de leitura:** 2 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Distinguir conexão por MCP de conexão por CLI
- Reconhecer uma solicitação de credencial
- Aplicar uma regra segura para tokens desconhecidos

## Dois caminhos de conexão

O Supabase foi conectado de duas formas. Pelo MCP, o Claude recebe acesso autorizado ao serviço por meio de um conector. Pela CLI, comandos são executados no ambiente local e o login interativo é confirmado no navegador.

No fluxo da CLI, o Claude pode preparar a instalação e indicar o comando, mas a autenticação pertence ao usuário. Se o modo interativo não funcionar dentro da sessão, execute o comando em outro terminal e conclua a autorização sem transferir a credencial para a conversa.

## Token público e token privado

Alguns tokens são projetados para aparecer em aplicações cliente e podem ser públicos. Outros concedem privilégios elevados, acesso a dados, capacidade de cobrança ou controle administrativo e devem permanecer secretos.

Quem ainda não sabe avaliar escopo, exposição e impacto não deve tentar adivinhar a categoria. Uma chave com nome familiar pode ter permissões diferentes em outro serviço ou projeto.

## Uma regra segura para iniciantes

Não envie tokens à IA. Peça o passo a passo, abra o painel do serviço e insira a credencial diretamente no local apropriado. Essa regra reduz o risco enquanto você desenvolve repertório para distinguir valores públicos de segredos.

Não é necessário anunciar na conversa que nenhuma chave será fornecida. Solicite a configuração normalmente. Valores públicos podem ser obtidos por meios documentados; quando uma chave privada for necessária, o agente deve indicar onde você mesmo deve colocá-la.

## Coloque em prática

Revise a configuração do Supabase e identifique quais etapas usam autorização no navegador e quais pedem uma variável. Para cada variável, registre nome, finalidade, escopo e se pode aparecer no cliente. Se essa classificação não estiver explícita na documentação, trate o valor como secreto e não o cole em chats.
