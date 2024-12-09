import { GetServerSideProps } from 'next'
import { getAllVPNs, getAllArticles, getAllGuides } from '@/lib/api'

const generateSitemap = (pages: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => `
        <url>
          <loc>https://bestvpnuk.com${page}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>
  `
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const vpns = await getAllVPNs()
  const articles = await getAllArticles()
  const guides = await getAllGuides()

  const pages = [
    '',
    '/vpn-reviews',
    '/guides',
    '/news',
    '/compare',
    '/methodology',
    '/about',
    '/contact',
    ...vpns.map(vpn => `/vpn-reviews/${vpn.slug}`),
    ...articles.map(article => `/news/${article.slug}`),
    ...guides.map(guide => `/guides/${guide.slug}`)
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(pages))
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {} 