import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  // State to manage the checkbox values
  const [ozoneChecked, setOzoneChecked] = useState(true);
  const [pm25Checked, setPM25Checked] = useState(true);
  const [pm10Checked, setPM10Checked] = useState(true);

  // Function to handle the button click event
  const handleReportButtonClick = () => {
    // Perform actions when the "Report" button is clicked
    // For now, just log the selected checkboxes to the console
    console.log('Ozone Checked:', ozoneChecked);
    console.log('PM2.5 Checked:', pm25Checked);
    console.log('PM10 Checked:', pm10Checked);
  };

  return (
    <div className="Home">
      <div className="date">
        {formattedDate}
      </div>
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
      <button className="reportButton" onClick={handleReportButtonClick}>Generate Report</button>
    </div>
  );
}

export default Home;