Cálculo interno: 11 blocos / 34 parágrafos totais / 917 palavras estimadas / 917 ÷ 200 = 4,6 minutos

# Arquitetura com Supabase: banco, autenticação e storage

**Tempo estimado de leitura:** 5 minutos

## Objetivos de aprendizado

Ao final desta aula, você será capaz de:

- Estruturar a migração de Markdown para banco de dados
- Distinguir autenticação de autorização
- Reconhecer relações entre usuários e organizações
- Distinguir banco de dados de storage

## Registrar uma mudança de arquitetura

O projeto local armazenava conteúdo em arquivos Markdown. Para atender múltiplos usuários e manter dados centralizados, a nova decisão substitui essa persistência pelo banco do Supabase.

Mudanças relevantes precisam ser registradas. Uma pasta `Decisions` dentro da documentação pode guardar Architecture Decision Records, ou ADRs, explicando contexto, escolha, consequências e data. Assim, pessoas e agentes não continuam seguindo uma regra antiga.

Além do ADR, toda a documentação afetada deve ser atualizada. Instruções desatualizadas confundem agentes, provocam loops, aumentam o consumo de tokens e dificultam a manutenção.

## Definir o escopo da migração

O pedido ao Claude inclui conectar o banco, transferir as informações existentes, configurar autenticação, criar o primeiro usuário administrador e associar a ele os cards já preenchidos.

Novas contas devem receber a estrutura vazia. Cada usuário poderá preencher o próprio negócio sem enxergar os dados do administrador. Essa separação transforma o protótipo local em uma base para múltiplas identidades.

Também são solicitados storage para arquivos e pontos de integração para uma futura API de IA. A chave ainda não é fornecida. O código deve ficar preparado para recebê-la posteriormente por variável de ambiente.

## Delegar a execução por partes

Banco, migração, autenticação, storage e documentação formam frentes diferentes. O prompt pede que o Claude delegue tarefas a agentes paralelos e integre os resultados ao final.

Paralelização consome mais tokens e pode gerar conflitos. Use-a quando as responsabilidades estiverem bem separadas e houver orçamento para revisar o resultado. Em planos limitados, salve o prompt e execute a mudança depois ou divida o trabalho em etapas sequenciais.

O comando de meta mantém o agente trabalhando até concluir o objetivo. Na demonstração, ele é iniciado depois que o pedido reúne banco, migração, autenticação, storage e atualização da documentação.

*Para acompanhar a formulação da mudança e o início da meta, assista a partir de 01:08 no vídeo.*

## PostgreSQL e tabelas

O banco usado pelo Supabase é PostgreSQL. Ele organiza registros em tabelas com linhas e colunas, de forma comparável a uma planilha, e permite relacionar as informações armazenadas.

Uma tabela de perfis pode registrar identificador, e-mail, datas e metadados. Senhas não devem aparecer em texto aberto. O serviço de autenticação armazena representações protegidas e a aplicação não deve expor o valor original.

Consultas relacionais funcionam bem com valores e relações estruturadas. Elas podem buscar correspondências completas ou parciais, mas possuem finalidade diferente de uma recuperação semântica baseada em vetores.

## Quando manter Markdown

Migrar não significa que Markdown seja ruim. Para um sistema pessoal, local e orientado a contexto, arquivos podem ser simples, legíveis e suficientes. Eles também funcionam bem com agentes que precisam consultar documentação.

O banco se torna necessário quando os dados precisam acompanhar usuários em diferentes máquinas, receber acesso concorrente, aplicar permissões ou alimentar uma aplicação publicada. A arquitetura deve responder ao caso de uso, não a uma preferência abstrata por tecnologia.

## Autenticação

Autenticação confirma quem está tentando entrar. Ela pode usar e-mail e senha, Magic Link ou uma identidade de outro provedor, como Google e GitHub.

Se o prompt não especificar o método, a IA tomará uma decisão. Para evitar surpresa, declare o fluxo desejado, como o usuário confirma a conta e para qual endereço será redirecionado.

O primeiro administrador recebe os dados migrados. Contas criadas depois começam vazias, mantendo o conteúdo associado ao identificador do respectivo usuário.

## Autorização

Autorização define o que uma identidade já autenticada pode fazer. Administrador, equipe, moderador, assinante e usuário gratuito podem ter capacidades diferentes de leitura, criação, edição e exclusão.

Essas regras determinam quais registros e ações ficam disponíveis para cada papel. A demonstração diferencia o administrador das outras contas que entram no sistema.

Autenticação responde quem é; autorização responde o que pode fazer. Misturar os conceitos costuma produzir sistemas nos quais o login funciona, mas os dados continuam expostos.

## Organizações e arquitetura multi-tenant

Sistemas para agências ou vários clientes podem adicionar organizações. Um usuário pode participar de uma ou mais organizações, e uma organização pode reunir vários membros.

Planos, projetos e permissões podem pertencer à organização em vez de diretamente ao usuário. Essas relações precisam ser modeladas para impedir que dados de um cliente apareçam para outro.

Essa relação é chamada de multi-tenant. Ela permite que uma pessoa participe de diferentes organizações e que cada organização reúna seus próprios membros.

## Storage não é banco de dados

Tabelas guardam dados estruturados. Imagens, vídeos, áudios, PDFs, documentos e outros arquivos ficam em storage. O banco normalmente registra metadados e o caminho do objeto armazenado.

Embora o Supabase ofereça os dois serviços no mesmo painel, eles possuem finalidades diferentes. O storage tem limite gratuito e passa a ser cobrado quando esse limite é superado.

Na demonstração, os agentes começam a criar tabelas de conteúdo e perfis, esquemas, políticas e um bucket de anexos. A interface do Supabase permite acompanhar essas estruturas enquanto a execução ocorre.

*Para ver tabelas, autenticação e storage sendo criados no Supabase, assista a partir de 19:50 no vídeo.*

## Coloque em prática

Crie um ADR para a migração do armazenamento local ao Supabase. Especifique tabelas, vínculo por usuário, método de autenticação, papéis de autorização e tipos de arquivo aceitos no storage. Depois, confirme que uma nova conta começa vazia e que os dados migrados permanecem associados ao administrador.
