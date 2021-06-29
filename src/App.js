import Foodbox from './components/Foodbox.js';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className='flex-container'>
        <Foodbox />
      </div>
    </div>
  );
}

export default App;
