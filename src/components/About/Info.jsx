import React from 'react'

const Info = () => {
  return (
    <div className='about-info grid'>
      <div className='about-box'>
        <i class='bx bx-award about-icon'></i>

        <h3 className='about-box'>Experience</h3>
        <span className='about-subtitle'> 8 Years Working</span>
      </div>

      <div className='about-box'>
      <i class='bx bx-briefcase-alt about-icon'></i>


        <h3 className='about-box'>Completed</h3>
        <span className='about-subtitle'>48 + Project</span>
      </div>

      <div className='about-box'>
      <i class='bx bx-support about-icon'></i>


        <h3 className='about-box'>Support</h3>
        <span className='about-subtitle'>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info
