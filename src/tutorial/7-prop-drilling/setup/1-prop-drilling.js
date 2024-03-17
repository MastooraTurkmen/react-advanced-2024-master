import React, { useContext, useState } from 'react';
import { data } from '../../../data.js'

// more components
// fix - context api, redux (for more complex cases)

const ContextPerson = React.createContext()

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    });
  };

  return (
    <ContextPerson.Provider value={{ removeItem, people }}>
      <h3>prop drilling</h3>
      <List />
    </ContextPerson.Provider>
  )
};

const List = () => {
  const mainData = useContext(ContextPerson)

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })
      }
    </>
  )
}


const SinglePerson = ({ id, name }) => {
  const { removeItem } = useContext(ContextPerson)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  )
}

export default PropDrilling;
