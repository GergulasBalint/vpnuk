import React from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  fallback?: string
  className?: string
}

export function OptimizedImage({ 
  src, 
  fallback = '/images/placeholder.jpg',
  className,
  ...props 
}: OptimizedImageProps) {
  const [error, setError] = React.useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={error ? fallback : src}
        onError={() => setError(true)}
        loading="lazy"
        {...props}
      />
      <div 
        className={cn(
          "absolute inset-0 bg-skeleton animate-pulse",
          error ? "hidden" : "block"
        )} 
      />
    </div>
  )
} 