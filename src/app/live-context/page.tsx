import type { Metadata } from 'next';
import { LiveContextSection, type LiveContextCard } from './LiveContextSection';
import { cards } from '../constants/livecontext_dummy';

export const metadata: Metadata = {
  title: 'Live Context',
  description: 'A dusky grid-based showcase section with contextual cards.',
};

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
