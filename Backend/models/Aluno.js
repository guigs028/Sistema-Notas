const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  curso: {
    type: String,
    required: true
  },
  notas: {
    type: [Number], // Array de notas
    default: []
  },
}, { timestamps: true });

module.exports = mongoose.model('Aluno', AlunoSchema);
