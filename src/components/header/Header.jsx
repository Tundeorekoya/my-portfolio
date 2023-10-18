import { useState } from 'react'
import './Header.css'

const Header = () => {
    const[toggle, setToggle] = useState(false)

  return (
    <div>
    <div className="header">
        <nav className='nav container'>
            <h1 href="home" className='nav-logo'>Tunde</h1>

          <div className= { toggle? "nav-menu show-menu": "nav-menu"} >
            <ul className='nav-list grid '>
                <li className='nav-item'>
                    <a href="#home" className='nav-link '>
                        <i className='uil uil-estate nav-icon'></i> Home
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#about" className='nav-link '>
                        <i className='uil uil-user nav-icon'></i>About
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#skill" className='nav-link'>
                        <i className='uil uil-file-alt nav-icon'></i>Skills
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#portfolio" className='nav-link'>
                        <i className='uil uil-scenery nav-icon'></i>Projects
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#contact" className='nav-link'>
                        <i className='uil uil-message nav-icon'></i>Contact
                    </a>
                </li>
            </ul>

            <i className='uil uil-times nav-close' onClick={()=> setToggle(false)}></i>
          </div>


          <div className='nav-toggle' onClick={()=>setToggle(!toggle)}>
            <i className='uil uil-apps'></i>
          </div>
        </nav>
    </div>
    </div>
  )
}

export default Header
