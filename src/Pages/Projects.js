import './Projects.css';

import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    name: 'Goal Maker',
    description: 'This is the description.',
    demoLink: 'https://jake-a-brown.github.io/GoalMaker/'
  },
  {
    id: 2,
    name: 'Project 1',
    description: 'This is the description.',
    demoLink: '#'
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'This is the description.',
    demoLink: '#'
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'This is the description.',
    demoLink: '#'
  },
  {
    id: 5,
    name: 'Project 5',
    description: 'This is the description.',
    demoLink: '#'
  },
  {
    id: 6,
    name: 'Project 6',
    description: 'This is the description.',
    demoLink: '#'
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
              Demo Link
            </a>
          </div>
        ))}
      </div>
      <Link to='/' className='project-goback'>Go Back</Link>
    </div>
  );
};

export default Projects;

