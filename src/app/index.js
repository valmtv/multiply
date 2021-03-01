// @flow
import React, { useState, useEffect } from 'react';

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

  const [diffAnswer, setDiffAnswer] = useState('');
  const [diffNums, setDiffNums] = useState({
    n1: 0,
    n2: 0,
  });
  const genDiffNums = () => {
    const d1 = Math.floor(Math.random() * 100);
    const d2 = Math.floor(Math.random() * 100);

    setDiffNums({
      n1: d1 >= d2 ? d1 : d2,
      n2: d1 < d2 ? d1 : d2,
    });
  };
  useEffect(() => { genDiffNums(); }, []);

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
    const isCorrect = parseInt(sumAnswer) === addNums.n1 + addNums.n2;
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
    setSumAnswer('');
    setAddNums({
      n1: Math.floor(Math.random() * 100),
      n2: Math.floor(Math.random() * 100),
    })
    setCorrect(false);
  };

  const handleDiffInput = e => setDiffAnswer(e.currentTarget.value);
  const checkDiffAnswer = () => {
    // check current answer
    const isCorrect = parseInt(diffAnswer) === diffNums.n1 - diffNums.n2;
    if (isCorrect) { setCorrect(true); }
    else { setCorrect(false); }

    // add current answer to the answers array
    setAnswers([
      ...answers,
      {
        num1: diffNums.n1,
        num2: diffNums.n2,
        answer: diffAnswer,
        correct: isCorrect,
        operation: '-',
      },
    ])
    
    // generate new problem
    setDiffAnswer('');
    genDiffNums();
    setCorrect(false);
  };

  return <div style={{ padding: '20px' }}>
    {
      answers.reduce((total, curr) => !!curr.correct ? total + 1 : total, 0)
    } correct out of {answers.length}
    <br />
    __multiply - {answers.reduce(
      (total, curr) => curr.operation === '*' ? total + 1 : total, 0
    )}
    <br />
    __sum - {answers.reduce(
      (total, curr) => curr.operation === '+' ? total + 1 : total, 0
    )}
    <br />
    __diff - {answers.reduce(
      (total, curr) => curr.operation === '-' ? total + 1 : total, 0
    )}
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
    {diffNums.n1} - {diffNums.n2} =
    <input onChange={handleDiffInput} type="number" value={diffAnswer} />
    <button onClick={checkDiffAnswer}>Check</button>
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
