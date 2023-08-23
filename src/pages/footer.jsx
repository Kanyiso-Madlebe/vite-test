import React, { useState } from 'react';
import '../style/footer.css';

function Footer() {
  const [activeLink, setActiveLink] = useState('home'); // Initialize with the default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="footerContainer">
      {/* ... (social icons code) */}
      <div className="footerNav">
        <ul>
          <li>
            <a
              href="#home"
              className={`footerLink ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`footerLink ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`footerLink ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`footerLink ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy;2023; Designed by,<span className="designer">Debeza</span></p>
      </div>
    </div>
  );
}

export default Footer;
