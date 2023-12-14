import React from 'react';
import { gameStatuses } from '../../constants'

function GuessInput({ inputCallBack, gameStatus }) {
  const [inputTxt, setInputTxt] = React.useState('');

  function handleSumbit(event) {
    event.preventDefault();
    console.log(`inputTxt value, ${inputTxt}`);

    inputCallBack(inputTxt);

    setInputTxt('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleSumbit(event)
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== gameStatuses.RUNNING}
        required={true}
        value={inputTxt}
        onChange={(event) => setInputTxt(event.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
