import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const ComponentA = () => {
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;
