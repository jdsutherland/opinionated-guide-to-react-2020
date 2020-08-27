import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')

  return (
    <>
      <Link to="user/react-router">Go to the React Router user</Link>
      <form onSubmit={e => {
        e.preventDefault();
        navigate(`/user/${user}`);
      }}
      >
        <input
          placeholder='input a username'
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <button disabled={!user}>Go to that user</button>
      </form>
    </>
  )
};

export default Home;
