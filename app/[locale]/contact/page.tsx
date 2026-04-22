'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('contact')

  const contactInfo = [
    { icon: Phone, title: t('info.phone'), details: t('info.phoneNumber'), subtitle: t('info.phoneHours'), link: 'tel:0788403957' },
    { icon: Mail, title: t('info.email'), details: t('info.emailAddress'), subtitle: t('info.emailReply'), link: 'mailto:info@coojad.rw' },
    { icon: MapPin, title: t('info.visitUs'), details: t('info.visitAddress'), subtitle: t('info.visitSubaddress'), link: '#' },
    { icon: Clock, title: t('info.officeHours'), details: t('info.officeHoursDetail'), subtitle: t('info.officeHoursSat'), link: '#' },
  ]

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-36 pb-28 overflow-hidden">
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
              <span className="text-sm font-medium text-white/80">{t('hero.badge')}</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s backwards' }}
            >
              {t('hero.titleLine1')}
              <span className="text-accent"> {t('hero.titleLine2')}</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
            >
              {t('hero.subtitle')}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="group relative rounded-2xl bg-white border border-border p-7 hover:border-accent/40 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1.5"
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s backwards` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-1.5">{info.title}</h3>
                    <p className="text-foreground/80 font-medium text-sm">{info.details}</p>
                    <p className="text-foreground/50 text-sm mt-0.5">{info.subtitle}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-5 bg-accent rounded-full" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{t('form.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                {t('form.title')}
              </h2>
              <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.15s backwards' }}>
              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.5!2d30.092361!3d-2.1445609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c3579f2d465361%3A0xdd32bfe14a54c7da!2sCOOJAD-BUGESERA!5e0!3m2!1sen!2srw!4v1700000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="COOJAD-BUGESERA Location"
                  className="w-full"
                />
                <div className="bg-primary p-5 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t('sidebar.mapTitle')}</p>
                    <p className="text-white/60 text-sm">{t('sidebar.mapAddress')}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  {t('sidebar.officeHours')}
                </h3>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center pb-3.5 border-b border-border">
                    <span className="text-foreground/60 text-sm">{t('sidebar.monFri')}</span>
                    <span className="font-semibold text-primary text-sm">{t('sidebar.monFriHours')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3.5 border-b border-border">
                    <span className="text-foreground/60 text-sm">{t('sidebar.saturday')}</span>
                    <span className="font-semibold text-primary text-sm">{t('sidebar.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/60 text-sm">{t('sidebar.sunday')}</span>
                    <span className="font-semibold text-accent text-sm">{t('sidebar.sundayClosed')}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent p-8">
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                  <div className="w-1 h-5 bg-accent rounded-full" />
                  {t('sidebar.quickLinks')}
                </h3>
                <div className="space-y-2.5">
                  <Link
                    href="/services"
                    className="flex items-center justify-between group py-2.5 text-foreground/65 hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium">{t('sidebar.viewServices')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-between group py-2.5 text-foreground/65 hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium">{t('sidebar.learnAboutUs')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center justify-between group py-2.5 text-foreground/65 hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium">{t('sidebar.returnHome')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t('faq.badge')}</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-3 mb-4">
                {t('faq.title')}
              </h2>
              <p className="text-foreground/60 text-lg">
                {t('faq.subtitle')}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-border bg-white hover:border-accent/40 hover:shadow-elegant transition-all duration-300 overflow-hidden"
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.06}s backwards` }}
                >
                  <summary className="flex items-center justify-between gap-4 p-6 sm:p-7 cursor-pointer font-semibold text-primary hover:text-accent transition-colors [&::-webkit-details-marker]:hidden list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 text-foreground/40 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-1">
                    <p className="text-foreground/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              {t('bottomCta.title')}
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              {t('bottomCta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="tel:0788403957"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-elegant"
              >
                <Phone className="w-4 h-4" />
                {t('bottomCta.callUs')}
              </a>
              <a
                href="mailto:info@coojad.rw"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                {t('bottomCta.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
