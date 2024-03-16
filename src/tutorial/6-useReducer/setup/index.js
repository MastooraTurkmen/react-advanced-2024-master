import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]

    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "item added"
    }
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      modalContent: "Please add item"
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      modalContent: "Item removed",
      showModal: false
    }
  }

}

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
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: "ADD_ITEM", payload: newItem })
    } else {
      dispatch({ type: 'NO_VALUE' })
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
