"use client"

import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  return (
    <div data-parallax={speed} className={className}>
      {children}
    </div>
  )
}
