import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import '../styles/Account.css';

/**
 * The Account page displays and updates user account information.
 * It includes form fields for first name, last name, email, password, cellphone, latitude, and longitude.
 */
function Account() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

   /**
   * Handles the Save button click event.
   * Performs validation checks and sends a PUT request to update user information.
   */
    const handleSave = async () => {
        // Validation checks
        if (!firstName || !lastName || !password || !cellphone || !latitude || !longitude) {
          alert('Please fill out all fields');
          return;
        }
      
        if (!/^\d{10}$/.test(cellphone)) {
          alert('Please enter a valid 10-digit phone number');
          return;
        }
      
        if (
          !/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(latitude) ||
          !/^[-+]?(180(\.0+)?|((1[0-7]\d)|(\d{1,2}))(\.\d+)?)$/.test(longitude)
        ) {
          alert('Please enter valid latitude and longitude');
          return;
        }
      
        const userData = {
          fname: firstName,
          lname: lastName,
          email: email,
          password: password,
          phone: cellphone,
          lat: latitude,
          lon: longitude,
        };
      
        const jsonData = JSON.stringify(userData);
      
        try {
          const response = await fetch('http://localhost:8080/updateUser', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: jsonData,
          });
      
          if (response.ok) {
            console.log('User updated successfully');
            alert("Update Success!");
          } else {
            console.error('Error:', response.status, response.statusText);
            alert("Update failed");
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    // Fetch the current user's data 
    useEffect(() => {

    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/currentUser');
        if (!response.ok) {
          console.error('Failed to fetch current user data');
          return;
        }
        const userData = await response.json();
        console.log(userData);
        setFirstName(userData.Fname);
        setLastName(userData.Lname);
        setEmail(userData.email);
        setPassword(userData.password); 
        setCellphone(userData.cellphone);
        setLatitude(userData.LAT);
        setLongitude(userData.LON);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCurrentUser();
  }, []);

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
            readOnly  
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
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default Account;