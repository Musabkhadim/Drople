"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  threshold?: number
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(ref.current?.children || []).indexOf(entry.target)
            setVisibleIndices((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold },
    )

    ref.current?.querySelectorAll("[data-stagger-item]").forEach((child) => {
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          data-stagger-item
          className={`transition-all duration-500 ${
            visibleIndices.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${visibleIndices.has(index) ? index * staggerDelay : 0}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
