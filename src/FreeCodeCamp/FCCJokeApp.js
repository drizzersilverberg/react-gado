import React from 'react'
import FCCJoke from './FCCJoke'

export default function FCCJokeApp() {
    return (
      <div className="joke-list">
        { [1,2,3,4].map((el, i) =>
            <FCCJoke key={i} question="a" punchline="b" />
        )}
      </div>
    );
}
