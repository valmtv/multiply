import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components';
import { randomNumber } from '../app/service';

const Divide = ({
  answers, setAnswers,
  correctAmount, setCorrectAmount
}) => {
  const [internalAnswers, setInternalAnswers] = useState(answers);
  useEffect(() => {
    setInternalAnswers(answers);
  }, [answers]);

  const [divideAnswer, setDivideAnswer] = useState('');
  const [correctDivideAnswer, setCorrectDivideAnswer] = useState(randomNumber(3, 10));
  const [dividerNum, setDividerNum] = useState(randomNumber(3, 10));
  const [correct, setCorrect] = useState(false);
  const handleDivideInput = e => setDivideAnswer(e.currentTarget.value);

  const checkDivideAnswer = () => {
    const isCorrect = parseInt(divideAnswer) === correctDivideAnswer;
    if (isCorrect) { 
      setCorrect(true);
      setCorrectAmount(correctAmount + 1) 
    }
    else { setCorrect(false); }
  
    const res = [
      ...internalAnswers,
      {
        dividend: correctDivideAnswer * dividerNum,
        divider: dividerNum,
        answer: divideAnswer,
        correct: isCorrect
      }
    ];
    setAnswers(res);

    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectAmount(res.reduce(correctCounter, 0));

    setDivideAnswer('');
    setCorrectDivideAnswer(randomNumber(3, 10));
    setDividerNum(randomNumber(3, 10));
    setCorrect(false);
  };

  return <> 
    Divide :
    <br/>
    Correct__ {correctAmount} / {answers.length} 
    <br/>
    Example : {correctDivideAnswer * dividerNum} : {dividerNum}
    <div>
      <input 
        onChange={handleDivideInput}
        type="number"
        value={divideAnswer} 
      />
      <button onClick={checkDivideAnswer}>Check</button>
    </div>
    {answers.map((answr, idx) => (
      <div key={idx}>
        {answr.dividend}:{answr.divider}={answr.answer} ({
          answr.correct ? 'correct' : 'incorrect'
        })
      </div>
    ))}
  </>;
};

export default Divide;
