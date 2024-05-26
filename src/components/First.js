import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function First({ name, setName }) {

  const [total, setTotal] = useState({});
  const [month, setMonth] = useState({});
  const [year, setYear] = useState({});

  useEffect(() => {
    console.log("Finding TotalData");
    axios.get(`/getTotalData/current`).then((result) => {
      console.log(result.data);
      setTotal(result.data);
    }).catch((err) => {

    });
  }, [])

  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Named Added");
    navigate("/home")
    console.log(name);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(year);
    console.log(`Finding Monthly TotalData ${month}`);
    let monthName = month.toLowerCase() + year.substring(2);
    console.log(monthName);
    axios.get(`/getTotalData/${monthName}`).then((result) => {
      console.log(result.data);
      setTotal(result.data);
    })
  }

  return (
    <div className='.maincon'>
      <div className='box1'>
        <div className='monthlyTotalData'>
          <h1>Current Month Data</h1>
          <h5>TotalPaid: {total.totalPaid}</h5>
          <h5>TotalNotPaid: {total.totalNotPaid}</h5>
          <h5>TotalServiceCost: {total.totalServiceCost}</h5>
          <h5>TotalProfit: {total.totalProfit}</h5>
        </div >
        <div className='driverInfo'>
          <h1>Get Driver Details</h1>
          <form onSubmit={(e) => handleForm(e)} ><ToastContainer />
            <div>
              <select
                className="form-control"
                id="name"
                name="name"
                value={name} // Bind selected value to the 'name' state variable
                onChange={handleNameChange} // Call handleChange function when selection changes
              >
                <option value="select">Select Driver</option>
                <option value="Mohan">Nilu</option>
                <option value="Gathu">Gathu</option>
                <option value="Rohit">Rohit</option>
                <option value="Satyajit">Satyajit</option>
                <option value="Dulal">Dulal</option>
                <option value="Suraj">Suraj</option>
              </select>
            </div>
            <div className='buttonSection'>
              <button type="submit" className="btn btn-primary mt-2" style={{ backgroundColor: "#4E6C50" }}>Submit</button>
              <button type="button" className="btn btn-primary mt-2" onClick={() => { setName("") }} style={{ backgroundColor: "#4E6C50" }}>Clear</button>
            </div>
          </form>
        </div>
        <div className='driverInfo'>
          <h1>Get Monthly Detail</h1>
          <form>
            <div>
              <select
                className="form-control"
                id="month"
                name="month"
                value={month}
                onChange={handleMonthChange}
              >
                <option value="select">Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select
                className="form-control"
                id="year"
                name="year"
                value={year}
                onChange={handleYearChange}
              >
                <option value="select">Select Year</option>
                {[...Array(7)].map((_, i) => {
                  const year = 2024 + i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
            <div className='buttonSection'>
              <button type="submit" className="btn btn-primary mt-2" style={{ backgroundColor: "#4E6C50" }} onClick={handleSubmit}>Submit</button>
              <button type="button" className="btn btn-primary mt-2" onClick={() => { setMonth(""); setYear("") }} style={{ backgroundColor: "#4E6C50" }}>Clear</button>
            </div>
          </form>
        </div>
      </div>

    </div >
  );
}
