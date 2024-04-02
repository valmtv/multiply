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
  font-size: 2.6rem;
`;

const PlusButton = styled.div`
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

const Sum = ({ isPlus, setIsPlus, OnAccordionClick }) => { 
  const [plusAnswers, setPlusAnswers] = useState([]);
  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [minSum, setMinSum] = useState(10);
  const [maxSum, setMaxSum] = useState(1000);
  const [plusAnswer, setPlusAnswer] = useState('');
  const [num3, setNum3] = useState(randomNumber(minSum, maxSum));
  const [num4, setNum4] = useState(randomNumber(minSum, maxSum));
  const [correct, setCorrect] = useState(false);

  const handlePlusInput = e => setPlusAnswer(e.currentTarget.value); 
  const isPlusChange = () => {
    OnAccordionClick();
    setIsPlus(!isPlus);
  };

  const checkPlusAnswer = () => {
    const isCorrect = parseInt(plusAnswer) === num3 + num4;
    if (isCorrect) {
      setCorrect(true);
      setCorrectPlusAmount(correctPlusAmount + 1);
    }
    else { setCorrect(false); }

    const res = [
      ...plusAnswers,
      {
        num1: num3,
        num2: num4,
        answer: plusAnswer,
        correct: isCorrect
      },
    ];
    setPlusAnswers(res); 

    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectPlusAmount(res.reduce(correctCounter, 0));

    setPlusAnswer('');
    setNum3(randomNumber(minSum, maxSum));
    setNum4(randomNumber(minSum, maxSum));
    setCorrect(false);
  };

  if (isPlus) {
    return <>
      <Div1>
        <div>
          Plus : 
          <br/>
          Correct__ {correctPlusAmount} / {plusAnswers.length}
          <br/> 
          Example : {num3} + {num4}
          <div>
            <Input 
              onChange={handlePlusInput}
              type="number"
              value={plusAnswer}
            />
            <button onClick={checkPlusAnswer}>Check</button>
          </div>
        </div>
        <div>
          Sum History
          {plusAnswers.map((answr, idx) => (
            <div key={idx}>
              {answr.num1}+{answr.num2}={answr.answer} ({
                answr.correct ? 'correct' : 'incorrect'
                })
            </div>
          ))}
        </div>
      </Div1>
    </>
  }
  else {
    return <PlusButton onClick={isPlusChange}>Plus</PlusButton>
  };
};

export default Sum;
