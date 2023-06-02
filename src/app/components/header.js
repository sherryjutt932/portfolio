'use client';

import React from 'react'
import Link from 'next/link';
import Style from '../styles/header.css'
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  return (
    <header>
      <nav className = {Style.nav}>
        <ul>
            <li className={pathname.startsWith("/") ? "active" : ""}><Link href="/">Home</Link></li>
            <li className={pathname == "/blog" ? "active" : ""}><Link href="/ ">Blogs</Link></li>
            <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 
