import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value - 1)} type='button'>decrease</button>
      <button className='btn' onClick={() => setValue(0)} type='button'>reset</button>
      <button className='btn' onClick={() => setValue(value + 1)} type='button'>increase</button>
    </div>
  )
};

export default UseStateCounter;
