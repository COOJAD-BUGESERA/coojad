import type { Viewport, Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { siteConfig, financialProducts, getFullUrl, getLogoUrl, getOgLocale } from '@/lib/seo-config'
import '../globals.css'

type Locale = (typeof routing.locales)[number]

// Structured data for LocalBusiness (GEO targeting) using shared config
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: getLogoUrl(),
  image: getLogoUrl(),
  telephone: siteConfig.contact.telephone,
  email: siteConfig.contact.email,
  foundingDate: siteConfig.foundingDate,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.location.streetAddress,
    addressLocality: siteConfig.location.addressLocality,
    addressRegion: siteConfig.location.addressRegion,
    addressCountry: siteConfig.location.addressCountry,
    postalCode: '',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.location.geoCoordinates.latitude,
    longitude: siteConfig.location.geoCoordinates.longitude,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: siteConfig.location.countryName,
    },
    {
      '@type': 'AdministrativeArea',
      name: siteConfig.location.addressRegion,
    },
    {
      '@type': 'City',
      name: siteConfig.location.addressLocality,
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.geoCoordinates.latitude,
      longitude: siteConfig.location.geoCoordinates.longitude,
    },
    geoRadius: siteConfig.location.serviceRadius,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: siteConfig.openingHours.weekdays.opens,
      closes: siteConfig.openingHours.weekdays.closes,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: siteConfig.openingHours.saturday.opens,
      closes: siteConfig.openingHours.saturday.closes,
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Financial Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: financialProducts.businessLoans.name,
          description: financialProducts.businessLoans.description,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: financialProducts.savingsAccounts.name,
          description: financialProducts.savingsAccounts.description,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: financialProducts.agricultureLoans.name,
          description: financialProducts.agricultureLoans.description,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Training',
          description: 'Entrepreneurship training and financial education programs',
        },
      },
    ],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: ['en', 'fr', 'rw'],
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
}

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does COOJAD-BUGESERA offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'COOJAD-BUGESERA offers business loans, agriculture and livestock loans, savings accounts, and entrepreneurship training services for youth and small businesses in Rwanda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can apply for a business loan at COOJAD-BUGESERA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Young entrepreneurs and business owners in Rwanda can apply for business loans when they meet eligibility requirements such as valid identification, business activity or a business plan, and required collateral.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is COOJAD-BUGESERA located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'COOJAD-BUGESERA is located in Nyamata, Bugesera District, Rwanda, opposite Nyamata Bus Park on APEBU School Road.',
      },
    },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'metadata' })

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = getFullUrl(`/${loc}`)
  })

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('title'),
      template: `%s | ${siteConfig.name}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    generator: 'Next.js',
    applicationName: siteConfig.name,
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    // Canonical URL
    alternates: {
      canonical: getFullUrl(`/${localeValue}`),
      languages: alternateLanguages,
    },
    // OpenGraph metadata
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      type: 'website',
      url: getFullUrl(`/${localeValue}`),
      siteName: siteConfig.name,
      locale: getOgLocale(localeValue),
      alternateLocale: routing.locales
        .filter(l => l !== localeValue)
        .map(l => getOgLocale(l)),
      images: [
        {
          url: getLogoUrl(),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Empowering Youth Entrepreneurs in Rwanda`,
        },
      ],
      countryName: siteConfig.location.countryName,
    },
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('ogDescription'),
      images: [getLogoUrl()],
      creator: siteConfig.social.twitter,
      site: siteConfig.social.twitter,
    },
    // Robots directives
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Icons
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/site.webmanifest',
    // Verification tags (placeholders - can be updated with actual values)
    verification: {
      google: '',
      yandex: '',
    },
    // Category for the website
    category: 'finance',
    // GEO targeting meta tags
    other: {
      'geo.region': siteConfig.location.geoRegion,
      'geo.placename': `${siteConfig.location.addressLocality}, ${siteConfig.location.addressRegion}, ${siteConfig.location.countryName}`,
      'geo.position': `${siteConfig.location.geoCoordinates.latitude};${siteConfig.location.geoCoordinates.longitude}`,
      'ICBM': `${siteConfig.location.geoCoordinates.latitude}, ${siteConfig.location.geoCoordinates.longitude}`,
      'content-language': localeValue,
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages({ locale: locale as Locale })

  return (
    <html lang={locale}>
      <head>
        {/* JSON-LD Structured Data for SEO and GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeFaqJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
