"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Email */}
      <div className="glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 bg-[#777C6D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail size={20} className="text-white" />
          </div>
          <p className="font-semibold text-[#777C6D]">Email</p>
        </div>
        <p className="text-[#777C6D] ml-14">hello@drople.com</p>
      </div>

      {/* Phone */}
      <div className="glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 bg-[#777C6D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone size={20} className="text-white" />
          </div>
          <p className="font-semibold text-[#777C6D]">Phone</p>
        </div>
        <p className="text-[#777C6D] ml-14">+1 (555) 123-4567</p>
      </div>

      {/* Address */}
      <div className="glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 bg-[#777C6D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <MapPin size={20} className="text-white" />
          </div>
          <p className="font-semibold text-[#777C6D]">Address</p>
        </div>
        <p className="text-[#777C6D] ml-14">123 Digital Street, Tech City, TC 12345</p>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-[#777C6D]">Follow Us</p>
        <div className="flex gap-4">
          {[
            { Icon: Facebook, label: "Facebook" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Instagram, label: "Instagram" },
          ].map((social, index) => (
            <button
              key={index}
              className="w-10 h-10 bg-[#777C6D] rounded-full flex items-center justify-center text-white hover:bg-[#B7B89F] hover:text-[#777C6D] transition-all duration-300 transform hover:scale-110"
              title={social.label}
            >
              <social.Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
