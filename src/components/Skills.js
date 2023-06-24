import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
    '
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
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:circularDarkLg
        md:bg-circularLightMd md:dark:circularDarkMd
        sm:bg-circularLightSm sm:dark:circularDarkSm
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
            lg:p-6 md:p-4 xs:text-xs xs:p-2
          '
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