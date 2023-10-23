import { motion } from "framer-motion";


const WorkItems = ({item}) => {
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
    <motion.div
      className="work-card"
      key={item.id}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.img
        src={item.image}
        alt="image"
        className="work-img"
        variants={variants}
        initial="initial"
        whileInView="animate"
      />

      <motion.h3 className="work-title">{item.title}</motion.h3>
      <a href="#" className="work-button">
        Demo <i className="bx bx-right-arrow-alt work--button-icon"></i>
      </a>
    </motion.div>
  );
}

export default WorkItems
