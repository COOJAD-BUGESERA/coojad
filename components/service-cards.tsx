'use client'

import { Landmark, PiggyBank, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceCard {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  features: string[]
}

const services: ServiceCard[] = [
  {
    id: 'loans',
    title: 'Business Loans',
    icon: <Landmark className="w-6 h-6" />,
    description: 'Competitive interest rates tailored for entrepreneurs with flexible repayment terms.',
    features: ['Flexible repayment terms', 'Low interest rates', 'Quick approval process', 'Personal mentoring']
  },
  {
    id: 'savings',
    title: 'Savings Programs',
    icon: <PiggyBank className="w-6 h-6" />,
    description: 'Grow your wealth safely with competitive returns and full liquidity.',
    features: ['Guaranteed returns', 'No hidden charges', 'Flexible withdrawal', 'Bonus rewards']
  },
  {
    id: 'investment',
    title: 'Investment Services',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Smart investment opportunities with expert guidance for wealth creation.',
    features: ['Expert guidance', 'Diversified portfolio', 'Risk management', 'Regular updates']
  },
  {
    id: 'training',
    title: 'Business Training',
    icon: <GraduationCap className="w-6 h-6" />,
    description: 'Develop skills to succeed in your entrepreneurial journey with industry experts.',
    features: ['Expert trainers', 'Practical workshops', 'Networking events', 'Certification']
  }
]

export default function ServiceCards() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Our Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 tracking-tight">
            Financial Services Built for You
          </h2>
          <p className="text-lg text-foreground/50 mt-5 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions designed to support your entrepreneurial journey
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
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
