import React, { useState } from 'react';
import '../style/footer.css';

function Footer() {
  const [activeLink, setActiveLink] = useState('home'); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="body">
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://github.com/Kanyiso-Madlebe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kanyiso-madlebe-960670254/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="whatsapp:+27647473024">
          <i className="fab fa-whatsapp"></i>
        </a>
        </div>
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
    </div>
  );
}

export default Footer;
