import React from 'react'
import { NewsCard } from './NewsCard'
import { Skeleton } from '@/components/Navigation/ui/skeleton'
import { useInView } from 'react-intersection-observer'

interface NewsGridProps {
  news: Article[]
  loading?: boolean
}

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  publishedAt: Date
  url: string
}

export function NewsGrid({ news, loading }: NewsGridProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[500px]" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
      <div ref={ref} />
    </div>
  )
} 