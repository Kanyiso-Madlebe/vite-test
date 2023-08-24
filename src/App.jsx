import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from "./pages/Home"
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Extended from './components/extended'; // Import ExtendedContent

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Define your routes */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
