import React from 'react'
import FCCJoke from './FCCJoke'

export default function FCCJokeApp() {
    const jokes = [
      {
        question: "a",
        punchline: "b",
      },
      {
        question: "c",
        punchline: "d",
      },
      {
        punchline: "f",
      }
    ];
    return (
      <div className="joke-list">
        { jokes.map((joke, i) =>
            <FCCJoke key={i} question={joke.question} punchline={joke.punchline} />
        )}
      </div>
    );
}
