import React from 'react'
import { GuideCard } from './GuideCard'
import { Skeleton } from '@/components/Navigation/ui/skeleton'

interface GuideGridProps {
  guides: Guide[]
  loading: boolean
}

interface Guide {
  id: string
  slug: string
  title: string
  excerpt: string
  category: {
    name: string
    icon: React.ReactNode
    color: string
  }
  readingTime: number
  updatedAt: Date
}

export function GuideGrid({ guides, loading }: GuideGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[300px]" />
        ))}
      </div>
    )
  }

  if (guides.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No guides found matching your criteria
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  )
} 