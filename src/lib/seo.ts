import type { Metadata } from 'next';

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: 'Kalyan Portfolio',
  defaultTitle: 'Kalyan Pendem | Full Stack & Applied AI Engineer',
  description:
    'Portfolio of Kalyan Pendem, a full stack and applied AI engineer building backend systems, AI workflows, polished web products, and production-minded case studies.',
  siteUrl:
    rawSiteUrl && rawSiteUrl.length > 0
      ? rawSiteUrl.replace(/\/+$/, '')
      : 'http://localhost:3000',
  locale: 'en_US',
  email: 'kalyanpendem007@gmail.com',
  githubUrl: 'https://github.com/Kalyan5252',
  linkedinUrl: 'https://www.linkedin.com/in/kalyanpendem/',
  profileImage: '/people/dp.png',
  location: 'India',
} as const;

export const defaultKeywords = [
  'Kalyan Pendem',
  'Kalyan portfolio',
  'full stack developer portfolio',
  'applied AI engineer',
  'Next.js portfolio',
  'React developer portfolio',
  'backend engineer portfolio',
  'AI automation engineer',
  'TypeScript developer',
  'DevOps engineer portfolio',
];

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: 'website' | 'article';
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = siteConfig.profileImage,
  keywords = [],
  noIndex = false,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const canonical = path === '/' ? '/' : path.replace(/\/+$/, '');
  const fullTitle = path === '/' ? siteConfig.defaultTitle : title;

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: absoluteUrl(image),
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

type StructuredProjectOptions = {
  name: string;
  description: string;
  path: string;
  image: string;
  category: string;
};

export function buildProjectStructuredData({
  name,
  description,
  path,
  image,
  category,
}: StructuredProjectOptions) {
  const url = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: `${name} Case Study`,
        name,
        description,
        url,
        image: absoluteUrl(image),
        mainEntityOfPage: url,
        author: {
          '@type': 'Person',
          name: 'Kalyan Pendem',
          url: absoluteUrl('/'),
        },
        publisher: {
          '@type': 'Person',
          name: 'Kalyan Pendem',
          url: absoluteUrl('/'),
        },
        about: [name, category, 'Software Engineering', 'Portfolio Case Study'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: absoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name,
            item: url,
          },
        ],
      },
    ],
  };
}
