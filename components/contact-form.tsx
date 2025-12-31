"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Check, AlertCircle } from "lucide-react"

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    budget: "10k-25k",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      setIsLoading(false)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "web-development",
          budget: "10k-25k",
          message: "",
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setIsLoading(false)
      setErrors({ submit: "Failed to send message. Please try again." })
    }
  }

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in-up">
          <div className="w-16 h-16 bg-gradient-to-r from-[#A3C6C4] to-[#6C7A89] rounded-full flex items-center justify-center animate-scale-pulse">
            <Check size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#354649]">Message Received!</h3>
          <p className="text-[#6C7A89] text-center max-w-xs">
            Thank you for reaching out. We'll review your message and get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Submit Error */}
          {errors.submit && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-600">{errors.submit}</span>
            </div>
          )}

          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-[#354649] mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-white border rounded-lg text-[#354649] placeholder-[#6C7A89]/50 focus:outline-none transition-all ${
                errors.name ? "border-red-500 focus:border-red-600" : "border-[#A3C6C4]/30 focus:border-[#A3C6C4]"
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-[#354649] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-white border rounded-lg text-[#354649] placeholder-[#6C7A89]/50 focus:outline-none transition-all ${
                errors.email ? "border-red-500 focus:border-red-600" : "border-[#A3C6C4]/30 focus:border-[#A3C6C4]"
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-semibold text-[#354649] mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-[#A3C6C4]/30 rounded-lg text-[#354649] placeholder-[#6C7A89]/50 focus:border-[#A3C6C4] focus:outline-none transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-[#354649] mb-2">Service</label>
              <select
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#A3C6C4]/30 rounded-lg text-[#354649] focus:border-[#A3C6C4] focus:outline-none transition-all"
              >
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="video-editing">Video Editing</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold text-[#354649] mb-2">Budget</label>
              <select
                name="budget"
                value={formState.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#A3C6C4]/30 rounded-lg text-[#354649] focus:border-[#A3C6C4] focus:outline-none transition-all"
              >
                <option value="10k-25k">$10K - $25K</option>
                <option value="25k-50k">$25K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#354649] mb-2">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-[#354649] placeholder-[#6C7A89]/50 focus:outline-none transition-all resize-none ${
                errors.message ? "border-red-500 focus:border-red-600" : "border-[#A3C6C4]/30 focus:border-[#A3C6C4]"
              }`}
              placeholder="Tell us about your project, goals, and timeline..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#A3C6C4] to-[#6C7A89] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
