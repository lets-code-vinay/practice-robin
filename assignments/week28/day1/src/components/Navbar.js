import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Navbar(){
    return(
  <nav>
    <div className="nav-wrapper" style={{background:"#6600ee"}}>
      <a href="#" className="brand-logo">Wish List</a>
      <ul id="nav-mobile" className="right ">
        <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar;