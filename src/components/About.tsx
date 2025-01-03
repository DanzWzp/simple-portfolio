import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code2, Palette, Cpu, Rocket } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={24} />,
    title: "Frontend Development",
    description: "Crafting responsive and interactive user interfaces with modern frameworks"
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences"
  },
  {
    icon: <Cpu size={24} />,
    title: "Backend Development",
    description: "Building scalable server-side applications and APIs"
  },
  {
    icon: <Rocket size={24} />,
    title: "Performance Optimization",
    description: "Ensuring fast and efficient web applications"
  }
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-400">
            I'm a passionate developer with a keen eye for design and a love for creating 
            seamless digital experiences. With expertise in both frontend and backend development, 
            I bring ideas to life through clean code and creative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="text-emerald-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;