import React from 'react'
import './Projects.css'
import mywork_data from '../../assets/mywork_data'

const Projects = () => {
  return (
    <div className='project' id='projects'>
        <div className="title">
            <h1>Projects</h1>
        </div>
        <div className="project-container">
            {mywork_data.map((work, index) => {
              return (
                <div key={index}>
                  <a href={work.w_projectLink} target='_blank' rel="noopener noreferrer"><img src={work.w_img} alt="" /></a>
                  <p>{work.w_name}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Projects