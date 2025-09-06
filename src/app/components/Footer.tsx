'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className={`bg-[#4A2C2A] text-white py-8 md:py-12 px-4 sm:px-6 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-3 sm:mb-4">Garima Dhankhar</h3>
            <p className="text-[#F9F5F0] leading-relaxed font-inter mb-4 text-sm sm:text-base">
              Resolving disputes with expertise, strategy, and fairness in international arbitration and litigation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/garimadhankhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C49A6C] p-2 rounded-full hover:bg-[#d4aa7c] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 2.36 1 2.36 2.87V19z"/>
                </svg>
              </a>
              <a 
                href="mailto:legal.counsel@example.com" 
                className="bg-[#C49A6C] p-2 rounded-full hover:bg-[#d4aa7c] transition-all duration-300 transform hover:scale-110"
                aria-label="Send Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-100">
            <h4 className="text-lg font-semibold font-poppins mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              {['Home', 'About Me', 'Experience', 'Education', 'Publications', 'Skills', 'News & Updates', 'Contact'].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} 
                    className="text-[#F9F5F0] hover:text-[#C49A6C] transition-all duration-300 text-sm sm:text-base block py-1 transform hover:translate-x-1"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="text-lg font-semibold font-poppins mb-3 sm:mb-4">Areas of Expertise</h4>
            <ul className="space-y-2 font-inter">
              {[
                'International Arbitration',
                'Commercial Arbitration',
                'Construction Arbitration',
                'Dispute Resolution Strategy',
                'Legal Research & Drafting',
                'Arbitration-related Court Proceedings'
              ].map((expertise, index) => (
                <li 
                  key={index} 
                  className="text-[#F9F5F0] text-sm sm:text-base transition-all duration-300 hover:text-[#C49A6C] py-1"
                >
                  {expertise}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up delay-300">
            <h4 className="text-lg font-semibold font-poppins mb-3 sm:mb-4">Contact Information</h4>
            <div className="space-y-3 font-inter">
              <div className="flex items-start group">
                <div className="bg-[#C49A6C] p-1 rounded-full mr-3 mt-1 transition-all duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-[#F9F5F0] text-sm sm:text-base">+91 98765 43210</p>
                  <p className="text-xs sm:text-sm text-[#C49A6C]">Emergency contact available</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-[#C49A6C] p-1 rounded-full mr-3 mt-1 transition-all duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-[#F9F5F0] text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">legal.counsel@example.com</p>
              </div>
              <div className="flex items-start group">
                <div className="bg-[#C49A6C] p-1 rounded-full mr-3 mt-1 transition-all duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 11111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-[#F9F5F0] text-sm sm:text-base">New Delhi, India</p>
                  <p className="text-[#F9F5F0] text-sm sm:text-base">Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5a3c3a] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up delay-400">
          <p className="text-[#C49A6C] text-xs sm:text-sm font-inter mb-4 md:mb-0 text-center md:text-left">
            © {currentYear} Garima Dhankhar. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((item, index) => (
              <Link 
                key={index}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-[#C49A6C] hover:text-[#F9F5F0] text-xs sm:text-sm font-inter transition-all duration-300 transform hover:scale-105"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </footer>
  );
}