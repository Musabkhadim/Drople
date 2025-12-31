"use client"

import { useEffect } from "react"

interface CounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function Counter({ value, duration = 2000, suffix = "", prefix = "", className = "" }: CounterProps) {
  useEffect(() => {
    const element = document.querySelector(`[data-counter-value="${value}"]`) as HTMLElement
    if (!element) return

    const startTime = Date.now()
    let animationId: number

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(value * progress)

      element.textContent = `${prefix}${current.toLocaleString()}${suffix}`

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [value, duration, suffix, prefix])

  return (
    <span data-counter-value={value} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
