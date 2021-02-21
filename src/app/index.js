// @flow
import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);

  const handleInput = e => setValue(e.currentTarget.value);

  const checkAnswer = () => {
    console.log('checking', value);
  };

  return <div>
    {number1} x {number2}
    <input onChange={handleInput} type="number" />
    <button onClick={checkAnswer}>Check</button>
  </div>;
};

export default App;
