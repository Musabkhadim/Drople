"use client"

export function initScrollAnimations() {
  const revealElements = () => {
    const elements = document.querySelectorAll("[data-scroll-reveal]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    elements.forEach((el) => observer.observe(el))
  }

  const parallaxEffect = () => {
    const parallaxElements = document.querySelectorAll("[data-parallax]")

    const handleScroll = () => {
      parallaxElements.forEach((el: Element) => {
        const scrollY = window.scrollY
        const element = el as HTMLElement
        const speed = Number.parseFloat(element.getAttribute("data-parallax") || "0.5")
        element.style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }

  const magneticHover = () => {
    const interactiveElements = document.querySelectorAll("[data-magnetic], button, a")

    interactiveElements.forEach((element) => {
      element.addEventListener("mousemove", (e: Event) => {
        const mouseEvent = e as MouseEvent
        const rect = (element as HTMLElement).getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left - rect.width / 2
        const y = mouseEvent.clientY - rect.top - rect.height / 2
        const distance = Math.sqrt(x * x + y * y)
        const maxDistance = Math.max(rect.width, rect.height)

        if (distance < maxDistance) {
          const strength = 0.5
          ;(element as HTMLElement).style.setProperty("--magnetic-x", `${x * strength}px`)
          ;(element as HTMLElement).style.setProperty("--magnetic-y", `${y * strength}px`)
        }
      })

      element.addEventListener("mouseleave", () => {
        ;(element as HTMLElement).style.setProperty("--magnetic-x", "0px")
        ;(element as HTMLElement).style.setProperty("--magnetic-y", "0px")
      })
    })
  }

  const animateCounters = () => {
    const counters = document.querySelectorAll("[data-counter]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const target = Number.parseInt(element.getAttribute("data-counter") || "0")
            const duration = Number.parseInt(element.getAttribute("data-duration") || "2000")

            animateCounter(element, target, duration)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    counters.forEach((el) => observer.observe(el))
  }

  const animateCounter = (element: HTMLElement, target: number, duration: number) => {
    const start = 0
    const startTime = Date.now()

    const update = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (target - start) * progress)
      element.textContent = current.toLocaleString()

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    update()
  }

  const scrollDepthTracking = () => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      // Update scroll progress for scroll-linked animations
      document.documentElement.style.setProperty("--scroll-progress", `${scrollPercent}%`)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }

  const textRevealAnimation = () => {
    const textElements = document.querySelectorAll("[data-text-reveal]")

    textElements.forEach((element) => {
      const text = element.textContent || ""
      const words = text.split(" ")

      element.innerHTML = words
        .map((word) => `<span class="inline-block opacity-0 translate-y-4 animate-fade-in-up">${word}&nbsp;</span>`)
        .join("")

      const spans = element.querySelectorAll("span")
      spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 50}ms`
      })
    })
  }

  // Initialize all animations
  revealElements()
  parallaxEffect()
  magneticHover()
  animateCounters()
  scrollDepthTracking()
  textRevealAnimation()
}
