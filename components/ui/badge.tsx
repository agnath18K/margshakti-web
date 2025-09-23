import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "border-0 bg-gradient-to-r from-primary to-chart-5 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 neon-glow",
        secondary:
          "border-0 bg-gradient-to-br from-chart-3/10 to-chart-5/10 text-foreground hover:from-chart-3/20 hover:to-chart-5/20 shadow-lg shadow-chart-3/10 border border-chart-3/20",
        destructive:
          "border-0 bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground shadow-lg hover:shadow-xl",
        outline: "border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent text-foreground hover:from-primary/10 hover:to-chart-3/5 hover:border-chart-3/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
