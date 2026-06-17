'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Skillblocks from './Skillblocks';

const Skills = () => {
  const skills = ['Full Stack', 'Dev Ops'];
  const headRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skilldivRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const hasAnimatedTitleRef = useRef(false);
  const hasAnimatedSkillsRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const syncViewport = () => {
      setIsDesktop(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);

    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop || !skilldivRef.current) return;

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

    (gsap.utils.toArray('.skillbtn') as HTMLButtonElement[]).forEach(
      (btn, i) => {
        const isActive = i === activeIndex;
        const isLeft = i < activeIndex;
        const isRight = i > activeIndex;

        gsap.to(btn, {
          opacity: isActive ? 1 : 0.2,
          transformOrigin: isActive
            ? 'center center'
            : isLeft
              ? 'top left'
              : 'top right',
          duration: 0.8,
          ease: 'power2.out',
          overwrite: true,
        });
      },
    );
  }, [activeIndex, isDesktop]);

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
        if (!entry.isIntersecting || hasAnimatedTitleRef.current) return;

        hasAnimatedTitleRef.current = true;
        observer.disconnect();

        if (headRef.current) {
          gsap.fromTo(
            headRef.current,
            { opacity: 0, letterSpacing: '-0.2em' },
            {
              opacity: 1,
              letterSpacing: '0.05em',
              duration: 1.5,
              ease: 'power2.out',
            },
          );
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedSkillsRef.current) return;

        hasAnimatedSkillsRef.current = true;
        observer.disconnect();

        if (skillsSectionRef.current) {
          gsap.fromTo(
            skillsSectionRef.current,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: 'sine.inOut',
            },
          );
        }
      },
      {
        threshold: 0.5,
      },
    );
    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative z-0 flex min-h-screen w-full flex-col items-center gap-8 px-4 pt-16 pb-12 md:px-6 lg:min-h-[52rem] lg:px-0 lg:pt-20 xl:min-h-[58rem] "
    >
      <h2
        ref={headRef}
        className="opacity-0 text-center text-4xl font-extrabold uppercase tracking-wide text-white md:text-5xl"
      >
        Proficient in
      </h2>

      <div
        ref={skillsSectionRef}
        className="relative w-full cursor-none overflow-hidden py-2 opacity-0"
      >
        <div className="flex justify-center lg:hidden">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
            {skills.map((skill, index) => (
              <button
                key={skill}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-[0.08em] transition-all md:px-5 md:text-base ${
                  activeIndex === index
                    ? 'border border-[#86d9ff]/30 bg-[#86d9ff]/14 text-white shadow-[0_0_24px_rgba(106,204,255,0.18)]'
                    : 'border border-white/8 bg-transparent text-white/58'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="relative hidden items-center justify-center overflow-hidden py-4 lg:flex">
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-1/3 z-10 rounded-full px-5 py-1 text-4xl text-white transition-all"
          >
            ‹
          </button>

          <div
            ref={skilldivRef}
            className="flex w-max items-center gap-4 text-2xl transition-transform"
          >
            {skills.map((skill, index) => (
              <button
                key={skill}
                className={`skillbtn ${
                  activeIndex === index && 'activeskillbtn'
                } rounded-md px-4 py-2 text-white transition-all backdrop-blur-lg`}
              >
                {skill}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-1/3 z-10 py-1 px-5 text-4xl text-white transition-all"
          >
            ›
          </button>
        </div>
      </div>

      <Skillblocks activeIndex={activeIndex} compactLayout={!isDesktop} />

      <div className="absolute inset-0 -mt-10 bg-gradient-to-br from-[#192e35] to-[#04080a] blur-lg -z-10"></div>
    </div>
  );
};

export default Skills;
