import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Report.css'; // Import the Report component's CSS file

function Report() {
  const location = useLocation();
  const { ozoneChecked, pm25Checked, pm10Checked } = location.state || {};
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  // get JSON from backend to display information
    


  return (
    <div className="Report">
      <Navbar />
      <div className="content">
      <div className="date">{formattedDate}</div>
        {ozoneChecked && <p>Ozone information goes here</p>}
        {pm25Checked && <p>PM2.5 information goes here</p>}
        {pm10Checked && <p>PM10 information goes here</p>}
      </div>
    </div>
  );
}

export default Report;