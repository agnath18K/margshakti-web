"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PosterDeadlineReminder() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("posterReminderDismissed")
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    const deadline = new Date("2025-10-20")
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysLeft(diffDays > 0 ? diffDays : 0)

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 20000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    sessionStorage.setItem("posterReminderDismissed", "true")
  }

  const scrollToPosters = () => {
    const element = document.getElementById("posters")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      handleDismiss()
    }
  }

  const getUrgencyColor = () => {
    if (daysLeft <= 7) return "bg-red-500"
    if (daysLeft <= 14) return "bg-orange-500"
    return "bg-green-500"
  }

  const getUrgencyMessage = () => {
    if (daysLeft === 0) return "Last day to submit!"
    if (daysLeft === 1) return "1 day left!"
    if (daysLeft <= 7) return `Only ${daysLeft} days left!`
    if (daysLeft <= 14) return `${daysLeft} days remaining`
    return `${daysLeft} days to submit`
  }

  if (isDismissed || daysLeft < 0) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed right-6 bottom-24 z-40 max-w-[280px]"
        >
          <div className="relative bg-card/85 backdrop-blur-sm border border-chart-4/20 rounded-lg shadow-md p-3">
            {daysLeft <= 14 && (
              <div className="absolute -top-2 -right-2">
                <Badge className={`${getUrgencyColor()} text-white border-0 animate-pulse`}>
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Urgent
                </Badge>
              </div>
            )}

            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-chart-4" />
                <div className="flex-1">
                  <p className="font-medium text-xs">Poster Deadline: {getUrgencyMessage()}</p>
                </div>
              </div>


              {daysLeft > 0 && (
                <div className="space-y-1">
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className={`h-full ${getUrgencyColor()}`}
                      initial={{ width: "100%" }}
                      animate={{ width: `${Math.max(5, (30 - daysLeft) / 30 * 100)}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-chart-4 hover:bg-chart-4/90"
                  onClick={scrollToPosters}
                >
                  Submit Abstract
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:agnivesh.civ@iitbhu.ac.in?subject=Poster Submission – MargShakti 2025'}
                >
                  <span className="sr-only">Email</span>
                  Email
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}