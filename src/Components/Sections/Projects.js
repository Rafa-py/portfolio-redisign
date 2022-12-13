import React from 'react';
import Title from '../Title';
import ProjectsData from '../../Assets/ProjectsData';

const Projects = () => {
  return (
    <div className={`container`} id="projects">
      <Title title="Projetos" />
      <ProjectsData overview/>  
    </div>
  )
}

export default Projects
