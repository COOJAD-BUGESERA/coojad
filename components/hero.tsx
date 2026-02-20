'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export default function Hero() {
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
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Financial Excellence
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.08] tracking-tight animate-fade-in-up">
            Empowering
            <span className="block mt-1">
              Entrepreneurs
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-xl mt-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Rwanda's premier cooperative bank dedicated to accessible financial services and business support for youth entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <Link
              href="/services"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-primary/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-2.5 group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-border text-foreground/80 rounded-full font-semibold text-sm sm:text-base hover:border-primary/30 hover:text-primary hover:bg-primary/[0.02] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border/60 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            {[
              { icon: Users, value: '9,000+', label: 'Active Members', color: 'text-primary' },
              { icon: TrendingUp, value: '$2M+', label: 'Loans Disbursed', color: 'text-accent' },
              { icon: Award, value: '95%', label: 'Success Rate', color: 'text-primary' },
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
      </div>
    </section>
  );
}
