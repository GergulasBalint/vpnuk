import { useCallback } from 'react'
import { useToast } from '@/components/Navigation/ui/use-toast'
import { useCache } from '@/hooks/useCache'
import { useLoadingStore } from '@/stores/loading'
import { useErrorStore } from '@/stores/error'

interface FetchOptions {
  cacheKey?: string
  cacheTTL?: number
  revalidate?: boolean
}

export function useDataFetching() {
  const { toast } = useToast()
  const { setLoading } = useLoadingStore()
  const { setError } = useErrorStore()

  const fetchData = useCallback(async <T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<T | null> => {
    const { cacheKey, cacheTTL, revalidate = false } = options
    const cache = cacheKey ? useCache<T>({ key: cacheKey, ttl: cacheTTL }) : null

    try {
      // Check cache first
      if (!revalidate && cache?.data) {
        return cache.data
      }

      setLoading(true)
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      // Update cache if needed
      if (cache) {
        cache.updateCache(data)
      }
      
      return data
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred'
      setError(message)
      toast.error(message)
      return null
    } finally {
      setLoading(false)
    }
  }, [setLoading, setError, toast])

  return { fetchData }
} 