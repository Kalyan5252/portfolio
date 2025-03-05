import Image from 'next/image';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Introduce from './components/Introduce';
import Empty from './components/Empty';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Empty /> */}
      <Introduce />
      <CustomCursor />
    </main>
  );
}
