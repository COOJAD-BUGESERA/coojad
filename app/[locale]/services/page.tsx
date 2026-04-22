'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle, ArrowRight, Briefcase, Wheat, Landmark, CreditCard } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('services')

  const services = [
    {
      title: t('businessLoans.title'),
      icon: Briefcase,
      accent: 'from-primary/10 to-accent/5',
      description: t('businessLoans.description'),
      features: [t('businessLoans.feature1'), t('businessLoans.feature2'), t('businessLoans.feature3'), t('businessLoans.feature4'), t('businessLoans.feature5')],
      eligibility: [t('businessLoans.elig1'), t('businessLoans.elig2'), t('businessLoans.elig3'), t('businessLoans.elig4'), t('businessLoans.elig5')],
      process: [t('businessLoans.step1'), t('businessLoans.step2'), t('businessLoans.step3'), t('businessLoans.step4'), t('businessLoans.step5')],
    },
    {
      title: t('agriLoans.title'),
      icon: Wheat,
      accent: 'from-accent/10 to-primary/5',
      description: t('agriLoans.description'),
      features: [t('agriLoans.feature1'), t('agriLoans.feature2'), t('agriLoans.feature3'), t('agriLoans.feature4'), t('agriLoans.feature5')],
      eligibility: [t('agriLoans.elig1'), t('agriLoans.elig2'), t('agriLoans.elig3'), t('agriLoans.elig4'), t('agriLoans.elig5')],
      process: [t('agriLoans.step1'), t('agriLoans.step2'), t('agriLoans.step3'), t('agriLoans.step4'), t('agriLoans.step5')],
    },
    {
      title: t('savings.title'),
      icon: Landmark,
      accent: 'from-primary/10 to-accent/5',
      description: t('savings.description'),
      features: [t('savings.feature1'), t('savings.feature2'), t('savings.feature3'), t('savings.feature4'), t('savings.feature5')],
      eligibility: [t('savings.elig1'), t('savings.elig2'), t('savings.elig3'), t('savings.elig4')],
      process: [t('savings.step1'), t('savings.step2'), t('savings.step3'), t('savings.step4'), t('savings.step5')],
    },
    {
      title: t('specialLoans.title'),
      icon: CreditCard,
      accent: 'from-accent/10 to-primary/5',
      description: t('specialLoans.description'),
      features: [t('specialLoans.feature1'), t('specialLoans.feature2'), t('specialLoans.feature3'), t('specialLoans.feature4'), t('specialLoans.feature5'), t('specialLoans.feature6')],
      eligibility: [t('specialLoans.elig1'), t('specialLoans.elig2'), t('specialLoans.elig3'), t('specialLoans.elig4'), t('specialLoans.elig5')],
      process: [t('specialLoans.step1'), t('specialLoans.step2'), t('specialLoans.step3'), t('specialLoans.step4'), t('specialLoans.step5')],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

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
              <span className="text-sm font-medium text-white/80">{t('hero.badge')}</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s backwards' }}
            >
              {t('hero.titleLine1')}
              <span className="text-accent"> {t('hero.titleLine2')}</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
            >
              {t('hero.subtitle')}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
      </section>

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

                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <div className="w-1 h-5 bg-accent rounded-full" />
                        {t('keyFeatures')}
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
                      {t('applyNow')}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className={`space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl border border-border bg-white p-8 hover:shadow-elegant transition-all duration-300 group">
                      <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                        <div className="w-1 h-5 bg-primary rounded-full" />
                        {t('whoCanApply')}
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

                    <div className="rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent p-8 hover:shadow-elegant transition-all duration-300">
                      <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                        <div className="w-1 h-5 bg-accent rounded-full" />
                        {t('howItWorks')}
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

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/85" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-150 h-150 bg-accent/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">{t('cta.badge')}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                {t('cta.getInTouch')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/15 rounded-xl font-semibold hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
              >
                {t('cta.learnAboutUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
