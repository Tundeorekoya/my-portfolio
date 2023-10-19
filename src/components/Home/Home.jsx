import './Home.css'
import Social from './Social'
import Data from './Data'
import Scrolldown from './Scrolldown'

const Home = () => {
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
    <section className='home section' id='home'>
        <div className='home-container container grid'>
            <div className='home-content grid'>
                <Social/>
                <div className='home-img'>

                </div>


                <Data/>
            </div>
            <Scrolldown/>
        </div>
    </section>
  )
}

export default Home
