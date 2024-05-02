import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Due({name}) {
    const [due, setDue] =useState(0);
    useEffect(() => {
     axios.get(`https://eco-ev.onrender.com/getDue/${name}`).then((result) => {
        console.log(result);
        setDue(result.data);
     }).catch((err) => {
        
     });
    }, [])
    
  return (
    <div style={{alignItems:"center",justifyContent:"center"}}>
        <h2>{name}</h2>
        <h3>{due}</h3>
    </div>
  )
}
