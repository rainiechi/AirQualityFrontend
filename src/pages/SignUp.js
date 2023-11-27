import React, {useState} from 'react';
import '../styles/Login_Signup.css';
import { Link } from 'react-router-dom';

function SignUp(props) {
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
        console.log(Email);

    }

  return (
    <div className='auth-form-container'>
    <form className="signup-form" onSubmit={handleSubmit}>
        <label> First Name</label>
        <input value={FName} name="First Name" id="First Name" placeholder="First Name" />
        <label> Last Name</label>
        <input value={LName} name="Last Name" id="Last Name" placeholder="Last Name" />
      <label htmlFor="Email">Email</label>
      <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="youremail@gmail.com"/>
      <label htmlFor="Password">Password</label>
      <input value={Pass} onChange={(e) => setPass(e.target.value)} Type="Password" placeholder="********" id="Password" name="Password"/>
      <button type="submit">Register</button>   
    </form>
    
     <p className="login-text">
        Already have an account? <Link to="/Login">Login here</Link>.
      </p>
    </div>
  )
}
export default SignUp;