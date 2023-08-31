import React, { Component } from 'react';
import Navbar from './pages/Navbar';
import Home from "./pages/Home"
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './pages/footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects /> 
      <Contact />  
      <Footer />   
      
    </div>
    
  );
}

export default App;
