# 📚 Book Management API

## Descrição

Este é um projeto desenvolvido utilizando o framework **NestJS** e o banco de dados **MongoDB**. Ele permite o gerenciamento de uma coleção de livros, com funcionalidades para criar, listar, atualizar e deletar registros. Além disso, inclui recursos de consulta por critérios específicos, como autor, gênero, e livros com mais ou menos páginas.

---

## 🚀 Funcionalidades

- **CRUD de livros**:
  - Criar um ou vários livros (`create` e `createmany`).
  - Listar todos os livros ou buscar por critérios específicos.
  - Atualizar um livro pelo ID.
  - Deletar um livro pelo ID.

- **Consultas específicas**:
  - Listar livros por autor.
  - Listar livros por gênero.
  - Listar livros por ano de publicação.
  - Listar os 10 livros com mais páginas.
  - Listar os 10 livros com menos páginas.
  - Buscar um livro pelo ISBN.

---

## 🛠️ Tecnologias utilizadas

- [NestJS](https://nestjs.com/) - Framework para Node.js.
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL.
- [Mongoose](https://mongoosejs.com/) - Biblioteca para modelagem de dados.
- [TypeScript](https://www.typescriptlang.org/) - Linguagem utilizada no desenvolvimento.
- [class-validator](https://github.com/typestack/class-validator) - Validação de dados.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── books/
│   ├── books.controller.ts       # Controlador para as rotas relacionadas aos livros.
│   ├── books.service.ts          # Lógica de negócios da aplicação.
│   ├── schemas/
│   │   └── book.schema.ts        # Definição do esquema do livro.
├── app.module.ts                 # Módulo principal.
├── main.ts                       # Ponto de entrada da aplicação.
````


markdown
Copiar código
# 📚 Book Management API

## Descrição

Este é um projeto desenvolvido utilizando o framework **NestJS** e o banco de dados **MongoDB**. Ele permite o gerenciamento de uma coleção de livros, com funcionalidades para criar, listar, atualizar e deletar registros. Além disso, inclui recursos de consulta por critérios específicos, como autor, gênero, e livros com mais ou menos páginas.

---

## 🚀 Funcionalidades

- **CRUD de livros**:
  - Criar um ou vários livros (`create` e `createmany`).
  - Listar todos os livros ou buscar por critérios específicos.
  - Atualizar um livro pelo ID.
  - Deletar um livro pelo ID.

- **Consultas específicas**:
  - Listar livros por autor.
  - Listar livros por gênero.
  - Listar livros por ano de publicação.
  - Listar os 10 livros com mais páginas.
  - Listar os 10 livros com menos páginas.
  - Buscar um livro pelo ISBN.

---

## 🛠️ Tecnologias utilizadas

- [NestJS](https://nestjs.com/) - Framework para Node.js.
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL.
- [Mongoose](https://mongoosejs.com/) - Biblioteca para modelagem de dados.
- [TypeScript](https://www.typescriptlang.org/) - Linguagem utilizada no desenvolvimento.
- [class-validator](https://github.com/typestack/class-validator) - Validação de dados.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── books/
│   ├── books.controller.ts       # Controlador para as rotas relacionadas aos livros.
│   ├── books.service.ts          # Lógica de negócios da aplicação.
│   ├── schemas/
│   │   └── book.schema.ts        # Definição do esquema do livro.
├── app.module.ts                 # Módulo principal.
├── main.ts                       # Ponto de entrada da aplicação.
```

## 📋 Requisitos
Node.js (>= 16.x)
MongoDB (local ou em um servidor remoto)
## 🚀 Como executar
1. Clone o repositório:

```bash
git clone https://github.com/Joaohenrique1987/RecuperacaoHeuryck.git
```
2. Instale as dependências:

```bash
npm install
```
3. Configure o banco de dados: No arquivo .env, defina a URL do seu banco de dados MongoDB:

```env
MONGODB_URI=mongodb://localhost:27017/bookdb
```
4. Execute a aplicação:

```bash                           
npm run start
```
5. Acesse a API: A aplicação estará disponível em http://localhost:3000.


## 🛠️ Endpoints da API
### Rotas principais
#### Criar um livro
#### POST /books
  - Body:
```json
{
  "title": "Exemplo",
  "author": "Autor Exemplo",
  "yearOfPublication": 2020,
  "genre": "Ficção",
  "numberOfPages": 300,
  "isbn": "9781234567890",
  "synopsis": "Uma sinopse do livro."
}
```
#### Criar múltiplos livros
##### POST /books/many
     - Body:
``` json
[
  {
    "title": "Exemplo 1",
    "author": "Autor Exemplo 1",
    "yearOfPublication": 2019,
    "genre": "Ficção",
    "numberOfPages": 250,
    "isbn": "9781234567891",
    "synopsis": "Uma sinopse do livro 1."
  },
  {
    "title": "Exemplo 2",
    "author": "Autor Exemplo 2",
    "yearOfPublication": 2021,
    "genre": "Terror",
    "numberOfPages": 320,
    "isbn": "9781234567892",
    "synopsis": "Uma sinopse do livro 2."
  }
]
```
#### Listar todos os livros
  ##### GET /books
- Buscar por critérios específicos
  ##### GET /books/author/:author
##### GET /books/genre/:genre
 ##### GET /books/year/:year
#### Listar os 10 livros com mais/menos páginas
##### GET /books/pages/top
##### GET /books/pages/least
#### Buscar por ISBN
###### GET /books/isbn/:isbn
#### Atualizar um livro
#### PATCH /books/:id
- Body:
```json
{
  "title": "Novo Título"
}
```
#### Deletar um livro
##### DELETE /books/:id

