
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route,Routes, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import First from './components/First';
import { useState,useEffect } from 'react';
import Due from './components/Due';
import TotalData from './components/TotalData';
import ServiceCost from './components/ServiceCost';
import DailyFinances from './components/DailyFinances';


function App() {
  const [name, setName] = useState("");
  
  return (<div>
  <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<First name={name} setName={setName}/>}/>
      <Route exact path='/due' element={<Due name={name}/>}/>
      <Route exact path='/serviceCost' element={<ServiceCost name={name}/>}/>
      <Route exact path='/total' element={<TotalData name={name}/>}/>
      <Route exact path='/daily' element={<DailyFinances name={name}/>}/>
    <Route exact path="/home" element={ <Home name={name}/>}/>
    </Routes>
  </Router>
  </div>);
}

export default App;
