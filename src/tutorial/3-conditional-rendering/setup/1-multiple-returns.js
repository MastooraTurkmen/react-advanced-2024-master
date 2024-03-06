import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default User");

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false);
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then(data => {
        const { login } = data;
        setUser(login)
        setIsLoading(false)
      }).catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return <div>
      <h1>Loading....</h1>
    </div>
  }

  if (isError) {
    return <div>
      <h1>Error....</h1>
    </div>
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
