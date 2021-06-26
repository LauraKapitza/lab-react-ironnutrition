import Foodbox from './components/Foodbox.js';
import FOODS from './foods.json';
import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className='flex-container'>
        <article className='food-list'>
          {FOODS.map(item => (
            <Foodbox key={item.id} {...item} />
          ))}
        </article>
        <article className='food-details'>
          <h3>Today's Food</h3>
        </article>
      </div>
    </div>
  );
}

export default App;
