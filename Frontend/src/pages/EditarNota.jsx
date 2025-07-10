import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Componente para editar/lançar notas de um aluno específico
export default function EditarNota() {
  const { id } = useParams(); // Pega o ID do aluno da URL
  const navigate = useNavigate(); // Permite navegação programática

  // Estado para armazenar os dados do aluno
  const [aluno, setAluno] = useState({ nome: '', email: '', curso: '', notas: [] });
  // Estado para armazenar as notas em formato de string (para inputs)
  const [notas, setNotas] = useState(['', '', '']);
  // Estado para mensagem de erro
  const [erro, setErro] = useState('');

  // Busca os dados do aluno ao carregar a página ou quando o ID mudar
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/alunos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Aluno não encontrado!'); // Se não encontrar, lança erro
        return res.json();
      })
      .then(data => {
        setAluno(data); // Salva os dados do aluno
        // Se o aluno já tem 3 notas, converte para string para exibir nos inputs, senão deixa vazio
        setNotas(data.notas && data.notas.length === 3 ? data.notas.map(String) : ['', '', '']);
      })
      .catch(() => setErro('Aluno não encontrado!')); // Exibe erro se não encontrar aluno
  }, [id]);

  // Atualiza o estado das notas quando algum input é alterado
  const handleNotaChange = (index, value) => {
    const novasNotas = [...notas];
    novasNotas[index] = value;
    setNotas(novasNotas);
  };

  // Função chamada ao clicar em "Lançar Notas"
  const handleLancarNotas = async () => {
    if (!aluno) return; // Se não houver aluno, não faz nada
    await fetch(`${import.meta.env.VITE_API_URL}/api/alunos/${aluno.id || aluno._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // Envia todas as informações do aluno, mas atualiza as notas com os valores dos inputs
      body: JSON.stringify({ ...aluno, notas: notas.map(n => parseFloat(n)) })
    });
    alert('Notas lançadas!'); // Mostra alerta de sucesso
    navigate('/alunos'); // Volta para a lista de alunos
  };

  // Renderização do formulário de edição de notas
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
        fontFamily: 'Segoe UI, Arial, sans-serif' // Fonte amigável
      }}
    >
      {/* Título da página com nome do aluno */}
      <h2 style={{ color: '#22223b', fontSize: '2rem', fontWeight: 'bold', marginBottom: 24, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Lançar Notas para {aluno.nome}
      </h2>
      {/* Exibe mensagem de erro, se houver */}
      {erro && <p style={{ color: 'red', marginBottom: 16, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{erro}</p>}
      {/* Inputs para as 3 notas */}
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
      {/* Botão para lançar notas */}
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
          width: '100%', // largura total igual ao botão Voltar
          fontFamily: 'Segoe UI, Arial, sans-serif'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
        onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
      >
        Lançar Notas
      </button>
      {/* Botão para voltar para a lista de alunos */}
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