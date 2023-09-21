import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../style/home.css';
import Coco from '../images/coco.jpeg';
import Wall from '../images/wallpaper.jpg';
import CV from '../components/resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="body">
      <div className="content">
        <section className="home" id="home">
          <div
            className="wallpaper"
            style={{
              backgroundImage: `url(${Wall})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="home-data"  data-aos="fade-up">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="home-text"
              >
                <motion.h3 className="software-title">
                  <span className="white-text">Software</span>
                  <span className="red-text">Dev:</span>
                  <span className="white-text"> Business</span>
                  <span className="red-text">Analyst</span>
                </motion.h3>
                <motion.h3 className="intro-text">
                  A Business Analysis graduate now delving into the world of
                  Software Development through an internship.
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="buttons-desktop"
                >
                 <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="button button1"
                    data-aos="flip-left" // Add the AOS animation attribute here
                    >
                    <a href={CV} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                    </motion.button>

                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="button button2"
                    data-aos="flip-right" // Add the AOS animation attribute here
                    >
                    <a href="https://github.com/Kanyiso-Madlebe" target="_blank" rel="noopener noreferrer">
                        Projects
                    </a>
                    </motion.button>

                </motion.div>
              </motion.div>
              <div className="home-img-btn-container">
                <div className="home-bg">
                  <div className="image-wrapper">
                    <img src={Coco} alt="" className="home-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
