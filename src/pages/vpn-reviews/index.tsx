import React from 'react'
import { VPNReviewGrid } from '../../components/VPNReview/VPNReviewGrid'
import { VPNFilters } from '../../components/VPNReview/VPNFilters'
import { useVPNReviews } from '../../hooks/useVPNReviews'

export default function VPNReviewsPage() {
  const { reviews, loading, filters, setFilters } = useVPNReviews()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">VPN Reviews</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <VPNFilters filters={filters} onChange={setFilters} />
        </aside>

        {/* Reviews Grid */}
        <main className="lg:col-span-3">
          <VPNReviewGrid reviews={reviews} loading={loading} />
        </main>
      </div>
    </div>
  )
} 