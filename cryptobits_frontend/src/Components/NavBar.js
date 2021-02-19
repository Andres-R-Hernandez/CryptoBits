import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar' >
      <span>
        <img src={'https://i.imgur.com/bp7miXR.png'} style={{width:"150px", align:"right"}} alt='CryptoBits Logo'></img>
      </span>

      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
          <NavLink exact to="/">Home</NavLink>
      </span>
      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
        <NavLink exact to="/trade">Trade</NavLink>
      </span>
      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
        <NavLink exact to="/account">Account Details</NavLink>
      </span>
      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
        <NavLink exact to="/xxx">Logout</NavLink>
      </span>

      <hr></hr>
    </div>
  );
};

export default NavBar;