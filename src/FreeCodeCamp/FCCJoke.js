import React from 'react'

export default function FCCJoke(props) {
    return (
        <div className="joke-item">
            <p style={{display: props.question ? 'block' : 'none'}}>Question: {props.question}</p>
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}
