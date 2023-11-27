import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  // State to manage the checkbox values
  const [ozoneChecked, setOzoneChecked] = useState(true);
  const [pm25Checked, setPM25Checked] = useState(true);
  const [pm10Checked, setPM10Checked] = useState(true);

  

  const handleReportButtonClick = async () => {
    // JSON object with the checkbox values
    const checkboxValues = {
      ozoneChecked,
      pm25Checked,
      pm10Checked,
    };
    const jsonData = JSON.stringify(checkboxValues)
   //send to back end

   
    console.log(jsonData)
    // go to /Report
    navigate('/Report', {
      state: {
        ozoneChecked,
        pm25Checked,
        pm10Checked,
      },
    });
  }

  return (
    <div className="Home">
      <Navbar />
      <div className="date">{formattedDate}</div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={ozoneChecked} onChange={() => setOzoneChecked(!ozoneChecked)} />
          Ozone
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={pm25Checked} onChange={() => setPM25Checked(!pm25Checked)} />
          PM2.5
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={pm10Checked} onChange={() => setPM10Checked(!pm10Checked)} />
          PM10
        </label>
      </div>
      <button className="reportButton" onClick={handleReportButtonClick}>
        Generate Report
      </button>
    </div>
  );
}

export default Home;