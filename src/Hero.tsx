import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });

      // Image animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.7
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div ref={textRef} className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Creative Developer &
              <span className="block text-emerald-400">AI Enthusiast</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8">
              I craft exceptional digital experiences that combine stunning design with powerful functionality.
            </p>
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-emerald-400 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-emerald-400 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com"
                 className="hover:text-emerald-400 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
            <a href="#projects" 
               className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
              View My Work
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-emerald-400">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-md animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400/20 rounded-full blur-md animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;