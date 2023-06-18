import '@/styles/globals.css';
import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import { Component } from 'react';

const montserrat = Montserrat({ 
    subsets: ['latin'],
    variable: '--font-mont',
})

export default function RootLayout({ Component, pageProps }) {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/portfolio-website/src/pages/favicon.ico" />
        </Head>
        <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
            <Component {...pageProps} />
        </main>
    </>
    
  )
}