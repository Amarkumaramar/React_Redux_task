import React from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../store/store';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
    </div>
  );
};

export default ComponentB;
