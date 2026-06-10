import { Database, Palette, Plug2, Radar, Search, Users } from 'lucide-react';
import { LiveContextCard } from '../live-context/LiveContextSection';
export const cards: LiveContextCard[] = [
  {
    title: 'CRM',
    body: 'Every object, campaign, and custom field reads the way your ops team already reads it.',
    icon: Users,
  },
  {
    title: 'Warehouse',
    body: 'Snowflake, BigQuery, and other warehouses surface usage, billing, and tables in plain English.',
    icon: Database,
  },
  {
    title: 'Brand',
    body: 'Voice, visual systems, approved patterns, and historical assets stay aligned with the team tone.',
    icon: Palette,
  },
  {
    title: 'Semantic search',
    body: 'Find any audience, asset, or insight by intent, not by exact keyword or filter chain.',
    icon: Search,
  },
  {
    title: 'Pattern recognition',
    body: 'Surface anomalies, learn what is converting, and flag the moments worth your attention.',
    icon: Radar,
  },
  {
    title: 'Connected tools',
    body: 'Slack, Asana, Salesforce, and your warehouse all stay in the same working context.',
    icon: Plug2,
  },
];

export const comparisionRows = [
  {
    legacy: 'Their AI writes you a subject line',
    conversion: 'Conversion Agents draft the campaign, QA it, send it',
  },
  {
    legacy: 'Workflows fire on if/then rules you wrote a year ago',
    conversion:
      'Agents reason about each lead with the context that exists right',
  },
  {
    legacy: 'Every request starts from a blank brief',
    conversion: 'Every request lands with a drafted campaign attached',
  },
  {
    legacy: 'A broken UTM is discovered Monday morning, after the send',
    conversion: 'Campaign QA catches it before a single email leaves the queue',
  },
  {
    legacy: 'New use case = a workflow build, a QA cycle, and a sprint',
    conversion: 'New use case = describe it in chat, ship it in minutes',
  },
  {
    legacy: 'AI is a chat widget bolted onto a 15-year-old platform',
    conversion: 'Agents are the operating layer of the platform itself',
  },
];
