"use client"
import Link from "next/link"

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowThankYou(true)
      setEmail("")
      setTimeout(() => setShowThankYou(false), 3000)
    }
  }

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#21445F' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Wave Decoration at Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="#EEEEEE" fillOpacity="0.3"/>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-white/20">
          {showThankYou ? (
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Thank You! 🎉</h3>
              <p className="text-white/90">You've successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  Subscribe to our newsletter for latest updates.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col xs:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 px-4 sm:px-5 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm text-sm sm:text-base"
                />
                <button type="submit" className="px-4 sm:px-6 py-3 rounded-full bg-white text-[#21445F] font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base">
                  Subscribe
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Drople</h3>
            <p className="text-white text-sm leading-relaxed mb-4">
              Building digital solutions that drive growth and create lasting impact for businesses worldwide.
            </p>
            {/* Social Links */}
          <div className="flex gap-2">
  <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
    <Linkedin size={16} />
  </a>
  <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
    <Twitter size={16} />
  </a>
  <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
    <Instagram size={16} />
  </a>
  <a href="https://www.facebook.com/drople11" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
    <Facebook size={16} />
  </a>
  <a href="https://www.youtube.com/@drople-d4z" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20">
    <Youtube size={16} />
  </a>
</div>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/video-editing" className="text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:drople81@gmail.com"
                className="flex items-start gap-2 text-white text-sm hover:text-white/80 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail size={14} />
                </div>
                <div>
                  <div className="text-xs text-white/70">Email</div>
                  <div className="font-medium">drople81@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-start gap-2 text-white text-sm hover:text-white/80 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-xs text-white/70">Phone</div>
                  <div className="font-medium">+923470458847</div>
                </div>
              </a>
              <div className="flex items-start gap-2 text-white text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-xs text-white/70">Address</div>
                  <div className="font-medium">Pakistan Rawalpindi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>

        {/* Bottom Footer */}
       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  <p className="text-white text-sm">
    &copy; {currentYear} <span className="font-semibold">Drople</span>. All rights reserved.
  </p>

  <div className="flex flex-wrap gap-6 text-sm">
    <Link href="/privacypolicy" className="text-white hover:text-white/80 transition-colors">
      Privacy Policy
    </Link>
    <Link href="/terms" className="text-white hover:text-white/80 transition-colors">
  Terms of Service
</Link>
    <Link href="/cookies" className="text-white hover:text-white/80 transition-colors">
      Cookie Policy
    </Link>
  </div>
</div>

      </div>

      {/* Bottom Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </footer>
  )
}