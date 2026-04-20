'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from 'next-intl'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

export default function ContactForm() {
  const t = useTranslations('contact.form')

  const [formData, setFormData] = useState(initialFormData)
  const [isSending, setIsSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleReset = () => {
    setFormData(initialFormData)
    setSubmitStatus('idle')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    setIsSending(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        {
          publicKey
        }
      )

      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      console.error('EmailJS submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            {t('fullName')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder={t('namePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            {t('emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder={t('emailPlaceholder')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            {t('phoneLabel')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder={t('phonePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            {t('subjectLabel')}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="">{t('subjectPlaceholder')}</option>
            <option value="loan">{t('subjectLoan')}</option>
            <option value="savings">{t('subjectSavings')}</option>
            <option value="investment">{t('subjectInvestment')}</option>
            <option value="training">{t('subjectTraining')}</option>
            <option value="other">{t('subjectOther')}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          {t('messageLabel')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          placeholder={t('messagePlaceholder')}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSending}
          className="flex-1 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSending ? t('sending') : t('send')}
        </button>
        <button
          type="reset"
          disabled={isSending}
          className="flex-1 px-8 py-3 rounded-lg border-2 border-border text-foreground hover:bg-muted/50 transition-colors font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {t('clear')}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-accent/20 border border-accent/40 text-accent">
          {t('success')}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive">
          {t('error')}
        </div>
      )}
    </form>
  )
}
