import React from 'react';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="section-underline"></div>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3>Frontend Development</h3>
            <div className="skill-content">
              <div className="skill-group">
                <h4>Languages</h4>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="skill-group">
                <h4>Frameworks</h4>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="skill-group">
                <h4>Tools</h4>
                <ul>
                  <li>Responsive Web Design</li>
                  <li>UI/UX Principles</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fa-solid fa-server"></i>
            </div>
            <h3>Backend Development</h3>
            <div className="skill-content">
              <div className="skill-group">
                <h4>Languages</h4>
                <ul>
                  <li>PHP</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="skill-group">
                <h4>Frameworks</h4>
                <ul>
                  <li>Laravel</li>
                </ul>
              </div>
              <div className="skill-group">
                <h4>Databases</h4>
                <ul>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fa-solid fa-user-gear"></i>
            </div>
            <h3>Soft Skills</h3>
            <div className="skill-content">
              <div className="skill-item">
                <h4>Problem-Solving</h4>
                <div className="skill-progress">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <h4>Teamwork</h4>
                <div className="skill-progress">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <h4>Fast Learning</h4>
                <div className="skill-progress">
                  <div className="skill-bar" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <h4>Time Management</h4>
                <div className="skill-progress">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;