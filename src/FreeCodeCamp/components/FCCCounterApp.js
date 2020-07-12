import React, { Component } from 'react'

export default class FCCCounterApp extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        // bind method first to use setState inside your method
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
