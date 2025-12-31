"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie, Settings, BarChart, Target, Shield,  RefreshCw, Mail, Database, Eye, Filter, Bell } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "Required for the website to function properly. These cannot be disabled.",
    examples: ["Session management", "Security features", "Load balancing"]
  },
  {
    icon: BarChart,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
    examples: ["Visitor counts", "Page views", "Traffic sources"]
  },
  {
    icon: Target,
    title: "Marketing Cookies",
    description: "Used for advertising and remarketing efforts.",
    examples: ["Ad performance", "User interests", "Campaign tracking"]
  },
  {
    icon: Settings,
    title: "Preference Cookies",
    description: "Remember your settings and preferences for future visits.",
    examples: ["Language settings", "Theme preferences", "Layout choices"]
  }
]

const cookiePurposes = [
  {
    icon: Eye,
    title: "Analyze website traffic and performance",
    description: "Track how users navigate through our site to improve layout and content."
  },
  {
    icon: Database,
    title: "Understand user behavior",
    description: "Learn what content resonates with our audience for better service delivery."
  },
  {
    icon: Filter,
    title: "Improve services and content",
    description: "Use insights to enhance our offerings and user experience."
  },
  {
    icon: Bell,
    title: "Support marketing and advertising efforts",
    description: "Measure campaign effectiveness and optimize advertising strategies."
  }
]

export default function CookiePolicy() {
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
                Cookie Policy
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1C3D55] mb-6 leading-tight drop-shadow-xl transform-gpu translate-z-40">
              Our Cookie Policy
            </h1>

            <p className="text-xl text-[#6C7A89] mb-8 drop-shadow-lg transform-gpu translate-z-10">
              This Cookie Policy explains how <span className="font-bold text-[#1C3D55]">Drople</span> uses cookies and similar 
              technologies to enhance your browsing experience and improve our services.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <Cookie className="mr-2" size={18} />
                <span className="text-sm font-medium">Last Updated: April 2024</span>
              </div>
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <Shield className="mr-2" size={18} />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center text-[#1C3D55] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C3D55]/20">
                <Settings className="mr-2" size={18} />
                <span className="text-sm font-medium">Manageable Settings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Cookie className="mr-4 text-[#1C3D55]" size={32} />
                <h2 className="text-3xl font-bold text-[#1C3D55]">What Are Cookies?</h2>
              </div>
              
              <div className="space-y-6 text-[#6C7A89]">
                <p className="text-lg">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                  when you visit a website. They help websites remember information about your visit, which 
                  can make your next visit easier and the site more useful to you.
                </p>
                
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-[#A3C6C4]/30">
                  <h3 className="font-bold text-[#1C3D55] mb-3">How Cookies Work:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span>Stored locally on your device by your web browser</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span>Contain anonymous unique identifiers</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span>Help improve website functionality and user experience</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1C3D55] mr-3"></div>
                      <span>Can be session-based (temporary) or persistent (long-term)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Cookies */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55] mb-4">How We Use Cookies</h2>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              We use cookies to enhance your experience and improve our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookiePurposes.map((purpose, idx) => {
              const IconComponent = purpose.icon
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
                    <h3 className="text-xl font-bold text-[#1C3D55]">{purpose.title}</h3>
                  </div>
                  <p className="text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500">
                    {purpose.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55] mb-4">Types of Cookies We Use</h2>
            <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
              Different cookies serve different purposes to enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, idx) => {
              const IconComponent = cookie.icon
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms`, transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1C3D55]/10 flex items-center justify-center mr-4 group-hover:bg-[#1C3D55]/20 transition-all duration-500 group-hover:scale-110">
                      <IconComponent size={24} className="text-[#1C3D55]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C3D55]">{cookie.title}</h3>
                      <p className="text-sm text-[#6C7A89] mt-1">{cookie.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[#1C3D55] mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIdx) => (
                        <li key={exampleIdx} className="flex items-center text-sm text-[#6C7A89]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55]/50 mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Managing Cookies & Third Party */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Managing Cookies */}
            <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
             
              
              <div className="space-y-4 text-[#6C7A89]">
                <p>
                  You can control or disable cookies through your browser settings. Most web browsers allow 
                  you to manage cookie preferences.
                </p>
                
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-[#A3C6C4]/30">
                  <h4 className="font-bold text-[#1C3D55] mb-2">How to manage cookies:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Chrome: Settings → Privacy and security → Cookies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Firefox: Preferences → Privacy & Security → Cookies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Safari: Preferences → Privacy → Cookies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Edge: Settings → Cookies and site permissions</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-sm italic">
                  Note: Disabling cookies may affect some website features and functionality.
                </p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center mb-6">
                <Shield className="mr-4 text-[#1C3D55]" size={28} />
                <h2 className="text-2xl font-bold text-[#1C3D55]">Third-Party Cookies</h2>
              </div>
              
              <div className="space-y-4 text-[#6C7A89]">
                <p>
                  Third-party services such as Google Analytics, advertising networks, and social media 
                  platforms may place cookies on your device according to their own policies.
                </p>
                
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-[#A3C6C4]/30">
                  <h4 className="font-bold text-[#1C3D55] mb-2">Common third-party services:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Google Analytics (website analytics)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Social media widgets (Facebook, Twitter, etc.)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C3D55] mr-2"></div>
                      <span>Video embedding services (YouTube, Vimeo)</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-sm">
                  These third parties have their own privacy policies and cookie practices. We recommend 
                  reviewing their policies for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Updates Section */}
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
                Contact & Updates
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1C3D55] mb-6">Have Questions About Cookies?</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-center justify-center gap-4 text-[#6C7A89]">
                <RefreshCw className="text-[#1C3D55]" size={24} />
                <p className="text-lg">
                  We may update this Cookie Policy periodically to reflect changes in technology, 
                  regulations, or our practices.
                </p>
              </div>
              
              <p className="text-[#6C7A89]">
                The most current version will always be available on this page. We encourage you to 
                review this policy regularly to stay informed about how we use cookies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 rounded-2xl p-8 md:p-10 inline-block w-full max-w-md">
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <Mail className="mb-3 text-[#1C3D55]" size={32} />
                  <div className="text-center">
                    <p className="text-sm text-[#6C7A89] mb-1">For questions about cookies</p>
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
                  <p className="text-sm text-[#6C7A89]">
                    By continuing to use our website without changing your cookie settings, 
                    you consent to our use of cookies as described in this policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#A3C6C4]/30">
              <p className="text-sm text-[#6C7A89]">
                <strong>Note:</strong> Some cookies are essential for the website to function properly. 
                If you choose to disable these cookies, certain features of our website may not work as intended.
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