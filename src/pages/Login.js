import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import '../styles/Login_Signup.css';
import { Link } from 'react-router-dom';

function Login(props) {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginInfo = {
      email: Email,
      password: Pass,
    };

    // Convert to JSON
    const jsonData = JSON.stringify(loginInfo);

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      if (!response.ok) {
      
        console.error('Error:', response.status, response.statusText);
        return;
      }

      const responseData = await response.json();
      // Handle the response data
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='auth-form-container'> 
      <img src={Logo} alt="PooPooAir-Logo" className='Logo'/>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"/>
        <label htmlFor="Password">Password</label>
        <input value={Pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="Password" name="Password"/>
        <button type="submit">Log in</button>   
      </form>

      <p className="signup-text">
        Don't have an account? <Link to="/SignUp">Sign up here</Link>.
      </p>
    </div>
  );
}

export default Login;