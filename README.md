 Controle Financeiro

Aplicação Full Stack para gerenciamento de finanças pessoais, permitindo registrar, consultar, editar e excluir receitas e despesas.

O projeto foi desenvolvido com o objetivo de praticar o desenvolvimento Full Stack, integrando uma interface React a uma API REST construída com Node.js e Express, utilizando MySQL para armazenamento dos dados.

Tecnologias utilizadas

Frontend
- React
- JavaScript
- Styled Components
- Lucide React
- Vite

Backend
- Node.js
- Express
- MySQL2
- Dotenv
- CORS

Banco de dados
- MySQL

Funcionalidades

- Cadastro de receitas e despesas.
- Listagem de transações financeiras.
- Edição de transações cadastradas.
- Exclusão de transações.
- Validação dos dados enviados à API.
- Filtro de transações por categoria.
- Cálculo automático do total de receitas, despesas e saldo disponível.

Como utilizar

1. Clone o repositório

```bash
git clone https://github.com/CaioHennrique/controle_financeiro.git
```

2. Configure o banco de dados

- Certifique-se de ter o MySQL instalado.
- Crie o banco de dados `db_controlefinanceiro`.
- Execute o script SQL disponível na pasta `database` para criar a tabela necessária.

3. Configure o Backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` dentro da pasta `backend`, utilizando o `.env.example` como referência.

Configure suas credenciais do MySQL:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=db_controlefinanceiro
```

Inicie o servidor:

```bash
npm start
```

4. Configure o Frontend

Em outro terminal, entre na pasta:

```bash
cd Estoque
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Acesse o endereço disponibilizado pelo Vite, normalmente:

`http://localhost:5173`

Futuras melhorias

- Tornar a aplicação totalmente responsiva para dispositivos móveis, tablets e desktops.
- Implementar autenticação e cadastro de usuários.
- Adicionar gráficos para visualização das movimentações financeiras.
- Criar filtros por período e intervalo de datas.
- Implementar paginação para grandes volumes de transações.
- Melhorar a experiência visual e a usabilidade da aplicação.

Autor

Desenvolvido como projeto de estudo e prática de desenvolvimento Full Stack.

**GitHub:** [CaioHennrique](https://github.com/CaioHennrique)
