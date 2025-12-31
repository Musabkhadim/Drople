"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Code2, TrendingUp, Film } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    href: "/services/web-development",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence",
    href: "/services/digital-marketing",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video content creation and editing services",
    href: "/services/video-editing",
  },
]

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A3C6C4] rounded-full mix-blend-multiply filter blur-3xl animate-morph"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6C7A89] rounded-full mix-blend-multiply filter blur-3xl animate-morph"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block mb-4">
              <span className="pill-badge bg-[#A3C6C4]/10 text-[#354649] border border-[#A3C6C4]/30">Our Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#354649] mb-6">Comprehensive Digital Solutions</h1>

            <p className="text-xl text-[#6C7A89]">
              Explore our full range of services designed to transform your business and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <Link key={idx} href={service.href}>
                  <div
                    className={`group cursor-pointer transition-all duration-700 ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group-hover:border-[#A3C6C4]/40 group-hover:shadow-lg transition-all duration-300">
                      {/* Animated glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A3C6C4]/10 to-transparent blur-xl"></div>
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center mb-6 group-hover:bg-[#A3C6C4]/30 transition-colors duration-300">
                          <IconComponent size={24} className="text-[#A3C6C4]" />
                        </div>

                        {/* Content */}
                        <h2 className="text-3xl font-bold text-[#354649] mb-3 group-hover:text-[#A3C6C4] transition-colors duration-300">
                          {service.title}
                        </h2>
                        <p className="text-[#6C7A89] mb-6 leading-relaxed">{service.description}</p>

                        {/* CTA */}
                        <div className="text-[#A3C6C4] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
