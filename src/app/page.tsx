import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Empty from './components/Empty';

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <Skills />
      {/* <Empty /> */}
      {/* <Projects /> */}
    </main>
  );
}
