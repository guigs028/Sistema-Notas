// src/pages/Home.jsx

// Componente funcional principal da página inicial do sistema
export default function Home() {
  return (
    // Fragmento para agrupar estilos globais e container da página
    <>
      {/* Estilos específicos para a página inicial, aplicados apenas em telas menores que 600px */}
      <style>
        {`
          @media (max-width: 600px) {
            .home-container {
              height: auto !important; /* Altura automática para caber o conteúdo */
              min-height: 100vh; /* Garante que ocupe pelo menos a altura total da tela */
              border-radius: 0 !important; /* Remove bordas arredondadas */
              padding: 2rem 4vw !important; /* padding lateral proporcional */
              margin: 0 auto !important; /* Centraliza no mobile */
              box-shadow: none !important; /* Remove sombra */
              max-width: 100vw !important; /* garante que ocupe toda a largura */
              display: flex !important; /* Garante que o container use flexbox */
              flex-direction: column !important; /* Organiza os filhos em coluna */
              align-items: center !important; /* Centraliza horizontalmente */
              justify-content: center !important; /* Centraliza verticalmente */
            }
            .home-container h1 {
              font-size: 1.5rem !important; /* Reduz o tamanho da fonte do título */
              text-align: center !important; /* Centraliza o texto do título */
            }
            .home-container p {
              font-size: 1rem !important; /* Reduz o tamanho da fonte do parágrafo */
              max-width: 98vw !important; /* deixa o texto mais largo, mas com uma pequena margem */
              text-align: center !important; /* Centraliza o texto do parágrafo */
            }
          }
        `}
      </style>
      {/* Container principal centralizado com estilização moderna */}
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
          margin: '40px auto', // Centraliza no desktop
          maxWidth: 600,       // Limita largura no desktop
          width: '100%'        // Ocupa toda a largura possível
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

