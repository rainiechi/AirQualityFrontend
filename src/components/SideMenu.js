import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';


/**
 * SideMenu component representing the side navigation menu of the application.
 * It includes links to the Account and History pages, as well as a LogOut link that triggers the logout process.
 */
function SideMenu() {
  const tabs = ['Account', 'History', 'LogOut'];

  // Function to handle the logout process
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Failed to log out');
        return;
      }
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="SideMenu">
      {tabs.map((tab, index) => (
        <Link to={tab === 'LogOut' ? '/' : `/${tab}`} key={index} onClick={tab === 'LogOut' ? handleLogout : null}>
          {tab}
        </Link>
      ))}
    </div>
  );
}

export default SideMenu;