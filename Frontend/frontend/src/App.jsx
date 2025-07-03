// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroAluno from './pages/CadastroAluno';
import ListaAlunos from './pages/ListaAlunos';
import LancarNota from './pages/LancarNota';
import BoletimAluno from './pages/BoletimAluno';
import EditarAluno from './pages/EditarAluno';
import EditarNota from './pages/EditarNota';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: 200, padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroAluno />} />
          <Route path="/alunos" element={<ListaAlunos />} />
          <Route path="/lancar-nota" element={<LancarNota />} />
          <Route path="/boletim" element={<BoletimAluno />} />
          <Route path="/editar/:id" element={<EditarAluno />} />
          <Route path="/lancar-nota/:id" element={<EditarNota />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
