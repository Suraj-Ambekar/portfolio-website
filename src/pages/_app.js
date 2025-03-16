// import Footer from '@/components/Footer';
// import NavBar from '@/components/NavBar';
// import '@/styles/globals.css';
// import { AnimatePresence } from 'framer-motion';
// import { Montserrat } from 'next/font/google'
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { Component } from 'react';
// // import feviconIcon from "../../public/images/favicon.ico"

// const montserrat = Montserrat({
//     subsets: ['latin'],
//     variable: '--font-mont',
// })

// export default function RootLayout({ Component, pageProps }) {
//   const router = useRouter();
//   return (
//     <>
//         <Head>
//           <meta name="viewport" content="width=device-width, initial-scale=1"/>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
//           <NavBar />
//           <AnimatePresence mode='wait'>
//             <Component key={router.asPath} {...pageProps}/>
//           </AnimatePresence>
//           <Footer />
//         </main>
//     </>

//   )
// }

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({ Component, pageProps }) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${
          hydrated ? montserrat.variable : ""
        } font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
