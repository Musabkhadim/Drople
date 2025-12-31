"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. Web development projects typically take 4-12 weeks, digital marketing campaigns 2-4 weeks, and video editing 1-3 weeks. We provide detailed timelines after consultation.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide comprehensive maintenance and support packages after project delivery. This includes bug fixes, updates, security monitoring, and performance optimization.",
  },
  {
    question: "What are your pricing options?",
    answer:
      "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer packages. We'll customize a pricing structure that fits your budget and project needs.",
  },
  {
    question: "Can you help improve existing projects?",
    answer:
      "Absolutely. We specialize in auditing, optimizing, and enhancing existing websites, marketing campaigns, and video content. We can identify improvement opportunities and implement solutions.",
  },
  {
    question: "Are SEO services included?",
    answer:
      "SEO optimization is integrated into our web development services. All projects are built with SEO best practices, and we offer dedicated digital marketing services for advanced SEO strategies.",
  },
  {
    question: "How do we get started?",
    answer:
      "Getting started is simple. Complete our onboarding form or schedule a free 30-minute consultation call. We'll discuss your goals, provide a proposal, and outline the next steps.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="pill-badge bg-[#A3C6C4]/10 text-[#354649] border border-[#A3C6C4]/30">
              Have Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#354649] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and process.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-[#A3C6C4]/30 bg-white text-[#354649] placeholder-[#6C7A89]/50 focus:border-[#A3C6C4] focus:outline-none transition-all"
            />
            <HelpCircle size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C7A89]" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 hover:border-[#A3C6C4]/40 transition-all duration-300 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-[#354649] text-lg group-hover:text-[#A3C6C4] transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#A3C6C4] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-[#A3C6C4]/10 text-[#6C7A89] animate-fade-in-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#6C7A89]">No FAQs match your search. Please try different keywords.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6C7A89] mb-4">Didn't find what you're looking for?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#A3C6C4] to-[#6C7A89] text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}
