"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  stagger?: number
  variant?: "word" | "char" | "line"
  triggerOnce?: boolean
}

export function AnimatedText({
  text,
  className = "",
  stagger = 50,
  variant = "word",
  triggerOnce = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(entries[0].target)
          }
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [triggerOnce])

  const chunks = variant === "word" ? text.split(" ") : variant === "char" ? text.split("") : text.split("\n")

  return (
    <span ref={ref} className={className}>
      {chunks.map((chunk, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: `${index * stagger}ms`,
          }}
        >
          {chunk}
          {variant === "word" && index < chunks.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}
