import React, { Component } from 'react'
import FCCConditional from './FCCConditional'

export default class FCCConditionalRenderingApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            unreadMessages: ['a', 'b']
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                <FCCConditional isLoading={this.state.isLoading} unreadMessages={this.state.unreadMessages}/>
            </div>
        )
    }
}
