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

const Divide = ({
  answers, setAnswers,
  correctAmount, setCorrectAmount
}) => {
  const [internalAnswers, setInternalAnswers] = useState(answers);
  useEffect(() => {
    setInternalAnswers(answers);
  }, [answers]);
  const [minDivide, setMinDivide] = useState(3);
  const [maxDivide, setMaxDivide] = useState(10);
  const [divideAnswer, setDivideAnswer] = useState('');
  const [correctDivideAnswer, setCorrectDivideAnswer] = useState(randomNumber(minDivide, maxDivide));
  const [dividerNum, setDividerNum] = useState(randomNumber(minDivide, maxDivide));
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
    setCorrectDivideAnswer(randomNumber(minDivide, maxDivide));
    setDividerNum(randomNumber(minDivide, maxDivide));
    setCorrect(false);
  };

  return <Div1> 
    <div>
      Divide :
      <br/>
      Correct__ {correctAmount} / {answers.length} 
      <br/>
      Example : {correctDivideAnswer * dividerNum} : {dividerNum}
      <div>
        <Input 
          onChange={handleDivideInput}
          type="number"
          value={divideAnswer} 
        />
        <button onClick={checkDivideAnswer}>Check</button>
      </div>
    </div>
    <div>
      Divide numbers range is from {minDivide} to {maxDivide}
      {answers.map((answr, idx) => (
        <div key={idx}>
          {answr.dividend}:{answr.divider}={answr.answer} ({
            answr.correct ? 'correct' : 'incorrect'
          })
        </div>
      ))}
    </div>
  </Div1>;
};

export default Divide;
