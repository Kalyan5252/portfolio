import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MyWorkShowcase from './mywork/MyWorkShowcase';

export default function Home() {
  return (
    <main className="text-white">
      {/* <Hero />
      <Skills /> */}
      <Projects />
      <MyWorkShowcase />
    </main>
  );
}
