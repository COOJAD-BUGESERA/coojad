'use client'

import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  initial: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jean Claude',
    role: 'Entrepreneur',
    company: 'Tech Startup',
    quote: 'COOJAD-BUGESERA transformed my business. The loan process was smooth and the support team was incredibly helpful. I went from an idea to a thriving business in 18 months.',
    rating: 5,
    initial: 'JC'
  },
  {
    name: 'Amara Kawu',
    role: 'Business Owner',
    company: 'Fashion Brand',
    quote: 'The business training programs were eye-opening. I learned not just about finances, but also about leadership and strategy. Highly recommended for any young entrepreneur.',
    rating: 5,
    initial: 'AK'
  },
  {
    name: 'Peter Nkwasa',
    role: 'Founder',
    company: 'Agricultural Co-op',
    quote: 'What impressed me most was the personalized approach. They understood my vision and provided tailored solutions. My business has grown 300% in two years.',
    rating: 5,
    initial: 'PN'
  },
  {
    name: 'Grace Uwamahoro',
    role: 'CEO',
    company: 'Tech Hub',
    quote: 'COOJAD is more than a bank\u2014it\'s a partner in growth. The investment advisory helped me scale efficiently while minimizing risks. Exceptional service!',
    rating: 5,
    initial: 'GU'
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 tracking-tight">
            Member Testimonials
          </h2>
          <p className="text-lg text-foreground/50 mt-5 max-w-2xl mx-auto leading-relaxed">
            Discover how COOJAD-BUGESERA has transformed lives and businesses across Rwanda
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
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </p>
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
