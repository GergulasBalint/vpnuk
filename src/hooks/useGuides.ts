import { useState, useEffect } from 'react'
import { Shield, Tv, Book, Lock } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'vpn-basics',
    name: 'VPN Basics',
    icon: <Book className="h-4 w-4" />,
    color: 'blue'
  },
  {
    id: 'security',
    name: 'Security Tips',
    icon: <Shield className="h-4 w-4" />,
    color: 'green'
  },
  {
    id: 'streaming',
    name: 'Streaming Guides',
    icon: <Tv className="h-4 w-4" />,
    color: 'purple'
  },
  {
    id: 'privacy',
    name: 'Privacy Tutorials',
    icon: <Lock className="h-4 w-4" />,
    color: 'red'
  }
]

export function useGuides() {
  const [guides, setGuides] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchGuides()
  }, [selectedCategory, searchQuery])

  const fetchGuides = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/guides')
      const data = await response.json()
      
      let filteredGuides = data
      
      // Filter by category
      if (selectedCategory) {
        filteredGuides = filteredGuides.filter(
          (guide: any) => guide.category.id === selectedCategory
        )
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        filteredGuides = filteredGuides.filter(
          (guide: any) => 
            guide.title.toLowerCase().includes(query) ||
            guide.excerpt.toLowerCase().includes(query)
        )
      }
      
      setGuides(filteredGuides)
    } catch (error) {
      console.error('Error fetching guides:', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    guides,
    categories: CATEGORIES,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery,
    loading
  }
} 