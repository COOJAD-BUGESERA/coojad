'use client';

import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative pt-36 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-background" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-3xl lg:max-w-none">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              {t('badge')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.08] tracking-tight animate-fade-in-up">
            {t('titleLine1')}
            <span className="block mt-1">
              {t('titleLine2')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-xl mt-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <Link
              href="/services"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-primary/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-2.5 group"
            >
              {t('exploreServices')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-border text-foreground/80 rounded-full font-semibold text-sm sm:text-base hover:border-primary/30 hover:text-primary hover:bg-primary/[0.02] transition-all duration-300"
            >
              {t('learnMore')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border/60 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            {[
              { icon: Users, value: t('stat1Value'), label: t('stat1Label'), color: 'text-primary' },
              { icon: TrendingUp, value: t('stat2Value'), label: t('stat2Label'), color: 'text-accent' },
              { icon: Award, value: t('stat3Value'), label: t('stat3Label'), color: 'text-primary' },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className={`w-4 h-4 ${stat.color} opacity-60`} />
                  <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} tracking-tight`}>
                    {stat.value}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-foreground/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-african-business.jpg"
                  alt="African entrepreneurs and cooperative members"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating accent cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elegant p-4 border border-border/60 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">{t('stat1Value')}</p>
                    <p className="text-xs text-foreground/50">{t('stat1Label')}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-primary rounded-2xl shadow-elegant p-4 text-white">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">{t('stat3Label')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
