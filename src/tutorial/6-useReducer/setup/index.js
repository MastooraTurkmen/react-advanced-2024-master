import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => { }
const defaultState = {
  people: data,
  modalContent: 'hello',
  showModal: false
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSumbit = (e) => {
    e.preventDefault();

    if (name) {
      setName('')
    } else {
    }
  }

  return (
    <>
      {state.showModal && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((person) => {
        const { id, name } = person;
        return <h4 key={id}>{name}</h4>
      })}
    </>
  )
};

export default Index;
