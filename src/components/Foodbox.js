import AddFood from './AddFood.js';
import FoodItem from './FoodItem.js';
import foodList from '../foods.json';
import React from 'react';
import 'bulma/css/bulma.css';


class Foodbox extends React.Component {
    state = {
        food: foodList
    }
    
    addFoodHandler = (newFood) => {
        const _food = [...this.state.food]
        _food.push(newFood)

        this.setState({
            food: _food
        })
    }
    
    render() {
        return (

            <section>
                <AddFood addTheFood={this.addFoodHandler} />
                {
                    this.state.food.map(item => {
                        return <FoodItem key={item.name} {...item} />
                    })
                }
            </section>

        )
    }
}

export default Foodbox;