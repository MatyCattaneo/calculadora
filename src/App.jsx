import Suma from './components/suma';
import Resta from './components/resta';
import Multiplicacion from './components/multiplicacion';
import Division from './components/division';
import React from 'react';
import './App.css';

function App() {
  return (
  <div>
    <Suma />
    <Resta />
    <Multiplicacion />
    <Division />
  </div>
  )
}

export default App;