import React, { useState } from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card" data-category={project.category}>
      <div className="project-img" style={{ backgroundImage: `url(${project.image})` }}></div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-eye"></i> View Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Hasanah",
      description: "A platform designed to make donating to charity easier, more accessible, and impactful",
      technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
      image: "/images/hasanah.jpg",
      demo: "https://hasanah-demo.netlify.app",
      github: "https://github.com/AlaaHasain/hasanah",
      category: "web"
    },
    {
      id: 2,
      title: "People Tales",
      description: "An e-commerce platform offering authentic cultural products from various countries, allowing users to explore and purchase unique items",
      technologies: ["XHTML", "CSS", "Bootstrap 5", "JavaScript", "MySQL"],
      image: "/images/people-tales.jpg",
      github: "https://github.com/AlaaHasain/people-tales",
      category: "web"
    },
    {
      id: 3,
      title: "Bookment",
      description: "A hotel booking platform that showcases hotels in Jordan, allowing users to view details and make reservations easily",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/bookment.jpg",
      demo: "https://bookment-demo.netlify.app",
      category: "web"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="my_work" id="my_work">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="section-underline"></div>
        
        <div className="project-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
        </div>
        
        <div className="projects-container">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          <div className="project-card add-project">
            <div className="add-project-content">
              <i className="fa-solid fa-plus"></i>
              <p>More projects coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;