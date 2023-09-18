import React from 'react';
import '../style/about.css'; 
import Young from '../images/young.png';

const About = () => {
  return (
    <div className="body">
      <section className="about" id="about">
        <div className="main">
          <img src={Young} alt="Profile" />
          <div className="about-text">
            <h1>About Me</h1>
            <h5>Developer<span> & Analyst</span></h5>
            <p>
              Hey there! I'm Kanyiso Madlebe, a tech enthusiast with an ICT and Business Analysis background. 
              Currently interning in Software Development,
              I'm passionate about translating ideas into impactful digital realities.
              Let's connect and journey through the evolving landscape of coding and creativity.
            </p>
            
            <button type="button">
              <a href="https://adorable-donut-35dd9f.netlify.app/" rel="noopener noreferrer">
                Read More
              </a>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
