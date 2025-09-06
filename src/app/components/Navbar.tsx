'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publication' },
    { name: 'Skills', href: '#skills' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 bg-[#4A2C2A] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#3A201E]">
                <span className="text-white font-bold font-poppins">GD</span>
              </div>
              <span className="text-[#4A2C2A] font-bold text-xl font-poppins hidden sm:block">
                Garima Dhankhar
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#4A2C2A] hover:text-[#C49A6C] font-medium transition-all duration-300 font-inter hover:scale-105"
                  style={{
                    transitionDelay: isMounted ? `${index * 50}ms` : '0ms',
                    opacity: isMounted ? 1 : 0,
                    transform: isMounted ? 'translateY(0)' : 'translateY(-10px)'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block transition-all duration-300 hover:scale-105">
              <Button className="bg-[#4A2C2A] hover:bg-[#3A201E] text-white transition-colors duration-300">
                Contact Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-[#4A2C2A] focus:outline-none focus:ring-2 focus:ring-[#C49A6C] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md rounded-lg mx-2 shadow-lg border border-[#E5E5E5] overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 mt-2'
              : 'max-h-0 opacity-0 -mt-4'
          }`}
        >
          <nav className="flex flex-col space-y-1 p-3">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#4A2C2A] hover:text-[#C49A6C] font-medium py-2 px-4 rounded-md hover:bg-[#F9F5F0] transition-all duration-300 font-inter"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-2 bg-[#4A2C2A] hover:bg-[#3A201E] text-white transition-colors duration-300">
              Contact Me
            </Button>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 md:h-20 transition-all duration-300"></div>
    </>
  );
}