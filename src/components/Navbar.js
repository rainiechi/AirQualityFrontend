import React from 'react'
import Logo from '../assets/logo.png';
import UserIcon from '../assets/usericon.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

/**
 * Navbar component representing the navigation bar at the top of the application.
 * Consists of a logo linking to the home page and a user icon linking to the account page.
 */
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/Home"><img src={Logo}/></Link>
      </div>
      <div className="rightSide">
        <Link to="/Account"><img src={UserIcon}/></Link>
      </div>
    </div>
  )
}

export default Navbar
