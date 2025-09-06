'use client'
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function SkillsPage() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  
  const skillCategories = [
    {
      title: "Arbitration Expertise",
      skills: [
        { name: "Domestic Arbitration", proficiency: 95 },
        { name: "International Arbitration", proficiency: 90 },
        { name: "Commercial Arbitration", proficiency: 85 }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Legal Practice",
      skills: [
        { name: "Legal Research & Drafting", proficiency: 92 },
        { name: "Dispute Resolution Strategy", proficiency: 88 },
        { name: "Court Proceedings", proficiency: 85 }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    }
  ];

  const allSkills = [
    "Domestic & International Arbitration",
    "Commercial Arbitration",
    "Legal Research & Drafting",
    "Dispute Resolution Strategy",
    "Court Proceedings related to Arbitration",
    "Construction Arbitration",
    "International Commercial Law",
    "Arbitral Award Enforcement",
    "Mediation & Alternative Dispute Resolution",
    "Cross-border Dispute Resolution"
  ];

  return (
    <section id='skills' className="bg-[#F9F5F0] py-12 px-6 md:py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#4A2C2A] mb-4">
            Legal Expertise
          </h2>
          <div className="w-20 h-1 bg-[#C49A6C] mx-auto"></div>
          <p className="font-inter text-lg text-[#1C1C1C] mt-4 max-w-2xl mx-auto">
            Specialized skills and expertise in arbitration and dispute resolution
          </p>
        </div>

        {/* Skills Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C49A6C] transition-all duration-300"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${
                    hoveredCategory === index ? 'bg-[#C49A6C]' : 'bg-[#4A2C2A]'
                  }`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-[#4A2C2A]">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-inter font-medium text-[#1C1C1C]">
                          {skill.name}
                        </span>
                        <span className="font-inter text-[#1C1C1C]">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-[#E5E5E5] rounded-full h-2.5">
                        <div 
                          className="bg-[#C49A6C] h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Skills Grid */}
        <div className="mb-16">
          <h3 className="font-poppins text-2xl font-semibold text-[#4A2C2A] mb-8 text-center">
            Areas of Expertise
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C49A6C] transition-all duration-300 text-center"
              >
                <span className="font-inter text-sm text-[#1C1C1C]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Approach */}
        <Card className="bg-[#4A2C2A] border-none text-white transition-all duration-300 hover:bg-[#5a3c3a]">
          <CardContent className="p-8">
            <h3 className="font-poppins text-2xl font-semibold mb-6 text-center">
              My Approach to Legal Practice
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C49A6C] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-[#d4aa7c]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-semibold mb-2">Strategic</h4>
                <p className="font-inter text-sm">
                  Developing comprehensive legal strategies tailored to each client's unique situation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C49A6C] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-[#d4aa7c]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-semibold mb-2">Detail-Oriented</h4>
                <p className="font-inter text-sm">
                  Meticulous attention to case details and legal precedents for robust arguments
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C49A6C] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-[#d4aa7c]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-poppins text-lg font-semibold mb-2">Client-Focused</h4>
                <p className="font-inter text-sm">
                  Prioritizing client objectives and maintaining clear communication throughout the process
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}