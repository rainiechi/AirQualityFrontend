import React from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import '../styles/History.css';

function History() {

    //mock data
  const historyData = [
    { date: '2023-01-01', location: 'City A', ozone: 10, pm25: 5, pm10: 15 },
    { date: '2023-02-01', location: 'City B', ozone: 15, pm25: 8, pm10: 20 },
  ];

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
              <th>Location</th>
              <th>Ozone</th>
              <th>PM2.5</th>
              <th>PM10</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.location}</td>
                <td>{entry.ozone}</td>
                <td>{entry.pm25}</td>
                <td>{entry.pm10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;