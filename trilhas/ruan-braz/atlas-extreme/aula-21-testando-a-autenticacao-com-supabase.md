Cálculo interno: 10 blocos / 26 parágrafos totais / 731 palavras estimadas / 731 ÷ 200 = 3,7 minutos

# Testando a autenticação com Supabase

**Tempo estimado de leitura:** 4 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Executar uma revisão do relatório dos agentes
- Aplicar testes de cadastro e login
- Identificar erros de porta e redirecionamento
- Reconhecer a separação de dados entre contas

## Ler o relatório antes de testar

Depois de uma mudança ampla, leia o que os agentes declararam ter feito. O relatório da demonstração registra conexão pela CLI, migração para o Supabase, persistência, autenticação, usuário administrador, pontos para a futura IA, storage, verificações de tipos e build.

Essa leitura transforma uma entrega extensa em uma lista de itens verificáveis. Não presuma que a conclusão do agente garante funcionamento. Compare cada afirmação com o banco, a interface e os fluxos reais.

## Inspecionar as estruturas no Supabase

No Table Editor aparecem tabelas de conteúdo e perfis. Cada página migrada ocupa um registro, e o perfil inicial corresponde ao administrador. A área de autenticação exibe os usuários criados e o storage mostra o bucket configurado.

Verifique também esquemas e políticas. A existência da tabela não confirma que o vínculo por usuário está correto ou que as permissões impedem acesso indevido.

*Para acompanhar a inspeção das tabelas, autenticação e storage, assista a partir de 01:01 no vídeo.*

## Corrigir um erro pela evidência visual

Ao abrir o sistema, surge um erro. A captura da mensagem é enviada ao Claude para que ele investigue o ambiente e o código. O erro pode não se repetir em outra máquina, por isso a mensagem exata e o estado do servidor são importantes.

Depois de alterar variáveis de ambiente, encerre e reabra o dev server. Processos já iniciados podem manter valores antigos em memória e fazer a configuração correta parecer inválida.

Use `Ctrl+C` quando o servidor foi iniciado manualmente. Se o Claude controla o processo, peça que o encerre e reinicie. Não mantenha dois servidores competindo pela mesma porta.

## Testar o cadastro e a confirmação

A interface passa a apresentar login e criação de conta. O primeiro teste envia um e-mail de confirmação, mas o link redireciona para `localhost:3000`, enquanto a aplicação está na porta 3040.

O problema é descrito ao Claude com as duas portas. A correção solicitada troca o redirecionamento de `localhost:3000` para o servidor ativo em `localhost:3040`.

*Para ver o primeiro cadastro e o diagnóstico do redirecionamento, assista a partir de 05:23 no vídeo.*

## Separar terminais por tarefa

Terminais diferentes ajudam a acompanhar trabalhos independentes, como páginas ou correções isoladas. Ruan usa esse formato para avançar em tarefas diferentes e gerenciar cada execução com mais facilidade.

Para cada servidor, saiba quem iniciou o processo, qual porta está ativa e como encerrá-lo. Esse controle simples reduz conflitos e evita gastar tokens investigando processos duplicados.

## Confirmar uma nova conta vazia

Depois da correção e do reinício, o cadastro é repetido. A confirmação funciona, o usuário entra e a interface oferece a ação de sair.

A conta nova não contém os cards preenchidos pelo administrador. Esse resultado é esperado: cada pessoa recebe uma estrutura vazia para registrar o próprio negócio. A demonstração confirma que a migração não transformou dados particulares em conteúdo global.

*Para acompanhar o cadastro concluído e a conta vazia, assista a partir de 12:14 no vídeo.*

## Testar também o administrador

O próximo teste é acessar a conta administrativa e confirmar que os dados migrados aparecem somente nela. A ausência de recuperação de senha na interface é identificada como uma lacuna do protótipo.

Como a interface ainda não possui a opção de esquecer a senha, Ruan pede que a IA troque temporariamente a senha do administrador para `12345678`. O objetivo é apenas entrar nessa conta e conferir os dados migrados.

## Protótipo web antes de app mobile

Aplicativos móveis exigem decisões e testes adicionais para iOS e Android. A recomendação para quem está começando é validar primeiro um web app, reduzindo tecnologias e superfícies de distribuição.

Para quem está começando, a recomendação é construir primeiro um web app. A versão para iOS ou Android pode ser trabalhada em outro momento.

## Coloque em prática

Transforme o relatório de implementação em um checklist. Inspecione tabelas, perfis, autenticação e storage. Reinicie o servidor, crie uma conta, confirme o e-mail, entre e saia. Verifique que a conta nova começa vazia. Depois acesse o administrador e confirme que apenas ele possui os dados migrados. Registre qualquer falha de porta, política ou recuperação de senha antes do deploy.
