"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "sessions", label: "Sessions" },
  { id: "posters", label: "Posters", highlight: true, badge: "New" },
  { id: "launches", label: "Launches" },
  { id: "speakers", label: "Speakers" },
]

export function FloatingDots() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredDot, setHoveredDot] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5
      setIsVisible(scrolled)

      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <div key={section.id} className="relative group">
                <button
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => setHoveredDot(section.id)}
                  onMouseLeave={() => setHoveredDot(null)}
                  className="relative p-2 transition-all duration-300"
                  aria-label={`Navigate to ${section.label}`}
                >
                  {section.highlight && section.badge && (
                    <motion.div
                      className="absolute -top-1 -right-1 bg-chart-4 text-white text-[8px] px-1 rounded-full font-bold z-10"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {section.badge}
                    </motion.div>
                  )}

                  <motion.div
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${activeSection === section.id
                        ? "bg-gradient-to-r from-primary to-chart-5"
                        : section.highlight
                          ? "bg-gradient-to-r from-chart-4/50 to-primary/50 hover:from-chart-4 hover:to-primary"
                          : "bg-white/30 hover:bg-white/50"}
                    `}
                    animate={{
                      scale: activeSection === section.id ? 1.2 : section.highlight ? [1, 1.1, 1] : 1,
                    }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: section.highlight ? 3 : 0.2, repeat: section.highlight && activeSection !== section.id ? Infinity : 0 }}
                  >
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-chart-5"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {hoveredDot === section.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap"
                      >
                        <div className="bg-background/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-xs">
                          {section.label}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 -z-10" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}