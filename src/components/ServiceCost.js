import React, { useEffect, useState } from 'react'
import Table1 from './Table1';
import axios from 'axios';

export default function ServiceCost({ name }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`/getMaintenance/${name}`).then((result) => {
      console.log(result);
      setData(result.data);
    }).catch((err) => {

    });
  }, [])
  return (
    <div>
      <h2>Service cost: {name}</h2>{<Table1 data={data} date={"date"} partsname={"partsname"} cost={"cost"} />}</div>
  )
}
