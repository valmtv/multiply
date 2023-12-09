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
  font-size: 1.2rem;
`;

const MinusButton = styled.div`
  cursor: pointer;
  border-radius: 30px;
  background-color: green;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 30px;
`;

const Subtract = ({ isMinus, setIsMinus, OnAccordionClick }) => {
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
  const [minMinus] = useState(10);
  const [maxMinus] = useState(1000);
  const [minusAnswer, setMinusAnswer] = useState('');
  const [num5, setNum5] = useState(randomNumber(minMinus, maxMinus));
  const [num6, setNum6] = useState(randomNumber(minMinus, maxMinus));
  const [correct, setCorrect] = useState(false);

  const handleMinusInput = e => setMinusAnswer(e.currentTarget.value);
  const isMinusChange = () => { 
    OnAccordionClick();
    setIsMinus(!isMinus);
  }

  const checkMinusAnswer = () => {
    const isCorrect = parseInt(minusAnswer) === num5 - num6;
    if (isCorrect) {
      setCorrect(true);
      setCorrectMinusAmount(correctMinusAmount + 1);
    }
    else { setCorrect(false); }

    const res = [
      ...minusAnswers,
      {
        num1: num5,
        num2: num6,
        answer: minusAnswer,
        correct: isCorrect 
      },
    ];
    setMinusAnswers(res);

    
    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectMinusAmount(res.reduce(correctCounter, 0));

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

  if (isMinus) {
    return <>
      <MinusButton onClick={isMinusChange}>Minus</MinusButton> 
      <Div1> 
        <div>
          Minus : 
          <br/>
          Correct__ {correctMinusAmount} / {minusAnswers.length} 
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
          {minusAnswers.map((answr, idx) => (
            <div key={idx}>
              {answr.num1}-{answr.num2}={answr.answer} ({
                answr.correct ? 'correct' : 'incorrect'
              })
            </div>
          ))}
        </div>
      </Div1>
    </>
  }
  else if (isMinus === false) {  
    return <MinusButton onClick={isMinusChange}>Minus</MinusButton> 
  };
};

export default Subtract;
