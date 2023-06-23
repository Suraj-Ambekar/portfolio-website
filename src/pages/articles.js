import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import article1 from "../../public/images/article images/article1.jpg"
import article2 from "../../public/images/article images/article2.jpg"
import article3 from "../../public/images/article images/article3.jpg"
import article4 from "../../public/images/article images/article4.jpg"
import article5 from "../../public/images/article images/article5.png"
import article6 from "../../public/images/article images/article6.png"

const FramerImage = motion(Image)

const FeaturedArticle = ({img,title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-red-900 rounded-br-3xl' />
            <Link
                href={link}
                target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale: 1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <li>
            <Link href={link} target="_blank">
                <h2>{title}</h2>
            </Link>
            <span>{date}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Suraj Ambekar | Article Page</title>
            <meta name="description" content="Article page" />
        </Head>
        <main>
            <Layout className='pt-16 mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <AnimatedText text="Words Can Change The World!" className='mb-16' />
                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle 
                        title="How to Become a Front-End Developer?"
                        summary="Front-end developers are nothing but web developers who are responsible for the design and implementation of the web. Users like us, want an interface where we can do online shopping, texting, browsing, and many more. The front-end developer is the one who creates this interface."
                        time="7 min read"
                        link="https://www.showwcase.com/show/18485/how-to-become-a-front-end-developer"
                        img={article1}
                    />
                    <FeaturedArticle 
                        title="12 Steps You Need To Take Before Deploying Your Website"
                        summary="When you are finished developing a website and you have done testing, now the biggest part comes that you want to make your website live in search engines. For that, you have to deploy your website. Deploying a website looks easy but you have to check some steps before deploying your website to make sure everything is fine."
                        time="6 min read"
                        link="https://www.showwcase.com/show/18714/12-steps-you-need-to-take-before-deploying-your-website"
                        img={article2}
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article 
                        title="Introduction to JavaScript"
                        date="17 December, 2022"
                        link="https://www.showwcase.com/show/19402/introduction-to-javascript"
                        img={article3}
                    />
                    <Article 
                        title="How to create a Responsive Website"
                        date="9 December, 2022"
                        link="https://www.showwcase.com/show/19194/how-to-create-a-responsive-website"
                        img={article4}
                    />
                    <Article 
                        title="Free Resources For Your Web Development Career"
                        date="3 December, 2022"
                        link="https://www.showwcase.com/show/18962/free-resources-for-your-web-development-career"
                        img={article5}
                    />
                    <Article 
                        title="Step-by-step breakdown of a resume"
                        date="26 January, 2023"
                        link="https://www.showwcase.com/show/30423/step-by-step-breakdown-of-a-resume-that-got-shortlisted-by-google-microsoft-and-amazon"
                        img={article6}
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles