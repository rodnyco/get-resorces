import React from 'react';
import './App.css';
import MaterialContent from './components/MaterialContent';
import MaterialForm from './components/MaterialForm.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">Поиск говна для уроков</h1>
      </header>
      <MaterialForm/>
      <MaterialContent/>
    </div>
  );
}

export default App;
