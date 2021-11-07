import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { randomNumber } from '../app/service';

const Input = styled.input`
  width: 75px;
`;

const Div1 = styled.div`
  display:  flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Subtract = ({
  answers, setAnswers,
  correctAmount, setCorrectAmount,
}) => {
  const [internalAnswers, setInternalAnswers] = useState(answers);
  useEffect(() => {
    setInternalAnswers(answers);
  }, [answers]);

  const [minMinus] = useState(10);
  const [maxMinus] = useState(1000);
  const [minusAnswer, setMinusAnswer] = useState('');
  const [num5, setNum5] = useState(randomNumber(minMinus, maxMinus));
  const [num6, setNum6] = useState(randomNumber(minMinus, maxMinus));
  const [correct, setCorrect] = useState(false);

  const handleMinusInput = e => setMinusAnswer(e.currentTarget.value);

  const checkMinusAnswer = () => {
    const isCorrect = parseInt(minusAnswer) === num5 - num6;
    if (isCorrect) {
      setCorrect(true);
      setCorrectAmount(correctAmount + 1);
    }
    else { setCorrect(false); }

    const res = [
      ...internalAnswers,
      {
        num1: num5,
        num2: num6,
        answer: minusAnswer,
        correct: isCorrect 
      },
    ];
    setAnswers(res);

    
    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectAmount(res.reduce(correctCounter, 0));

    setMinusAnswer('');
    setNum5(randomNumber(minMinus, maxMinus));
    setNum6(randomNumber(minMinus, maxMinus));
    setCorrect(false);
  };

  if (num5 < num6) {
    const lessNum = num5;
    const biggerNum = num6;
    setNum5(biggerNum);
    setNum6(lessNum);
  } 
  else if (num5 === num6) {
    setNum5(randomNumber(minMinus, maxMinus));
  }

  return <Div1> 
    <div>
      Minus : 
      <br/>
      Correct__ {correctAmount} / {answers.length} 
      <br/>
      Example : {num5} - {num6}
      <div>
        <Input
          onChange={handleMinusInput} 
          type="number"
          value={minusAnswer}
        />
        <button onClick={checkMinusAnswer}>Check</button>
      </div> 
    </div>
    <div>
      Plus numbers range is from {minMinus} to {maxMinus}
      {answers.map((answr, idx) => (
        <div key={idx}>
          {answr.num1}-{answr.num2}={answr.answer} ({
            answr.correct ? 'correct' : 'incorrect'
          })
        </div>
      ))}
    </div>
  </Div1>
};

export default Subtract;
