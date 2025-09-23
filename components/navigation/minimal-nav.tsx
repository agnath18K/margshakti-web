"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Command, Menu, X } from "lucide-react"

const navItems = [
  { id: "about", label: "About" },
  { id: "sessions", label: "Sessions" },
  { id: "launches", label: "Launches" },
  { id: "speakers", label: "Speakers" },
]

export function MinimalNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const scrollTimer = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          if (currentScrollY < lastScrollY.current - 50 && currentScrollY > window.innerHeight) {
            setIsVisible(true)

            clearTimeout(scrollTimer.current)
            scrollTimer.current = setTimeout(() => {
              setIsVisible(false)
            }, 2000)
          } else if (currentScrollY > lastScrollY.current || currentScrollY < window.innerHeight) {
            setIsVisible(false)
          }

          lastScrollY.current = currentScrollY
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimer.current)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
      setIsVisible(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsVisible(false)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onKeyDown={handleKeyPress}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="bg-background/10 backdrop-blur-xl border-b border-white/10">
              <div className="container-width">
                <div className="flex items-center justify-between h-14">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-bold text-sm bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                  >
                    MargShakti
                  </motion.div>

                  <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => scrollToSection(item.id)}
                        className="text-xs text-white/60 hover:text-white transition-colors duration-200 relative group"
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-chart-3 to-chart-5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={() => {
                        const event = new KeyboardEvent("keydown", {
                          key: "k",
                          metaKey: true,
                          ctrlKey: true,
                        })
                        window.dispatchEvent(event)
                      }}
                      className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs"
                    >
                      <Command className="w-3 h-3" />
                      <span className="text-white/60">K</span>
                    </motion.button>

                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {isMobileMenuOpen ? (
                        <X className="w-5 h-5" />
                      ) : (
                        <Menu className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
                >
                  <div className="container-width py-4 space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                    <button
                      onClick={() => scrollToSection("register")}
                      className="block w-full text-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-chart-5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Register Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

    </>
  )
}