import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './cursor.css'


const Cursors = () => {
  const [mousePosition, setMousePosition] = useState({x: 0 , y:0})

 
  const [cursorVariant, setCursorVariant ] = useState({x: 0 , y:0})

   
 useEffect(() => {
  const mouseMove =(e) =>{
    setMousePosition({ x:e.clientX , y:e.clientY})
  }
  window.addEventListener('mousemove', mouseMove)


   return ()=>{
    window.removeEventListener("mousemove", mouseMove)
   }
 }, [])

   const variants= {
  default:{
    x: mousePosition.x +5,
    y: mousePosition.y +5,
  }
 }
 
  return (
    <motion.div className='cursor'
    variants={variants}
    animate="default"
    />

   
  )
}

export default Cursors
