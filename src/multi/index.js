import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { randomNumber } from '../app/service';

const Input = styled.input`
  width: 75px;
  background-color: transparent;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction : row;
  justify-content : space-between;
  font-size: 1.2rem;
`;

const MultiButton = styled.div`
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

const Multi = ({
  isMulti, setIsMulti, OnAccordionClick 
  // TODO: remouse reduuce to calc how maybe correct answers are in
  // the answers array
  // didn't do this because it would be to much for Valera
  // and he will be confused by too many changes at once
}) => {

  const [multiAnswers , setMultiAnswers] = useState([]);
  const [correctMultiAmount, setCorrectMultiAmount] = useState(0);
  const [minMulti, setMinMulti] = useState(1);
  const [maxMulti, setMaxMulti] = useState(10);
  const [multiAnswer, setMultiAnswer] = useState('');
  const [num1, setNum1] = useState(randomNumber(minMulti, maxMulti));
  const [num2, setNum2] = useState(randomNumber(minMulti, maxMulti));
  const [correct, setCorrect] = useState(false);

  const handleMultiInput = e => setMultiAnswer(e.currentTarget.value);
 
    const isMultiChange = () => { 
      OnAccordionClick();
      setIsMulti(!isMulti);
    }; 

  const checkMultiAnswer = () => {
    // chck current answer

    const isCorrect = parseInt(multiAnswer) === num1 * num2;

    if (isCorrect) {
      setCorrect(true);
    }
    else {
      setCorrect(false);
    }
    // add current answer to the multiAnswers array


  const res = [
      ...multiAnswers,
      {
        num1: num1,
        num2: num2,
        answer: multiAnswer,
        correct: isCorrect,
      },
    ];

    setMultiAnswers( res );

    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectMultiAmount(res.reduce(correctCounter, 0));

    console.log(
      '-----',
      multiAnswers,
      JSON.stringify(multiAnswers),
    );
 
/*    sessionStorage.setItem(
      history,
      JSON.stringify(multiAnswers),
    );
    console.log("eweqwe",sessionStorage.getItem(history))
    */    
/*    let hist = JSON.parse(sessionStorage.getItem(history));
    console.log(hist);
    if (hist === undefined) {
      console.log("history is clear")
    }
    else {
      console.log("787");
      console.log("rqrqr111111", hist);
      setMultiAnswers(hist);
    }; */
    console.log(multiAnswers);


    setMultiAnswer('');
    setNum1(randomNumber(minMulti, maxMulti));
    setNum2(randomNumber(minMulti, maxMulti));
    setCorrect(false);

  };

  if (isMulti) {
    return <>
      <MultiButton onClick={isMultiChange}>Multi</MultiButton>
      <Div1>
        <div>
          Multi :
          <br/>
          Correct__ {correctMultiAmount} / {multiAnswers.length}
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
          {multiAnswers.map((answr, idx) => (
            <div key={idx}>
            {answr.num1}x{answr.num2}={answr.answer} ({
              answr.correct ? 'correct' : 'incorrect'
            })
            </div>
          ))}
        </div>
      </Div1>
    </>
  }
  else if (isMulti === false)  {
    return <MultiButton onClick={isMultiChange}>Multi</MultiButton>
  };
  useEffect( () => {
    setMultiAnswers(res);
  },
    res,
  );
  useEffect( () => {
    sessionStorage.setItem(history, JSON.stringify(multiAnswers),)
  });
};

export default Multi;
