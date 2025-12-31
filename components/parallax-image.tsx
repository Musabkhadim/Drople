"use client"

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
}

export function ParallaxImage({ src, alt, speed = 0.5, className = "" }: ParallaxImageProps) {
  return (
    <img
      data-parallax={speed}
      src={src || "/placeholder.svg"}
      alt={alt}
      className={`transition-transform duration-300 ${className}`}
    />
  )
}
