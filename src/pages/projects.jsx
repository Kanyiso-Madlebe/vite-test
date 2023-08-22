import React from 'react';
import '../style/projects.css'; 
import MzamomtshaImage from '../images/schW.jpg';
import FinancialCalculatorImage from '../images/fifi.jpg';
import TaxCalculatorImage from '../images/tatxtatx.jpg';

function Projects() {
  return (
    
    <section className="projects">
      <div className="about-text">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="cards">
        {/* Card 1 */}
        <div className="card card1">
          <div className="container">
            <img src={MzamomtshaImage} alt="Mzamomtsha" />
          </div>
          <div className="details">
            <h3>Mzamomtsha</h3>
            <p>
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card2">
          <div className="container">
            <img src={FinancialCalculatorImage} alt="Financial Calculator" />
          </div>
          <div className="details">
            <h3>Financial Calculator</h3>
            <p>
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card card3">
          <div className="container">
            <img src={TaxCalculatorImage} alt="Tax Calculator" />
          </div>
          <div className="details">
            <h3>Tax Calculator</h3>
            <p>
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
