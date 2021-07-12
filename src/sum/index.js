import React, { useState, useEffect } from 'react';
import { randomNumber } from '../app/service';

const Sum = ({
  answers, setAnswers,
  correctAmount, setCorrectAmount,
}) => { 
  const [internalAnswers, setInternalAnswers] = useState(answers);
  useEffect(() => {
    setInternalAnswers(answers);
  }, [answers]);

  const [plusAnswer, setPlusAnswer] = useState('');
  const [num3, setNum3] = useState(randomNumber(10, 1000));
  const [num4, setNum4] = useState(randomNumber(10, 1000));
  const [correct, setCorrect] = useState(false);

  const handlePlusInput = e => setPlusAnswer(e.currentTarget.value); 

  const checkPlusAnswer = () => {
    const isCorrect = parseInt(plusAnswer) === num3 + num4;
    if (isCorrect) {
      setCorrect(true);
      setCorrectAmount(correctAmount + 1);
    }
    else { setCorrect(false); }

    const res = [
      ...internalAnswers,
      {
        num1: num3,
        num2: num4,
        answer: plusAnswer,
        correct: isCorrect
      },
    ];
    setAnswers(res); 

    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectAmount(res.reduce(correctCounter, 0));

    setPlusAnswer('');
    setNum3(randomNumber(10, 1000));
    setNum4(randomNumber(10, 1000));
    setCorrect(false);
  };

  return <>
    
    <br/>
    Your current correct answers of plus exersises
    {correctAmount} of {answers.length}
    <br/> 
    Plus : {num3} + {num4}
    <input 
      onChange={handlePlusInput}
      type="number"
      value={plusAnswer}
    />
    <button onClick={checkPlusAnswer}>Check</button>
    <br/>
    {answers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}+{answr.num2}={answr.answer} ({
        answr.correct ? 'correct' : 'incorrect'
        })
      </div>
    ))}
  </>
};

export default Sum;
