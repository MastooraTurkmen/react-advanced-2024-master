import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default User")

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
