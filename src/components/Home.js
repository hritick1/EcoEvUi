import React from 'react'
import { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "./Home.css";
import axios from 'axios';

export default function Home({name}) {
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(person);
        postData();
        setPerson({dailyPay:"",notPaid:"",maintenance:"",partsAdded:""});
    }
    const handleChange=(e)=>{
      const value=e.target.value;
      setPerson({...person,[e.target.name]:value});
    }
    const [person, setPerson] = useState({});
    const postData=()=>{
      axios.post(`http://localhost:8080/addDaily/${name}`,person).then((result) => {
        console.log(result);
        toast.success(result.data);
     }).catch((err) => {
        
     });
    }
  return <>
         <ToastContainer autoClose={10000}/>
        <div className="maincon">
        <div className="box1">
   

    <form onSubmit={(e)=>handleForm(e)}>
    <h4 className="">Add-Daily-Finances</h4>
  <div class="">
  <label for="desc" class="form-label">DailyPay:</label>
  <input type="number" className="form-control" id="desc" name="dailyPay"value={person.dailyPay}onChange={(e)=>handleChange(e)}></input>
</div>
<div class="">
  <label for="desc" class="form-label">DailyNotPaid:</label>
  <input type="number" className="form-control" id="desc" name="notPaid"value={person.notPaid}onChange={(e)=>handleChange(e)}></input>
</div>
<div class="">
  <label for="desc" class="form-label">Maintenance:</label>
  <input type="number" className="form-control" id="desc" name="maintenance"value={person.maintenance}onChange={(e)=>handleChange(e)}></input>
</div>

<div className="">
    <label for="title" className="form-label">Parts Added:</label>
    <input type="text" className="form-control" id="title"name="partsAdded" value={person.partsAdded} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
  </div>
  <button type="submit" className="btn btn-primary mt-2" style={{backgroundColor:"#4E6C50"}}>Submit</button>
  <button type="button" className="btn btn-primary ms-5 mt-2" onClick={()=>{ setPerson({dailyPay:"",notPaid:"",maintenance:"",partsAdded:""})}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
</form>
 
</div> </div>
    </>;
}
