import AnimatedText from '@/components/AnimatedText'
import { GitHub } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects images/project1.JPG';

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article>
            <Link href={link} target="_blank">
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div>
                <span>{type}</span>
                <Link href={link} target="_blank">
                    <h2>{title}</h2>
                </Link>
                <p>{summary}</p>
                <div>
                    <Link href={github} target="_blank"><GitHub /></Link>
                    <Link href={link} target="_blank">Demo</Link>
                </div>
            </div>
        </article>
        
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Suraj Ambekar | Projects Page</title>
            <meta name="description" content="Projects page" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16' >
                <AnimatedText text="Imagination Trumps knowledge!" />
                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="CineMagic: A Movie Rating Website"
                            img={project1}
                            summary="A feature-A Movie Rating Website using React, SCSS, and TMDB (database api) . It shows detail regarding almost all the movies. You can easily search any movie and apply filter to search specific genre movies."
                            link="https://cinemagic-website.netlify.app/"
                            github="https://github.com/Suraj-Ambekar/CineMagic"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        Project-1
                    </div>
                    <div className='col-span-6'>
                        Project-2
                    </div>
                    <div className='col-span-12'>
                        Project-3
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects