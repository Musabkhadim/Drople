"use client"

import { useEffect, useRef, useState } from "react"

interface TextAnimationProps {
  text: string
  type?: "decrypt" | "typing" | "fade"
  delay?: number
  className?: string
  duration?: number
}

export function TextAnimation({
  text,
  type = "decrypt",
  delay = 0,
  className = "",
  duration = 1.5,
}: TextAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (type === "typing") {
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        setDisplayText(text.substring(0, currentIndex + 1))
        currentIndex++
        if (currentIndex === text.length) clearInterval(typeInterval)
      }, 50)
      return () => clearInterval(typeInterval)
    } else if (type === "decrypt") {
      timeout = setTimeout(() => {
        setDisplayText(text)
        if (ref.current) {
          ref.current.classList.add("animate-decrypt")
        }
      }, delay)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(text)
        if (ref.current) {
          ref.current.classList.add("animate-fade-in-up")
        }
      }, delay)
    }

    return () => clearTimeout(timeout)
  }, [text, type, delay])

  return (
    <div ref={ref} className={className} style={{ minHeight: type === "typing" ? "1.5em" : "auto" }}>
      {displayText}
    </div>
  )
}
