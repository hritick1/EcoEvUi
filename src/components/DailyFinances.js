import React, { useEffect, useState } from 'react'
import Table2 from './Table2';
import axios from 'axios';

export default function DailyFinances({name}) {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:8080/get/${name}`).then((result) => {
        console.log(result);
        setData(result.data);
      }).catch((err) => {
        
      });
    }, [])
  return (
    <div><h2>DailyFinances</h2>
    <Table2 data={data}/></div>
  )
}
