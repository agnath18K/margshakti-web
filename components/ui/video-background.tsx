"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNetworkQuality } from "@/hooks/use-network-quality"

interface VideoBackgroundProps {
  src: string
  fallbackContent?: React.ReactNode
  overlay?: boolean
  className?: string
}

export function VideoBackground({
  src,
  fallbackContent,
  overlay = true,
  className = ""
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { shouldLoadVideo: networkAllowsVideo } = useNetworkQuality()

  const prefersReducedMotion = useRef(false)
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion.current) {
      setShouldLoadVideo(false)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion.current || !networkAllowsVideo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoadVideo) {
          setShouldLoadVideo(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("hero")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [shouldLoadVideo, networkAllowsVideo])

  useEffect(() => {
    if (!shouldLoadVideo || !videoRef.current) return

    const video = videoRef.current

    const handleCanPlay = () => {
      setIsLoading(false)
      setIsVisible(true)
      video.play().catch(() => {
        setHasError(true)
      })
    }

    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    video.load()

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [shouldLoadVideo])

  if (hasError || prefersReducedMotion.current || !networkAllowsVideo || !shouldLoadVideo) {
    return <>{fallbackContent}</>
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && fallbackContent}
      </AnimatePresence>

      <motion.div
        className={`absolute inset-0 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/video_bg_poster.jpg"
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace(".mp4", ".webm")} type="video/webm" />
        </video>

        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
        )}

        <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
      </motion.div>
    </>
  )
}