import Header from '@/components/header'
import Hero from '@/components/hero'
import VisionMission from '@/components/vision-mission'
import ServiceCards from '@/components/service-cards'
import Testimonials from '@/components/testimonials'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VisionMission />
      <ServiceCards />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
