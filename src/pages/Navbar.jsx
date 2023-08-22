import React, { useState } from 'react';
import '../style/Navbar.css';

function navBar() {
    const [active, setActive] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(false); 

    const navToggle = () => {
        setActive(!active); 
        setToggleIcon(!toggleIcon); 
    };

    return (
        <nav className="nav">
            <a href="#" className="nav__brand">Kanyiso Madlebe</a>
            <ul className={active ? 'nav__menu nav__active' : 'nav__menu'}>
                <li className="nav__item"><a href="" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="" className="nav__link">About</a></li>
                <li className="nav__item"><a href="" className="nav__link">Projects</a></li>
                <li className="nav__item"><a href="" className="nav__link">Contact</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon ? 'nav__toggler toggle' : 'nav__toggler'}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default navBar;
