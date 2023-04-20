import React from 'react';

import { SkillCard } from './../SkillCard/SkillCard';

import './skills.css';

export const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h3>Tech Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.techSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            <h3>Other Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.interpersonalSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            
        </div>
    )
}