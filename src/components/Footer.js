import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-xl font-light text-gray-800 hover:text-black transition-colors duration-200"
          >
            Compliance Accountants
          </Link>

          {/* Footer Nav */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-gray-900 font-light italic transition-colors duration-200"
            >
              Services
            </Link>

            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 font-light italic transition-colors duration-200"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 font-light italic transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-gray-600 text-sm font-light">
          © {new Date().getFullYear()} Compliance Accountants. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
