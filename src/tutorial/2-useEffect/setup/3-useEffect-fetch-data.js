import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const respons = await fetch(url);
    const data = respons.json();
    setUsers(data)
  }
  
  useEffect(() => {
    getUsers()
  })


  return <h2>fetch data</h2>;
};

export default UseEffectFetchData;
