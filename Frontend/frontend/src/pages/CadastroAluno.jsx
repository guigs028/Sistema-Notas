import { useState } from 'react';

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    if (!nome.trim() || !email.trim() || !curso.trim()) {
      setErro('Preencha todos os campos!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, curso })
      });

      if (response.status === 409) {
        setErro('Aluno já cadastrado com este nome!');
        return;
      }
      if (!response.ok) {
        setErro('Erro ao cadastrar aluno!');
        return;
      }

      alert('Aluno cadastrado!');
      setNome('');
      setEmail('');
      setCurso('');
    } catch {
      setErro('Erro de conexão com o servidor!');
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        background: '#f9fafb',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Segoe UI, Arial, sans-serif', // Fonte alterada aqui
      }}
    >
      <h2 style={{ color: '#222', marginBottom: 24, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Cadastro de Aluno</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {erro && <div style={{ color: 'red', marginBottom: 10, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{erro}</div>}
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