"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Tech Startup",
    content: "DROPLE transformed our online presence. The website is stunning and performs incredibly well.",
    rating: 5,
    image: "/professional-woman.png",
  },
  {
    id: 2,
    name: "Mark Davis",
    role: "Marketing Director",
    content: "Their digital marketing strategies increased our conversions by 300%. Highly recommended!",
    rating: 5,
    image: "/professional-man.png",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Brand Manager",
    content: "The video editing work was exceptional. They brought our vision to life beautifully.",
    rating: 5,
    image: "/professional-woman-2.png",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-20 bg-[#EEEEEE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] animate-decrypt">Client Testimonials</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glassmorphism p-12 rounded-2xl min-h-64 flex flex-col justify-center relative">
            <div className="mb-6 flex gap-1">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#777C6D] text-[#777C6D]" />
              ))}
            </div>

            <p className="text-lg text-[#777C6D] mb-8 italic">"{testimonials[current].content}"</p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-[#777C6D]">{testimonials[current].name}</p>
                <p className="text-sm text-[#777C6D] opacity-75">{testimonials[current].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-[#777C6D] text-white hover:bg-[#B7B89F] transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-[#777C6D] text-white hover:bg-[#B7B89F] transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#777C6D] w-8" : "bg-[#B7B89F]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
