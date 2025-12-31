"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FileText, Scale, Shield, CheckCircle, AlertTriangle, Briefcase, Globe, Lock, DollarSign, Clock, Code, Megaphone, Video, Palette } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

const serviceItems = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites, e-commerce solutions, and web applications"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media marketing, and advertising campaigns"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video production and animation services"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, UI/UX design, and marketing materials"
  }
]

const termSections = [
  {
    icon: Globe,
    title: "Use of Website",
    content: "You agree to use this website only for lawful purposes and not to misuse content, services, or intellectual property."
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    content: "All website content, designs, graphics, videos, and text are the property of Drople unless stated otherwise. Unauthorized use is prohibited."
  },
  {
    icon: DollarSign,
    title: "Payments & Projects",
    content: "Payments, timelines, and deliverables are agreed upon before starting a project. Delays caused by missing client content or feedback are not our responsibility."
  },
  {
    icon: Shield,
    title: "Limitation of Liability",
    content: "Drople is not liable for indirect or consequential damages resulting from the use of our services or website."
  },
  {
    icon: AlertTriangle,
    title: "Termination",
    content: "We reserve the right to refuse or terminate services if terms are violated."
  },
  {
    icon: Clock,
    title: "Changes to Terms",
    content: "We may update these Terms at any time. Continued use of our website means acceptance of updated terms."
  }
]

export default function TermsOfService() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden perspective-1000">
        {/* 3D Floating Blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#A3C6C4] rounded-full mix-blend-multiply filter blur-3xl animate-morph translate-z-50 transform-gpu"></div>
          <div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#1C3D55] rounded-full mix-blend-multiply filter blur-3xl animate-morph translate-z-80 transform-gpu"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 transform-gpu">
          <div
            className={`max-w-4xl transition-all duration-1000 transform-gpu ${
              isLoaded ? "opacity-100 translate-y-0 rotate-x-0" : "opacity-0 translate-y-10 rotate-x-6"
            }`}
          >
            <div className="inline-block mb-8">
              <span className="
                pill-badge
                px-6 py-2
                text-base font-semibold
                bg-[#1D4059]
                text-white
                border border-[#1D4059]
                backdrop-blur-sm
                shadow-2xl
                transform-gpu
                translate-z-20
                rounded-full
              ">
                Legal Terms
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1C3D55] mb-6 leading-tight drop-shadow-xl transform-gpu translate-z-40">
              Terms of Service
            </h1>

            <p className="text-xl text-[#6C7A89] mb-8 drop-shadow-lg transform-gpu translate-z-10">
              Welcome to <span className="font-bold text-[#1C3D55]">Drople</span>. By accessing or using our website and services, 
              you agree to the following terms and conditions.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <FileText className="mr-2" size={18} />
                <span className="text-sm font-medium">Last Updated: April 2024</span>
              </div>
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <Scale className="mr-2" size={18} />
                <span className="text-sm font-medium">Legal Document</span>
              </div>
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <CheckCircle className="mr-2" size={18} />
                <span className="text-sm font-medium">Binding Agreement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <Briefcase className="text-[#1C3D55]" size={28} />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55]">Our Services</h2>
            </div>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              Drople provides professional services including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceItems.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 hover:border-[#A3C6C4]/40 transition-all duration-500 group hover:-translate-y-3 hover:shadow-xl transform-gpu perspective-1000 hover:rotate-y-3 hover:rotate-x-3 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms`, transformStyle: "preserve-3d" }}
                >
                  <div className="relative w-12 h-12 rounded-lg bg-[#1C3D55]/10 flex items-center justify-center mb-4 group-hover:bg-[#1C3D55]/20 transition-all duration-500 group-hover:scale-110 transform-gpu group-hover:translate-z-10">
                    <IconComponent size={24} className="text-[#1C3D55] relative z-10" />
                    <div className="absolute inset-0 bg-[#1C3D55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </div>
                  <h3 className="font-bold text-[#1C3D55] mb-2 group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 transform-gpu group-hover:translate-z-8">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500 transform-gpu group-hover:translate-z-4">
                    {service.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1C3D55]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#6C7A89] max-w-3xl mx-auto">
              All services are provided based on client requirements and agreed scope. 
              Detailed project specifications are outlined in individual service agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Details */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {termSections.map((term, idx) => {
              const IconComponent = term.icon
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms`, transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1C3D55]/10 flex items-center justify-center mr-4 group-hover:bg-[#1C3D55]/20 transition-all duration-500 group-hover:scale-110">
                      <IconComponent size={24} className="text-[#1C3D55]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C3D55]">{term.title}</h3>
                  </div>
                  <p className="text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500">
                    {term.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#1C3D55] mb-8">Additional Information</h2>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <Globe className="mr-3 text-[#1C3D55]" size={24} />
                    <h3 className="text-xl font-semibold text-[#1C3D55]">Governing Law</h3>
                  </div>
                  <p className="text-[#6C7A89] pl-10 group-hover:text-[#1C3D55]/80 transition-colors duration-500">
                    These terms are governed by and construed in accordance with the laws applicable in Pakistan. 
                    Any disputes shall be subject to the exclusive jurisdiction of the courts located in Pakistan.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <Lock className="mr-3 text-[#1C3D55]" size={24} />
                    <h3 className="text-xl font-semibold text-[#1C3D55]">Service Agreements</h3>
                  </div>
                  <p className="text-[#6C7A89] pl-10 group-hover:text-[#1C3D55]/80 transition-colors duration-500">
                    For specific projects, a separate Service Agreement will be provided outlining project scope, 
                    deliverables, timelines, payment terms, and intellectual property rights. The Service Agreement 
                    supersedes these general terms for that specific project.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="mr-3 text-[#1C3D55]" size={24} />
                    <h3 className="text-xl font-semibold text-[#1C3D55]">Disclaimer</h3>
                  </div>
                  <p className="text-[#6C7A89] pl-10 group-hover:text-[#1C3D55]/80 transition-colors duration-500">
                    While we strive for excellence in all our services, we cannot guarantee specific business 
                    outcomes or results from our marketing and development services. Results may vary based on 
                    market conditions, industry factors, and client participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-6">
              <span className="
                pill-badge
                px-6 py-2
                text-base font-semibold
                bg-[#1D4059]
                text-white
                border border-[#1D4059]
                backdrop-blur-sm
                shadow-2xl
                transform-gpu
                translate-z-20
                rounded-full
              ">
                Contact Us
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1C3D55] mb-6">Questions About Our Terms?</h2>
            
            <p className="text-lg text-[#6C7A89] mb-8">
              If you have any questions or concerns about these Terms of Service, 
              please don't hesitate to contact us for clarification.
            </p>

            <div className="bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 rounded-2xl p-8 md:p-10 inline-block w-full max-w-md">
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <FileText className="mb-3 text-[#1C3D55]" size={32} />
                  <div className="text-center">
                    <p className="text-sm text-[#6C7A89] mb-1">For legal inquiries</p>
                    <a 
                      href="mailto:drople81@gmail.com" 
                      className="text-xl font-semibold text-[#1C3D55] hover:text-[#A3C6C4] transition-colors duration-300"
                    >
                      drople81@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="h-px w-full bg-[#A3C6C4]/30"></div>
                
                <div className="text-center">
                  <p className="text-sm text-[#6C7A89] mb-4">
                    We recommend reading these terms carefully before using our services. 
                    By continuing to use our website and services, you acknowledge that 
                    you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
                  <p className="text-xs text-[#6C7A89]">
                    These terms constitute the entire agreement between you and Drople 
                    regarding your use of our website and services.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#A3C6C4]/30">
              <p className="text-sm text-[#6C7A89]">
                <strong>Important:</strong> If you do not agree with any part of these terms, 
                please discontinue use of our website and services immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      
            <CTABanner />
      <Footer />
    </main>
  )
}