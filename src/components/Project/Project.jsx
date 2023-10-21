import React from 'react'
import "./Project.css"
import Work from './Work'

const Project = () => {
  return (
      <section className='project section' id='projects'>
            <h2 className='section-title'>Projects</h2>
            <span className='section-subtitle'>Recent Works</span>

            <Work/>
      </section>
  )
}

export default Project
