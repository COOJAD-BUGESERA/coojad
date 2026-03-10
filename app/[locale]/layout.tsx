import type { Viewport, Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

type Locale = (typeof routing.locales)[number]

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://coojad.rw'

// Structured data for LocalBusiness (GEO targeting)
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${baseUrl}/#organization`,
  name: 'COOJAD-BUGESERA',
  alternateName: 'Cooperative de la Jeunesse pour l\'Auto-Emploi et Développement',
  description: 'A cooperative bank dedicated to empowering youth entrepreneurs with financial services, business training, and community support in Rwanda.',
  url: baseUrl,
  logo: `${baseUrl}/coojad-logo.jpeg`,
  image: `${baseUrl}/coojad-logo.jpeg`,
  telephone: '+250788403957',
  email: 'info@coojad.rw',
  foundingDate: '2008',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Opposite Nyamata Bus Park, APEBU School Road',
    addressLocality: 'Nyamata',
    addressRegion: 'Bugesera District',
    addressCountry: 'RW',
    postalCode: '',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -2.1445609,
    longitude: 30.092361,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Rwanda',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bugesera District',
    },
    {
      '@type': 'City',
      name: 'Nyamata',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -2.1445609,
      longitude: 30.092361,
    },
    geoRadius: '50000',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
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
          name: 'Business Loans',
          description: 'Commercial loans tailored for entrepreneurs and business owners',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Savings Accounts',
          description: 'Multiple savings products with attractive interest rates',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agriculture Loans',
          description: 'Specialized financing for farmers and livestock producers',
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'metadata' })

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = `${baseUrl}/${loc}`
  })

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: '%s | COOJAD-BUGESERA',
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'COOJAD-BUGESERA' }],
    creator: 'COOJAD-BUGESERA',
    publisher: 'COOJAD-BUGESERA',
    generator: 'Next.js',
    applicationName: 'COOJAD-BUGESERA',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    // Canonical URL
    alternates: {
      canonical: `${baseUrl}/${localeValue}`,
      languages: alternateLanguages,
    },
    // OpenGraph metadata
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      type: 'website',
      url: `${baseUrl}/${localeValue}`,
      siteName: 'COOJAD-BUGESERA',
      locale: localeValue === 'fr' ? 'fr_RW' : localeValue === 'rw' ? 'rw_RW' : 'en_RW',
      alternateLocale: routing.locales
        .filter(l => l !== localeValue)
        .map(l => l === 'fr' ? 'fr_RW' : l === 'rw' ? 'rw_RW' : 'en_RW'),
      images: [
        {
          url: `${baseUrl}/coojad-logo.jpeg`,
          width: 1200,
          height: 630,
          alt: 'COOJAD-BUGESERA - Empowering Youth Entrepreneurs in Rwanda',
        },
      ],
      countryName: 'Rwanda',
    },
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('ogDescription'),
      images: [`${baseUrl}/coojad-logo.jpeg`],
      creator: '@coojad',
      site: '@coojad',
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
      'geo.region': 'RW-05', // Rwanda - Southern Province (Bugesera)
      'geo.placename': 'Nyamata, Bugesera District, Rwanda',
      'geo.position': '-2.1445609;30.092361',
      'ICBM': '-2.1445609, 30.092361',
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
