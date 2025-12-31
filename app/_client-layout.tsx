"use client"

import type React from "react"

import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import { BackgroundAnimations } from "@/components/background-animations"
import { AnimatedBackground } from "@/components/animated-background"
import { initScrollAnimations } from "@/components/scroll-animations"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <>
      <AnimatedBackground />
      <BackgroundAnimations />
      <Navbar />
      {children}
      <Analytics />
    </>
  )
}
