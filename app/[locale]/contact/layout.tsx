import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { siteConfig, financialProducts, getFullUrl, getLogoUrl, getOgLocale } from '@/lib/seo-config'

type Locale = (typeof routing.locales)[number]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'contact' })

  const title = `${t('hero.titleLine1')} ${t('hero.titleLine2')}`
  const description = t('hero.subtitle')

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = getFullUrl(`/${loc}/contact`)
  })
  alternateLanguages['x-default'] = getFullUrl(`/${siteConfig.defaultLocale}/contact`)

  return {
    title,
    description,
    keywords: 'contact COOJAD-BUGESERA, cooperative bank Nyamata contact, loan application Rwanda, COOJAD phone number, COOJAD email, visit COOJAD Bugesera',
    alternates: {
      canonical: getFullUrl(`/${localeValue}/contact`),
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: 'website',
      url: getFullUrl(`/${localeValue}/contact`),
      siteName: siteConfig.name,
      locale: getOgLocale(localeValue),
      images: [
        {
          url: getLogoUrl(),
          width: 1200,
          height: 630,
          alt: `Contact ${siteConfig.name}`,
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

// BreadcrumbList for Contact page
const contactBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: `${siteConfig.url}/en/contact`,
    },
  ],
}

// Structured data for contact page with enhanced GEO information using shared config
const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#contact`,
    name: siteConfig.name,
    description: `Contact ${siteConfig.name} cooperative bank for business loans, savings accounts, and financial services in ${siteConfig.location.addressLocality}, ${siteConfig.location.countryName}.`,
    url: getFullUrl('/contact'),
    telephone: siteConfig.contact.telephone,
    email: siteConfig.contact.email,
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
    hasMap: `https://www.google.com/maps?q=${siteConfig.location.geoCoordinates.latitude},${siteConfig.location.geoCoordinates.longitude}`,
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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.telephone,
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Kinyarwanda'],
        areaServed: siteConfig.location.addressCountry,
      },
      {
        '@type': 'ContactPoint',
        email: siteConfig.contact.email,
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Kinyarwanda'],
        areaServed: siteConfig.location.addressCountry,
      },
    ],
  },
}

// FAQ structured data using shared config for accurate rates
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
        text: `Our interest rates are ${financialProducts.businessLoans.interestRate}% per annum for business loans, salary advances, and special loans. Agriculture and livestock loans have a reduced rate of ${financialProducts.agricultureLoans.interestRate}% per annum. Savings accounts earn ${financialProducts.savingsAccounts.interestRateMin}%-${financialProducts.savingsAccounts.interestRateMax}% p.a.`,
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
        text: `Absolutely! We offer flexible savings accounts with competitive interest rates (${financialProducts.savingsAccounts.interestRateMin}%-${financialProducts.savingsAccounts.interestRateMax}% p.a.), no hidden charges, and bonus rewards. Minimum opening balance is ${financialProducts.savingsAccounts.minOpeningBalance.toLocaleString()} RWF.`,
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
          __html: JSON.stringify(contactBreadcrumbJsonLd),
        }}
      />
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
