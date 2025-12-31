"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, Play, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
    if (videoRef.current) videoRef.current.load()
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-18 pb-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/heresection.png')",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-8 w-full">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

          {/* LEFT CONTENT */}
         <div
          className={`space-y-4 mt-4 sm:mt-8 lg:mt-12 transition-all duration-1000 ${
           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
>

             <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1B3C53] leading-tight">
                Web Dev, Digital Marketing & Video Editing Services
              </h1>

              <p className="text-lg text-[#234C6A] leading-relaxed max-w-2xl">
                Premium digital solutions including custom websites, web applications, digital marketing, and
                professional video editing.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/get-started" prefetch>
                <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/services/video-editing">
                <button className="px-8 py-4 rounded-full glassmorphic text-[#1B3C53] font-semibold border border-[#1B3C53]/30 hover:bg-[#234C6A]/20 transition-all flex items-center gap-2 justify-center">
                  <Play size={18} />
                  Explore Our Work
                </button>
              </Link>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-[#234C6A]/30">
              {[
                { value: "300+", label: "Projects Delivered" },
                { value: "90+", label: "Happy Clients" },
                { value: "3+ Years", label: "Industry Experience" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-[#1B3C53]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#234C6A]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIDEO CARD */}
         <div className="relative flex items-center justify-center px-2 sm:px-4 transition-all duration-1000 delay-300">
  <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[900px] h-[220px] sm:h-[280px] lg:h-[360px]">
    
    <div className="absolute inset-0 glass-card-accent rounded-3xl" />

    <div className="absolute inset-0 rounded-3xl overflow-hidden">
      <video
        ref={videoRef}
        src="/here.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/20 via-transparent to-transparent" />
    </div>
  </div>
</div>

        </div>
      </div>

      {/* SCROLL ICON */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#234C6A] hover:text-[#1B3C53] animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
