import AddFood from './components/AddFood.js';
import FoodBox from './components/FoodBox.js';
import foodList from './foods.json';
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    foodItems: foodList,
    filteredFood : [],
    search: ''
  }

  addFoodHandler = (newFood) => {
    const _food = [...this.state.foodItems]
    _food.push(newFood)

    this.setState({
      foodItems: _food
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <label>
          Search:
          <input type="search" name="search" value={this.state.search} onChange={event => this.setState({search: event.target.value})} ></input>
        </label>
        <div className='flex-container'>
                <AddFood addTheFood={this.addFoodHandler} />
                {
                    this.state.foodItems.filter((element) => element.name.includes(this.state.search))
                    .map(item => {
                        return <FoodBox key={item.name} {...item} />
                    })
                }
        </div>
      </div>
    );
  }
}

export default App;
