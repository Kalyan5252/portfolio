import Image from 'next/image';
import Link from 'next/link';
import CustomCursor from '../../components/CustomCursor';
import { investigationProject } from '../../constants/projects';
import InvestigationMedia from './InvestigationMedia';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Skills', href: '/#projects' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Works', href: '/#projects' },
  { label: 'Contact', href: '/#projects' },
];

export default function InvestigationAgentBlogPage() {
  return (
    <main className="investigation-page min-h-screen font-sans text-white">
      <div className="investigation-page__background pointer-events-none fixed inset-0 -z-10" />
      <div className="investigation-page__grid pointer-events-none fixed inset-0 -z-10" />

      <section className="investigation-shell relative mx-auto flex w-full flex-col items-center pb-20 pt-6 sm:pb-24 sm:pt-8">
        <header className="flex w-full justify-center border-b border-t border-white/8 py-4">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-5 sm:px-6 md:px-8 lg:h-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="w-full lg:w-[190px]">
              <Link
                href="/"
                className="investigation-serif text-[2.2rem] leading-none text-white sm:text-[2.6rem] lg:text-[3rem]"
              >
                Kalyan
              </Link>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem] text-white/80 sm:text-[1rem] lg:gap-14 lg:text-[1.05rem]">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-14">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <Link
              href="/#projects"
              className="w-fit rounded-xl bg-[#e8e8e8] px-4 py-2.5 text-[0.95rem] font-bold text-[#3e595c] shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-[1.05rem]"
            >
              Get Resume
            </Link>
          </div>
        </header>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="w-full max-w-[1280px] border-x border-white/8 px-5 py-4 sm:px-6 md:px-8 lg:px-10">
            <p className="relative text-[1rem] text-[#858b8d] sm:text-[1.2rem] lg:text-[1.55rem]">
              {investigationProject.dateRange}
            </p>
          </div>
        </section>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="w-full max-w-[1280px] border-x border-white/8 px-5 pb-10 pt-8 sm:px-6 md:px-8 lg:px-12 lg:pb-12">
            <div className="mt-6 lg:mt-10">
              <p className="text-[1rem] tracking-wide text-[#9ca0a2] sm:text-[1.2rem] lg:text-[1.75rem]">
                Project
              </p>
              <h1 className="investigation-serif mt-4 max-w-[20ch] text-[2.8rem] leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.8rem] md:text-[4.6rem] lg:mt-5 lg:text-[5.3rem]">
                {investigationProject.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="grid w-full max-w-[1280px] grid-cols-1 gap-10 border-x border-white/8 px-5 py-10 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_565px] lg:items-center lg:gap-16 lg:px-8 lg:py-16">
            <div className="max-w-[440px]">
              <p className="text-[1rem] tracking-wide text-[#565656] sm:text-[1.2rem] lg:text-[1.75rem]">
                Introduction
              </p>
              <h2 className="investigation-serif mt-4 text-[2.3rem] leading-[1.05] tracking-[-0.04em] text-white sm:text-[3rem] md:text-[3.4rem] lg:mt-5 lg:text-[3.9rem]">
                Data Intelligence
              </h2>
              <p className="mt-5 text-[1rem] leading-[1.75] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-6 lg:text-[1.2rem]">
                {investigationProject.introduction}
              </p>
            </div>

            <div className="investigation-hero-card relative h-[250px] overflow-hidden rounded-xl sm:h-[300px] md:h-[340px] lg:h-[384px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,255,190,0.58),rgba(38,101,73,0.42)_42%,rgba(8,20,18,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,10,0.45),rgba(255,255,255,0)_40%,rgba(255,255,255,0)_100%)]" />
              <div className="relative mx-auto mt-5 h-[180px] w-[88%] overflow-hidden rounded-xl outline outline-[4px] outline-white/25 sm:mt-7 sm:h-[225px] md:h-[260px] lg:mt-8 lg:h-[281px] lg:w-[493px] lg:outline-[6px]">
                <Image
                  src={investigationProject.introImage}
                  alt={investigationProject.title}
                  fill
                  sizes="(max-width: 1023px) 88vw, 493px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="w-full max-w-[1280px] border-x border-white/8 px-0 py-0">
            <InvestigationMedia
              poster={investigationProject.heroImage}
              src={investigationProject.video}
              title={investigationProject.title}
              className="rounded-none border-x-0 border-y-0"
            />
          </div>
        </section>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="w-full max-w-[1280px] border-x border-white/8 px-5 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
            <p className="text-[1rem] tracking-wide text-[#565656] sm:text-[1.2rem] lg:text-[1.75rem]">
              Case Study
            </p>
            <h2 className="investigation-serif mt-4 text-[2.4rem] leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4rem]">
              Investigation Overhead
            </h2>
            <p className="mt-6 max-w-[983px] text-left text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-8 lg:text-justify lg:text-[1.2rem] lg:leading-[1.7]">
              {investigationProject.caseStudy}
            </p>
          </div>
        </section>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="w-full max-w-[1280px] border-x border-white/8 px-5 py-4 sm:px-6 md:px-8 lg:px-12 lg:py-2">
            <h2 className="text-[2.2rem] tracking-[-0.03em] text-white sm:text-[2.7rem] lg:text-[3.4rem]">
              Solution
            </h2>
          </div>
        </section>

        <section className="flex w-full justify-center border-b border-white/8">
          <div className="w-full max-w-[1280px] border-x border-white/8 px-5 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-16">
            <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="max-w-[1000px]">
                <div className="investigation-pill">{`${investigationProject.solutionBlocks[0].id} ${investigationProject.solutionBlocks[0].title}`}</div>
                <div className="mt-6 whitespace-pre-line text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                  {investigationProject.solutionBlocks[0].body}
                </div>
              </div>
              <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
                <Image
                  src={investigationProject.architectureImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="order-2 relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:order-1 lg:h-[383px] lg:outline-[10px]">
                <Image
                  src={investigationProject.graphImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 pt-2 lg:order-2">
                <div className="investigation-pill w-fit lg:ml-auto">{`${investigationProject.solutionBlocks[1].id} ${investigationProject.solutionBlocks[1].title}`}</div>
                <p className="mt-6 max-w-[550px] text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                  {investigationProject.solutionBlocks[1].body}
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="mt-10 max-w-[900px] lg:mt-14">
                <div className="investigation-pill">{`${investigationProject.solutionBlocks[2].id} ${investigationProject.solutionBlocks[2].title}`}</div>
                <p className="mt-6 max-w-[883px] text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                  {investigationProject.solutionBlocks[2].body}
                </p>
              </div>
              <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
                <Image
                  src={investigationProject.tableImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
                <Image
                  src={investigationProject.neo4jImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="investigation-pill w-fit">{`${investigationProject.solutionBlocks[3].id} ${investigationProject.solutionBlocks[3].title}`}</div>
                <p className="mt-6 text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                  {investigationProject.solutionBlocks[3].body}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <CustomCursor />
    </main>
  );
}
