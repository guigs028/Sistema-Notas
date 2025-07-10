import { useState } from 'react';

// Componente funcional para cadastro de aluno
export default function CadastroAluno() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');     // Nome do aluno
  const [email, setEmail] = useState('');   // Email do aluno
  const [curso, setCurso] = useState('');   // Curso do aluno
  const [erro, setErro] = useState('');     // Mensagem de erro (se houver)

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    setErro('');        // Limpa mensagens de erro anteriores

    // Validação simples: todos os campos devem ser preenchidos
    if (!nome.trim() || !email.trim() || !curso.trim()) {
      setErro('Preencha todos os campos!');
      return;
    }

    try {
      // Envia os dados para o backend usando fetch
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/alunos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, curso }) // Envia os dados como JSON
      });

      // Se o backend retornar 409, já existe aluno com esse nome
      if (response.status === 409) {
        setErro('Aluno já cadastrado com este nome!');
        return;
      }
      // Se houver outro erro, exibe mensagem genérica
      if (!response.ok) {
        setErro('Erro ao cadastrar aluno!');
        return;
      }

      // Se tudo der certo, mostra alerta e limpa os campos
      alert('Aluno cadastrado!');
      setNome('');
      setEmail('');
      setCurso('');
    } catch {
      // Se não conseguir conectar ao backend
      setErro('Erro de conexão com o servidor!');
    }
  };

  // Renderização do formulário de cadastro
  return (
    <div
      style={{
        maxWidth: 400, // Largura máxima do card
        margin: '40px auto', // Centraliza verticalmente e horizontalmente
        background: '#f9fafb', // Cor de fundo suave
        borderRadius: 16, // Bordas arredondadas
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)', // Sombra suave
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Segoe UI, Arial, sans-serif', // Fonte amigável
      }}
    >
      {/* Título da página */}
      <h2 style={{ color: '#222', marginBottom: 24, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Cadastro de Aluno</h2>
      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Exibe mensagem de erro, se houver */}
        {erro && <div style={{ color: 'red', marginBottom: 10, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{erro}</div>}
        {/* Campo de nome */}
        <input
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: 6,
            border: '1px solid #bbb',
            fontSize: 16,
            fontFamily: 'Segoe UI, Arial, sans-serif'
          }}
        />
        {/* Campo de email */}
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: 6,
            border: '1px solid #bbb',
            fontSize: 16,
            fontFamily: 'Segoe UI, Arial, sans-serif'
          }}
        />
        {/* Campo de curso */}
        <input
          placeholder="Curso"
          value={curso}
          onChange={e => setCurso(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: 6,
            border: '1px solid #bbb',
            fontSize: 16,
            fontFamily: 'Segoe UI, Arial, sans-serif'
          }}
        />
        {/* Botão de envio */}
        <button
          type="submit"
          style={{
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '12px',
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: 8,
            transition: 'background 0.2s',
            fontFamily: 'Segoe UI, Arial, sans-serif'
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
          onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}