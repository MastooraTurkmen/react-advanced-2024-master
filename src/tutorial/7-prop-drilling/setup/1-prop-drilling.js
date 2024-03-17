import React, { useState } from 'react';
import data from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)


  const List = (peopleList) => {
    people.map(() => {
      const { name, id } = peopleList;
      return (
        <div className='item'>
          <h2>{name}</h2>
        </div>
      )
    })
  }


  return (
    <section>
      <h3>prop drilling</h3>
      <List peopleList={peopleList} />
    </section>
  )
};

export default PropDrilling;
