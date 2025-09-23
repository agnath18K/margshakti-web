"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Sparkles, FileText, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SmartCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentCTA, setCurrentCTA] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const deadline = new Date("2025-10-20")
  const today = new Date()
  const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const showPosterCTA = daysLeft > 0 && daysLeft <= 60

  const ctas = showPosterCTA ? [
    { icon: FileText, text: "Submit Abstract", action: "posters", urgent: daysLeft <= 14 },
    { icon: Sparkles, text: "Register Now", action: "register", urgent: false }
  ] : [
    { icon: Sparkles, text: "Register Now", action: "register", urgent: false }
  ]

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (ctas.length <= 1) return

    const interval = setInterval(() => {
      setCurrentCTA((prev) => (prev + 1) % ctas.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [ctas.length])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const maxDistance = 30
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

    if (distance < 100) {
      const factor = Math.min(distance / 100, 1)
      mouseX.set((distanceX * factor * maxDistance) / 100)
      mouseY.set((distanceY * factor * maxDistance) / 100)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.button
            ref={buttonRef}
            style={{ x, y }}
            onClick={() => {
              const element = document.getElementById(ctas[currentCTA].action)
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-6 py-3 rounded-full font-medium text-primary-foreground overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-chart-3/90 to-chart-5/90 backdrop-blur-xl neon-glow" />

            <div className="absolute inset-0 rounded-full p-[1px] overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-chart-3 via-primary to-chart-5"
                animate={{
                  x: isHovered ? [0, 100, 0] : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            <motion.div
              className="absolute -inset-10 bg-gradient-to-r from-primary/30 via-chart-5/20 to-chart-3/30 rounded-full blur-2xl neon-glow"
              animate={{
                opacity: isHovered ? 1 : 0.5,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            {ctas[currentCTA].urgent && daysLeft && (
              <Badge className="absolute -top-2 -left-2 bg-red-500 text-white border-0 text-xs animate-pulse">
                <Clock className="w-3 h-3 mr-1" />
                {daysLeft}d left
              </Badge>
            )}

            <div className="relative flex items-center gap-2">
              <motion.div
                key={currentCTA}
                initial={{ rotate: -180, scale: 0 }}
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {ctas[currentCTA].icon === FileText ? (
                  <FileText className="w-4 h-4" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
              </motion.div>

              <motion.span
                key={`text-${currentCTA}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                {ctas[currentCTA].text}
              </motion.span>

              <motion.div
                animate={{
                  x: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            {isHovered && (
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary-foreground rounded-full"
                    initial={{
                      x: "50%",
                      y: "50%",
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.button>

          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30 pointer-events-none neon-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}