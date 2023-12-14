import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  // check answer for the specific guess
  const checkedGuess = checkGuess(guess, answer);

  return (
    <>
      <p className="guess">
      {
        guess.split('').map((char, index) => (
          <span key={index} className={`cell ${checkedGuess[index].status}`}>
            {char}
          </span>
        ))
      }
      </p>
    </>
  );
}

export default Guess;
