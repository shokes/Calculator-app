import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { RiDivideLine } from 'react-icons/ri';

const Home = () => {
  const [calcuation, setCalculation] = useState('');

  const operators = ['/', '+', '-', '.', '*'];

  const createNumbers = () => {
    // creating numbers
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button key={i} onClick={() => updateCalculation(i.toString())}>
          {i}
        </button>
      );
    }

    return numbers;
  };

  const updateCalculation = (value) => {
    if (
      (operators.includes(value) && calcuation === '') ||
      (operators.includes(value) && operators.includes(calcuation.slice(-1)))
    ) {
      return;
    }
    setCalculation(calcuation + value);
  };

  // calculate the result
  const calculate = () => {
    setCalculation(eval(calcuation).toString());
  };

  // delete last number
  const deleteFunc = () => {
    if (calcuation === '') {
      return;
    }

    const value = calcuation.slice(0, -1);
    setCalculation(value);
  };

  // delete all function
  const deleteAll = () => {
    setCalculation('');
  };

  return (
    <div className='calculator'>
      <div className='result'>
        <span>{calcuation ? calcuation : '0'}</span>
      </div>
      <div className='functions'>
        <button onClick={() => updateCalculation('-')}>
          <AiOutlineMinus />
        </button>
        <button onClick={() => updateCalculation('+')}>
          <AiOutlinePlus />
        </button>
        <button onClick={() => updateCalculation('/')}>
          <RiDivideLine />
        </button>
        <button className='divide' onClick={() => updateCalculation('*')}>
          <AiOutlinePlus />
        </button>
        <button onClick={deleteAll}>C</button>
        <button onClick={deleteFunc}>DEL</button>
      </div>

      <div className='numbers'>
        {createNumbers()}
        <button onClick={() => updateCalculation('0')}>0</button>
        <button onClick={() => updateCalculation('.')}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Home;
