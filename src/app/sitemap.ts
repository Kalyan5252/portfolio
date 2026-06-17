import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/mywork', priority: 0.8, changeFrequency: 'monthly' as const },
  {
    path: '/projects/investigation-agent-blog',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/projects/job-search-agent',
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/projects/3d-car-showcase',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/projects/automated-payroll',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
