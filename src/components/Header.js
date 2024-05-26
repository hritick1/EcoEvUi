import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { ToastContainer, toast } from 'react-toastify';
const Header = () => {
  return <div> <ToastContainer />
    <nav className="navbar navbar-dark navbar-expand-lg  " style={{ backgroundColor: "#820000" }}>
      <div className="container-fluid">
        <a className="navbar-brand" to="/"><Link className="nav-link" to="/">EcoEV</Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item fixed-right">
              <Link className="nav-link" to="/due" >Due</Link>
            </li>
            <li className="nav-item fixed-right">
              <Link className="nav-link" to="/daily" >DailyFinances</Link>
            </li>
            <li className="nav-item fixed-right">
              <Link className="nav-link" to="/serviceCost" >ServiceCost</Link>
            </li>
            <li className="nav-item fixed-right">
              <Link className="nav-link" to="/total" >TotalData</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav></div>;

};

export default Header;
