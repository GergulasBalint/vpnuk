import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/Navigation/ui/table'
import { Check, X } from 'lucide-react'

interface VPNComparisonTableProps {
  vpns: VPN[]
}

interface VPN {
  id: string
  name: string
  logo: string
  pricing: {
    monthly: number
    annual: number
  }
  specifications: {
    servers: number
    countries: number
    simultaneousConnections: number
  }
  features: {
    killSwitch: boolean
    noLogs: boolean
    p2p: boolean
    splitTunneling: boolean
    adBlocking: boolean
  }
  speedTests: {
    download: number
    upload: number
    ping: number
  }
  devices: string[]
}

export function VPNComparisonTable({ vpns }: VPNComparisonTableProps) {
  return (
    <div className="rounded-lg border bg-card mt-8 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Feature</TableHead>
            {vpns.map(vpn => (
              <TableHead key={vpn.id} className="text-center">
                <div className="flex flex-col items-center gap-2">
                  <img 
                    src={vpn.logo} 
                    alt={vpn.name} 
                    className="h-8 w-auto"
                  />
                  <span>{vpn.name}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Pricing */}
          <TableRow>
            <TableCell className="font-medium">Monthly Price</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                ${vpn.pricing.monthly.toFixed(2)}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Annual Price (per month)</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                ${vpn.pricing.annual.toFixed(2)}
              </TableCell>
            ))}
          </TableRow>

          {/* Specifications */}
          <TableRow>
            <TableCell className="font-medium">Server Count</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                {vpn.specifications.servers.toLocaleString()}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Countries</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                {vpn.specifications.countries}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Simultaneous Connections</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                {vpn.specifications.simultaneousConnections}
              </TableCell>
            ))}
          </TableRow>

          {/* Speed Tests */}
          <TableRow>
            <TableCell className="font-medium">Download Speed (Mbps)</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                {vpn.speedTests.download}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Upload Speed (Mbps)</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                {vpn.speedTests.upload}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ping (ms)</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                {vpn.speedTests.ping}
              </TableCell>
            ))}
          </TableRow>

          {/* Features */}
          {Object.entries({
            killSwitch: "Kill Switch",
            noLogs: "No-Logs Policy",
            p2p: "P2P Support",
            splitTunneling: "Split Tunneling",
            adBlocking: "Ad Blocking"
          }).map(([key, label]) => (
            <TableRow key={key}>
              <TableCell className="font-medium">{label}</TableCell>
              {vpns.map(vpn => (
                <TableCell key={vpn.id} className="text-center">
                  {vpn.features[key as keyof typeof vpn.features] ? (
                    <Check className="h-4 w-4 mx-auto text-green-500" />
                  ) : (
                    <X className="h-4 w-4 mx-auto text-red-500" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {/* Supported Devices */}
          <TableRow>
            <TableCell className="font-medium">Supported Devices</TableCell>
            {vpns.map(vpn => (
              <TableCell key={vpn.id} className="text-center">
                <div className="flex flex-col gap-1">
                  {vpn.devices.map(device => (
                    <span key={device}>{device}</span>
                  ))}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
} 