import { MetadataRoute } from 'next';
import { mockAirports, mockArticles, mockCompareItems } from '@/data/mock';
import { articles as blogArticles } from '@/data/articles';
import { TOPIC_CONFIGS } from '@/data/topics';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jichangsou.com';

  // Helper to format date safely as YYYY-MM-DD
  const formatDate = (dateStr?: string): string | undefined => {
    if (!dateStr) return undefined;
    const match = dateStr.match(/^\d{4}-\d{2}-\d{2}/);
    return match ? match[0] : undefined;
  };

  // 1. Static Core Pages & Section Indexes (no artificial lastModified)
  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/airports', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/ranking', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/ranking/best', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/ranking/cheap', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/ranking/stable', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/ranking/ai', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/compare', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/updates', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/topics', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/guides', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/wiki', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/methodology', priority: 0.5, changeFrequency: 'monthly' as const },
  ].map(item => ({
    url: `${baseUrl}${item.route}`,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 2. Topic Detail Routes (8 Topics)
  const topicRoutes = Object.keys(TOPIC_CONFIGS).map(slug => ({
    url: `${baseUrl}/topics/${slug}`,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }));

  // 3. Compare Detail Routes (3 Items)
  const compareRoutes = mockCompareItems.map(item => ({
    url: `${baseUrl}/compare/${item.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 4. Airport Detail Routes (all airports)
  const airportRoutes = mockAirports.map(airport => {
    const modDate = formatDate(airport.updated_at || airport.last_checked);
    return {
      url: `${baseUrl}/airport/${airport.slug}`,
      ...(modDate ? { lastModified: modDate } : {}),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    };
  });

  // 5. Guide Detail Routes
  const guideRoutes = mockArticles
    .filter(a => a.type === 'guide')
    .map(guide => {
      const modDate = formatDate(guide.updated_at || guide.created_at);
      return {
        url: `${baseUrl}/guides/${guide.slug}`,
        ...(modDate ? { lastModified: modDate } : {}),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      };
    });

  // 6. Wiki Detail Routes
  const wikiRoutes = mockArticles
    .filter(a => a.type === 'wiki')
    .map(wiki => {
      const modDate = formatDate(wiki.updated_at || wiki.created_at);
      return {
        url: `${baseUrl}/wiki/${wiki.slug}`,
        ...(modDate ? { lastModified: modDate } : {}),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      };
    });

  // 7. Blog Detail Routes
  const blogRoutes = blogArticles.map(blog => {
    const modDate = formatDate(blog.pubDate);
    return {
      url: `${baseUrl}/blog/${blog.id}`,
      ...(modDate ? { lastModified: modDate } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [
    ...staticRoutes,
    ...topicRoutes,
    ...compareRoutes,
    ...airportRoutes,
    ...guideRoutes,
    ...wikiRoutes,
    ...blogRoutes,
  ];
}
