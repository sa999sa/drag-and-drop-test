import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { Piece } from './components/piece';
import { CHARACTERS } from './components/charactersData';
import { Drag } from './components/drag-test';
function App() {
  return (
    <div className="App">
      <Drag />
    </div>
  );
}

export default App;
