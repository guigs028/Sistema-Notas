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
        Lançar Notas para {aluno.nome}
      </h2>
      {erro && <p style={{ color: 'red', marginBottom: 16, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{erro}</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
        <div>
          <label style={{ fontWeight: 500, marginRight: 8, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Nota 1:</label>
          <input
            type="number"
            value={notas[0]}
            onChange={(e) => handleNotaChange(0, e.target.value)}
            style={{
              width: 80,
              padding: '8px',
              borderRadius: 6,
              border: '1px solid #bbb',
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Segoe UI, Arial, sans-serif'
            }}
          />
        </div>
        <div>
          <label style={{ fontWeight: 500, marginRight: 8, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Nota 2:</label>
          <input
            type="number"
            value={notas[1]}
            onChange={(e) => handleNotaChange(1, e.target.value)}
            style={{
              width: 80,
              padding: '8px',
              borderRadius: 6,
              border: '1px solid #bbb',
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Segoe UI, Arial, sans-serif'
            }}
          />
        </div>
        <div>
          <label style={{ fontWeight: 500, marginRight: 8, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Nota 3:</label>
          <input
            type="number"
            value={notas[2]}
            onChange={(e) => handleNotaChange(2, e.target.value)}
            style={{
              width: 80,
              padding: '8px',
              borderRadius: 6,
              border: '1px solid #bbb',
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Segoe UI, Arial, sans-serif'
            }}
          />
        </div>
      </div>
      <button
        onClick={handleLancarNotas}
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
          width: '100%', // igual ao botão Voltar
          fontFamily: 'Segoe UI, Arial, sans-serif'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
        onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
      >
        Lançar Notas
      </button>
      <button
        onClick={() => navigate('/alunos')}
        style={{
          background: '#e5e7eb',
          color: '#222',
          border: 'none',
          borderRadius: 6,
          padding: '12px',
          fontSize: 16,
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '100%',
          marginTop: 10,
          transition: 'background 0.2s',
          fontFamily: 'Segoe UI, Arial, sans-serif'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#d1d5db')}
        onMouseOut={e => (e.currentTarget.style.background = '#e5e7eb')}
      >
        Voltar
      </button>
    </div>
  );
}