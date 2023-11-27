import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

function SideMenu() {
  const tabs = ['Account', 'History', 'LogOut'];

  return (
    <div className="SideMenu">
      {tabs.map((tab, index) => (
        <Link to={`/${tab}`} key={index}>
          {tab}
        </Link>
      ))}
    </div>
  );
}

export default SideMenu;