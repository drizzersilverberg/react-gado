import React from 'react'
import NextGenJSApp from './NextGenJSApp';
import Person from './Person/Person';
import ClassBasedApp from './ClassBasedApp';

export default function UdemyReactReduxApp(props) {

    const multiply = (number) => number * 2;
 
    return (
        <div>
            <div className="person">
                <h1>
                    <p>
                        Name: {props.name} , Age: {multiply(props.age)}
                    </p>
                </h1>
            </div>

            <div className="nextgenapp">
                <NextGenJSApp />
            </div>

            <div className="persons">
                <Person name="Thirteena" age="13"/>
                <Person name="Sixteena" age="16">My Hobbies: Racing</Person>
                <Person name="Nineteena" age="19"/>
            </div>

            <ClassBasedApp />
        </div>
    )
}
