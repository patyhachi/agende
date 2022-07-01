# Especificações do Projeto


O projeto se trata de um sistema de agendamentos com foco em facilitar o processo de
reservas de horários do microempreendedor por meio de uma interface de fácil navegação. Em
média um usuário leva cerca de 2 minutos para realizar um agendamento online, deste modo o
sistema deve ser de fácil acesso, intuitivo e proporcionar agilidade ao buscar informações. A
proposta do sistema se baseia em dois ambientes de navegação:

#### Tarefas do usuário microempreendedor

- Realizar cadastro
- Anunciar seu serviço
- Configurar sua agenda e horários
- Receber informações do cliente
- Personalizar notificações

#### Tarefas do usuário cliente

- Pesquisar por serviços ou prestadores específicos
- Acessar a disponibilidade de horários na agenda do prestador
- Realizar e cancelar agendamentos
- Receber notificações
- Cadastrar seus dados


## Personas

**Persona Prestador - Sara, 30 anos**

Workaholic, casada, microempreendedora e possui o seu próprio salão de beleza. Tem um perfil analítico, é focada em atingir seus objetivos e gosta de praticidade e agilidade em todos os processos do seu dia a dia, tanto profissionalmente quanto
pessoalmente. 
Ela gostaria de agendar sua clientela de uma maneira mais prática e rápida, diminuindo o tempo gasto em agendamentos via telefone, mas não conhece uma forma alternativa para resolver o seu problema.
![Persona1](https://user-images.githubusercontent.com/22478906/162083567-fdab27e8-570c-457e-ad7e-500d1acdabe6.jpeg)


**Persona Cliente - Carol, 24 anos**

Acabou de se formar na faculdade, solteira, no inicio da carreira. Tem um perfil dinâmico, gosta de conhecer coisas novas e de ganhar tempo no dia a dia.
Impaciente, não gosta de perder tempo com coisas burocráticas. 
Considera que auto-cuidado é um investimento em bem-estar, portanto está sempre em busca de novos serviços.
![Persona 2](https://user-images.githubusercontent.com/22478906/162083574-df7561ef-5681-4712-a178-6f3f790ebd17.jpeg)


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|  Eu como persona   |   Quero / Preciso (funcionalidade)   |        Para motivos / Valor             |
|--------------------|------------------------------------ |---------------------------------------- |
|Eu como cliente.    | Visualizar os horários disponíveis. | Escolher o horário ideal para mim.      | 
|Eu como cliente.    | Selecionar um horário.              | Realizar um agendamento.                |
|Eu como cliente.    | Receber um aviso de agendamento.    | Lembrar que o agendamento está próximo. |
|Eu como cliente.    | Receber um aviso de cancelamento.   | Ser avisado caso meu fornecedor cancele.|
|Eu como cliente.    | Buscar estabelecimentos disponíveis.| Encontrar um prestador de serviço.      |
|Eu como cliente.    | Avaliar serviço prestado.           | Buscar prestadores com melhores notas.  |

|  Eu como persona   |   Quero / Preciso (funcionalidade)   |        Para motivos / Valor             |
|--------------------|------------------------------------ |---------------------------------------- |
|Eu como prestador.  | Disponibilizar os horários livres.  | Para que meus clientes consigam agendar.| 
|Eu como prestador.  | Visualizar os agendamentos.         | Realizar meu agendamento.               |
|Eu como prestador.  | Enviar o link de agendamento.       | Meus clientes possam agendar comigo.    |
|Eu como prestador.  | Cancelar o agendamento realizado.   | Não consiga atende-los no dia agendado. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Gerenciamento de agenda| ALTA | 
|RF-002| Acessar horários disponíveis na agenda do prestador | ALTA | 
|RF-003| Notificar via e-mail   | ALTA |
|RF-004| Realizar agendamento  | ALTA |
|RF-005| Realizar reagendamento  | ALTA |
|RF-006| Gerenciamento do cadastro do usuário | ALTA |
|RF-007| Gerenciamento do cadastro do prestador | ALTA |
|RF-008| Gerar link de perfil do prestador para agendamento | ALTA |
|RF-009| Pesquisar profissionais  | MEDIA |
|RF-010| Postar e visualizar feedbacks do serviço/prestador| BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Confidencialidade de informações pessoais | ALTA | 
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivo móvel |  ALTA |
|RNF-003| Tempo de resposta ao acessar uma agenda (POC): inferior a 10 segundos|  BAIXA |
|RNF-004| Interação com APIsGoogle Agenda |  BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Sem orçamento (budget)                                |
|04| Equipe limitada (7 pessoas)                           |
|05| Sem treinamento de usuário                            |
|06| Banco de dados locais                                 |






