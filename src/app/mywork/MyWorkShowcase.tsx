'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Activity,
  Dna,
  HeartPulse,
  MapPinned,
  ShieldCheck,
} from 'lucide-react';
import type { CSSProperties, MouseEvent } from 'react';

type WorkCard = {
  id: 'ssit' | 'going' | 'healthcare' | 'candida';
  title: string;
  label: string;
  meta: string;
  image?: string;
  position: string;
  accent: string;
  Icon: typeof Activity;
};

type ArchiveWork = {
  id: string;
  image: string;
  position: string;
  accent: string;
};

const works: WorkCard[] = [
  {
    id: 'ssit',
    title: 'SSIT',
    label: 'Sense Academia',
    meta: 'Internship platform engineering',
    image: '/images/works/ssit.png',
    position: 'work-card--top',
    accent: '#7ccfff',
    Icon: ShieldCheck,
  },
  {
    id: 'going',
    title: 'Going to Places',
    label: 'Australian App',
    meta: 'Freelance product dashboard',
    image: '/images/works/going_to_places.png',
    position: 'work-card--left',
    accent: '#e5f8ef',
    Icon: MapPinned,
  },
  {
    id: 'healthcare',
    title: 'Healthcare Startup',
    label: 'Freelance',
    meta: 'QA & Backend Engineer',
    position: 'work-card--right',
    accent: '#7df0bc',
    Icon: HeartPulse,
  },
  {
    id: 'candida',
    title: 'Candida BioSciences',
    label: 'BioSystems',
    meta: 'Agriculture commerce experience',
    image: '/images/works/candida.png',
    position: 'work-card--bottom',
    accent: '#d8ff57',
    Icon: Dna,
  },
];

const archiveWorks: ArchiveWork[] = [
  {
    id: 'archive-chip',
    image: '/images/projects/project_1/image1.png',
    position: 'work-archive--top-left',
    accent: '#84d9ff',
  },
  {
    id: 'archive-dashboard',
    image: '/images/projects/project_2/cars_3.png',
    position: 'work-archive--bottom-left',
    accent: '#c9f0db',
  },
  {
    id: 'archive-plant',
    image: '/images/projects/plant_health.png',
    position: 'work-archive--top-right',
    accent: '#9ae4b1',
  },
  {
    id: 'archive-cars',
    image: '/images/projects/project_2/cars_7.png',
    position: 'work-archive--bottom-right',
    accent: '#b6c8ff',
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: ({ id }: WorkCard) => {
    const offsets = {
      ssit: { y: -74, x: 0 },
      candida: { y: 74, x: 0 },
      going: { y: 0, x: -94 },
      healthcare: { y: 0, x: 94 },
    };

    return {
      opacity: 0,
      scale: 0.92,
      filter: 'blur(12px)',
      ...offsets[id],
    };
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20, letterSpacing: '0.22em' },
  show: {
    opacity: 1,
    y: 0,
    letterSpacing: '0.16em',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 },
  },
};

function handleCardMove(event: MouseEvent<HTMLElement>) {
  const target = event.currentTarget;
  const bounds = target.getBoundingClientRect();
  const px = (event.clientX - bounds.left) / bounds.width;
  const py = (event.clientY - bounds.top) / bounds.height;
  const rotateY = (px - 0.5) * 10;
  const rotateX = (0.5 - py) * 8;

  target.style.setProperty('--work-rotate-x', `${rotateX.toFixed(2)}deg`);
  target.style.setProperty('--work-rotate-y', `${rotateY.toFixed(2)}deg`);
  target.style.setProperty('--work-glow-x', `${(px * 100).toFixed(1)}%`);
  target.style.setProperty('--work-glow-y', `${(py * 100).toFixed(1)}%`);
}

function resetCardMove(event: MouseEvent<HTMLElement>) {
  const target = event.currentTarget;

  target.style.setProperty('--work-rotate-x', '0deg');
  target.style.setProperty('--work-rotate-y', '0deg');
  target.style.setProperty('--work-glow-x', '50%');
  target.style.setProperty('--work-glow-y', '50%');
}

function HealthcareVisual() {
  return (
    <div className="healthcare-visual" aria-hidden="true">
      <div className="healthcare-visual__panel healthcare-visual__panel--main">
        <div className="healthcare-visual__topline">
          <span />
          <span />
          <span />
        </div>
        <HeartPulse className="healthcare-visual__heart" strokeWidth={1.45} />
        <div className="healthcare-visual__pulse" />
        <div className="healthcare-visual__rows">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="healthcare-visual__panel healthcare-visual__panel--side">
        <Activity className="h-5 w-5" strokeWidth={1.6} />
        <span />
        <span />
      </div>
      <div className="healthcare-visual__ring healthcare-visual__ring--one" />
      <div className="healthcare-visual__ring healthcare-visual__ring--two" />
    </div>
  );
}

function WorkCardView({ item }: { item: WorkCard }) {
  const Icon = item.Icon;
  const isGoingToPlaces = item.id === 'going';

  return (
    <motion.article
      custom={item}
      variants={cardVariants}
      className={`work-glass-card ${item.position}`}
      style={{ '--work-accent': item.accent } as CSSProperties}
      onMouseMove={handleCardMove}
      onMouseLeave={resetCardMove}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <div className="work-card__inner">
        <div className="work-card__media">
          {item.image ? (
            <Image
              src={item.image}
              alt={`${item.title} preview`}
              fill
              sizes="(max-width: 768px) 48vw, 42vw"
              priority={item.id === 'ssit'}
            />
          ) : (
            <HealthcareVisual />
          )}
        </div>

        <div className="work-card__shade" />
        <div
          className={`work-card__content ${
            isGoingToPlaces ? 'work-card__content--going' : ''
          }`}
        >
          <div
            className={`flex items-center gap-3 ${
              isGoingToPlaces ? 'justify-end' : 'justify-between'
            }`}
          >
            <span className="work-card__label">{item.label}</span>
            {!isGoingToPlaces && (
              <span className="work-card__icon">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
            )}
          </div>

          <div
            className={`work-card__body ${
              isGoingToPlaces ? 'work-card__body--going' : ''
            }`}
          >
            <h3>{item.title}</h3>
            <p>{item.meta}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ArchiveWorkFrame({ item }: { item: ArchiveWork }) {
  const eagerLoad = item.id === 'archive-dashboard';

  return (
    <div
      className={`work-archive-frame ${item.position}`}
      style={{ '--archive-accent': item.accent } as CSSProperties}
      aria-hidden="true"
    >
      <div className="work-archive-frame__media">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 900px) 0px, 22vw"
          priority={eagerLoad}
          loading={eagerLoad ? 'eager' : 'lazy'}
        />
      </div>
      <div className="work-archive-frame__shade" />
    </div>
  );
}

export default function MyWorkShowcase() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="my-work"
      className="work-showcase h-[65svw] overflow-hidden pt-10 pb-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(66,124,121,0.18),transparent_34%),radial-gradient(circle_at_20%_50%,rgba(68,115,162,0.15),transparent_30%),linear-gradient(180deg,#081118_0%,#050b10_38%,#07141a_100%)]" />
      <div className="absolute top-0 h-10 w-full worksdispersion blur-3xl"></div>
      <div className="absolute inset-0 -z-30 bg-[#0a1418f7]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_,rgba(66,124,121,0.18),transparent_34%),radial-gradient(circle_at_20%_50%,rgba(68,115,162,0.15),transparent_30%),linear-gradient(180deg,#081118_0%,#050b10_38%,#07141a_100%)]" />
      {/* <div className="absolute inset-0 -z-10 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:120px_120px] [mask-image:radial-gradient(circle_at_center,white_10%,transparent_78%)]" /> */}

      <div className="work-showcase__wash" />
      <div className="work-showcase__grain" />
      <div className="work-showcase__sweep" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="show"
        className="work-showcase__stage"
      >
        <motion.div
          variants={titleVariants}
          className="work-showcase__title my-12"
        >
          <h2>My Works</h2>
        </motion.div>

        {archiveWorks.map((item) => (
          <ArchiveWorkFrame key={item.id} item={item} />
        ))}

        {works.map((item) => (
          <WorkCardView key={item.id} item={item} />
        ))}

        {!reducedMotion && (
          <>
            <motion.span
              className="work-orbit work-orbit--one"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
            />
            <motion.span
              className="work-orbit work-orbit--two"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            />
          </>
        )}
      </motion.div>
    </section>
  );
}
