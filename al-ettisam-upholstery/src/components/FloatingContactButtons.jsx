// src/components/FloatingContactButtons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      {/* Phone Icon */}
      <a href="tel:0554969599" className="bg-white p-4 rounded-full shadow-lg text-gray-900 hover:scale-110 transition-transform duration-200">
        <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
      </a>
      {/* WhatsApp Icon */}
      <a href="https://wa.me/971551010341" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;