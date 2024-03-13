import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type="text" />
          <button type='button'>submit</button>
        </div>
      </form>
    </>
  )
};

export default UseRefBasics;
