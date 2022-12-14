import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { RiDivideLine } from 'react-icons/ri';
import { FaEquals } from 'react-icons/fa';

const Home = () => {
  const [calcuation, setCalculation] = useState('');

  const operators = ['/', '+', '-', '.', '*'];

  // creating numbers
  const createNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button
          key={i}
          onClick={() => updateCalculation(i.toString())}
          className='number'
        >
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

  // delete all
  const deleteAll = () => {
    setCalculation('');
  };

  return (
    <div className='calculator'>
      <div className='result'>
        <span>{calcuation ? calcuation : '0'}</span>
      </div>
      <div className='functions'>
        <button className='function' onClick={() => updateCalculation('-')}>
          <AiOutlineMinus />
        </button>
        <button className='function' onClick={() => updateCalculation('+')}>
          <AiOutlinePlus />
        </button>
        <button className='function' onClick={() => updateCalculation('/')}>
          <RiDivideLine />
        </button>
        <button
          className='divide function'
          onClick={() => updateCalculation('*')}
        >
          <AiOutlinePlus />
        </button>
        <button className='special' onClick={deleteAll}>
          C
        </button>
        <button className='special' onClick={deleteFunc}>
          DEL
        </button>
      </div>

      <div className='numbers'>
        {createNumbers()}
        <button className='number' onClick={() => updateCalculation('0')}>
          0
        </button>
        <button className='number' onClick={() => updateCalculation('.')}>
          .
        </button>
        <button className='number-equal' onClick={calculate}>
          <FaEquals />
        </button>
      </div>
    </div>
  );
};

export default Home;
