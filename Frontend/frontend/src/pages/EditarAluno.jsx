import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditarAluno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({ nome: '', email: '', curso: '', notas: [] });

  useEffect(() => {
    fetch(`http://localhost:5000/api/alunos/${id}`)
      .then(res => res.json())
      .then(data => setAluno(data));
  }, [id]);

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleNotasChange = (e) => {
    setAluno({ ...aluno, notas: e.target.value.split(',').map(Number) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/alunos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    });
    alert('Aluno atualizado!');
    navigate('/alunos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Aluno</h2>
      <input name="nome" placeholder="Nome" value={aluno.nome} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={aluno.email} onChange={handleChange} required />
      <input name="curso" placeholder="Curso" value={aluno.curso} onChange={handleChange} required />
      <input
        name="notas"
        placeholder="Notas (separadas por vírgula)"
        value={aluno.notas.join(',')}
        onChange={handleNotasChange}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}