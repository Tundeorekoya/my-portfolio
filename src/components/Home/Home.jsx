import './Home.css'
import Social from './Social'
import Data from './Data'
import Scrolldown from './Scrolldown'
import { motion } from 'framer-motion'


const Home = () => {
  const textVariant = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section className='home section' id='home' variants={textVariant} initial='initial' animate="animate">
        <motion.div className='home-container container grid' variants={textVariant}>
            <motion.div className='home-content grid' variants={textVariant}>
                <Social variants={textVariant} />
                <motion.div className='home-img' variants={textVariant} >

                </motion.div>


                <Data variant={textVariant} />
            </motion.div>
            <Scrolldown  variant={textVariant} />
        </motion.div>
    </motion.section>
  )
}

export default Home
