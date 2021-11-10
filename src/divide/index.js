import { randomNumber } from '../app/service';

const Input = styled.input`
  width: 75px;
`;

const Div1 = styled.div`
  display:  flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Divide = ({}) => {

  const [divideAnswers, setDivideAnswers] = useState([]);
  const [correctDivideAmount, setCorrectDivideAmount] = useState(0);
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
      setCorrectDivideAmount(correctDivideAmount + 1) 
    }
    else { setCorrect(false); }
  
    const res = [
      ...DivideAnswers,
      {
        dividend: correctDivideAnswer * dividerNum,
        divider: dividerNum,
        answer: divideAnswer,
        correct: isCorrect
      }
    ];
    setDivideAnswers(res);

    const correctCounter = (total, answer) => {  
      if (answer.correct) { return total + 1; }
      else { return total; }
    };
    setCorrectDivideAmount(res.reduce(correctCounter, 0));

    setDivideAnswer('');
    setCorrectDivideAnswer(randomNumber(minDivide, maxDivide));
    setDividerNum(randomNumber(minDivide, maxDivide));
    setCorrect(false);
  };

  return <Div1> 
    <div>
      Divide :
      <br/>
      Correct__ {correctDivideAmount} / {divideAnswers.length} 
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
      {divideAnswers.map((answr, idx) => (
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
