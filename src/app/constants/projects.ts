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
    href: '/projects/3d-car-showcase',
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

export const carShowcaseProject = {
  title: '3D Car Showcase',
  label: 'Realtime Configurator',
  dateRange: '2024 - 2025',
  category: '3D Showcase',
  heroImage: '/images/projects/project_2/cars_1.png',
  introImage: '/images/projects/project_2/cars_3.png',
  graphImage: '/images/projects/project_2/cars_2.png',
  architectureImage: '/images/projects/project_2/cars_1.png',
  neo4jImage: '/images/projects/project_2/cars_5.png',
  tableImage: '/images/projects/project_2/cars_8.png',
  video: '/videos/project2_showcase.mp4',
  summary:
    'Immersive 3D car configurator for previewing models, paint, texture overlays, lighting moods, and reflective showroom setups in real time.',
  introduction:
    'Built a showroom-style 3D configurator that lets users swap car models, tune body color, apply texture overlays, and inspect the result under different lighting and ground reflections without breaking immersion.',
  caseStudy:
    'Most 3D car demos stop at a single beautiful render. That is useful for presentation, but it does not help a buyer, designer, or sales team compare how a finish behaves across models, lighting conditions, or display setups. This project was designed to push beyond that limitation. The experience moves from cinematic viewing into a hands-on configuration flow where users can rotate the car, switch between multiple models, adjust body color, test pattern overlays, change environment presets, toggle reflective ground moods, and save a preferred build for later review. The core challenge was balancing visual polish with real product behavior, keeping the scene premium while the controls, persistence layer, and review surfaces worked like a practical showroom tool.',
  outcome: 'Real-time customization with showroom-ready polish.',
  solutionBlocks: [
    {
      id: '1.',
      title: 'Realtime Scene Orchestration',
      body: 'The 3D experience is driven through React Three Fiber and Drei, with a shared UI state object controlling the selected model, body color, environment, ground mode, and texture behavior. Orbit controls, a tuned perspective camera, conditional environment loading, and scene-specific lighting keep the interaction smooth while allowing the showcase to shift between cinematic preview and hands-on inspection.',
    },
    {
      id: '2.',
      title: 'Configurator Control Surface',
      body: 'The interface is organized as a practical showroom control system rather than a loose collection of widgets. Users can open focused panels for color selection, pattern overlays, environment changes, ground presets, and model switching. This keeps the customization flow understandable while still exposing enough options to make the preview feel genuinely exploratory.',
    },
    {
      id: '3.',
      title: 'Materials, Lighting, and Mood',
      body: 'The strongest product decision was treating lighting and presentation as part of the configuration itself. HDRI skies, stage lighting, reflective ground states, and texture overlays all change the emotional read of the same vehicle. That turns the showcase from a simple model viewer into a finish-testing surface where paint, reflections, and silhouette can be judged in context.',
    },
    {
      id: '4.',
      title: 'Save, Review, and Analytics',
      body: 'Configured builds can be posted into a MongoDB-backed workflow, giving the app a real product loop beyond the canvas. Saved entries capture the customer name, selected model, color, material, and texture, then surface through admin and analytics pages for review, approval, and pattern-level reporting. That makes the project feel closer to a sales-enablement system than a one-off graphics experiment.',
    },
  ],
};
