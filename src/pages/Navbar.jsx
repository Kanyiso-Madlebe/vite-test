import React, { useState } from 'react';
import '../style/Navbar.css';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const navToggle = () => {
    setActive(!active);
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className={`nav ${active ? 'nav__active' : ''}`}>
      <a href="#" className="nav__brand">
        Kanyiso Madlebe
      </a>
      <div onClick={navToggle} className={toggleIcon ? 'nav__toggler toggle' : 'nav__toggler'}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
