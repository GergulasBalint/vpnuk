import React from 'react'
import { useRouter } from 'next/router'
import { Search as SearchIcon, Loader2 } from 'lucide-react'
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/Navigation/ui/command'
import { useSearch } from '@/hooks/useSearch'
import { useHotkeys } from 'react-hotkeys-hook'

export function GlobalSearch() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { 
    query, 
    setQuery, 
    results, 
    isLoading 
  } = useSearch()

  useHotkeys('ctrl+k, cmd+k', (e) => {
    e.preventDefault()
    setOpen(true)
  })

  const handleSelect = (item: any) => {
    setOpen(false)
    router.push(item.url)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-1.5 text-sm text-muted-foreground rounded-md border hover:bg-accent"
      >
        <SearchIcon className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search VPNs, guides, news..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {isLoading ? (
            <div className="py-6 text-center">
              <Loader2 className="w-6 h-6 animate-spin mx-auto" />
            </div>
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              {results.vpns.length > 0 && (
                <CommandGroup heading="VPNs">
                  {results.vpns.map((vpn) => (
                    <CommandItem
                      key={vpn.id}
                      onSelect={() => handleSelect(vpn)}
                    >
                      <div className="flex items-center gap-2">
                        <img 
                          src={vpn.logo} 
                          alt={vpn.name}
                          className="w-6 h-6 object-contain"
                        />
                        {vpn.name}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {results.guides.length > 0 && (
                <CommandGroup heading="Guides">
                  {results.guides.map((guide) => (
                    <CommandItem
                      key={guide.id}
                      onSelect={() => handleSelect(guide)}
                    >
                      {guide.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {results.news.length > 0 && (
                <CommandGroup heading="News">
                  {results.news.map((article) => (
                    <CommandItem
                      key={article.id}
                      onSelect={() => handleSelect(article)}
                    >
                      {article.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
} 