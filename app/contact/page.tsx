'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0788 403 957',
      subtitle: 'Mon-Fri, 8AM-5PM',
      link: 'tel:0788403957',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@coojad.rw',
      subtitle: 'We reply within 24 hours',
      link: 'mailto:info@coojad.rw',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Opposite Nyamata Bus Park',
      subtitle: 'APEBU School Road, Nyamata',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 8AM - 5PM',
      subtitle: 'Sat: 9AM - 4PM',
      link: '#',
    }
  ]

  const faqs = [
    {
      q: 'What are the requirements to get a business loan?',
      a: 'You must be 18-65 years old, a Rwandan citizen with valid ID, have an active business or business plan, stable income, and able to provide collateral.'
    },
    {
      q: 'How long does the loan approval process take?',
      a: 'Our typical approval process takes 5-7 business days from application submission. Some applications may be processed faster depending on documentation completeness.'
    },
    {
      q: 'What are the interest rates for loans?',
      a: 'Our interest rates range from 12% - 18% per annum, depending on loan amount, duration, and your credit profile. We offer competitive rates in the market.'
    },
    {
      q: 'Do you offer training programs?',
      a: 'Yes! We offer comprehensive training programs including entrepreneurship fundamentals, financial management, marketing, and leadership. Check our Services page for more details.'
    },
    {
      q: 'Can I open a savings account with you?',
      a: 'Absolutely! We offer flexible savings accounts with competitive interest rates (8%-12% p.a.), no hidden charges, and bonus rewards. Minimum opening balance is 50,000 RWF.'
    },
    {
      q: 'How do I apply for services?',
      a: 'You can start by contacting us using the form above or visiting our office. Our team will guide you through the application process.'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
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
              <span className="text-sm font-medium text-white/80">We&apos;d Love to Hear From You</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s backwards' }}
            >
              Get in
              <span className="text-accent"> Touch</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
            >
              Have questions about our services? We&apos;re here to help you take the next step
              toward your financial goals.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="currentColor" className="text-background" />
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
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

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-5 bg-accent rounded-full" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Send a Message</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                How Can We Help?
              </h2>
              <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.15s backwards' }}>
              {/* Google Map */}
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
                    <p className="text-white font-semibold text-sm">COOJAD-BUGESERA</p>
                    <p className="text-white/60 text-sm">Opposite Nyamata Bus Park, APEBU School Road, Nyamata</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-2xl border border-border bg-white p-8 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  Office Hours
                </h3>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center pb-3.5 border-b border-border">
                    <span className="text-foreground/60 text-sm">Monday - Friday</span>
                    <span className="font-semibold text-primary text-sm">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3.5 border-b border-border">
                    <span className="text-foreground/60 text-sm">Saturday</span>
                    <span className="font-semibold text-primary text-sm">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/60 text-sm">Sunday</span>
                    <span className="font-semibold text-accent text-sm">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-accent/20 bg-linear-to-br from-accent/5 to-transparent p-8">
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                  <div className="w-1 h-5 bg-accent rounded-full" />
                  Quick Links
                </h3>
                <div className="space-y-2.5">
                  <Link
                    href="/services"
                    className="flex items-center justify-between group py-2.5 text-foreground/65 hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium">View Our Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-between group py-2.5 text-foreground/65 hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium">Learn About Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center justify-between group py-2.5 text-foreground/65 hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium">Return to Home</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">FAQ</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-3 mb-4">
                Common Questions
              </h2>
              <p className="text-foreground/60 text-lg">
                Quick answers to questions you may have about our services
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

      {/* Bottom CTA */}
      <section className="py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">
              Still Have Questions?
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Don&apos;t hesitate to reach out. Our team is always ready to assist you
              with any inquiries about our financial products and services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="tel:0788403957"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-elegant"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
              <a
                href="mailto:info@coojad.rw"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
