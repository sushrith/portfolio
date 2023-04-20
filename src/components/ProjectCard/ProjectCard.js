import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><span className='title'><b>Name : </b></span><span className='desc'>{project.name}</span></p>
            <p><span className='title'><b>Description : </b> </span><span className='desc'>{project.description}</span></p>
            <p><span className='title'><b>Technologies : </b></span><span className='desc'>{project.technologies}</span> </p>
        </div>
    )
}