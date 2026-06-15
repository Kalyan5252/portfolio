import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../constants';

type SkillEntry = (typeof SKILLS)[number][number];

const Skillblocks = ({
  activeIndex,
  compactLayout = false,
}: {
  activeIndex: number;
  compactLayout?: boolean;
}) => {
  const [currentSkills, setCurrentSkills] = useState(SKILLS[activeIndex]);
  const [exitingSkills, setExitingSkills] = useState<SkillEntry[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const exitingRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(true);
  const orbitLayouts = [
    {
      paths: [
        'M -6 180 C 110 72, 280 12, 462 56 C 662 104, 856 208, 1032 356',
        'M 158 392 C 268 254, 430 182, 594 212 C 742 238, 882 318, 980 456',
      ],
    },
    {
      paths: [
        'M 44 116 C 194 44, 386 46, 562 118 C 738 190, 892 318, 1012 474',
        'M 206 362 C 312 252, 448 218, 592 238 C 742 260, 856 346, 944 474',
      ],
    },
  ];
  const activeOrbit = orbitLayouts[activeIndex] ?? orbitLayouts[0];
  const particleSeeds = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        top: `${8 + ((index * 37) % 78)}%`,
        left: `${4 + ((index * 29) % 92)}%`,
        size: `${index % 3 === 0 ? 2 : 1}px`,
        delay: `${(index % 9) * 0.6}s`,
        duration: `${7 + (index % 5) * 1.8}s`,
        opacity: 0.18 + (index % 4) * 0.08,
      })),
    [],
  );

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
        },
      );
    });
  }, [currentSkills]); // Runs when currentSkills update

  useEffect(() => {
    if (compactLayout) {
      setCurrentSkills(SKILLS[activeIndex]);
      setExitingSkills([]);
      return;
    }

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
  }, [activeIndex, compactLayout]);

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

  if (compactLayout) {
    return (
      <div className="relative w-full max-w-5xl px-1 sm:px-2">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
          <div className="skill-starfield opacity-70">
            {particleSeeds.slice(0, 16).map((particle) => (
              <span
                key={particle.id}
                className="skill-star"
                style={{
                  top: particle.top,
                  left: particle.left,
                  width: particle.size,
                  height: particle.size,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                  opacity: particle.opacity,
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
          {currentSkills.map((skill) => (
            <div
              key={`compact-${skill.techname}`}
              className="group relative flex min-h-[7.6rem] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(36,56,66,0.42),rgba(19,30,37,0.18))] px-2 py-3 text-center text-white shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:min-h-[8rem] sm:px-3 sm:py-4"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,214,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%)] opacity-70" />
              <img
                src={`/icons/${skill.icon}`}
                alt={skill.techname}
                className={skill.styles}
              />
              <p className="text-[11px] font-medium tracking-[0.06em] text-white/78 sm:text-xs md:text-sm">
                {skill.techname}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    // <div className="relative h-80 flex flex-wrap gap-5 justify-center items-center">
    <div
      className={`relative h-80 flex flex-wrap gap-5 ${divLayouts[activeIndex].main} justify-center items-center `}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="skill-starfield">
          {particleSeeds.map((particle) => (
            <span
              key={particle.id}
              className="skill-star"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>

        <svg
          className="skill-orbits"
          viewBox="0 0 1024 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {activeOrbit.paths.map((path, index) => (
            <g key={path}>
              <path id={`skill-orbit-path-${index}`} d={path} className="skill-orbit-path" />
              <circle r={index === 0 ? 3.2 : 2.2} className="skill-orbit-particle">
                <animateMotion
                  dur={index === 0 ? '11s' : '9s'}
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${index * 1.2}s`}
                >
                  <mpath href={`#skill-orbit-path-${index}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </svg>
      </div>

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
            className={`${divLayouts[activeIndex].div2} p-4 group bg-tritary/50 border-[1px] border-gray-400/30 rounded-lg shadow-lg flex flex-col items-center justify-center text-white
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
            className={`${divLayouts[activeIndex].div2} p-4 group bg-tritary/50 border-[1px] border-gray-400/30 rounded-lg shadow-lg flex flex-col items-center justify-center text-white
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
