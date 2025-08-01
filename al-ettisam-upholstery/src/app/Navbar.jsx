"use client";

import React, { useState } from 'react';
import Image from 'next/image';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-950 text-white w-full shadow-lg fixed top-0 left-0 right-0 z-50" style={{height: '64px'}}>
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 h-16">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-yellow-400">
          <Image src="/logo.png" alt="Al Ettisam Logo" width={36} height={36} className="inline-block" />
          Al Ettisam
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-yellow-400 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
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
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60 md:hidden" onClick={() => setMenuOpen(false)}></div>
          <div className="md:hidden fixed top-16 left-0 w-full bg-gray-950 rounded-b-lg shadow-lg z-50 animate-slide-down">
            <div className="flex flex-col px-4 pb-4">
              <a href="#services" className="block py-2 px-2 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#gallery" className="block py-2 px-2 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(false)}>Gallery</a>
              <a href="#reviews" className="block py-2 px-2 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="block py-2 px-2 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
