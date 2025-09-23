"use client"

import { useEffect } from "react"

const sections = ["hero", "about", "sessions", "launches", "speakers"]

export function useKeyboardNavigation() {
  useEffect(() => {
    let currentSectionIndex = 0

    const getCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i])
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSectionIndex = i
            break
          }
        }
      }
      return currentSectionIndex
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return
      }

      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault()
        currentSectionIndex = getCurrentSection()
        const nextIndex = Math.min(currentSectionIndex + 1, sections.length - 1)
        const nextSection = document.getElementById(sections[nextIndex])
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" })
        }
      } else if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault()
        currentSectionIndex = getCurrentSection()
        const prevIndex = Math.max(currentSectionIndex - 1, 0)
        const prevSection = document.getElementById(sections[prevIndex])
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: "smooth" })
        }
      } else if (e.key === "Home") {
        e.preventDefault()
        const homeSection = document.getElementById(sections[0])
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" })
        }
      } else if (e.key === "End") {
        e.preventDefault()
        const lastSection = document.getElementById(sections[sections.length - 1])
        if (lastSection) {
          lastSection.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])
}