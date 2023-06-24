import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/IMG_8077.jpg";
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {

    const [fresher, setFresher] = useState(false);
    const [code, setCode] = useState(false);
    const [opportunity, setOpportunity] = useState(false);
    const [job, setJob] = useState(false);

    const handleFresher = () => {
        setFresher(true);
    }
    const handleCode = () => {
        setCode(true);
    }
    const handleOpportunity = () => {
        setOpportunity(true);
    }
    const handleJob = () => {
        setJob(true);
    }

    const handleFresherLeave = () => {
        setFresher(false);
    }
    const handleCodeLeave = () => {
        setCode(false);
    }
    const handleOpportunityLeave = () => {
        setOpportunity(false);
    }
    const handleJobLeave = () => {
        setJob(false);
    }

  return (
    <>
        <Head>
            <title>Suraj Ambekar | About Page</title>
            <meta name="description" content="About page" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='py-16'>
                <AnimatedText 
                    text={fresher === true ? "I Am A Fresher": 
                        code === true ? "But I Can Code" : 
                        opportunity === true ? "Looking For Job" : 
                        job === true ? "In Your Next Project": 
                        "Passion Fuels Purpose!"
                    }         
                    className='mb-16'
                />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start '>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                        <p className='font-medium'>
                            Hi, I'm Suraj Ambekar, a Front-End Web Developer with a passion for creating beautiful, and user-centered digital experiences. I am a <span className='text-red-600 font-bold ' onMouseOver={handleFresher} onMouseLeave={handleFresherLeave}>fresher</span> in the field but <span className='text-red-600 font-bold' onMouseOver={handleCode} onMouseLeave={handleCodeLeave}>I can code</span>. I am always looking for new and innovative ways to bring my vision to life.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that design is about more than just making things look pretty - It's about solving problems, creating intuitive, enjoyable experiences for users.
                        </p>
                        <p className='font-medium'>
                            Whether I'm working on a website, mobile app, or other  digital product, I bring my commitment to design excellence and user-centered thinking to every self made project I work on. I look forward to the <span className='text-red-600 font-bold' onMouseOver={handleOpportunity} onMouseLeave={handleOpportunityLeave}>opportunity</span> to bring my skills and passion to <span className='text-red-600 font-bold' onMouseOver={handleJob} onMouseLeave={handleJobLeave}>your next project</span>.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="Suraj Ambekar" className="w-full h-auto rounded-2xl" />                        
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                1
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Aschievements</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                10+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                0
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of experience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
                       
        </main>
    </>
  )
}

export default about