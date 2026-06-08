'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';

type ProjectEntry = {
  title: string;
  label: string;
  image: string;
  year: string;
  summary: string;
  narrative: string;
  stack: string[];
  outcome: string;
  accent: string;
};

const projects: ProjectEntry[] = [
  {
    title: 'Throttle OS',
    label: 'Automotive AI Experience',
    image: '/images/projects/cars_8.png',
    year: '2025',
    summary:
      'A premium digital showroom that turns vehicle discovery into a cinematic browsing experience.',
    narrative:
      'Built to feel like a launch keynote instead of a catalogue. The interface leans on depth, speed, and motion to make every vehicle feel collectible.',
    stack: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind'],
    outcome: 'Immersive storytelling for a product-led demo flow.',
    accent: 'from-[#d8fff0] via-[#6ddca9] to-[#1f805f]',
  },
  {
    title: 'Plant Pulse',
    label: 'Computer Vision for Crop Health',
    image: '/images/projects/plant_health.png',
    year: '2024',
    summary:
      'A diagnosis dashboard that helps growers detect stress signals before visible crop failure begins.',
    narrative:
      'The design direction blends lab precision with calm field-friendly visuals, making model output understandable for non-technical users.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    outcome: 'Bridges applied ML with accessible decision support.',
    accent: 'from-[#efffd2] via-[#88d86c] to-[#285e2d]',
  },
  {
    title: 'Midnight Circuit',
    label: 'Realtime Performance Visualizer',
    image: '/images/projects/cars_6.png',
    year: '2026',
    summary:
      'A telemetry-inspired dashboard for comparing speed, performance, and interaction patterns in motion.',
    narrative:
      'This concept explores how analytics can look emotional without losing clarity, using contrast, glow, and deliberate pacing.',
    stack: ['React', 'TypeScript', 'Charts', 'Node.js'],
    outcome: 'Turns raw data into a theatrical product narrative.',
    accent: 'from-[#f4fbff] via-[#83c7ff] to-[#2350a6]',
  },
  {
    title: 'Velocity Canvas',
    label: 'Interactive Product Storytelling',
    image: '/images/projects/cars_4.png',
    year: '2025',
    summary:
      'A microsite system designed for dramatic reveals, modular storytelling, and branded motion systems.',
    narrative:
      'The experience uses stacked surfaces and detail panels so viewers can scan quickly or dive deep into craft and execution.',
    stack: ['Next.js', 'Three.js', 'Motion Design', 'Vercel'],
    outcome: 'Balances visual spectacle with portfolio clarity.',
    accent: 'from-[#fff6de] via-[#f8bf63] to-[#9a4f18]',
  },
];

const ProjectCards = () => {
  const [active, setActive] = useState(0);

  const project = projects[active];

  const stageProjects = useMemo(
    () =>
      projects.map((item, index) => ({
        ...item,
        offset:
          index === active
            ? 0
            : (index - active + projects.length) % projects.length >
                projects.length / 2
              ? ((index - active + projects.length) % projects.length) -
                projects.length
              : (index - active + projects.length) % projects.length,
      })),
    [active],
  );

  const changeProject = (index: number) => {
    setActive((index + projects.length) % projects.length);
  };

  return (
    <div className="relative mt-6 h-[calc(100vh-13rem)] pb-28">
      <div className="grid h-full min-h-0 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-0 overflow-hidden rounded-[2.25rem] px-4 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-6">
          <div className="project-stage-atmosphere absolute inset-0" />
          <div className="project-stage-glow project-stage-glow-one absolute" />
          <div className="project-stage-glow project-stage-glow-two absolute" />
          <div className="project-stage-glow project-stage-glow-three absolute" />
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:86px_86px]" />

          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.9rem] border border-white/8 bg-[#081015]">
            {stageProjects
              .filter((item) => item.offset !== 0 && Math.abs(item.offset) <= 2)
              .map((item) => (
                <motion.button
                  key={item.title}
                  onClick={() =>
                    changeProject(
                      projects.findIndex((entry) => entry.title === item.title),
                    )
                  }
                  className="absolute top-1/2 hidden h-[78%] w-[32%] max-w-[280px] -translate-y-1/2 overflow-hidden rounded-[1.7rem] border border-white/8 bg-white/[0.02] p-3 text-left backdrop-blur-lg lg:block"
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
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
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
              className="relative z-10 flex h-[82%] w-full max-w-[560px] flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#0b151b]/88 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
            >
              <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-white/45">
                <span>{project.year}</span>
                <span>Featured Project</span>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-[1.3rem]">
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
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/52">
                      {project.label}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-white lg:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className={`hidden h-12 w-12 rounded-full bg-gradient-to-br ${project.accent} p-[1px] md:block`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#081015] text-sm text-white/72">
                      {String(active + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Project Overview
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/52">
                  {project.label}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Year
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {project.year}
                </p>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-white/72">
              {project.summary}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Case Study
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                {project.narrative}
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Outcome
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Tech Stack
              </p>
              <p className="text-xs text-white/55">
                {String(active + 1).padStart(2, '0')} /{' '}
                {String(projects.length).padStart(2, '0')}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center px-4">
        <div className="pointer-events-auto flex max-w-[880px] items-center justify-between gap-3 border-b-0 rounded-full bg-[rgba(10,16,19,0.62)] border-[1px] border-white/10 px-4 py-3 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-[28px]">
          <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-3">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => changeProject(index)}
                className={`group relative h-14 w-14 shrink-0 overflow-hidden rounded-full border transition-all duration-300 ${
                  index === active
                    ? 'scale-125 -translate-y-5 border-white/25 transition-all duration-300'
                    : 'border-white/10 opacity-75 hover:opacity-100'
                }`}
                aria-label={item.title}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    index === active
                      ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.12))]'
                      : 'bg-black/25'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
