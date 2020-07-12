import React from 'react'

export default function FCCJoke(props) {
    return (
        <div className="joke-item">
            <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
            <p style={{color: !props.question && "#888888"}}>Punchline: {props.punchline}</p>
        </div>
    )
}
