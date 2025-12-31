"use client"

import { useEffect, useState, useRef } from "react"

const values = [
  { title: "Innovation", description: "Constantly pushing boundaries with cutting-edge technology" },
  { title: "Quality", description: "Delivering excellence in every project we undertake" },
  { title: "Integrity", description: "Building trust through transparent and honest partnerships" },
  { title: "Collaboration", description: "Working seamlessly with clients to achieve shared goals" },
  { title: "Excellence", description: "Striving for perfection in all aspects of our work" },
  { title: "Growth", description: "Helping our clients scale and succeed in their markets" },
]

export default function ValuesGrid() {
  const [visibleValues, setVisibleValues] = useState<boolean[]>(new Array(values.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleValues((prev) => {
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
    <section ref={containerRef} className="py-20 bg-[#CBCBCB]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] text-center mb-16 animate-decrypt">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-index={index}
              className={`glassmorphism p-8 rounded-xl cursor-pointer group transition-all duration-500 ${
                visibleValues[index] ? "animate-fade-in-up" : "opacity-0"
              } hover:scale-105 hover:shadow-lg`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="text-2xl font-bold text-[#777C6D] mb-3 group-hover:text-[#B7B89F] transition-colors">
                {value.title}
              </h3>
              <p className="text-[#777C6D] opacity-90">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
