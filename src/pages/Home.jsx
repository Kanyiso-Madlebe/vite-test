import React from 'react';
import { motion } from 'framer-motion';
import '../style/home.css';
import Coco from '../images/coco.jpeg';
import Wall from '../images/wallp.jpg';

function Home() {
    return (
        
        <section className="home" id="home">
        <div className="wallpaper" style={{ backgroundImage: `url(${Wall})` }}>
            <div className="home-data">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="home-text"
                >
                    <motion.h3 className="software-title">
                        <span className="white-text">Software </span>
                        <span className="red-text">Dev:</span>
                        <span className="white-text"> Business </span>
                        <span className="red-text">Analyst</span>
                    </motion.h3>
                    <motion.h3 className="intro-text">
                        A Business Analysis graduate now 
                        delving into the world of Software Development through
                         an internship.
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
                        >
                            Resume
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="button button2"
                        >
                            Projects
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
       
    );
}

export default Home;
