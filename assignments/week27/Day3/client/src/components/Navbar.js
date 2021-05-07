import React from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';  // to prevent reloading of page and to remove <a> tag

//replace <a> with Link and href with to
function Navbar(props) {
  //can use setTimeout() and button() to navigate
  return(
      
  <nav>
  <div className ="nav-wrapper" style={{background:'#6200ee'}}>
    <a href="#" className="brand-logo">Wish List</a>
    <ul id="nav-mobile" className="right ">
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
    </ul>
  </div>
</nav>
    )
}

export default withRouter(Navbar);
