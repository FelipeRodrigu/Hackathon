import React from 'react';
import './App.css'; // Certifique-se de definir as regras de estilo aqui
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="App"> {/* Classe principal que está definida no CSS */}
      <AppRoutes />
    </div>
  );
};

export default App;