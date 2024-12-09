import React from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = 'div'
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  )
} 