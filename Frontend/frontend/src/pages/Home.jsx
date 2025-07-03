// src/pages/Home.jsx
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}
    >
      <h1 style={{ color: '#222', fontSize: '2.5rem', marginBottom: 16, fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Bem-vindo ao Sistema de Alunos
      </h1>
      <p style={{ color: '#444', fontSize: '1.2rem', maxWidth: 500, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Gerencie cadastros, notas e boletins de forma simples e eficiente.<br />
        Use o menu lateral para navegar entre as funcionalidades do sistema.
      </p>
    </div>
  );
}

