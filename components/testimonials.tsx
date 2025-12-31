"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Oly Martin",
   designation: "Content Creator",
  text: "Excellent video editing service. The final videos were high quality, engaging, and delivered on time. Very happy with the results.",
  rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
 {
  name: "Janna Wemple",
  designation: "Content Creator",
  text: "Great vlog editing service. Clean cuts, smooth flow, and delivered on time.Very happy with the results",
  rating: 5,
  image: "/jenna.jpg"
},
  {
  name: "Adnan Khan",
  designation: "CEO , BMGulf Travel",
  text: "Excellent experience working with this team.BMGulf Travel website is fast,user-friendly, & SEO-optimized,",
  rating: 5, 
  image: "/adnan.png"
},

{
  name: "Sarah Johnson",
  designation: "Product Manager",
  text: "Excellent digital marketing support. Our traffic and leads improved within weeks.",
  rating: 5,
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
},

 {
  name: "Ahmad Mauz",
  designation: "Business Owner",
  text: "Great experience working with team. They delivered a professional, fast,& well designed website that perfectly matches my business needs.",
  rating: 5,
  image: "/muaz.jpg"
},

  {
   
  name: "Tom Fleay",
  designation: "Content Creator",
  text: "Amazing video editing service. Smooth transitions, clean cuts, and fast delivery.",
  rating: 5,
  image: "https://images.unsphjlash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop"
},
  
]

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(testimonials.length).fill(false))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      containerRef.current.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        return nextIndex >= testimonials.length - (cardsToShow - 1) ? 0 : nextIndex
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [isMobile, isTablet])

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3
  const cardWidth = 100 / cardsToShow

  return (
    <section className="relative py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#EEEEEE' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E425C] mb-2">
            Clients Reviews
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 px-4">
            What our satisfied clients have to say about us
          </p>
        </div>

        {/* Testimonials Carousel - Responsive */}
        <div ref={containerRef} className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-index={index}
                  className="flex-shrink-0 px-2 md:px-3 lg:px-4"
                  style={{ width: `${cardWidth}%` }}
                >
                  {/* Circular Card Design */}
                  <div className="relative mx-auto" style={{ 
                    width: isMobile ? '280px' : '320px', 
                    height: isMobile ? '280px' : '320px',
                    maxWidth: '100%'
                  }}>
                    {/* Avatar Circle - Top Left */}
                    <div className="absolute" style={{ 
                      top: isMobile ? '15px' : '20px', 
                      left: isMobile ? '15px' : '20px', 
                      zIndex: 20 
                    }}>
                      <div 
                        className="rounded-full overflow-hidden border-4 flex items-center justify-center"
                        style={{
                          width: isMobile ? '60px' : '70px',
                          height: isMobile ? '60px' : '70px',
                          borderColor: '#1C3E56',
                          backgroundColor: '#EAEBEB'
                        }}
                      >
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                        <svg className="hidden" width="30" height="30" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" fill="#1C3E56" />
                          <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="#1C3E56" />
                        </svg>
                      </div>
                      
                      {/* Dotted Line Connection */}
                      <svg 
                        style={{ 
                          position: 'absolute', 
                          top: isMobile ? '30px' : '35px', 
                          left: isMobile ? '60px' : '70px',
                          zIndex: 1
                        }} 
                        width={isMobile ? '60' : '70'} 
                        height={isMobile ? '90' : '100'}
                      >
                        <path 
                          d={isMobile ? "M 0 0 Q 30 45 60 90" : "M 0 0 Q 35 50 70 100"} 
                          stroke="#1C3E56" 
                          strokeWidth="2" 
                          strokeDasharray="6,6" 
                          fill="none" 
                          opacity="0.5"
                        />
                      </svg>
                    </div>

                    {/* Main Circular Card */}
                    <div 
                      className="absolute rounded-full flex items-center justify-center"
                      style={{
                        width: isMobile ? '240px' : '280px',
                        height: isMobile ? '240px' : '280px',
                        top: isMobile ? '35px' : '40px',
                        left: isMobile ? '35px' : '40px',
                        background: '#1C3E56',
                        border: isMobile ? '5px solid #1C3E56' : '6px solid #1C3E56',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                      }}
                    >
                      {/* Inner Content Circle */}
                      <div 
                        className="rounded-full flex flex-col items-center justify-center px-6 md:px-8 py-4 md:py-6 text-center relative"
                        style={{
                          width: isMobile ? '220px' : '260px',
                          height: isMobile ? '220px' : '260px',
                          backgroundColor: '#EAEBEB'
                        }}
                      >
                        {/* Quote Icon */}
                        <div className="mb-2 md:mb-3" style={{ color: '#052135ff', opacity: 0.2 }}>
                          <svg width={isMobile ? '28' : '35'} height={isMobile ? '28' : '35'} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>

                        {/* Name */}
                        <h3 className={`font-bold mb-1 ${isMobile ? 'text-base' : 'text-lg'}`} style={{ color: '#1C3E56' }}>
                          {testimonial.name}
                        </h3>
                        
                        {/* Designation */}
                        <p className="text-xs mb-2 md:mb-3" style={{ color: '#1C3E56', opacity: 0.7 }}>
                          {testimonial.designation}
                        </p>

                        {/* Star Rating */}
                        <div className="flex gap-1 mb-2 md:mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              size={isMobile ? 12 : 14} 
                              className="text-[#1C3E56]"
                              fill={i < testimonial.rating ? "#d69e02ff" : "none"}
                              strokeWidth={1.5}
                              opacity={i < testimonial.rating ? 1 : 0.3}
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className={`leading-relaxed ${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ color: '#092840ff', opacity: 0.8 }}>
                          {testimonial.text}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Outer Ring */}
                    <div 
                      className="absolute rounded-full"
                      style={{
                        width: isMobile ? '260px' : '300px',
                        height: isMobile ? '260px' : '300px',
                        top: isMobile ? '8px' : '10px',
                        left: isMobile ? '8px' : '10px',
                        border: isMobile ? '3px solid #1C3E56' : '4px solid #1C3E56',
                        opacity: 0.25
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: testimonials.length - (cardsToShow - 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all duration-300"
                style={{
                  width: currentIndex === index ? (isMobile ? '24px' : '28px') : (isMobile ? '8px' : '10px'),
                  height: isMobile ? '8px' : '10px',
                  borderRadius: '5px',
                  backgroundColor: '#0f2433ff',
                  opacity: currentIndex === index ? 1 : 0.3
                }}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  )
}