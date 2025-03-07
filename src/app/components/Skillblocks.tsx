import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../constants';

const skills = [
  {
    icon: 'aws.png',
    techname: 'AWS',
    styles: 'w-14 h-14 drop-shadow-[0_0_15px_rgba(52,120,198,0.8)]',
    position: { top: '10%', left: '20%' },
  },
  {
    icon: 'docker.png',
    techname: 'Docker',
    styles: 'w-14 h-14 drop-shadow-[0_0_10px_rgba(130,215,247,1)]',
    position: { top: '30%', left: '50%' },
  },
  {
    icon: 'kubernetes.png',
    techname: 'Kubernetes',
    styles: 'w-14 h-14 drop-shadow-[0_0_10px_rgba(99,154,79,2)] ',
    position: { top: '50%', left: '40%' },
  },
  {
    icon: 'gcp.png',
    techname: 'Google Cloud',
    styles: 'w-14 h-14 drop-shadow-[0_0_15px_rgba(250,224,75,0.8)] ',
    position: { top: '100%', left: '70%' },
  },
  {
    icon: 'looker.png',
    techname: 'Looker',
    styles: 'h-14 w-10 drop-shadow-[0_0_5px_rgba(52,120,198,1)]',
    position: { top: '90%', left: '55%' },
  },
  {
    icon: 'terraform.png',
    techname: 'Terraform',
    styles: 'w-14 h-14 drop-shadow-[0_0_10px_rgba(112,76,182,1)]',
    position: { top: '20%', left: '80%' },
  },
  {
    icon: 'github.png',
    techname: 'Github',
    styles: 'w-14 h-14 drop-shadow-[0_0_5px_rgba(255,255,255,1)]',
    position: { top: '10%', left: '65%' },
  },
];

const Skillblocks = ({ activeIndex }: { activeIndex: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const skillBlocks = containerRef.current.children;

    Array.from(skillBlocks).forEach((block, i) => {
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
  }, []);

  const divLayouts = [
    {
      div1: 'w-full',
      div2: 'absolute',
    },
    {
      div1: 'grid grid-cols-3 w-fit',
      div2: '',
    },
    {
      div1: 'w-full',
      div2: 'absolute',
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`relative  h-80 flex flex-wrap gap-5 justify-center items-center ${divLayouts[activeIndex].div1} `}
    >
      {SKILLS[activeIndex].map((skill, index) => (
        <div
          key={index}
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
  );
};

export default Skillblocks;
