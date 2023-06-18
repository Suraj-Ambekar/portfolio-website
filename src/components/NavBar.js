import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GitHub, Instagram, LinkedIn, Whatsapp } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({href, title, className=""})=> {

  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
      `}>
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' />
      </nav>

      <nav className='flex justify-center items-center flex-wrap'>
        <motion.a 
          href="https://github.com/suraj-Ambekar/" target={"_blank"} 
          whileHover={{y:-2}} whileTap={{scale: 0.9}} 
          className='w-6 mx-3'
        >
          <GitHub />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/suraj-ambekar/" target={"_blank"} 
          whileHover={{y:-2}} whileTap={{scale: 0.9}} 
          className='w-6 mx-3'
        >
          <LinkedIn />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/ambekarsuraj03_/" target={"_blank"} 
          whileHover={{y:-2}} whileTap={{scale: 0.9}} 
          className='w-6 mx-3'
        >
          <Instagram />
        </motion.a>
        <motion.a 
          href="https://api.whatsapp.com/send/?phone=9819298932&text&type=phone_number&app_absent=0" target={"_blank"} 
          whileHover={{y:-2}} whileTap={{scale: 0.9}} 
          className='w-6 ml-3'
        >
          <Whatsapp />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar;