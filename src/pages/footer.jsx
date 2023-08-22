import React from 'react';
import '../style/footer.css';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="socialIcons">
                <a href="https://linkedin.com/in/kanyiso-madlebe-960670254"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Kanyiso-Madlebe"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/kanyiso_madlebe/"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="footerNav">
                <ul>
                    <li><a href="index.htm">Home</a></li>
                    <li><a href="about.htm">About</a></li>
                    <li><a href="projects.htm">Projects</a></li>
                    <li><a href="contact.htm">Contact</a></li>
                </ul>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2023; Designed by,<span className="designer">Debeza</span></p>
            </div>
        </div>
    );
}

export default Footer;
