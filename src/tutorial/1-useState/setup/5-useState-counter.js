import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increaseCount = () => {
    setTimeout(() => {
      setValue((prevCount) => { return prevCount + 1 })
    }, 2000)
  }

  return (
    <div>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value - 1)} type='button'>decrease</button>
      <button className='btn' onClick={() => setValue(0)} type='button'>reset</button>
      <button className='btn' onClick={() => setValue(value + 1)} type='button'>increase</button>
      <h2 style={{ margin: "1.5em" }}>More Complex Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={increaseCount} type='button'>increase</button>
    </div>
  )
};

export default UseStateCounter;
