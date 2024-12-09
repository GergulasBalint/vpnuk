import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/Navigation/ui/card'
import { Badge } from '@/components/Navigation/ui/badge'
import { Button } from '@/components/Navigation/ui/button'
import { Star, MapPin, Server, Shield } from 'lucide-react'
import dynamic from 'next/dynamic'

const WorldMap = dynamic(() => import('@/components/VPNReview/WorldMap'), { ssr: false })

interface VPNReviewCardProps {
  review: {
    id: string
    name: string
    logo: string
    rating: {
      overall: number
      speed: number
      features: number
      privacy: number
      value: number
    }
    pros: string[]
    cons: string[]
    serverLocations: {
      country: string
      lat: number
      lng: number
    }[]
    specifications: {
      servers: number
      countries: number
      simultaneousConnections: number
      killSwitch: boolean
      noLogs: boolean
    }
    pricing: {
      monthly: number
      annual: number
      biennial: number
    }
  }
}

export function VPNReviewCard({ review }: VPNReviewCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <img 
            src={review.logo} 
            alt={`${review.name} logo`}
            className="h-12 object-contain"
          />
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">{review.rating.overall.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Pros & Cons */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Pros</h3>
            <ul className="space-y-1">
              {review.pros.map((pro, i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Cons</h3>
            <ul className="space-y-1">
              {review.cons.map((con, i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div>
          <h3 className="font-semibold mb-2">Rating Breakdown</h3>
          <div className="space-y-2">
            {Object.entries(review.rating).map(([key, value]) => (
              key !== 'overall' && (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-sm capitalize w-20">{key}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${(value / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{value.toFixed(1)}</span>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Server Map */}
        <div>
          <h3 className="font-semibold mb-2">Server Locations</h3>
          <div className="h-48 rounded-lg overflow-hidden">
            <WorldMap locations={review.serverLocations} />
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{review.specifications.countries} Countries</span>
            <Server className="w-4 h-4 ml-4" />
            <span>{review.specifications.servers.toLocaleString()} Servers</span>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h3 className="font-semibold mb-2">Key Features</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm">
              <p className="text-muted-foreground">Simultaneous Connections</p>
              <p className="font-medium">{review.specifications.simultaneousConnections}</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Security Features</p>
              <div className="flex gap-2">
                {review.specifications.killSwitch && (
                  <Badge variant="outline">Kill Switch</Badge>
                )}
                {review.specifications.noLogs && (
                  <Badge variant="outline">No Logs</Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div>
          <h3 className="font-semibold mb-2">Pricing Plans</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(review.pricing).map(([plan, price]) => (
              <div key={plan} className="text-center p-3 rounded-lg border">
                <p className="text-sm text-muted-foreground capitalize">
                  {plan}
                </p>
                <p className="font-bold mt-1">
                  ${price.toFixed(2)}
                  <span className="text-sm font-normal text-muted-foreground">/mo</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Read Full Review</Button>
      </CardFooter>
    </Card>
  )
} 