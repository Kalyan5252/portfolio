import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cards Demo',
  description: 'Experimental card interaction demo inside the portfolio app.',
  path: '/cards',
  noIndex: true,
});

export default function CardsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
