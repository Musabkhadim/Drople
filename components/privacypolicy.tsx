"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Shield, Lock, Eye, FileText, Globe, Mail, Server, Users, Cookie, Database, ShieldCheck } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

const privacyPoints = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement industry-standard security measures to protect your personal information."
  },
  {
    icon: Lock,
    title: "Secure Processing",
    description: "Your data is encrypted and processed securely through protected channels."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We clearly explain how your information is collected, used, and shared."
  },
  {
    icon: FileText,
    title: "Your Rights",
    description: "You have the right to access, correct, or delete your personal data at any time."
  }
]

const informationSections = [
  {
    title: "Information We Collect",
    items: [
      "Name and contact details (email, phone number)",
      "Project or service requirements submitted through forms",
      "Communication history with our team",
      "Technical data (IP address, browser type, device information)",
      "Usage data and website analytics"
    ]
  },
  {
    title: "How We Collect Information",
    items: [
      "Contact forms and service inquiries",
      "Newsletter subscriptions",
      "Website analytics tools (Google Analytics)",
      "Cookies and similar tracking technologies",
      "Direct communications via email or chat"
    ]
  },
  {
    title: "How We Use Your Information",
    items: [
      "Respond to inquiries and project requests",
      "Provide web development, digital marketing, and creative services",
      "Improve website performance and user experience",
      "Send updates, proposals, or service-related communications",
      "Analyze trends and optimize our services"
    ]
  }
]

const dataSharingInfo = [
  {
    title: "Data Sharing Policy",
    icon: Users,
    content: "We do not sell, rent, or trade your personal information. Data may only be shared when required by law or to provide our services effectively."
  },
  {
    title: "Third-Party Services",
    icon: Globe,
    content: "We may use third-party tools such as Google Analytics, advertising platforms, or email services. These providers have their own privacy policies."
  },
  {
    title: "Data Security",
    icon: ShieldCheck,
    content: "We use reasonable technical and organizational measures to protect your data. However, no online system is 100% secure."
  },
  {
    title: "Children's Privacy",
    icon: Users,
    content: "Our services are not intended for individuals under the age of 13."
  }
]

export default function PrivacyPolicy() {
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
                Privacy & Security
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1C3D55] mb-6 leading-tight drop-shadow-xl transform-gpu translate-z-40">
              Privacy Policy
            </h1>

            <p className="text-xl text-[#6C7A89] mb-8 drop-shadow-lg transform-gpu translate-z-10">
              At <span className="font-bold text-[#1C3D55]">Webo Creators</span>, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <Shield className="mr-2" size={18} />
                <span className="text-sm font-medium">Last Updated: April 2024</span>
              </div>
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <FileText className="mr-2" size={18} />
                <span className="text-sm font-medium">Comprehensive Policy</span>
              </div>
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <Lock className="mr-2" size={18} />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55] mb-4">Our Privacy Principles</h2>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              These core principles guide our approach to data protection and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPoints.map((point, idx) => {
              const IconComponent = point.icon
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
                  <h3 className="font-bold text-[#1C3D55] mb-3 group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 transform-gpu group-hover:translate-z-8">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500 transform-gpu group-hover:translate-z-4">
                    {point.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1C3D55]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {informationSections.map((section, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 200}ms`, transformStyle: "preserve-3d" }}
              >
                <h3 className="text-2xl font-bold text-[#1C3D55] mb-6 pb-3 border-b border-[#A3C6C4]/30 group-hover:border-[#A3C6C4]/50 transition-colors duration-500">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55]/50 mt-2 mr-3 group-hover:bg-[#1C3D55] transition-colors duration-500"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing & Security */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55] mb-4">Data Security & Sharing</h2>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              How we protect and handle your information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSharingInfo.map((item, idx) => {
              const IconComponent = item.icon
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
                    <h3 className="text-xl font-bold text-[#1C3D55]">{item.title}</h3>
                  </div>
                  <p className="text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500">
                    {item.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cookie Policy Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Cookie className="mr-4 text-[#1C3D55]" size={32} />
                <h2 className="text-3xl font-bold text-[#1C3D55]">Cookie Policy</h2>
              </div>
              
              <div className="space-y-6 text-[#6C7A89]">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                  Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
                
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-[#A3C6C4]/30">
                  <h3 className="font-bold text-[#1C3D55] mb-3">Types of Cookies We Use:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span><strong>Essential Cookies:</strong> Required for the website to function properly</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span><strong>Preference Cookies:</strong> Remember your settings and preferences</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                  However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
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

            <h2 className="text-4xl font-bold text-[#1C3D55] mb-6">Questions About Our Privacy Policy?</h2>
            
            <p className="text-lg text-[#6C7A89] mb-8">
              If you have questions about how we handle your data or want to exercise your privacy rights, 
              please reach out to us.
            </p>

            <div className="bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 rounded-2xl p-8 md:p-10 inline-block w-full max-w-md">
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <Mail className="mb-3 text-[#1C3D55]" size={32} />
                  <div className="text-center">
                    <p className="text-sm text-[#6C7A89] mb-1">Email us at</p>
                    <a 
                      href="mailto:drople81@gmail.com" 
                      className="text-xl font-semibold text-[#1C3D55] hover:text-[#A3C6C4] transition-colors duration-300"
                    >
                      drople81@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="h-px w-full bg-[#A3C6C4]/30"></div>
                
                <div className="flex flex-col items-center">
                  <Shield className="mb-3 text-[#1C3D55]" size={32} />
                  <div className="text-center">
                    <p className="text-sm text-[#6C7A89] mb-1">For privacy concerns</p>
                    <p className="text-lg font-semibold text-[#1C3D55]">
                      Privacy Officer
                    </p>
                    <p className="text-sm text-[#6C7A89] mt-1">Webo Creators</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-[#6C7A89] max-w-md mx-auto">
              We typically respond to privacy inquiries within 24-48 hours during business days.
            </p>

            <div className="mt-10 pt-8 border-t border-[#A3C6C4]/30">
              <p className="text-sm text-[#6C7A89]">
                <strong>Policy Updates:</strong> We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                The most current version will always be posted on this page with the "Last Updated" date.
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