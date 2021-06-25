// @flow
import React, { useState } from 'react';
import { randomNumber } from './service';
import Multi from '../multi';
import Sum from '../sum';
import Subtract from '../subtract';

const App = () => {
  const [multiAnswers, setMultiAnswers] = useState([]);
  const [plusAnswers, setPlusAnswers] = useState([]);
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [divideAnswers, setDivideAnswers] = useState([]);

  const [correctMultiAmount, setCorrectMultiAmount] = useState(0);
  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);


  const [divideAnswer, setDivideAnswer] = useState('');





  const [correctDivideAnswer, setCorrectDivideAnswer] = useState(randomNumber(3, 10));
  const [dividerNum, setDividerNum] = useState(randomNumber(3, 10));



  const handleDivideInput = e => setDivideAnswer(e.currentTarget.value);
  const [correct, setCorrect] = useState(false);




  const checkDivideAnswer = () => {
    const isCorrect = parseInt(divideAnswer) === correctDivideAnswer;
    if (isCorrect) { setCorrect(true); setCorrectDivideAmount(correctDivideAmount + 1) }
    else { setCorrect(false); }
  
    setDivideAnswers([
      ...divideAnswers,
      { dividend: correctDivideAnswer * dividerNum, divider: dividerNum, answer: divideAnswer, correct: isCorrect }
    ]);

    setDivideAnswer('');
    setCorrectDivideAnswer(Math.floor(Math.random() * 10 + 2));
    setDividerNum(Math.floor(Math.random() * 10 + 2));
    setCorrect(false);
  };

  return <div>
    <br/>You complited correct {
      correctMultiAmount + correctPlusAmount + correctMinusAmount + correctDivideAmount
    } of {
      multiAnswers.length + plusAnswers.length + minusAnswers.length + divideAnswers.length
    }

    <br/> <br/>

    <Multi
      answers={multiAnswers}
      setAnswers={setMultiAnswers}
      correctAmount={correctMultiAmount}
      setCorrectAmount={setCorrectMultiAmount}
    />

    <Sum
      answers={plusAnswers}
      setAnswers={setPlusAnswers}
      correctAmount={correctPlusAmount}
      setCorrectAmount={setCorrectPlusAmount}
    />
    
    <Subtract
      answers={minusAnswers}
      setAnswers={setMinusAnswers}
      correctAmount={correctMinusAmount}
      setCorrectAmount={setCorrectMinusAmount}
    />


    <br/>
    Your current correct answers of divide exersises {correctDivideAmount} of {divideAnswers.length} 
    <br/>
    Divide : {correctDivideAnswer * dividerNum} : {dividerNum}
    <input onChange={handleDivideInput} type="number" value={divideAnswer} />
    <button onClick={checkDivideAnswer}>Check</button>
    <br/>
    {divideAnswers.map((answr, idx) => (
      <div key={idx}>
        {answr.dividend}:{answr.divider}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}

  </div>;
};

export default App;
