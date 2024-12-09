import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Navigation/ui/card'
import { Button } from '@/components/Navigation/ui/button'
import { Slider } from '@/components/Navigation/ui/slider'
import { Star } from 'lucide-react'
import { useRatings } from '@/hooks/useRatings'

interface RatingSubmissionProps {
  vpnId: string
}

export function RatingSubmission({ vpnId }: RatingSubmissionProps) {
  const { submitRating, userRating } = useRatings(vpnId)
  const [ratings, setRatings] = React.useState({
    speed: 0,
    reliability: 0,
    features: 0,
    support: 0,
    value: 0
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitRating(ratings)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rate this VPN</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(ratings).map(([category, value]) => (
            <div key={category} className="space-y-2">
              <label className="text-sm font-medium capitalize">
                {category}
              </label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[value]}
                  onValueChange={([newValue]) => 
                    setRatings(prev => ({
                      ...prev,
                      [category]: newValue
                    }))
                  }
                  max={5}
                  step={0.5}
                />
                <div className="flex items-center gap-1 min-w-[48px]">
                  <Star 
                    className={value > 0 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"} 
                    size={16} 
                  />
                  <span className="text-sm">{value}</span>
                </div>
              </div>
            </div>
          ))}
          <Button type="submit" className="w-full">
            Submit Rating
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 