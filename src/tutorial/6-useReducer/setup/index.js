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
      </form>
    </>
  )
};

export default Index;
