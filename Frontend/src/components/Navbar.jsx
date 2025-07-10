// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

// Define o estilo padrão dos links da barra de navegação
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

// Navbar responsiva: lateral no desktop, topo no mobile
export default function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar {
            width: 220px;
            height: 100vh;
            background: #f9fafb;
            color: #22223b;
            padding: 2rem 1rem;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            box-shadow: 2px 0 8px rgba(0,0,0,0.08);
            font-family: Segoe UI, Arial, sans-serif;
            z-index: 100;
            transition: all 0.3s;
          }
          .nav-link {
            transition: background 0.08s, color 0.08s;
            font-family: Segoe UI, Arial, sans-serif;
          }
          .nav-link:hover {
            background: #e0e7ef;
            color: #2563eb;
          }
          /* Navbar no topo em telas pequenas */
          @media (max-width: 700px) {
            .navbar {
              width: 100vw;
              height: auto;
              flex-direction: row;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              padding: 0.5rem 0.5rem;
              gap: 0.5rem;
              justify-content: center;
              align-items: center;
            }
            .nav-link {
              margin-bottom: 0 !important;
              font-size: 15px !important;
              padding: 8px 10px !important;
            }
          }
        `}
      </style>
      <aside className="navbar">
        <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
        <Link to="/cadastro" className="nav-link" style={linkStyle}>Cadastro de Aluno</Link>
        <Link to="/alunos" className="nav-link" style={linkStyle}>Lista de Alunos</Link>
        <Link to="/lancar-nota" className="nav-link" style={linkStyle}>Lançar Nota</Link>
        <Link to="/boletim" className="nav-link" style={linkStyle}>Boletim</Link>
      </aside>
    </>
  );
}
