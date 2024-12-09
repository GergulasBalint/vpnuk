import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/Navigation/ui/card'
import { Badge } from '@/components/Navigation/ui/badge'
import { Book, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface GuideCardProps {
  guide: {
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
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link href={`/guides/${guide.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <Badge 
              className={`bg-${guide.category.color}-100 text-${guide.category.color}-800`}
            >
              <div className="flex items-center gap-1">
                {guide.category.icon}
                {guide.category.name}
              </div>
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {guide.readingTime} min read
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-2">{guide.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {guide.excerpt}
          </p>
          <div className="flex items-center gap-1 mt-4 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            Updated {formatDistanceToNow(guide.updatedAt)} ago
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 