// components/MusabKhadim.jsx

"use client"

import { Linkedin, Github, Globe, Briefcase, Facebook, Instagram, Youtube } from "lucide-react"

export const metadata = {
  title: "Musab Khadim – Web Developer, Digital Strategist & Video Editor",
  description:
    "Musab Khadim is a professional web developer, digital strategist, and video editor. Specializing in Next.js, SEO-focused websites, digital marketing, and creative video solutions for brands and businesses.",
  keywords: [
    // Personal / Branding
    "Musab Khadim",
    "Musab Khadim portfolio",
    "Musab Khadim official website",
    "Musab Khadim personal portfolio",
    "Musab Khadim Drople",
    "Co-Founder of Drople",
    "Musab Khadim Creative Director",
    
    // Web Development
    "Musab Khadim web developer",
    "Next.js developer",
    "Frontend Developer",
    "HTML CSS JavaScript Developer",
    "Responsive Web Developer",
    "WordPress Developer",
    "Portfolio Website Developer",
    "Website Design & Development",
    "Modern Web Developer",
    "Freelance Web Developer",
    
    // Video Editing
    "Musab Khadim video editor",
    "Professional Video Editor",
    "Documentary Video Editor",
    "Motion Graphics Designer",
    "Visual Storytelling Expert",
    "Freelance Video Editor",
    
    // Digital Marketing
    "Musab Khadim digital marketer",
    "Digital Marketing Expert",
    "SEO Specialist",
    "On Page SEO Expert",
    "Content Marketing Strategist",
    "YouTube SEO Expert",
    "Social Media Marketing",
    "Brand Growth Strategist",
    "Online Marketing Expert",
    "Digital Marketing Portfolio",
    
    // Creative & Branding
    "Creative Director",
    "Brand Strategist",
    "Creative Leadership",
    "Brand Storytelling",
    "Visual Branding Expert",
    "Content Creator",
    "Digital Creator",
    "Creative Professional",
    "Media Production Specialist",
    
    // Call to Action
    "Hire Musab Khadim Video Editor",
    "Hire Musab Khadim Digital Marketer",
    "Hire Musab Khadim Web Developer",
    
    // Portfolio & About
    "Musab Khadim portfolio website",
    "Musab Khadim video editing portfolio",
    "Musab Khadim web development portfolio",
    "About Musab Khadim",
    "Who is Musab Khadim"
  ],
  openGraph: {
    title: "Musab Khadim – Web Developer, Digital Strategist & Video Editor",
    description:
      "Official portfolio of Musab Khadim, professional web developer, digital strategist, and video editor, focused on scalable websites, SEO, and creative video solutions.",
    url: "https://drople.site/musab-khadim",
    type: "profile",
  },
};


export default function MusabKhadim() {

  const socials = [
    { icon: <Globe size={18} />, link: 'https://musabkhadim.netlify.app/', color: '#FF6B35', label: 'Portfolio' },
    { icon: <Linkedin size={18} />, link: 'https://www.linkedin.com/in/musab-khadim-934b41284/', color: '#0077B5', label: 'LinkedIn' },
    { icon: <Facebook size={18} />, link: 'https://www.facebook.com/masab.masab.3152?rdid=mHDueEmor54UOgsP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18bcs2QUR2%2F#', color: '#1877F2', label: 'Facebook' },
    { icon: <Youtube size={18} />, link: 'https://www.youtube.com/@drople-d4z', color: '#FF0000', label: 'YouTube' },
    { icon: <Github size={18} />, link: 'https://github.com/Musabkhadim', color: '#333333', label: 'GitHub' },
    { icon: <Instagram size={18} />, link: 'https://www.instagram.com/masab_khadim/?igsh=MWk2bjU4azlzd2dlaw%3D%3D#', color: '#E4405F', label: 'Instagram' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228"/></svg>, link: 'https://www.freelancer.com/u/MusabKhadim?frm=MusabKhadim&sb=t', color: '#29B2FE', label: 'Freelancer' },
    { icon: <Briefcase size={18} />, link: 'https://www.upwork.com/freelancers/~0199388ce524407271?mp_source=share', color: '#14A800', label: 'Upwork' },
  ]


  return (
    <a 
      href="https://musabkhadim.netlify.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group relative w-full max-w-lg mx-auto perspective cursor-pointer"
    >
      {/* 3D Card Container */}
      <div className="relative transform-3d transition-all duration-700 hover:rotate-y-2">
        
        {/* Glowing Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1C3D55] via-[#A3C6C4] to-[#6C7A89] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
        
        {/* Main Card */}
        <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden border border-[#A3C6C4]/20 transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(28,61,85,0.3)]">
          
          {/* Gradient Header */}
          <div className="h-24 bg-gradient-to-br from-[#1C3D55] via-[#A3C6C4] to-[#6C7A89] relative overflow-hidden">
            {/* Animated Circles */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
            </div>
            
            {/* Decorative Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-musab" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-musab)" />
            </svg>
          </div>

          {/* Image Section with Smooth Circular Frame - Larger */}
          <div className="relative -mt-16 mb-6 px-6">
            <div className="relative w-44 h-44 mx-auto">
              
              {/* Smooth Animated Circles - Multiple Layers */}
              <svg className="absolute inset-[-16px] w-[calc(100%+32px)] h-[calc(100%+32px)] animate-rotate-smooth" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="gradient-musab-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1C3D55" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#A3C6C4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#6C7A89" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="95" fill="none" stroke="url(#gradient-musab-1)" strokeWidth="2" 
                  strokeDasharray="20 10" strokeLinecap="round"/>
              </svg>

              <svg className="absolute inset-[-12px] w-[calc(100%+24px)] h-[calc(100%+24px)] animate-rotate-reverse" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#A3C6C4" strokeWidth="1.5" 
                  strokeDasharray="15 15" strokeLinecap="round" opacity="0.4"/>
              </svg>

              {/* Profile Image with 3D Frame Effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl group-hover:shadow-[0_0_40px_rgba(28,61,85,0.5)] transition-all duration-500">
                {/* 3D Border Layers */}
                <div className="absolute inset-0 rounded-full border-4 border-white shadow-inner"></div>
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#1C3D55] via-white to-[#A3C6C4] opacity-50"></div>
                
                {/* Image Container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-[#1C3D55] to-[#A3C6C4]">
                  <img 
                    src="./musabkhadim.webp" 
                    alt="Musab Khadim – Web Developer and Founder"
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
                Musab Khadim
              </h3>
              <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#1C3D55]/10 via-[#A3C6C4]/10 to-[#6C7A89]/10 border border-[#A3C6C4]/30 backdrop-blur-sm">
                <p className="text-sm font-semibold text-[#1D4059] tracking-wide">
                 Co-Founder & Web Strategist
                </p>
              </div>
            </div>

            <p className="text-sm text-[#6C7A89] text-center leading-relaxed mb-6 px-2">
              Builds clean, scalable websites focused on performance, UX, and business growth. Expert in digital marketing strategies that drive real results.
            </p>

            {/* Social Links with Hover Circle Animation */}
            <div className="flex flex-wrap justify-center gap-3" onClick={(e) => e.stopPropagation()}>
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="group/social relative w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#A3C6C4]/40 text-[#1C3D55] transition-all duration-500 hover:scale-125 hover:border-transparent overflow-hidden"
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
          <div className="h-1.5 bg-gradient-to-r from-[#1C3D55] via-[#A3C6C4] to-[#6C7A89] relative overflow-hidden">
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
    </a>
  )
}