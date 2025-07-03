// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#22223b',
  textDecoration: 'none',
  marginBottom: 10,
  padding: '10px 14px',
  borderRadius: '8px',
  fontWeight: 500,
  fontSize: 16,
  transition: 'background 0.08s, color 0.08s',
  fontFamily: 'Segoe UI, Arial, sans-serif'
};

export default function Navbar() {
  return (
    <aside
      style={{
        width: 220,
        height: '100vh',
        background: '#f9fafb', // Removido o gradiente, cor sólida amigável
        color: '#22223b',
        padding: '2rem 1rem',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}
    >
      <style>
        {`
          .nav-link {
            transition: background 0.08s, color 0.08s;
            font-family: Segoe UI, Arial, sans-serif;
          }
          .nav-link:hover {
            background: #e0e7ef;
            color: #2563eb;
          }
        `}
      </style>
      <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
      <Link to="/cadastro" className="nav-link" style={linkStyle}>Cadastro de Aluno</Link>
      <Link to="/alunos" className="nav-link" style={linkStyle}>Lista de Alunos</Link>
      <Link to="/lancar-nota" className="nav-link" style={linkStyle}>Lançar Nota</Link>
      <Link to="/boletim" className="nav-link" style={linkStyle}>Boletim</Link>
    </aside>
  );
}
