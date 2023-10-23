import React from 'react'
import "./Project.css"
import Work from './Work'
import { motion } from 'framer-motion'

const Project = () => {
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
    <motion.section
      className="project section"
      id="projects"
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
        Projects
      </motion.h2>
      <motion.span
        className="section-subtitle"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        Recent Works
      </motion.span>

      <Work />
    </motion.section>
  );
}

export default Project
