import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });

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

          {/* Programmer Image */}
          <div ref={imageRef} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-400/50 bg-gradient-to-b from-gray-800 to-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
                  alt="Programmer"
                  className="w-full h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Floating tech elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-md animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400/20 rounded-full blur-md animate-float-delayed"></div>
                
                {/* Code snippet overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-sm font-mono text-emerald-400/80 overflow-hidden">
                  <div className="animate-slide">
                    <span className="opacity-80">{`const developer = {`}</span>
                    <br />
                    <span className="opacity-80">{`  passion: "Creating amazing web experiences",`}</span>
                    <br />
                    <span className="opacity-80">{`  skills: ["React", "Node.js", "TypeScript"]`}</span>
                    <br />
                    <span className="opacity-80">{`};`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;