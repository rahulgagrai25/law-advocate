'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className={`py-8 md:py-12 px-4 sm:px-6 bg-[#F9F5F0] min-h-screen transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-4xl px-2 sm:px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4A2C2A] mb-4 font-poppins animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg text-center text-[#1C1C1C] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in delay-100">
          Have a legal inquiry or need professional counsel? Reach out to discuss how I can assist with your case.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Card className="border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C49A6C] transition-all duration-500 animate-slide-in-left">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#4A2C2A] mb-4 md:mb-6 font-poppins">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#1C1C1C] font-inter">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-[#E5E5E5] rounded-md focus:ring-2 focus:ring-[#C49A6C] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#1C1C1C] font-inter">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-[#E5E5E5] rounded-md focus:ring-2 focus:ring-[#C49A6C] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#1C1C1C] font-inter">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your legal needs or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-[#E5E5E5] rounded-md focus:ring-2 focus:ring-[#C49A6C] focus:border-transparent transition-all duration-300 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4A2C2A] hover:bg-[#5a3c3a] py-3 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <Card className="border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C49A6C] transition-all duration-500 animate-slide-in-right delay-100">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#4A2C2A] mb-4 md:mb-6 font-poppins">Contact Information</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#4A2C2A] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 hover:bg-[#5a3c3a] transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2C2A] font-poppins text-base sm:text-lg">Email</h4>
                      <p className="text-[#1C1C1C] font-inter text-sm sm:text-base">legal.counsel@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A2C2A] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 hover:bg-[#5a3c3a] transform hover:scale-110">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 2.36 1 2.36 2.87V19z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2C2A] font-poppins text-base sm:text-lg">LinkedIn</h4>
                      <p className="text-[#1C1C1C] font-inter text-sm sm:text-base">
                        <a href="https://linkedin.com/in/garimadhankhar" target="_blank" rel="noopener noreferrer" className="text-[#4A2C2A] hover:text-[#5a3c3a] hover:underline transition-colors duration-300">
                          linkedin.com/in/garimadhankhar
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A2C2A] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0 transition-all duration-300 hover:bg-[#5a3c3a] transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2C2A] font-poppins text-base sm:text-lg">Office Locations</h4>
                      <p className="text-[#1C1C1C] font-inter text-sm sm:text-base">New Delhi, India</p>
                      <p className="text-[#1C1C1C] font-inter text-sm sm:text-base">Singapore</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-[#4A2C2A] text-white transition-all duration-500 hover:bg-[#5a3c3a] animate-slide-in-right delay-200">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 font-poppins">Office Hours</h3>
                <div className="space-y-2 font-inter text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#5a3c3a]">
                  <h4 className="font-semibold mb-2 font-poppins text-base sm:text-lg">Emergency Contact</h4>
                  <p className="font-inter text-sm sm:text-base">For urgent legal matters outside office hours, please call: <span className="font-semibold">+91 98765 43210</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}