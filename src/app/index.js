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
  const [isMulti, setIsMulti] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [isMinus, setIsMinus] = useState(false);
  const [isDivide, setIsDivide] = useState(false);
  
  const OnAccordionClick = () => {
    setIsMulti(false); 
    setIsPlus(false); 
    setIsMinus(false); 
    setIsDivide(false);  
  };
  return <Main>
    <Div>
      <Multi 
        isMulti={isMulti}
        setIsMulti={setIsMulti}
        OnAccordionClick={OnAccordionClick}
      />
    </Div>
    <Div>
      <Sum 
        isPlus={isPlus}
        setIsPlus={setIsPlus}
        OnAccordionClick={OnAccordionClick}
      />
    </Div>
    <Div>
      <Subtract
        isMinus={isMinus}
        setIsMinus={setIsMinus}
        OnAccordionClick={OnAccordionClick}
      />
    </Div>
    <Div>
      <Divide
        isDivide={isDivide}
        setIsDivide={setIsDivide}
        OnAccordionClick={OnAccordionClick}
      />
    </Div>

  </Main>;
};

export default App;
