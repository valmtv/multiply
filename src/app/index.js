// @flow
import React, { useState } from 'react';

const App = () => {
  const [answer, setAnswer] = useState('');
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [correct, setCorrect] = useState(false);
  const [answers, setAnswers] = useState([]);

  const [sumAnswer, setSumAnswer] = useState('');
  const [addNums, setAddNums] = useState({
    n1: Math.floor(Math.random() * 100),
    n2: Math.floor(Math.random() * 100),
  });

  const handleInput = e => setAnswer(e.currentTarget.value);
  const checkAnswer = () => {
    // check current answer
    const isCorrect = parseInt(answer) === num1 * num2;
    if (isCorrect) { setCorrect(true); }
    else { setCorrect(false); }

    // add current answer to the answers array
    setAnswers([
      ...answers,
      {
        num1: num1,
        num2: num2,
        answer: answer,
        correct: isCorrect,
        operation: '*',
      },
    ])
    
    // generate new problem
    setAnswer('');
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setCorrect(false);
  };

  const handleSumInput = e => setSumAnswer(e.currentTarget.value);
  const checkSummAnswer = () => {
    // check current answer
    const isCorrect = parseInt(answer) === addNums.n1 + addNums.n2;
    if (isCorrect) { setCorrect(true); }
    else { setCorrect(false); }

    // add current answer to the answers array
    setAnswers([
      ...answers,
      {
        num1: addNums.n1,
        num2: addNums.n2,
        answer: sumAnswer,
        correct: isCorrect,
        operation: '+',
      },
    ])
    
    // generate new problem
    setAnswer('');
    setAddNums({
      n1: Math.floor(Math.random() * 100),
      n2: Math.floor(Math.random() * 100),
    })
    setCorrect(false);
  };

  return <div style={{ padding: '20px' }}>
    {
      answers.reduce((total, curr) => curr.correct ? total + 1 : 0, 0)
    } correct out of {answers.length}
    <br/>
    <br/>
    {num1} x {num2} =
    <input onChange={handleInput} type="number" value={answer} />
    <button onClick={checkAnswer}>Check</button>
    <br/>
    <br/>
    {addNums.n1} + {addNums.n2} =
    <input onChange={handleSumInput} type="number" value={sumAnswer} />
    <button onClick={checkSummAnswer}>Check</button>
    <br/>
    <br/>
    {answers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}{
          answr.operation
        }{answr.num2}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}
  </div>;
};

export default App;
