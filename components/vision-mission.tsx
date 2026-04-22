"use client"

import { Eye, Target, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function VisionMission() {
  const t = useTranslations('home.visionMission')

  return (
    <section className="relative py-28 bg-primary overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">{t('badge')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('visionTitle')}</h2>
            </div>
            <p className="text-lg text-white/75 leading-relaxed">
              {t('visionText')}
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">{t('mottoLabel')}</p>
              <p className="text-lg text-accent font-bold tracking-wide">
                {t('motto')}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('missionTitle')}</h2>
            </div>
            <p className="text-lg text-white/75 leading-relaxed">
              {t('missionText')}
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">{t('keyActionsLabel')}</p>
              <ul className="space-y-3">
                {[
                  t('action1'),
                  t('action2'),
                  t('action3'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm">
                    <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
