import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Componente para lançar notas de um aluno
export default function LancarNota() {
  const { id } = useParams(); // Pega o ID do aluno da URL (se vier pela rota)
  const [busca, setBusca] = useState(''); // Estado para o campo de busca por nome
  const [aluno, setAluno] = useState(null); // Estado para armazenar o aluno encontrado
  const [notas, setNotas] = useState(['', '', '']); // Estado para as 3 notas (como strings)
  const [erro, setErro] = useState(''); // Estado para mensagem de erro

  // Se veio um ID na URL, busca o aluno automaticamente ao carregar a página
  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_URL}/api/alunos/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Aluno não encontrado!');
          return res.json();
        })
        .then(data => {
          setAluno(data); // Salva o aluno encontrado
          // Se já tem 3 notas, exibe nos inputs, senão deixa vazio
          setNotas(data.notas && data.notas.length === 3 ? data.notas.map(String) : ['', '', '']);
        })
        .catch(() => setErro('Aluno não encontrado!'));
    }
  }, [id]);

  // Função para buscar aluno pelo nome digitado
  const handleBuscar = async () => {
    setErro('');
    setAluno(null);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/alunos`);
    const alunos = await res.json();
    // Busca aluno pelo nome (case insensitive)
    const encontrado = alunos.find(a => a.nome.toLowerCase() === busca.toLowerCase());
    if (encontrado) {
      setAluno(encontrado);
      setNotas(encontrado.notas && encontrado.notas.length === 3 ? encontrado.notas.map(String) : ['', '', '']);
    } else {
      setErro('Aluno não encontrado!');
    }
  };

  // Atualiza o estado das notas quando algum input é alterado
  const handleNotaChange = (index, value) => {
    const novasNotas = [...notas];
    novasNotas[index] = value;
    setNotas(novasNotas);
  };

  // Função para lançar (salvar) as notas do aluno
  const handleLancarNotas = async () => {
    if (!aluno) return; // Não faz nada se não houver aluno selecionado
    await fetch(`${import.meta.env.VITE_API_URL}/api/alunos/${aluno.id || aluno._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // Atualiza as notas do aluno (converte para float)
      body: JSON.stringify({ ...aluno, notas: notas.map(n => parseFloat(n)) })
    });
    alert('Notas lançadas!');
    setAluno(null); // Limpa o aluno selecionado
    setBusca(''); // Limpa o campo de busca
    setNotas(['', '', '']); // Limpa os campos de notas
  };

  // Renderização do componente
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
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}
    >
      {/* Título da página */}
      <h2 style={{ color: '#22223b', fontSize: '2rem', fontWeight: 'bold', marginBottom: 24, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Lançar Nota
      </h2>
      
      {/* Formulário de busca por nome (só aparece se não veio ID na URL) */}
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
      {/* Exibe mensagem de erro, se houver */}
      {erro && <div style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{erro}</div>}

      {/* Se encontrou o aluno, exibe inputs para lançar as notas */}
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
          {/* Nome do aluno */}
          <h3 style={{ color: '#222', fontSize: '1.3rem', marginBottom: 16, textAlign: 'center', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{aluno.nome}</h3>
          {/* Inputs para as três notas */}
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
          {/* Botão para lançar as notas */}
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