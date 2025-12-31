"use client"

import Link from "next/link"

const services = [
  { number: "500+", label: "Projects Completed" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "300%", label: "Avg. Conversion Increase" },
]

const marketingServices = [
  "SEO Optimization",
  "Social Media Marketing",
  "Content Marketing",
  "PPC Campaigns",
  "Email Marketing",
  "Analytics & Reporting",
]

export default function DigitalMarketingSection() {
  return (
    <section className="py-20 bg-[#EEEEEE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="rounded-2xl overflow-hidden h-96 order-2 lg:order-1">
            <video
              src="/images/here-20section-20vectors.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] animate-decrypt">Digital Marketing</h2>

            <p className="text-lg text-[#777C6D]">
              Strategic marketing solutions designed to increase your online visibility, drive targeted traffic, and
              boost conversions.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="glassmorphism p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#777C6D]">{service.number}</p>
                  <p className="text-sm text-[#777C6D]">{service.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {marketingServices.map((service, index) => (
                <p key={index} className="text-[#777C6D] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#777C6D] rounded-full" />
                  {service}
                </p>
              ))}
            </div>

            <Link href="/contact">
              <button className="px-8 py-3 bg-[#777C6D] text-white rounded-full font-semibold hover:bg-[#B7B89F] hover:text-[#777C6D] transition-all duration-300 transform hover:scale-105">
                Grow Your Business
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
