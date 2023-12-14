import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({ guesses, answer }) {

  function getEmptyGuesses() {
    const arr=[]
    for (let i=0; i < NUM_OF_GUESSES_ALLOWED - guesses.length; i++) {
      arr.push(<p key={i} className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>)
    }
    return arr;
  }

  return (
    <div className="guess-results">
      {guesses.length > 0 && (
        guesses.map((guess, index) => (
          // we are not add/removing the values here so the index key is fine
          <Guess key={index} guess={guess} answer={answer} />
        )))
      }
      {
        getEmptyGuesses()
      }
    </div>
  );
}

export default GuessResults;
