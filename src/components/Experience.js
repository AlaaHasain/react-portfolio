import React from 'react';

function TimelineItem({ date, logo, title, subtitle, description, isEven }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <div className="timeline-card">
          <div className="timeline-logo">
            <div style={{backgroundImage: `url(${logo})`}}></div>
          </div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      date: "01/2025 - Present",
      logo: "/images/orange-academy.jpg",
      title: "Orange Academy",
      subtitle: "Full Stack Web Development Trainee",
      description: "Learning advanced web development technologies and building real-world projects with industry standards. Working on front-end development using HTML, CSS, JavaScript and React, and back-end using PHP and Laravel."
    },
    {
      date: "2019 - 2025",
      logo: "/images/lemongrass.jpg",
      title: "Lemongrass Restaurant",
      subtitle: "Assistant Manager",
      description: "Managed staff, coordinated operations, and improved customer service processes while developing leadership skills."
    },
    {
      date: "2017 - 2022",
      logo: "/images/zaytoonah.jpg",
      title: "Al-Zaytoonah University",
      subtitle: "Bachelor's in Computer Information Systems",
      description: "Studied database systems, software engineering, network principles, and developed foundational programming skills."
    }
  ];

  return (
    <section className="timeline experience" id="cert">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="section-underline"></div>
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              date={exp.date}
              logo={exp.logo}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;