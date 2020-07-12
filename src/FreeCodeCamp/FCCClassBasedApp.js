import React from 'react'

/**
 * list of react supported events:
 * https://reactjs.org/docs/events.html#supported-events
 */

export default class FCCClassBasedApp extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: 'Yes',
            name: 'Dendi',
            age: 17,
            isLoggedIn: true
        }
    }

    handleClick() {
        console.log('I was clicked in alternative')
    }

    render() {
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = 'in'
        } else {
            wordDisplay = 'out'
        }
        return (
            <div>
                <p>You are currently logged {wordDisplay}</p>
                <h1>Is state important to know? {this.state.answer}</h1>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
                <button onClick={() => console.log('I was clicked!')}>Click me</button>
                <br/>
                <br/>
                <button onClick={this.handleClick}>Click me an alternative</button>
                <br/>
                <br/>
                <img onMouseOver={() => console.log('Hovered')}src="https://placekitten.com/300/200" alt="kitten"/>
            </div>
        )
    }
}
