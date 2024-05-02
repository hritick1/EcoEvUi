import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TotalData({name}) {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:8080/getTotal/${name}`).then((result) => {
        console.log(result);
        setData(result.data);
      }).catch((err) => {
        
      });
    }, [])
    
  return (
    <div>
        <h2>Total-Data</h2>
        <h3>Name: {data.name}</h3>
        <h3>Date: {data.date}</h3>
        <h3>TotalDue: {data.totalDue}</h3>
        <h3>TotalNotPaid: {data.totalNotPaid}</h3>
        <h3>TotalIncome: {data.totalIncome}</h3>
        <h3>TotalServiceCost: {data.totalServiceCost}</h3>
    </div>
  )
}
