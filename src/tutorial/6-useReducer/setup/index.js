import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);

  return (
    <>
      {showModal && <Modal />}
      <form className='form'></form>
    </>
  )
};

export default Index;
