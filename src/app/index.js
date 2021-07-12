// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import { randomNumber } from './service';

import Multi from '../multi';
import Sum from '../sum';
import Subtract from '../subtract';
import Divide from '../divide';

const Main = styled.main`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 25% 20% 25%;
`;

const App = () => {
  const [multiAnswers, setMultiAnswers] = useState([]);
  const [plusAnswers, setPlusAnswers] = useState([]);
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [divideAnswers, setDivideAnswers] = useState([]);

  const [correctMultiAmount, setCorrectMultiAmount] = useState(0);
  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);
  return <Main>
    <div>
      You complited correct {
        correctMultiAmount + correctPlusAmount + correctMinusAmount + correctDivideAmount
      } of {
        multiAnswers.length + plusAnswers.length + minusAnswers.length + divideAnswers.length
      }
    </div>
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

  </Main>;
};

export default App;
