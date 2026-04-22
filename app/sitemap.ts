import { MetadataRoute } from 'next'
import { siteConfig, getCanonicalUrl } from '@/lib/seo-config'

const pages = ['', '/about', '/services', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  pages.forEach((page) => {
    const alternateLanguages: Record<string, string> = {}

    siteConfig.locales.forEach((locale) => {
      alternateLanguages[locale] = getCanonicalUrl(locale, page)
    })
    alternateLanguages['x-default'] = getCanonicalUrl(siteConfig.defaultLocale, page)

    const canonicalUrl = getCanonicalUrl(siteConfig.defaultLocale, page)

    sitemapEntries.push({
      url: canonicalUrl,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : page === '/services' ? 0.9 : 0.8,
      alternates: {
        languages: alternateLanguages,
      },
    })
  })

  return sitemapEntries
}
