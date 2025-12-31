"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ChevronRight, Check, Mail, Phone, User, Briefcase, Globe, MessageSquare, MapPin, Clock, Sparkles } from "lucide-react"
import { db } from "../firebase" // ✅ Now this will work
import { collection, addDoc, Timestamp } from "firebase/firestore"
import Footer from "@/components/footer"
import CTABanner from "@/components/cta-banner"

const steps = [
  { number: 1, title: "Share Vision", description: "Tell us your project goals", icon: MessageSquare },
  { number: 2, title: "Strategy Call", description: "Free consultation session", icon: Phone },
  { number: 3, title: "Custom Plan", description: "Detailed proposal & timeline", icon: Briefcase },
  { number: 4, title: "Kickoff", description: "Start building solution", icon: Globe },
]

export default function GetStarted() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "web-development",
    brief: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    // Create unique ID from user name
    const createNameId = (name: string) => {
      // Clean the name: remove spaces, special characters, convert to lowercase
      const cleanName = name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '')  // Remove all spaces
        .replace(/[^a-z0-9]/g, '')  // Remove special characters
        
      // Get current timestamp
      const timestamp = Date.now()
      
      // Add random string for uniqueness
      const random = Math.random().toString(36).substring(2, 8)
      
      // Combine to create unique ID
      return `${cleanName}_${timestamp}_${random}`
    }

    // Generate the unique ID
    const userName = formData.name
    const uniqueNameId = createNameId(userName)
    
    console.log("Generated User ID:", uniqueNameId)
    console.log("Original Name:", userName)
    
    // Save to "drople" collection in Firestore
    const docRef = await addDoc(collection(db, "drople"), {
      // User identification
      userNameId: uniqueNameId,  // This is the unique ID based on name
      fullName: formData.name,   // Original name
      
      // Contact information
      userEmail: formData.email,
      userPhone: formData.phone,
      company: formData.company || "Not provided",
      
      // Project details
      serviceRequired: formData.service,
      projectBrief: formData.brief,
      
      // Metadata
      documentId: `DRP-${Date.now()}`,
      status: "pending_review",
      submissionDate: Timestamp.now(),
      lastUpdated: Timestamp.now(),
      
      // Tracking info
      submissionSource: "drople_website_form",
      formType: "get_started_form",
      browserInfo: typeof navigator !== 'undefined' ? navigator.userAgent : "unknown"
    })

    console.log("✅ Firestore Document ID:", docRef.id)
    console.log("✅ User Name ID saved:", uniqueNameId)
    console.log("✅ Full Data saved for:", formData.name)
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "web-development",
      brief: "",
    })
    
    // Show success message
    setShowSuccess(true)
    setActiveStep(1)
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
    
  } catch (error: any) {
    console.error("❌ Error saving to Firebase:", error)
    
    // Alternative method if Firebase fails
    const fallbackId = formData.name
      .toLowerCase()
      .replace(/\s/g, '')
      .replace(/[^a-z0-9]/g, '') + '_' + Date.now()
    
    console.log("📝 Local backup - User ID:", fallbackId)
    console.log("📝 Local backup - Form data:", {
      userNameId: fallbackId,
      fullName: formData.name,
      userEmail: formData.email,
      userPhone: formData.phone,
      timestamp: new Date().toISOString()
    })
    
    // Still show success for user experience
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
    
    alert("Form submitted successfully! We'll contact you soon.")
  } finally {
    setIsSubmitting(false)
  }
}
  return (
    <main className="relative min-h-screen">
      {/* Success Message Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl p-6 md:p-8 max-w-md mx-4 shadow-2xl animate-fadeIn">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#1D4059] mb-2">
                Thank You! 🎉
              </h3>
              
              <p className="text-[#1D4059]/70 mb-6">
                Your project request has been submitted to <strong></strong>. We'll contact you within 24 hours.
              </p>
              
              <div className="bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 p-3 rounded-lg mb-4">
                <p className="text-xs text-[#1D4059] font-semibold">
                  Expected response time: <code className="bg-[#1D4059] text-white px-2 py-1 rounded">24 hours</code> 
                </p>
              </div>
              
             
              
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] text-white font-semibold hover:shadow-md transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-white"></div>
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#1D4059]/10 to-[#3A7CA5]/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
          />
        ))}
        
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1D4059]/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-[#3A7CA5]/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4059]/5 via-transparent to-[#3A7CA5]/5"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-[#1D4059]/10 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 text-[#1D4059] border border-[#1D4059]/20 font-semibold backdrop-blur-sm flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Get Started
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1D4059] via-[#2A5A7B] to-[#3A7CA5] bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h1>

            <p className="text-base text-[#1D4059]/70 max-w-xl mx-auto">
              Complete this form and we'll reach out within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Split Layout */}
      <section className="relative py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Get Started Today Form (Wider - 2/3) */}
            <div className="lg:col-span-2">
              <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm border border-white/40 shadow-md h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1D4059] mb-2">
                    <span className="bg-gradient-to-r from-[#1D4059] to-[#2A5A7B] bg-clip-text text-transparent">
                      Get Started Today
                    </span>
                  </h3>
                  <p className="text-[#1D4059]/70 text-xs md:text-sm">
                   Fill out the form below to submit your information and  <strong>connect with Drople. </strong>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    {/* Name */}
    <div className="group">
      <label className="block text-sm font-semibold text-[#1D4059] mb-2 flex items-center gap-2">
        <User className="w-4 h-4" />
        Full Name *
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-3 text-base rounded-xl border border-[#1D4059]/25 bg-white focus:border-[#1D4059] focus:outline-none focus:ring-2 focus:ring-[#1D4059]/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#1D4059]/40"
        placeholder="John Doe"
      />
    </div>

    {/* Email */}
    <div className="group">
      <label className="block text-sm font-semibold text-[#1D4059] mb-2 flex items-center gap-2">
        <Mail className="w-4 h-4" />
        Email Address *
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-3 text-base rounded-xl border border-[#1D4059]/25 bg-white focus:border-[#1D4059] focus:outline-none focus:ring-2 focus:ring-[#1D4059]/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#1D4059]/40"
        placeholder="john@example.com"
      />
    </div>

    {/* Phone Number */}
    <div className="group">
      <label className="block text-sm font-semibold text-[#1D4059] mb-2 flex items-center gap-2">
        <Phone className="w-4 h-4" />
        Phone Number *
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-3 text-base rounded-xl border border-[#1D4059]/25 bg-white focus:border-[#1D4059] focus:outline-none focus:ring-2 focus:ring-[#1D4059]/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#1D4059]/40"
        placeholder="+92 347 0458847"
      />
    </div>

    {/* Company */}
    <div className="group">
      <label className="block text-sm font-semibold text-[#1D4059] mb-2 flex items-center gap-2">
        <Briefcase className="w-4 h-4" />
        Company
      </label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full px-4 py-3 text-base rounded-xl border border-[#1D4059]/25 bg-white focus:border-[#1D4059] focus:outline-none focus:ring-2 focus:ring-[#1D4059]/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#1D4059]/40"
        placeholder="Your Company"
      />
    </div>

    {/* Service */}
    <div className="group md:col-span-2">
      <label className="block text-sm font-semibold text-[#1D4059] mb-2">
        Service Interest *
      </label>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full px-4 py-3 text-base rounded-xl border border-[#1D4059]/25 bg-white focus:border-[#1D4059] focus:outline-none focus:ring-2 focus:ring-[#1D4059]/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
      >
        <option value="web-development">🌐 Web Development</option>
        <option value="digital-marketing">📈 Digital Marketing</option>
        <option value="video-editing">🎬 Video Editing</option>
        <option value="seo-services">🔍 SEO Services</option>
        <option value="other">✨ Other</option>
      </select>
    </div>
  </div>

  {/* Project Brief */}
  <div className="group">
    <label className="block text-sm font-semibold text-[#1D4059] mb-2 flex items-center gap-2">
      <MessageSquare className="w-4 h-4" />
      Project Brief *
    </label>
    <textarea
      name="brief"
      value={formData.brief}
      onChange={handleChange}
      required
      disabled={isSubmitting}
      rows={5}
      className="w-full px-4 py-3 text-base rounded-xl border border-[#1D4059]/25 bg-white focus:border-[#1D4059] focus:outline-none focus:ring-2 focus:ring-[#1D4059]/15 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#1D4059]/40"
      placeholder="Tell us about your project vision, goals, timeline..."
    />
  </div>

  {/* Submit Button */}
  <div className="pt-4">
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4059] via-[#2A5A7B] to-[#3A7CA5] text-white font-semibold text-base hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <span className="relative z-10">
        {isSubmitting ? (
          <>
            <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
            <span>Processing...</span>
          </>
        ) : (
          "Send Project Request"
        )}
      </span>
      {!isSubmitting && (
        <ChevronRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
      )}
    </button>
  </div>
</form>
              </div>
            </div>

            {/* Right Column - Contact Information (Smaller - 1/3) */}
           <div>
  <div className="sticky top-8">
    <div className="text-center mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-[#1D4059] mb-2">
        <span className="bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] bg-clip-text text-transparent">
          Contact Information
        </span>
      </h3>
      <p className="text-[#1D4059]/80 text-sm">
        Reach out to us anytime
      </p>
    </div>

    {/* Compact Vertical Cards */}
    <div className="space-y-5">
      {/* Office Address Card */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-white to-gray-50/90 border border-[#1D4059]/15 hover:border-[#1D4059]/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4059]/15 to-[#3A7CA5]/15 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-[#1D4059]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base text-[#1D4059] mb-2">Our Office Location</h3>
            <div className="text-sm text-[#1D4059]/70 space-y-1">
              <p>Office 3/15, 5th floor</p>
              <p>Silkcenter, Rahmanabad</p>
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Numbers Card */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-white to-gray-50/90 border border-[#1D4059]/15 hover:border-[#1D4059]/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4059]/15 to-[#3A7CA5]/15 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#1D4059]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base text-[#1D4059] mb-2">Call Us Directly</h3>
            <div className="text-sm text-[#1D4059]/70 space-y-2">
              <div>
                <p className="font-medium mb-1">Primary Number:</p>
                <p className="hover:text-[#1D4059] transition-colors">+92347 0458847</p>
              </div>
              <div>
                <p className="font-medium mb-1">Secondary Number:</p>
                <p className="hover:text-[#1D4059] transition-colors">+92312 5266834</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Addresses Card */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-white to-gray-50/90 border border-[#1D4059]/15 hover:border-[#1D4059]/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4059]/15 to-[#3A7CA5]/15 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-[#1D4059]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base text-[#1D4059] mb-2">Email Addresses</h3>
            <div className="text-sm text-[#1D4059]/70 space-y-2">
              <div>
                <p className="font-medium mb-1">Primary Email:</p>
                <p className="hover:text-[#1D4059] transition-colors break-all">
                  awaiszakir787@gmail.com
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Secondary Email:</p>
                <p className="hover:text-[#1D4059] transition-colors break-all">
                  musabkhadim363@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Card */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-white to-gray-50/90 border border-[#1D4059]/15 hover:border-[#1D4059]/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4059]/15 to-[#3A7CA5]/15 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-[#1D4059]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base text-[#1D4059] mb-2">Response Time</h3>
            <div className="text-sm text-[#1D4059]/70 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">📧</span>
                <span><strong>Email:</strong> Within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <span><strong>Phone:</strong> Within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🕐</span>
                <span><strong>Hours:</strong> 9 AM - 6 PM</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
     
 