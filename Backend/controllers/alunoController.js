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
exports.updateAluno = async (req, res) => {
  const { nome, email, curso, notas } = req.body;
  // Validação de campos obrigatórios
  if (!nome || !email || !curso) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  // Verifica nome duplicado
  const existe = await Aluno.findOne({ nome: new RegExp(`^${nome}$`, 'i'), _id: { $ne: req.params.id } });
  if (existe) {
    return res.status(409).json({ message: 'Já existe um aluno cadastrado com este nome!' });
  }

  const aluno = await Aluno.findByIdAndUpdate(
    req.params.id,
    { $set: { nome, email, curso, notas } }, // notas deve ser um array de números
    { new: true }
  );

  if (!aluno) {
    return res.status(404).json({ message: 'Aluno não encontrado' });
  }

  res.json(aluno);
};

// DELETE - remover aluno
exports.deleteAluno = async (req, res) => {
  const { id } = req.params;
  const aluno = await Aluno.findByIdAndDelete(id);
  if (!aluno) {
    return res.status(404).json({ message: 'Aluno não encontrado' });
  }
  res.json({ message: 'Aluno removido' });
};

// GET - buscar aluno por ID
exports.getAlunoById = async (req, res) => {
  const { id } = req.params;
  const aluno = await Aluno.findById(id);
  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }
};

// PUT - lançar notas
exports.lancarNotas = async (req, res) => {
  const { id } = req.params;
  const { notas } = req.body;
  if (!Array.isArray(notas) || notas.length !== 3 || !notas.every(n => typeof n === 'number')) {
    return res.status(400).json({ message: 'Notas inválidas. Deve ser um array de 3 números.' });
  }
  const aluno = await Aluno.findByIdAndUpdate(
    id,
    { $set: { notas } },
    { new: true }
  );
  if (!aluno) {
    return res.status(404).json({ message: 'Aluno não encontrado' });
  }
  res.json(aluno);
};
