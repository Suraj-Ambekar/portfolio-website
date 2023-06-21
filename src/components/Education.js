import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({type, time, place, info}) => {

    const reff = useRef(null);

    return <li ref={reff} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
        <Lilcon reference={reff} />
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);

    const {scrollYProgress} =useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>
        <div className='w-[75%] mx-auto relative'>
            <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' ref={ref} 
                style={{scaleY: scrollYProgress}}
            />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    type="Master Of Science In Information Technology"
                    time="2021-2023"
                    place="Guru Nanak Khalsa College, Mumbai"
                    info="CGPA: 9.38"
                />
                <Details 
                    type="Bachelor Of Science In Information Technology"
                    time="2018-2021"
                    place="Guru Nanak Khalsa College, Mumbai"
                    info="CGPA: 8.15"
                />
                <Details 
                    type="HSC (12th)"
                    time="2017-2018"
                    place="Maharshi Dayanand College, Mumbai"
                    info="Percentage: 62.62%"
                />
                <Details 
                    type="SSC (10th)"
                    time="2016-2017"
                    place="I.E.S S.V. Nabar Guruji Vidyalaya, Mumbai"
                    info="Percentage: 83.60%"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education