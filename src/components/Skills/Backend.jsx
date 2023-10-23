import { motion } from "framer-motion";

const Backend = () => {
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
    <motion.div
      className="skill-content"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h3 className="skills-title">Backend Developer</motion.h3>

      <div className="skill-box">
        <div className="skill-group">
          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">PHP</h3>
              <span className="Skill-level">Intermediate</span>
            </div>
          </div>

          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Node Js</h3>
              <span className="Skill-level">intermediate</span>
            </div>
          </div>

          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Python</h3>
              <span className="Skill-level">intermediate</span>
            </div>
          </div>

          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">My SQL</h3>
              <span className="Skill-level">intermediate</span>
            </div>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">Fire Base</h3>
              <span className="Skill-level">Basic</span>
            </div>
          </div>

          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">PHP</h3>
              <span className="Skill-level">Intermediate</span>
            </div>
          </div>

          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">PHP</h3>
              <span className="Skill-level">Intermediate</span>
            </div>
          </div>

          <div className="skill-data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skill-name">PHP</h3>
              <span className="Skill-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Backend;
