"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Play, Pause, X, Globe, BarChart, Users, Target, TrendingUp, Code, ChevronLeft, ChevronRight, ExternalLink, Clock, Eye, Heart, Share2, ChevronDown, Zap, CheckCircle, Volume2, VolumeX } from "lucide-react"

// Video Cards Data - ALL YOUTUBE VIDEOS WITH SOUND
const videoEditingCards = [
  {
    id: 1,
    title: "Reel & Short Video",
    videoUrl: "https://www.youtube.com/watch?v=7-DMYomzCrE",
    embedUrl: "https://www.youtube.com/embed/7-DMYomzCrE",
    color: "linear-gradient(135deg, #000000 0%, #0b0b0b 50%, #1a1a1a 100%)",
    category: "Documentary",
   
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/YIp3ZYo5hoU/hqdefault.jpg"
  },
  
  {
    id: 2,
    title: " Before After ",
    videoUrl: "https://www.youtube.com/watch?v=EKd4nsBlLSY",
    embedUrl: "https://www.youtube.com/embed/EKd4nsBlLSY",
    color: "linear-gradient(135deg, #bcd6ff 0%, #cfe4ff 50%, #e0eeff 100%)",
    category: "Commercial",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/EKd4nsBlLSY/hqdefault.jpg"
  },
  {
    id: 3,
    title: "Brand Story",
    videoUrl: "https://www.youtube.com/watch?v=DQ27fIwt8lo",
    embedUrl: "https://www.youtube.com/embed/DQ27fIwt8lo",
    color: "linear-gradient(135deg, #697586 0%, #59606a 50%, #4a5260 100%)",
    category: "Branding",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/DQ27fIwt8lo/hqdefault.jpg"
  },
  {
    id: 4,
    title: "Anime Video",
    videoUrl: "https://www.youtube.com/watch?v=wX1BBfRMfEY",
    embedUrl: "https://www.youtube.com/embed/wX1BBfRMfEY",
    color: "linear-gradient(135deg, #202939 0%, #2b3a4a 50%, #3a4a5b 100%)",
    category: "Business",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/wX1BBfRMfEY/hqdefault.jpg"
  },
 
  {
    id: 5,
    title: "Documentary video",
    videoUrl: "https://www.youtube.com/watch?v=LAJZBD14PX0",
    embedUrl: "https://www.youtube.com/embed/LAJZBD14PX0",
    color: "linear-gradient(135deg, #cdd5df 0%, #dfe6ed 50%, #f0f5ff 100%)",
    category: "Social Media",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/LAJZBD14PX0/hqdefault.jpg"
  },
  {
    id: 6,
    title: " Advertisement video",
    videoUrl: "https://www.youtube.com/watch?v=_-G8tyi3nr4",
    embedUrl: "https://www.youtube.com/embed/_-G8tyi3nr4",
    color: "linear-gradient(135deg, #4A5568 0%, #2D3748 50%, #1a202c 100%)",
    category: "Events",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/Jxax8vkUJ0Q/hqdefault.jpg"
  },
  {
    id: 7,
    title: "Youtube Content",
    videoUrl: "https://www.youtube.com/shorts/N_ze7bQykec",
    embedUrl: "https://www.youtube.com/embed/N_ze7bQykec",
    color: "linear-gradient(135deg, #805AD5 0%, #6B46C1 50%, #553C9A 100%)",
    category: "Training",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/N_ze7bQykec/hqdefault.jpg"
  },
  {
    id: 8,
    title: "VSL",
    videoUrl: "https://www.youtube.com/shorts/Pfol_fC2FmE",
    embedUrl: "https://www.youtube.com/embed/Pfol_fC2FmE",
    color: "linear-gradient(135deg, #F6AD55 0%, #ED8936 50%, #DD6B20 100%)",
    category: "Animation",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/Pfol_fC2FmE/hqdefault.jpg"
  },
  {
    id: 9,
    title: "Commercial Ad",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    color: "linear-gradient(135deg, #38B2AC 0%, #319795 50%, #2C7A7B 100%)",
    category: "Advertisement",
    description: "",
    technologies: [],
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"
  }
];

// Web Development Projects Data - ADDED BACK
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
    stats: "200+ Products",
    technologies: ["vite", "firebase", "WebSocket", "Redis"],
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
];

// Digital Marketing Projects Data - ADDED BACK
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
    image: "content.png",
    stats: "10K+ Leads",
    technologies: ["Blog Writing", "Video Content", "Infographics", "Case Studies", "Whitepapers", "Content Distribution"],
    description: "Content marketing strategy establishing thought leadership and generating qualified leads.",
    features: ["Content Calendar", "SEO Optimization", "Content Creation", "Distribution Strategy", "Lead Magnets", "Analytics"],
    duration: "9 months",
    teamSize: "4 specialists",
    client: "Consulting Firm",
    results: "10,000+ qualified leads generated",
  }
];

// The rest of your code remains exactly the same from here...
// [ALL THE REMAINING CODE STAYS EXACTLY AS YOU HAVE IT]
// Just make sure the webDevProjects and digitalMarketingProjects arrays are defined above
// before the PortfolioSections function

export default function PortfolioSections() {
  const [activeSection, setActiveSection] = useState("video")
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const [focusedCard, setFocusedCard] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrolling, setScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [videoMuted, setVideoMuted] = useState<boolean[]>(Array(videoEditingCards.length).fill(false))
  const [isHoveringVideo, setIsHoveringVideo] = useState<number | null>(null)
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])

  // Optimized resize handler
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    
    checkDevice()
    
    const debouncedResize = debounce(checkDevice, 100)
    window.addEventListener('resize', debouncedResize)
    
    return () => {
      window.removeEventListener('resize', debouncedResize)
    }
  }, [])

  // Intersection Observer for animations
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
  }, [activeSection])

  // Scroll handling
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    
    const handleScroll = () => {
      setScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setScrolling(false)
      }, 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  // Handle video play/pause with sound control (UPDATED)
  const handleVideoClick = useCallback((index: number) => {
    if (playingVideo === index) {
      // If clicking the same video, pause it
      setPlayingVideo(null)
      setFocusedCard(null)
      const iframe = iframeRefs.current[index]
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      }
    } else {
      // Pause any currently playing video
      if (playingVideo !== null) {
        const prevIframe = iframeRefs.current[playingVideo]
        if (prevIframe && prevIframe.contentWindow) {
          prevIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        }
      }
      
      // Play the new video with sound
      setPlayingVideo(index)
      setFocusedCard(index)
      
      // Give iframe time to load, then unmute and play
      setTimeout(() => {
        const iframe = iframeRefs.current[index]
        if (iframe && iframe.contentWindow) {
          // First, unmute the video
          iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*')
          // Then play it
          setTimeout(() => {
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
          }, 100)
        }
      }, 300)
    }
  }, [playingVideo])

  // Handle mute toggle for specific video (NEW)
  const handleMuteToggle = useCallback((index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setVideoMuted(prev => {
      const newMuted = [...prev]
      newMuted[index] = !newMuted[index]
      
      // Send mute/unmute command to YouTube iframe
      const iframe = iframeRefs.current[index]
      if (iframe && iframe.contentWindow) {
        if (newMuted[index]) {
          iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*')
        } else {
          iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*')
        }
      }
      
      return newMuted
    })
  }, [])

  // Enhanced Card positioning calculations with 3D effects
  const getCardTransform = useCallback((index: number, isFocused: boolean) => {
    if (isMobile) {
      // Mobile: Stack cards vertically with minimal overlap for better touch interaction
      if (isFocused) {
        return "translateY(0px) scale(1) translateZ(30px) rotateX(0deg)"
      }
      const offset = (index - (focusedCard || 0)) * 20
      const scale = Math.max(0.85, 1 - Math.abs(index - (focusedCard || 0)) * 0.05)
      return `translateY(${offset}px) scale(${scale}) translateZ(0px) rotateX(0deg)`
    }

    if (isTablet) {
      // Tablet layout with 3D
      const centerIndex = 2
      const positionFromCenter = index - centerIndex
      
      if (isFocused) {
        return "translateX(0px) scale(1.1) translateZ(60px) rotateY(0deg)"
      }
      
      const xOffset = positionFromCenter * 120
      const scale = 1 - Math.abs(positionFromCenter) * 0.03
      const rotateY = -positionFromCenter * 2.5
      return `translateX(${xOffset}px) scale(${scale}) translateZ(${Math.abs(positionFromCenter) * -8}px) rotateY(${rotateY}deg)`
    }

    // Desktop layout with full 3D
    const centerIndex = 4
    const positionFromCenter = index - centerIndex
    
    if (isFocused) {
      return "translateX(0px) scale(1.15) translateZ(80px) rotateY(0deg) rotateX(0deg)"
    }
    
    const xOffset = positionFromCenter * 140
    const scale = 1 - Math.abs(positionFromCenter) * 0.035
    const rotateY = -positionFromCenter * 1.8
    const rotateX = Math.abs(positionFromCenter) * -0.3
    const zOffset = Math.abs(positionFromCenter) * -12
    
    return `translateX(${xOffset}px) scale(${scale}) translateZ(${zOffset}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
  }, [isMobile, isTablet, focusedCard])

  const getCardZIndex = useCallback((index: number, isFocused: boolean) => {
    if (isFocused) return 100
    if (isMobile) {
      const centerIndex = focusedCard || 0
      const distanceFromCenter = Math.abs(index - centerIndex)
      return 50 - distanceFromCenter
    }
    const centerIndex = isTablet ? 2 : 4
    const distanceFromCenter = Math.abs(index - centerIndex)
    return 60 - distanceFromCenter * 2
  }, [isMobile, isTablet, focusedCard])

  // Get YouTube URL with proper parameters
  const getYouTubeEmbedUrl = useCallback((embedUrl: string, isPlaying: boolean, isMuted: boolean) => {
    const baseUrl = embedUrl.split('?')[0]
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      iv_load_policy: '3',
      enablejsapi: '1',
      origin: typeof window !== 'undefined' ? window.location.origin : 'https://example.com'
    })
    
    if (isPlaying) {
      params.set('autoplay', '1')
    }
    
    if (isMuted) {
      params.set('mute', '1')
    } else {
      params.set('mute', '0')
    }
    
    return `${baseUrl}?${params.toString()}`
  }, [])

  // Render video cards with YouTube iframes (UPDATED)
  const renderVideoCards = useCallback(() => {
    const maxCards = isMobile ? 3 : isTablet ? 5 : videoEditingCards.length
    const cardsToRender = videoEditingCards.slice(0, maxCards)
    
    return cardsToRender.map((card, index) => {
      const isFocused = focusedCard === index
      const isPlaying = playingVideo === index
      const isVisible = visibleCards[index] ?? false
      const isMuted = videoMuted[index] ?? false
      const isHovering = isHoveringVideo === index
      
      return (
        <div
          key={card.id}
          data-index={index}
          onMouseEnter={() => setIsHoveringVideo(index)}
          onMouseLeave={() => setIsHoveringVideo(null)}
          onClick={() => handleVideoClick(index)}
          className={`absolute transition-all duration-500 ease-[cubic-bezier(0.2,0.85,0.3,1.05)] cursor-pointer transform-gpu group ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${isMobile ? 'touch-pan-y' : ''}`}
          style={{
            transform: getCardTransform(index, isFocused),
            width: isMobile ? '85vw' : isTablet ? '300px' : '320px',
            maxWidth: isMobile ? '280px' : 'none',
            height: isMobile ? 'calc(85vw * 1.25)' : isTablet ? '360px' : '380px',
            maxHeight: isMobile ? '350px' : 'none',
            left: '50%',
            marginLeft: isMobile ? '-42.5vw' : isTablet ? '-150px' : '-160px',
            transitionDelay: `${index * 40}ms`,
            willChange: 'transform',
            zIndex: getCardZIndex(index, isFocused),
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            top: isMobile ? '0' : '0',
            pointerEvents: 'auto',
            perspective: '1000px'
          }}
        >
          {/* Main Card Container */}
          <div 
            className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-500"
            style={{
              background: card.color,
              border: isFocused 
                ? '3px solid rgba(59, 130, 246, 0.5)'
                : isHovering
                ? '2px solid rgba(255, 255, 255, 0.2)'
                : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: isFocused 
                ? `0 20px 40px -10px rgba(0, 0, 0, 0.5),
                   0 10px 20px rgba(30, 66, 91, 0.4),
                   0 0 0 2px rgba(59, 130, 246, 0.4)`
                : isHovering
                ? `0 15px 30px -10px rgba(0, 0, 0, 0.35),
                   0 8px 15px rgba(30, 66, 91, 0.25),
                   0 0 0 1px rgba(255, 255, 255, 0.15)`
                : `0 10px 25px -8px rgba(0, 0, 0, 0.25),
                   0 5px 10px rgba(30, 66, 91, 0.2),
                   0 0 0 1px rgba(255, 255, 255, 0.08)`,
              transform: 'translateZ(0)',
              filter: isFocused ? 'brightness(1.1) saturate(1.1)' : isHovering ? 'brightness(1.05)' : 'brightness(1)'
            }}
          >
            
            {/* 3D Border Effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-black/10 opacity-60 pointer-events-none" />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-3xl pointer-events-none" />
            
            {/* YouTube Video Container */}
            <div className="absolute inset-0 transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
              <iframe
                ref={(el) => { iframeRefs.current[index] = el }}
                src={getYouTubeEmbedUrl(card.embedUrl, isPlaying, isMuted)}
                className="w-full h-full object-cover transform-gpu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={card.title}
                style={{
                  transform: 'translateZ(1px)',
                  backfaceVisibility: 'hidden',
                  pointerEvents: 'auto'
                }}
              />
              
              {/* YouTube play button overlay when not playing */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-center transform-gpu cursor-pointer group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/60 group-hover:to-transparent transition-all duration-300"
                  style={{ transform: 'translateZ(2px)' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleVideoClick(index)
                  }}
                >
                  <div className="relative group/play">
                    {/* Glowing effect - simplified for mobile */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-600/40 to-red-500/30 blur-xl transform-gpu animate-pulse" />
                    
                    {/* Click hint text */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-white/80 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap border border-white/10">
                      {isMobile ? 'Tap to play' : ''}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Video Controls Overlay when playing or hovering */}
              {(isPlaying || isHovering) && (
                <div 
                  className="absolute top-3 right-3 flex flex-col gap-2 transform-gpu opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: 'translateZ(5px)' }}
                >
                  {/* Sound control button */}
                  <button
                    onClick={(e) => handleMuteToggle(index, e)}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                  
                  {/* External link button */}
                  <a
                    href={card.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              )}
            </div>
            
            {/* Top Gradient with 3D effect */}
            <div 
              className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/20 via-white/8 to-transparent transform-gpu"
              style={{ transform: 'translateZ(1px)' }}
            />
            
            {/* Sound Status Indicator */}
            {isPlaying && (
              <div className="absolute top-4 right-4 transform-gpu" style={{ transform: 'translateZ(15px)' }}>
                <div className={`px-3 py-1.5 rounded-full backdrop-blur-md text-white text-xs font-medium border shadow-lg flex items-center gap-2 ${
                  isMuted
                    ? 'bg-gradient-to-r from-gray-600/30 to-gray-500/20 border-gray-500/30'
                    : 'bg-gradient-to-r from-green-600/30 to-green-500/20 border-green-500/30'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${isMuted ? 'bg-gray-400' : 'bg-green-400 animate-pulse'}`} />
                  {isMuted ? 'Muted' : ''}
                </div>
              </div>
            )}

            {/* Card Content with 3D layering - ADJUSTED FOR MOBILE */}
            <div 
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/85 to-transparent transform-gpu"
              style={{ transform: 'translateZ(20px)' }}
            >
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg line-clamp-1 transform-gpu">
                {card.title}
              </h3>
              <p className="text-sm text-white/70 mb-3 line-clamp-2 transform-gpu">
                {card.description}
              </p>
              
              {/* Technologies - HIDDEN ON MOBILE TO SAVE SPACE */}
              {!isMobile && (
                <div className="flex flex-wrap gap-2 mb-3 transform-gpu">
                  {card.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Video Info */}
              <div className="flex items-center justify-between transform-gpu">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4059] to-[#2A5A7B] text-white">
                    {card.category}
                  </span>
                 
                </div>
              </div>
            </div>
            
            {/* Video Progress Indicator - HIDDEN ON MOBILE TO SAVE SPACE */}
            {isPlaying && !isMobile && (
              <div 
                className="absolute bottom-20 left-5 right-5 transform-gpu"
                style={{ transform: 'translateZ(25px)' }}
              >
                <div className="h-2 w-full bg-gradient-to-r from-white/15 to-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                  <div 
                    className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 animate-progress shadow-lg"
                    style={{
                      animationDuration: '30s',
                      animationTimingFunction: 'linear',
                      boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)',
                      animationIterationCount: 'infinite'
                    }}
                  />
                </div>
              </div>
            )}
            
            {/* Sound Waves Animation when playing with sound - HIDDEN ON MOBILE */}
            {isPlaying && !isMuted && !isMobile && (
              <div className="absolute bottom-24 right-5 transform-gpu flex items-end gap-0.5" style={{ transform: 'translateZ(30px)' }}>
                {[1, 2, 3, 4, 3, 2, 1].map((height, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm animate-wave"
                    style={{
                      height: `${height * 4}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* 3D Glow Effect */}
          {isFocused && !isMobile && (
            <div 
              className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#1D4059]/30 via-[#2A5A7B]/25 to-transparent blur-2xl opacity-80 pointer-events-none transition-all duration-700"
              style={{
                transform: 'translateZ(-15px)',
                animation: 'pulseGlow 3s ease-in-out infinite'
              }}
            />
          )}
          
          {/* Hover Glow Effect */}
          {isHovering && !isFocused && !isMobile && (
            <div 
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#1D4059]/15 via-[#2A5A7B]/10 to-transparent blur-xl opacity-50 pointer-events-none transition-all duration-300"
              style={{
                transform: 'translateZ(-10px)'
              }}
            />
          )}
          
          {/* Corner Accents */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-white/10 rounded-tl-lg transform-gpu opacity-60" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t border-r border-white/10 rounded-tr-lg transform-gpu opacity-60" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-white/10 rounded-bl-lg transform-gpu opacity-60" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-white/10 rounded-br-lg transform-gpu opacity-60" />
        </div>
      )
    })
  }, [focusedCard, visibleCards, isMobile, isTablet, playingVideo, videoMuted, isHoveringVideo, handleVideoClick, handleMuteToggle, getCardTransform, getCardZIndex, getYouTubeEmbedUrl])

  // Tab navigation
  const tabs = [
    { id: "video", label: "Video Editing", icon: Play },
    { id: "web", label: "Web Development", icon: Code },
    { id: "marketing", label: "Digital Marketing", icon: TrendingUp }
  ]

  return (
    <section className="relative py-2 sm:py-4 md:py-6 overflow-hidden bg-gradient-to-b from-[#EEEEEE] to-[#E0E0E0]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #6C7A89 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: scrolling ? 'none' : 'backgroundMove 20s linear infinite',
          }}
        />
      </div>

      {/* Floating 3D Elements */}
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

      <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 relative z-10">
        {/* Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5 md:mb-6 transform-gpu">
          <div className="mb-1.5 sm:mb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#1E425B]/15 to-[#2A5A7B]/10 text-[#1E425B] text-xs sm:text-sm font-medium border border-[#1E425B]/20 backdrop-blur-sm shadow-sm">
              Previous Work
            </span>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#1E425B]/90 mb-1.5 sm:mb-2 transform-gpu">
            Case Studies & Success Stories 
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-4 sm:mb-5 md:mb-6 px-2 transform-gpu">
          <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-1.5 rounded-full p-1 bg-gradient-to-b from-white/70 to-white/50 backdrop-blur-md shadow-lg border border-[#1E425B]/20 max-w-full overflow-x-auto transform-gpu">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveSection(tab.id)
                    setVisibleCards([])
                    setFocusedCard(null)
                    setPlayingVideo(null)
                    // Pause all videos when switching sections
                    iframeRefs.current.forEach(iframe => {
                      if (iframe && iframe.contentWindow) {
                        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
                      }
                    })
                  }}
                  className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 transform-gpu hover:scale-105 active:scale-95 ${
                    activeSection === tab.id
                      ? "bg-gradient-to-r from-[#1E425B] to-[#2A5A7B] text-white shadow-lg scale-[1.02] shadow-[#1E425B]/30"
                      : "text-[#1E425B] hover:bg-gradient-to-r hover:from-[#1E425B]/10 hover:to-[#2A5A7B]/10"
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-xs sm:text-sm">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Video Editing Section - UPDATED WITH NEW CARDS */}
        {activeSection === "video" && (
          <>
            <div className="text-center mb-4 sm:mb-5 md:mb-6 transform-gpu">
              <h3 className="text-lg sm:text-xl font-bold text-[#1E425B] mb-1.5 bg-gradient-to-r from-[#1E425B] to-[#2A5A7B] bg-clip-text text-transparent">
                Video Editing Projects
              </h3>
              <p className="text-[#1E425B]/70 max-w-2xl mx-auto px-2 text-xs sm:text-sm">
                Professional video production and editing for various industries
              </p>
              {/* Sound Info */}
             
            </div>
            
            <div ref={sectionRef} className="relative">
              <div className={`flex justify-center items-center ${
                isMobile ? 'min-h-[400px]' : 
                isTablet ? 'min-h-[380px]' : 'min-h-[420px]'
              } py-3 sm:py-4 md:py-5 overflow-x-hidden overflow-y-visible`}>
                <div 
                  ref={containerRef}
                  className="relative flex items-center justify-center perspective-1000"
                  style={{
                    height: isMobile ? '350px' : isTablet ? '350px' : '380px',
                    width: 'max-content',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {renderVideoCards()}
                </div>
              </div>
              
              {/* Video Controls Info */}
              <div className="text-center mt-4 px-4 transform-gpu">
                <p className="text-[#1E425B]/70 text-xs sm:text-sm bg-gradient-to-r from-[#1E425B] to-[#2A5A7B] bg-clip-text text-transparent">
                  {isMobile ? 'Tap a card to play video' : 'Click a card to play video'}
                </p>
               
              </div>
            </div>
          </>
        )}

        {/* Web Development Section - REMAINS EXACTLY THE SAME */}
        {activeSection === "web" && (
          <>
            <div className="text-center mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1E425B] mb-1.5">
                Web Development Projects
              </h3>
              <p className="text-[#1E425B]/70 max-w-2xl mx-auto px-2 text-xs sm:text-sm">
                Modern web applications built with cutting-edge technologies
              </p>
            </div>
            
            <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-3">
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
          </>
        )}

        {/* Digital Marketing Section - REMAINS EXACTLY THE SAME */}
        {activeSection === "marketing" && (
          <>
            <div className="text-center mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1E425B] mb-1.5">
                Digital Marketing Projects
              </h3>
              <p className="text-[#1E425B]/70 max-w-2xl mx-auto px-2 text-xs sm:text-sm">
                Strategic marketing campaigns driving measurable business growth
              </p>
            </div>
            
            <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-3">
              {digitalMarketingProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-index={index}
                  className={`transition-all duration-400 ${
                    visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <ProjectCard project={project} type="marketing" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

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
        
        @keyframes wave {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(2);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.2,0.85,0.3,1.05) forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.2,0.85,0.3,1.05) forwards;
        }
        
        .animate-progress {
          animation: progress linear infinite;
        }
        
        .animate-wave {
          animation: wave 0.5s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .perspective-1500 {
          perspective: 1500px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backfaceVisibility: hidden;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Optimize animations for mobile */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .animate-fadeIn,
          .animate-scaleIn,
          .animate-pulse,
          .animate-ping,
          .animate-progress,
          .animate-wave {
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
        
        /* Extra small devices */
        @media (max-width: 360px) {
          .absolute {
            width: 80vw !important;
            height: calc(80vw * 1.25) !important;
            margin-left: -40vw !important;
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
    </section>
  )
}

// Project Card Component for Web Dev and Marketing sections - REMAINS EXACTLY THE SAME
function ProjectCard({ project, type }: { project: any, type: 'web' | 'marketing' }) {
  const Icon = type === 'web' ? Code : TrendingUp
  
  const handleCardClick = (e: React.MouseEvent) => {
    if (type !== 'marketing' && project.liveLink) {
      e.preventDefault()
      window.open(project.liveLink, '_blank', 'noopener,noreferrer')
    }
  }
  
  return (
    <div className="group h-full transform-gpu" onClick={handleCardClick}>
      <div className="relative h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1E425B]/20 hover:border-[#1E425B]/40 active:scale-[0.98] cursor-pointer transform-gpu hover:translateY(-4px)">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu" 
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E425B] via-[#1E425B]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        {/* Live Link Indicator */}
        {type !== 'marketing' && project.liveLink && (
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
              <span>View {type !== 'marketing' && project.liveLink ? 'Live' : 'Details'}</span>
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