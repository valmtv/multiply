// @flow
import React, { useState } from 'react';

const App = () => {
  const [answer, setAnswer] = useState(0);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [correct, setCorrect] = useState(false);
  const [answers, setAnswers] = useState([
    // { num1: 12, num2: 45, answer: 34, correct: false },
  ]);

  const handleInput = e => setAnswer(e.currentTarget.value);

  const checkAnswer = () => {

    // chck current answer
    const isCorrect = parseInt(answer) === num1 * num2;
    if (isCorrect) { setCorrect(true); }
    else { setCorrect(false); }

    // add current answer to the answers array
    setAnswers([
      ...answers,
      { num1: num1, num2: num2, answer: answer, correct: isCorrect },
    ])
    
    // generate new problem
    setAnswer(0);
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setCorrect(false);
  };

  return <div>
    {num1} x {num2}
    <input onChange={handleInput} type="number" value={answer} />
    <button onClick={checkAnswer}>Check</button>
    {answers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}x{answr.num2}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}
  </div>;
};

export default App;
