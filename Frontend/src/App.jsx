// src/App.jsx

import { Routes, Route } from 'react-router-dom'; // Importa componentes de roteamento do React Router
import Navbar from './components/Navbar';         // Importa o componente da barra lateral de navegação
import Home from './pages/Home';                  // Importa a página inicial
import CadastroAluno from './pages/CadastroAluno';// Importa a página de cadastro de aluno
import ListaAlunos from './pages/ListaAlunos';    // Importa a página de listagem de alunos
import LancarNota from './pages/LancarNota';      // Importa a página para lançar notas
import EditarAluno from './pages/EditarAluno';    // Importa a página para editar dados do aluno
import EditarNota from './pages/EditarNota';      // Importa a página para editar/lançar notas de um aluno específico

// Componente principal da aplicação
function App() {
  return (
    <>
      {/* Barra lateral de navegação fixa */}
      <Navbar />
      {/* Container principal das páginas, com margem para não sobrepor a sidebar */}
      <div style={{ marginLeft: 200, padding: '2rem' }}>
        {/* Define as rotas do sistema */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />
          {/* Rota para cadastro de aluno */}
          <Route path="/cadastro" element={<CadastroAluno />} />
          {/* Rota para listagem de alunos */}
          <Route path="/alunos" element={<ListaAlunos />} />
          {/* Rota para lançar notas (busca por nome) */}
          <Route path="/lancar-nota" element={<LancarNota />} />
          {/* Rota para editar dados de um aluno (por ID) */}
          <Route path="/editar/:id" element={<EditarAluno />} />
          {/* Rota para lançar/editar notas de um aluno específico (por ID) */}
          <Route path="/lancar-nota/:id" element={<EditarNota />} />
        </Routes>
      </div>
    </>
  );
}

export default App; // Exporta o componente principal para ser usado no index.js
