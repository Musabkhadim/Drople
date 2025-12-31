"use client"

import Link from "next/link"

export default function CTABanner() {
  return (
    <section className="relative py-2 md:py-2 lg:py-12" style={{ backgroundColor: '#EEEEEE' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Box with 3D Effect */}
        <div className="relative mx-4 md:mx-4 lg:mx-4">
          {/* 3D Shadow Layers */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl" style={{ 
            background: '#2a4c6fff',
            transform: 'translate(8px, 8px)',
            zIndex: 1
          }} />
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl" style={{ 
            background: '#0f2438',
            transform: 'translate(4px, 4px)',
            zIndex: 2
          }} />
          
          {/* Main CTA Box */}
          <div className="relative rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden" style={{ 
            background: 'linear-gradient(135deg, #1E425C 0%, #2A5270 100%)',
            zIndex: 3
          }}>
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
               Our experts are ready to help your business grow. Schedule a free consultation today.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started">
                  <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#A3C6C4] text-[#354649] font-semibold hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                  </button>
                </Link>

                {/* <Link href="/contact">
                  <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#354649] transition-all duration-300">
                    Schedule a Call
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}