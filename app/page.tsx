"use client"

import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import CaseStudies from "@/components/case-studies"
import ProcessTimeline from "@/components/process-timeline"
import Testimonials from "@/components/testimonials"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesOverview />
      <CaseStudies />
      <ProcessTimeline />
      <Testimonials />
      <CTABanner />
      <Footer />
      
    </main>
  )
}
