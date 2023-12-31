import React from 'react'

const Social = () => {
  const textVariant ={
    initial: {
      x: -500,
      opacity: 0,

    },
    initial: {
      x: -500,
      opacity: 0,

    },
    animate: {
      x: 0,
      transition: {
        duration:1,
        staggerChildren:0.1,
      },


    }
  }
  return (
    <d className='home-social' >
        <a href="https://www.linkedin.com/in/tunde-benjamin-733948257/" className='home-social-icon' target='_blank'>
            <i class='uil uil-linkedin'></i>
        </a>

        <a href="https://github.com/Tundeorekoya" className='home-social-icon' target='_blank'>
        <i class='uil uil-github'></i>

        </a>


        <a href="https://wa.me/message/FEHPOO6EDD3LI1" className='home-social-icon' target='_blank'>
        <i class='uil uil-inbox'></i>

        </a>

    </d>
  )
}

export default Social
