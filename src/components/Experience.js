// import React, { useRef } from 'react'
// import {motion, useScroll} from "framer-motion"
// import Lilcon from './Lilcon'

// const Details = ({position, company, comapnyLink, time, address, work}) => {

//     const reff = useRef(null);
//     const companyDuration = time == true ? `${time} | ${address}` : "";

//     return <li ref={reff} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
//         <Lilcon reference={reff} />
//         <motion.div
//             initial={{y:50}}
//             whileInView={{y:0}}
//             transition={{duration:0.5, type:"spring"}}
//         >
//             <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={comapnyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>{company}</a></h3>
//             <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
//                 {/* {time ? {time} | {address} : ""} */}
//                 {companyDuration}
//             </span>
//             {/* <p className='font-medium w-full md:text-sm'>
//                 {work}
//             </p> */}
//             <ul className='list-disc ml-6 font-medium w-full md:text-sm'>
//           {work.map((item, index) => (
//             <li key={index} className='mb-2'>
//               {item}
//             </li>
//           ))}
//         </ul>
//         </motion.div>
//     </li>
// }

// const Experience = () => {
//     const ref = useRef(null);

//     const {scrollYProgress} =useScroll(
//         {
//             target: ref,
//             offset: ["start center", "center start"]
//         }
//     )
//   return (
//     <div className='my-64'>
//         <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
//             Experience
//         </h2>
//         <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
//             <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
//                 md:w-[2px] md:left-[30px] xs:left-[20px]
//             ' ref={ref}
//                 style={{scaleY: scrollYProgress}}
//             />
//             <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
//                 <Details 
//                     position="" company="" comapnyLink="" time="" address="" work=""
//                 />
//                 <Details 
//     position="Software Development Engineer" 
//     company="Peoplehum" 
//     companyLink="https://www.peoplehum.com" 
//     time="01/2024 - Present" 
//     address="Mumbai, India" 
//     work={[
//       "Developed a scalable back-end for the Partner Portal, significantly improving system reliability and performance.",
//       "Automated billing with Stripe, reducing manual efforts by 40% and streamlining payment processes.",
//       "Optimized file handling using AWS S3, leading to faster uploads and a reduction in storage costs.",
//       "Integrated a calendar API, boosting scheduling efficiency and increasing partner engagement by 15%.",
//       "Collaborated on the frontend using Webflow to implement new features and improve the user experience."
//     ]}
// />

// <Details 
//     position="Associate Developer" 
//     company="Peoplehum" 
//     companyLink="https://www.peoplehum.com" 
//     time="07/2023 - 12/2023" 
//     address="Mumbai, India" 
//     work={[
//       "Enhanced API performance for the Customer Portal, improving system efficiency by 30%.",
//       "Added analytics and reporting features to the Customer Portal, enabling better insights into customer engagement.",
//       "Improved overall customer and user experience by refining front-end and back-end functionalities.",
//       "Developed new landing pages and enhanced SEO for Peoplehum and Engati websites using Webflow."
//     ]}
// />

//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Experience



import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lilcon from './Lilcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const reff = useRef(null);
    const companyDuration = time ? `${time} | ${address}` : '';

    return (
        <li ref={reff} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <Lilcon reference={reff} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <a href={companyLink} target='_blank' rel='noopener noreferrer' className='text-primary dark:text-primaryDark capitalize'>
                        {company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {companyDuration}
                </span>
                <ul className='list-disc ml-6 font-medium w-full md:text-sm'>
                    {work.map((item, index) => (
                        <li key={index} className='mb-2'>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'center start'],
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                    ref={ref}
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Software Development Engineer"
                        company="Peoplehum"
                        companyLink="https://www.peoplehum.com"
                        time="01/2024 - Present"
                        address="Mumbai, India"
                        work={[
                            "Developed a scalable back-end for the Partner Portal, significantly improving system reliability and performance.",
                            "Automated billing with Stripe, reducing manual efforts by 40% and streamlining payment processes.",
                            "Optimized file handling using AWS S3, leading to faster uploads and a reduction in storage costs.",
                            "Integrated a calendar API, boosting scheduling efficiency and increasing partner engagement by 15%.",
                            "Collaborated on the frontend using Webflow to implement new features and improve the user experience."
                        ]}
                    />
                    <Details
                        position="Associate Developer"
                        company="Peoplehum"
                        companyLink="https://www.peoplehum.com"
                        time="07/2023 - 12/2023"
                        address="Mumbai, India"
                        work={[
                            "Enhanced API performance for the Customer Portal, improving system efficiency by 30%.",
                            "Added analytics and reporting features to the Customer Portal, enabling better insights into customer engagement.",
                            "Improved overall customer and user experience by refining front-end and back-end functionalities.",
                            "Developed new landing pages and enhanced SEO for Peoplehum and Engati websites using Webflow."
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
