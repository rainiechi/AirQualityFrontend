import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo from '../assets/logo.png';
import '../styles/Login_Signup.css';
import { Link } from 'react-router-dom';

/**
 * The Login page represents the login form for users to authenticate.
 * It includes input fields for email and password, and a button to submit the login information.
 * If authentication is successful, the user is redirected to the "Home" page.
 * If authentication fails, an alert is displayed, and an error is logged.
 */
function Login() {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginInfo = {
      email: Email,
      password: Pass,
    };

    const jsonData = JSON.stringify(loginInfo);

   /**
   * Handles the form submission by sending a POST request to the backend for authentication.
   * If successful, redirects the user to the "Home" page; otherwise, displays an alert.
   */
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData, 
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigate('/Home');
      } else {
        alert('Invalid credentials. Please check your email and password.');
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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