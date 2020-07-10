import React from 'react'

function Greet(){
    const styles = { color: "red", backgroundColor: "yellow" };
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay

    if (hours < 12) {
        timeOfDay = 'Morning';
        styles.color = 'green'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        styles.color = 'white'
    } else {
        timeOfDay = 'Night';
        styles.color = 'cyan'
    }


    return (
        <h1 style={styles}>Good {timeOfDay}</h1>
    )
}

export default Greet
