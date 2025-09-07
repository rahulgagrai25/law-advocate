'use client'
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useRef } from 'react';

export default function EducationPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRefs = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Helper function to assign refs
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const educationItems = [
    {
      period: "2024 – 2025",
      institution: "National University of Singapore",
      degree: "LL.M. International Arbitration & Dispute Resolution",
      details: [
        "Specialized in international arbitration practices and procedures",
        "Focused on cross-border dispute resolution mechanisms"
      ]
    },
    {
      period: "2017 – 2022",
      institution: "Jindal Global Law School",
      degree: "BA.LLB. (Law) – ADR Society Member",
      details: [
        "Comprehensive legal education with focus on alternative dispute resolution",
        "Active member of the ADR Society participating in moot courts and seminars"
      ]
    },
    {
      period: "2021",
      institution: "NUS Summer School",
      degree: "International Arbitration, ADR, Human Rights & Law and Technology",
      details: [
        "Intensive summer program covering specialized legal topics",
        "Exposure to international legal frameworks and emerging areas of law"
      ]
    }
  ];

  return (
    <section id='education' className="bg-[#F9F5F0] py-8 md:py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div 
          className="text-center mb-8 md:mb-12 transition-all duration-700 ease-out"
          ref={addToRefs}
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A2C2A] mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-[#C49A6C] mx-auto transition-all duration-1000 ease-out delay-300 scale-x-0 origin-center" 
               style={{ transform: isMounted ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className="font-inter text-base md:text-lg text-[#1C1C1C] mt-4 max-w-2xl mx-auto">
            Academic foundation in law with specialized focus on international arbitration and dispute resolution
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {educationItems.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-white border border-[#E5E5E5] shadow-sm hover:shadow-lg hover:border-[#C49A6C] transition-all duration-500 ease-out h-full flex flex-col group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              ref={addToRefs}
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: isMounted ? `${index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-4 md:p-6 flex-1">
                {/* Institution Icon */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ease-out ${
                  activeIndex === index ? 'bg-[#C49A6C] scale-110' : 'bg-[#4A2C2A]'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                
                {/* Period */}
                <span className="inline-block bg-[#4A2C2A] text-white text-xs font-medium py-1 px-2 rounded mb-3 transition-all duration-300 hover:bg-[#5a3c3a] hover:scale-105">
                  {edu.period}
                </span>
                
                {/* Institution */}
                <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#4A2C2A] mb-2 group-hover:text-[#5a3c3a] transition-colors duration-300">
                  {edu.institution}
                </h3>
                
                {/* Degree */}
                <p className="font-inter font-medium text-[#1C1C1C] mb-3 md:mb-4 text-sm md:text-base">
                  {edu.degree}
                </p>
                
                {/* Details */}
                <ul className="font-inter text-xs md:text-sm text-[#1C1C1C] space-y-1 md:space-y-2 mt-4">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-[#C49A6C] mt-0.5 mr-2 flex-shrink-0 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Qualifications */}
        <div 
          className="mt-12 md:mt-16 transition-all duration-700 ease-out"
          ref={addToRefs}
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: isMounted ? `${educationItems.length * 150 + 300}ms` : '0ms'
          }}
        >
          <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#4A2C2A] mb-6 md:mb-8 text-center">
            Additional Qualifications & Certifications
          </h3>
          
          <Card className="bg-white border border-[#E5E5E5] shadow-sm max-w-2xl mx-auto transition-all duration-500 ease-out hover:shadow-lg hover:border-[#C49A6C] group">
            <CardContent className="p-4 md:p-6">
              <ul className="font-inter text-[#1C1C1C] space-y-2 md:space-y-3">
                {[
                  "India-qualified lawyer with active bar membership",
                  "Multiple arbitration competition awards and recognitions",
                  "Ongoing professional development in international arbitration practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C49A6C] mt-0.5 mr-2 md:mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
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