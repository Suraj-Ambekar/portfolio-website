import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/IMG_8076.jpg";

const about = () => {
  return (
    <>
        <Head>
            <title>Suraj Ambekar | About Page</title>
            <meta name="description" content="About page" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='py-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-6 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start '>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='font-medium'>
                            Hi, I'm Suraj Ambekar, a Front-End Web Developer with a passion for creating beautiful, and user-centered digital experiences. I am a <span className='text-red-600 font-bold '>fresher</span> in the field but <span className='text-red-600 font-bold'>I can code</span>. I am always looking for new and innovative ways to bring my vision to life.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that design is about more than just making things look pretty - It's about solving problems, creating intuitive, enjoyable experiences for users.
                        </p>
                        <p className='font-medium'>
                            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every self made project I work on. I look forward to the <span className='text-red-600 font-bold'>opportunity</span> to bring my skills and passion to <span className='text-red-600 font-bold'>your next project</span>.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt="Suraj Ambekar" className="w-full h-auto rounded-2xl" />                        
                    </div>
                </div>
            </Layout>
                       
        </main>
    </>
  )
}

export default about