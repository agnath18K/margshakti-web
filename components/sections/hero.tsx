"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Toast } from "@/components/ui/toast"
import { VideoBackground } from "@/components/ui/video-background"
import { eventData } from "@/data/event-data"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".hero-badge", { opacity: 0, y: 30 })
      gsap.set(".hero-title span", { opacity: 0, y: 50 })
      gsap.set(".hero-tagline", { opacity: 0, y: 30 })
      gsap.set(".hero-detail", { opacity: 0, scale: 0.9 })
      gsap.set(".hero-button", { opacity: 0, y: 30 })
      gsap.set(".hero-stat", { opacity: 0, y: 40 })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          ".hero-title span",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.4"
        )
        .to(
          ".hero-tagline",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .to(
          ".hero-detail",
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .to(
          ".hero-button",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .to(
          ".hero-stat",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.4"
        )

      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })

      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll(".stat-value")
        stats.forEach((stat) => {
          const value = stat.getAttribute("data-value")
          if (value) {
            const numValue = parseInt(value.replace(/\D/g, ""))
            const hasSuffix = value.includes("+") ? "+" : ""

            gsap.fromTo(stat,
              {
                textContent: 0,
              },
              {
                textContent: numValue,
                duration: 2,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: stat,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
                snap: { textContent: 1 },
                onUpdate: function() {
                  const current = Math.round(this.targets()[0].textContent)
                  stat.textContent = current + hasSuffix
                }
              }
            )
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <VideoBackground
        src="/video/video_bg.mp4"
        className="-z-10"
        fallbackContent={
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-3/5 to-chart-5/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-background" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/5 to-chart-3/5 rounded-full blur-3xl animate-aurora-shift" />
            <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-chart-3/5 to-transparent rounded-full blur-3xl animate-aurora-drift" />
            <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-aurora-pulse" />
          </div>
        }
      />

      <div ref={contentRef} className="container-width">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="hero-badge">
            <Badge variant="secondary" className="px-4 py-1.5 backdrop-blur-sm border border-primary/30">
              India&apos;s Premier Highway & Infrastructure Summit
            </Badge>
          </div>

          <div className="space-y-4 hero-title">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-foreground via-primary to-chart-5 bg-clip-text text-transparent animate-gradient">
                MargShakti
              </span>
              <span className="block text-muted-foreground">
                Industry Conclave
              </span>
              <span className="block bg-gradient-to-r from-primary via-chart-3 to-chart-5 bg-clip-text text-transparent animate-neon-pulse">
                2025
              </span>
            </h1>
          </div>

          <p className="hero-tagline text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Highways, Logistics & Urban Futures in the Pathways to Viksit Bharat 2047!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="hero-detail flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 border border-border/30">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>{eventData.dates}</span>
            </div>
            <div className="hero-detail flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200 border border-border/30">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{eventData.venue}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="hero-button min-w-[200px] bg-gradient-to-r from-primary to-chart-3 hover:from-primary/90 hover:to-chart-3/90 border-0 shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                setShowComingSoon(true)
                setTimeout(() => setShowComingSoon(false), 3000)
              }}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-button min-w-[200px] backdrop-blur-sm border border-primary/30 hover:border-primary/40 bg-gradient-to-r from-chart-3/5 to-primary/5 hover:from-chart-3/10 hover:to-primary/10 shadow-sm hover:shadow-md"
              onClick={() => {
                const element = document.getElementById("sessions")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Schedule
            </Button>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {eventData.stats.map((stat) => (
              <div
                key={stat.label}
                className={`hero-stat text-center ${stat.isDate ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                onClick={() => {
                  if (stat.isDate) {
                    const element = document.getElementById("posters")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <p className="text-3xl font-bold">
                  {stat.isDate ? (
                    <motion.span
                      className="text-2xl bg-gradient-to-r from-chart-4 to-primary bg-clip-text text-transparent inline-block"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.value}
                    </motion.span>
                  ) : (
                    <span className="stat-value" data-value={`${stat.value}${stat.suffix || ""}`}>
                      {stat.value}{stat.suffix}
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                  {stat.isDate && (
                    <span className="block text-xs text-chart-4 mt-0.5">Click for details</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/30 animate-float">
            <ChevronDown className="w-5 h-5 text-muted-foreground animate-pulse" />
          </div>
        </div>
      </div>

      <Toast visible={showComingSoon}>
        Registration and full schedule will be available soon. Stay tuned!
      </Toast>
    </section>
  )
}