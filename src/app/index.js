// @flow
import React from 'react';

const App = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);

  const handleInput = e => {
    const userInput = e.currentTarget.value;
    console.log('========', userInput);
  };

  return <div>
    {number1} x {number2}
    <input type="number" onChange={handleInput} />
  </div>;
};

export default App;
