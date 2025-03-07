import Image from 'next/image';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Skills from './components/Skills';
import Empty from './components/Empty';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Empty /> */}
      <Skills />
      <CustomCursor />
    </main>
  );
}
