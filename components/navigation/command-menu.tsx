"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Home,
  Info,
  Calendar,
  Rocket,
  Users,
  ArrowRight,
  Command,
  X,
  FileText
} from "lucide-react"

const commands = [
  { id: "home", label: "Home", icon: Home, action: () => scrollToSection("hero") },
  { id: "about", label: "About", icon: Info, action: () => scrollToSection("about") },
  { id: "sessions", label: "Sessions", icon: Calendar, action: () => scrollToSection("sessions") },
  { id: "posters", label: "Call for Posters", icon: FileText, action: () => scrollToSection("posters"), highlight: true },
  { id: "launches", label: "Launches", icon: Rocket, action: () => scrollToSection("launches") },
  { id: "speakers", label: "Speakers", icon: Users, action: () => scrollToSection("speakers") },
  { id: "register", label: "Register Now", icon: ArrowRight, action: () => scrollToSection("register"), highlight: true },
]

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }

      if (e.key === "Escape") {
        setIsOpen(false)
        setSearch("")
        setSelectedIndex(0)
      }

      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault()
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          )
        } else if (e.key === "ArrowUp") {
          e.preventDefault()
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          )
        } else if (e.key === "Enter") {
          e.preventDefault()
          const command = filteredCommands[selectedIndex]
          if (command) {
            command.action()
            setIsOpen(false)
            setSearch("")
            setSelectedIndex(0)
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex])

  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[101]"
          >
            <div className="bg-background/90 backdrop-blur-2xl border border-border/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/10">
                <Search className="w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground/40 text-sm"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-foreground/10 rounded-md transition-colors"
                >
                  <X className="w-4 h-4 text-foreground/40" />
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => {
                    const Icon = command.icon
                    const isSelected = index === selectedIndex

                    return (
                      <motion.button
                        key={command.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          command.action()
                          setIsOpen(false)
                          setSearch("")
                          setSelectedIndex(0)
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`
                          w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                          ${isSelected
                            ? "bg-foreground/10 text-foreground"
                            : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"}
                          ${command.highlight ? "font-medium" : ""}
                        `}
                      >
                        <Icon className={`w-4 h-4 ${command.highlight ? "text-primary" : ""}`} />
                        <span className="flex-1 text-left">{command.label}</span>
                        {isSelected && (
                          <span className="text-xs text-foreground/40">Enter</span>
                        )}
                      </motion.button>
                    )
                  })
                ) : (
                  <div className="px-4 py-8 text-center text-foreground/40 text-sm">
                    No results found for &quot;{search}&quot;
                  </div>
                )}
              </div>

              <div className="px-4 py-2 border-t border-border/10 flex items-center justify-between text-xs text-foreground/40">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-foreground/10 rounded">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-foreground/10 rounded">↵</kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-foreground/10 rounded">ESC</kbd>
                    Close
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}