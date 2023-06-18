import '@/styles/globals.css';
import { Montserrat } from 'next/font/google'
import { Component } from 'react';

const montserrat = Montserrat({ 
    subsets: ['latin'],
    variable: '--font-mont',
})

export default function RootLayout({ Component, pageProps }) {
  return (
    <>
        <main className={`${montserrat.variable} font-mont`}>
            <Component {...pageProps} />
        </main>
    </>
    
  )
}