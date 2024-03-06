import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h2>Short Circuit</h2>
      <button onClick={() => setIsError(isError)} className='btn' type='button'>
        Show me the Error
      </button>
      {isError ? <h1>there is an Error</h1> : <div>
        <h2>there isn't any error</h2>
      </div>}
    </>
  );
};

export default ShortCircuit;
