import { projectData } from "./Data"
import WorkItems from "./WorkItems"
import { motion } from "framer-motion";

const Work = () => {
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
      <motion.div
        className="work-container container grid"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        {projectData.map((item) => {
          return <WorkItems item={item} key={item} />;
        })}
      </motion.div>
    </div>
  );
}

export default Work
