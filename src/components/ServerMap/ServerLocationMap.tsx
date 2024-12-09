import React from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Tooltip } from '@/components/Navigation/ui/tooltip'
import { useTheme } from 'next-themes'

interface ServerLocationMapProps {
  locations: {
    country: string
    city: string
    lat: number
    lng: number
    servers: number
  }[]
}

export function ServerLocationMap({ locations }: ServerLocationMapProps) {
  const { theme } = useTheme()
  const [tooltipContent, setTooltipContent] = React.useState('')

  return (
    <div className="relative w-full aspect-[16/9]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 100,
        }}
      >
        <Geographies
          geography="/world-110m.json"
          fill={theme === 'dark' ? '#2a2a2a' : '#f0f0f0'}
          stroke={theme === 'dark' ? '#404040' : '#d4d4d4'}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="outline-none hover:opacity-75 transition-opacity"
              />
            ))
          }
        </Geographies>
        {locations.map((location) => (
          <Marker
            key={`${location.lat}-${location.lng}`}
            coordinates={[location.lng, location.lat]}
            onMouseEnter={() => {
              setTooltipContent(
                `${location.city}, ${location.country}\n${location.servers} servers`
              )
            }}
            onMouseLeave={() => {
              setTooltipContent('')
            }}
          >
            <circle
              r={4}
              fill="#3b82f6"
              className="animate-pulse"
            />
          </Marker>
        ))}
      </ComposableMap>
      {tooltipContent && (
        <Tooltip>
          <div className="whitespace-pre-line">
            {tooltipContent}
          </div>
        </Tooltip>
      )}
    </div>
  )
} 