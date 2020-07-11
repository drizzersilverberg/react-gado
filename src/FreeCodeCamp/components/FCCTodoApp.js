import React, { Component } from 'react'
import FCCTodoItem from './FCCTodoItem'

export default class FCCTodoApp extends Component {
    render() {
        return (
            <div>
                <FCCTodoItem />
                <FCCTodoItem />
                <FCCTodoItem />
                <FCCTodoItem />
            </div>
        )
    }
}
