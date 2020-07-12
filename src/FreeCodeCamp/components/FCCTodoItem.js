import React from 'react'

export default function FCCTodoItem(props) {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}
