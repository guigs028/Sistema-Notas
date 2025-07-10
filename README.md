# Sistema de Notas - React + Vite

Sistema web completo para cadastro de alunos e lançamento de notas, desenvolvido com **React**, **Vite**, **Node.js (Express)** e **MongoDB**.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Hospedagem (Deploy)](#hospedagem-deploy)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Sobre o Projeto

O **Sistema de Notas** é uma aplicação web que permite o gerenciamento completo de alunos, incluindo cadastro, edição, exclusão e lançamento de notas (buscando o aluno ou editando através da lista de alunos). O objetivo é facilitar o controle acadêmico de forma simples, eficiente e intuitiva, tanto para instituições de ensino quanto para professores.

---

## Funcionalidades

- Cadastro de alunos com nome, email e curso
- Listagem de todos os alunos cadastrados
- Edição e exclusão de alunos
- Lançamento e edição de notas individuais
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
   git clone https://github.com/guigs028/Sistema-Notas.git
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
   - Crie um arquivo `.env` na pasta `Frontend/frontend` com:
     ```
     VITE_API_URL=http://localhost:5000
     #VITE_API_URL=https://sistema-notas-uxtt.onrender.com
     ```
   - Inicie o servidor frontend:
     ```bash
     npm run dev
     ```

4. **Acesse o sistema:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000)

---

## Hospedagem (Deploy)

O sistema está hospedado em ambiente de produção utilizando:

- **Backend:** [Render](https://render.com/)  
  O backend Node.js/Express está hospedado no Render, acessível por uma URL pública: `https://sistema-notas-uxtt.onrender.com`.

- **Frontend:** [Vercel](https://vercel.com/)  
  O frontend React/Vite está hospedado no Vercel, acessível por uma URL pública: `https://sistema-notas-eta.vercel.app/`.

### Variáveis de ambiente para produção

No deploy, o arquivo `.env` do frontend deve conter:
```
VITE_API_URL=https://sistema-notas-uxtt.onrender.com
#VITE_API_URL=http://localhost:5000
```
No ambiente local, **comente a linha do Render e descomente a do localhost** para rodar tudo localmente:
```
#VITE_API_URL=https://sistema-notas-uxtt.onrender.com
VITE_API_URL=http://localhost:5000
```
No Vercel, configure a variável de ambiente `VITE_API_URL` pelo painel, apontando para o backend do Render.

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

## Licença

Este projeto está licenciado sob a licença MIT.  
Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por [Guilherme Dentzien](https://github.com/guigs028)
