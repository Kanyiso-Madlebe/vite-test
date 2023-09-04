import React, { useState } from 'react';
import '../style/Navbar.css';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home'); // Initialize with the default active page 

  const navToggle = () => {
    setActive(!active);
    setToggleIcon(!toggleIcon);
  };

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setActive(false); // Close the navigation menu when a link is clicked
    setToggleIcon(false);
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
          <a
            href="#home"
            className={`nav__link ${currentPage === 'Home' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('Home')}
          >
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#about"
            className={`nav__link ${currentPage === 'About' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('About')}
          >
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#projects"
            className={`nav__link ${currentPage === 'Projects' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('Projects')}
          >
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className={`nav__link ${currentPage === 'Contact' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
