import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { siteConfig, financialProducts, getCanonicalUrl, getLogoUrl, getOgLocale } from '@/lib/seo-config'

type Locale = (typeof routing.locales)[number]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const localeValue = locale as Locale
  const t = await getTranslations({ locale: localeValue, namespace: 'services' })

  const title = `${t('hero.titleLine1')} ${t('hero.titleLine2')}`
  const description = t('hero.subtitle')

  // Generate alternate language links
  const alternateLanguages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    alternateLanguages[loc] = getCanonicalUrl(loc, '/services')
  })
  alternateLanguages['x-default'] = getCanonicalUrl(siteConfig.defaultLocale, '/services')

  return {
    title,
    description,
    keywords: 'business loans Rwanda, agriculture loans Bugesera, savings accounts Rwanda, cooperative bank services, microfinance services Nyamata, youth entrepreneur loans, COOJAD services',
    alternates: {
      canonical: getCanonicalUrl(localeValue, '/services'),
      languages: alternateLanguages,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: 'website',
      url: getCanonicalUrl(localeValue, '/services'),
      siteName: siteConfig.name,
      locale: getOgLocale(localeValue),
      images: [
        {
          url: getLogoUrl(),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Financial Services`,
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

// BreadcrumbList for Services page
const servicesBreadcrumbJsonLd = {
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
      name: 'Services',
      item: getCanonicalUrl(siteConfig.defaultLocale, '/services'),
    },
  ],
}

// Structured data for services page using shared config
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: `${siteConfig.name} Financial Services`,
  description: 'Comprehensive financial services for entrepreneurs including business loans, savings accounts, agriculture loans, and business training.',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    '@type': 'Country',
    name: siteConfig.location.countryName,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Financial Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: financialProducts.businessLoans.name,
          description: `${financialProducts.businessLoans.description} from ${financialProducts.businessLoans.minAmount.toLocaleString()} ${financialProducts.businessLoans.currency} to ${financialProducts.businessLoans.maxAmount.toLocaleString()} ${financialProducts.businessLoans.currency} at ${financialProducts.businessLoans.interestRate}% annual interest rate`,
          amount: {
            '@type': 'MonetaryAmount',
            minValue: financialProducts.businessLoans.minAmount,
            maxValue: financialProducts.businessLoans.maxAmount,
            currency: financialProducts.businessLoans.currency,
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: financialProducts.agricultureLoans.name,
          description: `${financialProducts.agricultureLoans.description} at ${financialProducts.agricultureLoans.interestRate}% annual interest rate`,
          amount: {
            '@type': 'MonetaryAmount',
            minValue: financialProducts.agricultureLoans.minAmount,
            maxValue: financialProducts.agricultureLoans.maxAmount,
            currency: financialProducts.agricultureLoans.currency,
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'BankAccount',
          name: financialProducts.savingsAccounts.name,
          description: `${financialProducts.savingsAccounts.description} with ${financialProducts.savingsAccounts.interestRateMin}-${financialProducts.savingsAccounts.interestRateMax}% annual interest rates`,
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
          __html: JSON.stringify(servicesBreadcrumbJsonLd),
        }}
      />
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
