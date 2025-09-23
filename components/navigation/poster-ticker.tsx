"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileText, ArrowRight } from "lucide-react"

export function PosterTicker() {
  const [isVisible, setIsVisible] = useState(true)
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("posterTickerDismissed")
    if (dismissed) {
      setIsVisible(false)
      return
    }

    const deadline = new Date("2025-10-20")
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysLeft(diffDays > 0 ? diffDays : 0)

    if (diffDays < 0) {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("posterTickerDismissed", "true")
  }

  const scrollToPosters = () => {
    const element = document.getElementById("posters")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible || daysLeft < 0) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-r from-chart-4/10 via-primary/10 to-chart-4/10 border-b border-border/30"
        >
          <div className="container mx-auto px-4 py-1.5">
            <div className="flex items-center justify-center gap-3 text-xs">
              <FileText className="w-3 h-3 text-chart-4" />

              <div className="overflow-hidden flex-1 max-w-2xl">
                <motion.div
                  className="flex items-center gap-6 whitespace-nowrap"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    x: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  <span>
                    📢 Call for Posters is now open! Submit your research abstract by October 20, 2025
                  </span>
                  <span className="text-chart-4 font-semibold">
                    {daysLeft} days remaining
                  </span>
                  <span>
                    📢 Call for Posters is now open! Submit your research abstract by October 20, 2025
                  </span>
                  <span className="text-chart-4 font-semibold">
                    {daysLeft} days remaining
                  </span>
                </motion.div>
              </div>

              <button
                onClick={scrollToPosters}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-chart-4/20 hover:bg-chart-4/30 transition-colors text-chart-4 font-medium"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                onClick={handleDismiss}
                className="p-0.5 rounded-full hover:bg-muted transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-3 h-3 text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}