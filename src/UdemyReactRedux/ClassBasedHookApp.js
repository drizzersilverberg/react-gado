import React, { useState } from 'react'

const ClassBasedHookApp = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Luke Skywalker', age: 50},
            {name: 'Leia Organa', age: 5},
            {name: 'Han Solo', age: 55}
        ],
        otherState: 'only a string'
    })

    console.log('personsState', personsState)

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Luke Skywalker', age: + Math.floor(Math.random() * 100) + 1 },
                { name: 'Leia Organa', age: + Math.floor(Math.random() * 100) + 1 },
                { name: 'Han Solo', age: + Math.floor(Math.random() * 100) + 1 }
            ],

            otherState: personsState.otherState
        })
    }

    return (
        <div className="hookapp">
            <button onClick={switchNameHandler}>Switch Names</button>
            <p>{personsState.persons[0].name} - {personsState.persons[0].age} y/o</p>
            <p>{personsState.persons[1].name} - {personsState.persons[1].age} y/o</p>
            <p>{personsState.persons[2].name} - {personsState.persons[2].age} y/o</p>
            <p>{personsState.otherState}</p>
        </div>
    )
}

export default ClassBasedHookApp