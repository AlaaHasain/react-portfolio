import React from 'react';
import './Styles/Styles.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default App;