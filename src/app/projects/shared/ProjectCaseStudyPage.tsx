import Image from 'next/image';
import Header from '@/app/components/Header';
import CustomCursor from '@/app/components/CustomCursor';
import { LiveContextSection, type LiveContextCard } from '@/app/live-context/LiveContextSection';
import { ComparisonTable, type ComparisonRow } from '../investigation-agent-blog/ComparisonTable';
import { InvestigationSection } from '../investigation-agent-blog/InvestigationSection';
import { MetricQuotePanel, type MetricQuoteMetric } from '../investigation-agent-blog/MetricQuotePanel';
import { CaseStudyMedia, type CaseStudyMediaProps } from './CaseStudyMedia';

type SolutionBlock = {
  id: string;
  title: string;
  body: string;
};

type ProjectContent = {
  title: string;
  dateRange: string;
  introImage: string;
  introduction: string;
  caseStudy: string;
  architectureImage: string;
  graphImage: string;
  tableImage: string;
  neo4jImage: string;
  solutionBlocks: SolutionBlock[];
};

type ProjectCaseStudyPageProps = {
  project: ProjectContent;
  introHeading: string;
  caseStudyHeading: string;
  media?: CaseStudyMediaProps;
  comparison: {
    leftHeader: string;
    rightHeader: string;
    rows: ComparisonRow[];
  };
  context: {
    eyebrow: string;
    title: string;
    description: string;
    cards: LiveContextCard[];
  };
  metricsPanel?: {
    quote: string;
    author: string;
    title: string;
    metrics: MetricQuoteMetric[];
  };
  imageAlts: {
    architecture: string;
    graph: string;
    table: string;
    final: string;
  };
};

export function ProjectCaseStudyPage({
  project,
  introHeading,
  caseStudyHeading,
  media,
  comparison,
  context,
  metricsPanel,
  imageAlts,
}: ProjectCaseStudyPageProps) {
  return (
    <main className="investigation-page min-h-screen font-sans text-white">
      <div className="investigation-page__background pointer-events-none fixed inset-0 -z-10" />
      <div className="investigation-page__grid pointer-events-none fixed inset-0 -z-10" />

      <section className="investigation-shell relative mx-auto flex w-full flex-col items-center pt-6 sm:pt-8">
        <Header />

        <InvestigationSection outerClassName="py-4 lg:px-10" innerClassName="">
          <p className="relative text-[1rem] text-[#858b8d] sm:text-[1.2rem] lg:text-[1.55rem]">
            {project.dateRange}
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
              {project.title}
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
                {introHeading}
              </h2>
              <p className="mt-5 text-[1rem] leading-[1.75] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-6 lg:text-[1.2rem]">
                {project.introduction}
              </p>
            </div>

            <div className="investigation-hero-card relative h-[250px] overflow-hidden rounded-xl sm:h-[300px] md:h-[340px] lg:h-[384px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,255,190,0.58),rgba(38,101,73,0.42)_42%,rgba(8,20,18,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,10,0.45),rgba(255,255,255,0)_40%,rgba(255,255,255,0)_100%)]" />
              <div className="relative mx-auto mt-5 h-[180px] w-[88%] overflow-hidden rounded-xl outline outline-[4px] outline-white/25 sm:mt-7 sm:h-[225px] md:h-[260px] lg:mt-8 lg:h-[281px] lg:w-[493px] lg:outline-[6px]">
                <Image
                  src={project.introImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1023px) 88vw, 493px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </InvestigationSection>

        {media ? (
          <InvestigationSection outerClassName="!px-0 !py-0" innerClassName="">
            <CaseStudyMedia {...media} className="rounded-none border-x-0 border-y-0" />
          </InvestigationSection>
        ) : null}

        <InvestigationSection outerClassName="py-10 lg:px-12 lg:py-16">
          <p className="text-[1rem] tracking-wide text-[#565656] sm:text-[1.2rem] lg:text-[1.75rem]">
            Case Study
          </p>
          <h2 className="investigation-serif mt-4 text-[2.4rem] leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4rem]">
            {caseStudyHeading}
          </h2>
          <p className="mt-6 max-w-[983px] text-left text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-8 lg:text-justify lg:text-[1.2rem] lg:leading-[1.7]">
            {project.caseStudy}
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
              <div className="investigation-pill">{`${project.solutionBlocks[0].id} ${project.solutionBlocks[0].title}`}</div>
              <div className="mt-6 whitespace-pre-line text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {project.solutionBlocks[0].body}
              </div>
            </div>
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={project.architectureImage}
                alt={imageAlts.architecture}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="order-2 relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:order-1 lg:h-[383px] lg:outline-[10px]">
              <Image
                src={project.graphImage}
                alt={imageAlts.graph}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 pt-2 lg:order-2">
              <div className="investigation-pill w-fit lg:ml-auto">{`${project.solutionBlocks[1].id} ${project.solutionBlocks[1].title}`}</div>
              <p className="mt-6 max-w-[550px] text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {project.solutionBlocks[1].body}
              </p>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="mt-10 max-w-[900px] lg:mt-14">
              <div className="investigation-pill">{`${project.solutionBlocks[2].id} ${project.solutionBlocks[2].title}`}</div>
              <p className="mt-6 max-w-[883px] text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {project.solutionBlocks[2].body}
              </p>
            </div>
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={project.tableImage}
                alt={imageAlts.table}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={project.neo4jImage}
                alt={imageAlts.final}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="investigation-pill w-fit">{`${project.solutionBlocks[3].id} ${project.solutionBlocks[3].title}`}</div>
              <p className="mt-6 text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {project.solutionBlocks[3].body}
              </p>
            </div>
          </div>
        </InvestigationSection>
      </section>

      <InvestigationSection outerClassName="py-0 lg:px-0 lg:py-0" innerClassName="">
        <ComparisonTable
          leftHeader={comparison.leftHeader}
          rightHeader={comparison.rightHeader}
          rows={comparison.rows}
        />
      </InvestigationSection>

      <section>
        <LiveContextSection
          eyebrow={context.eyebrow}
          title={context.title}
          description={context.description}
          cards={context.cards}
        />
      </section>

      {metricsPanel ? (
        <InvestigationSection outerClassName="!px-0 !py-0" innerClassName="">
          <MetricQuotePanel
            quote={metricsPanel.quote}
            author={metricsPanel.author}
            title={metricsPanel.title}
            metrics={metricsPanel.metrics}
          />
        </InvestigationSection>
      ) : null}

      <CustomCursor />
    </main>
  );
}
