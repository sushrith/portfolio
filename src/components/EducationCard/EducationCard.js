import React from 'react'

import './education-card.css';

export const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <p><b>Education:</b>{education.education}</p>
            <p><b>Institute:</b> {education.institute}</p>
            <p><b>Duration:</b>{education.duration} </p>
        </div>
    )
}