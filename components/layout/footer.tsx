import Link from "next/link"
import { eventData } from "@/data/event-data"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 mt-20">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">MargShakti</h3>
            <p className="text-sm text-muted-foreground">
              {eventData.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Event Details</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{eventData.venue}</span>
              </div>
              <div>{eventData.dates}</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@margshakti.in</span>
              </div>
              <div>IIT (BHU) Varanasi</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 MargShakti Industry Conclave. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}