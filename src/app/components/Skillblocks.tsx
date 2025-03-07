import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../constants';

const Skillblocks = ({ activeIndex }: { activeIndex: number }) => {
  const [currentSkills, setCurrentSkills] = useState(SKILLS[activeIndex]);
  const [exitingSkills, setExitingSkills] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const exitingRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const skillBlocks = Array.from(containerRef.current.children);

    // Animate current blocks in
    skillBlocks.forEach((block, i) => {
      const x = (Math.random() - 0.5) * 300; // Random X position
      const y = (Math.random() - 0.5) * 200; // Random Y position
      const delay = i * 0.1; // Staggered animation

      gsap.fromTo(
        block,
        { opacity: 0, x: x, y: y, scale: 0.5 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: 'power4.out',
        }
      );
    });
  }, [currentSkills]); // Runs when currentSkills update

  useEffect(() => {
    if (!containerRef.current || !exitingRef.current) return;

    // Store old skills before switching
    setExitingSkills(currentSkills);

    // Animate old skills out
    const exitingBlocks = Array.from(exitingRef.current.children);
    exitingBlocks.forEach((block, i) => {
      const x = (Math.random() - 0.5) * 300;
      const y = (Math.random() - 0.5) * 200;

      gsap.to(block, {
        opacity: 0,
        x: x,
        y: y,
        scale: 0.5,
        duration: 0.8,
        delay: i * 0.05,
        ease: 'power4.in',
      });
    });

    setTimeout(() => {
      setCurrentSkills(SKILLS[activeIndex]);
      setExitingSkills([]);
    }, 800);
    setStart(false);
  }, [activeIndex]);

  const divLayouts = [
    {
      div1: 'w-full flex items-center justify-center',
      div2: 'absolute',
      main: 'w-full',
    },
    {
      div1: 'grid grid-cols-3 gap-2',
      div2: '',
      main: '',
    },
    {
      div1: 'w-full flex items-center justify-center',
      div2: 'absolute',
      main: 'w-full',
    },
  ];

  return (
    // <div className="relative h-80 flex flex-wrap gap-5 justify-center items-center">
    <div
      className={`relative h-80 flex flex-wrap gap-5 ${divLayouts[activeIndex].main} justify-center items-center `}
    >
      {/* Exiting Skills */}
      <div
        ref={exitingRef}
        className={`${
          (activeIndex === 0 || !start) && 'hidden'
        }  w-full h-full ${divLayouts[activeIndex].div1}`}
      >
        {exitingSkills.map((skill, index) => (
          <div
            key={`exit-${index}`}
            className={`${divLayouts[activeIndex].div2} p-4 group bg-primary rounded-lg shadow-lg flex flex-col items-center justify-center text-white
                   transition-all duration-300 overflow-hidden min-h-24 min-w-24`}
            style={{ top: skill.position.top, left: skill.position.left }}
          >
            <img
              src={`/icons/${skill.icon}`}
              alt={skill.techname}
              className={skill.styles}
            />
            <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-[50px]">
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.techname}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* New Skills */}
      <div
        ref={containerRef}
        className={`${divLayouts[activeIndex].div1} relative w-full h-full`}
      >
        {currentSkills.map((skill, index) => (
          <div
            key={`new-${index}`}
            className={`${divLayouts[activeIndex].div2} p-4 group bg-primary rounded-lg shadow-lg flex flex-col items-center justify-center text-white
                   transition-all duration-300 overflow-hidden min-h-24 min-w-24`}
            style={{ top: skill.position.top, left: skill.position.left }}
          >
            <img
              src={`/icons/${skill.icon}`}
              alt={skill.techname}
              className={skill.styles}
            />
            <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-[50px]">
              <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.techname}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillblocks;
