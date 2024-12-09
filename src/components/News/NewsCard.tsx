import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/Navigation/ui/card'
import { Badge } from '@/components/Navigation/ui/badge'
import { Button } from '@/components/Navigation/ui/button'
import { Calendar, Share2, Twitter, Facebook, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { toast } from 'sonner'

interface NewsCardProps {
  article: {
    id: string
    title: string
    excerpt: string
    image: string
    category: string
    publishedAt: Date
    url: string
  }
}

export function NewsCard({ article }: NewsCardProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(article.url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(article.url)}`
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(article.url)
    toast.success('Link copied to clipboard')
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <img 
            src={article.image} 
            alt={article.title}
            className="object-cover w-full h-full rounded-t-lg"
          />
          <Badge 
            className="absolute top-4 left-4"
            variant="secondary"
          >
            {article.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          {formatDistanceToNow(article.publishedAt)} ago
        </div>

        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold hover:text-primary transition-colors mb-3">
            {article.title}
          </h3>
        </Link>

        <p className="text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>

      <CardFooter className="border-t pt-6">
        <div className="flex items-center gap-2 w-full">
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open(shareUrls.twitter, '_blank')}
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open(shareUrls.facebook, '_blank')}
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={copyLink}
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          <Button className="ml-auto" asChild>
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
} 