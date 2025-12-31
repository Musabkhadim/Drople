"use client"

import { useEffect, useState, useRef } from "react"

const timelineEvents = [
  {
    year: "2020",
    title: "Founded",
    description: "DROPLE was established with a vision to revolutionize digital services",
  },
  {
    year: "2021",
    title: "First 100 Clients",
    description: "Reached milestone of 100 satisfied clients across different industries",
  },
  {
    year: "2022",
    title: "Expanded Services",
    description: "Added comprehensive video editing and digital marketing services",
  },
  { year: "2023", title: "Team Growth", description: "Grew to 50+ talented team members and opened new office" },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Won multiple awards for web development excellence and innovation",
  },
]

export default function Timeline() {
  const [visibleEvents, setVisibleEvents] = useState<boolean[]>(new Array(timelineEvents.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleEvents((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      containerRef.current.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-[#EEEEEE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] text-center mb-16 animate-decrypt">Our Journey</h2>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              data-index={index}
              className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center transition-all duration-500 ${
                visibleEvents[index] ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="flex-1 glassmorphism p-8 rounded-xl">
                <p className="text-[#B7B89F] font-bold text-lg mb-2">{event.year}</p>
                <h3 className="text-2xl font-bold text-[#777C6D] mb-3">{event.title}</h3>
                <p className="text-[#777C6D]">{event.description}</p>
              </div>
              <div className="w-4 h-4 bg-[#777C6D] rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
