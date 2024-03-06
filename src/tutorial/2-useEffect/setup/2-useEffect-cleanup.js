import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  function resizFunction() {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log("Use Effect Comingggggggggg............");
    window.addEventListener('resize', resizFunction);

    // return (() => {
    //   window.removeEventListener('resize', resizFunction);
    //   console.log("clean up")
    // })
  }, [])

  return (
    <div>
      <h1>Window Resize</h1>
      <h1>{size} PX</h1>
    </div>
  )
};

export default UseEffectCleanup;
