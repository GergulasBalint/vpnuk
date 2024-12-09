import React from 'react'
import { GuideGrid } from '@/components/Guides/GuideGrid'
import { GuideFilters } from '@/components/Guides/GuideFilters'
import { Search } from '@/components/Navigation/ui/search'
import { useGuides } from '@/hooks/useGuides'

export default function GuidesPage() {
  const { 
    guides, 
    categories,
    selectedCategory,
    searchQuery,
    setSelectedCategory,
    setSearchQuery,
    loading 
  } = useGuides()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl font-bold">VPN Guides & Resources</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <Search 
              placeholder="Search guides..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <GuideFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          </aside>

          {/* Guide Grid */}
          <main className="flex-1">
            <GuideGrid guides={guides} loading={loading} />
          </main>
        </div>
      </div>
    </div>
  )
} 