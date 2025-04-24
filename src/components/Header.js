import React from 'react';

function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Implement CV download
    const link = document.createElement('a');
    link.href = 'AlaaHassainResume.pdf';
    link.download = 'AlaaHassainResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header" id="home">
      <div className="header-content">
        <div className="profile-container">
          <div className="my_img"></div>
        </div>
        <div className="intro">
          <h1>Alaa Hassain</h1>
          <div className="typewriter">
            <h2 className="typewriter-text">Full Stack Web Developer</h2>
          </div>
          <div className="social-links">
            <a href="https://github.com/AlaaHasain" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <i className="fa-brands fa-github social-icon"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <i className="fa-brands fa-linkedin social-icon"></i>
            </a>
            <a href="https://www.facebook.com/share/18xrvwRXe5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
              <i className="fa-brands fa-facebook social-icon"></i>
            </a>
            <a href="https://www.instagram.com/alaah.98?igsh=NHE1Zjdqb2wzMHY2" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>
            <a href="https://wa.me/+962796990562" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contact">
              <i className="fa-brands fa-whatsapp social-icon"></i>
            </a>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary-btn">
              <i className="fa-solid fa-envelope"></i>
              Contact me
            </a>
            <button className="btn secondary-btn" onClick={downloadCV}>
              <i className="fa-solid fa-file-arrow-down"></i>
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;