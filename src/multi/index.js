import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { randomNumber } from '../app/service';

const Input = styled.input`
  width: 75px;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction : row;
  justify-content : space-between;
`;

const Multi = ({
  answers, setAnswers,
  // TODO: remouse reduuce to calc how maybe correct answers are in
  // the answers array
  // didn't do this because it would be to much for Valera
  // and he will be confused by too many changes at once
  correctAmount, setCorrectAmount,
}) => {
  const [internalAnswers, setInternalAnswers] = useState(answers);
  useEffect(() => {
    setInternalAnswers(answers);
  }, [answers]);


  const [minMulti, setMinMulti] = useState(1);
  const [maxMulti, setMaxMulti] = useState(10);
  const [multiAnswer, setMultiAnswer] = useState('');
  const [num1, setNum1] = useState(randomNumber(minMulti, maxMulti));
  const [num2, setNum2] = useState(randomNumber(minMulti, maxMulti));
  const [correct, setCorrect] = useState(false);

  const handleMultiInput = e => setMultiAnswer(e.currentTarget.value);

  const checkMultiAnswer = () => {
    // chck current answer
    const isCorrect = parseInt(multiAnswer) === num1 * num2;

    if (isCorrect) {
      setCorrect(true);
    }
    else {
      setCorrect(false);
    }

    // add current answer to the internalAnswers array
    const res = [
      ...internalAnswers,
      {
        num1: num1,
        num2: num2,
        answer: multiAnswer,
        correct: isCorrect,
      },
    ];
    setAnswers(res);

    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectAmount(res.reduce(correctCounter, 0));
 
    // generate new problem
    setMultiAnswer('');
    setNum1(randomNumber(1, 10));
    setNum2(randomNumber(1, 10));
    setCorrect(false);
  };

  return <Div1>
    <div>
      Multi :
      <br/>
      Correct__ {correctAmount} / {internalAnswers.length}
      <br/>
      Example : {num1} x {num2}
      <div>
        <Input
          onChange={handleMultiInput}
          type="number"
          value={multiAnswer}
        />
        <button onClick={checkMultiAnswer}>Check</button>
      </div>
    </div>
    <div>
      Multi numbers range is from {minMulti} to {maxMulti}
      {internalAnswers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}x{answr.num2}={answr.answer} ({
          answr.correct ? 'correct' : 'incorrect'
        })
      </div>
      ))}
    </div>
  </Div1>
};

export default Multi;
