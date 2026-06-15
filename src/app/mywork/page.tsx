import type { Metadata } from 'next';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import MyWorkShowcase from './MyWorkShowcase';

export const metadata: Metadata = {
  title: 'My Work',
  description: 'A curated showcase of internship and freelance software work.',
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
