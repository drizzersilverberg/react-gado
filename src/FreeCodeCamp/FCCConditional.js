import React, { Component } from 'react'

export default class FCCConditional extends Component {
    render() {
        return (
            <div>

                {
                    this.props.unreadMessages.length > 0 &&
                    <h2>You have {this.props.unreadMessages.length} unread messages!</h2>
                }

                <nav>Navbar</nav>

                {this.props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional</h1>}

                <footer>Footer</footer>
            </div>
        )
    }
}
