const Aluno = require('../models/Aluno');

// GET - listar alunos
exports.getAlunos = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

// POST - adicionar novo aluno
exports.createAluno = async (req, res) => {
  const { nome, email, curso } = req.body;

  // Validação de campos obrigatórios
  if (!nome || !email || !curso) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  // Verifica nome duplicado
  const existe = await Aluno.findOne({ nome: new RegExp(`^${nome}$`, 'i') });
  if (existe) {
    return res.status(409).json({ message: 'Aluno já cadastrado com este nome!' });
  }

  const novoAluno = new Aluno({ nome, email, curso });
  await novoAluno.save();
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

// PUT - lançar notas
exports.lancarNotas = (req, res) => {
  const id = parseInt(req.params.id);
  const aluno = alunos.find(a => a.id === id);
  if (aluno) {
    const { notas } = req.body;
    if (!Array.isArray(notas) || notas.length !== 3 || !notas.every(n => typeof n === 'number')) {
      return res.status(400).json({ message: 'Notas inválidas. Deve ser um array de 3 números.' });
    }
    aluno.notas = notas;
    res.json(aluno);
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
}
