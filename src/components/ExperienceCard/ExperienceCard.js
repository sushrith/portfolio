import React from 'react'

function ExperienceCard({experience}) {
  return (
    <div class="container right">
    <div class="content">
    <div className='combine'>
        <span className='comb'>
      <h2>{experience.name}</h2>
      <img style={{height:'30px',width:'30px'}} w src="https://logos-world.net/wp-content/uploads/2021/02/Deutsche-Bank-Logo.png"/>
      </span>
      <span className='comb2'>
      <h3>{experience.role}</h3> 
      <p>{experience.time}</p>
      </span>
      </div>
      <p>{experience.description}</p>
    </div>
 </div>
  )
}

export default ExperienceCard