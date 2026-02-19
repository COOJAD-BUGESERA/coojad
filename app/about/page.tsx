'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Users, Award, Target, Lightbulb, ArrowRight, MapPin, Calendar, Shield } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Rapidity',
      description: 'Quick and efficient service delivery to meet the needs of our members and clients.',
      gradient: 'from-primary/10 to-accent/5',
    },
    {
      icon: Award,
      title: 'Honesty',
      description: 'We operate with transparency and integrity in all our business dealings and relationships.',
      gradient: 'from-accent/10 to-primary/5',
    },
    {
      icon: Users,
      title: 'Good Service Delivery',
      description: 'Excellence in every interaction, ensuring member satisfaction and financial success.',
      gradient: 'from-primary/10 to-accent/5',
    },
    {
      icon: Lightbulb,
      title: 'Mutual Solidarity',
      description: 'We foster a community where members support each other\'s growth and prosperity.',
      gradient: 'from-accent/10 to-primary/5',
    }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Last Remaining Branch',
      description: 'Became the sole remaining branch of the original ten COOJAD cooperatives, serving 9,000+ clients.',
    },
    {
      year: '2009',
      title: 'Official Recognition',
      description: 'Recognized by Rwanda Cooperative Agency (RCA) on June 22, 2009, and received Microfinance License from National Bank of Rwanda.',
    },
    {
      year: '2015+',
      title: 'Expansion & Growth',
      description: 'Expanded operations and financial products to better serve youth entrepreneurs and small business owners.',
    },
    {
      year: '2026',
      title: 'Current Status',
      description: 'Serving 9,000+ members with diverse financial products and comprehensive business training programs.',
    }
  ]

  const stats = [
    { value: '500+', label: 'Active Members', highlight: true },
    { value: '$2M+', label: 'Loans Disbursed', highlight: false },
    { value: '95%', label: 'Success Rate', highlight: true },
    { value: '1000+', label: 'Trained Entrepreneurs', highlight: false },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Background layers */}
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
              <span className="text-sm font-medium text-white/80">Est. 2008 &middot; Nyamata, Rwanda</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s backwards' }}
            >
              Empowering Rwanda&apos;s
              <span className="block text-accent mt-2">Next Generation</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
            >
              A cooperative bank with a mission to uplift entrepreneurs
              through accessible financial services, mentorship, and dedicated community support.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s backwards' }}
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Opposite Nyamata Bus Park</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-4 h-4 text-accent" />
                <span>Licensed by National Bank of Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Our History</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-3 leading-tight">
                  A Legacy of
                  <span className="text-accent"> Trust</span>
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-lg text-foreground/65 leading-relaxed">
                  COOJAD-BUGESERA <span className="text-foreground/80 font-medium">(Cooperative de la Jeunesse pour l&apos;Auto-Emploi et D&eacute;veloppement)</span> was created with a government initiative to help residents, particularly youth, access financial services and improve their economic base.
                </p>
                <p className="text-lg text-foreground/65 leading-relaxed">
                  By August 2008, we became the sole remaining branch of the original ten COOJAD cooperatives, serving 9,000+ clients. We were recognized by Rwanda Cooperative Agency (RCA) on June 22, 2009, and received our Microfinance License (No. 337) from the National Bank of Rwanda.
                </p>
                <p className="text-lg text-foreground/65 leading-relaxed">
                  Located opposite Nyamata Bus Park on APEBU School Road, we&apos;re committed to eradicating poverty and ensuring socio-economic development for youth entrepreneurs through financial inclusion and business training.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">17+</p>
                    <p className="text-sm text-foreground/50">Years of Service</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">9,000+</p>
                    <p className="text-sm text-foreground/50">Clients Served</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}>
              <div className="relative h-125 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/70" />
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />

                {/* Decorative content inside the card */}
                <div className="relative h-full flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10">
                    <Shield className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Licensed & Regulated</h3>
                  <p className="text-white/60 leading-relaxed max-w-xs">
                    Microfinance License No. 337 from the National Bank of Rwanda, issued October 22, 2009
                  </p>
                  <div className="elegant-divider mt-8 mb-6 mx-auto" />
                  <p className="text-sm text-white/40">Recognized by Rwanda Cooperative Agency</p>
                </div>
              </div>

              {/* Floating accent element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-3xl -z-10 blur-sm" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-3xl -z-10 blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative rounded-3xl bg-primary p-10 sm:p-12 overflow-hidden group"
              style={{ animation: 'fadeInUp 0.6s ease-out' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/15 transition-colors duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  To provide accessible, reliable financial services and entrepreneurship training that empowers youth and communities in Bugesera to achieve economic independence and sustainable growth.
                </p>
              </div>
            </div>

            <div
              className="relative rounded-3xl bg-white border border-border p-10 sm:p-12 overflow-hidden group"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s backwards' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground/65 leading-relaxed text-lg">
                  A thriving Rwandan community where every young entrepreneur has the financial tools, knowledge, and support network to build a successful, sustainable business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Core Values</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-5">
              What We Stand For
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as an organization
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white border border-border p-8 hover:border-accent/40 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1.5"
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards` }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-3">
              Milestones & Growth
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/30 via-accent/30 to-transparent md:-translate-x-px" />

              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0
                return (
                  <div
                    key={idx}
                    className={`relative flex items-start gap-8 mb-12 last:mb-0 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s backwards` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`bg-white rounded-2xl border border-border p-6 sm:p-8 hover:shadow-elegant transition-all duration-300 group`}>
                        <span className="inline-block text-sm font-bold text-accent mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/85" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-150 h-150 bg-accent/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Impact</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">
              Numbers That Matter
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center group hover:bg-white/10 transition-all duration-500"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                <p className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 ${stat.highlight ? 'text-accent' : 'text-white'}`}>
                  {stat.value}
                </p>
                <p className="text-white/60 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Whether you&apos;re looking to save, invest, or grow your business, COOJAD-BUGESERA
              is here to support your journey toward financial independence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-elegant"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
