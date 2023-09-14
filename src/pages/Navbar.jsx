import React, { useState } from 'react';
import '../style/Navbar.css';
import logo from '../images/KMW-logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when a list item is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="body">
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="nav__logo" />
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
      <div className={`navbar-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
