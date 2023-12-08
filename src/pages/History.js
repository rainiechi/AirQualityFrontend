import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import '../styles/History.css';

/**
 * The History page displays tthe user's past air quality reports retrieved from the server.
 */
function History() {
  const [historyData, setHistoryData] = useState([]);

   /**
   * Fetches current user's past reports from the server
   * Sets the retrieved data in the state variable `historyData`.
   */
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://localhost:8080/history', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch history data');
          return;
        }

        const historyJson = await response.json();
        console.log(historyJson);

        setHistoryData(historyJson);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="History">
      <Navbar />
      <SideMenu />
      <div className="content">
        <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Lat</th>
              <th>Lon</th>
              <th>Ozone</th>
              <th>PM2.5</th>
              <th>PM10</th>
              <th>CO</th>
              <th>SO2</th>
              <th>NO2</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.Date}</td>
                <td>{entry.Time}</td>
                <td>{entry.Lat}</td>
                <td>{entry.Lon}</td>
                <td>{entry.Ozone}</td>
                <td>{entry['PM2.5']}</td>
                <td>{entry.PM10}</td>
                <td>{entry.CO}</td>
                <td>{entry.SO2}</td>
                <td>{entry.NO2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;