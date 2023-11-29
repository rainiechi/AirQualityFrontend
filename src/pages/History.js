import React from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import '../styles/History.css';

function History() {

    //mock data for testing
  const historyData = [
    { date: '2023-01-01', lat: 123, lon:123, ozone: 10, pm25: 5, pm10: 15, co:2, so2:2, no2:3 },
    { date: '2023-01-01', lat: 123, lon:123, ozone: 10, pm25: 5, pm10: 15, co:2, so2:2, no2:3 },
  ];

  //takes actual JSON from backend


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
                <td>{entry.date}</td>
                <td>{entry.lat}</td>
                <td>{entry.lon}</td>
                <td>{entry.ozone}</td>
                <td>{entry.pm25}</td>
                <td>{entry.pm10}</td>
                <td>{entry.co}</td>
                <td>{entry.so2}</td>
                <td>{entry.no2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;