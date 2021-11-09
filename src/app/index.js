// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import { randomNumber } from './service';

import Multi from '../multi';
import Sum from '../sum';
import Subtract from '../subtract';
import Divide from '../divide';

const Div = styled.div`
  padding: 10px; 
`;

const Main = styled.main`
  background-color: #e6eaed;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%; 
`;

const App = () => {

  const [plusAnswers, setPlusAnswers] = useState([]);
  const [minusAnswers, setMinusAnswers] = useState([]);
  const [divideAnswers, setDivideAnswers] = useState([]);


  const [correctPlusAmount, setCorrectPlusAmount] = useState(0);
  const [correctMinusAmount, setCorrectMinusAmount] = useState(0);
  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);
  return <Main>
    <Div>
      <Multi/>
    </Div>
    <Div>
    <Sum
      answers={plusAnswers}
      setAnswers={setPlusAnswers}
      correctAmount={correctPlusAmount}
      setCorrectAmount={setCorrectPlusAmount}
    />
    </Div>
    <Div>
    <Subtract
      answers={minusAnswers}
      setAnswers={setMinusAnswers}
      correctAmount={correctMinusAmount}
      setCorrectAmount={setCorrectMinusAmount}
    />
    </Div>
    <Div>
    <Divide
      answers={divideAnswers}
      setAnswers={setDivideAnswers}
      correctAmount={correctDivideAmount}
      setCorrectAmount={setCorrectDivideAmount}
    />
    </Div>

  </Main>;
};

export default App;
