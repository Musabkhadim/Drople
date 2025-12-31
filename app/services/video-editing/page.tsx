"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Mic, Film, Scissors, Users, Home, Box, Play, Pause, Clock, Globe, ExternalLink, Code, TrendingUp, Volume2, VolumeX } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"

const videoServices = [
  {
    icon: Mic,
    title: "PODCAST EDITING",
    desc: "We provide podcast editing services by making high quality and engaging visuals and audio to enhance your podcast and reach wider audience.",
  },
  {
    icon: Film,
    title: "2D ANIMATION SERVICES",
    desc: "We bring flat graphics to life in cool, eye-catching cartoon videos which looks lively and fun to watch.",
  },
  {
    icon: Scissors,
    title: "SHORTS VIDEO EDITING",
    desc: "We offers short video editing services, making sure they are clear and best quality for a great viewing experience.",
  },
  {
    icon: Users,
    title: "TALKING HEAD INTERVIEW",
    desc: "We are professionals in editing talking head video interviews. We edit engaging conversations for an enjoyable viewing experience.",
  },
  {
    icon: Home,
    title: "REAL ESTATE EDITING",
    desc: "We provide professional real estate video editing services. we make sure to edit engaging visuals to enhance worth of property.",
  },
  {
    icon: Film,
    title: "Documentary Video Editing",
    desc: "Professional documentary editing with strong storytelling, clean interviews, engaging B-roll, and natural visuals.",
  },
]

const capabilities = [
  {
    icon: "🎬",
    title: "Short-Form Video Editing",
    desc: "High-impact editing for TikTok, Instagram Reels, and YouTube Shorts designed to boost engagement and retention.",
  },
  {
    icon: "🎞️",
    title: "Long-Form & Documentary Editing",
    desc: "Professional editing for documentaries, tutorials, interviews, and promotional videos with strong storytelling.",
  },
  {
    icon: "📹",
    title: "Vlog Video Editing",
    desc: "Clean and engaging vlog editing with smooth cuts, music sync, and natural pacing for daily and lifestyle content.",
  },
  {
    icon: "📝",
    title: "Script & Description Editing",
    desc: "Clear, engaging script editing and SEO-optimized video descriptions to improve clarity, reach, and discoverability.",
  },
  {
    icon: "💡",
    title: "Explainer Video Editing",
    desc: "Structured explainer video editing that simplifies complex ideas using visuals, pacing, and clear messaging.",
  },
  {
    icon: "✨",
    title: "Visual Effects & Color Grading",
    desc: "Professional motion graphics, smooth animations, and cinematic color grading for a polished visual experience.",
  },
]

const stats = [
  { number: "90+", label: "Videos Edited" },
  { number: "500K", label: "Views Generated" },
  { number: "98%", label: "Client Satisfaction" },
]

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

export default function VideoEditingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  // Video cards states
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [focusedCard, setFocusedCard] = useState<number | null>(null)
  const [scrolling, setScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [videoMuted, setVideoMuted] = useState<boolean[]>(Array(videoEditingCards.length).fill(false))
  const [isHoveringVideo, setIsHoveringVideo] = useState<number | null>(null)
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Optimized resize handler for video cards
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

  // Intersection Observer for video cards animations
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

  // Scroll handling for video cards
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

  // Handle video play/pause with sound control
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

  // Handle mute toggle for specific video
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

  // Enhanced Card positioning calculations with 3D effects - MOBILE FIXED
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

  // Render video cards with YouTube iframes - MOBILE RESPONSIVE FIX
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
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-600/20 to-red-500/15 blur-lg transform-gpu group-hover/play:scale-125 transition-transform duration-300" />
                    
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

  return (
    <main className="relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(/images/59127.jpg)",
          }}
        />
        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1D4059] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#1D4059]/60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#1D4059]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-background/90 to-background/70 overflow-hidden min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="order-1 lg:order-1">
              <div className="max-w-xl">
               <div className="inline-block mb-6 animate-bounce">
  <span className="pill-badge bg-[#1D4059]/10 text-[#1D4059] border border-[#1D4059]/30 font-semibold backdrop-blur-sm shadow-xl rounded-full">
    🎬 Video Editing Services
  </span>
</div>


               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D4059] mb-6 leading-tight">
  Professional <span className="text-[#2a5b7c]">video editing</span> that captivates
</h1>

<p className="text-base md:text-lg text-[#1D4059]/80 mb-8 leading-relaxed">
  High-quality video editing services from concept to final delivery. We create engaging reels, YouTube videos, 
  ads, and documentary content that tell compelling visual stories and grow your brand's audience.
</p>


                <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#1D4059]" />
                    <span className="text-[#1D4059] font-medium text-sm md:text-base">4K Quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#1D4059]" />
                    <span className="text-[#1D4059] font-medium text-sm md:text-base">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#1D4059]" />
                    <span className="text-[#1D4059] font-medium text-sm md:text-base">Expert Editors</span>
                  </div>
                </div>

                <Link href="#portfolio-section">
                  <button className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-[#1D4059] to-[#1D4059]/80 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm md:text-base">
                    View Portfolio
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Video Showcase */}
           <div className="relative order-2 lg:order-2">
  <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-12"> {/* <-- Left side gap */}
    
    {/* Video Container with 3D effect */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1D4059]/40 transform perspective-1000">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#1D4059]/30 to-[#2a5b7c]/30 rounded-3xl blur-xl"></div>
      
      <div className="relative rounded-2xl overflow-hidden border-4 border-white/20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-[300px] md:h-[350px] lg:h-[350px] object-cover rounded-2xl"
        >
          <source src="/editing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
        
        {/* Decorative Elements - HIDDEN ON MOBILE */}
        <div className="hidden md:block absolute top-10 right-10 w-32 h-32 border-4 border-[#1D4059]/20 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
        <div className="hidden md:block absolute bottom-10 left-10 w-24 h-24 border-4 border-[#1D4059]/20 rounded-lg animate-bounce" style={{ animationDuration: "3s" }}></div>
      </section>

      {/* Video Editing Services */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background/70 to-[#E2E9E2]/30 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1D4059]/60 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            {/* Enhanced decorative header element */}
            <div className="inline-flex items-center justify-center gap-4 mb-8 relative">
              <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#2a5b7c] blur-lg opacity-70 rounded-full"></div>
                <Film className="text-white relative z-10" size={32} />
              </div>
              <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            </div>
            
            {/* Animated title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1D4059] mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"></span>
                <span className="relative text-2xl md:text-4xl lg:text-6xl">VIDEO EDITING</span>
              </span>
              <span className="block mt-2 text-xl md:text-3xl lg:text-4xl font-medium text-[#1D4059]/80">Professional Services</span>
            </h2>
            
            {/* Animated subtitle */}
            <p className="text-base md:text-xl text-[#1D4059]/80 max-w-3xl mx-auto leading-relaxed relative px-4">
              Comprehensive video editing solutions tailored to your creative vision and business needs
            </p>
          </div>

          {/* Enhanced services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videoServices.map((service, idx) => {
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
                  style={{
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  {/* Floating card container with 3D effect */}
                  <div className={`relative w-full h-full transform transition-all duration-700 ${
                    isHovered ? "translate-y-0 rotate-0" : "translate-y-6"
                  }`}>
                    {/* Main card */}
                    <div className={`relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                      isHovered 
                        ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" 
                        : "shadow-lg shadow-gray-300/30"
                    }`}>
                      
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      {/* Icon container */}
                      <div className="relative z-10 mb-6 md:mb-8 flex justify-center">
                        <div className="relative">
                          {/* Outer ring */}
                          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#2a5b7c] opacity-20 blur-md transition-all duration-700 ${
                            isHovered ? "scale-125" : "scale-100"
                          }`}></div>
                          
                          {/* Icon */}
                          <IconComponent 
                            className={`transition-all duration-300 transform ${
                              isHovered ? "scale-110" : ""
                            }`}
                            size={32} 
                            color="#1D4059"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1">
                          {service.title}
                        </h3>
                        
                        <p className="text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-6 md:mb-8 text-sm md:text-base">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Portfolio Section - MOBILE RESPONSIVE FIX */}
      <section id="portfolio-section" ref={sectionRef} className="relative py-16 md:py-24 bg-gradient-to-b from-[#E2E9E2]/30 to-background/70 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1D4059 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: scrolling ? 'none' : 'backgroundMove 20s linear infinite',
          }} />
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
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-transparent to-[#1D4059] rounded-full"></div>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-50"></div>
                <Play className="text-white relative z-10" size={24} />
              </div>
              <div className="w-8 md:w-12 h-1 bg-gradient-to-l from-transparent to-[#1D4059] rounded-full"></div>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1D4059] mb-4">INTERACTIVE VIDEO PORTFOLIO</h2>
            <p className="text-sm md:text-lg text-[#1D4059]/70 max-w-2xl mx-auto mb-8 px-4">
              3D animated video cards with sound controls. Click any card to play videos with full audio experience.
            </p>
            
            {/* Sound Info */}
            
          </div>
          
          {/* Video Cards Container - MOBILE RESPONSIVE FIX */}
          <div className="relative">
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
            <div className="text-center mt-8 md:mt-10 px-4">
              <p className="text-[#1D4059]/70 text-xs md:text-sm max-w-2xl mx-auto">
                Click a card to play video
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background/70 to-[#E2E9E2]/30 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1D4059]/60 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            {/* Enhanced decorative header element */}
            <div className="inline-flex items-center justify-center gap-4 mb-8 relative">
              <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#2a5b7c] blur-lg opacity-70 rounded-full"></div>
                <Film className="text-white relative z-10" size={32} />
              </div>
              <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"></div>
            </div>
            
            {/* Animated title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1D4059] mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"></span>
                <span className="relative text-2xl md:text-4xl lg:text-6xl">OUR CAPABILITIES</span>
              </span>
              <span className="block mt-2 text-xl md:text-3xl lg:text-4xl font-medium text-[#1D4059]/80">End-to-End Video Production</span>
            </h2>
          </div>

          {/* Enhanced capabilities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  style={{
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  {/* Floating card container with 3D effect */}
                  <div className={`relative w-full h-full transform transition-all duration-700 ${
                    isHovered ? "translate-y-0 rotate-0" : "translate-y-6"
                  }`}>
                    {/* Main card */}
                    <div className={`relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                      isHovered 
                        ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" 
                        : "shadow-lg shadow-gray-300/30"
                    }`}>
                      
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      {/* Icon container with emoji handling */}
                      <div className="relative z-10 mb-6 md:mb-8 flex justify-center">
                        <div className="relative">
                          {/* Outer ring */}
                          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#2a5b7c] opacity-20 blur-md transition-all duration-700 ${
                            isHovered ? "scale-125" : "scale-100"
                          }`}></div>
                          
                          {/* Emoji icon */}
                          <div>
                            <span
                              className={`text-2xl md:text-3xl transition-all duration-300 ${
                                isHovered ? "" : "text-[#1D4059]"
                              }`}
                            >
                              {cap.icon}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1">
                          {cap.title}
                        </h3>
                        
                        <p className="text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-6 md:mb-8 text-sm md:text-base">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background/70 to-[#E2E9E2]/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-6 md:p-10 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-[#1D4059]/30 text-center hover:border-[#1D4059]/60 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D4059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-4xl md:text-6xl font-bold text-[#1D4059] mb-3 group-hover:scale-125 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <p className="text-[#1D4059]/80 font-semibold text-base md:text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer/>

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
          backface-visibility: hidden;
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
            padding-left: 1rem;
            padding-right: 1rem;
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(29, 64, 89, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1D4059, #2a5b7c);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2a5b7c, #3a7ba0);
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .pill-badge {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
          
          .absolute {
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Improve tap targets on mobile */
          .cursor-pointer {
            cursor: pointer;
          }
          
          /* Prevent text selection on mobile */
          .absolute, .relative, .group {
            user-select: none;
            -webkit-user-select: none;
          }
          
          /* Optimize transitions for mobile */
          .transition-all {
            transition-duration: 300ms;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-[#1D4059] {
            color: #000000;
          }
          
          .border-[#1D4059] {
            border-color: #000000;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-spin,
          .animate-bounce,
          .animate-wave,
          .animate-progress,
          .animate-float {
            animation: none;
          }
          
          .transition-all,
          .transform,
          .scale,
          .translate {
            transition: none;
          }
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