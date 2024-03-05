import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPeople] = useState({
  //   name: "john",
  //   age: 23,
  //   message: "Nice to meet you"
  // });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(32);
  const [message, setMessage] = useState("Nice to meet you")

  const changeMessage = () => {
    setMessage("Hello John")
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{message}</p>
      <button onClick={changeMessage} className='btn' type='button'>Change Message</button>
    </div>
  )
};

export default UseStateObject;
