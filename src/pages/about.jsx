import React, { useState } from 'react';
import '../style/about.css'; 
import Young from '../images/young.png';

const About = () => {
  const [showMore, setShowMore] = useState(false);

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
          {showMore ? (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem omnis
               sunt soluta provident quibusdam voluptatem magni dolorum 
              at dolor aspernatur, porro, eaque accusamus illo iusto deserunt 
              distinctio possimus dignissimos quo.
            </p>
          ) : null}
          <button type="button" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
