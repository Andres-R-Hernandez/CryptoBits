import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/xxx">xxx</NavLink></li>
        <li><NavLink exact to="/yyy">yyy</NavLink></li>
        <li><NavLink exact to="/xxx">xxx</NavLink></li>
        <hr></hr>
      </ul>
    </div>
  );
};

export default NavBar;
