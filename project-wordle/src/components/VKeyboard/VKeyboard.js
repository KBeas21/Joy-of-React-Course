import React from 'react';

import { checkGuess } from '../../game-helpers';
import { STATUS_CONFIG } from '../../constants'

function VKeyboard({ guesses, answer }) {
  /** { char: 'status' } */
  const [charStatusObj, setCharStatusObj] = React.useState({});
  
  const keyboard = {
    row1: ['Q','W','E','R','T','Y','U','I','O','P'],
    row2: ['A','S','D','F','G','H','J','K','L'],
    row3: ['Z','X','C','V','B','N','M']
  };
  const hasGuess = guesses.length > 0;

  if (hasGuess) {
    const currGuess = guesses[guesses.length - 1];
    const checkedGuess = checkGuess(currGuess, answer);

    checkedGuess.forEach(({ letter, status }) => {
      if (!charStatusObj[letter] || STATUS_CONFIG[status] > STATUS_CONFIG[charStatusObj[letter]]) {
        setCharStatusObj({
          ...charStatusObj,
          [letter]: status
        });
      }
    });
  }


  return (
    <div className="guess-results">
      {
        Object.entries(keyboard).map(([key, value]) => (
          <div key={`${key}-${value}`} className={`keyboard keyboard-${key}`}>
            {value.map((char, index2) => (
              <span
                key={index2}
                className={`cell ${charStatusObj[char]}`}
              >
                {char}
              </span>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default VKeyboard;