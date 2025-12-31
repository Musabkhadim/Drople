"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { CheckCircle2, ArrowRight, TrendingUp, Globe, Target, BarChart, Users, MessageSquare, Search, PenTool, DollarSign, ChartBar, Clock, ExternalLink, Code } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

// Services Data
const services = [
  {
    icon: "🔍",
    title: "SEO Optimization",
    items: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    iconColor: "#1D4059"
  },
  {
    icon: "📱",
    title: "Social Media",
    items: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
    iconColor: "#1D4059"
  },
  {
    icon: "📝",
    title: "Content Marketing",
    items: ["Blog Writing", "Video Content", "Infographics", "Email Campaigns"],
    iconColor: "#1D4059"
  },
  { 
    icon: "💰", 
    title: "PPC Campaigns", 
    items: ["Google Ads", "Facebook Ads", "Campaign Management", "ROI Tracking"],
    iconColor: "#1D4059"
  },
]

// Results Data
const results = [
  { stat: "250%", label: "Average Traffic Increase", color: "#1D4059" },
  { stat: "180%", label: "ROI Improvement", color: "#1D4059" },
  { stat: "95%", label: "Client Satisfaction", color: "#1D4059" },
]

// Process Data
const process = [
  { step: "01", title: "Research", desc: "Analyze your market and competitors", icon: Search },
  { step: "02", title: "Strategy", desc: "Develop a customized marketing plan", icon: Target },
  { step: "03", title: "Execute", desc: "Implement campaigns across channels", icon: PenTool },
  { step: "04", title: "Optimize", desc: "Monitor and improve performance", icon: ChartBar },
]

// Digital Marketing Projects Data - MUST BE DEFINED
const digitalMarketingProjects = [
 {
    id: 1,
    title: "SEO Campaign",
    image: "/seo.png",
    stats: "5M+ Impressions",
    technologies: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building", "Local SEO", "Analytics"],
    description: "Comprehensive SEO strategy resulting in 300% increase in organic traffic over 6 months.",
    features: ["Keyword Optimization", "Backlink Building", "Content Creation", "Performance Tracking", "Competitor Analysis", "Reporting"],
    duration: "6 months",
    teamSize: "3 specialists",
    client: "E-commerce Store",
    results: "300% increase in organic traffic",
    
  },
  {
    id: 2,
    title: "Social Media Campaign",
    image: "/socialmedia.jpg",
    stats: "+180% Engagement",
    technologies: ["Content Creation", "Community Management", "Paid Advertising", "Analytics", "Influencer Marketing", "Social Listening"],
    description: "Social media campaign that increased brand engagement and follower growth by 180%.",
    features: ["Content Calendar", "Paid Ads", "Influencer Collaboration", "Engagement Tracking", "Hashtag Strategy", "Community Building"],
    duration: "4 months",
    teamSize: "4 specialists",
    client: "Beauty Brand",
    results: "180% increase in engagement rate",
    
  },
  {
    id: 3,
    title: "Brand Awareness",
    image: "/brand.jpg",
    stats: "50M+ Reach",
    technologies: ["Influencer Marketing", "PR Campaigns", "Content Marketing", "Brand Partnerships", "Event Marketing", "Media Buying"],
    description: "Multi-channel brand awareness campaign reaching over 50 million potential customers.",
    features: ["Media Planning", "Influencer Outreach", "PR Distribution", "Content Creation", "Event Management", "Performance Analysis"],
    duration: "8 months",
    teamSize: "6 specialists",
    client: "Tech Company",
    results: "50M+ potential customers reached",
    
  },
  {
    id: 4,
    title: "Email Marketing",
    image: "/email.jpg",
    stats: "40% Open Rate",
    technologies: ["Email Automation", "Segmentation", "A/B Testing", "CRM Integration", "Analytics", "Personalization"],
    description: "Targeted email marketing campaign with personalized content and automation.",
    features: ["Automation Workflows", "Segmentation", "Personalization", "A/B Testing", "Analytics Dashboard", "CRM Sync"],
    duration: "3 months",
    teamSize: "2 specialists",
    client: "SaaS Company",
    results: "40% open rate and 15% CTR",
    
  },
  {
    id: 5,
    title: "PPC Advertising",
    image: "/ppc.png",
    stats: "ROI: 450%",
    technologies: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Conversion Tracking", "Remarketing", "Budget Optimization"],
    description: "Pay-per-click campaign focused on lead generation and conversion optimization.",
    features: ["Keyword Research", "Ad Creation", "Landing Pages", "Conversion Tracking", "Remarketing", "Performance Reports"],
    duration: "5 months",
    teamSize: "3 specialists",
    client: "B2B Service Provider",
    results: "450% ROI on ad spend",
    
  },
  {
    id: 6,
    title: "Content Marketing",
    image: "/content.png",
    stats: "10K+ Leads",
    technologies: ["Blog Writing", "Video Content", "Infographics", "Case Studies", "Whitepapers", "Content Distribution"],
    description: "Content marketing strategy establishing thought leadership and generating qualified leads.",
    features: ["Content Calendar", "SEO Optimization", "Content Creation", "Distribution Strategy", "Lead Magnets", "Analytics"],
    duration: "9 months",
    teamSize: "4 specialists",
    client: "Consulting Firm",
    results: "10,000+ qualified leads generated",
   
  }
]
// Capabilities Data
const capabilities = [
  { icon: "📈", title: "Data-Driven", desc: "Actionable insights from analytics", color: "#1D4059" },
  { icon: "🎯", title: "Targeted Approach", desc: "Precision targeting for better results", color: "#1D4059" },
  { icon: "📊", title: "ROI Focused", desc: "Measurable results and clear reporting", color: "#1D4059" },
  { icon: "🔄", title: "Continuous Optimization", desc: "Regular adjustments for peak performance", color: "#1D4059" },
  { icon: "🌟", title: "Brand Building", desc: "Strong brand identity and awareness", color: "#1D4059" },
  { icon: "💡", title: "Creative Solutions", desc: "Innovative strategies that stand out", color: "#1D4059" },
]

// ProjectCard Component
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

export default function DigitalMarketingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrolling, setScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  
  // Fix: Use boolean array instead of number array for visible cards
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    // Initialize visible cards array
    setVisibleCards(new Array(digitalMarketingProjects.length).fill(false))
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

  // Intersection Observer for cards animation - FIXED VERSION
  useEffect(() => {
    if (!sectionRef.current) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const index = parseInt(target.dataset.index || '0')
            
            setVisibleCards(prev => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            
            // Unobserve after it becomes visible
            observer.unobserve(target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Get all cards with data-index attribute
    const cardElements = document.querySelectorAll('[data-index]')
    cardElements.forEach(card => observer.observe(card))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(/images/59127.jpg)",
          }}
        />
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1D4059] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#3A7CA5]/60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#C3D1B8]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4059]/5 via-transparent to-[#3A7CA5]/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D4059]/10 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white/90 to-white/70 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D4059]/5 via-transparent to-[#C3D1B8]/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`max-w-3xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block mb-6 animate-bounce">
              <span className="pill-badge bg-[#1D4059]/10 text-[#1D4059] border border-[#1D4059]/30 font-semibold backdrop-blur-sm shadow-xl">
                📊 Digital Marketing
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 leading-tight">
              Grow your online presence with data-driven strategies
            </h1>

            <p className="text-lg text-[#1D4059]/80 mb-8 leading-relaxed">
              From SEO to social media, we help you reach your target audience and achieve measurable results.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1D4059]" />
                <span className="text-[#1D4059] font-medium">Data-Driven</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1D4059]" />
                <span className="text-[#1D4059] font-medium">Measurable Results</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1D4059]" />
                <span className="text-[#1D4059] font-medium">Expert Strategies</span>
              </div>
            </div>

            <Link href="/get-started">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-lg">
                Schedule Audit
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
        
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#1D4059]/20 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-[#1D4059]/20 rounded-lg animate-bounce" style={{ animationDuration: "3s" }}></div>
      </section>

     {/* Services Grid Section - Compact Version */}
{/* Services Grid Section - Compact Version */}
<section className="relative py-16 bg-gradient-to-b from-white/70 to-[#F8FAFC]/30 overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#3A7CA5]/60 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-md opacity-70 rounded-full"></div>
          <TrendingUp className="text-white relative z-10" size={32} />
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
      </div>
      
      <h2 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-4 relative">
        <span className="relative inline-block">
          <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-lg rounded-lg"></span>
          <span className="relative">OUR MARKETING SERVICES</span>
        </span>
        <span className="block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80">
          Comprehensive Digital Solutions
        </span>
      </h2>
      
      <p className="text-xl text-[#1D4059]/80 max-w-2xl mx-auto leading-relaxed relative">
        Complete digital marketing solutions tailored to grow your online presence
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
      {services.map((service, idx) => {
        const isHovered = hoveredIndex === idx
        
        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative cursor-pointer perspective-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className={`relative w-full h-full transform transition-all duration-500 ${
              isHovered ? "translate-y-0 rotate-0" : "translate-y-4"
            }`}>
              <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-lg overflow-hidden transition-all duration-500 ${
                isHovered 
                  ? "shadow-xl shadow-[#1D4059]/20 ring-1 ring-[#1D4059]/20" 
                  : "shadow-md shadow-gray-300/20"
              }`} style={{
                background: isHovered 
                  ? "linear-gradient(145deg, #ffffff, #f8fafc)" 
                  : "linear-gradient(135deg, #ffffff, #f0f4f8)"
              }}>
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-[#1D4059]/30 rounded-full animate-float"
                      style={{
                        left: `${10 + i * 25}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className={`absolute -inset-3 bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 rounded-2xl blur-lg opacity-0 transition-opacity duration-500 ${
                  isHovered ? "opacity-60" : ""
                }`}></div>
                
                <div className="relative z-10 mb-6 flex justify-center">
                  <div className="relative">
                    <div className={`absolute -inset-2 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-20 blur-sm transition-all duration-500 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}></div>
                    
                    <div>
                      <span
                        className={`text-4xl transition-all duration-300 ${
                          isHovered ? "scale-105" : ""
                        }`}
                        style={{ color: service.iconColor || "#1D4059" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    
                    <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] transition-all duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}></div>
                    <div className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] transition-all duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-400 group-hover:translate-y-0.5">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#1D4059]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#1D4059] flex-shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-center">
                    <div className={`inline-flex items-center gap-2 text-[#1D4059] font-medium transition-all duration-400 ${
                      isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    }`}>
                      <span>Get started</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-400 ${isHovered ? "translate-x-1" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-10 h-10">
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1D4059]/30 rounded-tr-xl transition-all duration-500 ${
                    isHovered ? "border-[#1D4059]/70 w-5 h-5" : ""
                  }`}></div>
                </div>
                
                <div className="absolute bottom-3 left-3 w-10 h-10">
                  <div className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1D4059]/30 rounded-bl-xl transition-all duration-500 ${
                    isHovered ? "border-[#1D4059]/70 w-5 h-5" : ""
                  }`}></div>
                </div>

                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent transition-all duration-700 ${
                  isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"
                }`}></div>
              </div>
              
              <div className={`absolute -bottom-2 left-3 right-3 h-6 bg-gradient-to-t from-[#1D4059]/15 to-transparent blur-sm rounded-2xl transition-all duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}></div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
</section>

      {/* Results Section */}
     

      {/* Capabilities Section */}
      <section className="relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3A7CA5]/60 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-4 mb-8 relative">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-lg opacity-70 rounded-full"></div>
                <Target className="text-white relative z-10" size={40} />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"></span>
                <span className="relative">OUR CAPABILITIES</span>
              </span>
              <span className="block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80">
                Data-Driven Marketing Excellence
              </span>
            </h2>
          </div>

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
                  <div className={`relative w-full h-full transform transition-all duration-700 ${
                    isHovered ? "translate-y-0 rotate-0" : "translate-y-6"
                  }`}>
                    <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                      isHovered 
                        ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" 
                        : "shadow-lg shadow-gray-300/30"
                    }`} style={{
                      background: isHovered 
                        ? "linear-gradient(145deg, #f6f3f3ff, #f8fafc)" 
                        : "linear-gradient(135deg, #f1efefff, #f0f4f8)"
                    }}>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
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
                      
                      <div className={`absolute -inset-4 bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 rounded-3xl blur-xl opacity-0 transition-opacity duration-700 ${
                        isHovered ? "opacity-70" : ""
                      }`}></div>
                      
                      <div className="relative z-10 mb-8 flex justify-center">
                        <div className="relative">
                          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-20 blur-md transition-all duration-700 ${
                            isHovered ? "scale-125" : "scale-100"
                          }`}></div>
                          
                          <div>
                            <span
                              className={`text-3xl transition-all duration-300 ${
                                isHovered ? "scale-110" : ""
                              }`}
                              style={{ color: cap.color || "#1D4059" }}
                            >
                              {cap.icon}
                            </span>
                          </div>
                          
                          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] transition-all duration-700 ${
                            isHovered ? "opacity-100 animate-pulse" : "opacity-0"
                          }`}></div>
                          <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] transition-all duration-700 ${
                            isHovered ? "opacity-100 animate-pulse delay-150" : "opacity-0"
                          }`}></div>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1">
                          {cap.title}
                        </h3>
                        
                        <p className="text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-8">
                          {cap.desc}
                        </p>
                        
                        <div className="flex justify-center">
                          <div className={`inline-flex items-center gap-2 text-[#1D4059] font-medium transition-all duration-500 ${
                            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                          }`}>
                            <span>Learn more</span>
                            <svg 
                              className={`w-5 h-5 transition-transform duration-500 ${isHovered ? "translate-x-2" : ""}`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>

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

                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent transition-all duration-1000 ${
                        isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"
                      }`}></div>
                    </div>
                    
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

      {/* Digital Marketing Projects Section - MAIN FIX */}
   <section ref={sectionRef} className="relative py-12 md:py-16 overflow-hidden">
  {/* Main Container with Curved Edges */}
  <div className="relative">
    {/* Top Curved Edge Design */}
    <div className="absolute top-0 left-0 right-0 h-8 md:h-12 overflow-hidden z-0">
      <div className="absolute -top-6 left-0 right-0 h-16 bg-gradient-to-b from-[#1D4059]/10 to-transparent rounded-b-[60px]"></div>
    </div>
    
    {/* Main Content Area with Rounded Corners */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="relative rounded-t-[40px] sm:rounded-t-[50px] lg:rounded-t-[60px] rounded-b-[40px] sm:rounded-b-[50px] lg:rounded-b-[60px] bg-gradient-to-b from-white via-white to-[#F8FAFC] p-8 md:p-12 lg:p-16 shadow-lg">
        
        {/* Top Inner Border */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/50 to-transparent rounded-full"></div>
        
        {/* Bottom Inner Border */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#3A7CA5]/50 to-transparent rounded-full"></div>
        
        {/* Corner Accents - Top Left */}
        <div className="absolute top-4 left-4 w-6 h-6">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1D4059]/30 rounded-tl-lg"></div>
        </div>
        
        {/* Corner Accents - Top Right */}
        <div className="absolute top-4 right-4 w-6 h-6">
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#1D4059]/30 rounded-tr-lg"></div>
        </div>
        
        {/* Corner Accents - Bottom Left */}
        <div className="absolute bottom-4 left-4 w-6 h-6">
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#3A7CA5]/30 rounded-bl-lg"></div>
        </div>
        
        {/* Corner Accents - Bottom Right */}
        <div className="absolute bottom-4 right-4 w-6 h-6">
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#3A7CA5]/30 rounded-br-lg"></div>
        </div>
        
        {/* Content */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
            <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-md opacity-70 rounded-full"></div>
              <TrendingUp className="text-white relative z-10" size={30} />
            </div>
            <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D4059] mb-4 relative">
            <span className="relative inline-block">
              <span className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-lg rounded-lg"></span>
              <span className="relative">DIGITAL MARKETING PROJECTS</span>
            </span>
            <span className="block mt-1 md:mt-2 text-lg md:text-xl lg:text-2xl font-medium text-[#1D4059]/80">
              Real Campaigns, Measurable Results
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-[#1D4059]/80 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful marketing campaigns that delivered exceptional ROI
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {digitalMarketingProjects.map((project, index) => {
            const isVisible = visibleCards[index] || false;
            
            return (
              <div
                key={project.id}
                data-index={index}
                className={`transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-6 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 80}ms`,
                  transitionProperty: 'opacity, transform',
                  willChange: 'opacity, transform'
                }}
              >
                <div className="relative transform-gpu group hover:-translate-y-1 transition-transform duration-300">
                  <ProjectCard project={project} type="marketing" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 mx-auto group shadow-md">
            <span><a href="/get-started">Get Started</a></span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
    
    {/* Bottom Curved Edge Design */}
    <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 overflow-hidden z-0">
      <div className="absolute -bottom-6 left-0 right-0 h-16 bg-gradient-to-t from-[#3A7CA5]/10 to-transparent rounded-t-[60px]"></div>
    </div>
    
    {/* Page Ending Line Design - Bottom Border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1D4059]/30 to-transparent"></div>
    
    {/* Decorative Elements at Ends */}
    <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 w-3 h-3 bg-[#1D4059]/40 rounded-full"></div>
    <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-3 h-3 bg-[#3A7CA5]/40 rounded-full"></div>
    
    {/* Side Border Lines - Left */}
    <div className="absolute left-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#1D4059]/20 to-transparent"></div>
    
    {/* Side Border Lines - Right */}
    <div className="absolute right-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#3A7CA5]/20 to-transparent"></div>
  </div>
</section>

      {/* Process Section */}
      <section className="relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4059]/5 via-transparent to-[#3A7CA5]/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-4 mb-8 relative">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-lg opacity-70 rounded-full"></div>
                <Users className="text-white relative z-10" size={40} />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"></span>
                <span className="relative">OUR MARKETING PROCESS</span>
              </span>
              <span className="block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80">
                Strategic Approach to Maximize ROI
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => {
              const IconComponent = item.icon
              const isHovered = hoveredIndex === idx
              
              return (
                <div 
                  key={idx} 
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1D4059] to-[#3A7CA5] text-white font-bold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1D4059] mb-3 group-hover:text-[#1D4059] transition-colors">{item.title}</h3>
                      <p className="text-sm text-[#1D4059]/80 group-hover:text-[#1D4059] transition-colors">{item.desc}</p>
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8">
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1D4059]/30 rounded-tr-xl"></div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 w-8 h-8">
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#1D4059]/30 rounded-bl-xl"></div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent w-0 group-hover:w-3/4 transition-all duration-500"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-[#F8FAFC]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1D4059 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: scrolling ? 'none' : 'backgroundMove 20s linear infinite',
          }} />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D4059]/10 via-transparent to-[#3A7CA5]/10"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#C3D1B8]/10 to-[#A3C6C4]/5 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 15 + 10}px`,
                height: `${Math.random() * 15 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float3D ${Math.random() * 25 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
                transformStyle: 'preserve-3d',
                boxShadow: `0 0 20px rgba(29, 64, 89, 0.1)`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-[#1D4059] rounded-full"></div>
              <BarChart className="text-[#1D4059]" size={24} />
              <div className="w-8 h-1 bg-gradient-to-l from-transparent to-[#1D4059] rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D4059] mb-3">RESULTS THAT MATTER</h2>
            <p className="text-base text-[#1D4059]/80 max-w-2xl mx-auto mb-6">
              Proven track record of delivering measurable growth and exceptional ROI for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl bg-white/70 backdrop-blur-md border-2 border-[#1D4059]/30 text-center hover:border-[#3A7CA5] hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D4059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-5xl font-bold text-[#1D4059] mb-2 group-hover:scale-110 transition-transform duration-500">
                    {result.stat}
                  </div>
                  <p className="text-[#1D4059]/80 font-semibold text-base">{result.label}</p>
                </div>

                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#1D4059]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.2,0.85,0.3,1.05) forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.2,0.85,0.3,1.05) forwards;
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
          .animate-float,
          .animate-float3D {
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
          
          .perspective-1000 {
            perspective: 800px;
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

// Debounce utility function
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