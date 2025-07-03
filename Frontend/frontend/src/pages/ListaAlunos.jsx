import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/alunos')
      .then(res => res.json())
      .then(data => setAlunos(data));
  }, []);

  const handleEditar = (aluno) => {
    navigate(`/editar/${aluno.id || aluno._id}`);
  };

  const handleExcluir = async (alunoId) => {
    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      await fetch(`http://localhost:5000/api/alunos/${alunoId}`, {
        method: 'DELETE'
      });
      setAlunos(alunos.filter(a => a.id !== alunoId && a._id !== alunoId));
      alert('Aluno excluído com sucesso!');
    }
  };

  const handleLancarNotas = (aluno) => {
    navigate(`/lancar-nota/${aluno.id || aluno._id}`);
  };

  // Ícone SVG de lixeira
  const TrashIcon = (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M7 8V14M10 8V14M13 8V14M5 6H15M8 6V5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6M4 6H16V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V6Z" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '40px auto',
        background: '#f9fafb',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem',
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte alterada aqui
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte alterada aqui
        }}
      >
        Lista de Alunos
      </h2>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            borderRadius: 12,
            overflow: 'hidden'
          }}
        >
          <thead>
            <tr>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Nome</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Email</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Curso</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Notas</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map(aluno => (
              <tr
                key={aluno.id || aluno._id}
                style={{
                  borderBottom: '1px solid #e5e7eb',
                  transition: 'background 0.2s'
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#e0e7ff')}
                onMouseOut={e => (e.currentTarget.style.background = '')}
              >
                <td style={{ padding: '10px 16px' }}>{aluno.nome}</td>
                <td style={{ padding: '10px 16px' }}>{aluno.email}</td>
                <td style={{ padding: '10px 16px' }}>{aluno.curso}</td>
                <td style={{ padding: '10px 16px' }}>{(aluno.notas || []).join(', ')}</td>
                <td style={{ padding: '10px 16px' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => handleLancarNotas(aluno)}
                      style={{
                        background: '#e5e7eb',
                        color: '#222',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 16px',
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={e => (e.currentTarget.style.background = '#d1d5db')}
                      onMouseOut={e => (e.currentTarget.style.background = '#e5e7eb')}
                    >
                      Lançar Notas
                    </button>
                    <button
                      onClick={() => handleEditar(aluno)}
                      style={{
                        background: '#e5e7eb',
                        color: '#222',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 16px',
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={e => (e.currentTarget.style.background = '#d1d5db')}
                      onMouseOut={e => (e.currentTarget.style.background = '#e5e7eb')}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleExcluir(aluno.id || aluno._id)}
                      style={{
                        background: '#e5e7eb',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={e => (e.currentTarget.style.background = '#fee2e2')}
                      onMouseOut={e => (e.currentTarget.style.background = '#e5e7eb')}
                      title="Excluir"
                    >
                      {TrashIcon}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {alunos.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '24px', color: '#888' }}>
                  Nenhum aluno cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}