"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sessionsData } from "@/data/event-data"
import { Clock, User } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SessionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

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

      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: tabsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      gsap.utils.toArray(".session-card").forEach((card, index: number) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            rotateY: index % 2 === 0 ? -5 : 5,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background via-chart-3/10 to-card/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-chart-3/10 via-primary/10 to-chart-5/10 rounded-full blur-3xl animate-aurora" />
      </div>

      <div className="container-width">
        <div ref={titleRef} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm">Event Schedule</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-chart-3 via-primary to-chart-5 bg-clip-text text-transparent animate-gradient">
            Two Days of Transformative Discussions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore cutting-edge solutions, policy frameworks, and strategic insights
            shaping India&apos;s infrastructure future.
          </p>
        </div>

        <div ref={tabsRef}>
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 backdrop-blur-sm">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-8">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">{sessionsData.day1.date}</h3>
                  <p className="text-muted-foreground">{sessionsData.day1.title}</p>
                </div>

                {sessionsData.day1.sessions.map((session) => (
                  <div key={session.id} className="session-card relative group">
                    {session.backgroundImage && (
                      <>
                        <Image
                          src={session.backgroundImage}
                          alt={session.title}
                          fill
                          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 rounded-lg" />
                      </>
                    )}
                    <Card className="relative bg-card/80 backdrop-blur-sm hover:bg-card/90 hover:shadow-lg transition-all duration-300 border border-border/50">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{session.title}</CardTitle>
                            {session.type === 'keynote' && (
                              <Badge variant="secondary" className="mt-2 animate-pulse">Keynote</Badge>
                            )}
                          </div>
                          <Badge variant="outline" className="backdrop-blur-sm">
                            <Clock className="w-3 h-3 mr-1" />
                            {session.time}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {session.chair && (
                          <div className="flex items-center gap-2 text-sm">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Chair:</span>
                            <span>{session.chair}</span>
                          </div>
                        )}

                        {session.speakers && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Speakers:</span>
                            <ul className="mt-1 space-y-1">
                              {session.speakers.map((speaker: string, idx: number) => (
                                <li key={idx} className="ml-4 hover:text-primary transition-colors">• {speaker}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {session.panelists && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Panelists:</span>
                            <ul className="mt-1 space-y-1">
                              {session.panelists.map((panelist: string, idx: number) => (
                                <li key={idx} className="ml-4 hover:text-primary transition-colors">• {panelist}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {session.launches && (
                          <div className="pt-2 border-t border-muted/50">
                            <Badge variant="default" className="mb-2">Launches</Badge>
                            <ul className="text-sm space-y-1">
                              {session.launches.map((launch: string, idx: number) => (
                                <li key={idx} className="hover:text-primary transition-colors">• {launch}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {session.focus && (
                          <p className="text-sm text-muted-foreground italic">
                            Focus: {session.focus}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-8">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">{sessionsData.day2.date}</h3>
                  <p className="text-muted-foreground">{sessionsData.day2.title}</p>
                </div>

                {sessionsData.day2.sessions.map((session) => (
                  <div key={session.id} className="session-card relative group">
                    {session.backgroundImage && (
                      <>
                        <Image
                          src={session.backgroundImage}
                          alt={session.title}
                          fill
                          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 rounded-lg" />
                      </>
                    )}
                    <Card className="relative bg-card/80 backdrop-blur-sm hover:bg-card/90 hover:shadow-lg transition-all duration-300 border border-border/50">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{session.title}</CardTitle>
                            {session.type === 'keynote' && (
                              <Badge variant="secondary" className="mt-2 animate-pulse">Keynote</Badge>
                            )}
                          </div>
                          {session.time && (
                            <Badge variant="outline" className="backdrop-blur-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {session.time}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {session.focus && (
                          <p className="text-sm text-muted-foreground">
                            {session.focus}
                          </p>
                        )}

                        {session.chair && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Chair:</span> {session.chair}
                          </div>
                        )}

                        {session.speakers && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Speakers:</span>
                            <ul className="mt-1 space-y-1">
                              {session.speakers.map((speaker: string, idx: number) => (
                                <li key={idx} className="ml-4 hover:text-primary transition-colors">• {speaker}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {session.panelists && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Panelists:</span>
                            <ul className="mt-1 space-y-1">
                              {session.panelists.map((panelist: string, idx: number) => (
                                <li key={idx} className="ml-4 hover:text-primary transition-colors">• {panelist}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}