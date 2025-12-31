"use client"

import { useEffect, useState } from "react"

const portfolioItems = [
  { id: 1, title: "E-commerce Platform", category: "Web Development" },
  { id: 2, title: "SaaS Dashboard", category: "Web Development" },
  { id: 3, title: "Marketing Campaign", category: "Digital Marketing" },
  { id: 4, title: "Product Video", category: "Video Editing" },
  { id: 5, title: "Brand Website", category: "Web Development" },
  { id: 6, title: "Social Media Content", category: "Video Editing" },
]

export default function PortfolioShowcase() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(portfolioItems.length).fill(false))

  useEffect(() => {
    portfolioItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newVisible = [...prev]
          newVisible[index] = true
          return newVisible
        })
      }, index * 100)
    })
  }, [])

  return (
    <section className="relative py-20 bg-[#CBCBCB]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] animate-decrypt">Our Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                visibleItems[index] ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#777C6D] to-[#B7B89F] overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#777C6D] via-[#B7B89F] to-[#CBCBCB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 h-full flex items-center justify-center text-center p-6 group-hover:scale-110 transition-transform duration-300">
                  <div>
                    <p className="text-white text-sm opacity-75 mb-2">{item.category}</p>
                    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
