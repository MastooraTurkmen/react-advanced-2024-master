import React, { useState } from 'react';
import { data } from '../../../data.js'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List removeItem={removeItem} people={people} />
    </section>
  )
};

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removeItem={removeItem} />
      })
      }
    </>
  )
}


const SinglePerson = ({ id, name, removeItem }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  )
}

export default PropDrilling;
