import { useState } from 'react'
import './Header.css'
import { motion } from 'framer-motion'

const Header = () => {

    const[toggle, setToggle] = useState(false)

  return (
    <div>
    <div className="header">
        <nav className='nav container'>
            <motion.h1 href="home" className='nav-logo'  initial={{opacity:0, scale:1}} 
            animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Tunde</motion.h1>

          <motion.div className= { toggle? "nav-menu show-menu": "nav-menu"} initial={{opacity:0, scale:1}} 
            animate={{opacity:1, scale:1}} transition={{duration:0.5}} >
            <motion.ul className='nav-list grid ' >
                <motion.li className='nav-item' >
                    <a href="#home" className='nav-link '>
                        <i className='uil uil-estate nav-icon'></i> Home
                    </a>
                </motion.li>

                <motion.li className='nav-item'>
                    <a href="#about" className='nav-link '>
                        <i className='uil uil-user nav-icon'></i>About
                    </a>
                </motion.li>

                <motion.li className='nav-item' >
                    <a href="#skill" className='nav-link'>
                        <i className='uil uil-file-alt nav-icon'></i>Skills
                    </a>
                </motion.li>

                <motion.li className='nav-item' >
                    <a href="#projects" className='nav-link'>
                        <i className='uil uil-scenery nav-icon'></i>Projects
                    </a>
                </motion.li>

                <motion.li className='nav-item' >
                    <a href="#contact" className='nav-link'>
                        <i className='uil uil-message nav-icon'></i>Contact
                    </a>
                </motion.li>
            </motion.ul>

            <i className='uil uil-times nav-close' onClick={()=> setToggle(false)}></i>
          </motion.div>


          <div className='nav-toggle' onClick={()=>setToggle(!toggle)}>
            <i className='uil uil-apps'></i>
          </div>
        </nav>
    </div>
    </div>
  )
}

export default Header
