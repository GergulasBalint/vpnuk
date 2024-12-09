import React from 'react'
import { Card, CardContent } from '@/components/Navigation/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/Navigation/ui/button'

interface VPNFiltersProps {
  filters: {
    minRating: number
    maxPrice: number
    features: {
      killSwitch: boolean
      noLogs: boolean
      p2p: boolean
    }
    sortBy: 'rating' | 'price' | 'servers'
  }
  onChange: (filters: VPNFiltersProps['filters']) => void
}

export function VPNFilters({ filters, onChange }: VPNFiltersProps) {
  return (
    <Card>
      <CardContent className="space-y-6">
        {/* Rating Filter */}
        <div className="space-y-2">
          <Label>Minimum Rating</Label>
          <Slider
            value={[filters.minRating]}
            min={0}
            max={5}
            step={0.5}
            onValueChange={([value]) => 
              onChange({ ...filters, minRating: value })
            }
          />
          <div className="text-sm text-muted-foreground">
            {filters.minRating} stars and above
          </div>
        </div>

        {/* Price Filter */}
        <div className="space-y-2">
          <Label>Maximum Monthly Price</Label>
          <Slider
            value={[filters.maxPrice]}
            min={1}
            max={15}
            step={1}
            onValueChange={([value]) => 
              onChange({ ...filters, maxPrice: value })
            }
          />
          <div className="text-sm text-muted-foreground">
            Up to ${filters.maxPrice}/month
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="space-y-4">
          <Label>Required Features</Label>
          {Object.entries(filters.features).map(([feature, enabled]) => (
            <div key={feature} className="flex items-center justify-between">
              <Label htmlFor={feature} className="cursor-pointer capitalize">
                {feature.replace(/([A-Z])/g, ' $1').trim()}
              </Label>
              <Switch
                id={feature}
                checked={enabled}
                onCheckedChange={(checked) =>
                  onChange({
                    ...filters,
                    features: { ...filters.features, [feature]: checked }
                  })
                }
              />
            </div>
          ))}
        </div>

        {/* Sort Options */}
        <div className="space-y-2">
          <Label>Sort By</Label>
          <div className="grid grid-cols-3 gap-2">
            {['rating', 'price', 'servers'].map((option) => (
              <Button
                key={option}
                variant={filters.sortBy === option ? 'default' : 'outline'}
                size="sm"
                className="capitalize"
                onClick={() => onChange({ ...filters, sortBy: option as any })}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 