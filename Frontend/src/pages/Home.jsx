// src/pages/Home.jsx

// Componente funcional principal da página inicial do sistema
export default function Home() {
  return (
    // Container principal centralizado com estilização moderna
    <>
      <style>
        {`
          @media (max-width: 700px) {
            .home-container {
              height: auto !important;
              min-height: 100vh;
              border-radius: 0 !important;
              padding: 2rem 4vw !important; /* padding lateral proporcional */
              margin: 0 auto !important;
              box-shadow: none !important;
              max-width: 600px !important;
              width: 100% !important; /* ocupa toda a largura disponível, sem overflow */
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .home-container h1 {
              font-size: 2.2rem !important;
              text-align: center !important;
            }
            .home-container p {
              font-size: 1.1rem !important;
              max-width: 95vw !important;
              text-align: center !important;
            }
          }
        `}
      </style>
      <div
        className="home-container"
        style={{
          display: 'flex', // Usa flexbox para alinhar os elementos
          flexDirection: 'column', // Organiza os filhos em coluna
          alignItems: 'center', // Centraliza horizontalmente
          justifyContent: 'center', // Centraliza verticalmente
          height: '80vh', // Ocupa 80% da altura da tela
          background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)', // Fundo em gradiente suave
          borderRadius: '16px', // Bordas arredondadas
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)', // Sombra para dar destaque ao card
          fontFamily: 'Segoe UI, Arial, sans-serif', // Fonte amigável e moderna
          margin: '40px auto', // Margem automática para centralização
          maxWidth: 600, // Largura máxima para o container
          width: '100%' // Largura total até a máxima definida
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

