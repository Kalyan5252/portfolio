'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { showcaseProjects } from '../constants/projects';

const AUTOPLAY_DURATION_MS = 15000;

const MERCURY_NAV_PALETTES = [
  {
    base: '#12264d',
    mid: '#7fc8ff',
    light: '#f5d6c8',
    dark: '#050a25',
    accent: 'rgba(126,203,255,0.96)',
    ring: 'rgba(126,203,255,0.96)',
    mark: 'rgba(8,16,34,0.88)',
  },
  {
    base: '#dff5ff',
    mid: '#f7ffff',
    light: '#ffffff',
    dark: '#263146',
    accent: 'rgba(214,246,255,0.98)',
    ring: 'rgba(214,246,255,0.94)',
    mark: 'rgba(22,31,42,0.86)',
  },
  {
    base: '#162a1b',
    mid: '#8ce45f',
    light: '#c8ff9e',
    dark: '#07110a',
    accent: 'rgba(142,228,95,0.96)',
    ring: 'rgba(142,228,95,0.94)',
    mark: 'rgba(8,20,10,0.86)',
  },
  {
    base: '#6c321c',
    mid: '#ff9b4d',
    light: '#ffd47b',
    dark: '#140908',
    accent: 'rgba(255,155,77,0.96)',
    ring: 'rgba(255,170,84,0.94)',
    mark: 'rgba(24,10,6,0.86)',
  },
  {
    base: '#35155c',
    mid: '#df4ee5',
    light: '#ff91f4',
    dark: '#080414',
    accent: 'rgba(223,78,229,0.96)',
    ring: 'rgba(236,92,232,0.94)',
    mark: 'rgba(18,6,26,0.86)',
  },
] as const;

const getProjectMark = (title: string) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const ProjectCards = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressStartRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);

  const project = showcaseProjects[active];

  const stageProjects = useMemo(
    () =>
      showcaseProjects.map((item, index) => ({
        ...item,
        offset:
          index === active
            ? 0
            : (index - active + showcaseProjects.length) %
                  showcaseProjects.length >
                showcaseProjects.length / 2
              ? ((index - active + showcaseProjects.length) %
                  showcaseProjects.length) -
                showcaseProjects.length
              : (index - active + showcaseProjects.length) %
                showcaseProjects.length,
      })),
    [active],
  );

  const changeProject = (index: number) => {
    progressStartRef.current = Date.now();
    setProgress(0);
    setActive((index + showcaseProjects.length) % showcaseProjects.length);
  };

  useEffect(() => {
    progressStartRef.current = Date.now();
    setProgress(0);

    const tick = () => {
      const elapsed = Date.now() - progressStartRef.current;
      const nextProgress = Math.min(elapsed / AUTOPLAY_DURATION_MS, 1);

      setProgress(nextProgress);

      if (nextProgress >= 1) {
        progressStartRef.current = Date.now();
        setProgress(0);
        setActive((prev) => (prev + 1) % showcaseProjects.length);
      }

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mt-6 h-[calc(100vh-13rem)] pb-28">
      <div className="grid h-full min-h-0 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-0 overflow-hidden rounded-xl px-4 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-6">
          <div className="project-stage-atmosphere absolute inset-0" />
          <div className="project-stage-glow project-stage-glow-one absolute" />
          <div className="project-stage-glow project-stage-glow-two absolute" />
          <div className="project-stage-glow project-stage-glow-three absolute" />
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:86px_86px]" />

          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-[#081015]">
            {stageProjects
              .filter((item) => item.offset !== 0 && Math.abs(item.offset) <= 2)
              .map((item) => (
                <motion.button
                  key={item.title}
                  onClick={() =>
                    changeProject(
                      showcaseProjects.findIndex(
                        (entry) => entry.title === item.title,
                      ),
                    )
                  }
                  className="absolute top-1/2 hidden h-[78%] w-[32%] max-w-[280px] -translate-y-1/2 overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] p-3 text-left backdrop-blur-lg lg:block"
                  animate={{
                    x: item.offset * 180,
                    rotateY: item.offset * -24,
                    scale: 1 - Math.abs(item.offset) * 0.12,
                    opacity: 0.3,
                  }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformPerspective: 1400,
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061016] via-transparent to-transparent" />
                  </div>
                </motion.button>
              ))}

            <motion.div
              key={project.title}
              initial={{ opacity: 0.6, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex h-[82%] w-full max-w-[560px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b151b]/88 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
            >
              <div className="relative flex-1 overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_38%,rgba(6,10,14,0.72)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-white lg:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative min-h-0 overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(33,49,46,0.92),rgba(17,28,30,0.9))] rounded-xl">
          <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/></svg>')]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,156,133,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(47,89,78,0.18),transparent_38%)]" />
          <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:120px_120px]" />

          <div className="relative grid h-full grid-rows-[auto_1fr_auto]">
            <div className="grid grid-cols-[3fr_1fr] border-b border-white/10">
              <div className="px-8 py-7">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/36">
                  Project Overview
                </p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.26em] text-white/46">
                  {project.label}
                </p>
              </div>
              <div className="border-l border-white/10">
                {project.href && !project.disabled ? (
                  <Link
                    href={project.href}
                    className="explore-project-btn group relative flex h-full w-full items-center overflow-hidden px-8 py-7 text-left"
                    aria-label={`Explore ${project.title}`}
                  >
                    <span className="explore-project-btn-fill explore-project-btn-fill-white" />
                    <span className="explore-project-btn-fill explore-project-btn-fill-green" />

                    <span className="relative z-10 flex w-full items-center justify-center">
                      <span className="mt-2 ml-2 explore-project-btn-copy explore-project-btn-copy-base flex items-center justify-center gap-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-white">
                        <span>Explore</span>
                        <Image
                          src="/icons/Arrow Up Right Icon.svg"
                          alt=""
                          aria-hidden="true"
                          width={18}
                          height={18}
                          className="explore-project-btn-arrow h-[18px] w-[18px] invert"
                        />
                      </span>

                      <span className="mt-2 ml-2 explore-project-btn-copy explore-project-btn-copy-dark flex items-center justify-center gap-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-white">
                        <span>Explore</span>
                        <Image
                          src="/icons/Arrow Up Right Icon.svg"
                          alt=""
                          aria-hidden="true"
                          width={18}
                          height={18}
                          className="explore-project-btn-arrow h-[18px] w-[18px] brightness-0 invert"
                        />
                      </span>
                    </span>
                  </Link>
                ) : (
                  <div
                    aria-disabled="true"
                    className="explore-project-btn-disabled relative flex h-full w-full items-center justify-center px-8 py-7 text-center"
                  >
                    <span className="flex items-center gap-2 text-[1.1rem] font-semibold tracking-[-0.03em] text-white/42">
                      <span>Explore</span>
                      <Image
                        src="/icons/Arrow Up Right Icon.svg"
                        alt=""
                        aria-hidden="true"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] opacity-40 invert"
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-r border-white/10">
                <div className="px-8 py-5">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-white/36">
                    Case Study
                  </p>
                  <p className="text-sm leading-8 text-white/70 mt-3">
                    {project.narrative}
                  </p>
                </div>
              </div>

              <div>
                <div className="grid h-full grid-rows-2">
                  <div className="border-b border-white/10">
                    <div className="px-8 py-5">
                      <p className="text-[10px] uppercase tracking-[0.34em] text-white/36">
                        Outcome
                      </p>
                      <p className="max-w-[20rem] text-sm leading-8 text-white/70">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="px-8 py-5">
                      <p className="text-[10px] tracking-[0.34em] text-white/36">
                        Category
                      </p>
                      <div className="mt-4 inline-flex py-2 text-[14px] tracking-[0.16em] text-white/72">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10">
              <div className="border-b border-white/10 px-8 py-5">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/36">
                  Summary
                </p>
                <p className="max-w-[42rem] text-[1.02rem] leading-8 text-white/72">
                  {project.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center px-4">
        <div className="pointer-events-auto flex max-w-[880px] items-center justify-between gap-3 border-b-0 rounded-full bg-[rgba(10,16,19,0.62)] border-[1px] border-white/10 px-4 py-3 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-[28px]">
          <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-3">
            {showcaseProjects.map((item, index) => {
              const palette =
                MERCURY_NAV_PALETTES[index % MERCURY_NAV_PALETTES.length];

              return (
                <button
                  key={item.title}
                  onClick={() => changeProject(index)}
                  className={`group relative h-14 w-14 shrink-0 rounded-full transition-all duration-300 ${
                    index === active
                      ? 'scale-125 -translate-y-5 transition-all duration-300'
                      : 'opacity-75 hover:opacity-100'
                  }`}
                  aria-label={item.title}
                >
                  {index === active && (
                    <>
                      <span
                        className="project-nav-progress-ring pointer-events-none absolute inset-[-1px] z-20 rounded-full"
                        style={{
                          background: `conic-gradient(from -90deg, ${palette.ring} 0deg, ${palette.ring} ${progress * 360}deg, rgba(255,255,255,0.1) ${progress * 360}deg, rgba(255,255,255,0.06) 360deg)`,
                        }}
                      />
                      {/* <span
                      className="project-nav-progress-head blur-[1px] pointer-events-none absolute left-1/2 top-1/2 z-30"
                      style={{
                        transform: `translate(-50%, -40%) rotate(${progress * 360 - 90}deg) translateY(-32px)`,
                      }}
                    >
                      <span className="project-nav-progress-head-core" />
                    </span> */}
                    </>
                  )}
                  <span
                    className={`project-nav-mercury absolute inset-0 overflow-hidden rounded-full border transition-all duration-300 ${
                      index === active
                        ? 'project-nav-mercury-active border-white/25'
                        : 'border-white/10'
                    }`}
                    style={
                      {
                        '--project-mercury-delay': `${index * -1.35}s`,
                        '--project-mercury-base': palette.base,
                        '--project-mercury-mid': palette.mid,
                        '--project-mercury-light': palette.light,
                        '--project-mercury-dark': palette.dark,
                        '--project-mercury-accent': palette.accent,
                        '--project-mercury-mark': palette.mark,
                      } as CSSProperties
                    }
                  >
                    <span className="project-nav-mercury-surface" />
                    <span className="project-nav-mercury-flow project-nav-mercury-flow-a" />
                    <span className="project-nav-mercury-flow project-nav-mercury-flow-b" />
                    <span className="project-nav-mercury-shine" />
                    <span className="project-nav-mercury-mark">
                      {getProjectMark(item.title)}
                    </span>
                    <span
                      className={`absolute inset-0 transition-all duration-300 ${
                        index === active
                          ? 'bg-[radial-gradient(circle_at_42%_28%,rgba(255,255,255,0.18),transparent_30%)]'
                          : 'bg-black/18'
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
