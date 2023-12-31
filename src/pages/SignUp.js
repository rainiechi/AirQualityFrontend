import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login_Signup.css';

function SignUp() {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [Lat, setLat] = useState('');
  const [Lon, setLon] = useState('');
  const [Cell, setCell] = useState('');
  const [DOB, setDOB] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FName || !LName || !Email || !Cell || !Pass || !Lat || !Lon || !DOB) {
      alert('Please fill out all fields');
      return;
    }

    if (!/^\d{10}$/.test(Cell)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (
      !/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(Lat) ||
      !/^[-+]?(180(\.0+)?|((1[0-7]\d)|(\d{1,2}))(\.\d+)?)$/.test(Lon)
    ) {
      alert('Please enter valid latitude and longitude');
      return;
    }

  

    const userData = {
      fname: FName,
      lname: LName,
      email: Email,
      password: Pass,
      phone: Cell,
      lat: Lat,
      lon: Lon,
      DOB: DOB.toString(),
    };

    console.log(userData);

    const jsonData = JSON.stringify(userData);

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      if (response.status === 201) {
        console.log('Signup successful');
        navigate('/Login');
      } else if (response.status === 400) {
        console.error('User already exists');
        alert('This email is already in use.');
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="auth-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="FirstName">* First Name</label>
        <input
          value={FName}
          onChange={(e) => setFName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <label htmlFor="LastName">* Last Name</label>
        <input
          value={LName}
          onChange={(e) => setLName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <label htmlFor="Email">* Email</label>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter an email"
        />
        <label htmlFor="Cellphone">* Cellphone</label>
        <input
          value={Cell}
          onChange={(e) => setCell(e.target.value)}
          type="text"
          placeholder="Enter cellphone number"
        />
        <label htmlFor="Password">* Password</label>
        <input
          value={Pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter a password"
          id="Password"
          name="Password"
        />
        <label htmlFor="DateOfBirth">* Date of Birth</label>
        <input
          type="date"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
          max="2018-01-01" // Set the maximum date
        />
        <label htmlFor="Latitude">* Latitude</label>
        <input
          value={Lat}
          onChange={(e) => setLat(e.target.value)}
          type="text"
          placeholder="Enter latitude"
        />
        <label htmlFor="Longitude">* Longitude</label>
        <input
          value={Lon}
          onChange={(e) => setLon(e.target.value)}
          type="text"
          placeholder="Enter longitude"
        />
        <button type="submit">Register</button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/Login">Login here</Link>.
      </p>
    </div>
  );
}

export default SignUp;