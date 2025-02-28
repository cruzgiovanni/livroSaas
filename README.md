# Autenticação com NextAuth, Prisma e Next.js 15

Neste mini projeto, implementei a autenticação em um hipotético SaaS de Livros de Programação. Usei o NextAuth para gerenciar a autenticação e o Prisma para a interação com o banco de dados, enquanto nosso frameworks será o Next.js 15. 

- **Funcionalidade de registrar usuários usando a tela de cadastro**
  - Um usuário deverá possuir _nome_, _email_ e _senha_.
  - A senha deverá ser criptografada antes de ser salva na base de dados.
  - A tela de cadastro não pode ser acessível a usuários logados (redirecione ao dashboard)

- **Funcionalidade de logar usuários usando a tela de login**
  - Ao logar, redirecione o usuário para a tela de dashboard.
  - A tela de login não pode ser acessível a usuários logados (redirecione ao dashboard)
 
- **Funcionalidade de deslogar o usuário.**

- **Navegação e renderização condicional**
  - Na home, quando o usuário estiver logado, o botão da Navbar deverá ser `Dashboard`. Quando o usuário estiver deslogado, o botão deverá ser `Login`.
  - Um usuário deslogado não poderá acessar a Dashboard.
  - Um usuário logado não poderá acessar as telas de login e cadastro. 

## 👉🏽 Sobre esse mini-projeto

