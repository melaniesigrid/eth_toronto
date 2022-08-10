import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            MEL'S META
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                See All Volunteer Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about/" className="nav-links" onClick={handleClick}>
                Upload Your Volunteering Organization
              </NavLink>
            </li>
            <li className="nav-item">
              <button onClick={handleClick} className="nav-links" onClick={handleClick}>
                Upload Your Volunteering Organization
              </button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
