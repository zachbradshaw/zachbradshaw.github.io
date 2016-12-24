import React from 'react';

const contactLinkUrls = [
    { href: 'mailto:bradshaw.zachary@gmail.com', title: 'Contact', target: '_blank' },
    { href: 'https://drive.google.com/file/d/0B3lB-RDo18JMd3EweG8zalA1Rm8/view?usp=sharing ', title: 'Resume', target: '_blank' },
    { href: 'http://github.com/zachbradshaw', title: 'Github', target: '_blank' },
    { href: '#projects-container', title: 'Portfolio' },
    { href: '#about-section', title: 'About' }
];
const ContactLink = (props) => <a target={props.target} href={props.href}>{props.title}</a>;

const ContactLinkContainer = () => (
    <div className="contact-container">
        {contactLinkUrls.map((link) => {
            return (
                <ContactLink
                    key={link.href}
                    target={link.target}
                    href={link.href}
                    title={link.title}
                />
            );
        })}
    </div>
);

export default ContactLinkContainer;
