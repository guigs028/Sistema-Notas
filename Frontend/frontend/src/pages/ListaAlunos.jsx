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

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Curso</th>
            <th>Notas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id || aluno._id}>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.curso}</td>
              <td>{(aluno.notas || []).join(', ')}</td>
              <td>
                <button onClick={() => handleEditar(aluno)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}