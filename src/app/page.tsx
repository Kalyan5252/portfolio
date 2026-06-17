import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MyWorkShowcase from './mywork/MyWorkShowcase';
import { absoluteUrl, siteConfig, toJsonLd } from '@/lib/seo';
import { showcaseProjects } from './constants/projects';

export default function Home() {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': absoluteUrl('/#person'),
        name: 'Kalyan Pendem',
        url: absoluteUrl('/'),
        image: absoluteUrl(siteConfig.profileImage),
        jobTitle: 'Full Stack & Applied AI Engineer',
        description: siteConfig.description,
        email: `mailto:${siteConfig.email}`,
        knowsAbout: [
          'Full Stack Development',
          'Applied AI',
          'Backend Systems',
          'Next.js',
          'React',
          'TypeScript',
          'DevOps',
          'Automation',
        ],
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
        homeLocation: {
          '@type': 'Place',
          name: siteConfig.location,
        },
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        url: absoluteUrl('/'),
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': absoluteUrl('/#person'),
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/#webpage'),
        url: absoluteUrl('/'),
        name: siteConfig.defaultTitle,
        description: siteConfig.description,
        isPartOf: {
          '@id': absoluteUrl('/#website'),
        },
        about: {
          '@id': absoluteUrl('/#person'),
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: showcaseProjects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: absoluteUrl(project.href ?? '/'),
            name: project.title,
            description: project.summary,
          })),
        },
      },
    ],
  };

  return (
    <main className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(homeStructuredData) }}
      />
      <Hero />
      <Skills />
      <Projects />
      <MyWorkShowcase />
      <ContactSection />
    </main>
  );
}
