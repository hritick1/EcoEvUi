
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
import tryfxn from './components/Axios';


function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await tryfxn();
            if (data !== null) {
                console.log('Data received:', data);
                // Display or process the data as needed
            } else {
                console.error('No server responded successfully.');
                // Handle case when no server responded successfully
            }
        } catch (error) {
            console.error('Error occurred:', error);
            // Handle other errors if needed
        }
    };

    fetchData(); // Call the function inside useEffect
}, [name,setName]); // Empty dependency array means this effect runs only once after initial render
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
