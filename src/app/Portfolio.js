import React from 'React';
import Name from './components/Name';
import ContactLinkContainer from './components/ContactLinkContainer';
import ProjectsContainer from './components/ProjectsContainer';
import About from './components/About';
import Footer from './components/Footer';

const Portfolio = () => (
    <div>
        <div className='hero'>
            <Name />
            <ContactLinkContainer />
        </div>
        <div className='projects'>
            <ProjectsContainer />
        </div>
        <About />
        <Footer />
    </div>
);

export default Portfolio;
