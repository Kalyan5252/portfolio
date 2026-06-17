import type { Metadata } from 'next';
import Image from 'next/image';
import CustomCursor from '../../components/CustomCursor';
import { investigationProject } from '../../constants/projects';
import InvestigationMedia from './InvestigationMedia';
import { ComparisonTable } from './ComparisonTable';
import { MetricQuotePanel } from './MetricQuotePanel';
import { InvestigationSection } from './InvestigationSection';
import {
  cards,
  comparisionRows,
  metrics,
} from '@/app/constants/livecontext_dummy';
import Header from '@/app/components/Header';
import { LiveContextSection } from '@/app/live-context/LiveContextSection';
import {
  buildPageMetadata,
  buildProjectStructuredData,
  toJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Graph Investigation AI Case Study',
  description: investigationProject.summary,
  path: '/projects/investigation-agent-blog',
  image: investigationProject.heroImage,
  type: 'article',
  keywords: [
    'graph investigation AI case study',
    'Neo4j AI portfolio project',
    'CDR IPDR intelligence platform',
  ],
});

export default function InvestigationAgentBlogPage() {
  const structuredData = buildProjectStructuredData({
    name: investigationProject.title,
    description: investigationProject.summary,
    path: '/projects/investigation-agent-blog',
    image: investigationProject.heroImage,
    category: investigationProject.category,
  });

  return (
    <main className="investigation-page min-h-screen font-sans text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(structuredData) }}
      />
      <div className="investigation-page__background pointer-events-none fixed inset-0 -z-10" />
      <div className="investigation-page__grid pointer-events-none fixed inset-0 -z-10" />

      <section className="investigation-shell relative mx-auto flex w-full flex-col items-center pt-6 sm:pt-8">
        <Header />

        <InvestigationSection outerClassName="py-4 lg:px-10" innerClassName="">
          <p className="relative text-[1rem] text-[#858b8d] sm:text-[1.2rem] lg:text-[1.55rem]">
            {investigationProject.dateRange}
          </p>
        </InvestigationSection>

        <InvestigationSection
          outerClassName="pb-10 pt-8 lg:px-12 lg:pb-12"
          innerClassName="mt-6 lg:mt-10"
        >
          <div>
            <p className="text-[1rem] tracking-wide text-[#9ca0a2] sm:text-[1.2rem] lg:text-[1.75rem]">
              Project
            </p>
            <h1 className="investigation-serif mt-4 max-w-[20ch] text-[2.8rem] leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.8rem] md:text-[4.6rem] lg:mt-5 lg:text-[5.3rem]">
              {investigationProject.title}
            </h1>
          </div>
        </InvestigationSection>

        <InvestigationSection outerClassName="py-10 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_565px] lg:items-center lg:gap-16">
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
        </InvestigationSection>

        <InvestigationSection outerClassName="!px-0 !py-0" innerClassName="">
          <InvestigationMedia
            poster={investigationProject.heroImage}
            src={investigationProject.video}
            title={investigationProject.title}
            className="rounded-none border-x-0 border-y-0"
          />
        </InvestigationSection>

        <InvestigationSection outerClassName="py-10 lg:px-12 lg:py-16">
          <p className="text-[1rem] tracking-wide text-[#565656] sm:text-[1.2rem] lg:text-[1.75rem]">
            Case Study
          </p>
          <h2 className="investigation-serif mt-4 text-[2.4rem] leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4rem]">
            Investigation Overhead
          </h2>
          <p className="mt-6 max-w-[983px] text-left text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-8 lg:text-justify lg:text-[1.2rem] lg:leading-[1.7]">
            {investigationProject.caseStudy}
          </p>
        </InvestigationSection>

        <InvestigationSection outerClassName="py-4 lg:px-12 lg:py-2">
          <h2 className="text-[2.2rem] tracking-[-0.03em] text-white sm:text-[2.7rem] lg:text-[3.4rem]">
            Solution
          </h2>
        </InvestigationSection>

        <InvestigationSection outerClassName="py-10 lg:px-12 lg:py-16">
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
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="order-2 relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:order-1 lg:h-[383px] lg:outline-[10px]">
              <Image
                src={investigationProject.graphImage}
                alt="Graph investigation system view"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
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

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
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
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={investigationProject.neo4jImage}
                alt="Graph investigation system view"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
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
        </InvestigationSection>
      </section>

      <InvestigationSection
        outerClassName="py-0 lg:px-0 lg:py-0"
        innerClassName=""
      >
        <ComparisonTable
          leftHeader="Legacy Map"
          rightHeader="Conversion"
          rows={comparisionRows}
        />
      </InvestigationSection>

      <section>
        <LiveContextSection
          eyebrow="Live Context"
          title="Knows your assets"
          description="Works where your team already works. Every chat, every scheduled run starts from the same shared context, your data, your brand, your stack."
          cards={cards}
        />
      </section>

      <InvestigationSection outerClassName="!px-0 !py-0" innerClassName="">
        <MetricQuotePanel
          quote="Every time we dig into the platform, we find another use case worth building. It's not just solving the priorities I came in with, it's expanding what we can reasonably take on this year."
          author="Jason Ginsberg"
          title="Head of Marketing, GovWell"
          metrics={metrics}
        />
      </InvestigationSection>
      <CustomCursor />
    </main>
  );
}
