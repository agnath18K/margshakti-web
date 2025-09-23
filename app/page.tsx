"use client"

import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SessionsSection } from "@/components/sections/sessions"
import { LaunchesSection } from "@/components/sections/launches"
import { SpeakersSection } from "@/components/sections/speakers"
import { PostersSection } from "@/components/sections/posters"
import { CursorGlow } from "@/components/interactive/cursor-glow"
import { ScrollProgress } from "@/components/interactive/scroll-progress"
import { InitialLoader } from "@/components/loading/initial-loader"
import { FloatingDots } from "@/components/navigation/floating-dots"
import { SmartCTA } from "@/components/navigation/smart-cta"
import { CommandMenu } from "@/components/navigation/command-menu"
import { PosterDeadlineReminder } from "@/components/navigation/poster-deadline-reminder"
import { PosterTicker } from "@/components/navigation/poster-ticker"
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation"

export default function Home() {
  useKeyboardNavigation()

  return (
    <div className="min-h-screen">
      <PosterTicker />

      <InitialLoader />

      <ScrollProgress />
      <CursorGlow />

      <FloatingDots />
      <SmartCTA />
      <CommandMenu />
      <PosterDeadlineReminder />

      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="sessions">
          <SessionsSection />
        </section>
        <section id="posters">
          <PostersSection />
        </section>
        <section id="launches">
          <LaunchesSection />
        </section>
        <section id="speakers">
          <SpeakersSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
