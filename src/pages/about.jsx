import React from 'react';
import { Link } from 'react-router-dom';
import '../style/about.css'; 
import Young from '../images/young.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="main">
        <img src={Young} alt="Profile" />
        <div className="about-text">
          <h1>About Me</h1>
          <h5>Developer<span> & Analyst</span></h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lrorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link to="/extended">
            <button type="button">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
