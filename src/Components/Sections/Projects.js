import React from 'react';
import Title from '../Title';
import ProjectsItem from './ProjectsItem';

const Projects = () => {
  return (
    <div className={`container`} id="projects">
      <Title title="Projetos" />
      <ProjectsItem/>  
    </div>
  )
}

export default Projects
