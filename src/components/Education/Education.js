import React from 'react';

import { EducationCard } from './../EducationCard/EducationCard';

export const Education = ({ education }) => {
    return (
        <div className="education-container">
            <div className="industry-skill-container">
                {
                    education.EducationList.map(edu => <EducationCard education={edu} />)
                }
            </div>
        </div>
    )
}
