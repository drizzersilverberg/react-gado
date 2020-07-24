import React, { Component } from 'react'

export default class NextGenJSApp extends Component {

    name = 'ES7'
    age = 8

    multiplier = (number) => number * 2;
    
    render() {

        // Spread Operator

        const numbers = [1,2,3]
        console.log('numbers', numbers)
        const newNumbers = [...numbers, 4, 5]
        console.log('newNumbers', newNumbers)

        const person = {
            name: 'Max'
        }
        console.log('person', person)
        const newPerson = {
            ...person,
            age: 28
        }
        console.log('newPerson', newPerson)

        // Rest Operator
        const filter = (...args) => {
            console.log('args', args)
            return args.filter(el => el === 1)
        }
        console.log('filter', filter(1, 2, 3, 4))

        // Destructuring
        const [a, b] = ['Pegasus', 'Millenium Eye']
        console.log(a, b)

        return (
            <div>
                <p>name: {this.name}</p>
                <p>age: {this.multiplier(this.age)}</p>

            </div>
        )
    }
}
