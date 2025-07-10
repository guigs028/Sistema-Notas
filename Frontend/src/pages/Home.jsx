// src/pages/Home.jsx

// Componente funcional principal da página inicial do sistema
export default function Home() {
  return (
    // Container principal centralizado com estilização moderna
    <>
    <div
      style={{
        display: 'flex', // Usa flexbox para alinhar os elementos
        flexDirection: 'column', // Organiza os filhos em coluna
        alignItems: 'center', // Centraliza horizontalmente
        justifyContent: 'center', // Centraliza verticalmente
        height: '80vh', // Ocupa 80% da altura da tela
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)', // Fundo em gradiente suave
        borderRadius: '16px', // Bordas arredondadas
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)', // Sombra para dar destaque ao card
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte amigável e moderna
      }}
    >
      {/* Título principal da página */}
      <h1 style={{
        color: '#222', // Cor escura para destaque
        fontSize: '2.5rem', // Tamanho grande
        marginBottom: 16, // Espaçamento inferior
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte consistente
      }}>
        Bem-vindo ao Sistema de Alunos
      </h1>
      {/* Parágrafo explicativo sobre o sistema */}
      <p style={{
        color: '#444', // Cor levemente mais clara que o título
        fontSize: '1.2rem', // Tamanho confortável para leitura
        maxWidth: 500, // Limita a largura para melhor visualização
        textAlign: 'center', // Centraliza o texto
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte consistente
      }}>
        Gerencie cadastros, notas e boletins de forma simples e eficiente.<br />
        Use o menu lateral para navegar entre as funcionalidades do sistema.
      </p>
    </div>
    </>
  );
}

