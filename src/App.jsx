import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  // Function to clear the input field
  const handleClear = () => {
    setInput('');
  };

  // Function to evaluate the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="input-field">
        <input type="text" value={input} disabled />
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
}

export default App;

