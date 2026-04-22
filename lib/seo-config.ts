export const siteConfig = {
  name: 'COOJAD-BUGESERA',
  legalName: "Cooperative de la Jeunesse pour l'Auto-Emploi et Développement - BUGESERA",
  alternateName: "Cooperative de la Jeunesse pour l'Auto-Emploi et Développement",
  shortName: 'COOJAD',
  description: 'A cooperative bank dedicated to empowering youth entrepreneurs with financial services, business training, and community support in Rwanda.',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://coojad.rw',
  logo: '/coojad-logo.jpeg',
  foundingDate: '2008-08-01',

  contact: {
    telephone: '+250788403957',
    telephoneDisplay: '0788 403 957',
    email: 'info@coojad.rw',
  },

  location: {
    streetAddress: 'Opposite Nyamata Bus Park, APEBU School Road',
    addressLocality: 'Nyamata',
    addressRegion: 'Bugesera District',
    addressCountry: 'RW',
    countryName: 'Rwanda',
    geoCoordinates: {
      latitude: -2.1445609,
      longitude: 30.092361,
    },
    geoRegion: 'RW-05',
    serviceRadius: '50000',
  },

  openingHours: {
    weekdays: { opens: '08:00', closes: '17:00' },
    saturday: { opens: '09:00', closes: '16:00' },
    sunday: null,
  },

  social: {
    twitter: '@coojad',
    twitterUrl: 'https://twitter.com/coojad',
    facebookUrl: 'https://www.facebook.com/coojad',
    linkedinUrl: 'https://www.linkedin.com/company/coojad',
  },

  locales: ['en', 'fr', 'rw'] as const,
  defaultLocale: 'en' as const,
}

export const financialProducts = {
  businessLoans: {
    name: 'Business Loans',
    description: 'Commercial loans tailored for entrepreneurs and business owners',
    minAmount: 50000,
    maxAmount: 20000000,
    currency: 'RWF',
    interestRate: 19,
  },
  agricultureLoans: {
    name: 'Agriculture & Livestock Loans',
    description: 'Specialized financing for farmers and livestock producers',
    minAmount: 50000,
    maxAmount: 20000000,
    currency: 'RWF',
    interestRate: 16,
  },
  savingsAccounts: {
    name: 'Savings Accounts',
    description: 'Multiple savings products with attractive interest rates',
    interestRateMin: 8,
    interestRateMax: 12,
    minOpeningBalance: 1000,
  },
  specialLoans: {
    name: 'Special Loan Products',
    description: 'Salary advances, school fees, vehicle, and mortgage loans',
    interestRate: 19,
    overdraftRate: 5,
  },
}

export function getFullUrl(path: string = ''): string {
  return `${siteConfig.url}${path}`
}

export function getCanonicalUrl(locale: string, page: string = ''): string {
  const prefix = locale === siteConfig.defaultLocale ? '' : `/${locale}`
  return `${siteConfig.url}${prefix}${page}`
}

export function getLogoUrl(): string {
  return getFullUrl(siteConfig.logo)
}

export function getOgLocale(locale: string): string {
  switch (locale) {
    case 'fr':
      return 'fr_RW'
    case 'rw':
      return 'rw_RW'
    default:
      return 'en_RW'
  }
}
