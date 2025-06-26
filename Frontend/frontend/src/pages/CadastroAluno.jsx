import { useState } from 'react';

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aluno = {
      nome,
      email,
      curso
    };
    await fetch('http://localhost:5000/api/alunos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    });
    alert('Aluno cadastrado!');
    setNome('');
    setEmail('');
    setCurso('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Curso" value={curso} onChange={e => setCurso(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}