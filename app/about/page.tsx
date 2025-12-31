  "use client"

  import { useEffect, useState } from "react"
  import Link from "next/link"
  import { Users, Target, Zap, Award } from "lucide-react"
  import CTABanner from "@/components/cta-banner"
  import Footer from "@/components/footer"
import MusabKhadim from "./musabkhadim"
import AwaisZakir from "./awaiszakir"

  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your goals are our goals. We align our strategies with your vision.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technologies and creative approaches drive our solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we deliver.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong partnerships and transparent communication are our foundation.",
    },
  ]

  const milestones = [
    { year: "2018", title: "Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2019", title: "First 50 Clients", description: "Rapid growth and expanding our service offerings" },
    { year: "2021", title: "Team Expansion", description: "Grew to 50+ talented professionals" },
    { year: "2023", title: "Industry Recognition", description: "Won multiple awards for digital excellence" },
  ]

  export default function About() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      setIsLoaded(true)
    }, [])

    return (
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-background overflow-hidden perspective-1000">
          {/* 3D Floating Blobs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#A3C6C4] rounded-full mix-blend-multiply filter blur-3xl animate-morph translate-z-50 transform-gpu"></div>
            <div
              className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#6C7A89] rounded-full mix-blend-multiply filter blur-3xl animate-morph translate-z-80 transform-gpu"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 transform-gpu">
            <div
              className={`max-w-4xl transition-all duration-1000 transform-gpu ${
                isLoaded ? "opacity-100 translate-y-0 rotate-x-0" : "opacity-0 translate-y-10 rotate-x-6"
              }`}
            >
              <div className="inline-block mb-8">
    <span className="
      pill-badge
      px-6 py-2
      text-base font-semibold
      bg-[#1D4059]
      text-white
      border border-[#1D4059]
      backdrop-blur-sm
      shadow-2xl
      transform-gpu
      translate-z-20
      rounded-full
    ">
      About Us
    </span>
  </div>


              <h1 className="text-5xl md:text-6xl font-bold text-[#1C3D55] mb-6 leading-tight drop-shadow-xl transform-gpu translate-z-40">
                Transforming Ideas Into Digital Excellence
              </h1>

              <p className="text-xl text-[#6C7A89] mb-8 drop-shadow-lg transform-gpu translate-z-10">
  We’re a team of passionate digital innovators delivering results that drive growth. 
  Specializing in <span className="font-bold">web development, SEO, digital marketing, social media ads, video production, graphic design,  and 3D animation</span>, we help businesses amplify their online presence. 
  Whether it’s a custom website, high-converting marketing strategy, or next-level branding, <span className="font-bold">Webo Creators</span> is your trusted partner for innovation without limits.
</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div
                className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms", transformStyle: "preserve-3d" }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1C3D55]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1C3D55]/20 transition-all duration-500 transform-gpu group-hover:translate-z-10">
                  <Target size={24} className="text-[#1C3D55]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1C3D55] mb-4 group-hover:scale-105 transition-transform duration-500 transform-gpu group-hover:translate-z-8">
                  Our Mission
                </h2>
                <p className="text-[#6C7A89] leading-relaxed group-hover:text-[#1C3D55]/80 transition-colors duration-500 transform-gpu group-hover:translate-z-4">
                 To help businesses scale with confidence by delivering innovative digital solutions that blend strategy, creativity, and technology—driving sustainable growth, stronger visibility, and results that truly matter.
                </p>
              </div>

              {/* Vision */}
              <div
                className={`p-8 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group hover:border-[#A3C6C4]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform-gpu perspective-1000 hover:rotate-y-2 hover:rotate-x-2 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms", transformStyle: "preserve-3d" }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1C3D55]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1C3D55]/20 transition-all duration-500 transform-gpu group-hover:translate-z-10">
                  <Zap size={24} className="text-[#1C3D55]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1C3D55] mb-4 group-hover:scale-105 transition-transform duration-500 transform-gpu group-hover:translate-z-8">
                  Our Vision
                </h2>
                <p className="text-[#6C7A89] leading-relaxed group-hover:text-[#1C3D55]/80 transition-colors duration-500 transform-gpu group-hover:translate-z-4">
                 To become a globally trusted creative agency, recognized for excellence in web development, digital marketing, and video production—delivering innovative solutions that shape strong brands and drive long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55] mb-4">Our Core Values</h2>
              <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
                These principles guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 hover:border-[#A3C6C4]/40 transition-all duration-500 group hover:-translate-y-3 hover:shadow-xl transform-gpu perspective-1000 hover:rotate-y-3 hover:rotate-x-3 ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms`, transformStyle: "preserve-3d" }}
                  >
                    <div className="relative w-10 h-10 rounded-lg bg-[#1C3D55]/10 flex items-center justify-center mb-4 group-hover:bg-[#1C3D55]/20 transition-all duration-500 group-hover:scale-110 transform-gpu group-hover:translate-z-10">
                      <IconComponent size={20} className="text-[#1C3D55] relative z-10" />
                      <div className="absolute inset-0 bg-[#1C3D55]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    </div>
                    <h3 className="font-bold text-[#1C3D55] mb-2 group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 transform-gpu group-hover:translate-z-8">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#6C7A89] group-hover:text-[#1C3D55]/80 transition-colors duration-500 transform-gpu group-hover:translate-z-4">
                      {value.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1C3D55]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

       
        

        {/* Team Section */}
        <section className="relative py-24 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1C3D55] mb-4">
        Meet Our Team
      </h2>
      <p className="text-lg text-[#6C7A89] max-w-2xl mx-auto">
        The people driving strategy, creativity, and execution.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <MusabKhadim />
      <AwaisZakir />
    </div>

  </div>
</section>


        <CTABanner />
        <Footer />
      </main>
    )
  }