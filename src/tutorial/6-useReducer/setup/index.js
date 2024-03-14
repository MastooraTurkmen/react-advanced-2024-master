import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal />}
    </>
  )
};

export default Index;
