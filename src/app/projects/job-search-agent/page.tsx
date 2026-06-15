import { ProjectCaseStudyPage } from '../shared/ProjectCaseStudyPage';
import {
  jobSearchAgentCards,
  jobSearchAgentComparisonRows,
  jobSearchAgentMetrics,
  jobSearchAgentProject,
} from '@/app/constants/job_search_agent';

export default function JobSearchAgentPage() {
  return (
    <ProjectCaseStudyPage
      project={jobSearchAgentProject}
      introHeading="Agentic Hiring Ops"
      caseStudyHeading="From Search Fatigue to Controlled Automation"
      media={{
        kind: 'image',
        src: jobSearchAgentProject.heroImage,
        alt: 'Job Search Agent workflow overview',
      }}
      comparison={{
        leftHeader: 'Manual Hunt',
        rightHeader: 'Job Agent',
        rows: jobSearchAgentComparisonRows,
      }}
      context={{
        eyebrow: 'System View',
        title: 'A backend with operational memory',
        description:
          'This project is not one browser script. It combines profile hydration, multi-source discovery, queue-backed application work, guarded browser automation, and inbox-driven tracking into a system that can keep running across sessions.',
        cards: jobSearchAgentCards,
      }}
      metricsPanel={{
        quote:
          'The strongest part of this build is not that it can click through forms. It is that the automation is split into responsible stages, knows when to stop, and keeps the application pipeline synchronized afterward.',
        author: 'Project takeaway',
        title: 'Job Search Agent',
        metrics: jobSearchAgentMetrics,
      }}
      imageAlts={{
        architecture: 'Job Search Agent architecture overview',
        graph: 'Discovery and scoring workflow',
        table: 'Application execution workflow',
        final: 'Tracking and status sync workflow',
      }}
    />
  );
}
