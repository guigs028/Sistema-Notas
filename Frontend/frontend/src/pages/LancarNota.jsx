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
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem',
        minHeight: 300,
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte alterada aqui
      }}
    >
      <h2 style={{ color: '#22223b', fontSize: '2rem', fontWeight: 'bold', marginBottom: 24, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Lançar Nota
      </h2>
      
      {!id && (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleBuscar();
          }}
          style={{ display: 'flex', gap: 8, marginBottom: 20 }}
        >
          <input
            placeholder="Digite o nome do aluno"
            value={busca}
            onChange={e => setBusca(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: 6,
              border: '1px solid #bbb',
              fontSize: 16
            }}
          />
          <button
            type="submit"
            style={{
              background: '#6366f1',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '10px 18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
            onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
          >
            Buscar
          </button>
        </form>
      )}
      {erro && <div style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{erro}</div>}

      {aluno && (
        <div
          style={{
            border: '1px solid #ccc',
            marginTop: 20,
            padding: 20,
            background: '#f9fafb',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
        >
          <h3 style={{ color: '#222', fontSize: '1.3rem', marginBottom: 16, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{aluno.nome}</h3>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 18 }}>
            <input
              type="number"
              placeholder="Nota 1"
              value={notas[0]}
              onChange={e => handleNotaChange(0, e.target.value)}
              style={{
                width: 70,
                padding: '8px',
                borderRadius: 6,
                border: '1px solid #bbb',
                fontSize: 16,
                textAlign: 'center'
              }}
            />
            <input
              type="number"
              placeholder="Nota 2"
              value={notas[1]}
              onChange={e => handleNotaChange(1, e.target.value)}
              style={{
                width: 70,
                padding: '8px',
                borderRadius: 6,
                border: '1px solid #bbb',
                fontSize: 16,
                textAlign: 'center'
              }}
            />
            <input
              type="number"
              placeholder="Nota 3"
              value={notas[2]}
              onChange={e => handleNotaChange(2, e.target.value)}
              style={{
                width: 70,
                padding: '8px',
                borderRadius: 6,
                border: '1px solid #bbb',
                fontSize: 16,
                textAlign: 'center'
              }}
            />
          </div>
          <button
            onClick={handleLancarNotas}
            style={{
              background: '#6366f1', // mesma cor do botão Buscar
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '12px',
              fontSize: 16,
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
            onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
          >
            Lançar Notas
          </button>
        </div>
      )}
    </div>
  );
}