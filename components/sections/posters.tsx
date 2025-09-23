"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Trophy,
  Users,
  Target,
  Send,
  Clock,
  CheckCircle,
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  FileText
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const themes = [
  "Highways & Expressway Planning",
  "Freight Systems & PM GatiShakti",
  "Logistics & Supply Chains",
  "Urban Transport & City–Highway Integration",
  "Electric Mobility & Future Corridors",
  "Road Safety & AI-enabled Solutions",
  "Sustainable Pavements & Materials",
  "Inclusivity in Transport (People with disability, gender, mobility)"
]

const timeline = [
  { date: "20 Oct 2025", event: "Submission Deadline", icon: <Send className="w-4 h-4" /> },
  { date: "30 Oct 2025", event: "Acceptance Notification", icon: <CheckCircle className="w-4 h-4" /> },
  { date: "21-22 Nov 2025", event: "Poster Showcase at Conclave", icon: <Trophy className="w-4 h-4" /> }
]

const benefits = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Recognition",
    description: "Certificate signed by IIT (BHU) & MoRTH officials"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Networking",
    description: "Connect with government and industry leaders"
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Cash Prizes",
    description: "Top 3 Young Researchers awarded with cash prizes"
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Knowledge Sessions",
    description: "Access to all plenary & technical sessions"
  }
]

export function PostersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      gsap.utils.toArray(".poster-card").forEach((card, index: number) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      })

      gsap.utils.toArray(".theme-tag").forEach((tag, index: number) => {
        gsap.fromTo(
          tag as gsap.TweenTarget,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ".themes-container",
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
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background via-chart-4/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-chart-4/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-chart-4 to-primary text-white border-0">
            Call for Posters
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Young Researchers&apos; Poster Session
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase Your Research. Shape the Future of Highways, Logistics & Urban Mobility.
          </p>
        </div>

        <Card className="poster-card mb-8 bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="w-6 h-6 text-primary" />
              Posters Invited – MargShakti Conclave 2025
            </CardTitle>
            <CardDescription className="text-lg">
              A unique opportunity for Master&apos;s and PhD students from across India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Present your research to senior officials from MoRTH, NHAI, UP Government, and defence logistics.
              Interact with leading academics, industry leaders, and international experts at IIT (BHU), Varanasi
              on 21–22 November 2025.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm">
                <Target className="w-3 h-3 mr-1" />
                15 Posters Selected
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Award className="w-3 h-3 mr-1" />
                Top 3 Cash Prizes
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="w-3 h-3 mr-1" />
                UG/PG/PhD Students
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Card className="poster-card lg:col-span-2 bg-gradient-to-br from-card to-chart-4/10 border-chart-4/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-chart-4" />
                Research Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="themes-container flex flex-wrap gap-2">
                {themes.map((theme, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="theme-tag hover:bg-chart-4/20 transition-all cursor-default"
                  >
                    {theme}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We welcome submissions related to (but not limited to) these themes
              </p>
            </CardContent>
          </Card>

          <Card className="poster-card bg-gradient-to-br from-card to-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.date}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="poster-card bg-gradient-to-br from-card to-chart-5/10 border-chart-5/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-chart-5" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Who:</strong> UG/Master&apos;s/PhD students from Indian universities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>What:</strong> Extended abstract (max. 500 words)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Format:</strong> PDF, Times New Roman, 12pt, single spacing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Focus:</strong> Practical relevance for field implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="poster-card lg:col-span-2 bg-gradient-to-br from-card to-accent/10 border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                What You&apos;ll Gain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      {benefit.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{benefit.title}</p>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="poster-card mt-8 bg-gradient-to-r from-primary/10 to-chart-4/10 border-primary/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">How to Submit</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Send your abstract to <span className="font-mono text-primary">agnivesh.civ@iitbhu.ac.in</span> with
                subject line: <span className="font-semibold">&quot;Poster Submission – MargShakti 2025&quot;</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Include: Name, Institution, Program (UG/PG/PhD), Contact details
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-chart-4 hover:from-primary/90 hover:to-chart-4/90"
                  onClick={() => window.location.href = 'mailto:agnivesh.civ@iitbhu.ac.in?subject=Poster Submission – MargShakti 2025'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Submit Your Abstract
                </Button>
              </div>
              <p className="text-xs text-muted-foreground italic pt-2">
                Be part of the dialogue. Share your ideas. Inspire highways, logistics, and urban futures in the Pathways to Viksit Bharat 2047!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}