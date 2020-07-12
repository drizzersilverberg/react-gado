import React, { Component } from 'react'
import FCCTodoItem from './FCCTodoItem'
import todosData from '../data/todosData'

/**
 * https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
 */

export default class FCCTodoApp extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }

        // methods binding for setting state inside the methods
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        console.log('changed id:', id)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.todos.map(item =>
                    <FCCTodoItem 
                        key={item.id}
                        item={item}
                        handleChange={this.handleChange}
                    />
                )}
            </div>
        )
    }
}
