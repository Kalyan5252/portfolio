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
