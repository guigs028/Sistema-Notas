import { useState } from 'react';

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    // Validação simples para campos vazios
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
        setErro('Aluno já cadastrado com este e-mail!');
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
    <form onSubmit={handleSubmit}>
      {erro && <div style={{ color: 'red', marginBottom: 10 }}>{erro}</div>}
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Curso" value={curso} onChange={e => setCurso(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}