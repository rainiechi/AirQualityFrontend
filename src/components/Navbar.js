import React from 'react'
import Logo from '../assets/logo.png';
import UserIcon from '../assets/usericon.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

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
