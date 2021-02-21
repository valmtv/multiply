// @flow
import React, { useState } from 'react';

const App = () => {
  const [answer, setAnswer] = useState(0);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [correct, setCorrect] = useState(false);

  const handleInput = e => setAnswer(e.currentTarget.value);

  const checkAnswer = () => {
    const Answer = num1 * num2;
    if (parseInt(answer) === Answer) { setCorrect(true); }
    else { setCorrect(false); }
  };

  return <div>
    {num1} x {num2}
    <input onChange={handleInput} type="number" />
    <button onClick={checkAnswer}>Check</button>
    {correct ? 'correct' : 'incorrect'}
  </div>;
};

export default App;
