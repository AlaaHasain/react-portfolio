import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Alaa Hassain</h3>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#my_work">Projects</a>
          <a href="#cert">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/AlaaHasain" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/share/18xrvwRXe5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/alaah.98?igsh=NHE1Zjdqb2wzMHY2" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/+962796990562" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} Alaa Hassain. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;