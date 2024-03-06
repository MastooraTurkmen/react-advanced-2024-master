import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const respons = await fetch(url);
    const users = await respons.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers()
  }, []);

  return <>
      <h3>GitHub Users</h3>
      <ul className='users'>{
        users.map((user) => {
          const { id, avatar_url, html_url, login } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })
      }
      </ul>
  </>;
};

export default UseEffectFetchData;
