import Backend from "./Backend"
import Frontend from "./Frontend"


const Skill = () => {
  return (
    <div>
      <section className='skill section id="skill'>
        <h2 className='section-title'>Skills</h2>
        <span className='section-subtitle'>My Technical Level</span>


        <div className='skills-container container grid'>
            <Frontend/>
            <Backend/>
        </div>
      </section>
    </div>
  )
}

export default Skill
