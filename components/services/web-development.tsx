"use client"

import Link from "next/link"

const features = [
  "Custom Website Development",
  "E-commerce Solutions",
  "Web Applications",
  "API Integration",
  "CMS Development",
  "Progressive Web Apps",
]

export default function WebDevelopmentSection() {
  return (
    <section className="py-20 bg-[#CBCBCB]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] animate-decrypt">Web Development</h2>

            <p className="text-lg text-[#777C6D]">
              From custom websites to complex web applications, we build scalable digital solutions that drive business
              growth and user engagement.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#777C6D] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <p className="text-[#777C6D] font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <button className="px-8 py-3 bg-[#777C6D] text-white rounded-full font-semibold hover:bg-[#B7B89F] hover:text-[#777C6D] transition-all duration-300 transform hover:scale-105">
                Start Your Web Project
              </button>
            </Link>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden h-96">
            <video
              src="/images/web-20development-20-20vectore.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
