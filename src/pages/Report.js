import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Report.css';

/**
 * The Report page displays a report based on the data received from the backend.
 */
function Report() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  const location = useLocation();
  // data will be passed from /Home
  const responseData = location.state && location.state.responseData;

  const renderReportContent = () => {
    if (!responseData) {
      return <p>No data available.</p>;
    }

    return (
      <div className="json-data">
        <h2>Report:</h2>
        {Object.entries(responseData).map(([property, value], index) => (
          <div key={index}>
            <span className="property">
              {property.toUpperCase() === 'PM25' ? 'PM2.5' : property.toUpperCase()}:
            </span>{' '}
            {value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Report">
      <Navbar />
      <div className="content">
        <div className="date">{formattedDate}</div>
        {renderReportContent()}
      </div>
    </div>
  );
}

export default Report;