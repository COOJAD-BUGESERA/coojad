'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#041e1d] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 lg:py-20">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.jpeg"
                alt="COOJAD-BUGESERA Logo"
                width={38}
                height={38}
                className="rounded-full ring-1 ring-white/10"
              />
              <div>
                <span className="font-bold text-base text-white block leading-tight tracking-tight">COOJAD-BUGESERA</span>
                <span className="text-[11px] text-accent font-medium tracking-wide">Cooperative de la Jeunesse</span>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of entrepreneurs and promoting self-development in Rwanda.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                'Business Loans',
                'Savings Programs',
                'Investment Services',
                'Business Training',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/55 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0788403957"
                  className="flex items-center gap-3 text-white/55 hover:text-accent transition-colors duration-300 text-sm"
                >
                  <Phone size={14} className="shrink-0" />
                  0788 403 957
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@coojad.rw"
                  className="flex items-center gap-3 text-white/55 hover:text-accent transition-colors duration-300 text-sm"
                >
                  <Mail size={14} className="shrink-0" />
                  info@coojad.rw
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Opposite Nyamata Bus Park, APEBU School Road, Nyamata</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              &copy; {currentYear} COOJAD-BUGESERA. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-white/30 hover:text-white/60 text-sm transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
