"use client"

import type { ReactNode } from "react"

interface ScrollRevealSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  animationType?: "fade-up" | "fade-down" | "slide-left" | "slide-right" | "scale"
}

export function ScrollRevealSection({
  children,
  delay = 0,
  className = "",
  animationType = "fade-up",
}: ScrollRevealSectionProps) {
  // Map animation types to classes
  const animationClasses: Record<string, string> = {
    "fade-up": "animate-fade-in-up",
    "fade-down": "animate-fade-in-down",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    scale: "animate-scale-pulse",
  }

  return (
    <div
      data-scroll-reveal
      className={`opacity-0 ${animationClasses[animationType]} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
