'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Skillblocks from './Skillblocks';

const Skills = () => {
  const skills = ['Full Stack', 'Dev Ops', 'Machine Learning'];
  const headRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skilldivRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    if (!skilldivRef.current) return;

    const skillBtns = skilldivRef.current.children;
    const containerWidth = skilldivRef.current.offsetWidth;
    const activeButton = skillBtns[activeIndex] as HTMLElement;

    if (!activeButton) return;

    const activeX = activeButton.offsetLeft + activeButton.offsetWidth / 2;
    const centerX = containerWidth / 2;

    gsap.to(skilldivRef.current, {
      x: isStart ? 40 : centerX - activeX,
      duration: 0.8,
      ease: 'power4.out',
      overwrite: true,
    });
    setIsStart(false);

    // gsap.to('.skillbtn', {
    //   scale: (i: number) => (i === activeIndex ? 1.2 : 0.8),
    //   opacity: (i: number) => (i === activeIndex ? 1 : 0.5),
    //   zIndex: (i: number) => (i === activeIndex ? 10 : 5),
    //   duration: 0.8,
    //   ease: 'bounce',
    //   overwrite: true,
    // });

    (gsap.utils.toArray('.skillbtn') as HTMLButtonElement[]).forEach(
      (btn, i) => {
        const isActive = i === activeIndex;
        const isLeft = i < activeIndex;
        const isRight = i > activeIndex;

        gsap.to(btn, {
          scale: isActive ? 1.2 : 0.8,
          opacity: isActive ? 1 : 0.5,
          zIndex: isActive ? 10 : 5,
          rotateY: isActive
            ? 0
            : isLeft
            ? (activeIndex - i) * 45
            : -45 * (i - activeIndex),
          rotateX: isActive ? 0 : isLeft ? -10 : 10,
          translateZ: isActive ? 0 : -100,
          transformOrigin: isActive
            ? 'center center'
            : isLeft
            ? 'top left'
            : 'top right', // Or bottom left/right as needed
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true,
        });
      }
    );
  }, [activeIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    const newValue =
      direction === 'left'
        ? activeIndex > 0
          ? activeIndex - 1
          : skills.length - 1
        : activeIndex < skills.length - 1
        ? activeIndex + 1
        : 0;

    setActiveIndex(newValue);
  };

  // INTRO UNVEILING
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            headRef.current,
            { opacity: 0, y: 50, letterSpacing: '-0.2em', scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              letterSpacing: '0.05em',
              duration: 1.5,
              ease: 'power2.out',
            }
          );
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            skillsSectionRef.current,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: 'sine.inOut',
            }
          );
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-0 h-screen w-full flex flex-col items-center gap-8 pt-20 skillssection"
    >
      <h1
        ref={headRef}
        className="opacity-0 text-5xl md:text-5xl font-extrabold text-white tracking-wide uppercase"
      >
        Proficient in
      </h1>

      <div
        ref={skillsSectionRef}
        className="opacity-0 relative py-4 flex items-center justify-center cursor-none w-full overflow-hidden"
      >
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-1/4 text-white text-4xl z-10 py-1 px-5 transition-all rounded-full"
        >
          ‹
        </button>

        <div
          ref={skilldivRef}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
          className="flex gap-4 text-2xl items-center w-max transition-transform"
        >
          {skills.map((skill, index) => (
            <button
              key={skill}
              className={`skillbtn ${
                activeIndex === index && 'activeskillbtn'
              } text-white px-4 py-2 rounded-md transition-all`}
            >
              {skill}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-1/4 text-white text-4xl z-10  py-1 px-5 transition-allrounded-full"
        >
          ›
        </button>
      </div>

      {/* <div className="grid grid-cols-3 lg:block gap-4">
        <img src="/icons/js.png" alt="" className="skillsIcons" />
      </div> */}
      <Skillblocks activeIndex={activeIndex} />
      {/* <div className="absolute inset-0 -mt-10 bg-gradient-to-tr from-primary to-tritary blur-lg -z-10"></div> */}
      <div className="absolute inset-0 -mt-10 bg-gradient-to-br from-[#192e35] to-[#04080a] blur-lg -z-10"></div>

      {/* <div className="absolute bottom-15 h-5 w-full bg-try blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 h-10 w-full herodispersion blur-3xl"></div> */}
    </div>
  );
};

export default Skills;
