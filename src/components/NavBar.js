import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link href="/" target={"_blank"}>GitHub</Link>
        <Link href="/about" target={"_blank"}>LinkedIn</Link>
        <Link href="/projects" target={"_blank"}>Instagram</Link>
        <Link href="/articles" target={"_blank"}>Whatsapp</Link>
      </nav>
    </header>
  )
}

export default NavBar;