import React from 'react';
import '../style/projects.css'; 
import MzamomtshaImage from '../images/schW.jpg';
import FinancialCalculatorImage from '../images/fifi.jpg';
import TaxCalculatorImage from '../images/tatxtatx.jpg';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="about-text">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="cards">
        {/* Card 1 */}
        <div className="card card1">
          <div className="container">
          <a href="https://super-quokka-c5659f.netlify.app/">
              <img src={MzamomtshaImage} alt="Mzamomtsha" />
            </a>
          </div>
          <div className="details">
            <h3><a href="https://super-quokka-c5659f.netlify.app/" className="project-link">Mzamomtsha</a></h3>
            <p>
              {"We transformed school website by designing from scratch its interface and functionality, ensuring an intuitive and engaging user experience for students, parents, and faculty."}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card2">
          <div className="container">
          <a href="https://github.com/Kanyiso-Madlebe/Squad-converters">
              <img src={FinancialCalculatorImage} alt="Financial Calculator" />
            </a>
          </div>
          <div className="details">
          <h3><a href="https://github.com/Kanyiso-Madlebe/Squad-converters" className="project-link">Financial Calculator</a></h3>
            <p>
              {"Empowering individuals to make informed financial decisions, we developed a comprehensive calculator tool that visualizes various scenarios, from investments to loans, promoting financial literacy and planning."}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card card3">
          <div className="container">
          <a href="https://github.com/Kanyiso-Madlebe/Tax-Calculator">
              <img src={TaxCalculatorImage} alt="Tax Calculator" />
            </a>

          </div>
          <div className="details">
          <h3><a href="https://github.com/Kanyiso-Madlebe/Tax-Calculator" className="project-link">Tax Calculator</a></h3>
            <p>
              {"Through a user-friendly tax calculator app, we simplified the complexity of taxes by allowing users to input financial data and receive accurate tax estimates."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;