// src/main.jsx

import React from 'react'; // Importa a biblioteca principal do React
import ReactDOM from 'react-dom/client'; // Importa o módulo para renderizar o React na DOM moderna
import App from './App.jsx'; // Importa o componente principal da aplicação
import { BrowserRouter } from 'react-router-dom'; // Importa o componente de roteamento para navegação SPA

// Renderiza a aplicação React dentro do elemento com id 'root' no HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter permite navegação entre páginas sem recarregar o site */}
    <BrowserRouter>
      {/* App é o componente principal que contém toda a lógica e rotas */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
