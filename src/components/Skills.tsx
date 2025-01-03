import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programmingSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 88 },
      { name: "Vue.js", level: 82 },
      { name: "HTML/CSS", level: 95 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "PHP", level: 78 },
      { name: "Go", level: 70 },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 88 },
      { name: "Redis", level: 75 },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "GraphQL", level: 78 },
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(".skill-bar", {
        width: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100",
        }
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {programmingSkills.map((category, index) => (
            <div key={index} className="skill-category bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-white mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-emerald-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;