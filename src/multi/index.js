import React, { useState } from 'react';
import { randomNumber } from '../app/service';

const Multi = ({
  answers, setAnswers,
  // TODO: remouse reduuce to calc how maybe correct answers are in
  // the answers array
  // didn't do this because it would be to much for Valera
  // and he will be confused by too many changes at once
  correctAmount, setCorrectAmount,
}) => {
  const [multiAnswer, setMultiAnswer] = useState('');
  const [num1, setNum1] = useState(randomNumber(1, 10));
  const [num2, setNum2] = useState(randomNumber(1, 10));
  const [correct, setCorrect] = useState(false);

  const handleMultiInput = e => setMultiAnswer(e.currentTarget.value);

  const checkMultiAnswer = () => {
    // chck current answer
    const isCorrect = parseInt(multiAnswer) === num1 * num2;

    if (isCorrect) {
      setCorrect(true);
      setCorrectAmount(correctAmount + 1);
    }
    else {
      setCorrect(false);
    }

    // add current answer to the answers array
    setAnswers([
      ...answers,
      {
        num1: num1,
        num2: num2,
        answer: multiAnswer,
        correct: isCorrect,
      },
    ])
    
    // generate new problem
    setMultiAnswer('');
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setCorrect(false);
  };

  return <>
    Your current correct answers of multi exersises
    {correctAmount} of {answers.length}
    <br/>
    Multi : {num1} x {num2}
    <input
      onChange={handleMultiInput}
      type="number"
      value={multiAnswer}
    />
    <button onClick={checkMultiAnswer}>Check</button>
    <br/>
    {answers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}x{answr.num2}={answr.answer} ({
          answr.correct ? 'correct' : 'incorrect'
        })
      </div>
    ))}
  </>;
};

export default Multi;
