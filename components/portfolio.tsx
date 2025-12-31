"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration",
    image: "/ecommerce-platform.jpg",
    metrics: "↑ 150% Sales Growth",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Real-time analytics dashboard for multi-tenant app",
    image: "/saas-dashboard.jpg",
    metrics: "↑ 3x Faster Queries",
  },
  {
    title: "Digital Campaign",
    category: "Digital Marketing",
    description: "Integrated marketing campaign across multiple channels",
    image: "/digital-marketing-campaign.jpg",
    metrics: "↑ 250% ROI",
  },
]

export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      containerRef.current.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="pill-badge bg-[#A3C6C4]/10 text-[#354649] border border-[#A3C6C4]/30">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#354649] mb-4">Case Studies & Projects</h2>
          <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">Proven success stories across diverse industries.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative transition-all duration-700 ${
                visibleProjects[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl h-64 md:h-80 cursor-pointer">
                {/* Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#354649] via-[#354649]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <div className="text-sm font-semibold text-[#A3C6C4] mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A3C6C4] font-semibold">{project.metrics}</span>
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/portfolio" className="inline-block">
            <button className="px-8 py-4 rounded-full border-2 border-[#A3C6C4] text-[#354649] font-semibold hover:bg-[#A3C6C4]/10 transition-all duration-300">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
