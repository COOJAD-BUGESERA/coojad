import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type Locale = (typeof routing.locales)[number]

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://coojad.rw'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'about' })

  const title = `${t('hero.titleLine1')} ${t('hero.titleLine2')}`
  const description = t('hero.subtitle')

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = `${baseUrl}/${loc}/about`
  })

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${localeValue}/about`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${title} | COOJAD-BUGESERA`,
      description,
      type: 'website',
      url: `${baseUrl}/${localeValue}/about`,
      siteName: 'COOJAD-BUGESERA',
      locale: localeValue === 'fr' ? 'fr_RW' : localeValue === 'rw' ? 'rw_RW' : 'en_RW',
      images: [
        {
          url: `${baseUrl}/coojad-logo.jpeg`,
          width: 1200,
          height: 630,
          alt: 'About COOJAD-BUGESERA',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | COOJAD-BUGESERA`,
      description,
      images: [`${baseUrl}/coojad-logo.jpeg`],
    },
    other: {
      'geo.region': 'RW-05',
      'geo.placename': 'Nyamata, Bugesera District, Rwanda',
      'geo.position': '-2.1445609;30.092361',
      'ICBM': '-2.1445609, 30.092361',
    },
  }
}

// Structured data for about page - Organization schema
const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'COOJAD-BUGESERA',
    legalName: 'Cooperative de la Jeunesse pour l\'Auto-Emploi et Développement - BUGESERA',
    alternateName: ['COOJAD', 'COOJAD-BUGESERA'],
    description: 'A cooperative bank dedicated to empowering youth entrepreneurs with financial services, business training, and community support in Rwanda since 2008.',
    foundingDate: '2008-08-01',
    url: baseUrl,
    logo: `${baseUrl}/coojad-logo.jpeg`,
    image: `${baseUrl}/coojad-logo.jpeg`,
    telephone: '+250788403957',
    email: 'info@coojad.rw',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Opposite Nyamata Bus Park, APEBU School Road',
      addressLocality: 'Nyamata',
      addressRegion: 'Bugesera District',
      addressCountry: 'RW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -2.1445609,
      longitude: 30.092361,
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
