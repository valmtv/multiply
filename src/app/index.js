// @flow
import React, { useState } from 'react';

const App = () => {
  const [multiAnswer, setMultiAnswer] = useState('');
  const [plusAnswer, setPlusAnswer] = useState('');
  const [minusAnswer, setMinusAnswer] = useState('');
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [num3, setNum3] = useState(Math.floor(Math.random() * 1000));
  const [num4, setNum4] = useState(Math.floor(Math.random() * 1000));
  const [num5, setNum5] = useState(Math.floor(Math.random() * 1000));
  const [num6, setNum6] = useState(Math.floor(Math.random() * 1000));
  const [correct, setCorrect] = useState(false);
  const [multiAnswers, setMultiAnswers] = useState([]);
  const [plusAnswers, setPlusAnswers] = useState([]);
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [correctMultiAmount, setCorrectMultiAmount] = useState(0);
  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
//  const [dividerNum, setDividerNum] = useState(Math.floor(Math.random() * 10 + 2));

  const handleMultiInput = e => setMultiAnswer(e.currentTarget.value);
  const handlePlusInput = e => setPlusAnswer(e.currentTarget.value); 
  const handleMinusInput = e => setMinusAnswer(e.currentTarget.value);

//  if (dividerNum >= 10) {setDividerNum(Math.floor(Math.random() * 10 + 2))};

  const checkMultiAnswer = () => {

    // chck current answer
    const isCorrect = parseInt(multiAnswer) === num1 * num2;
    if (isCorrect) { setCorrect(true); setCorrectMultiAmount(correctMultiAmount + 1); }
    else { setCorrect(false); }

    // add current answer to the answers array
    setMultiAnswers([
      ...multiAnswers,
      { num1: num1, num2: num2, answer: multiAnswer, correct: isCorrect },
    ])
    
    // generate new problem
    setMultiAnswer('');
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setCorrect(false);
  };

  const checkPlusAnswer = () => {

    const isCorrect = parseInt(plusAnswer) === num3 + num4;
    if (isCorrect) { setCorrect(true); setCorrectPlusAmount(correctPlusAmount + 1); }
    else { setCorrect(false); }

    setPlusAnswers([
      ...plusAnswers,
      { num1: num3, num2: num4, answer: plusAnswer, correct: isCorrect },
    ])
    
    setPlusAnswer('');
    setNum3(Math.floor(Math.random() * 1000));
    setNum4(Math.floor(Math.random() * 1000));
    setCorrect(false);
  };
  

  const checkMinusAnswer = () => {

    const isCorrect = parseInt(minusAnswer) === num5 - num6;
    if (isCorrect) { setCorrect(true); setCorrectMinusAmount(correctMinusAmount + 1); }
    else { setCorrect(false); }

    setMinusAnswers([
      ...minusAnswers,
      { num1: num5, num2: num6, answer: minusAnswer, correct: isCorrect },
    ])
    
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
    setNum6(Math.floor(Math.random() * 1000));
  }


  return <div>
    <br/>You complited correct {correctMultiAmount + correctPlusAmount + correctMinusAmount}  of  {multiAnswers.length + plusAnswers.length + minusAnswers.length}
    <br/> <br/>
    Your current correct answers of multi exersises {correctMultiAmount} of {multiAnswers.length}
    <br/>
    Multi : {num1} x {num2}
    <input onChange={handleMultiInput} type="number" value={multiAnswer} />
    <button onClick={checkMultiAnswer}>Check</button>
    <br/>
    Your current correct answers of plus exersises {correctPlusAmount} of {plusAnswers.length}
    <br/>
    Plus : {num3} + {num4}
    <input onChange={handlePlusInput} type="number" value={plusAnswer} />
    <button onClick={checkPlusAnswer}>Check</button>
    <br/>
    Your current correct answers of minus exersises {correctMinusAmount} of {minusAnswers.length} 
    <br/>
    Minus : {num5} - {num6}
    <input onChange={handleMinusInput} type="number" value={minusAnswer} />
    <button onClick={checkMinusAnswer}>Check</button>
    <br/>
    _________________________________________________________
    {multiAnswers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}x{answr.num2}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}
    <br/>
    _________________________________________________________
    {plusAnswers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}+{answr.num2}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}
    <br/>
    _________________________________________________________
    {minusAnswers.map((answr, idx) => (
      <div key={idx}>
        {answr.num1}-{answr.num2}={answr.answer} ({answr.correct ? 'correct' : 'incorrect'})
      </div>
    ))}
  </div>;
};

export default App;
