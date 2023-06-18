import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from "../pages/new.png";

export default function Home() {
    return (
        <>
            <Head>
                <title>Suraj Ambekar - Portfolio website</title>
                <meta name="description" content="portfolio website of Suraj Ambekar" />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen">
                <Layout className='pt-0'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='w-1/2'>
                            <Image src={profilePic} alt="Suraj Ambekar" className="w-full h-auto" />
                        </div>
                        
                    </div>
                </Layout>
            </main>
        </>
        
    )
  }