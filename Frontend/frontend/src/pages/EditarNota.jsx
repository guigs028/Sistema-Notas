import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({ nome: '', email: '', curso: '', notas: [] });
  const [notas, setNotas] = useState(['', '', '']);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/alunos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Aluno não encontrado!');
        return res.json();
      })
      .then(data => {
        setAluno(data);
        setNotas(data.notas && data.notas.length === 3 ? data.notas.map(String) : ['', '', '']);
      })
      .catch(() => setErro('Aluno não encontrado!'));
  }, [id]);

  const handleNotaChange = (index, value) => {
    const novasNotas = [...notas];
    novasNotas[index] = value;
    setNotas(novasNotas);
  };

  const handleLancarNotas = async () => {
    if (!aluno) return;
    await fetch(`http://localhost:5000/api/alunos/${aluno.id || aluno._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...aluno, notas: notas.map(n => parseFloat(n)) })
    });
    alert('Notas lançadas!');
    navigate('/alunos');
  };

  return (
    <div>
      <h2>Lançar Notas para {aluno.nome}</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <div>
        <label>Nota 1:</label>
        <input type="number" value={notas[0]} onChange={(e) => handleNotaChange(0, e.target.value)} />
      </div>
      <div>
        <label>Nota 2:</label>
        <input type="number" value={notas[1]} onChange={(e) => handleNotaChange(1, e.target.value)} />
      </div>
      <div>
        <label>Nota 3:</label>
        <input type="number" value={notas[2]} onChange={(e) => handleNotaChange(2, e.target.value)} />
      </div>
        <button onClick={handleLancarNotas}>Lançar Notas</button>
        <button onClick={() => navigate('/alunos')} style={{ marginLeft: 8 }}>
            Voltar
        </button>
    </div>
    );
}