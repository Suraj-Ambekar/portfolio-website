import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Suraj Ambekar - Portfolio website</title>
                <meta name="description" content="portfolio website of Suraj Ambekar" />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen">
                <Layout>
                    <div className='flex items-center justify-between w-full'>
                        <Image src="" alt="Suraj Ambekar" className="w-full h-auto" />
                    </div>
                </Layout>
            </main>
        </>
        
    )
  }