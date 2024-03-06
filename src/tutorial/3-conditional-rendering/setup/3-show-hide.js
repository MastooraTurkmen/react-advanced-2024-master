import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const getSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getSize);
    return (() => {
      window.removeEventListener('resize', getSize)
    })
  }, [])

  const item = () => {
    return (
      <>
        <h2 style={{ marginTop: "1em" }}>Window Size</h2>
        <h3 className='section'>Size: {size} px</h3>
      </>
    )
  }

  return (
    <div>
      <button className='btn' type='button' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && item()}
    </div>
  )
};

export default ShowHide;
