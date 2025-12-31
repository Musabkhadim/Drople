// components/AwaisZakir.jsx

"use client"

import { Instagram, Youtube, Linkedin, Briefcase, Facebook, Globe, Github } from "lucide-react"

export const metadata = {
  title: "Awais Zakir – Co-Founder, Creative Director & Video Editor",
  description:
    "Awais Zakir is a Co-Founder and Creative Director at Drople, specializing in professional video editing, digital marketing, branding, and visual storytelling. He creates content that engages audiences and drives conversions for businesses and brands.",
  keywords: [
    // Personal / Branding
    "Awais Zakir",
    "Awais Zakir portfolio",
    "Awais Zakir official website",
    "Awais Zakir personal portfolio",
    "Awais Zakir Drople",
    "Co-Founder of Drople",
    "Awais Zakir Creative Director",
    "Co-Founder & Creative Director",
    "Creative Director at Drople",

   
    "Awais Zakir video editor",
    "Professional Video Editor",
    "Documentary Video Editor",
    "YouTube Video Editor",
    "Whiteboard Animation Expert",
    "Explainer Video Editor",
    "Motion Graphics Designer",
    "Visual Storytelling Expert",
    "Video Editing Portfolio",
    "Freelance Video Editor",
    "Short-form Video Editing",
    "Reels and Shorts Editing",
    "Marketing Video Editing",
    "Promotional Video Editing",

    "Awais Zakir web developer",
    "Frontend Developer",
    "HTML CSS JavaScript Developer",
    "Responsive Web Developer",
    "WordPress Developer",
    "Portfolio Website Developer",
    "Website Design & Development",
    "Modern Web Developer",
    "Freelance Web Developer",
    "Awais Zakir Web Development Portfolio",

    "Awais Zakir digital marketer",
    "Digital Marketing Expert",
    "SEO Specialist",
    "On Page SEO Expert",
    "Content Marketing Strategist",
    "YouTube SEO Expert",
    "Social Media Marketing",
    "Brand Growth Strategist",
    "Online Marketing Expert",
    "Digital Marketing Portfolio",
   
    "Creative Director",
    "Brand Strategist",
    "Creative Leadership",
    "Brand Storytelling",
    "Visual Branding Expert",
    "Content Creator",
    "Digital Creator",
    "Creative Professional",
    "Media Production Specialist",

    "Hire Awais Zakir Video Editor",
    "Hire Awais Zakir Digital Marketer",
    "Hire Awais Zakir Web Developer",
 
    "About Awais Zakir",
    "Who is Awais Zakir",
    "Awais Zakir Portfolio Website",
    "Awais Zakir Video Editing Portfolio",
    "Awais Zakir Digital Marketing Portfolio",
    "Awais Zakir Web Development Portfolio"
  ],
  openGraph: {
    title: "Awais Zakir – Co-Founder, Creative Director & Video Editor",
    description:
      "Official portfolio of Awais Zakir, Co-Founder and Creative Director at Drople. Expert in video editing, branding, visual storytelling, and digital marketing strategies that drive engagement and conversions.",
    url: "https://drople.site/awais-zakir",
    type: "profile",
  },
};


export default function AwaisZakir() {

 const socials = [
    { icon: <Globe size={18} />, link: 'https://awais-zakir-abbasi.netlify.app/', color: '#FF6B35', label: 'Portfolio' },
    { icon: <Facebook size={18} />, link: 'https://www.facebook.com/awais.zakir.a.asi/?rdid=KvIkdjsbDsjITlnS', color: '#1877F2', label: 'Facebook' },
    { icon: <Youtube size={18} />, link: 'https://www.youtube.com/@AutoHunters-1', color: '#FF0000', label: 'YouTube' },
    { icon: <Instagram size={18} />, link: 'https://www.instagram.com/awais_zakir_abbasi/?igsh=bmJsZzV3Yzh6bmxv#', color: '#E4405F', label: 'Instagram' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228"/></svg>, link: 'https://www.freelancer.com/u/awaisz21', color: '#29B2FE', label: 'Freelancer' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 0 0-.986-.836h-2.996c.09-.433.146-.88.146-1.34v-.008c0-3.72-3.026-6.74-6.75-6.74-3.724 0-6.75 3.02-6.75 6.74v.008c0 .46.055.907.146 1.34H2.818a.995.995 0 0 0-.986.836l-.83 5.24a.994.994 0 0 0 .985 1.152h21.024a.994.994 0 0 0 .985-1.152l-.83-5.24h-.002zm-6.75-2.184v.008c0 1.512-.615 2.89-1.61 3.888a5.488 5.488 0 0 1-3.888 1.61 5.488 5.488 0 0 1-3.888-1.61 5.488 5.488 0 0 1-1.61-3.888v-.008c0-2.616 2.134-4.74 4.75-4.74s4.75 2.124 4.75 4.74h-.004zm-5.5 1.324a.75.75 0 1 0 1.5 0v-2.5a.75.75 0 1 0-1.5 0v2.5z"/></svg>, link: 'https://www.fiverr.com/login?return=self_view_page', color: '#1DBF73', label: 'Fiverr' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703c0 1.488-1.214 2.702-2.704 2.702zm-13.122 0c-1.49 0-2.704-1.214-2.704-2.702a2.705 2.705 0 0 1 2.704-2.703c1.989 0 2.631 1.917 2.838 3.06l.008.042.228 1.076c-.939.76-1.972 1.227-3.074 1.227zm6.561-5.924c1.686 0 3.054 1.368 3.054 3.054s-1.368 3.054-3.054 3.054-3.054-1.368-3.054-3.054 1.368-3.054 3.054-3.054zm0 12.892c-3.833 0-7.111-2.856-7.457-6.639l-.01-.108h2.01l.023.187c.25 1.93 1.981 3.486 3.969 3.486s3.719-1.556 3.969-3.486l.023-.187h2.01l-.01.108c-.346 3.783-3.624 6.639-7.457 6.639z"/></svg>, link: 'https://upwork.com/freelancers/~01460494f65d6b4579?mp_source=share', color: '#14A800', label: 'Upwork' },
    { icon: <Github size={18} />, link: 'https://github.com/waisi66', color: '#333333', label: 'GitHub' },
  ]

  return (
    
    <div className="group relative w-full max-w-lg mx-auto perspective">
      {/* 3D Card Container */}
      <div className="relative transform-3d transition-all duration-700 hover:rotate-y-2">
        
        {/* Glowing Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1C3D55] via-[#A3C6C4] to-[#6C7A89] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
        
        {/* Main Card */}
        <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden border border-[#A3C6C4]/20 transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(28,61,85,0.3)] cursor-pointer" onClick={() => window.open('https://awais-zakir-abbasi.netlify.app/', '_blank')}>
          
          {/* Gradient Header */}
          <div className="h-24 bg-gradient-to-br from-[#6C7A89] via-[#A3C6C4] to-[#1C3D55] relative overflow-hidden">
            {/* Animated Circles */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
            </div>
            
            {/* Decorative Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Image Section with Smooth Circular Frame - Larger */}
          <div className="relative -mt-16 mb-6 px-6">
            <div className="relative w-44 h-44 mx-auto">
              
              {/* Smooth Animated Circles - Multiple Layers */}
              <svg className="absolute inset-[-16px] w-[calc(100%+32px)] h-[calc(100%+32px)] animate-rotate-smooth" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C7A89" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#A3C6C4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#1C3D55" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="95" fill="none" stroke="url(#gradient1)" strokeWidth="2" 
                  strokeDasharray="20 10" strokeLinecap="round"/>
              </svg>

              <svg className="absolute inset-[-12px] w-[calc(100%+24px)] h-[calc(100%+24px)] animate-rotate-reverse" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#A3C6C4" strokeWidth="1.5" 
                  strokeDasharray="15 15" strokeLinecap="round" opacity="0.4"/>
              </svg>

              {/* Profile Image with 3D Frame Effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(108,122,137,0.5)] transition-all duration-500">
                {/* 3D Border Layers */}
                <div className="absolute inset-0 rounded-full border-4 border-white shadow-inner"></div>
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#A3C6C4] via-white to-[#6C7A89] opacity-50"></div>
                
                {/* Image Container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-[#6C7A89] to-[#A3C6C4]">
                  <img 
                    src="/awaiszakir.webp" 
                    alt="Awais Zakir" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3D55]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 pb-6">
            <div className="text-center mb-5">
              <h3 className="text-2xl font-bold text-[#1C3D55] mb-2 group-hover:text-[#6C7A89] transition-colors duration-300">
                Awais Zakir
              </h3>
              <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#6C7A89]/10 via-[#A3C6C4]/10 to-[#1C3D55]/10 border border-[#A3C6C4]/30 backdrop-blur-sm">
                <p className="text-sm font-semibold text-[#1D4059] tracking-wide">
                  Co-Founder & Creative Director
                </p>
              </div>
            </div>

            <p className="text-sm text-[#6C7A89] text-center leading-relaxed mb-6 px-2">
              Expert in video editing, branding, and visual storytelling that turns attention into engagement and conversions. Master of digital marketing strategies.
            </p>

            {/* Social Links with Hover Circle Animation */}
            <div className="flex flex-wrap justify-center gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  onClick={(e) => e.stopPropagation()}
                  className="group/social relative w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#A3C6C4]/40 text-[#6C7A89] transition-all duration-500 hover:scale-125 hover:border-transparent overflow-hidden"
                >
                  {/* Animated Circle Background */}
                  <span 
                    className="absolute inset-0 rounded-full transition-all duration-500 scale-0 group-hover/social:scale-100 animate-pulse-slow"
                    style={{ backgroundColor: social.color }}
                  ></span>
                  
                  {/* Ripple Effect */}
                  <span 
                    className="absolute inset-0 rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-500 animate-ripple"
                    style={{ 
                      backgroundColor: social.color,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                  ></span>
                  
                  {/* Icon */}
                  <span className="relative z-10 transition-all duration-500 group-hover/social:text-white group-hover/social:scale-110 group-hover/social:rotate-12">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="h-1.5 bg-gradient-to-r from-[#6C7A89] via-[#A3C6C4] to-[#1C3D55] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .transform-3d {
          transform-style: preserve-3d;
        }
        
        .hover\:rotate-y-2:hover {
          transform: rotateY(2deg) rotateX(-2deg);
        }

        @keyframes rotate-smooth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .animate-rotate-smooth {
          animation: rotate-smooth 25s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate-reverse 20s linear infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-ripple {
          animation: ripple 1s ease-out;
        }
      `}</style>
    </div>
  )
}