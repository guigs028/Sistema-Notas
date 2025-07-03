const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rota GET /api/alunos
// Retorna a lista de todos os alunos cadastrados
router.get('/', alunoController.getAlunos);

// Rota POST /api/alunos
// Cria um novo aluno com os dados enviados no corpo da requisição
router.post('/', alunoController.createAluno);

// Rota PUT /api/alunos/:id
// Atualiza os dados (nome, email, curso, notas) de um aluno específico pelo ID
router.put('/:id', alunoController.updateAluno);

// Rota DELETE /api/alunos/:id
// Remove um aluno específico do banco de dados pelo ID
router.delete('/:id', alunoController.deleteAluno);

// Rota PUT /api/alunos/:id/notas
// Atualiza apenas as notas de um aluno específico pelo ID
router.put('/:id/notas', alunoController.lancarNotas);

// Rota GET /api/alunos/:id
// Retorna os dados de um aluno específico pelo ID
router.get('/:id', alunoController.getAlunoById);

module.exports = router;
