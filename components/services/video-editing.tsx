"use client"

import Link from "next/link"

const videoServices = [
  "Corporate Videos",
  "Social Media Content",
  "Promotional Videos",
  "Motion Graphics",
  "Color Grading",
  "Video Animation",
]

export default function VideoEditingSection() {
  return (
    <section className="py-20 bg-[#CBCBCB]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#777C6D] animate-decrypt">Video Editing</h2>

            <p className="text-lg text-[#777C6D]">
              Professional video content creation and editing services that bring your vision to life and engage your
              audience effectively.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {videoServices.map((service, index) => (
                <div key={index} className="glassmorphism p-4 rounded-lg">
                  <p className="text-[#777C6D] font-medium">{service}</p>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <button className="px-8 py-3 bg-[#777C6D] text-white rounded-full font-semibold hover:bg-[#B7B89F] hover:text-[#777C6D] transition-all duration-300 transform hover:scale-105">
                Create Your Video
              </button>
            </Link>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden h-96">
            <video
              src="/images/vider-20section-20vectores.mp4"
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
