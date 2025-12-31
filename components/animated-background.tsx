"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Render gradient blobs directly in CSS
    // No need to create elements dynamically
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="animated-gradient-bg" />
      <div className="blob-1" />
      <div className="blob-2" />
      <div className="blob-3" />
    </div>
  )
}
