'use client'
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function ExperiencePage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Helper function to assign refs
  const addToRefs = useCallback((el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    
    // Set up intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSectionRefs = sectionRefs.current;
    const currentObserver = observerRef.current;

    currentSectionRefs.forEach((ref) => {
      if (ref) currentObserver.observe(ref);
    });

    return () => {
      currentSectionRefs.forEach((ref) => {
        if (ref) currentObserver.unobserve(ref);
      });
    };
  }, []);

  const experiences = [
    {
      period: "2025 – Present",
      title: "Associate – Chambers of Justice (Retd.) Indu Malhotra",
      details: [
        "International Arbitration, Construction Arbitration",
        "Tribunal Secretary in high-value arbitral proceedings"
      ]
    },
    {
      period: "2024 – 2025",
      title: "Intern – Singapore International Arbitration Centre",
      details: [
        "Case management, procedural analysis, award scrutiny"
      ]
    },
    {
      period: "2023 – 2024",
      title: "Tribunal Secretary – Office of Mr. Bimal Julka",
      details: [
        "Arbitration, Commercial & Construction disputes"
      ]
    },
    {
      period: "2023 – 2024",
      title: "Legal Associate – AEKOM Legal",
      details: [
        "Commercial disputes, insolvency, energy & construction arbitration"
      ]
    },
    {
      period: "2022 – 2023",
      title: "Law Researcher – High Court of Delhi",
      details: [
        "Worked on enforcement of arbitral awards, jurisdictional disputes"
      ]
    }
  ];

  return (
    <section id='experience' className="bg-[#F9F5F0] py-8 md:py-12 lg:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div 
          className="text-center mb-12 md:mb-16 transition-all duration-700 ease-out"
          ref={addToRefs}
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2C2A] mb-4 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-[#C49A6C] mx-auto mb-6 transition-all duration-1000 ease-out delay-300 scale-x-0 origin-center" 
               style={{ transform: isMounted ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className="font-inter text-base md:text-lg text-[#1C1C1C] mt-4 max-w-2xl mx-auto leading-relaxed">
            A journey through my professional career in arbitration and legal practice
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-0">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C49A6C] to-[#4A2C2A] transform -translate-x-1/2 transition-all duration-1000 ease-out"
               style={{ height: isMounted ? '100%' : '0%' }}></div>
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative transition-all duration-700 ease-out"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                ref={addToRefs}
                style={{
                  opacity: isMounted ? 1 : 0,
                  transform: isMounted ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: isMounted ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Timeline dot with subtle pulse animation when hovered */}
                <div className={`absolute w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#4A2C2A] border-4 border-[#F9F5F0] shadow-lg z-10 transition-all duration-300 ${
                  index % 2 === 0 ? 'left-3 md:left-1/2 md:-ml-3' : 'left-3 md:left-1/2 md:-ml-3'
                } ${hoveredItem === index ? 'ring-2 ring-[#C49A6C] scale-125' : ''}`}></div>
                
                {/* Connecting line animation on hover */}
                <div className={`absolute h-0.5 bg-[#C49A6C] top-2 md:top-3 transition-all duration-500 ${
                  index % 2 === 0 
                    ? 'left-5 right-0 md:left-1/2 md:right-1/2' 
                    : 'left-5 right-0 md:left-1/2 md:right-1/2'
                } ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 transition-all duration-300 ${
                  index % 2 === 0 
                    ? 'md:pr-8 md:text-right md:w-1/2 md:float-left' 
                    : 'md:pl-8 md:w-1/2 md:float-right'
                } ${hoveredItem === index ? 'transform translate-y-[-5px]' : ''}`}>
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block bg-[#4A2C2A] text-white text-xs md:text-sm font-medium py-1 md:py-2 px-3 md:px-4 rounded-full shadow-sm transition-all duration-300 hover:bg-[#5a3c3a] hover:scale-105">
                      {exp.period}
                    </span>
                  </div>
                  
                  <Card className="bg-white border border-[#E5E5E5] shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:border-[#C49A6C] group">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#4A2C2A] mb-3 md:mb-4 group-hover:text-[#5a3c3a] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <ul className="font-inter text-[#1C1C1C] space-y-2 md:space-y-3">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                            <svg className="w-4 h-4 text-[#C49A6C] mt-1 mr-2 md:mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="leading-relaxed text-sm md:text-base">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Clear float for alternating layout */}
                <div className="clear-both"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className="mt-12 md:mt-16 lg:mt-20 text-center transition-all duration-700 ease-out"
          ref={addToRefs}
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: isMounted ? `${experiences.length * 150 + 300}ms` : '0ms'
          }}
        >
          <Card className="bg-white border border-[#E5E5E5] shadow-sm max-w-2xl mx-auto transition-all duration-500 ease-out hover:shadow-lg hover:border-[#C49A6C] group">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-poppins text-xl font-semibold text-[#4A2C2A] mb-4 group-hover:text-[#5a3c3a] transition-colors duration-300">
                Continuous Professional Development
              </h3>
              <p className="font-inter text-[#1C1C1C] leading-relaxed text-base md:text-lg">
                Throughout my career, I have consistently engaged in professional development activities, 
                including arbitration workshops, international conferences, and specialized training programs 
                to stay at the forefront of dispute resolution practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add custom CSS for scroll animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}