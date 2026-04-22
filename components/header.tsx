'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const locales = [
    { value: 'en', label: 'EN' },
    { value: 'fr', label: 'FR' },
    { value: 'rw', label: 'RW' },
  ] as const;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-border/50'
        : 'bg-white backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.jpeg"
                alt={t('brand.logoAlt')}
                width={42}
                height={42}
                className="rounded-full ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-primary text-sm leading-tight tracking-tight">{t('brand.name')}</p>
              <p className="text-[11px] font-medium text-accent tracking-wide">{t('brand.subtitle')}</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground/60 hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 p-1">
            {locales.map((item) => {
              const isActive = locale === item.value
              return (
                <Link
                  key={item.value}
                  href={pathname}
                  locale={item.value}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${isActive
                    ? 'bg-primary text-white'
                    : 'text-foreground/60 hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {t('nav.joinNow')}
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="border-t border-border/50 bg-white/80 backdrop-blur-sm">
            <div className="py-4 space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg mx-2 transition-all font-medium text-sm ${isActive
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/70 hover:text-primary hover:bg-muted'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mx-2 mt-2 flex items-center gap-2 rounded-lg border border-border/60 p-2">
                {locales.map((item) => {
                  const isActive = locale === item.value
                  return (
                    <Link
                      key={item.value}
                      href={pathname}
                      locale={item.value}
                      className={`flex-1 text-center px-2 py-1.5 rounded-md text-xs font-semibold transition-all ${isActive
                        ? 'bg-primary text-white'
                        : 'text-foreground/65 hover:bg-primary/5 hover:text-primary'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
              <div className="px-2 pt-3">
                <Link
                  href="/contact"
                  className="block px-6 py-2.5 bg-primary text-white text-center rounded-full font-semibold text-sm hover:shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.joinNow')}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
