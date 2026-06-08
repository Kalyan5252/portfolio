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

      <section className="investigation-shell relative mx-auto w-full pb-28 pt-8 flex flex-col items-center">
        <header className="flex justify-center border-b border-t border-white/8 py-4 w-full">
          <div className="flex items-center justify-between mx-auto min-w-6xl max-w-7xl h-10 px-4 sm:px-6 lg:px-8 ">
            <div className="w-[190px]">
              <Link
                href="/"
                className="investigation-serif text-[3rem] leading-none text-white"
              >
                Kalyan
              </Link>
            </div>

            <nav className="flex items-center gap-14 text-[1.05rem] text-white/80">
              <div className="flex items-center gap-14">
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
              className="rounded-xl bg-[#e8e8e8] px-5 py-3 text-[1.05rem] font-bold text-[#3e595c] shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5"
            >
              Get Resume
            </Link>
          </div>
        </header>

        <section className="w-full border-b border-white/8 flex justify-center">
          <div className="min-w-6xl max-w-7xl border-x border-white/8 px-4 py-4 sm:px-6 lg:px-8">
            <p className="relative text-[1.55rem] text-[#858b8d]">
              {investigationProject.dateRange}
            </p>
          </div>
        </section>

        <section className="border-b border-white/8 w-full flex justify-center">
          <div className="px-12 pb-12 pt-8 min-w-6xl max-w-7xl border-x border-white/8">
            <div className="mt-10">
              <p className="text-[1.75rem] tracking-wide text-[#9ca0a2]">
                Project
              </p>
              <h1 className="investigation-serif mt-5 text-[5.3rem] leading-[1.04] tracking-[-0.04em] text-white">
                {investigationProject.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 w-full flex justify-center">
          <div className="min-w-6xl max-w-7xl grid grid-cols-[1fr_565px] items-center gap-16 px-8 py-16 border-x border-white/8">
            <div className="max-w-[440px]">
              <p className="text-[1.75rem] tracking-wide text-[#565656]">
                Introduction
              </p>
              <h2 className="investigation-serif mt-5 text-[3.9rem] leading-[1.06] tracking-[-0.04em] text-white">
                Data Intelligence
              </h2>
              <p className="mt-6 text-[1.2rem] leading-[1.7] tracking-[0.01em] text-[#858b8d]">
                {investigationProject.introduction}
              </p>
            </div>

            <div className="investigation-hero-card relative h-[384px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,255,190,0.58),rgba(38,101,73,0.42)_42%,rgba(8,20,18,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,10,0.45),rgba(255,255,255,0)_40%,rgba(255,255,255,0)_100%)]" />
              <div className="relative mx-auto mt-8 h-[281px] w-[493px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25">
                <Image
                  src={investigationProject.introImage}
                  alt={investigationProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 w-full flex justify-center">
          <div className="min-w-6xl max-w-6xl px-0 py-0 border-x border-white/8">
            <InvestigationMedia
              poster={investigationProject.heroImage}
              src={investigationProject.video}
              title={investigationProject.title}
              className="rounded-none border-x-0 border-y-0"
            />
          </div>
        </section>

        <section className="border-b border-white/8 w-full flex justify-center">
          <div className="min-w-6xl max-w-6xl px-12 py-16 border-x border-white/8">
            <p className="text-[1.75rem] tracking-wide text-[#565656]">
              Case Study
            </p>
            <h2 className="investigation-serif mt-4 text-[4rem] leading-[1.06] tracking-[-0.04em] text-white">
              Investigation Overhead
            </h2>
            <p className="mt-8 max-w-[983px] text-justify text-[1.2rem] leading-[1.7] tracking-[0.01em] text-[#858b8d]">
              {investigationProject.caseStudy}
            </p>
          </div>
        </section>

        <section className="border-b border-white/8 w-full flex justify-center">
          <div className="min-w-6xl max-w-6xl px-12 py-2 border-x border-white/8">
            <h2 className="text-[3.4rem] tracking-[-0.03em] text-white">
              Solution
            </h2>
          </div>
        </section>

        <section className="border-b border-white/8 w-full flex justify-center">
          <div className="min-w-6xl max-w-6xl px-12 py-16 border-x border-white/8">
            <div className="mt-14 grid grid-cols-[1fr_1fr] justify-between gap-16">
              <div className="max-w-[1000px]">
                <div className="investigation-pill">{`${investigationProject.solutionBlocks[0].id} ${investigationProject.solutionBlocks[0].title}`}</div>
                <div className="mt-10 whitespace-pre-line text-[1.2rem] leading-[1.7] tracking-[0.01em] text-[#858b8d]">
                  {investigationProject.solutionBlocks[0].body}
                </div>
              </div>
              <div className="relative h-[383px] overflow-hidden rounded-xl outline outline-[10px] outline-white/25">
                <Image
                  src={investigationProject.architectureImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-14 grid grid-cols-[1fr_1fr] justify-between gap-16">
              <div className="relative h-[383px] overflow-hidden rounded-xl outline outline-[10px] outline-white/25">
                <Image
                  src={investigationProject.graphImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pt-2">
                <div className="investigation-pill ml-auto w-fit">{`${investigationProject.solutionBlocks[1].id} ${investigationProject.solutionBlocks[1].title}`}</div>
                <p className="mt-10 max-w-[550px] text-[1.2rem] leading-[1.7] tracking-[0.01em] text-[#858b8d]">
                  {investigationProject.solutionBlocks[1].body}
                </p>
              </div>
            </div>

            <div className="mt-14 max-w-[900px]">
              <div className="investigation-pill">{`${investigationProject.solutionBlocks[2].id} ${investigationProject.solutionBlocks[2].title}`}</div>
              <p className="mt-10 max-w-[883px] text-[1.2rem] leading-[1.7] tracking-[0.01em] text-[#858b8d]">
                {investigationProject.solutionBlocks[2].body}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-[1fr_1fr] gap-16">
              <div className="relative h-[383px] overflow-hidden rounded-xl outline outline-[10px] outline-white/25">
                <Image
                  src={investigationProject.graphImage}
                  alt="Graph investigation system view"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="investigation-pill w-fit">{`${investigationProject.solutionBlocks[3].id} ${investigationProject.solutionBlocks[3].title}`}</div>
                <p className="mt-10 text-[1.2rem] leading-[1.7] tracking-[0.01em] text-[#858b8d]">
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
