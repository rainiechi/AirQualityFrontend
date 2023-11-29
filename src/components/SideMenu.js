import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

function SideMenu() {
  const tabs = ['Account', 'History', 'LogOut'];

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
        // Handle error if needed
        return;
      }

      // Redirect to login or another appropriate page after logout
      // You may use react-router's useHistory hook for this purpose

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