import React from 'react'
import { NewsGrid } from '@/components/News/NewsGrid'
import { NewsletterSignup } from '@/components/News/NewsletterSignup'
import { useNews } from '@/hooks/useNews'
import { Loader2 } from 'lucide-react'

export default function NewsPage() {
  const { news, loading, hasMore, loadMore } = useNews()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-4xl font-bold">Latest VPN News</h1>
          <NewsletterSignup />
        </div>

        <NewsGrid news={news} />

        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Load more news'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 