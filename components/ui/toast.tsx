import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
}

export function Toast({ className, visible, children, ...props }: ToastProps) {
  return (
    <div
      className={cn(
        "fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none",
        "transition-all duration-300 transform",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0",
        className
      )}
      {...props}
    >
      <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg px-6 py-4">
        <p className="text-sm font-medium flex items-center gap-2">
          <span className="text-primary">ℹ️</span>
          {children}
        </p>
      </div>
    </div>
  )
}