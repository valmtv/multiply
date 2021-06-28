// @flow
import React, { useState } from 'react';
import { randomNumber } from './service';
import Multi from '../multi';
import Sum from '../sum';
import Subtract from '../subtract';
import Divide from '../divide';

const App = () => {
  const [multiAnswers, setMultiAnswers] = useState([]);
  const [plusAnswers, setPlusAnswers] = useState([]);
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [divideAnswers, setDivideAnswers] = useState([]);

  const [correctMultiAmount, setCorrectMultiAmount] = useState(0);
  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);
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

    <Divide
      answers={divideAnswers}
      setAnswers={setDivideAnswers}
      correctAmount={correctDivideAmount}
      setCorrectAmount={setCorrectDivideAmount}
    />

  </div>;
};

export default App;
