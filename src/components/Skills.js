import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
      whileHover={{scale: 1.1}}   
      initial={{x:0, y:0}}
      whileInView={{x:x,y:y, transition: {duration: 1.5}}}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
          whileHover={{scaleX: 1.5, scale: 1.2}}   
        >
          Web
        </motion.div>

        <Skill name="HTML" x="0vw" y="-11vw" />
        <Skill name="CSS" x="-20vw" y="0vw" />
        <Skill name="JavaScript" x="20vw" y="0vw" />
        <Skill name="ReactJs" x="-0vw" y="11vw" />
        <Skill name="NextJs" x="19vw" y="-10vw" />
        <Skill name="Redux" x="-19vw" y="-10vw" />
        <Skill name="Bootstrap" x="-19vw" y="10vw" />
        <Skill name="TailwindCSS" x="19vw" y="10vw" />
        <Skill name="SCSS" x="0vw" y="-19vw" />
        <Skill name="Git" x="-33vw" y="0vw" />
        <Skill name="GitHub" x="33vw" y="0vw" />
      </div>

    </>
  )
}

export default Skills