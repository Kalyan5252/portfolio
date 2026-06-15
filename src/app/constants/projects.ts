export type ProjectEntry = {
  title: string;
  label: string;
  image: string;
  summary: string;
  narrative: string;
  category: string;
  outcome: string;
  href?: string;
  disabled?: boolean;
};

export const showcaseProjects: ProjectEntry[] = [
  {
    title: 'Graph Investigation AI',
    label: 'CDR IPDR Intelligence',
    image: '/images/projects/project_1/image1.png',
    summary:
      'Graph AI platform for tracing calls, IP sessions, devices, and hidden links across complex evidence.',
    narrative:
      'Built an AI investigation workspace that turns CDR/IPDR data into graph evidence, multi-hop links, and analyst-ready insights.',
    category: 'Investigation',
    outcome: 'Faster, auditable multi-source investigation flows',
    href: '/projects/investigation-agent-blog',
  },
  {
    title: '3D Car Configurator',
    label: 'Showroom Preview',
    image: '/images/projects/project_2/cars_4.png',
    summary:
      'A polished real-time car preview tool for exploring models, finishes, textures, and lighting setups.',
    narrative:
      'Built a real-time car configurator with live model switching, paint control, pattern overlays, and showroom lighting previews.',
    category: '3D Showcase',
    outcome: 'Real-time customization with showroom-ready polish',
    disabled: true,
  },
  {
    title: 'Automated Payroll',
    label: 'Smart HR Suite',
    image: '/images/projects/project_3/image1.png',
    summary:
      'Full-stack payroll system with attendance, leave management, salary automation, and payouts.',
    narrative:
      'Built a payroll platform integrating attendance, leave tracking, salary processing, and automated payouts in one workflow.',
    category: 'HRTech SaaS',
    outcome: 'Real-time customization with showroom-ready polish',
    disabled: true,
  },
];

export const investigationProject = {
  title: 'Graph Investigation AI',
  label: 'CDR IPDR Intelligence',
  dateRange: 'June 2025 - March 2026',
  category: 'Investigation',
  heroImage: '/images/projects/project_1/image1.png',
  introImage: '/images/projects/project_1/image1.png',
  graphImage: '/images/projects/project_1/image2.png',
  architectureImage: '/images/projects/project_1/image4.png',
  neo4jImage: '/images/projects/project_1/image5.png',
  tableImage: '/images/projects/project_1/image3.png',
  video: '/videos/project1_graph.mov',
  summary:
    'Graph AI platform for tracing calls, IP sessions, devices, and hidden links across complex evidence.',
  introduction:
    'Built an AI investigation workspace that turns CDR/IPDR data into graph evidence, multi-hop links, and analyst-ready insights.',
  caseStudy:
    'Law-enforcement investigations often rely on large Excel/SQL-style datasets containing CDR, IPDR, tower, IP, location, and banking records. The challenge is not storage alone, but relationship discovery under scale, time pressure, and high error cost. Manual joins, filters, and pivots are slow, technically demanding, and fragile. This platform was built to replace static querying with intelligence-driven graph reasoning: it converts heterogeneous evidence into Neo4j, lets investigators ask natural-language questions, and uses an orchestrated AI pipeline to infer direct, indirect, and temporal links across entities.',
  outcome: 'Faster, auditable multi-source investigation flows.',
  solutionBlocks: [
    {
      id: '1.',
      title: 'AI Orchestration Pipeline',
      body: 'Input query > intent detection > schema-grounded Cypher generation > bounded graph retrieval > candidate strategy evaluation > multi-LLM reasoning > final synthesis.\n\nThe orchestrator uses history-aware context, intent classification, fallback strategies, and safety constraints such as hop limits and temporal normalization. This makes the system adaptive instead of purely retrieval-based.',
    },
    {
      id: '2.',
      title: 'Neo4j Batch Uploads',
      body: 'Batch ingestion uses UNWIND to load large evidence files efficiently into Neo4j. This is necessary because investigative datasets contain repetitive entities, many-to-many links, and time-bound events. UNWIND reduces write overhead, supports scalable merging of nodes/relationships, and preserves graph integrity during high-volume ingestion.',
    },
    {
      id: '3.',
      title: 'LLM Reasoning and Synthesis',
      body: 'LLMs are used as evidence interpreters, not truth sources. Raw facts come from Neo4j, the model reasons over retrieved paths, timestamps, and entity links to produce analyst-readable conclusions. This reduces hallucination risk and supports explanations for hidden links, co-location, session tracing, and multi-hop correlation.',
    },
    {
      id: '4.',
      title: 'Query Generation Strategies',
      body: 'Implemented strategies include direct-edge lookup, known-intermediate traversal, bounded multi-hop fallback, shortest-path search, all-path search, timestamp correlation, and merged CE/PE evidence flows. The system prioritizes schema-specific routes, uses business keys such as msisdn, imei, cell_id, ip, and session_id, and avoids unsafe or semantically incorrect query patterns.',
    },
  ],
};
