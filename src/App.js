import React from 'react';
import './App.css';
import Resorces from './components/content/Resorces';
import MaterialForm from './components/form/MaterialForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">Поиск материалов для уроков</h1>
      </header>
      <MaterialForm />
      <Resorces />
    </div>
  );
}

export default App;
