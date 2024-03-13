import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const renderContainer = useRef(null);
  const divRenderContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(renderContainer.current.value)
  }

  useEffect(() => {
    renderContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input ref={renderContainer} type="text" />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divRenderContainer}>hello world</div>
    </>
  )
};

export default UseRefBasics;
