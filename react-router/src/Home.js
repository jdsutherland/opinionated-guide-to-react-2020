import React, { useState } from 'react';
import { Link, useNavigate, Outlet, NavLink } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')

  return (
    <>
      <NavLink activeStyle={{ color: 'white' }} to="/">
        Go Home
      </NavLink>
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
      <Outlet />
    </>
  )
};

export default Home;
