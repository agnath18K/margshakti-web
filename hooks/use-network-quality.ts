"use client"

import { useEffect, useState } from "react"

type NetworkQuality = "fast" | "slow" | "unknown"

interface NetworkInformation extends EventTarget {
  downlink?: number
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g"
  rtt?: number
  saveData?: boolean
  addEventListener(
    type: "change",
    listener: EventListener | EventListenerObject
  ): void
  removeEventListener(
    type: "change",
    listener: EventListener | EventListenerObject
  ): void
}

declare global {
  interface Navigator {
    connection?: NetworkInformation
    mozConnection?: NetworkInformation
    webkitConnection?: NetworkInformation
  }
}

export function useNetworkQuality() {
  const [networkQuality, setNetworkQuality] = useState<NetworkQuality>("unknown")
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true)

  useEffect(() => {
    const getConnection = (): NetworkInformation | undefined => {
      return (
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection
      )
    }

    const assessNetworkQuality = (): NetworkQuality => {
      const connection = getConnection()

      if (!connection) {
        return "fast"
      }

      if (connection.saveData) {
        return "slow"
      }

      const effectiveType = connection.effectiveType
      if (effectiveType === "slow-2g" || effectiveType === "2g") {
        return "slow"
      }

      if (effectiveType === "3g") {
        const downlink = connection.downlink
        if (downlink && downlink < 1.5) {
          return "slow"
        }
      }

      const rtt = connection.rtt
      if (rtt && rtt > 500) {
        return "slow"
      }

      const downlink = connection.downlink
      if (downlink && downlink < 1) {
        return "slow"
      }

      return "fast"
    }

    const updateNetworkQuality = () => {
      const quality = assessNetworkQuality()
      setNetworkQuality(quality)
      setShouldLoadVideo(quality === "fast" || quality === "unknown")
    }

    updateNetworkQuality()

    const connection = getConnection()
    if (connection) {
      connection.addEventListener("change", updateNetworkQuality)
      return () => {
        connection.removeEventListener("change", updateNetworkQuality)
      }
    }
  }, [])

  return {
    networkQuality,
    shouldLoadVideo,
    isSlowConnection: networkQuality === "slow",
    isFastConnection: networkQuality === "fast"
  }
}