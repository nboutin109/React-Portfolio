import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function NavTabs() {
    const location = useLocation();

  return (
    <ul className="nav nav-tabs" style={{backgroundColor:'white'}}>
      <li className = "nav-item" style={{paddingRight:'1rem'}}><h3 >Nicholas Boutin
      </h3></li>
      <li className="nav-item">
        <Link to="/Nicholas-Boutin-Coding-Portfolio/about" className={location.pathname === "/Nicholas-Boutin-Coding-Portfolio/about" ? "nav-link active" : "nav-link"}>
          About me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Nicholas-Boutin-Coding-Portfolio/portfolio"
          className={location.pathname === "/Nicholas-Boutin-Coding-Portfolio/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Nicholas-Boutin-Coding-Portfolio/contact"
          className={location.pathname === "/Nicholas-Boutin-Coding-Portfolio/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
