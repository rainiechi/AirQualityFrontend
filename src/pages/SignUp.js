import React, {useState} from 'react';
import '../styles/Login_Signup.css';
import { Link } from 'react-router-dom';

function SignUp(props) {
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [Location, setLocation] = useState('');
    const [Lat, setLat] = useState('');
    const [Lon, setLon] = useState('');
    const [Cell, setCell] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        firstName: FName,
        lastName: LName,
        email: Email,
        cellphone: Cell,
        password: Pass,
        latitude: Lat,
        longitude: Lon,
        location: Location,
      };
  
      const jsonData = JSON.stringify(userData);
      //send to back end



      console.log(jsonData);
    }

  return (
    <div className='auth-form-container'>
    <form className="signup-form" onSubmit={handleSubmit}>
    <label htmlFor="First Name">* First Name</label>
      <input value={FName} onChange={(e) => setFName(e.target.value)} type="Fname" placeholder="First Name"/>
      <label htmlFor="Last Name">* Last Name</label>
      <input value={LName} onChange={(e) => setLName(e.target.value)} type="Lname" placeholder="Last Name"/>
      <label htmlFor="Email">* Email</label>
      <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="Enter an email"/>
      <label htmlFor="Cellphone">Cellphone (Optional)</label>
      <input value={Cell} onChange={(e) => setCell(e.target.value)} type="Cell" placeholder="Enter cellphone number"/>
      <label htmlFor="Password">* Password</label>
      <input value={Pass} onChange={(e) => setPass(e.target.value)} Type="Password" placeholder="Enter a password" id="Password" name="Password"/>
      <label htmlFor="Latitude">* Latitude</label>
      <input value={Lat} onChange={(e) => setLat(e.target.value)} type="Lat" placeholder="Enter latitude"/>
      <label htmlFor="Longitude">* Longitude</label>
      <input value={Lon} onChange={(e) => setLon(e.target.value)} type="Lon" placeholder="Enter longitude"/>
      <label htmlFor="Location">* Location</label>
      <input value={Location} onChange={(e) => setLocation(e.target.value)} type="Location" placeholder="City, State"/>
      <button type="submit">Register</button>   
    </form>
    
     <p className="login-text">
        Already have an account? <Link to="/Login">Login here</Link>.
      </p>
    </div>
  )
}
export default SignUp;