"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-950 text-white w-full shadow-lg fixed top-0 left-0 right-0 z-50" style={{height: '64px'}}>
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 h-16">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-yellow-400">
          <Image src="/logo.png" alt="Al Ettisam Logo" width={36} height={36} className="inline-block" />
          Al Ettisam
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/#services" className="hover:text-yellow-400 transition-colors">Services</Link>
          <Link href="/#gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link>
          <Link href="/#reviews" className="hover:text-yellow-400 transition-colors">Reviews</Link>
          <Link href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          {/* Fullscreen overlay */}
          <div className="fixed inset-0 z-40 bg-black bg-opacity-80 md:hidden" onClick={() => setMenuOpen(false)}></div>
          {/* Centered mobile menu with close button */}
          <div className="md:hidden fixed inset-0 top-16 bg-gray-950 z-50 flex flex-col justify-center items-center animate-slide-down h-[calc(100vh-64px)]">
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
              style={{zIndex: 60}}
            >
              &times;
            </button>
            <nav className="w-full flex flex-col items-center gap-6 mt-8">
              <Link href="/#services" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/#gallery" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Gallery</Link>
              <Link href="/#reviews" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Reviews</Link>
              <Link href="/#contact" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link href="/blog" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Blog</Link>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
