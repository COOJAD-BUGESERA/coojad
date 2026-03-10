import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { siteConfig, getFullUrl, getLogoUrl, getOgLocale } from '@/lib/seo-config'

type Locale = (typeof routing.locales)[number]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'about' })

  const title = `${t('hero.titleLine1')} ${t('hero.titleLine2')}`
  const description = t('hero.subtitle')

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = getFullUrl(`/${loc}/about`)
  })

  return {
    title,
    description,
    alternates: {
      canonical: getFullUrl(`/${localeValue}/about`),
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: 'website',
      url: getFullUrl(`/${localeValue}/about`),
      siteName: siteConfig.name,
      locale: getOgLocale(localeValue),
      images: [
        {
          url: getLogoUrl(),
          width: 1200,
          height: 630,
          alt: `About ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [getLogoUrl()],
    },
    other: {
      'geo.region': siteConfig.location.geoRegion,
      'geo.placename': `${siteConfig.location.addressLocality}, ${siteConfig.location.addressRegion}, ${siteConfig.location.countryName}`,
      'geo.position': `${siteConfig.location.geoCoordinates.latitude};${siteConfig.location.geoCoordinates.longitude}`,
      'ICBM': `${siteConfig.location.geoCoordinates.latitude}, ${siteConfig.location.geoCoordinates.longitude}`,
    },
  }
}

// Structured data for about page - Organization schema using shared config
const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.shortName, siteConfig.name],
    description: `${siteConfig.description} since ${new Date(siteConfig.foundingDate).getFullYear()}.`,
    foundingDate: siteConfig.foundingDate,
    url: siteConfig.url,
    logo: getLogoUrl(),
    image: getLogoUrl(),
    telephone: siteConfig.contact.telephone,
    email: siteConfig.contact.email,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.streetAddress,
      addressLocality: siteConfig.location.addressLocality,
      addressRegion: siteConfig.location.addressRegion,
      addressCountry: siteConfig.location.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.geoCoordinates.latitude,
      longitude: siteConfig.location.geoCoordinates.longitude,
    },
    knowsAbout: [
      'Microfinance',
      'Business Loans',
      'Savings Accounts',
      'Youth Entrepreneurship',
      'Financial Inclusion',
      'Agricultural Finance',
    ],
    award: [
      'Microfinance License No. 337 from National Bank of Rwanda',
      'Recognition from Rwanda Cooperative Agency (RCA)',
    ],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd),
        }}
      />
      {children}
    </>
  )
}
