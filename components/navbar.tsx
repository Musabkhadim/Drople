"use client"

import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    setScrolled(currentScrollY > 20)
    setHidden(currentScrollY > lastScrollY.current && currentScrollY > 80)
    
    lastScrollY.current = currentScrollY
    ticking.current = false
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll)
        ticking.current = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [handleScroll])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ]

  const services = [
    {
      title: "Video Editing",
      description: "Professional video production",
      href: "/services/video-editing",
      icon: "🎬",
    },
    {
      title: "Web Development",
      description: "Custom websites & scalable applications",
      href: "/services/web-development",
      icon: "💻",
    },
    {
      title: "Digital Marketing",
      description: "SEO, ads & content strategy",
      href: "/services/digital-marketing",
      icon: "📊",
    },
  ]

  const toggleDropdown = useCallback(() => setDropdownOpen(prev => !prev), [])
  const closeDropdown = useCallback(() => setDropdownOpen(false), [])
  const openDropdown = useCallback(() => setDropdownOpen(true), [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-200 will-change-transform ${
      hidden ? "-translate-y-full" : "translate-y-0"
    } ${scrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-200 rounded-full ${
            scrolled
              ? "glassmorphic px-4 sm:px-6 py-3 shadow-lg border border-[#1B3C53]/20"
              : "px-4 sm:px-6 py-4 hover:glassmorphic hover:shadow-sm"
          }`}
        >
         <Link href="/" className="flex items-center flex-shrink-0 group">
          <img
         src="/logo.png"
          alt="Logo"
    
          className="w-6 h-6 md:w-12 md:h-12 object-contain"
    
  />

  <span
    className={`font-bold text-[#1B3C53] hidden sm:inline transition-all duration-200 ${
      scrolled ? "text-lg" : "text-xl"
    }`}
  >
    DROPLE
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-5">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                        activeLink === link.href ? "text-white bg-[#234C6A]" : "text-[#1B3C53] hover:bg-[#234C6A]/20"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Services Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    ref={triggerRef}
                    onClick={toggleDropdown}
                    onMouseEnter={openDropdown}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-150 ${
                      dropdownOpen 
                        ? "text-white bg-[#234C6A] shadow-md" 
                        : "text-[#1B3C53] hover:bg-[#234C6A]/10"
                    }`}
                  >
                    Services
                    <ChevronDown 
                      className={`w-3 h-3 ml-1 transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`} 
                    />
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-2 backdrop-blur-xl rounded-xl shadow-lg border border-[#234C6A]/20 
                    transition-all duration-150 transform z-50 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-3 glass-card min-w-[200px]">
                      <div className="flex flex-col space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeDropdown}
                            className="px-3 py-2 text-sm text-[#1B3C53] hover:text-white hover:bg-[#234C6A] rounded-lg transition-all duration-150 flex items-center justify-between group"
                          >
                            <span>{service.title}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div className="absolute -top-1 left-4 w-2 h-2 bg-white border-l border-t border-[#234C6A]/20 transform rotate-45" />
                  </div>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden sm:flex md:items-center gap-3">
            <Link
              href="/get-started"
              className="px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1B3C53] hover:text-[#234C6A] transition-colors duration-150"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 sm:p-5 glass-card backdrop-blur-xl rounded-3xl border border-[#234C6A]/20 space-y-2 sm:space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 sm:py-2.5 text-[#1B3C53] hover:text-white hover:bg-[#234C6A]/30 font-medium rounded-lg transition-all duration-150 text-sm sm:text-base"
                onClick={() => {
                  setActiveLink(link.href)
                  setIsOpen(false)
                }}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-[#234C6A]/20 pt-3 mt-3">
              <div className="px-4 py-2.5 font-semibold text-[#1B3C53] mb-2 text-sm sm:text-base">Services</div>
              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-[#1B3C53] hover:text-white hover:bg-gradient-to-r from-[#234C6A]/20 to-[#1B3C53]/20 rounded-xl transition-all duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{service.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{service.title}</div>
                      <div className="text-xs text-[#234C6A]/70 truncate">{service.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sm:hidden pt-3 mt-3 border-t border-[#234C6A]/20">
              <Link
                href="/get-started"
                className="block px-6 py-3 rounded-full bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold text-center transition-all duration-150 hover:shadow-md text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}