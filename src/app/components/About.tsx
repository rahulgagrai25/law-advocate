'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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

  return (
    <section id='about' className="bg-[#F9F5F0] py-8 md:py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#C49A6C] mx-auto transition-all duration-1000 ease-out delay-300 scale-x-0 origin-left" 
               style={{ transform: isMounted ? 'scaleX(1)' : 'scaleX(0)' }}></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start">
          {/* Image Section */}
          <div className="w-full lg:w-2/5">
            <div 
              className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ease-out ${
                isImageLoaded 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-90 -rotate-3'
              }`}
              ref={addToRefs}
            >
              <Image
                src="/3.png"
                alt="Garima Dhankhar - Professional Lawyer"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            
            {/* Quick Facts */}
            <div 
              className="mt-6 md:mt-8 bg-white p-4 md:p-6 rounded-lg shadow-sm border border-[#E5E5E5] transition-all duration-700 ease-out"
              ref={addToRefs}
            >
              <h3 className="font-poppins text-lg font-semibold text-[#4A2C2A] mb-4 text-center">
                Quick Facts
              </h3>
              <div className="space-y-3">
                {[
                  "Indian-qualified lawyer",
                  "LL.M. from National University of Singapore",
                  "Associate at Chambers of Justice (Retd.) Indu Malhotra",
                  "Published author in Indian Review of International Arbitration"
                ].map((fact, index) => (
                  <div 
                    key={index} 
                    className="flex items-start transition-all duration-500 ease-out"
                    style={{
                      transitionDelay: isMounted ? `${index * 100}ms` : '0ms',
                      opacity: isMounted ? 1 : 0,
                      transform: isMounted ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <div className="w-5 h-5 bg-[#4A2C2A] rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 transition-all duration-300 hover:scale-110">
                      <div className="w-1.5 h-1.5 bg-[#C49A6C] rounded-full"></div>
                    </div>
                    <p className="font-inter text-sm text-[#1C1C1C]">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5">
            <div 
              className="prose max-w-none transition-all duration-700 ease-out"
              ref={addToRefs}
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <p className="font-inter text-base md:text-lg text-[#1C1C1C] leading-relaxed mb-6">
                I am an Indian-qualified lawyer with an LL.M. in International Arbitration and
                Dispute Resolution from the National University of Singapore. I currently work as an Associate
                at the Chambers of Justice (Retd.) Indu Malhotra, Member of the Court at the Permanent Court
                of Arbitration, where I also serve as Tribunal Secretary in high-value arbitral proceedings.
              </p>

              <div 
                className="bg-[#F2EAE1] p-4 md:p-6 rounded-lg mb-6 border-l-4 border-[#C49A6C] transition-all duration-700 ease-out hover:shadow-md"
                ref={addToRefs}
              >
                <h3 className="font-poppins text-xl font-semibold text-[#4A2C2A] mb-3">
                  Professional Focus
                </h3>
                <p className="font-inter text-base text-[#1C1C1C] leading-relaxed">
                  My practice focuses on institutional arbitration, advocacy, and arbitration-related court 
                  proceedings. I take a strategic, detail-oriented, and commercially aware approach to dispute 
                  resolution, informed by my exposure to international arbitration centers, high-stakes disputes, 
                  and judicial reasoning.
                </p>
              </div>
              
              <h3 className="font-poppins text-xl font-semibold text-[#4A2C2A] mb-4 mt-8">
                Experience & Contributions
              </h3>
              
              <p className="font-inter text-base md:text-lg text-[#1C1C1C] leading-relaxed mb-8">
                I am passionate about advancing efficient and innovative dispute resolution mechanisms 
                and have contributed to the field through publications in the Indian Review of International 
                Arbitration. My experience spans work with the Singapore International Arbitration Centre (SIAC), 
                the High Court of Delhi, and AEKOM Legal.
              </p>
            </div>

            <Button 
              className="bg-[#4A2C2A] hover:bg-[#3A201E] text-white px-6 py-4 transition-all duration-300 hover:scale-105"
              ref={addToRefs}
            >
              View My Credentials
            </Button>
          </div>
        </div>

        {/* Key Strengths Section */}
        <div 
          className="mt-12 md:mt-16 transition-all duration-700 ease-out"
          ref={addToRefs}
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h3 className="font-poppins text-2xl font-semibold text-[#4A2C2A] mb-6 md:mb-8 text-center">
            Key Strengths
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Strategic Approach",
                description: "Developing comprehensive legal strategies tailored to each client's unique situation"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "International Expertise",
                description: "Specialized knowledge in international arbitration with global perspective"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                title: "Client Advocacy",
                description: "Dedicated to protecting client interests with vigorous and ethical representation"
              }
            ].map((strength, index) => (
              <div 
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-[#E5E5E5] text-center transition-all duration-500 ease-out hover:shadow-lg hover:border-[#C49A6C] hover:-translate-y-2"
                style={{
                  transitionDelay: isMounted ? `${index * 150}ms` : '0ms',
                  opacity: isMounted ? 1 : 0,
                  transform: isMounted ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="w-12 h-12 bg-[#4A2C2A] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110">
                  {strength.icon}
                </div>
                <h4 className="font-poppins text-lg font-semibold text-[#4A2C2A] mb-2">{strength.title}</h4>
                <p className="font-inter text-sm text-[#1C1C1C]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS for scroll animations */}
      <style jsx>{`
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
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}