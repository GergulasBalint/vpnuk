import { useState, useEffect } from 'react'
import { parseVPNReviews } from '@/lib/pcmag-parser'

interface VPNReview {
  id: string
  name: string
  logo: string
  rating: {
    overall: number
    speed: number
    features: number
    privacy: number
    value: number
  }
  pricing: {
    monthly: number
    annual: number
    biennial: number
  }
  specifications: {
    servers: number
    countries: number
    simultaneousConnections: number
    killSwitch: boolean
    noLogs: boolean
    p2p: boolean
  }
}

export function useVPNReviews() {
  const [reviews, setReviews] = useState<VPNReview[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    minRating: 3.5,
    maxPrice: 10,
    features: {
      killSwitch: false,
      noLogs: false,
      p2p: false
    },
    sortBy: 'rating' as 'rating' | 'price' | 'servers'
  })

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/pcmag-feed')
      const xmlData = await response.text()
      const parsedReviews = parseVPNReviews(xmlData)
      setReviews(parsedReviews)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredReviews = reviews
    .filter(review => (
      review.rating.overall >= filters.minRating &&
      review.pricing.monthly <= filters.maxPrice &&
      (!filters.features.killSwitch || review.specifications.killSwitch) &&
      (!filters.features.noLogs || review.specifications.noLogs) &&
      (!filters.features.p2p || review.specifications.p2p)
    ))
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating.overall - a.rating.overall
        case 'price':
          return a.pricing.monthly - b.pricing.monthly
        case 'servers':
          return b.specifications.servers - a.specifications.servers
        default:
          return 0
      }
    })

  return {
    reviews: filteredReviews,
    loading,
    filters,
    setFilters
  }
} 