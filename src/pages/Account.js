import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import '../styles/Account.css';

function Account() {
  const [firstName, setFirstName] = useState('Remington');
  const [lastName, setLastName] = useState('Riley');
  const [email, setEmail] = useState('rem@rem.org');
  const [password, setPassword] = useState('********');
  const [cellphone, setCellphone] = useState('123-456-7890');
  const [location, setLocation] = useState('City, Country');

  const handleSave = () => {
    console.log('Changes saved');
  };
  return (
    <div className="Account">
      <Navbar />
      <SideMenu />
<form className="account-form">
  <div className="form-group">
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="lastName">Last Name:</label>
    <input
      type="text"
      id="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="cellphone">Cellphone:</label>
    <input
      type="tel"
      id="cellphone"
      value={cellphone}
      onChange={(e) => setCellphone(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="location">Location:</label>
    <input
      type="text"
      id="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
  </div>
  
  <button type="button" onClick={handleSave}>Save</button>
</form>
    </div>
  );
}

export default Account;