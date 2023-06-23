import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

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
                    <li>Featured articles-1</li>
                    <li>Featured articles-2</li>
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles