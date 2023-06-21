import React from 'react'

const Details = ({position, company, comapnyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={comapnyLink} target='_blank' className='text-primary capitalize'>{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time}  {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div className='w-[75%] mx-auto relative'>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    position="" company="" comapnyLink="" time="" address="" work=""
                />
                <Details 
                    position="Fresher" company="" comapnyLink="" time="" address="" work="I have the knowledge of HTML, CSS, JavaScript, React.Js, Next.Js, Redux, Bootstrap, TailwindCSS, SCSS, Git, and Github."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience