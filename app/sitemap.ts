import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://coojad.rw'

const locales = ['en', 'fr', 'rw']
const pages = ['', '/about', '/services', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generate entries for each page in each locale
  pages.forEach((page) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${page}`
      const alternateLanguages: Record<string, string> = {}
      
      // Add hreflang alternates for each locale
      locales.forEach((altLocale) => {
        alternateLanguages[altLocale] = `${baseUrl}/${altLocale}${page}`
      })
      
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
