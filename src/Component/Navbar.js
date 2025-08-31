// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '.././Mainlogo.png';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <header className="row align-items-center py-3">
        <div className="col-12 col-md-6 d-flex align-items-center">
        <Link to='/'> <img
            src={logo}
            alt="Site Logo"
            width={200}
            height={150}
            className="logo"
          /></Link> 
        </div>

        <nav className="col-12 col-md-6">
          <ul className="nav justify-content-md-end justify-content-center gap-3 text-dark">
            <li className="nav-item">
             <NavLink to="/" className="nav-link text-dark fw-bold">
                Home
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/Allservice" className="nav-link text-dark fw-bold">
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/about" className="nav-link text-dark fw-bold">
                About
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-dark fw-bold">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;