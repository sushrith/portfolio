import React from 'react'

import './education-card.css';

export const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <p><span className='title'><b>Education:</b></span><span className='desc'>{education.education}</span></p>
            <p><span className='title'><b>Institute:</b></span><span className='desc'> {education.institute}</span></p>
            <p><span className='title'><b>Duration:</b></span><span className='desc'>{education.duration}</span> </p>
            <p><span className='title'><b>Grade:</b></span><span className='desc'>{education.grade}</span> </p>
        </div>
    )
    
}