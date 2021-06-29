import React from 'react';

class AddFood extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: "",
            calories: 0,
            image: "",
            quantity: 0
        }
    }
    

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state)
    }

    handleChange(event) {
        //long version
        const fieldName = event.target.name // "calories
        const fieldValue = event.target.value // 12

        const newState = {}
        newState[fieldName] = fieldValue

        this.setState(newState)

        //the short version of above's code
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Food name:
                        <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                    </label>
                    <label>
                        Calories:
                        <input type="number" name="calories" value={this.state.calories} onChange={(event) => this.handleChange(event)} />
                    </label>
                    <label>
                        Image:
                        <input type="text" name="image" value={this.state.image} onChange={(event) => this.handleChange(event)} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFood;