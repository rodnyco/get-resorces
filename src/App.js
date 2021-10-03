import React from 'react';
import './App.css';
import MaterialContent from './components/content/MaterialContent';
import MaterialForm from './components/form/MaterialForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">Поиск материалов для уроков</h1>
      </header>
      <MaterialForm/>
      <MaterialContent/>
    </div>
  );
}

export default App;
