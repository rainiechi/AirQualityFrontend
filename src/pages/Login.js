import React, {useState} from 'react';
import Logo from '../assets/logo.png';

function Login(props) {
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
        console.log(Email);

    }

  return (
    <div className='auth-form-container'> 
    <img src= {Logo} alt= "PooPooAir-Logo" className='Logo'/>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="Email">Email</label>
      <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"/>
      <label htmlFor="Password">Password</label>
      <input value={Pass} onChange={(e) => setPass(e.target.value)} Type="password" placeholder="********" id="Password" name="Password"/>
      <button type="submit">Log in</button>   
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('signup')}> Don't have an account? Sign up here</button>
    </div>
  )
}
export default Login;