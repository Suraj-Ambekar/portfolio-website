import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build Width <span className='text-primary text-2xl px-1'>&#9825;</span>
                by&nbsp; <Link href="https://www.linkedin.com/in/suraj-ambekar/" className="underline underline-offset-2 hover:text-red-600" target={"_blank"}>Suraj Ambekar</Link>
            </div>
            <Link href="https://www.linkedin.com/in/suraj-ambekar/" target={"_blank"} className="underline underline-offset-2 hover:text-red-600">Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer;