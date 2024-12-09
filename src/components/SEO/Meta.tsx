import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface MetaProps {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
  schema?: object
}

export function Meta({ 
  title, 
  description, 
  image, 
  type = 'website',
  date,
  schema
}: MetaProps) {
  const router = useRouter()
  const siteName = 'BestVPNUK'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const url = `https://bestvpnuk.com${router.asPath}`
  const defaultImage = 'https://bestvpnuk.com/og-image.jpg'

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bestvpnuk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Article Specific */}
      {date && <meta property="article:published_time" content={date} />}

      {/* Schema.org */}
      {schema && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  )
} 