import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Componente que exibe a lista de alunos cadastrados
export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]); // Estado para armazenar a lista de alunos
  const navigate = useNavigate(); // Hook para navegação programática

  // Busca a lista de alunos no backend ao carregar a página
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/alunos`)
      .then(res => res.json())
      .then(data => setAlunos(data));
  }, []);

  // Função para navegar para a tela de edição do aluno selecionado
  const handleEditar = (aluno) => {
    navigate(`/editar/${aluno.id || aluno._id}`);
  };

  // Função para excluir um aluno
  const handleExcluir = async (alunoId) => {
    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      await fetch(`${import.meta.env.VITE_API_URL}/api/alunos/${alunoId}`, {
        method: 'DELETE'
      });
      // Remove o aluno da lista local após exclusão
      setAlunos(alunos.filter(a => a.id !== alunoId && a._id !== alunoId));
      alert('Aluno excluído com sucesso!');
    }
  };

  // Função para navegar para a tela de lançamento de notas do aluno selecionado
  const handleLancarNotas = (aluno) => {
    navigate(`/lancar-nota/${aluno.id || aluno._id}`);
  };

  // Ícone SVG de lixeira para o botão de exclusão
  const TrashIcon = (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M7 8V14M10 8V14M13 8V14M5 6H15M8 6V5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6M4 6H16V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V6Z" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Renderização da tabela de alunos
  return (
    <div
      style={{
        maxWidth: 900, // Largura máxima do card
        margin: '40px auto', // Centraliza na tela
        background: '#f9fafb', // Cor de fundo suave
        borderRadius: 16, // Bordas arredondadas
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)', // Sombra suave
        padding: '2rem',
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte amigável
      }}
    >
      {/* Título da página */}
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontFamily: 'Segoe UI, Arial, sans-serif'
        }}
      >
        Lista de Alunos
      </h2>
      {/* Tabela responsiva */}
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
              {/* Cabeçalhos das colunas */}
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Nome</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Email</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Curso</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Notas</th>
              <th style={{ background: '#e0e7ff', color: '#334155', fontWeight: 600, padding: '12px 16px', textAlign: 'left' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza cada aluno como uma linha da tabela */}
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
                {/* Dados do aluno */}
                <td style={{ padding: '10px 16px' }}>{aluno.nome}</td>
                <td style={{ padding: '10px 16px' }}>{aluno.email}</td>
                <td style={{ padding: '10px 16px' }}>{aluno.curso}</td>
                <td style={{ padding: '10px 16px' }}>{(aluno.notas || []).join(', ')}</td>
                <td style={{ padding: '10px 16px' }}>
                  {/* Botões de ação */}
                  <div style={{ display: 'flex', gap: 8 }}>
                    {/* Botão para lançar notas */}
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
                    {/* Botão para editar aluno */}
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
                    {/* Botão para excluir aluno */}
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
            {/* Caso não haja alunos cadastrados */}
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