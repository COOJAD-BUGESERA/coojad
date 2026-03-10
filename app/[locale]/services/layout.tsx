import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type Locale = (typeof routing.locales)[number]

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://coojad.rw'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'services' })
  const tMeta = await getTranslations({ locale: localeValue, namespace: 'metadata' })

  const title = `${t('hero.titleLine1')} ${t('hero.titleLine2')}`
  const description = t('hero.subtitle')

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = `${baseUrl}/${loc}/services`
  })

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${localeValue}/services`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${title} | COOJAD-BUGESERA`,
      description,
      type: 'website',
      url: `${baseUrl}/${localeValue}/services`,
      siteName: 'COOJAD-BUGESERA',
      locale: localeValue === 'fr' ? 'fr_RW' : localeValue === 'rw' ? 'rw_RW' : 'en_RW',
      images: [
        {
          url: `${baseUrl}/coojad-logo.jpeg`,
          width: 1200,
          height: 630,
          alt: 'COOJAD-BUGESERA Financial Services',
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

// Structured data for services page
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'COOJAD-BUGESERA Financial Services',
  description: 'Comprehensive financial services for entrepreneurs including business loans, savings accounts, agriculture loans, and business training.',
  provider: {
    '@type': 'Organization',
    name: 'COOJAD-BUGESERA',
    url: baseUrl,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Rwanda',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Financial Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: 'Business Loans',
          description: 'Commercial loans from 50,000 RWF to 20,000,000 RWF at 19% annual interest rate',
          amount: {
            '@type': 'MonetaryAmount',
            minValue: 50000,
            maxValue: 20000000,
            currency: 'RWF',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: 'Agriculture & Livestock Loans',
          description: 'Specialized financing for farmers at 16% annual interest rate',
          amount: {
            '@type': 'MonetaryAmount',
            minValue: 50000,
            maxValue: 20000000,
            currency: 'RWF',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'BankAccount',
          name: 'Savings Accounts',
          description: 'Multiple savings products with 8-12% annual interest rates',
        },
      },
    ],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      {children}
    </>
  )
}
