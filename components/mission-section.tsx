'use client'

import { Zap, Users, TrendingUp } from 'lucide-react'

export default function MissionSection() {
  const pillars = [
    {
      icon: Zap,
      title: 'Financial Services',
      description: 'Accessible and innovative financial solutions designed for entrepreneurs at every stage of their journey.'
    },
    {
      icon: Users,
      title: 'Youth Focus',
      description: 'Dedicated support for young entrepreneurs, providing mentorship, training, and resources to succeed.'
    },
    {
      icon: TrendingUp,
      title: 'Community Growth',
      description: 'Contributing to Rwanda\'s economic development while fostering a culture of innovation and independence.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            To empower the next generation of entrepreneurs by providing access to financial services,
            business knowledge, and community support, enabling them to build thriving businesses and
            contribute to Rwanda's economic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
