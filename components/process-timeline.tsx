"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Palette, Code, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals and target audience",
    icon: Zap,
  },
  {
    number: "02",
    title: "Design",
    description: "Creating wireframes and visual mockups",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development",
    description: "Building your solution with cutting-edge tech",
    icon: Code,
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous QA and performance optimization",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Launch",
    description: "Go-live and ongoing support",
    icon: Rocket,
  },
]

export default function ProcessTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSteps((prev) => {
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
    <section ref={containerRef} className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#EEEEEE]">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#1C3F57]/5"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Gradient blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with animations */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-4 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-[#1C3F57]/10 text-[#1C3F57] text-sm font-semibold border border-[#1C3F57]/20 backdrop-blur-sm">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C3F57] mb-4 animate-fade-up animation-delay-100">
            Our Development Process
          </h2>
          <p className="text-base md:text-lg text-[#1C3F57]/80 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            A structured approach to deliver exceptional results on time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line with animated dots - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="relative h-0.5 bg-gradient-to-r from-transparent via-[#1C3F57]/20 to-transparent overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C3F57]/0 via-[#1C3F57]/40 to-[#1C3F57]/0 animate-shimmer" />
            </div>
            
            {/* Animated dots on the line */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 w-2 h-2 rounded-full bg-[#1C3F57] transform -translate-y-1/2 animate-pulse"
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isHovered = hoveredStep === index
              const isVisible = visibleSteps[index]
              
              return (
                <div
                  key={index}
                  data-index={index}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 border border-transparent hover:border-[#1C3F57]/10">
                    {/* Icon Circle with glow effect */}
                    <div className="relative z-10 mb-6">
                      <div className="relative">
                        {/* Outer glow ring */}
                        {isHovered && (
                          <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#1C3F57]/20 blur-xl animate-ping-slow" />
                        )}
                        
                        {/* Animated ring */}
                        <div className={`absolute inset-0 w-20 h-20 rounded-full border-2 border-[#1C3F57]/20 ${isHovered ? 'animate-spin-slow' : ''}`} />
                        
                        {/* Main icon circle */}
                        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isHovered 
                            ? 'bg-gradient-to-br from-[#1C3F57] to-[#2A5A7B] scale-110 shadow-lg shadow-[#1C3F57]/30' 
                            : 'bg-gradient-to-br from-[#1C3F57]/90 to-[#1C3F57]/70 shadow-md'
                        }`}>
                          <IconComponent 
                            size={26} 
                            className={`transition-all duration-500 ${isHovered ? 'text-white scale-110' : 'text-white/90'}`} 
                          />
                        </div>
                        
                        {/* Step number badge with animation */}
                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isHovered 
                            ? 'bg-gradient-to-br from-[#1C3F57] to-[#2A5A7B] scale-110 shadow-lg' 
                            : 'bg-[#1C3F57] shadow'
                        }`}>
                          <span className="text-xs font-bold text-white animate-bounce-in">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content with animations */}
                    <div className="space-y-3">
                      <h3 className={`text-lg md:text-xl font-bold transition-all duration-500 ${
                        isHovered ? 'text-[#1C3F57] scale-105' : 'text-[#1C3F57]'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Animated underline */}
                      <div className="relative w-12 h-0.5 bg-gradient-to-r from-transparent via-[#1C3F57] to-transparent mx-auto overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#1C3F57] via-white to-[#1C3F57] animate-shimmer ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500`} />
                      </div>
                      
                      <p className="text-sm md:text-base text-[#1C3F57]/70 transition-all duration-500 group-hover:text-[#1C3F57]/90">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover indicator line for mobile/tablet */}
                    <div className="lg:hidden absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-[#1C3F57]/30 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Connection lines for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <>
                      {/* Mobile connection line */}
                      <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#1C3F57]/20 to-transparent transform -translate-x-1/2" />
                      
                      {/* Tablet connection line */}
                      <div className="hidden md:block lg:hidden absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-[#1C3F57]/20 to-transparent transform -translate-y-1/2" />
                    </>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom call to action */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20 animate-fade-up animation-delay-700">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1C3F57]/10 to-[#1C3F57]/5 border border-[#1C3F57]/20 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1C3F57]/15 hover:to-[#1C3F57]/10">
              <span className="text-[#1C3F57] font-semibold"><a href="/get-started">Ready to start your project?</a></span>
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-[#1C3F57] rounded-full animate-ping opacity-20" />
                <Rocket className="relative w-6 h-6 text-[#1C3F57] group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(-10px);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        .animation-delay-4000 {
          animation-delay: 4000ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-fade-up,
          .animate-blob,
          .animate-shimmer,
          .animate-spin-slow,
          .animate-ping-slow,
          .animate-bounce-in {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}