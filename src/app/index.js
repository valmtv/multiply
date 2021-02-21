// @flow
import React from 'react';

const App = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  const Input = document.getElementById("input");
  

  return <div>
    {number1} x {number2}
    <input id="input" type="number"></input>
  </div>;
};

export default App;
