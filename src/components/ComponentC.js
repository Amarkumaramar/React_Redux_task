import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const inputValue = useSelector((state) => state.input.value);

  return (
    <div>
      <h2>Component C</h2>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default ComponentC;
