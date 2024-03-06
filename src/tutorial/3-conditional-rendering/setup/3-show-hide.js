import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const item = () => {
    return (
      <div className='section' style={{ marginTop: "2em" }}>Heyyyy</div>
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
