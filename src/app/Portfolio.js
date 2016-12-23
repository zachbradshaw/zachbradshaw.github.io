import React from 'React';
import Name from './components/Name';
import ContactLinkContainer from './components/ContactLinkContainer';
import ProjectsContainer from './components/ProjectsContainer';

const Portfolio = () => (
    <div className='hero'>
        <Name />
        <ContactLinkContainer />
        <ProjectsContainer />
    </div>
);

export default Portfolio;
