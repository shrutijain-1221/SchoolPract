import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import schoolLogo from './images/schoollogo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false); // Close the menu when clicking close (X) icon or a nav link
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={schoolLogo} alt="School Logo" />
        <span className="school-name">My School</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active" onClick={handleCloseMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={handleCloseMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={handleCloseMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admission" activeClassName="active" onClick={handleCloseMenu}>
              Admission Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
