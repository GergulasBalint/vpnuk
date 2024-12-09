import { useState, useEffect } from 'react'
import { useDataFetching } from './useDataFetching'

interface SearchResults {
  vpns: any[]
  guides: any[]
  news: any[]
}

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResults>({ vpns: [], guides: [], news: [] })
  const [isLoading, setIsLoading] = useState(false)
  const { fetchData } = useDataFetching()

  useEffect(() => {
    if (!query) {
      setResults({ vpns: [], guides: [], news: [] })
      return
    }

    const searchData = async () => {
      setIsLoading(true)
      const data = await fetchData<SearchResults>(`/api/search?q=${query}`)
      setResults(data || { vpns: [], guides: [], news: [] })
      setIsLoading(false)
    }

    const debounce = setTimeout(searchData, 300)
    return () => clearTimeout(debounce)
  }, [query, fetchData])

  return { query, setQuery, results, isLoading }
} 