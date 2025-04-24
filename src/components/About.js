import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
        <div className="about-content">
          <p className="about-text">
            I'm a Full Stack Developer with expertise in front-end and back-end technologies, 
            specializing in HTML, CSS, JavaScript, PHP, Laravel, MySQL, and React. Passionate 
            about building user-centric web applications and delivering innovative solutions.
          </p>
          <p className="about-text">
            With in-depth knowledge in both frontend and backend development, I am committed 
            to enhancing web and application experiences through advanced technologies 
            and clean, efficient code.
          </p>
          <p className="about-text">
            I believe that well-designed applications can revolutionize user interactions. 
            I aim to create enhancements that improve performance and engagement on 
            websites and web applications, while ensuring scalability and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;