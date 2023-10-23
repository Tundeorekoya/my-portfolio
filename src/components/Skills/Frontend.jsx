import React from 'react'
import { motion } from 'framer-motion';


const Frontend = () => {
        const variants = {
          initial: {
            y: 100,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              staggerChildren: 0.1,
            },
          },
        };
  return (
    <motion.div className='skill-content' variants={variants}
        initial="initial"
        whileInView="animate">
        <h3 className='skills-title'>Frontend Developer</h3>

        <div className='skill-box'>
            <div className='skill-group'>
                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>HTML 5</h3>
                        <span className='Skill-level'>Basic</span>
                    </div>
                </div>


                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>CSS</h3>
                        <span className='Skill-level'>intermediate</span>
                    </div>
                </div>



                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>JavaScript</h3>
                        <span className='Skill-level'>intermediate</span>
                    </div>
                </div>


                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>tail Wind</h3>
                        <span className='Skill-level'>intermediate</span>
                    </div>
                </div>
            </div>



                {/* tag */}

            <div className='skill-group'>
                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'> React</h3>
                        <span className='Skill-level'>intermediate</span>
                    </div>
                </div>


                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>TypeScript</h3>
                        <span className='Skill-level'>Basic</span>
                    </div>
                </div>



                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>Git & Github</h3>
                        <span className='Skill-level'>intermediate</span>
                    </div>
                </div>


                <div className='skill-data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skill-name'>tail Wind</h3>
                        <span className='Skill-level'>intermediate</span>
                    </div>
                </div>
            </div>
                
           
        </div>
    </motion.div>
  )
}

export default Frontend
