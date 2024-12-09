import React from 'react'
import { VPNReviewCard } from './VPNReviewCard'
import { Skeleton } from '@/components/Navigation/ui/skeleton'

interface VPNReviewGridProps {
  reviews: any[]
  loading: boolean
}

export function VPNReviewGrid({ reviews, loading }: VPNReviewGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[600px] rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reviews.map((review) => (
        <VPNReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
} 