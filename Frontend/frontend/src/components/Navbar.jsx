// src/components/Navbar.jsx
import { Link } from 'react-router-dom'; // Importa o componente Link para navegação entre rotas

// Define o estilo padrão dos links da barra lateral
const linkStyle = {
  color: '#22223b', // Cor do texto
  textDecoration: 'none', // Remove sublinhado padrão dos links
  marginBottom: 10, // Espaçamento inferior entre os links
  padding: '10px 14px', // Espaçamento interno dos links
  borderRadius: '8px', // Bordas arredondadas
  fontWeight: 500, // Peso da fonte (semi-negrito)
  fontSize: 16, // Tamanho da fonte
  transition: 'background 0.08s, color 0.08s', // Transição suave para hover
  fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte amigável e moderna
};

// Componente funcional Navbar que renderiza a barra lateral de navegação
export default function Navbar() {
  return (
    <aside
      style={{
        width: 220, // Largura fixa da sidebar
        height: '100vh', // Altura total da tela
        background: '#f9fafb', // Cor de fundo suave
        color: '#22223b', // Cor do texto padrão
        padding: '2rem 1rem', // Espaçamento interno
        position: 'fixed', // Fixa a barra lateral na tela
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column', // Organiza os links em coluna
        gap: '1.5rem', // Espaçamento entre os links
        boxShadow: '2px 0 8px rgba(0,0,0,0.08)', // Sombra suave à direita
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte da sidebar
      }}
    >
      {/* Estilos CSS adicionais para hover dos links */}
      <style>
        {`
          .nav-link {
            transition: background 0.08s, color 0.08s;
            font-family: Segoe UI, Arial, sans-serif;
          }
          .nav-link:hover {
            background: #e0e7ef; /* Cor de fundo ao passar o mouse */
            color: #2563eb;      /* Cor do texto ao passar o mouse */
          }
        `}
      </style>
      {/* Links de navegação para as principais páginas do sistema */}
      <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
      <Link to="/cadastro" className="nav-link" style={linkStyle}>Cadastro de Aluno</Link>
      <Link to="/alunos" className="nav-link" style={linkStyle}>Lista de Alunos</Link>
      <Link to="/lancar-nota" className="nav-link" style={linkStyle}>Lançar Nota</Link>
      <Link to="/boletim" className="nav-link" style={linkStyle}>Boletim</Link>
    </aside>
  );
}
