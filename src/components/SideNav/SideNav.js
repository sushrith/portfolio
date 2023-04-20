import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
  
    return (
        <div className="sidenav">
            <img
                src={process.env.PUBLIC_URL + '/my-pic.jpg'}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Sushrith Bondugula</h2>
            <p className="subtitle">"Software Engineer At Deutsche Bank"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("education")}>Education</p>
                <p className="section-list-element" onClick={() => handleSectionClick("experience")}>Experience</p>
                <p className="section-list-element"  onClick={handleToLinkedin}>Contact <img className="linkedin" src={process.env.PUBLIC_URL + '/LI-In-Bug.png'}/></p>
            </div>
        </div>
    );
    function handleToLinkedin(){
        window.location="https://www.linkedin.com/in/sushrith-bondugula-40bbb2168/";
    }   
};