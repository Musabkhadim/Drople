"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Code2, TrendingUp, Film } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: Code2,
    video: "/webvectore.mp4",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized","SEO-Friendly & Fast Loading"],
    href: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence",
    icon: TrendingUp,
    video: "/digitalvectore.mp4",
    features: ["SEO", "PPC google & meta Ads", "Content Strategy", "Analytics"],
    href: "/services/digital-marketing",
  },
  {
  title: "Video Editing",
  description: "Professional video editing services for engaging and high-quality content",
  icon: Film,
  video: "/video.mp4",
  features: [
    "Short-form Content",
    "Documentary Videos",
    "Whiteboard Animation",
    "YouTube Optimization"
  ],
  href: "/services/video-editing",
}
]

export default function ServicesOverview() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Intersection Observer with faster threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })

            const video = videoRefs.current[index]
            if (video) {
              video.play().catch(e => console.log("Auto-play prevented:", e))
            }
          }
        })
      },
      { 
        threshold: 0.05,
        rootMargin: "50px"
      }
    )

    if (containerRef.current) {
      containerRef.current.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="pill-badge bg-[#A3C6C4]/10 text-[#1E415A] border border-[#A3C6C4]/30">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E415A] mb-4">Smart Services to Grow Your Business
          </h2>
          <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
           We deliver result-driven digital solutions designed around your business goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative transition-all duration-500 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <Link href={service.href}>
                  <div className="relative h-full cursor-pointer">
                    {/* Card background */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group-hover:border-[#A3C6C4]/40 transition-all duration-300 group-hover:bg-[#A3C6C4]/10"></div>

                    {/* Animated glow on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#A3C6C4]/10 to-transparent blur-xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Video preview */}
                      <div className="mb-6 h-48 rounded-2xl overflow-hidden bg-[#F9FAF5] relative">
                        <video
                          ref={el => videoRefs.current[index] = el}
                          src={service.video}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#354649]/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-[#1D4059]/10 flex items-center justify-center mb-4 group-hover:bg-[#1D4059]/20 transition-colors duration-300">
                        <IconComponent size={24} className="text-[#1D4059]" />
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-2xl font-bold text-[#1D4059] mb-2 group-hover:text-[#A3C6C4] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#6C7A89] mb-6 flex-grow">{service.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-[#6C7A89]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#A3C6C4]"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="text-[#1D4059] font-semibold flex items-center gap-2 group-hover/cta:gap-3 transition-all duration-300">
                        Learn More
                        <span className="group-hover/cta:translate-x-2 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}