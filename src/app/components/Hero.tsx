'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HeroPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const highlights = [
    {
      title: "Associate, Chambers of Justice (Retd.) Indu Malhotra",
      description: "Working under one of India's most respected legal professionals"
    },
    {
      title: "LL.M. (International Arbitration & Dispute Resolution)",
      description: "National University of Singapore"
    },
    {
      title: "Professional Experience",
      description: "SIAC, High Court of Delhi & AEKOM Legal"
    },
    {
      title: "Published Author",
      description: "Indian Review of International Arbitration"
    }
  ];

  const handleDownloadCV = () => {
    // This would typically link to a PDF file
    const link = document.createElement('a');
    link.href = '/cv-garima-dhankhar.pdf';
    link.download = 'Garima_Dhankhar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='home' className="min-h-screen bg-[#F9F5F0] py-8 md:py-16 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="flex-1 w-full">
            <div 
              className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ease-out ${
                isImageLoaded 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-90 -rotate-3'
              }`}
            >
              <Image
                src="/1.png" // Replace with actual image path
                alt="Garima Dhankhar - Professional Lawyer"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 
              className={`font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2C2A] mb-4 transition-all duration-700 ease-out ${
                isMounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Garima Dhankhar
            </h1>
            <p 
              className={`font-inter text-lg md:text-xl text-[#1C1C1C] mb-6 transition-all duration-700 ease-out delay-100 ${
                isMounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Lawyer (India-qualified) | International Arbitration | LL.M. (NUS)
            </p>
            <p 
              className={`font-inter text-base md:text-lg text-[#1C1C1C] leading-relaxed mb-8 transition-all duration-700 ease-out delay-200 ${
                isMounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Resolving disputes with expertise, strategy, and fairness in international
              arbitration and litigation.
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 ease-out delay-300 ${
                isMounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Button className="bg-[#4A2C2A] hover:bg-[#3A201E] text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105">
                Contact Me
              </Button>
              <Button 
                onClick={handleDownloadCV}
                className="border border-[#4A2C2A] text-[#4A2C2A] hover:bg-[#4A2C2A] hover:text-white bg-transparent px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16 lg:mt-24 transition-all duration-1000 ease-out delay-500 ${
            isMounted 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-white border border-[#E5E5E5] shadow-sm hover:shadow-lg transition-all duration-500 hover:border-[#C49A6C] hover:-translate-y-2"
              style={{
                transitionDelay: isMounted ? `${index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-poppins text-base sm:text-lg font-semibold text-[#4A2C2A] mb-2 sm:mb-3">
                  {highlight.title}
                </h3>
                <p className="font-inter text-sm text-[#1C1C1C] leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}