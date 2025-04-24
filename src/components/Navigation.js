import React, { useState, useEffect } from 'react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'my_work', 'cert', 'contact'];
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <a 
        href="#home" 
        title="Home" 
        className={activeSection === 'home' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <a 
        href="#about" 
        title="About Me" 
        className={activeSection === 'about' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}
      >
        <i className="fa-solid fa-circle-info"></i>
      </a>
      <a 
        href="#skills" 
        title="Skills" 
        className={activeSection === 'skills' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('skills');
        }}
      >
        <i className="fa-solid fa-code"></i>
      </a>
      <a 
        href="#my_work" 
        title="Projects" 
        className={activeSection === 'my_work' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('my_work');
        }}
      >
        <i className="fa-solid fa-laptop-code"></i>
      </a>
      <a 
        href="#cert" 
        title="Experience" 
        className={activeSection === 'cert' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('cert');
        }}
      >
        <i className="fa-solid fa-calendar-days"></i>
      </a>
      <a 
        href="#contact" 
        title="Contact" 
        className={activeSection === 'contact' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </nav>
  );
}

export default Navigation;