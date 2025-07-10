import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Componente para editar os dados de um aluno já cadastrado
export default function EditarAluno() {
  const { id } = useParams(); // Pega o ID do aluno da URL
  const navigate = useNavigate(); // Permite navegação programática
  // Estado local para armazenar os dados do aluno
  const [aluno, setAluno] = useState({ nome: '', email: '', curso: '', notas: [] });

  // Busca os dados do aluno ao carregar a página ou quando o ID mudar
  useEffect(() => {
    fetch(`http://localhost:5000/api/alunos/${id}`)
      .then(res => res.json())
      .then(data => setAluno(data));
  }, [id]);

  // Atualiza o estado do aluno quando algum campo de texto é alterado
  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  // Atualiza o estado das notas (converte string separada por vírgula em array de números)
  const handleNotasChange = (e) => {
    setAluno({ ...aluno, notas: e.target.value.split(',').map(Number) });
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recarregar a página
    await fetch(`http://localhost:5000/api/alunos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    });
    alert('Aluno atualizado!');
    navigate('/alunos'); // Redireciona para a lista de alunos
  };

  // Renderização do formulário de edição
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Título da página */}
      <h2 style={{ color: '#22223b', fontSize: '2rem', fontWeight: 'bold', marginBottom: 24, textAlign: 'center' }}>
        Editar Aluno
      </h2>
      {/* Campo de nome */}
      <input
        name="nome"
        placeholder="Nome"
        value={aluno.nome}
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          borderRadius: 6,
          border: '1px solid #bbb',
          fontSize: 16
        }}
      />
      {/* Campo de email */}
      <input
        name="email"
        placeholder="Email"
        value={aluno.email}
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          borderRadius: 6,
          border: '1px solid #bbb',
          fontSize: 16
        }}
      />
      {/* Campo de curso */}
      <input
        name="curso"
        placeholder="Curso"
        value={aluno.curso}
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          borderRadius: 6,
          border: '1px solid #bbb',
          fontSize: 16
        }}
      />
      {/* Campo de notas (separadas por vírgula) */}
      <input
        name="notas"
        placeholder="Notas (separadas por vírgula)"
        value={aluno.notas.join(',')}
        onChange={handleNotasChange}
        style={{
          padding: '10px',
          borderRadius: 6,
          border: '1px solid #bbb',
          fontSize: 16
        }}
      />
      {/* Botão para salvar as alterações */}
      <button
        type="submit"
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
          width: '100%',
          fontFamily: 'Segoe UI, Arial, sans-serif'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#4f46e5')}
        onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
      >
        Salvar
      </button>
      {/* Botão para voltar para a lista de alunos */}
      <button
        type="button"
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
          marginTop: 4,
          transition: 'background 0.2s',
          width: '100%',
          fontFamily: 'Segoe UI, Arial, sans-serif'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#d1d5db')}
        onMouseOut={e => (e.currentTarget.style.background = '#e5e7eb')}
      >
        Voltar
      </button>
    </form>
  );
}