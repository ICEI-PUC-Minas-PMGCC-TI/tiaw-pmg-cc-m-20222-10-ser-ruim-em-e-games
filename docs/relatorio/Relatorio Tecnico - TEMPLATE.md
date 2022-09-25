# Informações do Projeto
`TÍTULO DO PROJETO`  

Ser Ruim em E-Games


`CURSO` 

Ciências da Computação

## Participantes


> Os membros do grupo são: 
> - André Luís Marques Antunes
> - Arthur Diniz Mordente
> - Fellipe Gabriel de Oliveira
> - Leonardo Braga de Oliveira
> - Luis Arthur Campos Almeida
> - Vinicius Ferrer de Queiroz Eloy


# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Nos últimos anos jogar jogos digitais se tornou algo comum e cada vez mais pessoas estão explorando esse mundo, seja como lazer ou tratando o jogo como um esporte eletrônico. Como toda atividade competitiva, a prática e habilidade têm grande papel na performance de um jogador, e as vezes o caminho para aperfeiçoar seu desempenho não é muito claro, por isso muitas pessoas desistem de melhorar ou só param de jogar.


## Objetivos

O objetivo ajudar as pessoas que não entendem como melhorar e buscam alavancar seu desempenho em jogos online, mais especificamente League of Legends e Valorant, dois jogos da Riot Games. A ideia inicial é um site que contenha dicas e videos explicativos de como melhorar em vários aspectos dos jogos. Mais especificamente, queremos que o usuário consiga escolher exatamente qual habilidade quer desenvolver e entregar um video ou texto ideal para o problema. Além disso, facilitar o contato entre um jogador ruim e um jogador experiente para que um consiga ajudar o outro.

## Justificativa

Segundo análise feita pelo blog maisesports em 2022, 64,7% dos jogadores de LOL(League of Legends) está nos 3 ranques mais baixos, e outros 32,6% se encontram nos ranques que podemos chamar de medianos. Com certeza existem jogadores que não se importam com isso e só jogam pra se divertir, mas garantidamente existe uma parcela relevante que gostaria de melhorar o desempenho. Porém, hoje em dia apesar de exister conteúdo espalhado na internet, um novato ou veterano desprovido de habilidade não consegue encontrar com facilidade, e por isso nosso aplicativo vai disponibilizar o conteúdo necessário e com fácil acesso para esses jogadores com a vontade de aperfeiçoarem as diversas habilidades que queiram.


## Público-Alvo

Embora jogar jogos online seja algo que qualquer pessoa pode fazer, delimitaremos o público alvo como jovens homens e mulheres de 14 a 25 anos que jogam os jogos abordados com frequência e tem dificuldade de encontrar conteúdo que os auxiliem a melhorar. Adicionalmente, pessoas dessa mesma faixa etária mais experientes que tenham conhecimento sobre os jogos para difundir e ensinar também serão alvo, especificamente ajundando com dicas e com sessões de coaching.

 
# Especificações do Projeto

Após a entrevista definimos o ponto principal do nosso projeto, as partes que deveriam ser focadas e geramos a ideia inicial do nosso sistema, logo após imergimos nas personalidades das personas criadas para o projeto e moldamos nosso sistema a partir do que achamos que seria importante em relação ao tema abordado, consolidamos todos os aspectos citados acima nas personas e na historia do usuário.

## Personas e Mapas de Empatia

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> Persona 1: Giovana = (https://prnt.sc/OjSZjKHuenMh e https://prnt.sc/47z3xgZmo1_F)
> Persona 2: Lucas Pontes = (https://prnt.sc/srVb3hEF0Pqb e https://prnt.sc/wq78A5diqudo)
> ![Persona 3]: Pedro Alves = (https://prnt.sc/f7SyepEjp0YY e https://prnt.sc/US-zo6Wf3aSO)
> 
> ![Exemplo de Persona](imaages/../images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir a visualização das dicas | ALTA | 
|RF-002| Permitir que usuário tenha acesso aos videos em formato de shorts   | ALTA |
|RF-003| Permitir a criação de rotinas,treinos e metas   | ALTA  |
|RF-004| Permitir o cadastro do usuário na parte paga   | ALTA  |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Sistema responsivo | MÉDIA | 
|RNF-002| Processamento rápido |  BAIXA |
|RNF-003| O site deve ter suporte para linguas estrangeiras |  BAIXA |
|RNF-004| Cada game deve ter sua PÁGINA  |  ALTA |
|RNF-005| Cada PÁGINA deve ter sua própria paleta de cores (que sejam relacionadas com o game)  |  ALTA |


> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |



> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......


> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![USERFLOW](images/userflow.png)

## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem.

## Tela - Home Page

![HOMEPAGE](images/homepage.png)

A tela de home Page é a página inicial onde o usuário deve escolher o jogo que ele deseja se aprofundar sobre.
Componentes: Há 2 botões que levarão o usuário a página sobre o jogo desejado

## Tela - Probelmas LOL

![PROBLEMASLOL](images/problemaslol.png)

A tela Problemas lol é a pagina onde haverá uma breve introdução sobre o jogo e os principais problemas que atrapalham os players em sua jogatina.
Componentes de Hud : o Hud se compõe de 3 botões, “Tela inicial” que leva o usuário para a Home Page, “pagina de aulas” que leva o usuário para a página Aulas lol, e o ultimo botão “seções “ que deixa o usuário manusear onde ele estará na página atual de problemas.

## Tela - Aulas LOL

![AULASLOL](images/aulaslol.png)

Componente Pagina de aulas: é um botão no final da página que exerce a mesma função do botão no hud pagina de aulas.

## Tela - Problemas Valorant

![PROBLEMASVAL](images/problemasval.png)

A tela Problemas Val é a pagina onde haverá uma breve introdução sobre o jogo e os principais problemas que atrapalham os players em sua jogatina. Apresenta os mesmos elementos da página de Problemas lol.

## Tela - Aulas Valorant

![AULASVAL](images/aulasval.png)

[Protótipo Interativo](https://marvelapp.com/prototype/e2b8gj1)


# Metodologia

## Divisão de Papéis

> - André Luís Marques Antunes
> 
> - Arthur Diniz Mordente - Introdução, Objetivos, Justificativa, Público alvo, , Metodologia. 
> 
> - Fellipe Gabriel de Oliveira - Design Thinking, Entrevista, Metodologia, Requisitos Funcionais, Divisão de Papéis, Requisitos Não funcionais, ppt Apresentação. 
> 
> - Leonardo Braga de Oliveira
> 
> - Luis Arthur Campos Almeida
> 
> - Vinicius Ferrer de Queiroz Eloy - Design Thinking, Entrevista, Metodologia, Kanban, Scrum Master, Requisitos Funcionais e Não funcionais.

## Ferramentas

A metodologia é a parte do trabalho que é usada para organização do trabalho tanto na parte da equipe quando na parte das ferramentas usadas no desenvolvimento do nosso projeto.

Ambientes de trabalho:

GITHUB-Repositorio para facilitar o trabalho em equipe a visualização do grupo, além de armazenar o trabalho fisicamente.
https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20222-10-ser-ruim-em-e-games

MarvelApp- Plataforma usada para criação de interfaçes e Wireframe
https://marvelapp.com/prototype/e2b8gj1

Trello- Plataforma usada para organização e gerenciamento do projeto.
https://trello.com/b/qHfpGEGM/tiaw

Gerenciamento do projeto
Nossa equipe está trabalhando com a metodologia ágil Scrum, sendo assim a equipe foi dividida da seguinte forma:
⦁	Scrum Master: Vinicius Ferrer

⦁	Product Owner:Ilo Amy , Rommel Carneiro 

⦁	Equipe de Desenvolvimento
1.	Felipe Gabriel
2.	Arthur Diniz
3.	Leonardo
4.	Luiz Arthur
5.	Leonardo Braga
6.	André Luis

Estamos usando a plataforma trello para organização do projeto que está estruturada da seguinte maneira:

⦁	Recursos- Nessa parte está localizada a legenda de cores que cita as etiquetas usadas para organizar todas as tarefas em andamento ou concluidas.

⦁	To Do- Uma lista que representa todas as atividades que devem ser trabalhadas mas ainda não foram iniciadas.

⦁	On Going- Outra lista, porém dessa vez de atividades já em desenvolvimento pela equipe.

⦁	Done- Mais uma lista agora retratando as atividades e projetos terminados pelo grupo.

⦁	Discarded- Projetos ou atividades que ocorreram problemas ou foram ideias descartadas pela equipe.

O quadro kanban do projeto, organizado pela equipe está disponivel na URL https://trello.com/b/qHfpGEGM/tiaw, o estado do quadro no momento da entrega da 1 sprint é o seguinte: 


![image](https://user-images.githubusercontent.com/82046286/192120167-08047176-cad3-4081-88fa-ae8ed4d9eb64.png)

## Controle de Versão

> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
