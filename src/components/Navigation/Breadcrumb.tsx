import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumb() {
  const router = useRouter()
  const segments = router.asPath.split('/').filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1
          const title = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

          return (
            <React.Fragment key={segment}>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <li>
                {isLast ? (
                  <span className="font-medium">{title}</span>
                ) : (
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
} 