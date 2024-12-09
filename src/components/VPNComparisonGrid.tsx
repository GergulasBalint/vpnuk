import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/Navigation/ui/card"
import { Badge } from '@/components/Navigation/ui/badge'
import { Button } from '@/components/Navigation/ui/button'
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

interface VPNData {
  id: string
  name: string
  logo: string
  rating: number
  speed: string
  servers: number
  price: number
  specialOffer?: string
  features: string[]
}

export function VPNComparisonGrid() {
  const [vpnData, setVPNData] = useState<VPNData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVPNData()
  }, [])

  const fetchVPNData = async () => {
    try {
      const response = await fetch('/api/vpn-data') // Your API endpoint
      const data = await response.json()
      setVPNData(data)
    } catch (error) {
      console.error('Error fetching VPN data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {vpnData.map((vpn) => (
        <Card 
          key={vpn.id}
          className="group relative hover:shadow-lg transition-all duration-300"
        >
          <CardHeader>
            <div className="h-12 mb-4">
              <img 
                src={vpn.logo} 
                alt={`${vpn.name} logo`}
                className="h-full object-contain"
              />
            </div>
            <CardTitle className="flex items-center justify-between">
              {vpn.name}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < vpn.rating 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </CardTitle>
            {vpn.specialOffer && (
              <Badge variant="destructive" className="absolute top-4 right-4">
                {vpn.specialOffer}
              </Badge>
            )}
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm">
                  <p className="text-muted-foreground">Speed</p>
                  <p className="font-medium">{vpn.speed}</p>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Servers</p>
                  <p className="font-medium">{vpn.servers.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="hidden group-hover:block space-y-2">
                {vpn.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="text-center w-full">
              <span className="text-2xl font-bold">${vpn.price}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <Button className="w-full" variant="default">
              Read Review
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 