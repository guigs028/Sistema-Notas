// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/cadastro" style={{ marginRight: 10 }}>Cadastro de Aluno</Link>
      <Link to="/alunos" style={{ marginRight: 10 }}>Lista de Alunos</Link>
      <Link to="/lancar-nota" style={{ marginRight: 10 }}>Lançar Nota</Link>
      <Link to="/boletim">Boletim</Link>
    </nav>
  );
}
