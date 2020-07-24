import React, { Component } from 'react'

export default class ClassBasedApp extends Component {

    state = {
        persons: [
            { name: 'Sixteena', age: 16},
            { name: 'Nineteena', age: 19},
            { name: 'Thirteena', age: 13}
        ]
    }

    switchNameHandler = () => {
        console.log('was clicked', 'was clicked')
    }

    // https://reactjs.org/docs/events.html#supported-events

    render() {
        return (
            <div className="peoples">
                <p>Hello, my name is {this.state.persons[0].name} and I am {this.state.persons[0].age} y/o</p>
                <p>Hello, my name is {this.state.persons[1].name} and I am {this.state.persons[1].age} y/o</p>
                <p>Hello, my name is {this.state.persons[2].name} and I am {this.state.persons[2].age} y/o</p>
                <button onClick={this.switchNameHandler}>Switch Names</button>
            </div>
        )
    }
}
