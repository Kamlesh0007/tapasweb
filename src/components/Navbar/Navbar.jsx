import React from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-link"><a href="aboutus">About</a></li>
        <li className="navbar-link"><a href="events">Events</a></li>
        <li className="navbar-link"><a href="team">Team</a></li>
        <li className="navbar-link"><a href="contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
