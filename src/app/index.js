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



  const [divideAnswers, setDivideAnswers] = useState([]);




  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);
  return <Main>
    <Div>
      <Multi />
    </Div>
    <Div>
      <Sum />
    </Div>
    <Div>
    <Subtract />
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
