// @flow
import React from 'react';

const App = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  // const GiveAnswer = () => {
    // parseInt(prompt("Write your anwer"));
  // }

  return <div>
    {number1} x {number2}
    { /*<button>{GiveAnswer}</button> */ }
  </div>;
};

export default App;
