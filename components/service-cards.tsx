'use client'

import { Landmark, PiggyBank, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface ServiceCard {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  features: string[]
}

export default function ServiceCards() {
  const t = useTranslations('home.serviceCards')

  const services: ServiceCard[] = [
    {
      id: 'loans',
      title: t('loans.title'),
      icon: <Landmark className="w-6 h-6" />,
      description: t('loans.description'),
      features: [t('loans.feature1'), t('loans.feature2'), t('loans.feature3'), t('loans.feature4')]
    },
    {
      id: 'savings',
      title: t('savings.title'),
      icon: <PiggyBank className="w-6 h-6" />,
      description: t('savings.description'),
      features: [t('savings.feature1'), t('savings.feature2'), t('savings.feature3'), t('savings.feature4')]
    },
    {
      id: 'investment',
      title: t('investment.title'),
      icon: <TrendingUp className="w-6 h-6" />,
      description: t('investment.description'),
      features: [t('investment.feature1'), t('investment.feature2'), t('investment.feature3'), t('investment.feature4')]
    },
    {
      id: 'training',
      title: t('training.title'),
      icon: <GraduationCap className="w-6 h-6" />,
      description: t('training.description'),
      features: [t('training.feature1'), t('training.feature2'), t('training.feature3'), t('training.feature4')]
    }
  ]

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            {t('badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/50 mt-5 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-card border border-border/60 rounded-2xl p-8 hover:shadow-elegant-lg hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/[0.06] text-primary flex items-center justify-center mb-6 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-primary mb-2 tracking-tight">
                {service.title}
              </h3>

              <p className="text-foreground/55 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2.5 mb-8">
                {service.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-foreground/60">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/70 group-hover:text-accent transition-colors duration-300"
              >
                {t('learnMore')}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
