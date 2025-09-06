"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function PublicationsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const publications = [
    {
      title: "Hybrid Solutions for Modern Conflicts: Evaluating the Promise and Pitfalls of the Arb-Med-Arb Protocol",
      journal: "Indian Review of International Arbitration",
      details: "Vol. 5 Issue 1 (2025)",
      link: "http://www.iriarb.com/",
      abstract: "This article examines the growing adoption of the Arb-Med-Arb protocol in international dispute resolution, analyzing its effectiveness in resolving complex cross-border conflicts while addressing potential challenges in implementation."
    }
  ];

  const researchInterests = [
    {
      title: "International Arbitration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C49A6C] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        "Cross-border dispute resolution mechanisms",
        "Enforcement of arbitral awards",
        "Institutional arbitration rules and procedures"
      ]
    },
    {
      title: "Alternative Dispute Resolution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C49A6C] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        "Hybrid dispute resolution processes",
        "Mediation and negotiation techniques",
        "Online dispute resolution platforms"
      ]
    }
  ];

  return (
    <section id='publication' className={`bg-[#F9F5F0] py-8 px-4 md:py-16 md:px-6 transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-4xl px-2 md:px-4 lg:px-6 overflow-hidden">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-poppins text-2xl md:text-4xl font-bold text-[#4A2C2A] mb-4 animate-fade-in">
            Publications
          </h2>
          <div className="w-20 h-1 bg-[#C49A6C] mx-auto mb-4 transform transition-all duration-700 scale-x-0 animate-line-expand"></div>
          <p className="font-inter text-base md:text-lg text-[#1C1C1C] mt-4 max-w-2xl mx-auto animate-fade-in-up">
            Scholarly contributions to the field of international arbitration and dispute resolution
          </p>
        </div>

        {/* Publication Cards */}
        <div className="space-y-6 md:space-y-8">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="bg-white border border-[#E5E5E5] shadow-sm hover:shadow-lg hover:border-[#C49A6C] transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-4 md:p-6">
                {/* Publication Icon */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                  hoveredCard === index ? 'bg-[#C49A6C] scale-110' : 'bg-[#4A2C2A]'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                
                {/* Publication Title */}
                <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#4A2C2A] mb-2 transition-colors duration-300 hover:text-[#C49A6C]">
                  {pub.title}
                </h3>
                
                {/* Journal Details */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-2 mb-3 md:mb-4">
                  <span className="font-inter font-medium text-[#1C1C1C] text-sm md:text-base">
                    {pub.journal}
                  </span>
                  <span className="hidden sm:block text-[#C49A6C] text-sm">•</span>
                  <span className="font-inter text-xs md:text-sm text-[#1C1C1C]">
                    {pub.details}
                  </span>
                </div>
                
                {/* Abstract */}
                <p className="font-inter text-[#1C1C1C] text-sm md:text-base leading-relaxed mb-4 md:mb-6 border-l-4 border-[#C49A6C] pl-3 md:pl-4 italic transition-all duration-500 hover:pl-5">
                  {pub.abstract}
                </p>
                
                {/* Link Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Button 
                    className="bg-[#4A2C2A] hover:bg-[#5a3c3a] text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    Read Publication
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                  
                  <span className="font-inter text-xs md:text-sm text-[#1C1C1C] sm:text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 inline-block mr-1 text-[#C49A6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    128 views • 12 citations
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-12 md:mt-16">
          <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#4A2C2A] mb-6 md:mb-8 text-center animate-fade-in">
            Research Interests
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {researchInterests.map((interest, index) => (
              <Card 
                key={index} 
                className="bg-white border border-[#E5E5E5] shadow-sm hover:shadow-lg hover:border-[#C49A6C] transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-4 md:p-6">
                  <h4 className="font-poppins text-base md:text-lg font-semibold text-[#4A2C2A] mb-3 flex items-center transition-colors duration-300 hover:text-[#C49A6C]">
                    {interest.icon}
                    {interest.title}
                  </h4>
                  <ul className="font-inter text-xs md:text-sm text-[#1C1C1C] space-y-2">
                    {interest.items.map((item, i) => (
                      <li key={i} className="flex items-start transition-transform duration-300 hover:translate-x-1">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-[#C49A6C] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Publications */}
        <div className="mt-12 md:mt-16 bg-[#4A2C2A] rounded-lg p-6 md:p-8 text-center transition-all duration-500 transform hover:scale-[1.02] animate-fade-in">
          <h3 className="font-poppins text-xl md:text-2xl font-semibold text-white mb-4">
            Forthcoming Research
          </h3>
          <p className="font-inter text-[#F9F5F0] text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Currently working on a paper examining the impact of artificial intelligence on international arbitration procedures and ethics.
          </p>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#4A2C2A] transition-all duration-300 transform hover:scale-105">
            Request Preprint
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
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
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-line-expand {
          animation: lineExpand 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}