import type { Metadata } from 'next';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import MyWorkShowcase from './MyWorkShowcase';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'My Work',
    description:
      'A curated showcase of internship and freelance software work by Kalyan Pendem across product engineering, frontend craft, and delivery.',
    path: '/mywork',
    keywords: ['software work showcase', 'freelance developer portfolio'],
  }),
};

export default function MyWorkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#04080a] text-white">
      <Header />
      <MyWorkShowcase />
      <ContactSection />
      <CustomCursor />
    </main>
  );
}
