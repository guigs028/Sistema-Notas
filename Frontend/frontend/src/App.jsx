// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroAluno from './pages/CadastroAluno';
import ListaAlunos from './pages/ListaAlunos';
import LancarNota from './pages/LancarNota';
import BoletimAluno from './pages/BoletimAluno';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroAluno />} />
        <Route path="/alunos" element={<ListaAlunos />} />
        <Route path="/lancar-nota" element={<LancarNota />} />
        <Route path="/boletim" element={<BoletimAluno />} />
      </Routes>
    </>
  );
}

export default App;
