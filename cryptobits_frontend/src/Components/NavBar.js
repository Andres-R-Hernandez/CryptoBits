import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/xxx">Trade</NavLink></li>
        <li><NavLink exact to="/account">Account Details</NavLink></li>
        <li><NavLink exact to="/xxx">Logout</NavLink></li>
        <hr></hr>
      </ul>
    </div>
  );
};

export default NavBar;
