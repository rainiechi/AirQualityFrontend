import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  // State to manage the checkbox values
  const [coChecked, setCOChecked] = useState(true);
  const [no2Checked, setNO2Checked] = useState(true);
  const [o3Checked, setO3Checked] = useState(true);
  const [pm10Checked, setPM10Checked] = useState(true);
  const [pm25Checked, setPM25Checked] = useState(true);
  const [so2Checked, setSO2Checked] = useState(true);

  const handleReportButtonClick = async () => {
    // JSON object with the checkbox values
    const checkboxValues = {
      co: coChecked,
      no2: no2Checked,
      o3: o3Checked,
      pm10: pm10Checked,
      pm25: pm25Checked,
      so2: so2Checked,
    };

    try {
      const response = await fetch('http://localhost:8080/specificReading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkboxValues),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigate('/Report', { state: { responseData } });
      } else {
        console.error('data fetch failed');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="Home">
      <Navbar />
      <div className="date">{formattedDate}</div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={coChecked} onChange={() => setCOChecked(!coChecked)} />
          CO
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={no2Checked} onChange={() => setNO2Checked(!no2Checked)} />
          NO2
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={o3Checked} onChange={() => setO3Checked(!o3Checked)} />
          O3
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={pm10Checked} onChange={() => setPM10Checked(!pm10Checked)} />
          PM10
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
          <input type="checkbox" checked={so2Checked} onChange={() => setSO2Checked(!so2Checked)} />
          SO2
        </label>
      </div>
      <button className="reportButton" onClick={handleReportButtonClick}>
        Generate Report
      </button>
    </div>
  );
}

export default Home;