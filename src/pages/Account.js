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
      <div className="content">
        <form>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Cellphone:
            <input type="tel" value={cellphone} onChange={(e) => setCellphone(e.target.value)} />
          </label>
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Account;