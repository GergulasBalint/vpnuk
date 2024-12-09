import { useState, useEffect, useCallback } from 'react'
import { parseNewsFromPCMag } from '@/lib/pcmag-parser'

const PAGE_SIZE = 9

export function useNews() {
  const [news, setNews] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/news?page=${page}&limit=${PAGE_SIZE}`)
      const xmlData = await response.text()
      const articles = parseNewsFromPCMag(xmlData)
      
      setNews(prev => [...prev, ...articles])
      setHasMore(articles.length === PAGE_SIZE)
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  return {
    news,
    loading,
    hasMore,
    loadMore
  }
} 