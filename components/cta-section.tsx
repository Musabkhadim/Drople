"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#777C6D] via-[#B7B89F] to-[#777C6D] overflow-hidden">
      {/* Animated background blur orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B7B89F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-morph" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#CBCBCB] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-morph"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white animate-decrypt">Ready to Start Your Project?</h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's transform your ideas into powerful digital solutions. Get in touch with our team today.
          </p>

          <Link href="/contact">
            <button className="inline-block px-12 py-4 bg-white text-[#777C6D] rounded-full font-bold text-lg hover:bg-[#EEEEEE] transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-scale-pulse">
              Get Started Today
            </button>
          </Link>

          {/* Features below CTA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-white">
            <div className="space-y-2">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm opacity-90">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm opacity-90">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm opacity-90">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
