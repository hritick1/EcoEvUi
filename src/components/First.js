import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function First({name,setName}) {
  
  const [total,setTotal]=useState({});
  const [month,setMonth]=useState({});
  useEffect(() => {
    console.log("Finding TotalData");
   axios.get(`/getTotalData/current`).then((result) => {
      console.log(result.data);
      setTotal(result.data);
   }).catch((err) => {
      
   });
  }, [])
    const navigate=useNavigate();
  const handleChange = (e) => {
    setName(e.target.value);
    setMonth(e.target.value) // Update the state with the value entered in the input field
  };
  const handleForm=(e)=>{
    e.preventDefault();
    toast.success("Named Added");
    navigate("/home")
    console.log(name);
}
const handleSubmit=async(e)=>{
e.preventDefault();
  console.log(`Finding Monthly TotalData ${month}`);
   axios.get(`/getTotalData/${month}`).then((result) => {
      console.log(result.data);
      setTotal(result.data);
})}
  return (
    <div className='.maincon'>
        <div className='box1'>
    <div>
    <h5>TotalPaid: {total.totalPaid}</h5>
          <h5>TotalNotPaid: {total.totalNotPaid}</h5>
          <h5>TotalServiceCost: {total.totalServiceCost}</h5>
          <h5>TotalProfit: {total.totalProfit}</h5>
    </div>
    <form onSubmit={(e)=>handleForm(e)} ><ToastContainer/>
    <div className="">
    <h4 className="">Enter Driver Name</h4>
    <select
  className="form-control"
  id="name"
  name="name"
  value={name} // Bind selected value to the 'name' state variable
  onChange={handleChange} // Call handleChange function when selection changes
>
<option value="select">Select-Name</option>
  <option value="Mohan">Nilu</option>
  <option value="Gathu">Gathu</option>
  <option value="Rohit">Rohit</option>
  <option value="Satyajit">Satyajit</option>
  <option value="Dulal">Dulal</option>
  <option value="Suraj">Suraj</option>
</select>
    </div> <button type="submit" className="btn btn-primary mt-2" style={{backgroundColor:"#4E6C50"}}>Submit</button>
  <button type="button" className="btn btn-primary ms-5 mt-2" onClick={()=>{setName("")}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
  </form>
  <form>
  <div style={{marginTop:"10px"}}>
  <h4 className="">Get Monthly Details</h4>
      <select
        className="form-control"
        id="month"
        name="month"
        value={month}
        onChange={handleChange}
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
      <button type="submit" className="btn btn-primary mt-2" style={{ backgroundColor: "#4E6C50" }} onClick={handleSubmit}>Submit</button>
      <button type="button" className="btn btn-primary ms-5 mt-2" onClick={()=>{setMonth("")}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
    </div></form>

</div>
</div>
  );
}
