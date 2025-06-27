let alunos = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    curso: "Engenharia de Software",
    notas: [8.5, 7.0, 9.0]
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria@email.com",
    curso: "Ciência da Computação",
    notas: [7.0, 6.5, 8.0]
  }
];

// GET - listar alunos
exports.getAlunos = (req, res) => {
  res.json(alunos);
};

// POST - adicionar novo aluno
exports.createAluno = (req, res) => {
  const { nome, email, curso } = req.body;

  // Validação de campos obrigatórios
  if (!nome || !email || !curso) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  // Normaliza o nome para comparação
  const nomeNormalizado = nome.trim().toLowerCase().replace(/\s+/g, ' ');
  const existe = alunos.some(a => a.nome.trim().toLowerCase().replace(/\s+/g, ' ') === nomeNormalizado);
  if (existe) {
    return res.status(409).json({ message: 'Aluno já cadastrado com este nome!' });
  }

  const novoAluno = {
    id: Date.now(),
    nome,
    email,
    curso,
    notas: []
  };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
};

// PUT - atualizar aluno
exports.updateAluno = (req, res) => {
  const id = parseInt(req.params.id);
  const index = alunos.findIndex((a) => a.id === id);
  if (index !== -1) {
    alunos[index] = { ...alunos[index], ...req.body };
    res.json(alunos[index]);
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
};

// DELETE - remover aluno
exports.deleteAluno = (req, res) => {
  const id = parseInt(req.params.id);
  alunos = alunos.filter((a) => a.id !== id);
  res.json({ message: 'Aluno removido' });
};

// GET - buscar aluno por ID
exports.getAlunoById = (req, res) => {
  const id = parseInt(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
};
