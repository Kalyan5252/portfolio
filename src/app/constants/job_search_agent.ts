import {
  Bot,
  BriefcaseBusiness,
  Database,
  MailSearch,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type { LiveContextCard } from '../live-context/LiveContextSection';
import type { ComparisonRow } from '../projects/investigation-agent-blog/ComparisonTable';
import type { MetricQuoteMetric } from '../projects/investigation-agent-blog/MetricQuotePanel';

export const jobSearchAgentProject = {
  title: 'Job Search Agent',
  label: 'Multi-Agent Backend',
  dateRange: '2025',
  category: 'Backend Automation',
  heroImage: '/images/projects/project_4/image1.svg',
  introImage: '/images/projects/project_4/image2.svg',
  architectureImage: '/images/projects/project_4/image1.svg',
  graphImage: '/images/projects/project_4/image3.svg',
  tableImage: '/images/projects/project_4/image4.svg',
  neo4jImage: '/images/projects/project_4/image5.svg',
  summary:
    'Agentic backend that discovers jobs, scores relevance, fills applications, and tracks status updates from email.',
  introduction:
    'Built a multi-agent backend that turns job search into an orchestrated workflow: discovery sources are merged and scored, high-fit roles are queued for application, browser automation handles forms, and inbox updates sync status back into a structured tracker.',
  caseStudy:
    'Applying to jobs at scale usually breaks down in the same places: discovery is fragmented, scoring is subjective, application forms differ wildly, authentication expires, and status tracking becomes a mess of inbox searches and spreadsheets. This project was built to turn that chaos into a controlled backend system. Instead of one monolithic bot, the stack separates discovery, application execution, and tracking into specialized agents with shared profile context, queue-based handoff, and explicit human-in-the-loop checkpoints. The result is not just automation for automation’s sake. It is a safer system for moving from candidate profile to shortlisted opportunities, submitted applications, and auditable follow-up.',
  solutionBlocks: [
    {
      id: '1.',
      title: 'Discovery and Relevance Scoring',
      body: 'The JobHunter agent hydrates the candidate profile, queries multiple sources, merges the results, and runs LLM-assisted relevance scoring before anything gets queued. That helps the system avoid the common trap of blasting low-fit applications and instead focuses on role, skill, experience, and location alignment.',
    },
    {
      id: '2.',
      title: 'Queue-Backed Application Flow',
      body: 'Eligible jobs are persisted and pushed into BullMQ so application work can run asynchronously with retries and controlled failure handling. This is important because browser-driven flows are fragile by nature. Queueing creates a more production-like execution model than a single request-response bot loop.',
    },
    {
      id: '3.',
      title: 'Form Intelligence and Browser Automation',
      body: 'The Application agent uses Playwright to extract fields, summarize the resume, map answers with an LLM, validate required inputs, and run in preview or submit mode. It also recognizes real-world blockers such as expired LinkedIn or Google sessions, CAPTCHA gates, missing form fields, and external ATS redirects, then escalates instead of pretending the submission succeeded.',
    },
    {
      id: '4.',
      title: 'Email Tracking and Status Sync',
      body: 'The Tracker agent reads recent emails through IMAP, classifies the message intent, and updates application records in PostgreSQL. Combined with cron-based discovery and tracking loops, this gives the system a closed operational cycle: find roles, apply safely, and keep the pipeline current without manual inbox triage.',
    },
  ],
};

export const jobSearchAgentCards: LiveContextCard[] = [
  {
    title: 'Candidate profile',
    body: 'Resume, role, skills, and experience data are hydrated once and shared across the workflow.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Discovery agent',
    body: 'Aggregates multiple job sources and adds LLM-assisted scoring before anything reaches the queue.',
    icon: Workflow,
  },
  {
    title: 'Application agent',
    body: 'Extracts form fields, maps answers, drives Playwright, and supports preview or submit flows.',
    icon: Bot,
  },
  {
    title: 'Tracking agent',
    body: 'Reads inbox updates and turns raw email events into structured application status changes.',
    icon: MailSearch,
  },
  {
    title: 'Persistence layer',
    body: 'MongoDB stores raw/scored jobs while PostgreSQL tracks application lifecycle and status history.',
    icon: Database,
  },
  {
    title: 'Safe fallbacks',
    body: 'Auth expiry, CAPTCHA, validation gaps, and unsupported ATS flows all trigger explicit human handoff.',
    icon: ShieldCheck,
  },
];

export const jobSearchAgentComparisonRows: ComparisonRow[] = [
  {
    legacy: 'Search each job board manually and compare roles by eye',
    conversion: 'Merge multiple sources and score opportunities against one hydrated candidate profile',
  },
  {
    legacy: 'Copy-paste the same resume details into every form',
    conversion: 'Extract fields, map answers, and validate required inputs before form fill',
  },
  {
    legacy: 'Hope the browser bot finished successfully',
    conversion: 'Run preview or submit mode with explicit failure states and human handoff triggers',
  },
  {
    legacy: 'Lose track of applications inside email threads and tabs',
    conversion: 'Update application records automatically from classified inbox messages',
  },
  {
    legacy: 'One blocker can kill the whole automation chain',
    conversion: 'Queueing, retries, auth diagnostics, and guarded submit logic keep the pipeline resilient',
  },
  {
    legacy: 'Automation speed matters more than auditability',
    conversion: 'Structured logs, status stages, and stored records make the system explainable',
  },
];

export const jobSearchAgentMetrics: MetricQuoteMetric[] = [
  {
    value: '3',
    label: 'Specialized agents handling discovery, application, and tracking',
  },
  {
    value: '3',
    label: 'Core workflow entrypoints exposed through the API',
  },
  {
    value: '20m',
    label: 'Tracking cadence configured in the cron loop for inbox-based status sync',
  },
];
