import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function LancarNota() {
  const { id } = useParams();
  const [busca, setBusca] = useState('');
  const [aluno, setAluno] = useState(null);
  const [notas, setNotas] = useState(['', '', '']);
  const [erro, setErro] = useState('');

  // Se veio por ID na URL, busca o aluno automaticamente
  useEffect(() => {
    if (id) {
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
    }
  }, [id]);

  const handleBuscar = async () => {
    setErro('');
    setAluno(null);
    const res = await fetch('http://localhost:5000/api/alunos');
    const alunos = await res.json();
    const encontrado = alunos.find(a => a.nome.toLowerCase() === busca.toLowerCase());
    if (encontrado) {
      setAluno(encontrado);
      setNotas(encontrado.notas && encontrado.notas.length === 3 ? encontrado.notas.map(String) : ['', '', '']);
    } else {
      setErro('Aluno não encontrado!');
    }
  };

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
    setAluno(null);
    setBusca('');
    setNotas(['', '', '']);
  };

  return (
    <div>
      <h2>Lançar Nota</h2>
      {!id && (
        <>
          <input
            placeholder="Digite o nome do aluno"
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
          <button onClick={handleBuscar}>Buscar</button>
        </>
      )}
      {erro && <div style={{ color: 'red', marginTop: 10 }}>{erro}</div>}

      {aluno && (
        <div style={{ border: '1px solid #ccc', marginTop: 20, padding: 20 }}>
          <h3>{aluno.nome}</h3>
          <div>
            <input
              type="number"
              placeholder="Nota 1"
              value={notas[0]}
              onChange={e => handleNotaChange(0, e.target.value)}
            />
            <input
              type="number"
              placeholder="Nota 2"
              value={notas[1]}
              onChange={e => handleNotaChange(1, e.target.value)}
            />
            <input
              type="number"
              placeholder="Nota 3"
              value={notas[2]}
              onChange={e => handleNotaChange(2, e.target.value)}
            />
          </div>
          <button onClick={handleLancarNotas}>Lançar Notas</button>
        </div>
      )}
    </div>
  );
}