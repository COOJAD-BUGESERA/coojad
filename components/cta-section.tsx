'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-28 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">
            Get Started Today
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Ready to Grow
            <span className="block mt-1">Your Business?</span>
          </h2>

          <p className="text-lg text-white/60 mt-6 mb-10 max-w-xl mx-auto leading-relaxed">
            Join hundreds of entrepreneurs transforming their dreams into reality with COOJAD-BUGESERA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-primary rounded-full font-bold text-base hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-2.5 group"
            >
              Join Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <p className="text-white/35 text-sm mt-10 font-medium">
            No hidden fees · No long waiting periods · Transparent banking
          </p>
        </div>
      </div>
    </section>
  );
}
