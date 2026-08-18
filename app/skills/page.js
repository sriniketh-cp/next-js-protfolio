'use client';
import { useEffect, useState } from 'react';
import CountUp from '@/components/CountUp';

export default function Skills() {
  const [isMounted, setIsMounted] = useState(false);

  // Trigger the animation after the component mounts
  useEffect(() => {
    // A slight delay ensures the browser paints the initial 0% state before animating
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Skill data
  const skillsLeft = [
    { name: 'HTML', icon: 'fab fa-html5', level: 95 },
    { name: 'CSS', icon: 'fab fa-css3-alt', level: 90 },
    { name: 'JavaScript', icon: 'fab fa-js', level: 88 },
    { name: 'React', icon: 'fab fa-react', level: 85 },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 82 },
    { name: 'Flutter', icon: 'fas fa-feather', level: 80 },
  ];

  const skillsRight = [
    { name: 'Kotlin', icon: 'fas fa-k', level: 75 },
    { name: 'React Native', icon: 'fab fa-react', level: 78 },
    { name: 'AWS', icon: 'fab fa-aws', level: 72 },
    { name: 'GCP', icon: 'fas fa-cloud', level: 68 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
    { name: 'Docker', icon: 'fab fa-docker', level: 65 },
  ];

  const renderSkill = (skill) => (
    <div key={skill.name} className="mb-6 last:mb-0 group">
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center gap-2.5 text-sm font-semibold text-white">
          <i className={`${skill.icon} text-[#4f8ef7] w-5 text-center`}></i>
          {skill.name}
        </span>
        <span className="text-sm font-bold text-[#9b59f5] flex items-center">
          <CountUp
            from={0}
            to={skill.level}
            direction="up"
            duration={1.5}
            className="inline-block"
          />
          %
        </span>
      </div>
      
      {/* Background Track */}
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
        {/* Animated Fill - Fixed Gradient Here */}
        <div 
          className="h-full bg-gradient-to-r from-[#4f8ef7] to-[#9b59f5] rounded-full relative transition-all ease-out"
          style={{ 
            width: isMounted ? `${skill.level}%` : '0%',
            transitionDuration: '1.5s' 
          }}
        >
          {/* Glowing Dot at the end of the progress bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9b59f5] rounded-full shadow-[0_0_8px_#9b59f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
  
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block py-1.5 px-4 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-xs font-bold tracking-widest uppercase text-accent-blue mb-4">
          Tech Stack
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Technologies I use to bring your ideas to life.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col">
            {skillsLeft.map(renderSkill)}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {skillsRight.map(renderSkill)}
          </div>

        </div>
      </div>
    </main>
  );
}