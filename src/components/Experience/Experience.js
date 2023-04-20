import React from 'react'
import './experience.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

function Experience({experience}) {
  return (
    <div className="timeline">
      {
          experience.experienceList.map(experience => <ExperienceCard experience={experience} />)
      }
  </div>
  )
}

export default Experience