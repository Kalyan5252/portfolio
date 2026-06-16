'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProjectCards from './ProjectCards';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isCompactViewport, setIsCompactViewport] = React.useState(false);
  const [isSectionActive, setIsSectionActive] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1279px)');

    const syncViewport = () => {
      setIsCompactViewport(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);

    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const ctx = gsap.context(() => {
          if (headerRef.current) {
            gsap.fromTo(
              headerRef.current.children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out',
              },
            );
          }
        }, sectionRef);

        observer.disconnect();
        return () => ctx.revert();
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionActive(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative isolate overflow-hidden px-4 py-8 text-white sm:px-6 md:px-10 lg:px-14 xl:min-h-0 xl:py-10"
    >
      <div className="absolute inset-0 -z-30 bg-[#050b10]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom,rgba(66,124,121,0.18),transparent_34%),radial-gradient(circle_at_20%_50%,rgba(68,115,162,0.15),transparent_30%),linear-gradient(180deg,#081118_0%,#050b10_38%,#07141a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:120px_120px] [mask-image:radial-gradient(circle_at_center,white_10%,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-2.5rem] -z-10 h-32 skills-projects-bridge blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-28 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#7fd8b4]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-12 right-[-5rem] -z-10 h-[20rem] w-[20rem] rounded-full bg-[#1f7295]/10 blur-[140px]" />

      <div
        ref={headerRef}
        className="mx-auto flex w-full max-w-7xl flex-col gap-4 opacity-100"
      >
        <span className="w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl">
          My Projects
        </span>
        <div className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr] xl:items-end">
          <div className="space-y-3">
            <h2 className="project-title relative text-3xl font-black tracking-[-0.01em] sm:text-4xl md:text-5xl lg:text-[3rem] lg:leading-[0.95]">
              <span className="project-title-base uppercase">
                Crafted to be explored.
              </span>
              <span
                aria-hidden="true"
                className="project-title-gloss absolute inset-0 uppercase"
              >
                Crafted to be explored.
              </span>
            </h2>
            {/* <p className="max-w-3xl text-sm leading-7 text-white/68 md:text-base">
              A focused project showcase with motion on the left and the full
              story on the right, sized to live inside one clean screen before
              the next section takes over.
            </p> */}
          </div>

          {/* <div className="grid w-full grid-cols-3 gap-3 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Format
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Story-led showcase
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Motion
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Layered depth
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Focus
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Product + impact
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <ProjectCards compactNavActive={isCompactViewport && isSectionActive} />
      <div className="absolute bottom-0 h-10 w-full projectsdispersion blur-3xl"></div>
    </section>
  );
};

export default Projects;
