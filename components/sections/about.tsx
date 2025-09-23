"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { eventData } from "@/data/event-data"
import { Target, Users, Lightbulb, Globe } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Aligning highway development with India's 2047 vision for economic growth and connectivity."
  },
  {
    icon: Users,
    title: "Industry Collaboration",
    description: "Bringing together government, industry, and academia for integrated solutions."
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Showcasing cutting-edge AI tools and digital platforms for infrastructure planning."
  },
  {
    icon: Globe,
    title: "National Impact",
    description: "Driving policy changes and practical solutions for India's infrastructure challenges."
  }
]

const hostsWithImages = [
  {
    ...eventData.hosts[0],
    image: "/images/AgniveshPani.jpeg"
  },
  {
    ...eventData.hosts[1],
    image: "/images/AnkitGupta.jpeg"
  }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const hostsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      if (featuresRef.current) {
        gsap.fromTo(
          ".feature-card",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      if (highlightsRef.current) {
        gsap.fromTo(
          highlightsRef.current,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )

        gsap.fromTo(
          ".highlight-item",
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      if (hostsRef.current) {
        gsap.fromTo(
          ".host-card",
          {
            opacity: 0,
            y: 40,
            rotateY: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: hostsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-chart-5/10 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-chart-3/10 to-chart-4/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container-width">
        <div ref={titleRef} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">About the Conclave</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-chart-3 via-primary to-chart-5 bg-clip-text text-transparent animate-gradient">
            Powering India&apos;s Infrastructure Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MargShakti Industry Conclave 2025 is a landmark event bringing together the brightest minds
            in highway infrastructure, logistics, and technology to shape India&apos;s transportation landscape.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="feature-card bg-card/50 backdrop-blur-md hover:bg-card/80 hover:shadow-lg transition-all duration-300 group border border-border/20">
              <CardHeader>
                <feature.icon className="w-8 h-8 mb-2 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card ref={highlightsRef} className="bg-card/50 backdrop-blur-md hover:bg-card/80 hover:shadow-lg transition-all duration-300 mb-12 border border-border/20">
          <CardHeader>
            <CardTitle>Key Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {eventData.keyHighlights.map((highlight, index) => (
                <div key={index} className="highlight-item flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div ref={hostsRef} className="text-center">
          <h3 className="text-xl font-semibold mb-6">Event Hosts</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {hostsWithImages.map((host) => (
              <Card key={host.name} className="host-card w-full max-w-sm bg-card/50 backdrop-blur-md hover:bg-card/80 hover:shadow-lg transition-all duration-300 border border-border/20">
                <CardHeader className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4 ring-2 ring-offset-2 ring-offset-background ring-primary/20">
                    <AvatarImage src={host.image} alt={host.name} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-chart-5">
                      {host.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{host.name}</CardTitle>
                  <CardDescription>
                    <div>{host.designation}</div>
                    <div className="text-xs mt-1">{host.institution}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}