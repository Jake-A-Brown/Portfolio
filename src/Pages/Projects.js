import './Projects.css';

import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    name: 'Project 1',
    description: 'This is the description of Project 1.',
    demoLink: 'https://project1demo.com'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'This is the description of Project 2.',
    demoLink: 'https://project2demo.com'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className='projects-container'>
      <h2>Projects</h2>
      <div className='projects-grid'>
        {projectsData.map((project) => (
          <div className='project-card' key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
              Demo
            </a>
          </div>
        ))}
      </div>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default Projects;

