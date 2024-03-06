import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const getSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getSize)
  }, [])

  const item = () => {
    return (
      <>
        <h3 style={{ marginTop: "2em" }}>Window Size</h3>
        <div className='section'>{size} px</div>
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
