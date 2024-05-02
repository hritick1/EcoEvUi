import React from 'react';
import './Table.css'; // Import CSS for table styling

const Table1 = ({ data }) => {
  return (
    <div className="table-responsive"> {/* Use Bootstrap class for responsive behavior */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>DailyPay</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.dailyPay}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
