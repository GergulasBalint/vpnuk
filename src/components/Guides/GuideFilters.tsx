import React from 'react'
import { Button } from '@/components/Navigation/ui/button'
import { ScrollArea } from '@/components/Navigation/ui/scroll-area'
import { Shield, Tv, Book, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GuideFiltersProps {
  categories: Category[]
  selectedCategory: string | null
  onChange: (category: string | null) => void
}

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  color: string
}

export function GuideFilters({ 
  categories, 
  selectedCategory, 
  onChange 
}: GuideFiltersProps) {
  return (
    <ScrollArea className="h-[300px] rounded-md border p-4">
      <div className="space-y-4">
        <h2 className="text-sm font-semibold">Categories</h2>
        <div className="flex flex-col space-y-2">
          <Button
            variant="ghost"
            className={cn(
              "justify-start",
              !selectedCategory && "bg-accent"
            )}
            onClick={() => onChange(null)}
          >
            <Book className="mr-2 h-4 w-4" />
            All Guides
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className={cn(
                "justify-start",
                selectedCategory === category.id && "bg-accent"
              )}
              onClick={() => onChange(category.id)}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
} 