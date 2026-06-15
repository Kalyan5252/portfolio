import Image from 'next/image';
import CustomCursor from '../../components/CustomCursor';
import { carShowcaseProject } from '../../constants/projects';
import InvestigationMedia from '../investigation-agent-blog/InvestigationMedia';
import { ComparisonTable } from '../investigation-agent-blog/ComparisonTable';
import { MetricQuotePanel } from '../investigation-agent-blog/MetricQuotePanel';
import { InvestigationSection } from '../investigation-agent-blog/InvestigationSection';
import Header from '@/app/components/Header';
import { LiveContextSection } from '@/app/live-context/LiveContextSection';
import {
  carShowcaseCards,
  carShowcaseComparisonRows,
  carShowcaseMetrics,
} from '@/app/constants/car_showcase';

export default function CarShowcaseBlogPage() {
  return (
    <main className="investigation-page min-h-screen font-sans text-white">
      <div className="investigation-page__background pointer-events-none fixed inset-0 -z-10" />
      <div className="investigation-page__grid pointer-events-none fixed inset-0 -z-10" />

      <section className="investigation-shell relative mx-auto flex w-full flex-col items-center pt-6 sm:pt-8">
        <Header />

        <InvestigationSection outerClassName="py-4 lg:px-10" innerClassName="">
          <p className="relative text-[1rem] text-[#858b8d] sm:text-[1.2rem] lg:text-[1.55rem]">
            {carShowcaseProject.dateRange}
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
              {carShowcaseProject.title}
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
                Showroom Fidelity
              </h2>
              <p className="mt-5 text-[1rem] leading-[1.75] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-6 lg:text-[1.2rem]">
                {carShowcaseProject.introduction}
              </p>
            </div>

            <div className="investigation-hero-card relative h-[250px] overflow-hidden rounded-xl sm:h-[300px] md:h-[340px] lg:h-[384px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,255,190,0.58),rgba(38,101,73,0.42)_42%,rgba(8,20,18,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,10,0.45),rgba(255,255,255,0)_40%,rgba(255,255,255,0)_100%)]" />
              <div className="relative mx-auto mt-5 h-[180px] w-[88%] overflow-hidden rounded-xl outline outline-[4px] outline-white/25 sm:mt-7 sm:h-[225px] md:h-[260px] lg:mt-8 lg:h-[281px] lg:w-[493px] lg:outline-[6px]">
                <Image
                  src={carShowcaseProject.introImage}
                  alt={carShowcaseProject.title}
                  fill
                  priority
                  sizes="(max-width: 1023px) 88vw, 493px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </InvestigationSection>

        <InvestigationSection outerClassName="!px-0 !py-0" innerClassName="">
          <InvestigationMedia
            poster={carShowcaseProject.heroImage}
            src={carShowcaseProject.video}
            title={carShowcaseProject.title}
            className="rounded-none border-x-0 border-y-0"
          />
        </InvestigationSection>

        <InvestigationSection outerClassName="py-10 lg:px-12 lg:py-16">
          <p className="text-[1rem] tracking-wide text-[#565656] sm:text-[1.2rem] lg:text-[1.75rem]">
            Case Study
          </p>
          <h2 className="investigation-serif mt-4 text-[2.4rem] leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4rem]">
            From Render to Configurator
          </h2>
          <p className="mt-6 max-w-[983px] text-left text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-8 lg:text-justify lg:text-[1.2rem] lg:leading-[1.7]">
            {carShowcaseProject.caseStudy}
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
              <div className="investigation-pill">{`${carShowcaseProject.solutionBlocks[0].id} ${carShowcaseProject.solutionBlocks[0].title}`}</div>
              <div className="mt-6 whitespace-pre-line text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {carShowcaseProject.solutionBlocks[0].body}
              </div>
            </div>
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={carShowcaseProject.architectureImage}
                alt="3D car environment preview"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="order-2 relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:order-1 lg:h-[383px] lg:outline-[10px]">
              <Image
                src={carShowcaseProject.graphImage}
                alt="Car configurator controls"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 pt-2 lg:order-2">
              <div className="investigation-pill w-fit lg:ml-auto">{`${carShowcaseProject.solutionBlocks[1].id} ${carShowcaseProject.solutionBlocks[1].title}`}</div>
              <p className="mt-6 max-w-[550px] text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {carShowcaseProject.solutionBlocks[1].body}
              </p>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="mt-10 max-w-[900px] lg:mt-14">
              <div className="investigation-pill">{`${carShowcaseProject.solutionBlocks[2].id} ${carShowcaseProject.solutionBlocks[2].title}`}</div>
              <p className="mt-6 max-w-[883px] text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {carShowcaseProject.solutionBlocks[2].body}
              </p>
            </div>
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={carShowcaseProject.tableImage}
                alt="Lighting and finish preview"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="relative h-[230px] overflow-hidden rounded-xl outline outline-[6px] outline-white/25 sm:h-[280px] md:h-[330px] lg:h-[383px] lg:outline-[10px]">
              <Image
                src={carShowcaseProject.neo4jImage}
                alt="Saved car design presentation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="investigation-pill w-fit">{`${carShowcaseProject.solutionBlocks[3].id} ${carShowcaseProject.solutionBlocks[3].title}`}</div>
              <p className="mt-6 text-[1rem] leading-[1.8] tracking-[0.01em] text-[#858b8d] sm:text-[1.05rem] md:text-[1.1rem] lg:mt-10 lg:text-[1.2rem] lg:leading-[1.7]">
                {carShowcaseProject.solutionBlocks[3].body}
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
          leftHeader="Static Preview"
          rightHeader="3D Showcase"
          rows={carShowcaseComparisonRows}
        />
      </InvestigationSection>

      <section>
        <LiveContextSection
          eyebrow="System View"
          title="Works beyond the canvas"
          description="Under the polished scene is a compact product stack: shared configurator state, asset switching, finish controls, persistence, and review-facing admin surfaces that make the experience useful after the first interaction."
          cards={carShowcaseCards}
        />
      </section>

      <InvestigationSection outerClassName="!px-0 !py-0" innerClassName="">
        <MetricQuotePanel
          quote="The real win was turning a beautiful 3D render into a usable showroom flow, where someone can compare finishes, switch vehicles, and save a preferred direction without leaving the experience."
          author="Project takeaway"
          title="3D Car Showcase"
          metrics={carShowcaseMetrics}
        />
      </InvestigationSection>
      <CustomCursor />
    </main>
  );
}
