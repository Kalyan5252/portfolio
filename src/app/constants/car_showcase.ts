import {
  BarChart3,
  Boxes,
  Database,
  Palette,
  Sparkles,
  SunMedium,
} from 'lucide-react';
import type { LiveContextCard } from '../live-context/LiveContextSection';
import type { ComparisonRow } from '../projects/investigation-agent-blog/ComparisonTable';
import type { MetricQuoteMetric } from '../projects/investigation-agent-blog/MetricQuotePanel';

export const carShowcaseCards: LiveContextCard[] = [
  {
    title: 'Model Library',
    body: 'Multiple GLTF vehicle options are wired into one scene so the showcase feels like a real lineup, not a one-car demo.',
    icon: Boxes,
  },
  {
    title: 'Finish Control',
    body: 'Body color, material choices, and texture overlays are surfaced through focused controls that stay easy to use.',
    icon: Palette,
  },
  {
    title: 'Scene Mood',
    body: 'Sky, street, and stage presets help the same vehicle read differently under different presentation conditions.',
    icon: SunMedium,
  },
  {
    title: 'Showroom Polish',
    body: 'Reflective ground states and tuned lighting give the previews enough drama to feel premium without losing usability.',
    icon: Sparkles,
  },
  {
    title: 'Saved Builds',
    body: 'Configurations can be persisted with customer and finish data so the experience extends beyond one browsing session.',
    icon: Database,
  },
  {
    title: 'Review Insights',
    body: 'Dashboard and analytics views turn saved configurations into something a team can review, filter, and learn from.',
    icon: BarChart3,
  },
];

export const carShowcaseComparisonRows: ComparisonRow[] = [
  {
    legacy: 'A single hero render shows one angle and one finish',
    conversion: 'A live scene lets users orbit the car and inspect the design from multiple viewpoints',
  },
  {
    legacy: 'Changing the model means preparing a different static asset',
    conversion: 'Users can switch between four car models inside the same experience',
  },
  {
    legacy: 'Color decisions are judged in one lighting condition only',
    conversion: 'Sky, street, and stage environments reveal how the finish behaves across moods',
  },
  {
    legacy: 'Pattern exploration requires separate mockups or post-processing',
    conversion: 'Texture overlays can be tested directly on the body in real time',
  },
  {
    legacy: 'Beautiful visuals end when the demo closes',
    conversion: 'Preferred builds can be saved into an admin-review workflow',
  },
  {
    legacy: 'The experience is only visual, with no product signal underneath',
    conversion: 'Saved designs feed dashboard and analytics views for follow-up and reporting',
  },
];

export const carShowcaseMetrics: MetricQuoteMetric[] = [
  {
    value: '4',
    label: 'Car models wired into the live configurator flow',
  },
  {
    value: '8',
    label: 'Pattern overlays available in addition to the clean baseline',
  },
  {
    value: '3',
    label: 'Environment presets used for comparative lighting previews',
  },
];
