# Sistema de Notas - React + Vite

Sistema web completo para cadastro de alunos, lançamento de notas e geração de boletins, desenvolvido com **React**, **Vite**, **Node.js (Express)** e **MongoDB**.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Sobre o Projeto

O **Sistema de Notas** é uma aplicação web que permite o gerenciamento completo de alunos, incluindo cadastro, edição, exclusão, lançamento de notas e visualização de boletins. O objetivo é facilitar o controle acadêmico de forma simples, eficiente e intuitiva, tanto para instituições de ensino quanto para professores.

---

## Funcionalidades

- Cadastro de alunos com nome, email e curso
- Listagem de todos os alunos cadastrados
- Edição e exclusão de alunos
- Lançamento e edição de notas individuais
- Visualização de boletim detalhado do aluno
- Busca de alunos por nome
- Interface responsiva e amigável

---

## Tecnologias Utilizadas

- **Frontend:**  
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - CSS-in-JS (inline styles)
- **Backend:**  
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
- **Outros:**  
  - Fetch API para requisições HTTP
  - [dotenv](https://www.npmjs.com/package/dotenv) para variáveis de ambiente

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) e npm instalados
- [MongoDB](https://www.mongodb.com/) em execução local ou na nuvem

### Passos

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```

2. **Configure o Backend:**
   ```bash
   cd SistemaNotas/Backend
   npm install
   ```
   - Crie um arquivo `.env` na pasta `Backend` com o seguinte conteúdo:
     ```
     MONGO_URI=mongodb://localhost:27017/sistema-notas
     PORT=5000
     ```
   - Inicie o servidor backend:
     ```bash
     npm start
     ```

3. **Configure o Frontend:**
   ```bash
   cd ../Frontend/frontend
   npm install
   ```
   - Inicie o servidor frontend:
     ```bash
     npm run dev
     ```

4. **Acesse o sistema:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000)

---

## Estrutura de Pastas

```
SistemaNotas/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── .env
├── Frontend/
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   │   └── Navbar.jsx
│       │   ├── pages/
│       │   │   ├── Home.jsx
│       │   │   ├── CadastroAluno.jsx
│       │   │   ├── ListaAlunos.jsx
│       │   │   ├── LancarNota.jsx
│       │   │   ├── EditarAluno.jsx
│       │   │   ├── EditarNota.jsx
│       │   │   └── BoletimAluno.jsx
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── public/
│       └── README.md
```

---

## Contribuição

Contribuições são bem-vindas!  
Para contribuir, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

Sugestões, correções e melhorias são sempre bem-vindas. Sinta-se à vontade para abrir uma issue ou enviar um PR.

---

## Licença

Este projeto está licenciado sob a licença MIT.  
Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ por [Seu Nome](https://github.com/seu-usuario)
