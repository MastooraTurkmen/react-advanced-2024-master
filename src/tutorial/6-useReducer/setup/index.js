import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);

  const handleSumbit = (e) => {
    e.preventDefault();

    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }])
      setName('')
    } else {
      setShowModal(true)
    }
  }

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSumbit} className='form'>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return <h4 key={id}>{name}</h4>
      })}
    </>
  )
};

export default Index;
