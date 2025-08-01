// src/components/Header.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Header (Full-width outer div) */}
      <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 text-slate-100 shadow-lg h-16 px-4">
        {/* Centered content container */}
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <a href="/" className="flex items-center h-10">
            <Image
              src="/logo.png"
              alt="Al Ettisam Car Seat Upholstery Logo"
              fill
              style={{ objectFit: 'contain' }}
              className="relative w-auto h-auto"
              priority
            />
          </a>

          {/* Right-side content container */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">Home</a>
              <a href="#services" className="text-white hover:text-yellow-300 transition-colors duration-200">Services</a>
              <a href="#gallery" className="text-white hover:text-yellow-300 transition-colors duration-200">Gallery</a>
              <a href="#contact" className="text-white hover:text-yellow-300 transition-colors duration-200">Contact</a>
            </nav>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Overlay) */}
      <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center h-16">
          <a href="/" className="flex items-center h-10">
            <Image
              src="/logo.png"
              alt="Al Ettisam Car Seat Upholstery Logo"
              fill
              style={{ objectFit: 'contain' }}
              className="relative w-auto h-auto"
            />
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-16 text-xl">
          <a onClick={() => setIsMenuOpen(false)} href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">Home</a>
          <a onClick={() => setIsMenuOpen(false)} href="#services" className="text-white hover:text-yellow-300 transition-colors duration-200">Services</a>
          <a onClick={() => setIsMenuOpen(false)} href="#gallery" className="text-white hover:text-yellow-300 transition-colors duration-200">Gallery</a>
          <a onClick={() => setIsMenuOpen(false)} href="#contact" className="text-white hover:text-yellow-300 transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;