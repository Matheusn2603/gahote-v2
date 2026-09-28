# Requisitos do projeto

## Visão Geral

O presente projeto refere-se a uma plataforma Web integrada com botões analógicos semelhante ao Kahoot para o uso acadêmico dos professores do IFRN Campus Parelhas, ademais, o projeto terá vínculo com a SEMADEC (semana dos esportes do IFRN), sendo possível mostrar placares e trazendo uma visualização mais prática para os alunos acompanharem as estatísticas.  

## Objetivo

Desevolver um sistema Web próximo ao Kahoot para uso exclusivo e acadêmico do IFRN Campus Parelhas, além de tornar o evento SEMADEC mais acessível aos alunos do campus. 

## Requisitos Funcionais

RF001 - O sistema deve permitir que usuários possam se cadastrar e fazer login.
RF002 - O sistema deve permitir que usuários possam fazer login com o Google.
RF003 - O sistema deve permitir cadastro de funcionários e da comissão da SEMADEC por parte dos administradores.
RF004 - A conta de um usuário deve apresentar as estatísticas de acertos em questionários.
RF005 - Os alunos terão a opção de entrar como visitantes.
RF006 - O sistema deve apresentar ranking de estatísticas (para usuários logados).
RF007 - O sistema deve apresentar 2 times (possivelmente azul e vermelho) para os questionários.
RF008 - Os funcionários poderão criar questionários.
RF009 - Os questionários deverão ser guardados na conta do seu respectivo funcionário.
RF010 - Os questionários devem ser em tempo real.
RF011 - Os questionários serão por turno, cada aluno terá seu turno na sua respectiva equipe.
RF012 - As equipes terão o limite de até 20 usuários.
RF013 - Os alunos poderão entrar nos questionários através de códigos próprios gerados.
RF014 - O sistema é integrado a botões analógicos que permitirão a escolha das alternativas.
RF015 - A comissão será responsável pelo registro dos dados da SEMADEC.
RF016 - Os administradores poderão cadastrar o evento SEMADEC do respectivo ano.
RF017 - O sistema deve permitir recuperação de contas.
RF018 - Os usuários poderão ver o cronograma do evento SEMADEC. 

## Requisitos Não Funcionais

RNF01 - Dados criptografados.
RNF02 - Apresentar bom nível de segurança (autenticação JWT).
RNF03 - Utilizar PostgreSQL como banco de dados.
RNF04 - Sistema de armazenamento de tokens devem ser cookies.

## Requisitos de Banco de Dados

### Regras de negócio

### Modelo Entidade-Relacionamento (MER)

Um professor tem vários questionários

## Tecnologias

- Next
- TailWind
- NestJs
- PostgreSQL
- Docker
- Prisma

## Casos de Uso