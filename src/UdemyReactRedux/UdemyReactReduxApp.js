import React from 'react'
import NextGenJSApp from './NextGenJSApp';

export default function UdemyReactReduxApp(props) {

    const multiply = (number) => number * 2;
 
    return (
        <div className="person">
            <h1>
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Age: {multiply(props.age)}
                </p>

                <NextGenJSApp />
            </h1>
        </div>
    )
}
