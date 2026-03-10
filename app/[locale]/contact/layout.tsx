import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type Locale = (typeof routing.locales)[number]

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://coojad.rw'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'contact' })

  const title = `${t('hero.titleLine1')} ${t('hero.titleLine2')}`
  const description = t('hero.subtitle')

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = `${baseUrl}/${loc}/contact`
  })

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${localeValue}/contact`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${title} | COOJAD-BUGESERA`,
      description,
      type: 'website',
      url: `${baseUrl}/${localeValue}/contact`,
      siteName: 'COOJAD-BUGESERA',
      locale: localeValue === 'fr' ? 'fr_RW' : localeValue === 'rw' ? 'rw_RW' : 'en_RW',
      images: [
        {
          url: `${baseUrl}/coojad-logo.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Contact COOJAD-BUGESERA',
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

// Structured data for contact page with enhanced GEO information
const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#contact`,
    name: 'COOJAD-BUGESERA',
    description: 'Contact COOJAD-BUGESERA cooperative bank for business loans, savings accounts, and financial services in Nyamata, Rwanda.',
    url: `${baseUrl}/contact`,
    telephone: '+250788403957',
    email: 'info@coojad.rw',
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
    hasMap: 'https://www.google.com/maps?q=-2.1445609,30.092361',
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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+250788403957',
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Kinyarwanda'],
        areaServed: 'RW',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@coojad.rw',
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Kinyarwanda'],
        areaServed: 'RW',
      },
    ],
  },
}

// FAQ structured data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the requirements to get a business loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be 18-65 years old, a Rwandan citizen with valid ID, have an active business or business plan, stable income, and able to provide collateral.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the loan approval process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our typical approval process takes 5-7 business days from application submission. Some applications may be processed faster depending on documentation completeness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the interest rates for loans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our interest rates range from 12% - 18% per annum, depending on loan amount, duration, and your credit profile. We offer competitive rates in the market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer training programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer comprehensive training programs including entrepreneurship fundamentals, financial management, marketing, and leadership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I open a savings account with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We offer flexible savings accounts with competitive interest rates (8%-12% p.a.), no hidden charges, and bonus rewards. Minimum opening balance is 50,000 RWF.',
      },
    },
  ],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      {children}
    </>
  )
}
