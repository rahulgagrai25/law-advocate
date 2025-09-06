"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function NewsUpdatesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // In a real implementation, you would fetch this data from LinkedIn's API
  // or use a service like Embed.ly for LinkedIn integration
  const updates = [
    {
      date: "May 15, 2025",
      title: "New Publication on Hybrid Dispute Resolution",
      excerpt: "My article 'Hybrid Solutions for Modern Conflicts' has been published in the Indian Review of International Arbitration.",
      type: "Publication",
      link: "http://www.iriarb.com/",
      platform: "LinkedIn"
    },
    {
      date: "April 22, 2025",
      title: "Speaking at International Arbitration Conference",
      excerpt: "I'll be presenting on 'Emerging Trends in Construction Arbitration' at the Singapore International Arbitration Conference next month.",
      type: "Event",
      link: "#",
      platform: "LinkedIn"
    },
    {
      date: "March 10, 2025",
      title: "Joined Chambers of Justice (Retd.) Indu Malhotra",
      excerpt: "I'm excited to announce that I've joined the chambers of Justice Indu Malhotra as an Associate specializing in international arbitration.",
      type: "Career",
      link: "#",
      platform: "LinkedIn"
    },
    {
      date: "February 5, 2025",
      title: "LL.M. Completion at National University of Singapore",
      excerpt: "Successfully completed my LL.M. in International Arbitration and Dispute Resolution with a focus on cross-border dispute mechanisms.",
      type: "Education",
      link: "#",
      platform: "LinkedIn"
    }
  ];

  return (
    <section id='news' className="bg-[#F9F5F0] py-8 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-3 md:px-4">
        {/* Page Header with Animation */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="font-poppins text-2xl md:text-4xl font-bold text-[#4A2C2A] mb-3 md:mb-4">
            News & Updates
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-[#C49A6C] mx-auto transition-all duration-1000 delay-300 scale-x-0 origin-left animate-line-grow"></div>
          <p className="font-inter text-base md:text-lg text-[#1C1C1C] mt-4 md:mt-5 max-w-2xl mx-auto">
            Recent professional activities, publications, and insights on arbitration law
          </p>
        </div>

        {/* Updates Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
          {updates.map((update, index) => (
            <Card 
              key={index} 
              className={`bg-white border border-[#E5E5E5] shadow-sm overflow-hidden transition-all duration-500 ease-out ${
                hoveredCard === index 
                  ? 'shadow-lg border-[#C49A6C] scale-[1.02]' 
                  : 'hover:shadow-md'
              } ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ 
                transitionDelay: isMounted ? `${index * 100}ms` : '0ms',
                transformOrigin: 'center top'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-5 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <span className="inline-block bg-[#4A2C2A] text-white text-xs font-medium py-1 px-2 rounded transition-all duration-300 hover:bg-[#5a3c3a] hover:scale-105">
                    {update.type}
                  </span>
                  <span className="font-inter text-xs text-[#1C1C1C]">
                    {update.date}
                  </span>
                </div>
                
                <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#4A2C2A] mb-2 md:mb-3 transition-colors duration-300 hover:text-[#5a3c3a]">
                  {update.title}
                </h3>
                
                <p className="font-inter text-[#1C1C1C] mb-4 leading-relaxed text-sm md:text-base">
                  {update.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#4A2C2A] mr-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 2.36 1 2.36 2.87V19z"/>
                    </svg>
                    <span className="font-inter text-xs text-[#1C1C1C]">
                      Posted on {update.platform}
                    </span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="text-xs h-8 border-[#4A2C2A] text-[#4A2C2A] hover:bg-[#4A2C2A] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                    onClick={() => window.open(update.link, '_blank')}
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LinkedIn Integration with Animation */}
        <div className={`mb-10 md:mb-14 transition-all duration-700 delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Card className="bg-white border border-[#E5E5E5] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md hover:border-[#C49A6C]">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-[#4A2C2A] rounded-full flex items-center justify-center mr-4 transition-all duration-300 hover:bg-[#5a3c3a] hover:scale-110">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 2.36 1 2.36 2.87V19z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#4A2C2A]">
                      Connect on LinkedIn
                    </h3>
                    <p className="font-inter text-[#1C1C1C] text-sm md:text-base">
                      Follow for regular updates on arbitration law and practice
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="bg-[#4A2C2A] hover:bg-[#5a3c3a] text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={() => window.open('https://www.linkedin.com/in/garimadhankhar', '_blank')}
                >
                  Connect Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup with Animation */}
        <div className={`transition-all duration-700 delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Card className="bg-[#4A2C2A] border-none text-white transition-all duration-500 hover:bg-[#5a3c3a]">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="font-poppins text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Stay Updated on Arbitration Insights
              </h3>
              <p className="font-inter mb-5 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Subscribe to receive occasional updates on my publications, speaking engagements, 
                and insights on international arbitration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded text-[#4A2C2A] font-inter border border-[#E5E5E5] focus:border-[#C49A6C] focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                />
                <Button className="bg-[#C49A6C] hover:bg-[#d4aa7c] text-white whitespace-nowrap transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Subscribe
                </Button>
              </div>
              
              <p className="font-inter text-xs mt-3 md:mt-4 opacity-75">
                No spam. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        @keyframes line-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-line-grow {
          animation: line-grow 0.8s ease-out forwards;
        }
        
        /* Prevent horizontal scrolling */
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}