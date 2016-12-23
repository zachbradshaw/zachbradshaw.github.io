import React from 'react';
import projects from '../lib/projects';

const Project = (props) => (
    <div className="project">
        <img className="project-screenshot" src={props.imgSrc} />
        <div className="project-detail">
            <h3 className="project-title">{props.name}</h3>
            <p className="project-writeup">{props.desc}</p>
            <a href={props.siteLink}>View Site</a> | <a href={props.repoLink}>Github</a>
        </div>
    </div>
);

const ProjectsContainer = () => (
    <div className="projects-container">
        {projects.map((project) => (
            <Project
                imgSrc={project.imgSrc}
                name={project.name}
                desc={project.desc}
                siteLink={project.siteLink}
                repoLink={project.repoLink} />
        ))}
    </div>
);

export default ProjectsContainer;
