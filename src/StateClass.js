import React from 'react';

export class StateClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mood: 'tired',
            thirsty: 'yup',
            age: 55,
            className: 'stateDark'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    /*  To iterate over an objects key/values:
    {mapObject(yourObject, function (key, value) {
        return <div>Key: {key}, Value: {value}</div>;
      })}
 */
    handleClick() {
        this.setState (
            this.state.thirsty === 'yup' 
            ? {mood: 'fresh', thirsty: 'nope', age: 25, className: 'stateLight'}
            : {mood: 'tired', thirsty: 'yup', age: 55, className: 'stateDark'}
        )
    }

    render() {
        const stateStr = Object
            .keys(this.state)
            .map((key) => <li>{key}
                : {this.state[key]}</li>)

        return (
            <div className={this.state.className}>
                <h2>This component class has state</h2>
                <p>State is a different way to pass dynamic information between React
                    components. The class is given a constructor function immediately after the
                    class declaration. All instances of this class is instantiated with a js object
                    with state variables. This component has: {stateStr}
                </p>

                <p>Or said by reading the this.state.mood property: I am in a {this.state.mood}
                    mood</p>
                <button onClick={this.handleClick}>Thirsty? {this.state.thirsty}</button>
            </div>
        )
    }
}