"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A3C6C4] rounded-full mix-blend-multiply filter blur-3xl animate-morph"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block mb-4">
              <span className="pill-badge bg-[#A3C6C4]/10 text-[#354649] border border-[#A3C6C4]/30">Contact Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#354649] mb-6">Let's Start Something Amazing</h1>

            <p className="text-xl text-[#6C7A89]">
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 transition-all duration-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#A3C6C4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#354649] mb-1">Email</h3>
                    <a href="mailto:hello@drople.com" className="text-[#6C7A89] hover:text-[#A3C6C4] transition-colors">
                      hello@drople.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 transition-all duration-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#A3C6C4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#354649] mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-[#6C7A89] hover:text-[#A3C6C4] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 transition-all duration-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#A3C6C4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#354649] mb-1">Location</h3>
                    <p className="text-[#6C7A89]">
                      San Francisco, CA
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 transition-all duration-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <h3 className="font-semibold text-[#354649] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center hover:bg-[#A3C6C4]/40 transition-colors"
                  >
                    <Linkedin size={18} className="text-[#A3C6C4]" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center hover:bg-[#A3C6C4]/40 transition-colors"
                  >
                    <Twitter size={18} className="text-[#A3C6C4]" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#A3C6C4]/20 flex items-center justify-center hover:bg-[#A3C6C4]/40 transition-colors"
                  >
                    <Instagram size={18} className="text-[#A3C6C4]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
      <Footer/>
    </main>
  )
}
