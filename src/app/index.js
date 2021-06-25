// @flow
import React, { useState } from 'react';
import { randomNumber } from './service';
import Multi from '../multi';
import Sum from '../sum';

const App = () => {
  const [multiAnswers, setMultiAnswers] = useState([]);
  const [plusAnswers, setPlusAnswers] = useState([]);
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [divideAnswers, setDivideAnswers] = useState([]);

  const [correctMultiAmount, setCorrectMultiAmount] = useState(0);
  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);

  const [minusAnswer, setMinusAnswer] = useState('');
  const [divideAnswer, setDivideAnswer] = useState('');



  const [num5, setNum5] = useState(randomNumber(10, 1000));
  const [num6, setNum6] = useState(randomNumber(10, 1000));

  const [correctDivideAnswer, setCorrectDivideAnswer] = useState(randomNumber(3, 10));
  const [dividerNum, setDividerNum] = useState(randomNumber(3, 10));


  const handleMinusInput = e => setMinusAnswer(e.currentTarget.value);
  const handleDivideInput = e => setDivideAnswer(e.currentTarget.value);
  const [correct, setCorrect] = useState(false);


  const checkMinusAnswer = () => {
    const isCorrect = parseInt(minusAnswer) === num5 - num6;
    if (isCorrect) { setCorrect(true); setCorrectMinusAmount(correctMinusAmount + 1); }
    else { setCorrect(false); }

    setMinusAnswers([
      ...minusAnswers,
      { num1: num5, num2: num6, answer: minusAnswer, correct: isCorrect },
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
    <br/>You complited correct {correctMultiAmount + correctPlusAmount + correctMinusAmount + correctDivideAmount}  of  {multiAnswers.length + plusAnswers.length + minusAnswers.length + divideAnswers.length}
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

    <br/>
    Your current correct answers of minus exersises {correctMinusAmount} of {minusAnswers.length} 
    <br/>
    Minus : {num5} - {num6}
    <input onChange={handleMinusInput} type="number" value={minusAnswer} />
    <button onClick={checkMinusAnswer}>Check</button>
    <br/> 
    {minusAnswers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}-{answr.num2}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}

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
