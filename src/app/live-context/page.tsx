import type { Metadata } from 'next';
import { LiveContextSection, type LiveContextCard } from './LiveContextSection';
import { cards } from '../constants/livecontext_dummy';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Live Context Demo',
  description:
    'Experimental live context showcase used inside the portfolio build.',
  path: '/live-context',
  noIndex: true,
});

export default function LiveContextPage() {
  return (
    <main className="w-full">
      <LiveContextSection
        eyebrow="Live Context"
        title="Knows your assets"
        description="Works where your team already works. Every chat, every scheduled run starts from the same shared context, your data, your brand, your stack."
        cards={cards}
      />
    </main>
  );
}
