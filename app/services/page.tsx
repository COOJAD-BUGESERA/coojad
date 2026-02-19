'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle, ArrowRight, Briefcase, Wheat, Landmark, CreditCard } from 'lucide-react'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  eligibility: string[]
  process: string[]
  accent: string
}

const services: Service[] = [
  {
    title: 'Business Loans',
    icon: Briefcase,
    accent: 'from-primary/10 to-accent/5',
    description: 'Commercial loans tailored for entrepreneurs and business owners looking to grow their ventures.',
    features: [
      'Loan amounts: 50,000 RWF - 20,000,000 RWF',
      'Interest rate: 19% annually',
      'Flexible repayment terms',
      'Quick approval process (5-7 days)',
      'Personal business mentoring included'
    ],
    eligibility: [
      'Age: 21-60 years',
      'Active business or detailed business plan',
      'Stable income source',
      'Valid ID and residence proof',
      'Able to provide collateral'
    ],
    process: [
      'Complete application form with business plan',
      'Meet with loan officer for assessment',
      'Provide financial documents and collateral details',
      'Loan evaluation and decision',
      'Fund disbursement upon approval'
    ]
  },
  {
    title: 'Agriculture & Livestock Loans',
    icon: Wheat,
    accent: 'from-accent/10 to-primary/5',
    description: 'Specialized financing for farmers and livestock producers to boost agricultural productivity.',
    features: [
      'Loan amounts: 50,000 RWF - 20,000,000 RWF',
      'Interest rate: 16% annually (lower rate for agricultural activities)',
      'Seasonal repayment plans available',
      'Agricultural extension support',
      'Equipment financing options'
    ],
    eligibility: [
      'Age: 21-60 years',
      'Active farming or livestock business',
      'Arable land or agricultural assets',
      'Valid ID documentation',
      'Agricultural experience'
    ],
    process: [
      'Submit application with farm details',
      'Site visit to assess agricultural assets',
      'Provide land documents and agricultural plan',
      'Loan approval based on harvest schedule',
      'Seasonal fund disbursement and repayment'
    ]
  },
  {
    title: 'Savings Accounts',
    icon: Landmark,
    accent: 'from-primary/10 to-accent/5',
    description: 'Multiple savings products to help you build wealth securely with attractive interest rates.',
    features: [
      'School Fees Account - Interest rate: 8-12% p.a.',
      'Home Furniture Account - Dedicated savings product',
      'Fixed Deposit Account - Competitive returns',
      'Children\'s Savings Account - Start early wealth building',
      'Minimum balance: 1,000 RWF to open'
    ],
    eligibility: [
      'Age: 18+ years (children accounts for minors)',
      'Rwandan citizen with valid ID',
      'Stable income',
      'Regular savings commitment'
    ],
    process: [
      'Visit our office with valid ID',
      'Choose your preferred savings product',
      'Complete account opening form',
      'Make initial deposit',
      'Receive passbook and account details'
    ]
  },
  {
    title: 'Special Loan Products',
    icon: CreditCard,
    accent: 'from-accent/10 to-primary/5',
    description: 'Specialized loans designed for specific needs - salary advances, education, transport, and mortgages.',
    features: [
      'Salary Advance Loan: 19% annually',
      'School Fees Loan: 19% annually',
      'Vehicle & Asset Loan: 19% annually',
      'Mortgage Loans: 19% annually',
      'Overdraft: 5% monthly',
      'Quick processing for all products'
    ],
    eligibility: [
      'Age: 21-60 years',
      'Documented income source',
      'Salaried employee, student, or asset owner',
      'Valid ID and employment/ownership proof',
      'Ability to provide required collateral'
    ],
    process: [
      'Determine loan type based on your need',
      'Prepare supporting documents',
      'Submit application with requirements',
      'Quick evaluation and decision',
      'Rapid disbursement upon approval'
    ]
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/85" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-20 right-0 w-125 h-125 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
              style={{ animation: 'fadeIn 0.6s ease-out' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/80">Financial Solutions for Everyone</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s backwards' }}
            >
              Our
              <span className="text-accent"> Services</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
            >
              Comprehensive financial solutions designed to support your entrepreneurial journey
              and help you achieve your business goals.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
      </section>

      {/* Service Navigation Pills */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <a
                  key={idx}
                  href={`#service-${idx}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border text-primary font-medium text-sm hover:border-accent hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5"
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s backwards` }}
                >
                  <Icon className="w-4 h-4" />
                  {service.title}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isReversed = idx % 2 === 1
            return (
              <div
                key={idx}
                id={`service-${idx}`}
                className="scroll-mt-28"
              >
                {idx > 0 && (
                  <div className="my-20 flex items-center gap-4">
                    <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                  </div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}>
                  {/* Content Side */}
                  <div
                    className={isReversed ? 'lg:order-2' : ''}
                    style={{ animation: 'fadeInUp 0.6s ease-out' }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${service.accent} mb-6`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <div className="w-1 h-5 bg-accent rounded-full" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground/70 group-hover:text-foreground/90 transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold shadow-elegant group"
                    >
                      Apply Now
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Info Boxes Side */}
                  <div className={`space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    {/* Eligibility */}
                    <div className="rounded-2xl border border-border bg-white p-8 hover:shadow-elegant transition-all duration-300 group">
                      <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                        <div className="w-1 h-5 bg-primary rounded-full" />
                        Who Can Apply
                      </h3>
                      <ul className="space-y-3.5">
                        {service.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/65">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div className="rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent p-8 hover:shadow-elegant transition-all duration-300">
                      <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                        <div className="w-1 h-5 bg-accent rounded-full" />
                        How It Works
                      </h3>
                      <ol className="space-y-4">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3.5">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                              {i + 1}
                            </span>
                            <span className="text-foreground/65 pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/85" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-150 h-150 bg-accent/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Take The Next Step</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Contact us today to learn more about our services and how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/15 rounded-xl font-semibold hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
