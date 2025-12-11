'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Header = ({ activePage = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', slug: 'services' },
    { name: 'About', slug: 'about' },
    { name: 'Contact', slug: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="px-2 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo/Title */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-black transition-colors duration-200"
            >
              Compliance Accountants
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <a
      key={item.slug}
      href={`${item.slug}`}
      className={`text-gray-700 hover:text-gray-900 font-light italic transition-colors duration-200 ${
        activePage === item.slug
          ? 'font-semibold border-b-2 border-black pb-1'
          : ''
      }`}
    >
      {item.name}
    </a>
  ))}
</nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.slug}
                  href={`${item.slug}`}
                  className={`text-gray-700 hover:text-gray-900 py-2 transition-colors duration-200 ${
                    activePage === item.slug
                      ? 'font-semibold border-l-4 border-black pl-3'
                      : 'pl-4'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;