import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `Hello World ${value}`;
    console.log("I am second Use Effect")
  })

  return (
    <section>
      <h1>{value}</h1>
      <button type='button' className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </section>
  )
};

export default UseEffectBasics;
