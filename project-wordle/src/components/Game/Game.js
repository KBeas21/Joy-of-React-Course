import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import VKeyboard from '../VKeyboard/VKeyboard';
import { WinBanner, LoseBanner } from '../Banners'
import { NUM_OF_GUESSES_ALLOWED, gameStatuses } from '../../constants'

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(gameStatuses.RUNNING);
  // const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  function handleGuessInput(guess) {
    if (guesses.length + 1 <= NUM_OF_GUESSES_ALLOWED) {
      const newGuess = [...guesses, guess];

      setGuesses(newGuess);
      if (guess === answer) {
        setGameStatus(gameStatuses.WIN)
      } else if (guesses.length + 1  === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus(gameStatuses.LOST);
      }
    }
  }

  function resetGame() {
    window.location.reload();
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {gameStatus !== gameStatuses.RUNNING && (
        <button className={"reset-button"} onClick={resetGame}>Restart</button>
      )}
      <GuessInput inputCallBack={handleGuessInput} gameStatus={gameStatus} />

      <VKeyboard guesses={guesses} answer={answer} />

      {gameStatus === gameStatuses.WIN && (
        <WinBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === gameStatuses.LOST && (
        <LoseBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
