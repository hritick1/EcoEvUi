import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

export default function First({name,setName}) {

    const navigate=useNavigate();
  const handleChange = (e) => {
    setName(e.target.value); // Update the state with the value entered in the input field
  };
  const handleForm=(e)=>{
    e.preventDefault();
    toast.success("Named Added");
    navigate("/home")
    console.log(name);
}
  return (
    <div className='.maincon'>
        <div className='box1'>
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
  <option value="Mohan">Mohan</option>
  <option value="Gathu">Gathu</option>
  <option value="Rohit">Rohit</option>
  <option value="Satyajit">Satyajit</option>
  <option value="Dulal">Dulal</option>
  <option value="Suraj">Suraj</option>
</select>
    </div> <button type="submit" className="btn btn-primary mt-2" style={{backgroundColor:"#4E6C50"}}>Submit</button>
  <button type="button" className="btn btn-primary ms-5 mt-2" onClick={()=>{setName("")}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
</form>
</div>
</div>
  );
}
