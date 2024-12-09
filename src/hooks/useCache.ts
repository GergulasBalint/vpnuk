import { useState, useEffect } from 'react'

interface CacheOptions {
  key: string
  ttl?: number // Time to live in milliseconds
}

export function useCache<T>({ key, ttl = 1000 * 60 * 5 }: CacheOptions) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const cached = localStorage.getItem(key)
    if (cached) {
      const { value, timestamp } = JSON.parse(cached)
      const isExpired = Date.now() - timestamp > ttl
      if (!isExpired) {
        setData(value)
      } else {
        localStorage.removeItem(key)
      }
    }
  }, [key, ttl])

  const updateCache = (newData: T) => {
    const cacheData = {
      value: newData,
      timestamp: Date.now()
    }
    localStorage.setItem(key, JSON.stringify(cacheData))
    setData(newData)
  }

  const clearCache = () => {
    localStorage.removeItem(key)
    setData(null)
  }

  return { data, updateCache, clearCache }
} 