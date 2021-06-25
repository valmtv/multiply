import React, { useState } from 'react';
import { randomNumber } from '../app/service';

const Subtract = ({
  answers, setAnswers,
  correctAmount, setCorrectAmount,
}) => {
  const [minusAnswer, setMinusAnswer] = useState('');
  const [num5, setNum5] = useState(randomNumber(10, 1000));
  const [num6, setNum6] = useState(randomNumber(10, 1000));
  const [correct, setCorrect] = useState(false);

  const handleMinusInput = e => setMinusAnswer(e.currentTarget.value);

  const checkMinusAnswer = () => {
    const isCorrect = parseInt(minusAnswer) === num5 - num6;
    if (isCorrect) {
      setCorrect(true);
      setCorrectAmount(correctAmount + 1);
    }
    else { setCorrect(false); }

    setAnswers([
      ...answers,
      {
        num1: num5,
        num2: num6,
        answer: minusAnswer,
        correct: isCorrect 
      },
    ]);
    
    setMinusAnswer('');
    setNum5(Math.floor(Math.random() * 1000));
    setNum6(Math.floor(Math.random() * 1000));
    setCorrect(false);
  };

  if (num5 < num6) {
    const lessNum = num5;
    const biggerNum = num6;
    setNum5(biggerNum);
    setNum6(lessNum);
  } 
  else if (num5 === num6) {
    setNum5(Math.floor(Math.random() * 1000));
  }

  return <> 
      <br/>
      Your current correct answers of minus exersises
      {correctAmount} of {answers.length} 
      <br/>
      Minus : {num5} - {num6}
      <input
        onChange={handleMinusInput} 
        type="number"
        value={minusAnswer}
      />
      <button onClick={checkMinusAnswer}>Check</button>
      <br/> 
      {answers.map((answr, idx) => (
        <div key={idx}>
          {answr.num1}-{answr.num2}={answr.answer}
          ({answr.correct ? 'correct' : 'incorrect'})
        </div>
      ))}
    </>
};

export default Subtract;