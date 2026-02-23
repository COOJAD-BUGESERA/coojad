'use client'

import { Star, Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  initial: string
}

export default function Testimonials() {
  const t = useTranslations('home.testimonials')

  const testimonials: Testimonial[] = [
    {
      name: t('t1Name'),
      role: t('t1Role'),
      company: t('t1Company'),
      quote: t('t1Quote'),
      rating: 5,
      initial: t('t1Initial')
    },
    {
      name: t('t2Name'),
      role: t('t2Role'),
      company: t('t2Company'),
      quote: t('t2Quote'),
      rating: 5,
      initial: t('t2Initial')
    },
    {
      name: t('t3Name'),
      role: t('t3Role'),
      company: t('t3Company'),
      quote: t('t3Quote'),
      rating: 5,
      initial: t('t3Initial')
    },
    {
      name: t('t4Name'),
      role: t('t4Role'),
      company: t('t4Company'),
      quote: t('t4Quote'),
      rating: 5,
      initial: t('t4Initial')
    },
  ]

  return (
    <section className="py-28 bg-muted/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border/60 rounded-2xl p-8 sm:p-10 hover:shadow-elegant-lg hover:border-accent/30 transition-all duration-500 hover:-translate-y-0.5"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`
              }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-5">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/70 leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  <Quote size={14} className="text-white/90" />
                </div>
                <div>
                  <p className="text-xs text-foreground/45 mt-0.5">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
