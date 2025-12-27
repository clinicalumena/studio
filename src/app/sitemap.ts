
import { MetadataRoute } from 'next';
import { blogPosts, services } from '@/lib/data';

const BASE_URL = 'https://manyadigital.ar';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.lastUpdated ? new Date(post.lastUpdated) : new Date(post.date),
    changeFrequency: 'yearly' as 'yearly',
    priority: 0.9,
  }));
  
  const servicePages = services.map(service => ({
      url: `${BASE_URL}/servicios/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8
  }));


  return [...staticPages, ...blogPages, ...servicePages];
}
