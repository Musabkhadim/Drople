"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import { 
  Code, 
  Database, 
  Zap, 
  Lock, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2,
  Globe, 
  ShoppingCart, 
  Layers, 
  Palette, 
  Cpu, 
  Cloud, 
  Bug, 
  Shield,
  Users, 
  BarChart, 
  Rocket, 
  Clock, 
  Target, 
  MessageSquare,
  Wrench, 
  Heart, 
  Star, 
  Award, 
  TrendingUp,
  Play, 
  Pause, 
  Home, 
  Box, 
  Film, 
  Scissors, 
  Mic, 
  ExternalLink,
  ChevronRight, 
  Monitor, 
  Server,
  BarChart3, 
  Calendar,
  Building, 
  GraduationCap,
  CheckCircle,
  DollarSign
} from "lucide-react"
import ProcessTimeline from "@/components/process-timeline"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

// ========== TEKREVOL COLOR SCHEME ==========
const COLORS = {
  primary: "#1D4059",      // Dark Blue - Headings
  secondary: "#3A7CA5",    // Medium Blue - Accents
  accent: "#F2B705",       // Gold/Yellow - Highlights
  textLight: "#6B8BA4",    // Light Blue - Paragraphs
  white: "#FFFFFF",
  grayBg: "#F8FAFC",
  borderLight: "#1D4059/10",
  borderHover: "#3A7CA5",
  gradient: "linear-gradient(135deg, #1D4059 0%, #3A7CA5 100%)",
  gradientHover: "linear-gradient(135deg, #3A7CA5 0%, #1D4059 100%)"
}

// ========== WEB DEVELOPMENT CARDS DATA ==========
const webDevCards = [
  {
    id: 1,
    title: "E-commerce Platform",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    color: "linear-gradient(145deg, #0f172a, #1e293b, #334155)",
    textColor: "#ffffff",
    accentColor: "#F2B705",
    category: "E-commerce",
    duration: "3:45",
    views: "5.2K",
    likes: "1.2K",
    description: "Full-featured online store with payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    icon: ShoppingCart
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    color: "linear-gradient(45deg, #7c3aed 0%, #a78bfa 100%)",
    textColor: "#ffffff",
    accentColor: "#c4b5fd",
    category: "SaaS",
    duration: "4:15",
    views: "6.7K",
    likes: "1.5K",
    description: "Analytics dashboard for SaaS products",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    icon: BarChart3
  },
]

// ========== SERVICES ==========
const services = [
  { icon: Palette, title: "UI/UX Web Design", desc: "Pixel-perfect designs with Figma & Adobe Creative Cloud for maximum engagement" },
  { icon: Code, title: "Frontend Development", desc: "SEO-friendly, lightning-fast interfaces with React.js & Next.js" },
  { icon: Database, title: "Backend Development", desc: "Scalable server solutions with Node.js, Python, and secure APIs" },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end solutions with dynamic capabilities across all channels" },
  { icon: Cpu, title: "No/Low Code Development", desc: "Quick deployment with Appian & OutSystems without compromising functionality" },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Custom stores with Shopify, WooCommerce & Magento for shopping experiences" }

]

// ========== DEVELOPMENT PROCESS ==========
const process = [
  { step: "01", title: "Discovery & Planning", desc: "Evaluate project scope and set objectives with expert consultation", icon: Target },
  { step: "02", title: "UI/UX Design", desc: "Create appealing, intuitive interface with our UI/UX experts", icon: Palette },
  { step: "03", title: "Development", desc: "Code to add functionality and backend features with pro developers", icon: Code },
  { step: "04", title: "Testing & QA", desc: "Test, debug, and repeat until it's launch-ready", icon: Bug },
  { step: "05", title: "Launch & Maintain", desc: "Go live and reach users. Adapt as you go", icon: Rocket },
]

// ========== TECHNOLOGY STACK ==========
const technologies = [
  {
    category: "Frontend Technologies",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Backend Technologies",
    items: ["Node.js", "Python", "PHP", "Java", ".NET"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
]

// ========== STATS ==========
const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "09+", label: "Expert Developers" },
]

// ========== CAPABILITIES ==========
const capabilities = [
  { icon: "⚡", title: "High Performance", desc: "Optimized for speed and scalability" },
  { icon: "🔒", title: "Security First", desc: "Enterprise-grade security protocols" },
  { icon: "📱", title: "Responsive Design", desc: "Flawless experience on all devices" },
  { icon: "🚀", title: "Rapid Development", desc: "Agile methodology for faster delivery" },
  { icon: "🔄", title: "Continuous Updates", desc: "Regular maintenance and improvements" },
  { icon: "📊", title: "Analytics Integration", desc: "Data-driven insights and reporting" },
]

// ========== WEB DEV PROJECTS DATA ==========
const webDevProjects = [
   {
  id: 1,
  title: "Travel & Tourism Website",
  image: "/bmgulf.png",
  stats: "+60% Online Inquiries",
  technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "SEO Tools"],
  description: "A modern travel and tourism website designed to showcase tour packages, destinations, and services with a fast and user-friendly experience.",
  features: [
    "Tour & Holiday Packages",
    "Destination Pages",
    "Inquiry & Booking Forms",
    "Responsive Design",
    "SEO Optimized Pages",
    "Fast Loading Performance"
  ],
  duration: "2 months",
  teamSize: "3 developers",
  client: "BMGulf Travel & Tourism",
  results: "Improved online visibility and increased customer inquiries",
  liveLink: "https://www.bmgulftravel.com/"
},

  {
  id: 2,
  title: "High-Authority Do-Follow Backlink",
  image: "/cricaismus.png",
  stats: "High Domain Authority Website",
  technologies: ["SEO", "Link Building", "Content Placement", "Anchor Optimization"],
  description: "Provided high-quality do-follow backlinks from a niche-relevant cricket website to improve domain authority, keyword rankings, and organic search visibility.",
  features: [
    "Do-Follow Backlinks",
    "Niche-Relevant Website",
    "Contextual Link Placement",
    "SEO-Friendly Anchor Text",
    "Permanent Links",
    "Google-Safe Link Building"
  ],
  duration: "Ongoing SEO Campaign",
  teamSize: "SEO Specialist",
  client: "Multiple SEO Clients",
  results: "Improved keyword rankings and increased organic traffic",
  liveLink: "https://www.cricaismus.com/"
},

{
  id: 3,
  title: "Future IT Technology web application",
  image: "/fit.png",
  stats: "4.8★ Rating",
  technologies: ["React Native", "Firebase", "Redux", "GraphQL", "Expo", "Push Notifications"],
  description: "Cross-platform mobile app designed for health & fitness enthusiasts, featuring offline capabilities, social login, and push notifications for maximum user engagement.",
  features: ["Offline Mode Support", "Push Notifications & Alerts", "Social Login Integration", "In-app Purchases", "Dark Mode UI", "Multi-language Support"],
  duration: "4 months",
  teamSize: "3 developers",
  client: "Future IT Technology",
  results: "Achieved 4.8★ rating with 10K+ downloads across Android & iOS",
  liveLink: "https://futureittechnology.com/"
},

 {
  id: 4,
  title: "Altawam Laptops E-Commerce Platform",
  image: "/altawam.png",
  
  technologies: ["vite", , "firebase",  "WebSocket", "Redis"],
  description: "Full-featured e-commerce platform for laptops and electronics, with secure checkout, real-time inventory updates, and product management dashboard. SEO-optimized to increase online sales and visibility.",
  features: ["Product Listings", "Virtual Product Tours", "Admin & Vendor Dashboard", "Secure Booking & Checkout System", "Document & Invoice Management", "Live Chat Support"],
  duration: "6 months",
  teamSize: "5 developers",
  client: "Altawam Laptops",
  results: "Successfully launched 200+ products with seamless online shopping experience",
  liveLink: "https://www.altawamlaptops.com/"
},

  {
    id: 5,
    title: "Food Delivery App",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    stats: "50K+ Orders",
    technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps", "Socket.io", "Payment Gateway"],
    description: "Food delivery application with real-time tracking and multiple restaurant integration.",
    features: ["Restaurant Listings", "Real-time Tracking", "Order History", "Reviews", "Multiple Payment Options", "Promotions"],
    duration: "4 months",
    teamSize: "4 developers",
    client: "Food Delivery Startup",
    results: "Processed 50K+ orders in 6 months",
    liveLink: "https://example-foodapp.com"
  },
  {
    id: 6,
    title: "Learning Management System",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    stats: "5K+ Students",
    technologies: ["Angular", "Python Django", "PostgreSQL", "AWS S3", "Video Streaming", "Zoom API"],
    description: "Online learning platform with video courses, quizzes, and certification.",
    features: ["Video Courses", "Quizzes", "Progress Tracking", "Certificates", "Discussion Forum", "Live Classes"],
    duration: "7 months",
    teamSize: "8 developers",
    client: "Education Institute",
    results: "5,000+ students enrolled in first 3 months",
    liveLink: "https://example-lms.com"
  }
]

// ========== PROJECT CARD COMPONENT ==========
function ProjectCard({ project, type }: { project: any, type: 'web' | 'marketing' }) {
  const Icon = type === 'web' ? Code : TrendingUp
  
  const handleCardClick = (e: React.MouseEvent) => {
    if (project.liveLink) {
      e.preventDefault()
      window.open(project.liveLink, '_blank', 'noopener,noreferrer')
    }
  }
  
  return (
    <div className="group h-full transform-gpu" onClick={handleCardClick}>
      <div className="relative h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1E425B]/20 hover:border-[#1E425B]/40 active:scale-[0.98] cursor-pointer transform-gpu hover:-translate-y-1">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu" 
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E425B] via-[#1E425B]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        {/* Live Link Indicator */}
        {project.liveLink && (
          <div className="absolute top-2 right-2 transform-gpu">
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/20 backdrop-blur-md text-green-500 text-xs font-medium border border-green-500/30 flex items-center gap-1 shadow-lg">
              <Globe className="w-2 h-2" />
              Live
            </span>
          </div>
        )}
        
        {/* Technologies Badges */}
        <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-1">
          {project.technologies.slice(0, 2).map((tech: string, i: number) => (
            <span 
              key={i}
              className="px-2 py-1 rounded-full bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/30 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/30 shadow-sm">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform-gpu">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <h3 className="text-sm sm:text-base font-bold truncate bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {project.title}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-1 sm:gap-1.5 mb-2">
            <div className="flex items-center gap-1 text-xs">
              <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              <span className="truncate">{project.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              <span className="truncate">{project.teamSize}</span>
            </div>
          </div>
          
          <p className="text-xs text-white/80 mb-2 sm:mb-2.5 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs px-2 py-1 rounded bg-gradient-to-r from-[#1E425B]/40 to-[#2A5A7B]/30 border border-[#1E425B]/50 truncate max-w-[60%] backdrop-blur-sm">
              {project.stats}
            </span>
            <div className="text-xs flex items-center gap-1 text-white/70 hover:text-white transition-colors flex-shrink-0 group-hover:translate-x-1 transition-transform">
              <span>View {project.liveLink ? 'Live' : 'Details'}</span>
              <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform-gpu">
          <div className="h-full flex flex-col justify-between p-4">
            <div>    
              <h4 className="text-white text-lg font-bold mb-4">
                Project Details
              </h4>
              
              <div className="mb-3">
                <h5 className="text-white text-sm font-semibold mb-1">Client:</h5>
                <p className="text-white/90 text-sm">{project.client}</p>
              </div>
              
              <div className="mb-3">
                <h5 className="text-white text-sm font-semibold mb-1">Results:</h5>
                <p className="text-white/90 text-sm">{project.results}</p>
              </div>
              
              <div className="mb-4">
                <h5 className="text-white text-sm font-semibold mb-2">Features:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 3).map((feature: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs backdrop-blur-sm border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <button className="w-full py-3 rounded-lg bg-white text-[#1E425B] text-sm font-bold hover:bg-white/90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                {type !== 'marketing' && project.liveLink ? (
                  <>
                    <Globe className="w-4 h-4" />
                    <span>Visit Live Website</span>
                  </>
                ) : (
                  'View Full Case Study'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ========== DEBOUNCE UTILITY ==========
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// ========== MAIN COMPONENT ==========
export default function WebDevelopmentPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [focusedCard, setFocusedCard] = useState<number | null>(null)
  const [scrolling, setScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [activeSection, setActiveSection] = useState("web")
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // ========== EFFECTS ==========
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    
    checkDevice()
    const debouncedResize = debounce(checkDevice, 100)
    window.addEventListener('resize', debouncedResize)
    
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])

  // Intersection Observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Scroll handling
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    
    const handleScroll = () => {
      setScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setScrolling(false), 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  // ========== VIDEO HANDLERS ==========
  const handleVideoClick = useCallback((index: number) => {
    if (playingVideo === index) {
      const video = videoRefs.current[index]
      if (video) {
        video.pause()
        setPlayingVideo(null)
      }
    } else {
      if (playingVideo !== null) {
        const prevVideo = videoRefs.current[playingVideo]
        if (prevVideo) {
          prevVideo.pause()
          prevVideo.currentTime = 0
        }
      }
      
      setPlayingVideo(index)
      setFocusedCard(index)
      
      setTimeout(() => {
        const video = videoRefs.current[index]
        if (video) {
          video.play().catch(e => console.log("Video play error:", e))
        }
      }, 100)
    }
  }, [playingVideo])

  const handleVideoEnded = useCallback((index: number) => {
    setPlayingVideo(null)
    const video = videoRefs.current[index]
    if (video) video.currentTime = 0
  }, [])

  // ========== CARD POSITIONING FUNCTIONS ==========
  const getCardTransform = useCallback((index: number, isFocused: boolean) => {
    if (isMobile) {
      if (isFocused) return "translateY(0px) scale(1) translateZ(50px) rotateX(0deg)"
      const offset = (index - (focusedCard || 0)) * 12
      const rotate = (index - (focusedCard || 0)) * 0.5
      return `translateY(${offset}px) scale(0.92) translateZ(0px) rotateX(${rotate}deg)`
    }

    if (isTablet) {
      const centerIndex = 2
      const positionFromCenter = index - centerIndex
      
      if (isFocused) return "translateX(0px) scale(1.08) translateZ(60px) rotateY(0deg)"
      
      const xOffset = positionFromCenter * 110
      const scale = 1 - Math.abs(positionFromCenter) * 0.03
      const rotateY = -positionFromCenter * 3
      return `translateX(${xOffset}px) scale(${scale}) translateZ(${Math.abs(positionFromCenter) * -10}px) rotateY(${rotateY}deg)`
    }

    // Desktop layout
    const centerIndex = 4
    const positionFromCenter = index - centerIndex
    
    if (isFocused) return "translateX(0px) scale(1.12) translateZ(80px) rotateY(0deg) rotateX(0deg)"
    
    const xOffset = positionFromCenter * 130
    const scale = 1 - Math.abs(positionFromCenter) * 0.04
    const rotateY = -positionFromCenter * 2
    const rotateX = Math.abs(positionFromCenter) * -0.5
    const zOffset = Math.abs(positionFromCenter) * -15
    
    return `translateX(${xOffset}px) scale(${scale}) translateZ(${zOffset}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
  }, [isMobile, isTablet, focusedCard])

  const getCardZIndex = useCallback((index: number, isFocused: boolean) => {
    if (isFocused) return 100
    if (isMobile) {
      const centerIndex = focusedCard || 0
      const distanceFromCenter = Math.abs(index - centerIndex)
      return 50 - distanceFromCenter * 2
    }
    const centerIndex = isTablet ? 2 : 4
    const distanceFromCenter = Math.abs(index - centerIndex)
    return 50 - distanceFromCenter * 3
  }, [isMobile, isTablet, focusedCard])

  // ========== RENDER VIDEO CARDS ==========
  const renderWebDevCards = useCallback(() => {
    const maxCards = isMobile ? 5 : isTablet ? 6 : webDevCards.length
    const cardsToRender = webDevCards.slice(0, maxCards)
    
    return cardsToRender.map((card, index) => {
      const isFocused = focusedCard === index
      const isPlaying = playingVideo === index
      const isVisible = visibleCards[index] ?? false
      const IconComponent = card.icon || Code
      
      return (
        <div
          key={card.id}
          data-index={index}
          onClick={() => handleVideoClick(index)}
          className={`absolute transition-all duration-500 ease-[cubic-bezier(0.2,0.85,0.3,1.05)] cursor-pointer transform-gpu ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${isMobile ? 'touch-pan-y' : ''}`}
          style={{
            transform: getCardTransform(index, isFocused),
            width: isMobile ? '240px' : isTablet ? '280px' : '300px',
            height: isMobile ? '300px' : isTablet ? '340px' : '360px',
            left: '50%',
            marginLeft: isMobile ? '-120px' : isTablet ? '-140px' : '-150px',
            transitionDelay: `${index * 30}ms`,
            willChange: 'transform',
            zIndex: getCardZIndex(index, isFocused),
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            top: isMobile ? `${index * 15}px` : '0',
            pointerEvents: 'auto',
            perspective: '1000px'
          }}
        >
          <div 
            className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl transition-all duration-500 group"
            style={{
              background: card.color,
              border: isFocused 
                ? `3px solid ${card.accentColor}`
                : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: isFocused 
                ? `0 30px 60px -20px rgba(0, 0, 0, 0.4),
                   0 15px 30px rgba(29, 64, 89, 0.3),
                   0 0 0 2px ${card.accentColor}50,
                   0 0 40px ${card.accentColor}30,
                   inset 0 4px 8px rgba(255, 255, 255, 0.08)`
                : `0 25px 50px -15px rgba(0, 0, 0, 0.25),
                   0 10px 20px rgba(29, 64, 89, 0.2),
                   0 0 0 1px rgba(255, 255, 255, 0.05),
                   inset 0 1px 2px rgba(255, 255, 255, 0.03)`,
              transform: 'translateZ(0)',
              filter: isFocused ? 'brightness(1.05)' : 'brightness(1)'
            }}
          >
            
            {/* 3D Border Effect */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-50 pointer-events-none" />
            
            {/* Video Container */}
            <div className="absolute inset-0 transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
              <video
                ref={(el) => { videoRefs.current[index] = el }}
                src={card.videoUrl}
                className="w-full h-full object-cover transform-gpu"
                muted
                loop={false}
                playsInline
                preload="metadata"
                onClick={(e) => {
                  e.stopPropagation()
                  handleVideoClick(index)
                }}
                onEnded={() => handleVideoEnded(index)}
                poster={card.thumbnail}
                style={{
                  transform: 'translateZ(1px)',
                  backfaceVisibility: 'hidden'
                }}
              />
              
              {/* Video Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-center transform-gpu"
                  style={{ transform: 'translateZ(2px)' }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#1D4059]/30 blur-lg transform-gpu" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-all duration-300 transform-gpu hover:rotate-12">
                      <Play className="w-5 h-5 text-white ml-0.5 drop-shadow-lg transform-gpu" fill="white" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Play/Pause Controls */}
              {isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent transform-gpu"
                  style={{ transform: 'translateZ(2px)' }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#1D4059]/70 to-[#3A7CA5]/70 blur-md transform-gpu" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 transform-gpu hover:scale-110 transition-transform">
                      <Pause className="w-4 h-4 text-white drop-shadow-lg" fill="white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Top Gradient */}
            <div 
              className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/15 via-white/5 to-transparent transform-gpu"
              style={{ transform: 'translateZ(1px)' }}
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3 transform-gpu" style={{ transform: 'translateZ(10px)' }}>
              <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/25 shadow-lg flex items-center gap-2">
                <IconComponent className="w-3 h-3" />
                {card.category}
              </span>
            </div>

            {/* Card Content */}
            <div 
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent transform-gpu"
              style={{ transform: 'translateZ(15px)' }}
            >
              <h3 className="text-base font-bold text-white mb-1.5 drop-shadow-lg truncate transform-gpu">
                {card.title}
              </h3>
              <div className="flex items-center justify-between transform-gpu">
                <div className="flex items-center gap-1.5 text-white/80">
                  {isPlaying ? (
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse shadow-lg" />
                      <span className="text-xs font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        Playing
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="text-xs flex items-center gap-1 truncate bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        <Play className="w-3 h-3 flex-shrink-0 text-white" />
                        {isMobile ? 'Tap to play' : 'Click to play'}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-white/80 to-white/60 flex-shrink-0" />
                      <span className="text-xs truncate bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {card.technologies[0]}
                      </span>
                    </>
                  )}
                </div>
                
                {/* Duration */}
                <div className="flex items-center gap-1.5 text-white/70 text-xs transform-gpu">
                  <Clock className="w-3 h-3" />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {card.duration}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            {isPlaying && (
              <div 
                className="absolute bottom-16 left-4 right-4 transform-gpu"
                style={{ transform: 'translateZ(20px)' }}
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-white/10 to-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-[#1D4059] via-[#3A7CA5] to-[#F2B705] animate-progress shadow-lg"
                    style={{
                      animationDuration: card.duration.replace(':', 'm') + 's',
                      boxShadow: `0 0 10px ${card.accentColor}30`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Glow Effect */}
          {isFocused && (
            <div 
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#1D4059]/20 via-[#3A7CA5]/15 to-transparent blur-xl opacity-70 pointer-events-none transition-all duration-500"
              style={{
                transform: 'translateZ(-10px)',
                animation: 'pulseGlow 2s ease-in-out infinite'
              }}
            />
          )}
          
          {/* Hover Effect */}
          {!isFocused && (
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          )}
        </div>
      )
    })
  }, [focusedCard, visibleCards, isMobile, isTablet, playingVideo, handleVideoClick, handleVideoEnded, getCardTransform, getCardZIndex])

  // ========== RENDER ==========
  return (
    <main className="relative">
      {/* Animated Background with all elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main background image with low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(/images/59127.jpg)",
          }}
        />
        
        {/* Animated Blobs/Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1D4059] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#3A7CA5]/60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#F2B705]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4059]/5 via-transparent to-[#3A7CA5]/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D4059]/10 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white/90 to-white/70 overflow-hidden min-h-screen">
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D4059]/5 via-transparent to-[#F2B705]/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="order-1 lg:order-1">
              <div className="max-w-xl">
                <div className="inline-block mb-6 animate-bounce">
                  <span className="pill-badge bg-[#1D4059]/10 text-[#1D4059] border border-[#1D4059]/30 font-semibold backdrop-blur-sm shadow-xl">
                    🌐 Web Development Services
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 leading-tight">
                  Build Powerful, Scalable Web Solutions
                </h1>

                <p className="text-lg text-[#1D4059]/80 mb-8 leading-relaxed">
                 We build modern, scalable web platforms and custom web applications with user-friendly UI/UX, secure architecture, and optimized performance. From startups to enterprises, our web development solutions help businesses grow faster and perform reliably at any scale.                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1D4059]" />
                    <span className="text-[#1D4059] font-medium">Custom Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1D4059]" />
                    <span className="text-[#1D4059] font-medium">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1D4059]" />
                    <span className="text-[#1D4059] font-medium">Expert Developers</span>
                  </div>
                </div>

                <Link href="#portfolio-section">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                    View Our Portfolio
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Video Showcase */}
            <div className="relative order-2 lg:order-2">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                {/* Video Container with gradient border */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1D4059]/40 transform perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#1D4059]/30 to-[#3A7CA5]/30 rounded-3xl blur-xl"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/20" style={{
                    background: "linear-gradient(180deg, #202939, #2b3a4a)",
                    borderImage: "linear-gradient(45deg, #1D4059, #3A7CA5) 1"
                  }}>
                <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"   // better than empty
  className="w-full h-[360px] object-cover"
>
  <source src="/webdev.mp4" type="video/mp4" />
</video>


                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/80 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                          Web Development Showcase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] animate-bounce opacity-80"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] animate-bounce opacity-80" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#1D4059]/20 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-[#1D4059]/20 rounded-lg animate-bounce" style={{ animationDuration: "3s" }}></div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3A7CA5]/60 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          
          {/* Additional gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Decorative header */}
            <div className="inline-flex items-center justify-center gap-4 mb-8 relative">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-lg opacity-70 rounded-full"></div>
                <Code className="text-white relative z-10" size={40} />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"></span>
                <span className="relative">WEB DEVELOPMENT</span>
              </span>
              <span className="block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80">Professional Services</span>
            </h2>
            
            <p className="text-xl text-[#1D4059]/80 max-w-3xl mx-auto leading-relaxed relative">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              const isHovered = hoveredIndex === idx
              
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative cursor-pointer perspective-1000 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Floating card container */}
                  <div className={`relative w-full h-full transform transition-all duration-700 ${
                    isHovered ? "translate-y-0 rotate-0" : "translate-y-6"
                  }`}>
                    {/* Main card with gradient */}
                    <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                      isHovered 
                        ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" 
                        : "shadow-lg shadow-gray-300/30"
                    }`} style={{
                      background: isHovered 
                        ? "linear-gradient(145deg, #ffffff, #f8fafc)" 
                        : "linear-gradient(135deg, #ffffff, #f0f4f8)"
                    }}>
                      
                      {/* Animated gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      {/* Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-1 h-1 bg-[#1D4059]/40 rounded-full animate-float"
                            style={{
                              left: `${10 + i * 20}%`,
                              top: `${20 + i * 15}%`,
                              animationDelay: `${i * 0.5}s`,
                              animationDuration: `${3 + i}s`
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 rounded-3xl blur-xl opacity-0 transition-opacity duration-700 ${
                        isHovered ? "opacity-70" : ""
                      }`}></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 mb-8 flex justify-center">
                        <div className="relative">
                          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-20 blur-md transition-all duration-700 ${
                            isHovered ? "scale-125" : "scale-100"
                          }`}></div>
                          
                          <IconComponent 
                            className={`transition-all duration-300 transform ${
                              isHovered ? "scale-110" : ""
                            }`}
                            size={36} 
                            color="#1D4059"
                          />
                          
                          {/* Floating dots */}
                          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] transition-all duration-700 ${
                            isHovered ? "opacity-100" : "opacity-0"
                          }`}></div>
                          <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] transition-all duration-700 ${
                            isHovered ? "opacity-100" : "opacity-0"
                          }`}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1">
                          {service.title}
                        </h3>
                        
                        <p className="text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-8">
                          {service.desc}
                        </p>
                        
                        {/* Hover indicator */}
                        <div className="flex justify-center">
                          <div className={`inline-flex items-center gap-2 text-[#1D4059] font-medium transition-all duration-500 ${
                            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                          }`}>
                            <span>Learn more</span>
                            <ChevronRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-4 right-4 w-12 h-12">
                        <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#1D4059]/30 rounded-tr-2xl transition-all duration-700 ${
                          isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""
                        }`}></div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 w-12 h-12">
                        <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#1D4059]/30 rounded-bl-2xl transition-all duration-700 ${
                          isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""
                        }`}></div>
                      </div>

                      {/* Bottom border animation */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent transition-all duration-1000 ${
                        isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"
                      }`}></div>
                    </div>
                    
                    {/* Shadow effect */}
                    <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-[#1D4059]/20 to-transparent blur-md rounded-3xl transition-all duration-700 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Web Development Portfolio Section */}
      {activeSection === "web" && (
        <section id="portfolio-section" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#F8FAFC]/30 to-white/70 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #1D4059 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              animation: scrolling ? 'none' : 'backgroundMove 20s linear infinite',
            }} />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-[#A3C6C4]/10 to-[#6C7A89]/5 backdrop-blur-sm"
                style={{
                  width: `${Math.random() * 15 + 10}px`,
                  height: `${Math.random() * 15 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float3D ${Math.random() * 25 + 15}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.3,
                  transformStyle: 'preserve-3d',
                  boxShadow: `0 0 20px rgba(163, 198, 196, 0.1)`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#1D4059] rounded-full"></div>
                <Code className="text-[#1D4059]" size={32} />
                <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#1D4059] rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D4059] mb-4">WEB DEVELOPMENT PORTFOLIO</h2>
              <p className="text-lg text-[#1D4059]/70 max-w-2xl mx-auto mb-8">
                Interactive 3D cards showcasing our best web development projects. Click to explore our work.
              </p>
            </div>
            
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
              {webDevProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-index={index}
                  className={`transition-all duration-400 ${
                    visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <ProjectCard project={project} type="web" />
                </div>
              ))}
            </div>
            
            {/* Controls Info */}
            <div className="text-center mt-6 sm:mt-8 px-4">
              <p className="text-[#1D4059]/70 text-xs sm:text-sm bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] bg-clip-text text-transparent">
                {isMobile ? 'Tap a card to view details' : 'Click a card to view project details'}
              </p>
              <p className="text-[#1D4059]/70 text-xs sm:text-sm mt-2">
                Each card represents a different web development project with unique technologies.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Our Capabilities Section */}
      <section className="relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/30 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3A7CA5]/60 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Decorative header */}
            <div className="inline-flex items-center justify-center gap-4 mb-8 relative">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-lg opacity-70 rounded-full"></div>
                <Zap className="text-white relative z-10" size={40} />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"></span>
                <span className="relative">OUR CAPABILITIES</span>
              </span>
              <span className="block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80">End-to-End Web Development</span>
            </h2>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {capabilities.map((cap, idx) => {
              const isHovered = hoveredIndex === idx
              
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative cursor-pointer perspective-1000 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Floating card container */}
                  <div className={`relative w-full h-full transform transition-all duration-700 ${
                    isHovered ? "translate-y-0 rotate-0" : "translate-y-6"
                  }`}>
                    {/* Main card with gradient */}
                    <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                      isHovered 
                        ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" 
                        : "shadow-lg shadow-gray-300/30"
                    }`} style={{
                      background: isHovered 
                        ? "linear-gradient(145deg, #ffffff, #f8fafc)" 
                        : "linear-gradient(135deg, #ffffff, #f0f4f8)"
                    }}>
                      
                      {/* Animated gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      {/* Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-1 h-1 bg-[#1D4059]/40 rounded-full animate-float"
                            style={{
                              left: `${10 + i * 20}%`,
                              top: `${20 + i * 15}%`,
                              animationDelay: `${i * 0.5}s`,
                              animationDuration: `${3 + i}s`
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 rounded-3xl blur-xl opacity-0 transition-opacity duration-700 ${
                        isHovered ? "opacity-70" : ""
                      }`}></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 mb-8 flex justify-center">
                        <div className="relative">
                          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-20 blur-md transition-all duration-700 ${
                            isHovered ? "scale-125" : "scale-100"
                          }`}></div>
                          
                          <div>
                            <span
                              className={`text-3xl transition-all duration-300 ${
                                isHovered ? "text-[#F2B705]" : "text-[#1D4059]"
                              }`}
                            >
                              {cap.icon}
                            </span>
                          </div>
                          
                          {/* Floating dots */}
                          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] transition-all duration-700 ${
                            isHovered ? "opacity-100 animate-pulse" : "opacity-0"
                          }`}></div>
                          <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] transition-all duration-700 ${
                            isHovered ? "opacity-100 animate-pulse delay-150" : "opacity-0"
                          }`}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1">
                          {cap.title}
                        </h3>
                        
                        <p className="text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-8">
                          {cap.desc}
                        </p>
                        
                        {/* Hover indicator */}
                        <div className="flex justify-center">
                          <div className={`inline-flex items-center gap-2 text-[#1D4059] font-medium transition-all duration-500 ${
                            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                          }`}>
                            <span>Learn more</span>
                            <ChevronRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-4 right-4 w-12 h-12">
                        <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#1D4059]/30 rounded-tr-2xl transition-all duration-700 ${
                          isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""
                        }`}></div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 w-12 h-12">
                        <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#1D4059]/30 rounded-bl-2xl transition-all duration-700 ${
                          isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""
                        }`}></div>
                      </div>

                      {/* Bottom border animation */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent transition-all duration-1000 ${
                        isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"
                      }`}></div>
                    </div>
                    
                    {/* Shadow effect */}
                    <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-[#1D4059]/20 to-transparent blur-md rounded-3xl transition-all duration-700 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <ProcessTimeline/>

      {/* Technology Stack */}
      <section className="relative py-24 bg-white overflow-hidden">
  {/* Background subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8] via-white to-[#f0f4f8]"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#224965] mb-4">
        Technology Stack
      </h2>
      <p className="text-lg md:text-xl text-[#6B8BA4] max-w-2xl mx-auto">
        Building cutting-edge digital solutions with the latest frontend, backend, and database technologies.
      </p>
    </div>

    {/* Centered 3-card layout */}
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
      {technologies.slice(0, 3).map((tech, idx) => (
        <div
          key={idx}
          className="flex-1 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 border border-gray-200 overflow-hidden"
        >
          {/* Card header */}
          <div className="bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] text-white p-6 text-center font-bold text-xl">
            {tech.category}
          </div>

          {/* Card content */}
          <div className="p-6 space-y-4">
            {tech.items.map((item, itemIdx) => (
              <div key={itemIdx} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#1D4059] rounded-full flex-shrink-0" />
                <span className="text-[#1D4059] font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Card footer hover effect */}
          <div className="h-2 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Stats */}
      <section className="relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#3A7CA5] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-10 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-[#1D4059]/30 text-center hover:border-[#3A7CA5] hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D4059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-6xl font-bold text-[#1D4059] mb-3 group-hover:scale-125 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <p className="text-[#6B8BA4] font-semibold text-lg">{stat.label}</p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1D4059]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <CTABanner />
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95) translateZ(-50px); opacity: 0; }
          to { transform: scale(1) translateZ(0); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(8px) rotate(2deg);
          }
          50% {
            transform: translateY(-25px) translateX(-8px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) translateX(-15px) rotate(1deg);
          }
        }
        
        @keyframes float3D {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) translateZ(10px) rotate(120deg);
          }
          66% {
            transform: translateY(-30px) translateX(-10px) translateZ(5px) rotate(240deg);
          }
        }
        
        @keyframes backgroundMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.7;
            transform: translateZ(-10px) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translateZ(-10px) scale(1.05);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.2,0.85,0.3,1.05) forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.2,0.85,0.3,1.05) forwards;
        }
        
        .animate-progress {
          animation: progress linear forwards;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .perspective-1500 {
          perspective: 1500px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .pill-badge {
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(29, 64, 89, 0.3);
        }
        
        /* Optimize animations for mobile */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .animate-fadeIn,
          .animate-scaleIn,
          .animate-pulse,
          .animate-ping,
          .animate-progress {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Touch-friendly styles */
        @media (max-width: 640px) {
          button, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
          
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          video {
            object-fit: cover;
          }
          
          .perspective-1000 {
            perspective: 800px;
          }
        }
        
        /* Extra small devices */
        @media (max-width: 360px) {
          .absolute {
            width: 220px !important;
            height: 280px !important;
            margin-left: -110px !important;
          }
        }
        
        /* Landscape mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .min-h-screen {
            min-height: auto;
          }
          
          .flex.justify-center.items-center {
            min-height: 320px !important;
          }
        }
        
        /* Smooth scrolling */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  )
}