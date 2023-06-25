import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Component } from 'react';

const montserrat = Montserrat({ 
    subsets: ['latin'],
    variable: '--font-mont',
})

export default function RootLayout({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
          <NavBar />
          <AnimatePresence mode='wait'>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
          <Footer />
        </main>
    </>
    
  )
}