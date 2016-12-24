import React from 'react';
import _ from 'lodash';
import projects from '../lib/projects';

const Project = (props) => (
    <div className={`project ${_.camelCase(props.name)}`}>
        <img className="project-screenshot" src={props.imgSrc} />
        <div className="project-detail">
            <h3 className="project-title">{props.name}</h3>
            <p className="project-writeup">{props.desc}</p>
            {props.siteLink ? <a className="project-link" href={props.siteLink}>View Site</a> : null}
            {props.repoLink ? <a className="project-link" href={props.repoLink}>Github</a> : null}
        </div>
    </div>
);

const ProjectsContainer = () => (
    <div id="projects-container">
        <h1 className="projects-header">Portfolio</h1>
        {projects.map((project) => (
            <Project
                key={project.name}
                imgSrc={project.imgSrc}
                name={project.name}
                desc={project.desc}
                siteLink={project.siteLink}
                repoLink={project.repoLink} />
        ))}
    </div>
);

export default ProjectsContainer;
