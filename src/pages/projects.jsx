import React, { useState } from 'react';
import '../style/projects.css';
import MzamomtshaImage from '../images/schW.jpg';
import FinancialCalculatorImage from '../images/fifi.jpg';
import TaxCalculatorImage from '../images/tatxtatx.jpg';

function Projects() {
  // Define an array to hold your project data
  const projectsData = [
    {
      title: 'Mzamomtsha',
      description: 'We transformed school website by designing from scratch its interface and functionality, ensuring an intuitive and engaging user experience for students, parents, and faculty.',
      link: 'https://super-quokka-c5659f.netlify.app/',
      image: MzamomtshaImage,
    },
    {
      title: 'Financial Calculator',
      description: 'Empowering individuals to make informed financial decisions, we developed a comprehensive calculator tool that visualizes various scenarios, from investments to loans, promoting financial literacy and planning.',
      link: 'https://github.com/Kanyiso-Madlebe/Squad-converters',
      image: FinancialCalculatorImage,
    },
    {
      title: 'Tax Calculator',
      description: 'Through a user-friendly tax calculator app, we simplified the complexity of taxes by allowing users to input financial data and receive accurate tax estimates.',
      link: 'https://github.com/Kanyiso-Madlebe/Tax-Calculator',
      image: TaxCalculatorImage,
    },
    {
      title: 'Financial Calculator',
      description: 'Empowering individuals to make informed financial decisions, we developed a comprehensive calculator tool that visualizes various scenarios, from investments to loans, promoting financial literacy and planning.',
      link: 'https://github.com/Kanyiso-Madlebe/Squad-converters',
      image: FinancialCalculatorImage,
    },
    {
      title: 'Tax Calculator',
      description: 'Through a user-friendly tax calculator app, we simplified the complexity of taxes by allowing users to input financial data and receive accurate tax estimates.',
      link: 'https://github.com/Kanyiso-Madlebe/Tax-Calculator',
      image: TaxCalculatorImage,
    },
    {
      title: 'Mzamomtsha',
      description: 'We transformed school website by designing from scratch its interface and functionality, ensuring an intuitive and engaging user experience for students, parents, and faculty.',
      link: 'https://super-quokka-c5659f.netlify.app/',
      image: MzamomtshaImage,
    },
  ];

  // State to keep track of the currently visible projects
  const [visibleProjects, setVisibleProjects] = useState(projectsData.slice(0, 3));

  // Function to handle moving to the next set of projects
  const showNextProjects = () => {
    // Calculate the next group of projects to display
    const startIndex = visibleProjects.length;
    const endIndex = startIndex + 3;
    const nextProjects = projectsData.slice(startIndex, endIndex);

    // Update the state with the next group of projects
    setVisibleProjects(nextProjects);
  };

  // Function to handle moving to the previous set of projects
  const showPreviousProjects = () => {
    // Calculate the previous group of projects to display
    const endIndex = visibleProjects.length - 3;
    const startIndex = endIndex - 3;
    const previousProjects = projectsData.slice(startIndex, endIndex);

    // Update the state with the previous group of projects
    setVisibleProjects(previousProjects);
  };

  return (
    <section className="projects" id="projects">
      <div className="about-text">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-container">
        <div className="cards">
          {visibleProjects.map((project, index) => (
            <div className="card card-enter-animation" key={index}>
              <div className="container">
                <a href={project.link}>
                  <img src={project.image} alt={project.title} />
                </a>
              </div>
              <div className="details">
                <h3><a href={project.link} className="project-link">{project.title}</a></h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow-buttons" >
          <button className="left-arrow" onClick={showPreviousProjects}>
            &lt; Previous
          </button>
          <button className="right-arrow" onClick={showNextProjects}>
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
