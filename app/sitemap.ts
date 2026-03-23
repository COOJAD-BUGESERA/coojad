import { MetadataRoute } from 'next'
import { siteConfig, getFullUrl } from '@/lib/seo-config'

const pages = ['', '/about', '/services', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'x-default': siteConfig.url,
        },
      },
    },
  ]

  // Generate entries for each page in each locale
  pages.forEach((page) => {
    siteConfig.locales.forEach((locale) => {
      const url = getFullUrl(`/${locale}${page}`)
      const alternateLanguages: Record<string, string> = {}
      
      // Add hreflang alternates for each locale
      siteConfig.locales.forEach((altLocale) => {
        alternateLanguages[altLocale] = getFullUrl(`/${altLocale}${page}`)
      })
      alternateLanguages['x-default'] = getFullUrl(`/${siteConfig.defaultLocale}${page}`)
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/services' ? 0.9 : 0.8,
        alternates: {
          languages: alternateLanguages,
        },
      })
    })
  })

  return sitemapEntries
}
