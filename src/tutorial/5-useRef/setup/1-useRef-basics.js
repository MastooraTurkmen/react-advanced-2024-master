import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

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
