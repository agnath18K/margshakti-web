"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!glowRef.current) return

    const glow = glowRef.current
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    const speed = 0.1

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      gsap.set(glow, {
        x: currentX,
        y: currentY,
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  )
}