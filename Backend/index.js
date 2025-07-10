// Importa os módulos necessários
const express = require('express');         // Framework para criar o servidor HTTP
const mongoose = require('mongoose');       // ODM para conectar e manipular o MongoDB
const cors = require('cors');               // Middleware para habilitar o CORS (Cross-Origin Resource Sharing)
require('dotenv').config();                 // Carrega variáveis de ambiente do arquivo .env

const app = express();                      // Cria uma instância do aplicativo Express

const corsOptions = {
  origin: [
    'https://sistema-notas-eta.vercel.app',
    'http://localhost:5173'
  ]
};
app.use(cors(corsOptions));                            // Permite requisições de outros domínios (frontend)
app.use(express.json());                    // Permite receber e enviar dados em formato JSON

// Conexão com MongoDB usando a string de conexão do arquivo .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))   // Mensagem de sucesso ao conectar
  .catch((err) => console.log(err));              // Mensagem de erro caso falhe

// Importa e usa as rotas de alunos
const alunoRoutes = require('./routes/alunoRoutes');
app.use('/api/alunos', alunoRoutes);        // Todas as rotas de alunos começam com /api/alunos

// Define a porta do servidor (usa a variável de ambiente ou 5000 como padrão)
const PORT = process.env.PORT || 5000;

// Inicia o servidor e exibe mensagem no console
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
