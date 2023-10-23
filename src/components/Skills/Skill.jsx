import "./Skill.css"
import Backend from "./Backend"
import Frontend from "./Frontend"
import { motion } from "framer-motion"

const Skill = () => {
    const variants = {
      initial: {
        y: 30,
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
    <div>
      <motion.section
        className="skill section"
        id="skill"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h2
          className="section-title"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          Skills
        </motion.h2>
        <motion.span
          className="section-subtitle"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          My Technical Level
        </motion.span>

        <motion.div
          className="skills-container container grid"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <Frontend />
          <Backend />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Skill
